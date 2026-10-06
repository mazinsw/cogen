import * as fs from 'fs';
import * as path from 'path';
import * as oniguruma from 'vscode-oniguruma';
import * as textmate from 'vscode-textmate';

const root = path.join(__dirname, '..');
const pkg = JSON.parse(
  fs.readFileSync(path.join(root, 'package.json'), 'utf8'),
);

// Minimal host grammars standing in for the ones bundled with VS Code
const STUB_HOSTS: Record<string, object> = {
  'source.ts': {
    scopeName: 'source.ts',
    patterns: [
      { name: 'comment.line.ts', begin: '//', end: '$' },
      { name: 'string.quoted.single.ts', begin: "'", end: "'" },
      { name: 'keyword.ts', match: '\\b(?:import|export|class)\\b' },
    ],
  },
  'text.html.basic': {
    scopeName: 'text.html.basic',
    patterns: [
      {
        name: 'meta.tag.html',
        begin: '<\\w+',
        end: '>',
        patterns: [
          { name: 'entity.other.attribute-name.html', match: '\\w+(?==)' },
          { name: 'string.quoted.double.html', begin: '"', end: '"' },
        ],
      },
    ],
  },
};

let registry: textmate.Registry;

beforeAll(async () => {
  const wasm = fs.readFileSync(
    path.join(root, 'node_modules/vscode-oniguruma/release/onig.wasm'),
  );
  await oniguruma.loadWASM(
    wasm.buffer.slice(wasm.byteOffset, wasm.byteOffset + wasm.byteLength),
  );
  const grammarFiles = new Map<string, string>();
  for (const grammar of pkg.contributes.grammars) {
    grammarFiles.set(grammar.scopeName, path.join(root, grammar.path));
  }
  const injection = pkg.contributes.grammars.find(
    (grammar) => grammar.scopeName === 'cogen.injection',
  );
  registry = new textmate.Registry({
    onigLib: Promise.resolve({
      createOnigScanner: (patterns) => new oniguruma.OnigScanner(patterns),
      createOnigString: (text) => new oniguruma.OnigString(text),
    }),
    async loadGrammar(scopeName) {
      if (STUB_HOSTS[scopeName]) {
        return textmate.parseRawGrammar(
          JSON.stringify(STUB_HOSTS[scopeName]),
          'stub.json',
        );
      }
      const file = grammarFiles.get(scopeName);
      if (!file) {
        return null; // host grammar not installed
      }
      return textmate.parseRawGrammar(fs.readFileSync(file, 'utf8'), file);
    },
    getInjections(scopeName) {
      return injection.injectTo.includes(scopeName)
        ? ['cogen.injection']
        : undefined;
    },
  });
});

/** [text, innermost scope] for every token of the line */
async function tokenize(
  scopeName: string,
  line: string,
): Promise<[string, string][]> {
  const grammar = await registry.loadGrammar(scopeName);
  const { tokens } = grammar.tokenizeLine(line, textmate.INITIAL);
  return tokens.map((token) => [
    line.slice(token.startIndex, token.endIndex),
    token.scopes[token.scopes.length - 1],
  ]);
}

function scopeOf(tokens: [string, string][], text: string): string | undefined {
  return tokens.find(([value]) => value === text)?.[1];
}

