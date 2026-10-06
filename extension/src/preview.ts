import { DataSource } from '@/ast/entity/data-source';
import { Configuration } from '@/util/configuration';
import { stripTemplateExtension } from '@/util/file';
import { runTemplateText } from '@/util/template';
import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { LANGUAGES } from './generated/languages';

const SCHEME = 'cogen-preview';
const PROJECT_FILE = 'cogen.properties';

interface PreviewSession {
  template: vscode.Uri;
  table: string | undefined;
  uri: vscode.Uri;
  content: string;
}

class PreviewProvider implements vscode.TextDocumentContentProvider {
  private readonly changed = new vscode.EventEmitter<vscode.Uri>();
  readonly onDidChange = this.changed.event;
  readonly sessions = new Map<string, PreviewSession>();

  provideTextDocumentContent(uri: vscode.Uri): string {
    return this.sessions.get(uri.toString())?.content ?? '';
  }

  update(session: PreviewSession) {
    this.sessions.set(session.uri.toString(), session);
    this.changed.fire(session.uri);
  }
}

/** Configuration read from the project file, with paths relative to it */
async function loadConfiguration(template: vscode.Uri): Promise<Configuration> {
  const configuration = new Configuration();
  const projectFile = findProjectFile(template);
  if (!projectFile) {
    configuration.setTemplatePath(path.dirname(template.fsPath));
  } else {
    const base = path.dirname(projectFile);
    configuration.setProjectFile(projectFile);
    await configuration.load();
    configuration.setTemplatePath(
      path.resolve(base, configuration.getTemplatePath()),
    );
    if (configuration.getInputFile()) {
      configuration.setInputFile(
        path.resolve(base, configuration.getInputFile()),
      );
    }
  }
  const settings = vscode.workspace.getConfiguration('cogen', template);
  const folder =
    vscode.workspace.getWorkspaceFolder(template)?.uri.fsPath ?? '';
  const inputFile = settings.get<string>('inputFile');
  if (!configuration.getInputFile() && inputFile) {
    configuration.setInputFile(path.resolve(folder, inputFile));
  }
  configuration.legacy =
    configuration.legacy || settings.get<boolean>('legacy', false);
  return configuration;
}

function findProjectFile(template: vscode.Uri): string | undefined {
  const settings = vscode.workspace.getConfiguration('cogen', template);
  const folder = vscode.workspace.getWorkspaceFolder(template)?.uri.fsPath;
  const configured = settings.get<string>('projectFile');
  if (configured) {
    return path.resolve(folder ?? path.dirname(template.fsPath), configured);
  }
  let dir = path.dirname(template.fsPath);
  for (;;) {
    const candidate = path.join(dir, PROJECT_FILE);
    if (fs.existsSync(candidate)) {
      return candidate;
    }
    const parent = path.dirname(dir);
    if (parent === dir || (folder && path.relative(folder, dir) === '')) {
      return undefined;
    }
    dir = parent;
  }
}

async function chooseInputFile(configuration: Configuration): Promise<boolean> {
  if (
    configuration.getInputFile() &&
    fs.existsSync(configuration.getInputFile())
  ) {
    return true;
  }
  const picked = await vscode.window.showOpenDialog({
    title: 'Select the modeling SQL file',
    filters: { SQL: ['sql'] },
    canSelectMany: false,
  });
  if (!picked?.[0]) {
    return false;
  }
  configuration.setInputFile(picked[0].fsPath);
  return true;
}

/** Template path relative to the template directory, used as file name template */
function filenameTemplate(
  configuration: Configuration,
  template: vscode.Uri,
): string {
  const relative = path.relative(
    configuration.getTemplatePath(),
    template.fsPath,
  );
  return relative.startsWith('..') || path.isAbsolute(relative)
    ? path.basename(template.fsPath)
    : relative;
}

function hostLanguage(languageId: string): string {
  return (
    LANGUAGES.find((language) => language.id === languageId)?.hostLanguage ??
    'plaintext'
  );
}

