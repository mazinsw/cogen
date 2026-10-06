# VS Code extension for cogen templates — plan

Status: implemented in [`extension/`](../extension) (phases 1–5). Notes below reflect the implementation.

## Goal

Opening any template file `name.<ext>.cgn` (e.g. `$[table.unix].ts.cgn`, `index.html.cgn`, `style.css.cgn`, `view.edge.cgn`) should give:

- normal highlighting of the host language (any language VS Code has a grammar for: code, data, markup, styles and other template engines);
- `$[...]` commands highlighted by their real role (level, property, condition, regex);
- inline syntax errors, instead of the generic `Failed to load or parse template source` only seen when running the generator;
- folding and matching-pair highlight for `each` / `if` … `else` … `end` blocks;
- completion and hover driven by the grammar;
- a live preview of the generated output for a table of the modeling SQL.

Host language servers (tsserver, eslint, css/html language servers, …) and formatters must not run on templates: they are not valid host code.

## Template file naming

- Convention: `<output name>.cgn`. The runner writes the output without the `.cgn` suffix: `User.ts.cgn` → `User.ts`, `$[table.unix].edge.cgn` → `posts.edge`.
- Why a suffix:
  - the language id becomes `cogen-*`, so no host language server or project tool (tsc, eslint, prettier, jest) sees the file, and no tsconfig/eslint excludes are needed;
  - the association works wherever the template directory lives (it is configurable per project);
  - the file is clearly a template.
- Why `.cgn` last and not `name.cgn.ts`: VS Code and host tools key on the last extension.
- Legacy plain templates (`User.ts`) still generate as before. The editor picks them up only through the `cogen.templatePaths` setting (see below).

## Architecture

Two layers, combined by VS Code.

### 1. TextMate grammar (static, instant)

VS Code languages and grammars are declared statically in `package.json`, and a grammar's `include` is fixed, so the host grammar cannot be chosen per file at runtime. Instead, one small language + grammar is generated per host from a table.

- **Language table** `extension/languages.json`, the single source of truth. Each entry: `id`, inner extensions (longest first, e.g. `blade.php` before `php`), host scope, comment style, optional `embeddedLanguages`. Initial set:

  | Group | Inner ext → host scope |
  |---|---|
  | Script | `ts`→`source.ts`, `tsx`→`source.tsx`, `js/mjs/cjs`→`source.js`, `jsx`→`source.js.jsx` |
  | Data | `json`→`source.json`, `jsonc`→`source.json.comments`, `yaml/yml`→`source.yaml`, `toml`→`source.toml`, `xml`→`text.xml`, `env`→`source.dotenv`, `sql`→`source.sql`, `prisma`→`source.prisma`, `graphql/gql`→`source.graphql` |
  | Markup | `html/htm`→`text.html.basic`, `md`→`text.html.markdown`, `svg`→`text.xml.svg` |
  | Style | `css`→`source.css`, `scss`→`source.css.scss`, `less`→`source.css.less` |
  | Template engines | `edge`→`text.html.edge`, `blade.php`→`text.html.php.blade`, `hbs/handlebars`→`text.html.handlebars`, `ejs`→`text.html.ejs`, `njk`→`text.html.nunjucks`, `twig`→`text.html.twig`, `vue`→`source.vue`, `svelte`→`source.svelte` |
  | Backend | `php`→`text.html.php`, `java`→`source.java`, `kt`→`source.kotlin`, `cs`→`source.cs`, `go`→`source.go`, `py`→`source.python`, `rb`→`source.ruby`, `rs`→`source.rust`, `dart`→`source.dart`, `swift`→`source.swift`, `c/h`→`source.c`, `cpp/hpp`→`source.cpp`, `sh`→`source.shell`, `dockerfile`→`source.dockerfile` |

- **Generator** `extension/scripts/gen-languages.mjs` (`npm run gen`, part of `build`) emits from the table, and also `src/generated/languages.ts` for the runtime (selectors, preview language, legacy paths):
  - `contributes.languages`: `cogen-<id>` with `extensions: [".<ext>.cgn", ...]`, an icon, and an alias "Cogen (<Host>)";
  - `syntaxes/generated/cogen-<id>.tmLanguage.json`: `scopeName: source.cogen.<id>`, patterns = `include: <host scope>`, plus `embeddedLanguages` for markup/template hosts (html → css/js) so comment toggling and Emmet work in embedded regions;
  - `language-configuration/cogen-<id>.json`: the host's comment style (`//` + `/* */`, `<!-- -->`, `#`, `{{-- --}}`, …), brackets, auto-close `$[` → `]`, folding markers.
