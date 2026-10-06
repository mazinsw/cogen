// Integration suite, executed inside the VS Code extension host by run.mjs
const assert = require('assert');
const path = require('path');
const vscode = require('vscode');

const workspace = path.join(__dirname, '../fixtures/workspace');
const template = (name) =>
  vscode.Uri.file(path.join(workspace, 'template', name));

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitFor(check, message, timeout = 15000) {
  const start = Date.now();
  for (;;) {
    const value = await check();
    if (value) return value;
    if (Date.now() - start > timeout) throw new Error(`Timeout: ${message}`);
    await sleep(100);
  }
}

async function open(uri) {
  const document = await vscode.workspace.openTextDocument(uri);
  await vscode.window.showTextDocument(document);
  return document;
}

const tests = {
  async 'language is picked from the inner extension'() {
    const cases = {
      '$[table.unix].ts.cgn': 'cogen-ts',
      'index.html.cgn': 'cogen-html',
      'view.blade.php.cgn': 'cogen-blade',
      'notes.foo.cgn': 'cogen-plain',
    };
    for (const [name, languageId] of Object.entries(cases)) {
      const document = await vscode.workspace.openTextDocument(template(name));
      assert.strictEqual(document.languageId, languageId, name);
    }
  },

  async 'legacy template paths switch the language'() {
    const uri = vscode.Uri.file(path.join(workspace, 'legacy/plain.ts'));
    await open(uri);
    await waitFor(
      () =>
        vscode.workspace.textDocuments.find(
          (doc) =>
            doc.uri.fsPath === uri.fsPath && doc.languageId === 'cogen-ts',
        ),
      'legacy plain.ts becomes cogen-ts',
    );
  },

  async 'syntax error is reported at the right position, no host diagnostics'() {
    const broken = await open(template('broken.ts.cgn'));
    const diagnostics = await waitFor(() => {
      const list = vscode.languages.getDiagnostics(broken.uri);
      return list.length > 0 && list;
    }, 'diagnostics for broken.ts.cgn');
    assert.deepStrictEqual(
      diagnostics.map((item) => [
        item.source,
        item.range.start.line,
        item.range.start.character,
        item.message,
      ]),
      [['cogen', 0, 36, "extraneous input ')' expecting ']'"]],
    );
    const valid = await open(template('$[table.unix].ts.cgn'));
    await sleep(3000); // give tsserver a chance, it must not attach
    assert.deepStrictEqual(vscode.languages.getDiagnostics(valid.uri), []);
  },

  async 'folding, symbols and highlights'() {
    const document = await open(template('$[table.unix].ts.cgn'));
    const folding = await vscode.commands.executeCommand(
      'vscode.executeFoldingRangeProvider',
      document.uri,
    );
    const ranges = folding.map((range) => [range.start, range.end]);
    for (const expected of [
      [3, 10],
      [4, 5],
      [6, 7],
      [8, 9],
    ]) {
      assert.ok(
        ranges.some(
          ([start, end]) => start === expected[0] && end === expected[1],
        ),
        `folding ${expected}`,
      );
    }
    const symbols = await vscode.commands.executeCommand(
      'vscode.executeDocumentSymbolProvider',
      document.uri,
    );
    assert.strictEqual(symbols[0].name, 'field.each');
    assert.strictEqual(symbols[0].children[0].name, 'field.if(boolean)');
    const highlights = await vscode.commands.executeCommand(
      'vscode.executeDocumentHighlights',
      document.uri,
      new vscode.Position(6, 5),
    );
    assert.deepStrictEqual(
      highlights.map((item) => item.range.start.line),
      [4, 6, 8, 10],
    );
  },

  async 'semantic tokens'() {
    const document = await open(template('index.html.cgn'));
    const legend = await vscode.commands.executeCommand(
      'vscode.provideDocumentSemanticTokensLegend',
      document.uri,
    );
    const tokens = await vscode.commands.executeCommand(
      'vscode.provideDocumentSemanticTokens',
      document.uri,
    );
    assert.ok(legend.tokenTypes.includes('namespace'));
    assert.ok(tokens.data.length > 0);
  },

  async 'completion and hover'() {
    const document = await open(template('index.html.cgn'));
    // line 2: `  <li class="$[table.style]">`, after `$[table.`
    const completions = await vscode.commands.executeCommand(
      'vscode.executeCompletionItemProvider',
      document.uri,
      new vscode.Position(2, 21),
      '.',
    );
    const labels = completions.items.map((item) =>
      typeof item.label === 'string' ? item.label : item.label.label,
    );
    assert.ok(
      labels.includes('unix') && labels.includes('each'),
      labels.join(','),
    );
    const hovers = await vscode.commands.executeCommand(
      'vscode.executeHoverProvider',
      document.uri,
      new vscode.Position(2, 38),
    );
    const text = hovers
      .flatMap((hover) =>
        hover.contents.map((content) => content.value ?? String(content)),
      )
      .join('\n');
    assert.ok(text.includes('Beautiful name of table'), text);
  },

  async 'preview renders one table'() {
    const uri = await vscode.commands.executeCommand(
      'cogen.preview',
      template('$[table.unix].ts.cgn'),
      'Users',
    );
    const preview = await waitFor(
      () =>
        vscode.workspace.textDocuments.find(
          (doc) => doc.uri.toString() === uri.toString() && doc.getText(),
        ),
      'preview content',
    );
    assert.strictEqual(preview.languageId, 'typescript');
    assert.ok(
      preview.getText().includes('export class User extends Model'),
      preview.getText(),
    );
    assert.ok(
      preview.getText().includes('public fullName: string;'),
      preview.getText(),
    );
    assert.ok(
      preview.getText().includes('public active: boolean;'),
      preview.getText(),
    );
    assert.ok(!preview.getText().includes('class Post'), preview.getText());
  },
};

exports.run = async function run() {
  const extension = vscode.extensions.getExtension('mazinsw.cogen-templates');
  await extension.activate();
  const failures = [];
  for (const [name, test] of Object.entries(tests)) {
    try {
      await test();
      console.log(`  ✓ ${name}`);
    } catch (error) {
      console.log(`  ✗ ${name}\n    ${error && error.stack}`);
      failures.push(name);
    }
  }
  if (failures.length > 0) {
    throw new Error(`${failures.length} integration test(s) failed`);
  }
};
