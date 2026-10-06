# Cogen Templates

Editor support for [cogen](https://github.com/mazinsw/cogen) templates. Template language reference: [docs/templating.md](https://github.com/mazinsw/cogen/blob/main/docs/templating.md).

Name templates `<output name>.cgn`, e.g. `$[table.unix].ts.cgn`, `index.html.cgn`, `style.css.cgn`, `view.edge.cgn`.
cogen writes the output without the `.cgn` suffix. Because the file is not a `.ts`/`.html`/... file anymore,
no host language server, linter or formatter runs on it.

## Features

- Host language highlighting for ~40 languages (code, data, markup, styles and template engines), picked from the extension before `.cgn`. Unknown extensions fall back to plain text.
- `$[...]` commands highlighted everywhere, also inside strings, comments, tags and attributes.
- Inline syntax errors from the real cogen parser.
- Folding, matching `if` / `else` / `end` highlight and outline of `each` / `if` blocks.
- Completion and hover for levels, properties, conditions, types and attributes.
- `Cogen: Preview for Table…`: renders the template for one table of the modeling SQL, live while editing.

## Settings

| Setting | Description |
|---|---|
| `cogen.templatePaths` | Folders whose files are cogen templates even without `.cgn` (legacy templates), e.g. `["scripts/template"]` |
| `cogen.projectFile` | Project properties file for the preview; defaults to the nearest `cogen.properties` |
| `cogen.inputFile` | Modeling SQL file for the preview when the project file has none |
| `cogen.legacy` | Use legacy loops in the preview |

Extensions not in the built-in list can be mapped with `files.associations`:

```json
"files.associations": { "*.liquid.cgn": "cogen-html" }
```

Host highlighting needs the host grammar installed: Edge, Kotlin, Svelte, Vue, Prisma, TOML, Twig,
Nunjucks or GraphQL need their own extension. Without it the host code is plain text and cogen
commands are still highlighted.
