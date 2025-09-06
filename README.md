Cogen - `Co`de `gen`erator
=

A code generator from SQL to any language

## Example

### Convert SQL table to typescript class

#### Model
```sql
CREATE TABLE MyTable (
  name TEXT COMMENT 'Field comment[S]',
  age BOOL NOT NULL DEFAULT 0 COMMENT 'Field comment[F:false]'
) COMMENT = 'Table comment[N:My Table|My tables]';
```

#### Template filename: `src/models/$[table.unix].ts`
```typescript
/** $[table.comment] */
export class $[Table.norm] {
$[field.each]
  /** $[field.comment] */
  public $[field.norm]: $[field.if(boolean)]boolean$[field.else]string$[field.end];
$[field.end]
}
```

#### Result filename: `src/models/my_table.ts`
```typescript
/** Table comment */
export class MyTable {
  /** Field comment */
  public name: string;
  /** Field comment */
  public age: boolean;
}
```

## Modeling

### Append these command to end of each comment of each field or table
### format: `[command:options]`
- example: `'Any comment[N:name|names]'`

### Commands:
- `[D]` Default field, with this flag, the field must not be filled by the user
- `[E:Apple|Orange|Banana]` Informs enum beautiful names
- `[F:false]` describe the field or table
- `[G:a]` or `[G:o]` name gender
- `[H:table name]` Define inheritance
- `[I:64x64|user|default.png]` Treats that field as image url, options sets the image dimension, base directory and default image name
- `[K:package.io|package/io/]` define a package name and its directory
- `[L:form-control|extra style]` field style and extra style
- `[M:999-9999]` set field as masked by option
- `[N:name|names]` set the beautiful name and/or plural name
- `[P]` Treats that field as password field
- `[R]` mark enum field as a radio
- `[S]` as searchable descriptor or `[S:S]` as searchable only
- `[T]` mark field to be filled as textarea element
- `[U:unixname|unixnames]` set the unix name and/or plural unix name
- `[ID:identifier]` set some identifier to field or table

## Template
### format: `$[source.attribute]` or  `$[source.function(expression)]`
#### expression operators: `~` = not, `|` = or, `&` = and, `(` `)` priority
#### parent access: `.`
- example: `class $[Table..norm] {}`
- output: `class MyParentTable {}`


commands:
- `$[table]` database table name
  - `$[table.unix]` Table name in unix format
  - `$[table.unix.replace(s$)]` Remove plural from table name after convert to unix format
  - `$[table.unix.plural]` database table name on plural
  - `$[table.norm]` Table name normalized and despluralized
  - `$[table.norm.default]` Table name normalized without despluralize
  - `$[table.name]` Beautiful name of table
  - `$[table.name.plural]` Beautiful name of table on plural
  - `$[table.style]` css style of table
  - `$[table.style.extra]` css extra style of table
  - `$[table.info]` Describe the table functionality
  - `$[table.comment]` Comment of table or each comment line wrapped when in loop
  - `$[table.gender]` table gender
  - `$[table.chars]` all word first characters of table name
  - `$[table.letter]` first char of table name
  - `$[table.package]`  defined package for table
  - `$[table.inherited]`  defined package for table
  - `$[table.path]`  defined path for class file
  - `$[table.order]` left zero padded table order
  - `$[table.if(attribute)]` table condition, attributes:
    - comment
    - depends: check if current table depends on its parent
    - index
    - inherited
    - package
    - path
    - pluralizable
    - unique
    - unpluralizable
  - `$[table.exists(type|attribute)]` check if the table contains a field with matching type or attribute
    example: `$[table.~exists(comment)]` check if table doesn't have a commentary
  - `$[table..match(regex)]` test if regex match parent table name
  - `$[table.finds(column_name)]` check if the table contains a field called column_name
    example: `$[table.finds(.*_at)]` check if table has field name as date
  - `$[table.each]` for each all tables
    example: table.each(index), for each all index
    example: table.each(unique), for each unique index including primary
    example: table.each(primary), for each primary key index
    example: table.each(constraint), for each all constraint including primary and unique index
    example: table.each(foreign), for each all foreign key
    example: table.each(comment), for each comment line wrapped
  - `$[table.end]` end table exists condition or each loop

- `$[index]` index field name
  - `$[index.name]` index name
  - `$[index.each(type|attribute)]` for each field of index
  - `$[index.if(attribute)]` few_fields, fulltext

- `$[unique]` unique field name
  - `$[unique.name]` unique index name
  - `$[unique.each(type|attribute)]` for each field of unique index

- `$[primarykey]` primary key field name
  - `$[primarykey.name]` primary key index name

- `$[primary.each(type|attribute)]` for each field of primary key index

- `$[constraint]` first constraint field name
  - `$[constraint.name]` constraint name
  - `$[constraint.each(type|attribute)]` for each field of constraint

- `$[foreign]` first foreign field name
  - `$[foreign.name]` foreign key name
  - `$[foreign.each(type|attribute)]` for each field of foreign key

- `$[inherited]`  inherited table

- `$[primary]` primary key field have all field properties, when primary key have only one field

- `$[descriptor]` main field of table, have all field properties