describe('cogen injection grammar', () => {
  it('command parts in plain fallback', async () => {
    const tokens = await tokenize(
      'source.cogen.plain',
      'a $[Field.if(~string|reference)]b$[field.end] $[table.unix.replace(_(\\w+),\\U$1,g)]',
    );
    expect(tokens).toEqual([
      ['a ', 'source.cogen.plain'],
      ['$[', 'punctuation.definition.command.begin.cogen'],
      ['Field', 'entity.name.namespace.level.cogen'],
      ['.', 'punctuation.accessor.cogen'],
      ['if', 'keyword.control.cogen'],
      ['(', 'punctuation.section.parens.begin.cogen'],
      ['~', 'keyword.operator.logical.cogen'],
      ['string', 'support.type.cogen'],
      ['|', 'keyword.operator.logical.cogen'],
      ['reference', 'entity.other.attribute-name.cogen'],
      [')', 'punctuation.section.parens.end.cogen'],
      [']', 'punctuation.definition.command.end.cogen'],
      ['b', 'source.cogen.plain'],
      ['$[', 'punctuation.definition.command.begin.cogen'],
      ['field', 'entity.name.namespace.level.cogen'],
      ['.', 'punctuation.accessor.cogen'],
      ['end', 'keyword.control.cogen'],
      [']', 'punctuation.definition.command.end.cogen'],
      [' ', 'source.cogen.plain'],
      ['$[', 'punctuation.definition.command.begin.cogen'],
      ['table', 'entity.name.namespace.level.cogen'],
      ['.', 'punctuation.accessor.cogen'],
      ['unix', 'variable.other.property.cogen'],
      ['.', 'punctuation.accessor.cogen'],
      ['replace', 'support.function.replace.cogen'],
      ['(', 'punctuation.section.parens.begin.cogen'],
      ['_', 'string.regexp.cogen'],
      ['(', 'meta.group.regexp.cogen'],
      ['\\w', 'constant.character.escape.cogen'],
      ['+', 'meta.group.regexp.cogen'],
      [')', 'meta.group.regexp.cogen'],
      [',', 'punctuation.separator.arguments.cogen'],
      ['\\U', 'constant.character.escape.case.cogen'],
      ['$1', 'variable.other.capture.cogen'],
      [',', 'punctuation.separator.arguments.cogen'],
      ['g', 'storage.modifier.flags.cogen'],
      [')', 'punctuation.section.parens.end.cogen'],
      [']', 'punctuation.definition.command.end.cogen'],
    ]);
  });

  it('regex argument with brackets and nested groups', async () => {
    const tokens = await tokenize(
      'source.cogen.plain',
      '$[table.~match(^(a|b)[0-9]+$)]',
    );
    expect(scopeOf(tokens, '~')).toBe('keyword.operator.logical.cogen');
    expect(scopeOf(tokens, 'match')).toBe('keyword.control.cogen');
    expect(scopeOf(tokens, '[0-9]+$')).toBe('string.regexp.cogen');
    expect(tokens[tokens.length - 1]).toEqual([
      ']',
      'punctuation.definition.command.end.cogen',
    ]);
  });

  it('commands inside host strings and comments', async () => {
    const tokens = await tokenize(
      'source.cogen.ts',
      "export class $[Table.norm] { name = '$[field.norm]'; } // $[table.comment]",
    );
    expect(scopeOf(tokens, 'export')).toBe('keyword.ts');
    expect(tokens.filter(([value]) => value === '$[')).toHaveLength(3);
    expect(
      tokens
        .filter(([value]) => value === '$[')
        .every(
          ([, scope]) => scope === 'punctuation.definition.command.begin.cogen',
        ),
    ).toBe(true);
    expect(scopeOf(tokens, 'comment')).toBe('variable.other.property.cogen');
    expect(scopeOf(tokens, "'")).toBe('string.quoted.single.ts');
  });

  it('commands inside html tags and attributes', async () => {
    const tokens = await tokenize(
      'source.cogen.html',
      '<input name="$[field.unix]" $[field.if(required)]required$[field.end]>',
    );
    expect(scopeOf(tokens, 'name')).toBe('entity.other.attribute-name.html');
    expect(scopeOf(tokens, 'unix')).toBe('variable.other.property.cogen');
    expect(scopeOf(tokens, 'required')).toBe(
      'entity.other.attribute-name.cogen',
    );
    expect(scopeOf(tokens, 'end')).toBe('keyword.control.cogen');
  });

  it('missing host grammar keeps cogen commands', async () => {
    const tokens = await tokenize(
      'source.cogen.edge',
      '@if(x) $[table.norm] @end',
    );
    expect(scopeOf(tokens, 'norm')).toBe('variable.other.property.cogen');
    expect(tokens[0]).toEqual(['@if(x) ', 'source.cogen.edge']);
  });
});

describe('generated languages', () => {
  const languages: { id: string; extensions: string[] }[] =
    pkg.contributes.languages;

  it('every extension belongs to a single language', () => {
    const all = languages.flatMap((language) => language.extensions);
    expect(new Set(all).size).toBe(all.length);
    expect(all.every((extension) => extension.endsWith('.cgn'))).toBe(true);
  });

  it('covers the main hosts and the plain fallback', () => {
    const byExtension = Object.fromEntries(
      languages.flatMap((language) =>
        language.extensions.map((ext) => [ext, language.id]),
      ),
    );
    expect(byExtension).toMatchObject({
      '.ts.cgn': 'cogen-ts',
      '.json.cgn': 'cogen-json',
      '.html.cgn': 'cogen-html',
      '.css.cgn': 'cogen-css',
      '.edge.cgn': 'cogen-edge',
      '.blade.php.cgn': 'cogen-blade',
      '.php.cgn': 'cogen-php',
      '.cgn': 'cogen-plain',
    });
  });

  it('injection reaches every cogen grammar', () => {
    const injection = pkg.contributes.grammars.find(
      (grammar) => grammar.scopeName === 'cogen.injection',
    );
    const scopes = pkg.contributes.grammars
      .filter((grammar) => grammar.language)
      .map((grammar) => grammar.scopeName);
    expect(injection.injectTo).toEqual(scopes);
    expect(scopes.every((scope) => scope.startsWith('source.cogen.'))).toBe(
      true,
    );
  });
});
