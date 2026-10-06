# cogen

**Co**de **gen**erator: turn a SQL schema into any code you want.

Write templates once (models, migrations, forms, API routes, docs...) and cogen renders them for every table of your schema. Display names, enum labels, masks and other details SQL can't hold go into column comments.

[![npm](https://img.shields.io/npm/v/@mazinsw/cogen)](https://www.npmjs.com/package/@mazinsw/cogen)
[![license](https://img.shields.io/npm/l/@mazinsw/cogen)](package.json)

## Install

```sh
npm install -g @mazinsw/cogen
```

## Example

**Schema** `schema.sql`:

```sql
CREATE TABLE `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL COMMENT 'Product name[S]',
  `price` DECIMAL(10,2) NOT NULL,
  `status` ENUM('draft','published') NOT NULL DEFAULT 'draft',
  PRIMARY KEY (`id`)
) COMMENT='Products for sale';
```

**Template** `templates/$[Table.norm].ts.cgn`:

```
/** $[table.comment] */
export interface $[Table.norm] {
$[field.each]
  $[field]: $[field.if(number)]number$[field.else]string$[field.end];
$[field.end]
}
```

**Run**:

```sh
cogen -t templates/ -o src/ schema.sql
```

**Result** `src/Products.ts`:

```typescript
/** Products for sale */
export interface Products {
  id: number;
  name: string;
  price: number;
  status: string;
}
```

Add `lang=en` to a [project file](docs/cli.md#project-file) and the interface is named `Product`.

## How it works

1. cogen parses the SQL into tables, fields, keys and the [comment commands](docs/modeling.md#comment-commands) (`[S]`, `[N:name|names]`...).
2. It walks the template directory and mirrors it into the output directory.
3. A path with `$[...]` is rendered once per table (or per field), a path without it once.
4. The `.cgn` suffix is removed from output names. It's optional and keeps editors from parsing templates as real code.

## Documentation

| | |
|---|---|
| [Getting started](docs/getting-started.md) | Five-minute tutorial. |
| [Modeling](docs/modeling.md) | Supported SQL, column types, comment commands, naming rules. |
| [Templating](docs/templating.md) | Tags, loops, conditions, file names and the full reference. |
| [Command line](docs/cli.md) | Options, project file, filtering tables, exit codes. |
| [Samples](samples) | Laravel, Adonis and React templates. |
| [VS Code extension](extension/README.md) | Highlighting, completion, inline errors and live preview for `.cgn` templates. |

## Contributing

```sh
npm install
npm test
npm run cogen -- -t samples/typescript-react -o storage/generated samples/input.sql
```

See [AGENTS.md](AGENTS.md) for the repository layout and conventions.

## License

MIT