export function registerPreview(
  context: vscode.ExtensionContext,
  isTemplateDocument: (document: vscode.TextDocument) => boolean,
) {
  const provider = new PreviewProvider();
  const output = vscode.window.createOutputChannel('Cogen');
  const inputFiles = new Map<string, string>();
  const timers = new Map<string, NodeJS.Timeout>();

  const render = async (session: PreviewSession) => {
    const document = await vscode.workspace.openTextDocument(session.template);
    const configuration = await loadConfiguration(session.template);
    const rememberedInput = inputFiles.get(session.template.toString());
    if (!configuration.getInputFile() && rememberedInput) {
      configuration.setInputFile(rememberedInput);
    }
    const messages: string[] = [];
    try {
      const sql = await fs.promises.readFile(
        configuration.getInputFile(),
        'utf8',
      );
      const content = await runTemplateText(sql, document.getText(), {
        filename: filenameTemplate(configuration, session.template),
        configuration,
        legacy: configuration.legacy,
        logger: { addMessage: (message) => messages.push(message) },
        tableFilter: session.table
          ? (table) => table.getName() === session.table
          : undefined,
      });
      provider.update({ ...session, content });
    } catch (error) {
      messages.push(error instanceof Error ? error.message : String(error));
      output.appendLine(
        `[${new Date().toLocaleTimeString()}] ${session.template.fsPath}`,
      );
      messages.forEach((message) => output.appendLine('  ' + message));
      provider.update({
        ...session,
        content: `Failed to render the template:\n\n${messages.join('\n')}\n`,
      });
    }
  };

  /** `table` skips the table picker: a table name, or `*` for all tables */
  const open = async (
    uri?: vscode.Uri,
    table?: unknown,
  ): Promise<vscode.Uri | undefined> => {
    const editor = vscode.window.activeTextEditor;
    const template = uri ?? editor?.document.uri;
    if (!template) {
      return undefined;
    }
    const document = await vscode.workspace.openTextDocument(template);
    if (!isTemplateDocument(document)) {
      vscode.window.showWarningMessage(
        'The active file is not a cogen template.',
      );
      return undefined;
    }
    const configuration = await loadConfiguration(template);
    if (!(await chooseInputFile(configuration))) {
      return undefined;
    }
    inputFiles.set(template.toString(), configuration.getInputFile());

    const dataSource = new DataSource(
      configuration,
      await fs.promises.readFile(configuration.getInputFile(), 'utf8'),
    );
    const messages: string[] = [];
    dataSource.setLogger({ addMessage: (message) => messages.push(message) });
    try {
      await dataSource.load(true);
    } catch (error) {
      vscode.window.showErrorMessage(
        `Failed to parse ${path.basename(configuration.getInputFile())}: ${messages[0] ?? error}`,
      );
      return undefined;
    }
    const all = '$(list-flat) All tables';
    const picked =
      typeof table === 'string'
        ? table === '*'
          ? all
          : table
        : await vscode.window.showQuickPick(
            [all, ...dataSource.getTables().map((item) => item.getName())],
            { title: 'Preview template for table', placeHolder: 'Table name' },
          );
    if (!picked) {
      return undefined;
    }
    const tableName = picked === all ? undefined : picked;
    const name = stripTemplateExtension(path.basename(template.fsPath));
    const uriPath = `/${tableName ?? 'all'}/${name.replace(/\$\[|\]/g, '_')}`;
    const previewUri = vscode.Uri.from({
      scheme: SCHEME,
      path: uriPath,
      query: template.toString(),
    });
    const session = {
      template,
      table: tableName,
      uri: previewUri,
      content: '',
    };
    await render(session);
    const previewDocument = await vscode.workspace.openTextDocument(previewUri);
    await vscode.languages.setTextDocumentLanguage(
      previewDocument,
      hostLanguage(document.languageId),
    );
    await vscode.window.showTextDocument(previewDocument, {
      viewColumn: vscode.ViewColumn.Beside,
      preserveFocus: true,
      preview: true,
    });
    return previewUri;
  };

  const refresh = (template?: vscode.Uri, delay = 0) => {
    for (const session of provider.sessions.values()) {
      if (template && session.template.toString() !== template.toString()) {
        continue;
      }
      const key = session.uri.toString();
      clearTimeout(timers.get(key));
      timers.set(
        key,
        setTimeout(() => {
          timers.delete(key);
          render(provider.sessions.get(key) ?? session);
        }, delay),
      );
    }
  };

  context.subscriptions.push(
    output,
    vscode.workspace.registerTextDocumentContentProvider(SCHEME, provider),
    vscode.commands.registerCommand('cogen.preview', open),
    vscode.commands.registerCommand('cogen.previewRefresh', () => refresh()),
    vscode.workspace.onDidChangeTextDocument((event) => {
      if (isTemplateDocument(event.document)) {
        refresh(event.document.uri, 400);
      }
    }),
    vscode.workspace.onDidSaveTextDocument((document) => {
      // the modeling SQL or project file changed: refresh every preview
      if (!isTemplateDocument(document)) {
        refresh(undefined, 0);
      }
    }),
    vscode.workspace.onDidCloseTextDocument((document) => {
      if (document.uri.scheme === SCHEME) {
        provider.sessions.delete(document.uri.toString());
      }
    }),
  );
}
