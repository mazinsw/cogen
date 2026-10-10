# Modeling

cogen reads a SQL schema (MySQL dialect) and builds a model of tables, fields, indexes and foreign keys. Templates then read that model. Extra information that SQL can't express, like display names, enum labels or input masks, goes into the `COMMENT` of a table or column as **comment commands**.

- [Supported SQL](#supported-sql)
- [Column types](#column-types)
- [Comment commands](#comment-commands)
- [Names](#names)
- [Full example](#full-example)

## Supported SQL

The parser grammar is [`src/grammar/SQLParser.g4`](../src/grammar/SQLParser.g4). A file exported by MySQL Workbench or `mysqldump --no-data` usually works as is.

| Statement | Notes |
|---|---|
| `CREATE TABLE [IF NOT EXISTS] name (...) [options]` | The only statement that produces a model. `COMMENT = '...'` in the table options is the table comment. |
| Column definition | `type [GENERATED ALWAYS AS (expr) [VIRTUAL\|STORED]] [NULL\|NOT NULL] [DEFAULT value] [AUTO_INCREMENT] [UNIQUE [KEY]\|[PRIMARY] KEY] [COMMENT '...']` |
| `PRIMARY KEY (...)` | Optionally named with `CONSTRAINT name`. |
| `UNIQUE [INDEX\|KEY] name (...)` | |
| `INDEX\|KEY name (...)` | |
| `FULLTEXT INDEX\|KEY name (...)` | |
| `[CONSTRAINT name] FOREIGN KEY (...) REFERENCES table (...) [ON DELETE action] [ON UPDATE action]` | Actions: `RESTRICT`, `CASCADE`, `SET NULL`, `NO ACTION`. |
| `CREATE/DROP SCHEMA\|DATABASE`, `DROP TABLE`, `USE`, `SET` | Accepted and ignored. |

Identifiers may be bare, `` `quoted` ``, `'quoted'` or `"quoted"`. Keywords are case-insensitive. Index column `ASC`/`DESC` is accepted. `ALTER TABLE` and `INSERT` are not supported: keep them out of the input file.

## Column types

Each SQL type maps to one template type. Templates test it with `$[field.if(<type>)]`.

| SQL type | Template type | `$[field.size]` | `$[field.length]` |
|---|---|---|---|
| `INT`, `INTEGER` | `integer` (alias `int`) | 4 | |
| `TINYINT` | `tinyint` | 1 | |
| `BIGINT` | `bigint` | 8 | |
| `FLOAT` | `float` | 4 | |
| `DOUBLE` | `double` | 8 | |
| `DECIMAL`, `NUMERIC` | `currency` | | |
| `BOOL`, `BOOLEAN` | `boolean` | | |
| `ENUM('Y','N')` | `boolean` and `enum` (see note) | | |
| `ENUM(...)` | `enum` | | |
| `VARCHAR(n)` | `string` | | n |
| `CHAR(n)` | `char` | | |
| `TINYTEXT`, `TEXT`, `MEDIUMTEXT`, `LONGTEXT` | `text` | | |
| `JSON` | `json` | | |
| `DATE` | `date` | | |
| `TIME` | `time` | | |
| `DATETIME` | `datetime` | 8 | |
| `TIMESTAMP` | `timestamp` | 8 | |
| `TINYBLOB`, `BLOB`, `MEDIUMBLOB`, `LONGBLOB` | `blob` | | |

- Integer and floating point types (and `DECIMAL`) also match the `number` condition.
- `ENUM('Y','N')` is a boolean. With the default (non-legacy) mode it also matches `enum`; with [`--legacy`](cli.md#options) it doesn't. It never matches `option` (enum with real options).
- `SMALLINT`, `MEDIUMINT`, `REAL`, `BIT`, `YEAR`, `BINARY`, `VARBINARY` and `SET` are parsed but match no template type.
- The `UNSIGNED` attribute matches the `unsigned` condition.

## Comment commands

A comment command is a bracketed tag at the **end** of a table or column comment:

```sql
`name` VARCHAR(80) NOT NULL COMMENT 'Full name of the user[N:Full name][S]'
```

- Format: `[X]` or `[X:arg1|arg2|...]`. Arguments are separated by `|`.
- Any number of commands, one after the other. They must be the last thing in the comment.
- The commands are removed from the comment: above, `$[field.comment]` is `Full name of the user`.
- A comment made only of commands (`'[P]'`) has an empty text comment.
- Unknown letters are ignored.

| Command | Applies to | Meaning | Read in templates with |
|---|---|---|---|
| `[N:name\|plural]` | table, field | Display name and its plural. | `$[table.name]`, `$[table.name.plural]`, `$[field.name]` |
| `[U:unix\|plural]` | table, field | Override the snake_case name and its plural. | `$[table.unix]`, `$[table.unix.plural]`, `$[field.unix]`, `$[table.kebab]` |
| `[G:a]` / `[G:o]` | table, field | Grammatical gender: `a` feminine, `o` masculine. Overrides the automatic guess. | `$[table.gender]`, `feminine` / `masculine` conditions |
| `[F:text]` | table, field | Free information. Commonly a default value literal for code (`[F:false]`). | `$[field.info]`, `info` condition |
| `[E:Label 1\|Label 2\|...]` | enum field | Display label of each enum item, in declaration order. | `$[option.name]` inside `$[option.each]` |
| `[S]` | field | Descriptor: the field that represents the row (shown in lists, selects, search). The first `[S]` field of the table is the descriptor. | `$[descriptor]`, `descriptor` and `searchable` conditions |
| `[S:S]` | field | Searchable only, not a descriptor candidate. | `searchable` condition |
| `[D]` | field | Field filled by the system, not by the user (timestamps, counters...). | `ignored` condition |
| `[P]` | field | Password field. | `password` condition |
| `[T]` | field | Long text, rendered as a textarea. | (no condition in the template language) |
| `[R]` | enum field | Render as radio buttons. | `radio` condition |
| `[M:mask]` | field | Input mask, e.g. `[M:999.999.999-99]`. | `$[field.mask]`, `masked` condition |
| `[I:WxH\|folder\|default]` | field | The field holds an image URL. Recommended size (default `64x64`), upload folder (default: table unix name) and default image. | `$[image]`, `$[image.width]`, `$[image.height]`, `$[image.folder]`, `$[image.default]`, `image` condition |
| `[L:style\|extra]` | table, field | CSS class / style name and an extra one. | `$[table.style]`, `$[table.style.extra]`, `$[field.style]` |
| `[K:package\|path]` | table | Package / namespace and its directory. | `$[table.package]`, `$[table.path]`, `package` and `path` conditions |
| `[H:parent_table]` | table | The table extends another one. | `$[table.inherited]`, `$[inherited.*]`, `inherited` condition |
| `[ID:value]` | table, field | Free identifier. | `$[table.identifier]`, `$[field.identifier]` |

## Names

Every table and field has several derived names. For a table named `user_profiles` (with `lang=en`) or `TEmpresas` (with `lang=pt-BR`):

| Name | Rule | `user_profiles` | `TEmpresas` |
|---|---|---|---|
| raw | as written in SQL | `user_profiles` | `TEmpresas` |
| `norm` | PascalCase, `T` prefix (as in `TName`) removed, accents removed; tables are also singularized | `UserProfile` | `Empresa` |
| `norm.default` | `norm` without singularizing | `UserProfiles` | `Empresas` |
| `unix` | snake_case of `norm`, or `[U:...]` | `user_profile` | `empresa` |
| `unix.plural` | second `[U:...]` argument, or `unix` + `s` | `user_profiles` | `empresas` |
| `kebab` | `unix` with `-` instead of `_` | `user-profile` | `empresa` |
| `name` | first `[N:...]` argument, or `norm` (fields: the raw name) | `UserProfile` | `Empresa` |

The `$[...]` level casing changes the output: see [Output casing](templating.md#output-casing).

### Singular and plural

Table names are singularized with a dictionary of suffix rules:

- The language is `pt-BR` by default. Set `--lang en` or `lang=en` in the [project file](cli.md#project-file) for English schemas.
- [`-d`](cli.md#despluralize-rules) or the `dict.<lang>` key replaces the rules.

Field names are singularized only by `$[field.norm.singular]`.

Plurals are built from the singular with the language rules: `category` → `categories`, `box` → `boxes` in English; `opcao` → `opcoes`, `papel` → `papeis` in Portuguese. Give irregular ones explicitly: `COMMENT='[U:person|people]'`.

### Numbered fields

Fields that differ only by a trailing number, like `phone1`, `phone2`, form an array. They share the same `norm` (`Phone`) and match the `array` condition; every one after the first also matches `repeated`. `$[field.array.index]`, `$[field.array.number]` and `$[field.array.count]` give their position.

### Uppercase words

The `upperWords` project key (or `-u "|CPF|CNPJ|"`) lists acronyms kept uppercase inside recased names: with `|CPF|`, a field `cpf_number` gives `$[Field.norm]` → `CPFNumber` and `$[fIeld.norm]` → `cpfNumber`. All-lowercase levels (`$[field.norm]`) stay lowercase.

### Gender

`masculine`, `feminine` and `$[table.gender]` serve languages with grammatical gender (Portuguese). Without `[G:...]` the gender is guessed from the singular name with Portuguese heuristics; set `[G:...]` when the guess is wrong.

## Full example

```sql
CREATE TABLE `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(80) NOT NULL COMMENT 'Full name of the user[N:Full name][S]',
  `password` VARCHAR(60) NOT NULL COMMENT '[P]',
  `role` ENUM('admin','editor','viewer') NOT NULL DEFAULT 'viewer' COMMENT '[E:Administrator|Editor|Viewer]',
  `phone1` VARCHAR(20) NULL,
  `phone2` VARCHAR(20) NULL,
  `photo_url` VARCHAR(200) NULL COMMENT '[I:128x128|avatars|nophoto.png]',
  `balance` DECIMAL(19,4) NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '[D]',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_name_unique` (`name`)
) COMMENT='System users[N:User|Users][G:o]';

CREATE TABLE `posts` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `parent_id` BIGINT NULL,
  `title` VARCHAR(120) NOT NULL COMMENT '[S]',
  `body` TEXT NOT NULL COMMENT '[T]',
  `slug` VARCHAR(140) GENERATED ALWAYS AS (lower(`title`)) STORED,
  PRIMARY KEY (`id`),
  INDEX `posts_title_idx` (`title`, `slug`),
  FULLTEXT INDEX `posts_body_ft` (`body`),
  CONSTRAINT `fk_posts_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_posts_parent` FOREIGN KEY (`parent_id`) REFERENCES `posts` (`id`) ON DELETE SET NULL
) COMMENT='[H:users][K:app.models|app/models/]';
```

What the model holds for `posts`:

- `user_id` matches `reference`; `parent_id` matches `reference` and `self_reference`.
- `$[field.on.delete]` is `CASCADE` for `user_id` and `SET NULL` for `parent_id`.
- `title` is the descriptor; `slug` matches `generated` and `stored`, `$[field.expression]` is ``lower(`title`)``.
- `$[table.inherited]` is `users`, `$[table.package]` is `app.models`, `$[table.path]` is `app/models/`.

A larger Portuguese example is [`samples/input.sql`](../samples/input.sql).
