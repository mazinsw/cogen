import * as path from 'path';
import * as vscode from 'vscode';
import {
  TOKEN_TYPES,
  TemplateAnalysis,
  TemplateBlock,
  analyzeTemplate,
  getDiagnostics,
  getFoldingRanges,
  getMatchingCommands,
  getSemanticTokens,
  Range as CoreRange,
} from './core/analysis';
import { CompletionKind, getCompletions, getHover } from './core/commands';
import { LANGUAGES, PLAIN_LANGUAGE_ID } from './generated/languages';
import { registerPreview } from './preview';

const LANGUAGE_IDS = new Set(LANGUAGES.map((language) => language.id));
const SELECTOR: vscode.DocumentSelector = LANGUAGES.map((language) => ({
  language: language.id,
}));
const LEGEND = new vscode.SemanticTokensLegend([...TOKEN_TYPES], []);

export function isTemplateDocument(document: vscode.TextDocument): boolean {
  return LANGUAGE_IDS.has(document.languageId);
}

/* ---------------------------------------------------------------------------
 * Parse cache, one analysis per document version
 * ------------------------------------------------------------------------- */

const cache = new Map<
  string,
  { version: number; analysis: TemplateAnalysis }
>();

function analysisOf(document: vscode.TextDocument): TemplateAnalysis {
  const key = document.uri.toString();
  const cached = cache.get(key);
  if (cached?.version === document.version) {
    return cached.analysis;
  }
  const analysis = analyzeTemplate(document.getText());
  cache.set(key, { version: document.version, analysis });
  return analysis;
}

function toRange(range: CoreRange): vscode.Range {
  return new vscode.Range(
    range.start.line,
    range.start.character,
    range.end.line,
    range.end.character,
  );
}

/* ---------------------------------------------------------------------------
 * Diagnostics
 * ------------------------------------------------------------------------- */

function registerDiagnostics(context: vscode.ExtensionContext) {
  const collection = vscode.languages.createDiagnosticCollection('cogen');
  const timers = new Map<string, NodeJS.Timeout>();

  const validate = (document: vscode.TextDocument) => {
    if (!isTemplateDocument(document)) {
      collection.delete(document.uri);
      return;
    }
    const diagnostics = getDiagnostics(analysisOf(document)).map((item) => {
      const diagnostic = new vscode.Diagnostic(
        toRange(item.range),
        item.message,
        vscode.DiagnosticSeverity.Error,
      );
      diagnostic.source = 'cogen';
      return diagnostic;
    });
    collection.set(document.uri, diagnostics);
  };

  const schedule = (document: vscode.TextDocument) => {
    const key = document.uri.toString();
    clearTimeout(timers.get(key));
    timers.set(
      key,
      setTimeout(() => {
        timers.delete(key);
        validate(document);
      }, 200),
    );
  };

  vscode.workspace.textDocuments.forEach(validate);
  context.subscriptions.push(
    collection,
    vscode.workspace.onDidOpenTextDocument(validate),
    vscode.workspace.onDidChangeTextDocument((event) =>
      schedule(event.document),
    ),
    vscode.workspace.onDidCloseTextDocument((document) => {
      collection.delete(document.uri);
      cache.delete(document.uri.toString());
    }),
  );
}

/* ---------------------------------------------------------------------------
 * Language features
 * ------------------------------------------------------------------------- */

const COMPLETION_KINDS: Record<CompletionKind, vscode.CompletionItemKind> = {
  level: vscode.CompletionItemKind.Module,
  property: vscode.CompletionItemKind.Property,
  control: vscode.CompletionItemKind.Keyword,
  type: vscode.CompletionItemKind.TypeParameter,
  attribute: vscode.CompletionItemKind.EnumMember,
};

function toSymbol(block: TemplateBlock): vscode.DocumentSymbol {
  const symbol = new vscode.DocumentSymbol(
    block.label,
    block.kind,
    block.kind.includes('each')
      ? vscode.SymbolKind.Array
      : vscode.SymbolKind.Boolean,
    toRange(block.range),
    toRange(block.header),
  );
  symbol.children = block.children.map(toSymbol);
  return symbol;
}

