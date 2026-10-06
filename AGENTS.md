# AGENTS.md

Guide for coding agents working on this repository. User documentation is in [README.md](README.md) and [docs/](docs).

## What this is

cogen is a CLI that parses a MySQL schema and renders `$[...]` templates once per table. TypeScript, Node, ANTLR 4 (`antlr4ts`) grammars. Published to npm as `@mazinsw/cogen`. The `extension/` folder is a separate VS Code extension package for template files.

## Commands

| Task | Command |
|---|---|
| Install | `npm install` |
| Test | `npm test` (jest, `tests/**/*.spec.ts`) |
| Build | `npm run build` (to `dist/`) |
| Run from source | `npm run cogen -- -t <templates> -o <out> <schema.sql>` |
| Format | `npm run style:fix` / `npm run style:check` (prettier) |
| Regenerate parsers | `npm run grammar` (after editing any `.g4`) |
| Extension | `cd extension && npm run build`, `npm test`, `npm run typecheck` |

## Layout

```
src/
  main/            CLI entry (cli.ts) and option parsing (main.ts)
  tools/runner.ts  walks the template dir, renders file names and contents per table/field
  grammar/         SQLLexer/SQLParser.g4 and TemplateLexer/TemplateParser.g4 + generated TS (do not edit generated files)
  ast/sql/         SQL parse tree -> model (DataSource, Table, Field, keys)
  ast/template/    template parse tree -> executable nodes (ast-builder.ts maps every keyword)
  ast/entity/      model and template node classes; expression-condition.ts evaluates conditions,
                   field-base-constant.ts / table-base-constant.ts compute property values
  util/            configuration, .properties, naming (normalize, unix, plural, gender), replace()
tests/             jest specs mirroring src/
samples/           example schema and templates
extension/         VS Code extension; scripts/gen-vocabulary.mjs builds completion/hover from the grammar and docs/templating.md
docs/              user documentation
```

Imports use the `@/` alias for `src/`.

## Adding a template keyword

1. Add the token to `src/grammar/TemplateLexer.g4` and use it in `TemplateParser.g4` (`tableProp`, `fieldProp`, `property`, `type`...).
2. `npm run grammar`.
3. Map it in `src/ast/template/ast-builder.ts` and implement it in `src/ast/entity/` (`Constant.Property` / `Expression`).
4. Add a test in `tests/`.
5. Document it in the **Reference** section of [docs/templating.md](docs/templating.md), as a table row starting with `` `$[level.prop]` `` (or `` `name` `` under *Conditions*). The extension hover reads those rows.
6. `cd extension && npm run gen && npm test`.

## Conventions

- Prettier: single quotes, trailing commas.
- Conventional commits: `feat:`, `fix:`, `docs:`, `build:`...
- Docs are English. Every example in `docs/` must produce the output shown; check by running it.
- Keep `samples/` generating the same output; compare before/after with `npm run cogen -- -p samples/cogen.properties -t samples/<dir> -o <out> samples/input.sql`.
