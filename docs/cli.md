# Command line

```sh
cogen [options] input.sql
```

- [Options](#options)
- [Project file](#project-file)
- [Despluralize rules](#despluralize-rules)
- [Generating only some tables](#generating-only-some-tables)
- [Exit codes](#exit-codes)

## Options

| Option | Argument | Description |
|---|---|---|
| `-i`, `--input`, `-f`, `--file` | `schema.sql` | Input SQL file. A bare argument does the same. |
| `-t`, `--template` | `templates/` | Template directory. Default `scripts/template/`. |
| `-o`, `--output` | `src/` | Output directory. Default `storage/generated/`. Existing files are overwritten. |
| `-p`, `--project` | `cogen.properties` | Load a [project file](#project-file). |
| `-w`, `--write` | `cogen.properties` | Save the current options to a project file after a successful run. |
| `--filter` | `users,posts` | Generate files only for these tables. |
| `-e`, `--exclude` | `migrations` | Don't generate files for these tables. |
| `-l`, `--legacy` | | Use [legacy loops](templating.md#legacy-mode). |
| `-d`, `--despluralize` | `"ies/3/y;s/1/"` | Singularization [rules](#despluralize-rules). |
| `-u`, `--uppercase` | `"\|USA\|W3C\|"` | [Uppercase words](modeling.md#uppercase-words). |
| `-s`, `--silent` | | Don't print generated files nor timing. |
| `-h`, `--help` | | Show help. |

Options are applied in order: `-p` loads the project file at its position, and options after it override its values.

```sh
# all tables, templates in templates/, output in src/
cogen -t templates/ -o src/ schema.sql

# load settings, override the output directory
cogen -p cogen.properties -o /tmp/preview

# save the options for next time
cogen -t templates/ -o src/ -w cogen.properties schema.sql
```

## Project file

A Java-style `.properties` file: `key=value` per line, `#` comments, `\uXXXX` escapes.

```properties
lang=en
inputFile=schema.sql
templatePath=templates/
outputPath=src/
upperWords=|API|URL|
filter=users,posts
exclude=migrations
```

| Key | Description |
|---|---|
| `inputFile` (or `file`) | Input SQL file. |
| `templatePath` | Template directory. |
| `outputPath` (or `path`) | Output directory. |
| `lang` | Language of the schema names, picks the default singularization rules: `pt-BR` (default) or `en` / `en-us`. |
| `dict.<lang>` | Singularization [rules](#despluralize-rules) for that language, e.g. `dict.en=ies/3/y;s/1/`. |
| `upperWords` | [Uppercase words](modeling.md#uppercase-words), `\|` separated. |
| `filter`, `exclude` | Comma separated table lists, see [below](#generating-only-some-tables). |

Without a project file no singularization rules are loaded. `-w` writes `inputFile`, `outputPath`, `templatePath`, `upperWords`, `filter` and `exclude`; it doesn't keep `lang` or `dict.*`, so add them by hand.

## Despluralize rules

Rules turn a plural table name into a singular one (`posts` → `post`). They are separated by `;` and tried in order; the first one that matches is applied.

```
suffix1|suffix2/cut[/replacement[/min_length]]
```

| Part | Meaning |
|---|---|
| `suffix1\|suffix2` | The name ends with one of these. |
| `cut` | Number of characters removed from the end. |
| `replacement` | Text appended after cutting. Optional. |
| `min_length` | Skip names with this length or shorter. Optional. |

Default rules:

| `lang` | Rules | Examples |
|---|---|---|
| `en` | `ies/3/y;s/1/` | `categories` → `category`, `posts` → `post` |
| `pt-BR` | `oes\|aes/3/ao;is/2/l/4;res\|ses/2/;es\|as\|os\|ds/1/;ns/2/m` | `opcoes` → `opcao`, `papeis` → `papel`, `cidades` → `cidade`, `itens` → `item` |

## Generating only some tables

`--filter` and `--exclude` take a comma separated list of table names:

```sh
# only users and posts
cogen -t templates/ -o src/ --filter users,posts schema.sql

# everything except migrations and sessions
cogen -t templates/ -o src/ --exclude migrations,sessions schema.sql

# filter first, then remove excluded tables
cogen -t templates/ -o src/ --filter users,posts,orders --exclude orders schema.sql
```

- Names are case-insensitive; spaces around names are ignored.
- A table in both lists is excluded.
- Repeating an option appends: `--filter users --filter posts` equals `--filter users,posts`.
- Only generated files are restricted. Every table is still parsed and visible to templates, so `$[table.each]` loops and references keep working.
- Templates without `$[...]` in their path (generated once) are still generated, as long as at least one table is selected.

## Exit codes

| Code | Meaning |
|---|---|
| `0` | Success, or `--help`. |
| `3` | An option is missing its argument, or the project file can't be read. |
| `4` | No input file given. |
| `5` | The SQL or a template failed to parse, or a template failed to render. Parse errors are printed as `line:column: message` (not with `-s`). |