- **Fallback** `cogen-plain`: `extensions: [".cgn"]`, scope `source.cogen.plain`, no host include. Covers any extension not in the table. VS Code picks the longest matching extension, so `.ts.cgn` beats `.cgn` and `.blade.php.cgn` beats `.php.cgn` (covered by the integration tests).
- **Injection grammar** `cogen.injection` with `injectionSelector: "L:source.cogen -meta.command.cogen"` and `injectTo` listing every generated scope. Scope selectors match by prefix, so one injection covers every generated language and the fallback, and wins inside strings, comments, tags and attributes of any host.
- **Missing host grammar** (e.g. `.edge` without the Edge extension, Kotlin, Svelte): VS Code ignores an unresolved `include`, so host code shows as plain text while cogen commands are still highlighted. The README lists recommended host extensions; no `extensionDependencies` (it would force installs).
- **User override**: `files.associations` (e.g. `"*.liquid.cgn": "cogen-html"`) for extensions not in the table. Documented in the README.
- **Legacy plain templates**: setting `cogen.templatePaths` (default `[]`). On `onDidOpenTextDocument`, files under those paths get `setTextDocumentLanguage(doc, "cogen-<id by ext>")`, since static language contributions cannot read settings.
- Command patterns mirror the lexer modes in `src/grammar/TemplateLexer.g4`:
  - `INSIDE`: `$[`, `]`, `.`, `~`, `&`, `|`, `(`, `)`, keywords, `WORD`;
  - `REGEX_MODE`: argument of `match(` / `finds(`;
  - `PATTERN_MODE` / `REPLACEMENT_MODE` / `FLAGS_MODE`: arguments of `replace(pattern,replacement,flags)`.

### 2. Extension host using the real parser

Parses with `TemplateLexer` / `TemplateParser` (antlr4ts) once per document version (diagnostics debounced ~200 ms). Language logic lives in `src/core/` without any `vscode` import, so it is unit tested with jest; `src/extension.ts` only adapts it. Providers are host-agnostic and register for every `cogen-*` language id (selector list generated from the language table).

| Feature | VS Code API | Source in cogen |
|---|---|---|
| Syntax errors | `DiagnosticCollection` | `ListErrorListener`, extended with structured positions; an unclosed block also gets `Missing $[field.end] for $[field.each]` on its opening command |
| Precise command coloring | `DocumentSemanticTokensProvider` | lexer tokens: `K_EACH/K_IF/K_ELSE/K_END/K_MATCH/...` → keyword; `tableLevel/fieldLevel/constraintLevel` → namespace; `tableProp/fieldProp` → property; `attribute/type` → type; `REGEX/PATTERN/REPLACEMENT` → regexp; `NOT/AND/OR` → operator |
| Folding | `FoldingRangeProvider` | parse tree: every `*EachStmt`, `*IfStmt`, `*ExistsStmt`, `*FindsStmt`, `*MatchStmt`, `*ContainsStmt` from its opening `OPEN` to the closing `END` |
| Matching block highlight | `DocumentHighlightProvider` | same blocks plus their `*ElseStmt` children |
| Outline | `DocumentSymbolProvider` | nested blocks (`field.each(reference)`, `table.if(...)`) |
| Completion | `CompletionItemProvider` | after `$[`: levels (`tableLevel`, `fieldLevel`, `constraintLevel`); after `.`: `tableProp` / `fieldProp` of that level plus control words; inside `if(` / `each(` / `exists(`: `attribute` / `property` / `type` rules. Word lists are generated from `TemplateLexer.g4` / `TemplateParser.g4` by `scripts/gen-vocabulary.mjs` |
| Hover | `HoverProvider` | descriptions from `README.md`, keyed by command path (`table.unix.plural`) and attribute, generated by `scripts/gen-vocabulary.mjs` |
| Preview | command + `TextDocumentContentProvider` | `runTemplateText(modelingSql, templateText, { legacy, filename, configuration, logger, tableFilter })` from `src/util/template.ts`; output opened beside the template with the host language id, refreshed while typing and when the SQL / project file is saved |

Out of scope: diagnostics of the host code. Known limitation: when a command splits a host construct (an `import` across `$[field.each]` lines, an HTML tag or attribute, a CSS rule, a block opened inside `if` and closed after `end`), the TextMate host grammar can lose state locally; semantic tokens fix the commands, not the surrounding host code.

## Location

`extension/` folder inside this repository:

- imports `src/grammar/*` and `src/util/template.ts` directly, so grammar and extension never drift;
- bundled with esbuild into `extension/dist/extension.js` (bundles the `antlr4ts` runtime and resolves the `@/` alias);
- the npm package is unchanged (`files: ["dist"]`); the extension is versioned and packaged separately with `@vscode/vsce`.

Alternative: separate repository depending on `@mazinsw/cogen` (`dist/grammar` is published). Rejected as default because every grammar change would require a cogen release first.