- `$[comment.each]` each line of comment
- `$[comment]` single line of comment break by 72 chars

- `$[description.each]` each line of comment with ' escaped
- `$[description]` single line of comment with ' escaped break by 72 chars

- `$[reference]` referenced table by field or constraint, have all table commands
  - `$[reference.match(regex)]` test if regex match referenced table name
  - `$[reference.finds(column_name)]` check if the referenced table contains a field called column_name
    example: `$[reference.finds(.*_at)]` check if referenced table has field name as date pattern
  - `$[reference.reverse_each]` reverse for each field process content
  - `$[reference.each(type|attribute&all)]` for each field of referenced constraint table

- `$[field]` name of table field
  - `$[field.replace(_url,_file)]` replace field name from ie. image_url to image_file
  - `$[field.unix]` name of field in unix format
  - `$[field.norm]` name of field normalized
  - `$[field.norm.singular]` Table name normalized on singular
  - `$[field.name]` Beautiful name of table field
  - `$[field.info]` Describe the field functionality
  - `$[field.comment]` Comment of the field or each comment line wrapped when in loop
  - `$[field.content]` fill with each field template generated
  - `$[field.mask]` mask informed on model for the field
  - `$[field.style]` css style of field
  - `$[field.gender]` field gender
  - `$[field.chars]` all word first characters of field name
  - `$[field.letter]` first char of field name
  - `$[field.array.count]` number of common fields, i.e, same name with different number
  - `$[field.array.index]` current index of common field, start from 0
  - `$[field.array.number]` current number of common field, start from 1
  - `$[field.size]` Size of the field in bytes
  - `$[field.length]` Length of the string field
  - `$[field.each]` for each table field or each field of source on legacy
    - legacy example: `$[field.each(primary)]` for each primary key fields
    - example: `$[field.each(reference & required)]`
    - legacy example: `$[field.each(comment)]`,for each comment line wrapped
    - example: `$[field.each(search)]`
    - legacy example: `$[field.each(option)]`,for each option of field(enum items)
    - example: `$[field.each(all)]` for each all table field
  - `$[field.end]` end each loop
  - `$[field.if(type|attribute&~(type|~attribute))]` test if field is type or has attributes, example: `$[field.if(reference)]` attributes:
    - array
    - bigint
    - blob
    - boolean
    - comment
    - currency
    - date
    - datetime
    - default
    - depends: check if field references its parent table
    - description
    - descriptor
    - double
    - enum
    - feminine
    - few_fields
    - first
    - float
    - image
    - info
    - integer
    - many
    - masculine
    - masked
    - non_first
    - non_null
    - not_null
    - null
    - optional
    - pluralizable
    - primary
    - radio
    - reference
    - repeated
    - required
    - searchable
    - self_reference
    - single
    - string
    - text
    - time
    - unique
    - unpluralizable
    - unsigned
  - `$[field.else]` when if condition is false (must be the last before field.end)
  - `$[field.else.if(type|attribute)]` when if condition is false and make a test if field type or has attributes
  - `$[field.end]` end if
  - `$[field.match(regex)]` test if regex match field SQL name
  - `$[field.end]` end match
  - `$[field.contains(text)]` test if field SQL name contains "text"
  - `$[field.end]` end contains

- `$[option]` or `$[field.option]` enum item value
  - `$[option.unix]` enum item value as unix name
  - `$[option.norm]` enum item value normalized
  - `$[option.low]` first enum item index, start from 0
  - `$[option.high]` last enum item index, start from 0
  - `$[option.index]` current index of option, start from 0
  - `$[option.number]` current number of option, start from 1
  - `$[option.count]` count of enum items

- `$[image]` or `$[field.image]` first image field of table `[I]`
  - `$[image.width]` recommended image width
  - `$[image.height]` recommended image height
  - `$[image.folder]` image folder to upload
  - `$[image.default]` default image url

### Tip: all command allow case formatting
- example: for table name `category`, `$[Table.name]` outputs: `Category`
- example: for table name `Category`, `$[table.name]` outputs: `category`
- example: for table name `category`, `$[TABLE.name]` outputs: `CATEGORY`
- example: for table name `CaTeGoRy`, `$[tAble.name]` outputs: `CaTeGoRy`

## Command line

### Usage: `cogen [options] input.sql`
#### Options:
 - (`-d` | `--despluralize`) `"match1|match2/slice_end/[replacement[/min_length]];ms|ls/1/s/4"`: set the despluralization database rules
 - (`-f` | `--file` | `-i` | `--input`) `input.sql`: set the input sql file
 - (`-h` | `--help`): show this help
 - (`-l` | `--legacy`): use legacy loops instead of as filter
 - (`-o` | `--output`) `storage/generated`: set the output directory
 - (`-p` | `--project`) `cogen.properties`: read a project from file
 - (`-s` | `--silent`): run without print anything
 - (`-t` | `--template`) `scripts/template/`: set the template input directory
 - (`-u` | `--uppercase`) `"|USA|W3C|"`: set the uppercase database names
 - (`-w` | `--write`) `cogen.properties`: save configuration to file when finishes
