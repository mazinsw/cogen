# Templating

A template is any text file with `$[...]` tags. cogen renders it once per table of the [model](modeling.md) and writes the result to the output directory.

- [Template directory](#template-directory)
- [Tags](#tags)
- [Levels](#levels)
- [Values](#values)
- [Blocks](#blocks)
- [Conditions](#conditions)
- [replace()](#replace)
- [Whitespace](#whitespace)
- [Legacy mode](#legacy-mode)
- [Recipes](#recipes)
- [Reference](#reference)

Examples on this page use the schema from [modeling.md](modeling.md#full-example) with `lang=en`.

## Template directory

cogen walks the template directory (`-t`) recursively and mirrors it into the output directory (`-o`):

| Template path | Generated |
|---|---|
| `README.md` (no `$[...]` in the path) | once, at `README.md` |
| `models/$[Table.norm].ts.cgn` | once per table: `models/User.ts`, `models/Post.ts` |
| `$[table.unix]/index.ts.cgn` | a directory per table, each with `index.ts` |
| `forms/$[table.unix]/$[field.unix].txt.cgn` | once per **field** of each table |

- **`.cgn` suffix**: optional, removed from the output name (`User.ts.cgn` → `User.ts`). It keeps editors, linters and compilers from treating the template as real source code; the [VS Code extension](../extension/README.md) highlights `.cgn` files. Templates without it work the same.
- **Content and name**: the file content is rendered with the same table (and field) that produced its name.
- **Skipping**: when a tag in a path renders to an empty directory name, the file is skipped. Use it to generate a file only for some tables:
  `$[table.if(inherited)]children$[table.end]/$[table.unix].ts` is generated only for tables with `[H:...]`.
- **Duplicates**: when two fields render the same file name (`phone1`, `phone2` → `phone`), only the first is written.
- **Order**: `$[table.order]` is the zero-padded position of the table in the SQL file, useful for migrations: `2024_01_01_00$[table.order]_create_$[table.unix.plural].php`.
- Use [`--filter` / `--exclude`](cli.md#generating-only-some-tables) to generate files for some tables only.

## Tags

```
$[level]                         value
$[level.property.property]       value with properties
$[level.replace(pattern,repl)]   value transformed by a regex
$[level.if(condition)] ... $[level.end]           block
$[level.each(condition)] ... $[level.end]         loop
```

- Keywords are case-insensitive: `$[FIELD.NORM]` works. The casing of the **level** word changes the output, see [Output casing](#output-casing).
- A tag can't span lines and can't contain spaces.
- Text outside tags is copied as is. A `$` not followed by `[` is plain text.

### Output casing

The casing of the level word recases values that have properties:

| Tag | `posts` |
|---|---|
| `$[table.norm]` | `post` |
| `$[Table.norm]` | `Post` |
| `$[TABLE.norm]` | `POST` |
| `$[tAble.norm]` | camelCase: `post` (for `user_profiles`: `userProfile`) |

A tag without properties (`$[table]`, `$[field]`) prints the raw SQL name, whatever the casing.

### Parent access

Inside a loop over tables, `$[table...]` is the current table of the loop. Add a dot after the level to reach the outer table:

```
$[table.each]
$[Table.norm] is listed in $[Table..norm]
$[table.end]
```

Blocks take the dot too: `$[table..match(^user)]` tests the outer table.

## Levels

A level is the first word of a tag: it says *what* the tag talks about.

| Level | Is | Available |
|---|---|---|
| `table` | The current table. | Always. |
| `field` | The current field. | Inside field loops, or when the file name uses a field. Outside loops: the first field of the table. |
| `descriptor` | The descriptor field (`[S]`). | Always (empty when the table has none). |
| `primary` | The primary key field (single-field keys). Inside `$[primary.each]`: each key field. | Always. |
| `image` | The first image field (`[I:...]`). | Always (empty when none). |
| `option` | An enum item. | Inside `$[option.each]`. |
| `reference` | The table referenced by the current field's foreign key. | Field with `reference`. |
| `inherited` | The parent table from `[H:...]`. | Tables with `inherited`; empty otherwise, and `$[inherited.if(...)]` is false. |
| `index`, `unique`, `primary_key`, `constraint`, `foreign` | An index / unique key / primary key / any constraint / foreign key. Value: `.name` only. | Inside the matching loop, see [Indexes and constraints](#indexes-and-constraints). |
| `comment`, `description` | Comment lines, for loops only. | `$[comment.each]`, `$[description.each]`. |

`table`, `reference` and `inherited` share the table [properties](#table-properties). `field`, `descriptor`, `primary`, `image` and `option` share the field [properties](#field-properties).

## Values

```
$[Table.norm]         Post
$[table.unix.plural]  posts
$[Field.name]         Full name
$[field.length]       80
```

Properties are applied left to right, so order matters: `$[table.unix.plural]` is the plural of the unix name, `$[table.name.plural]` the plural of the display name. The full lists are in the [Reference](#reference).

## Blocks

### Conditionals

```
$[field.if(primary)]
  id
$[field.else.if(reference)]
  foreign key
$[field.else.match(^phone)]
  phone
$[field.else]
  other
$[field.end]
```

| Test | True when |
|---|---|
| `if(condition)` | The current item matches the [condition](#conditions). |
| `exists(condition)` | (table levels) Some field of the table matches the condition. |
| `finds(regex)` | (table levels) Some field name matches the regex. |
| `match(regex)` | The current table / field SQL name matches the regex. |
| `contains(word)` | The current table / field SQL name contains `word`. |

- Regexes are JavaScript, case-insensitive and unanchored: use `^...$` for a full match. Balanced parentheses are allowed: `match(^(created|updated)_at$)`.
- Negate any test with `~`: `$[table.~exists(json)]`, `$[field.~match(_id$)]`.
- `else.<test>` chains any number of alternatives; the final `else` is optional and must be last.
- `else.each(...)` runs a loop when every test failed.
- One `end` closes the whole chain. It uses the level of the opening tag: `$[field.if(...)]` ... `$[field.end]`.

Which tests each level has:

| Level | if | exists | finds | match | contains | each | reverse_each |
|---|---|---|---|---|---|---|---|
| `table`, `inherited` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | |
| `reference` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `field` | ✓ | ✓ | | ✓ | ✓ | ✓ | ✓ |
| `descriptor` | ✓ | | | ✓ | ✓ | | |
| `index`, `unique`, `primary`, `constraint`, `foreign` | ✓ | | | | | ✓ | |
| `option`, `comment`, `description` | | | | | | ✓ | |

### Loops

```
export interface $[Table.norm] {
$[field.each(~ignored)]
  $[field.unix]: $[field.if(number)]number$[field.else]string$[field.end];
$[field.end]
}
```

| Loop | Iterates |
|---|---|
| `$[table.each]` | Every table of the model (including tables removed by `--filter`). Inside, `table` is the loop table and `table.` (one dot) the outer one. |
| `$[field.each]` | Fields of the current table. |
| `$[field.reverse_each]` | Same, last to first. |
| `$[reference.each]` | Fields of the table referenced by the current field. |
| `$[inherited.each]` | Fields of the parent table. |
| `$[option.each]` | Items of the current enum field. |
| `$[comment.each]` / `$[description.each]` | Lines of the current table/field comment, wrapped at 72 chars. Print the line with `$[table.comment]` or `$[field.comment]`; `description` escapes `'` as `\'`. |
| `$[index.each]`, `$[unique.each]`, `$[constraint.each]`, `$[foreign.each]` | At table level: the keys of the table. Inside a key or field: the fields of that key. See Indexes and constraints below. |
| `$[primary.each]` | Fields of the primary key. |

The optional condition **filters** items: `$[field.each(reference & required)]`. Without it every item is visited (`each(all)` is the same).

Inside a loop, `first` and `non_first` refer to the position among the **filtered** items, which makes separators easy:

```
[$[field.each(string)]$[field.if(non_first)], $[field.end]'$[field]'$[field.end]]
```
→ `['name', 'password', 'phone1', 'phone2', 'photo_url']`

### Indexes and constraints

`$[index.each]`, `$[unique.each]`, `$[constraint.each]` and `$[foreign.each]` work at two depths:

- **At table level** (outside field loops, or directly inside `$[table.each]`) they iterate the keys of the table. Each key becomes the current one: `$[index.name]` is its name, `$[field]` its first field.
- **Inside a key loop or a field** they iterate the fields of the current key (for a field: the key the field belongs to).

So two nested loops list every index with its fields:

```
$[index.each]
$[index.name]: $[index.each]$[field.if(non_first)], $[field.end]$[field]$[index.end]$[index.if(fulltext)] (fulltext)$[index.end]

$[index.end]
```
→

```
posts_title_idx: title, slug
posts_body_ft: body (fulltext)
```

The empty line is needed because a line ending with a block tag loses its line break, see [Whitespace](#whitespace).

| Loop at table level | Iterates |
|---|---|
| `$[index.each]` | Plain and fulltext indexes. |
| `$[unique.each]` | Unique keys, without the primary key. |
| `$[constraint.each]` | Primary key, unique keys and foreign keys. |
| `$[foreign.each]` | Foreign keys. Inside, `$[reference]` is the referenced table. |

`$[primary.each]` always iterates the primary key fields; its name is `$[primary_key.name]`.

Foreign keys by field:

```
$[field.each(reference)]
$[field] -> $[reference]($[reference.each(primary)]$[field]$[reference.end]) on delete $[FIELD.on.delete] [$[foreign.each]$[foreign.name]$[foreign.end]]
$[field.end]
```
→ `user_id -> users(id) on delete CASCADE [fk_posts_user]`

## Conditions

A condition combines **attributes**, **properties** and **types** with operators:

| Operator | Meaning |
|---|---|
| `~x` | not |
| `x & y` | and |
| `x \| y` | or |
| `(...)` | grouping |

Example: `$[field.each(~(primary|reference) & required)]`. Operators bind right to left with no precedence, so use parentheses when mixing `&` and `|`.

Most conditions test the current field; a few also work on tables (marked *table*). The [Reference](#conditions-1) lists them all.

## replace()

`replace` runs a regex replacement on the value, as the last part of a tag:

```
$[table.replace(s$)]                       remove a trailing "s"
$[field.replace(_url$,_file)]              photo_url → photo_file
$[field.replace(_,-,g)]                    replace every "_"
$[table.unix.replace(^(.)(.*)$,\U$1\E$2)]  posts → Posts
```

- Syntax: `replace(pattern)`, `replace(pattern,replacement)` or `replace(pattern,replacement,flags)`. A missing replacement removes the match.
- Flags: any of `g i m u y`. Without `g` only the first match is replaced.
- `$1`, `$2`... insert capture groups. `\U` uppercases and `\L` lowercases what follows, until `\E`.
- Escape `,` and `)` inside the pattern or replacement as `\,` and `\)`.

## Whitespace

- A line break right **after** a block tag (`if`, `else`, `each`, `end`...) is removed, so a tag alone on a line produces no empty line.
- This also applies to a block tag at the **end** of a text line: `a$[field.end]` followed by a line break joins with the next line. Add an empty line after it to keep the break.
- Spaces **before** a block tag are kept and, inside a loop, repeated on every iteration.

Put block tags at column 0:

```
class A {
$[field.each]
  $[field];
$[field.end]
}
```

→

```
class A {
  id;
  name;
  ...
}
```

Indenting them (`  $[field.each]` ... `  $[field.end]`) would add their indentation to every line and to the closing `}`.

## Legacy mode

[`-l` / `--legacy`](cli.md#options) restores the old meaning of some loops, used by the templates in [`samples/`](../samples):

Prefer the default mode for new templates. Legacy is kept for old templates.

| Tag | Default | Legacy |
|---|---|---|
| `$[table.each(index)]`, `each(unique)`, `each(primary)`, `each(constraint)`, `each(foreign)` | Tables matching the condition. | Indexes / keys of the current table (unique includes the primary key), like `$[index.each]` at table level. |
| `$[table.each(comment)]` | Tables with a comment. | Lines of the table comment. |
| `$[field.each(option)]` | Enum fields with options. | Items of the current enum field. |
| `$[field.each(comment)]`, `each(description)` | Fields with a comment. | Lines of the field comment. |
| `enum` condition | Also true for `ENUM('Y','N')`. | False for `ENUM('Y','N')`. |

## Recipes

### TypeScript model

`models/$[Table.norm].ts.cgn`:

```
/** $[table.comment] */
export interface $[Table.norm] {
$[field.each(~ignored)]
  $[field]$[field.if(null)]?$[field.end]: $[field.if(number)]number$[field.else.if(boolean)]boolean$[field.else.if(option)]$[field.each(option)]$[option.each]$[field.if(non_first)] | $[field.end]'$[field.option]'$[option.end]$[field.end]$[field.else]string$[field.end];
$[field.end]
}
```

→ `models/User.ts`:

```typescript
/** System users */
export interface User {
  id: number;
  name: string;
  password: string;
  role: 'admin' | 'editor' | 'viewer';
  phone1?: string;
  phone2?: string;
  photo_url?: string;
  balance: number;
}
```

### Enum labels

```
$[field.each(option)]
export const $[Field.norm]Labels = {
$[option.each]
  '$[field.option]': '$[Option.name]',
$[option.end]
};
$[field.end]
```

→

```typescript
export const RoleLabels = {
  'admin': 'Administrator',
  'editor': 'Editor',
  'viewer': 'Viewer',
};
```

### Only for some tables

```
$[table.exists(image)]
import { upload } from './upload';
$[table.end]
```

More complete templates for Laravel, Adonis and React live in [`samples/`](../samples).

## Reference

Full grammar: [`src/grammar/TemplateParser.g4`](../src/grammar/TemplateParser.g4).

### Table properties

For `table`, `reference` and `inherited`.

| Tag | Value |
|---|---|
| `$[table]` | Raw SQL name. |
| `$[table.norm]` | PascalCase singular name (`posts` → `Post`). |
| `$[table.norm.default]` | PascalCase name, not singularized (`Posts`). |
| `$[table.unix]` | snake_case singular name, or `[U:...]`. |
| `$[table.unix.plural]` | snake_case plural (by `lang` rules), or second `[U:...]` argument. |
| `$[table.unix.default]` | Second `[U:...]` argument, or snake_case of `norm.default`. |
| `$[table.kebab]` | kebab-case of `unix` (`[U:user_profile]` → `user-profile`). Also `.kebab.plural` and `.kebab.default`. |
| `$[table.name]` | Display name: `[N:...]`, or `norm`. |
| `$[table.name.plural]` | Second `[N:...]` argument, or plural of `name`. |
| `$[table.comment]` | Comment without commands. Inside `$[comment.each]`: the current line. |
| `$[table.gender]` | `a` or `o`, from `[G:...]` or guessed. |
| `$[table.chars]` | Lowercase initials of `norm` (`UserProfile` → `up`). |
| `$[table.letter]` | First letter of `norm`. |
| `$[table.package]` | First `[K:...]` argument. |
| `$[table.path]` | Second `[K:...]` argument. |
| `$[table.inherited]` | Parent table name from `[H:...]`. |
| `$[table.order]` | Zero-padded position of the table in the SQL file (`0`, `1`... or `00`, `01`... with 10+ tables). |
| `$[table.style]` | First `[L:...]` argument. |
| `$[table.style.extra]` | Second `[L:...]` argument. |
| `$[table.identifier]` | `[ID:...]`. |

### Field properties

For `field`, `descriptor`, `primary`, `image` and `option`.

| Tag | Value |
|---|---|
| `$[field]` | Raw SQL name. |
| `$[field.norm]` | PascalCase name, numbers removed (`phone2` → `Phone`). |
| `$[field.norm.singular]` | `norm`, singularized with the table rules. |
| `$[field.noid]` | `norm` without a trailing `Id` (`user_id` → `User`). |
| `$[field.unix]` | snake_case name, or `[U:...]`. |
| `$[field.kebab]` | kebab-case of `unix` (`first_name` → `first-name`). |
| `$[field.name]` | Display name: `[N:...]`, or the raw name. |
| `$[field.info]` | `[F:...]`, else `[N:...]`, else the raw name. |
| `$[field.comment]` | Comment without commands. Inside `$[comment.each]`: the current line. |
| `$[field.default]` | SQL default value as written (`'viewer'`, `0`, `CURRENT_TIMESTAMP`), or `null`. For `image`: the default image. |
| `$[field.expression]` | Generated column expression, without the outer parentheses. |
| `$[field.on.delete]`, `$[field.on.update]` | Foreign key action (`CASCADE`, `SET NULL`, `RESTRICT`, `NO ACTION`). `NO ACTION` when not a foreign key. |
| `$[field.length]` | Declared `VARCHAR` length. |
| `$[field.size]` | Size in bytes for numeric and date types, `0` otherwise (see [types](modeling.md#column-types)). |
| `$[field.mask]` | `[M:...]`. |
| `$[field.identifier]` | `[ID:...]`. |
| `$[field.style]`, `$[field.style.extra]` | `[L:...]` arguments. |
| `$[field.gender]` | `a` or `o`. |
| `$[field.chars]`, `$[field.letter]` | Lowercase initials of `norm` / first letter of the raw name. |
| `$[field.array.index]`, `.array.number`, `.array.count` | Position (from 0 / from 1) and size of a [numbered field](modeling.md#numbered-fields) group. Empty for other fields. |
| `$[field.option]` | Inside `$[option.each]`: the enum item value. |
| `$[field.option.unix]` | Inside `$[option.each]`: the item value in snake_case. |
| `$[option]` | Inside `$[option.each]`: the enum item value (same as `$[field.option]`). |
| `$[option.name]` | Inside `$[option.each]`: the `[E:...]` label of the item, or its value. |
| `$[option.unix]` | Inside `$[option.each]`: the item value in snake_case. |
| `$[option.kebab]` | Inside `$[option.each]`: the item value in kebab-case. |
| `$[option.number]` | Inside `$[option.each]`: item position, from 1. |
| `$[option.count]` | Number of items of the enum field. |
| `$[option.norm]` | Inside `$[option.each]`: the item value in PascalCase. |
| `$[option.index]` | Inside `$[option.each]`: item position, from 0. |
| `$[option.low]`, `$[option.high]` | First (`0`) and last item index of the enum field. |
| `$[image.width]`, `$[image.height]` | From `[I:WxH]`, default `64`. |
| `$[image.folder]` | Second `[I:...]` argument, or the table unix name. |
| `$[image.default]` | Third `[I:...]` argument. |
| `$[index.name]`, `$[unique.name]`, `$[primary_key.name]`, `$[constraint.name]`, `$[foreign.name]` | Name of the current index / key, inside its loop. |

### Conditions

| Condition | True when |
|---|---|
| **Types** | |
| `integer` / `int`, `tinyint`, `bigint`, `float`, `double`, `currency` | Numeric types, see [column types](modeling.md#column-types). |
| `string`, `char`, `text`, `json`, `blob` | Text and binary types. |
| `date`, `time`, `datetime`, `timestamp` | Date and time types. |
| `boolean` | `BOOL` or `ENUM('Y','N')`. |
| `enum` | Any `ENUM` (in legacy mode, not `ENUM('Y','N')`). |
| **Field** | |
| `all` | Always. |
| `number` | Any numeric type. |
| `option` | `ENUM` that is not a boolean. |
| `primary` | Part of the primary key. |
| `reference` / `foreign` | Has a foreign key. *table*: `foreign` is true when the table has foreign keys. |
| `self_reference` | Foreign key to its own table. |
| `depends` | The field references the outer table of a `$[table.each]`. *table*: the loop table references the outer table. |
| `unique` | Part of a unique key or the primary key. *table*: has unique keys. |
| `index` | Part of any index or key except foreign keys. Inside a key loop: true. *table*: has indexes. |
| `constraint` | The table has constraints besides the primary key. |
| `fulltext` | Inside an index loop: the index is `FULLTEXT`. |
| `required` / `not_null` / `non_null` | `NOT NULL`. |
| `null` | Nullable. |
| `optional` | Nullable or has a default value. |
| `default` | Has a default value. |
| `unsigned` | `UNSIGNED`. |
| `generated`, `virtual`, `stored` | Generated column of any / that kind. |
| `descriptor` | Is the table descriptor (`[S]`). |
| `searchable` | Has `[S]` or `[S:S]`. |
| `ignored` | Has `[D]`. |
| `password` | Has `[P]`. |
| `radio` | Has `[R]`. |
| `masked` | Has `[M:...]`. |
| `image` | Has `[I:...]`. |
| `info` | Has `[F:...]`. *table* too. |
| `array` | Is a [numbered field](modeling.md#numbered-fields). |
| `repeated` | Numbered field after the first one. |
| `masculine`, `feminine` | Gender. *table* too. |
| `pluralizable`, `unpluralizable` | The SQL name is (not) the plural of its singular name. *table* too. |
| `few_fields` | Enum with fewer than 4 items; inside an index loop, index with fewer than 4 fields. True for non-enum fields. |
| `many` | Enum with 2+ items / index with 2+ fields. True for non-enum fields. |
| `single` | Enum with 1 item / index with 1 field. True for non-enum fields. |
| `first`, `non_first` | First / not first item of the enclosing loop. |
| **Table attributes** | |
| `comment` / `description` | Has a comment text. Works on fields too. |
| `inherited` | Has `[H:...]`. |
| `package` | Has `[K:...]`. |
| `path` | `[K:...]` has a path argument. |
