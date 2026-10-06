# VS Code extension for cogen templates — plan

## Goal

Opening a template file (e.g. `scripts/template/**/*.ts` in a project that uses cogen) should give:

- normal TypeScript / JSON highlighting for the host language;
- `$[...]` commands highlighted by their real role (level, property, condition, regex);
- inline syntax errors, instead of the generic `Failed to load or parse template source` only seen when running the generator;
- folding and matching-pair highlight for `each` / `if` … `else` … `end` blocks;
- completion and hover driven by the grammar;
- a live preview of the generated output for a table of the modeling SQL.

No TypeScript diagnostics, formatting or organize-imports should run on templates: they are not valid TypeScript.

## Architecture

Two layers, combined by VS Code.

### 1. TextMate grammar (static, instant)

- Languages `cogen-typescript` and `cogen-json`, associated through `filenamePatterns` (`**/scripts/template/**/*.ts`, `**/scripts/template/**/*.json`). Because the language id is not `typescript`, tsserver never sees these files.
- Grammar `source.cogen.ts` = cogen command patterns + `include: source.ts` (and `source.cogen.json` with `source.json`).
- Injection grammar `cogen.injection` with `injectionSelector: "L:source.cogen.ts, L:source.cogen.json"`, so commands win inside strings, template literals and comments.
- Command patterns mirror the lexer modes in `src/grammar/TemplateLexer.g4`:
  - `INSIDE`: `$[`, `]`, `.`, `~`, `&`, `|`, `(`, `)`, keywords, `WORD`;
  - `REGEX_MODE`: argument of `match(` / `finds(`;
  - `PATTERN_MODE` / `REPLACEMENT_MODE` / `FLAGS_MODE`: arguments of `replace(pattern,replacement,flags)`.

### 2. Extension host using the real parser

Parses with `TemplateLexer` / `TemplateParser` (antlr4ts) on open and on change (debounced ~200 ms).

| Feature | VS Code API | Source in cogen |
|---|---|---|
| Syntax errors | `DiagnosticCollection` | `ListErrorListener`, extended with structured positions |
| Precise command coloring | `DocumentSemanticTokensProvider` | lexer tokens: `K_EACH/K_IF/K_ELSE/K_END/K_MATCH/...` → keyword; `tableLevel/fieldLevel/constraintLevel` → namespace; `tableProp/fieldProp` → property; `attribute/type` → type; `REGEX/PATTERN/REPLACEMENT` → regexp; `NOT/AND/OR` → operator |
| Folding | `FoldingRangeProvider` | parse tree: every `*EachStmt`, `*IfStmt`, `*ExistsStmt`, `*FindsStmt`, `*MatchStmt`, `*ContainsStmt` from its opening `OPEN` to the closing `END` |
| Matching block highlight | `DocumentHighlightProvider` | same blocks plus their `*ElseStmt` children |
| Outline | `DocumentSymbolProvider` | nested blocks (`field.each(reference)`, `table.if(...)`) |
| Completion | `CompletionItemProvider` | after `$[`: levels (`tableLevel`, `fieldLevel`, `constraintLevel`); after `.`: `tableProp` / `fieldProp` of that level plus control words; inside `if(` / `each(` / `exists(`: `attribute` / `type` rules |
| Hover | `HoverProvider` | descriptions from `README.md`, keyed by keyword |
| Preview | command + `TextDocumentContentProvider` | `runTemplateText(modelingSql, templateText, { legacy, filename })` from `src/util/template.ts` |

Out of scope: TypeScript diagnostics of the host code. Known limitation: when a command splits a host construct (an `import` across `$[field.each]` lines, a block opened inside `if` and closed after `end`), the TextMate host grammar can lose state locally; semantic tokens fix the commands, not the surrounding host code.

## Location

`extension/` folder inside this repository:

- imports `src/grammar/*` and `src/util/template.ts` directly, so grammar and extension never drift;
- bundled with esbuild into `extension/dist/extension.js` (bundles the `antlr4ts` runtime and resolves the `@/` alias);
- the npm package is unchanged (`files: ["dist"]`); the extension is versioned and packaged separately with `@vscode/vsce`.

Alternative: separate repository depending on `@mazinsw/cogen` (`dist/grammar` is published). Rejected as default because every grammar change would require a cogen release first.

```
extension/
├── package.json                      # contributes languages, grammars, commands
├── language-configuration.json       # brackets, auto-close `$[` → `]`, folding markers
├── syntaxes/
│   ├── cogen-ts.tmLanguage.json
│   ├── cogen-json.tmLanguage.json
│   └── cogen.injection.tmLanguage.json
├── snippets/cogen.json
├── src/
│   ├── extension.ts                  # activate: register providers
│   ├── parse.ts                      # cached parseTemplate per document version
│   ├── diagnostics.ts
│   ├── semantic-tokens.ts
│   ├── folding.ts
│   ├── highlight.ts
│   ├── symbols.ts
│   ├── completion.ts
│   ├── hover.ts
│   └── preview.ts
├── test/
└── esbuild.mjs
```

## Changes required in cogen

1. `src/ast/list-error-listener.ts`: also collect `{ line, column, length, message }` (length from `offendingSymbol`), keeping the current string list for the CLI.
2. New `parseTemplate(text)` (e.g. `src/util/parse-template.ts`) returning `{ tree, tokens, errors }` without running `ASTBuilder` or touching the filesystem.
3. `runTemplateText`: accept `options.logger` so messages do not go to `console.log` inside the extension host.

## Phases

1. **Base** — scaffold `extension/`, TextMate grammars, both languages, `language-configuration.json`, local install (symlink into `~/.vscode/extensions` or `.vsix`). Done when templates are highlighted and no TypeScript errors appear.
2. **Parser** — `parseTemplate` + structured error listener in cogen, esbuild bundle, diagnostics and semantic tokens. Done when a broken `replace(...)` shows an inline error at the right position.
3. **Navigation** — folding, matching block highlight, document symbols.
4. **Productivity** — completion generated from grammar token lists, hover docs, snippets (`each`, `if/else/end`, `replace`).
5. **Preview** — command `Cogen: Preview for table…`: reads the project properties (`file=`), lists tables of the modeling SQL, renders with `runTemplateText`, refreshes on save.

## Tests

- cogen (jest): `parseTemplate` returns errors at correct positions for known pitfalls — parentheses in `replace` replacement, chained `replace`, `~(a|b)` conditions.
- extension: `@vscode/test-electron` against real-world fixture templates; assert no diagnostics on valid templates, expected folding ranges, semantic token snapshot.
- grammar: `vscode-tmgrammar-test` with annotated sample files.

## Open decisions

1. Keep the extension in this repository (recommended) or a separate one.
2. Publish to Marketplace / Open VSX, or local `.vsix` only.
3. Move the preview (phase 5) earlier — likely the biggest productivity gain.