```
extension/
├── package.json                      # commands, settings; languages/grammars/snippets merged by the generator
├── languages.json                    # host language table (single source of truth)
├── scripts/
│   ├── gen-languages.mjs             # languages, grammars, language configurations, src/generated/languages.ts
│   └── gen-vocabulary.mjs            # src/generated/vocabulary.ts from the .g4 grammars and README.md
├── language-configuration/           # generated, one per cogen-<id>
├── syntaxes/
│   ├── cogen.injection.tmLanguage.json
│   ├── cogen-plain.tmLanguage.json
│   └── generated/                    # cogen-<id>.tmLanguage.json
├── snippets/cogen.json
├── src/
│   ├── extension.ts                  # activate: parse cache, diagnostics, providers, legacy templatePaths
│   ├── preview.ts                    # Cogen: Preview for Table…
│   ├── core/
│   │   ├── analysis.ts               # diagnostics, semantic tokens, blocks, folding, matching commands
│   │   └── commands.ts               # completion and hover
│   └── generated/                    # languages.ts, vocabulary.ts
├── test/
│   ├── *.spec.ts                     # jest: core logic, TextMate grammars (vscode-textmate), generated languages
│   ├── fixtures/workspace/           # cogen.properties, input.sql, templates
│   └── integration/                  # @vscode/test-electron suite
└── esbuild.mjs
```

## Changes required in cogen

1. `src/ast/list-error-listener.ts`: also collect `{ line, column, length, message }` (length from `offendingSymbol`), keeping the current string list for the CLI.
2. New `parseTemplateText(text)` in `src/util/parse-template.ts` returning `{ tree, parser, tokens, errors }` without running `ASTBuilder` or touching the filesystem (`parseTemplate` was already taken by `src/util/helper.ts`).
3. `runTemplateText`: accept `options.logger` so messages do not go to `console.log` inside the extension host, `options.configuration` (project settings) and `options.tableFilter` (backed by `Runner.tableFilter`) to render a single table while other tables stay visible to the template.
4. `src/tools/runner.ts` `generate()`: for files (not directories), after the destination name is computed (static or from the filename template), strip a trailing `.cgn` before the `parentFile` / `prevFile` checks and the write. Plain templates are unchanged.

## Phases

1. **Base** — scaffold `extension/`, language table + generator, injection and fallback grammars, generated language configurations, runner `.cgn` strip, local install (symlink into `~/.vscode/extensions` or `.vsix`). Done when `x.ts.cgn`, `x.html.cgn`, `x.css.cgn`, `x.edge.cgn` and `x.foo.cgn` are highlighted, no host diagnostics appear, and the generator writes `x.ts` from `x.ts.cgn`.
   - 1b (optional): `cogen.templatePaths` for legacy plain templates.
2. **Parser** — `parseTemplate` + structured error listener in cogen, esbuild bundle, diagnostics and semantic tokens. Done when a broken `replace(...)` shows an inline error at the right position.
3. **Navigation** — folding, matching block highlight, document symbols.
4. **Productivity** — completion generated from grammar token lists, hover docs, snippets (`each`, `if/else/end`, `replace`).
5. **Preview** — command `Cogen: Preview for table…`: reads the project properties (`file=`), lists tables of the modeling SQL, renders with `runTemplateText`, refreshes on save.

## Tests

Commands: `npm test` (root), `npm test` and `npm run test:integration` (in `extension/`).

- cogen (jest):
  - `parseTemplate` returns errors at correct positions for known pitfalls: parentheses in `replace` replacement, chained `replace`, `~(a|b)` conditions;
  - runner: `a.ts.cgn` → `a.ts`; `$[table.unix].html.cgn` → `<name>.html`; plain `a.ts` → `a.ts`; a directory named `x.cgn` is not stripped.
- extension core (jest): no diagnostics on every file in `samples/`, error positions, unclosed block message, blocks/folding/matching commands, semantic token roles, completion and hover.
- grammar (jest + `vscode-textmate` + `vscode-oniguruma`): command scopes in the plain fallback, inside strings and comments of a stub `source.ts`, inside tags and attributes of a stub `text.html.basic`, and with a missing host grammar (`.edge`).
- generator: one language per extension, main hosts mapped, injection reaches every cogen grammar.
- integration (`@vscode/test-electron`, installed VS Code with an isolated profile): language picked by inner extension, legacy `cogen.templatePaths`, diagnostics with no host diagnostics, folding, symbols, highlights, semantic tokens, completion, hover and preview of one table.

## Open decisions

1. Keep the extension in this repository (recommended) or a separate one.
2. Publish to Marketplace / Open VSX, or local `.vsix` only.
3. Move the preview (phase 5) earlier — likely the biggest productivity gain.
4. Migrate this repository's example templates (`samples/`) and README to `.cgn`.

Decided:

- templates use the `name.<ext>.cgn` suffix; plain templates remain supported;
- generated grammars, language configurations and `src/generated/` are committed, and regenerated by `npm run build`.