function registerProviders(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerDocumentSemanticTokensProvider(
      SELECTOR,
      {
        provideDocumentSemanticTokens(document) {
          const builder = new vscode.SemanticTokensBuilder(LEGEND);
          for (const token of getSemanticTokens(analysisOf(document))) {
            builder.push(
              token.line,
              token.character,
              token.length,
              TOKEN_TYPES.indexOf(token.type),
            );
          }
          return builder.build();
        },
      },
      LEGEND,
    ),
    vscode.languages.registerFoldingRangeProvider(SELECTOR, {
      provideFoldingRanges(document) {
        return getFoldingRanges(analysisOf(document)).map(
          (range) => new vscode.FoldingRange(range.start, range.end),
        );
      },
    }),
    vscode.languages.registerDocumentHighlightProvider(SELECTOR, {
      provideDocumentHighlights(document, position) {
        return getMatchingCommands(analysisOf(document), position).map(
          (range) => new vscode.DocumentHighlight(toRange(range)),
        );
      },
    }),
    vscode.languages.registerDocumentSymbolProvider(SELECTOR, {
      provideDocumentSymbols(document) {
        return analysisOf(document).blocks.map(toSymbol);
      },
    }),
    vscode.languages.registerCompletionItemProvider(
      SELECTOR,
      {
        provideCompletionItems(document, position) {
          const line = document.lineAt(position.line).text;
          const result = getCompletions(line, position.character);
          if (!result) {
            return undefined;
          }
          const range = new vscode.Range(
            position.line,
            position.character - result.prefixLength,
            position.line,
            position.character,
          );
          return result.items.map((entry) => {
            const item = new vscode.CompletionItem(
              entry.label,
              COMPLETION_KINDS[entry.kind],
            );
            item.range = range;
            if (entry.snippet) {
              item.insertText = new vscode.SnippetString(entry.snippet);
            }
            if (entry.documentation) {
              item.documentation = new vscode.MarkdownString(
                entry.documentation,
              );
            }
            return item;
          });
        },
      },
      '.',
      '[',
      '(',
      '|',
      '&',
      '~',
    ),
    vscode.languages.registerHoverProvider(SELECTOR, {
      provideHover(document, position) {
        const line = document.lineAt(position.line).text;
        const hover = getHover(line, position.character);
        if (!hover) {
          return undefined;
        }
        return new vscode.Hover(
          new vscode.MarkdownString(hover.markdown),
          new vscode.Range(
            position.line,
            hover.start,
            position.line,
            hover.end,
          ),
        );
      },
    }),
  );
}

/* ---------------------------------------------------------------------------
 * Legacy templates without the .cgn suffix, opted in by cogen.templatePaths
 * ------------------------------------------------------------------------- */

export function languageForFileName(fileName: string): string {
  const name = path
    .basename(fileName)
    .toLowerCase()
    .replace(/\.cgn$/, '');
  let best: { id: string; length: number } | undefined;
  for (const language of LANGUAGES) {
    for (const extension of language.extensions) {
      if (
        name.endsWith('.' + extension) &&
        extension.length > (best?.length ?? 0)
      ) {
        best = { id: language.id, length: extension.length };
      }
    }
  }
  return best?.id ?? PLAIN_LANGUAGE_ID;
}

function isInTemplatePath(document: vscode.TextDocument): boolean {
  const folder = vscode.workspace.getWorkspaceFolder(document.uri);
  if (!folder || document.uri.scheme !== 'file') {
    return false;
  }
  const paths = vscode.workspace
    .getConfiguration('cogen', document.uri)
    .get<string[]>('templatePaths', []);
  return paths.some((templatePath) => {
    const relative = path.relative(
      path.resolve(folder.uri.fsPath, templatePath),
      document.uri.fsPath,
    );
    return relative && !relative.startsWith('..') && !path.isAbsolute(relative);
  });
}

function registerTemplatePaths(context: vscode.ExtensionContext) {
  const apply = (document: vscode.TextDocument) => {
    if (isTemplateDocument(document) || !isInTemplatePath(document)) {
      return;
    }
    vscode.languages.setTextDocumentLanguage(
      document,
      languageForFileName(document.fileName),
    );
  };
  vscode.workspace.textDocuments.forEach(apply);
  context.subscriptions.push(
    vscode.workspace.onDidOpenTextDocument(apply),
    vscode.workspace.onDidChangeConfiguration((event) => {
      if (event.affectsConfiguration('cogen.templatePaths')) {
        vscode.workspace.textDocuments.forEach(apply);
      }
    }),
  );
}

export function activate(context: vscode.ExtensionContext) {
  registerDiagnostics(context);
  registerProviders(context);
  registerTemplatePaths(context);
  registerPreview(context, isTemplateDocument);
}

export function deactivate() {
  cache.clear();
}
