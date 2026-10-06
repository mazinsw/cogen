# Getting started

This tutorial generates a TypeScript interface per table and a route list from a small schema.

## 1. Install

```sh
npm install -g @mazinsw/cogen
```

Or run it without installing: `npx @mazinsw/cogen ...`.

## 2. Write the schema

`schema.sql`:

```sql
CREATE TABLE `categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(60) NOT NULL COMMENT 'Category title[S]',
  PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category_id` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL COMMENT 'Product name[S]',
  `price` DECIMAL(10,2) NOT NULL,
  `status` ENUM('draft','published') NOT NULL DEFAULT 'draft',
  `created_at` DATETIME NOT NULL COMMENT '[D]',
  PRIMARY KEY (`id`),
  FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
);
```

`[S]` marks the descriptor field and `[D]` a field filled by the system. All comment commands are in [modeling.md](modeling.md#comment-commands).

## 3. Write the templates

A template directory mirrors the output directory. A `$[...]` tag in a path makes one file per table.

`templates/models/$[Table.norm].ts.cgn`:

```
export interface $[Table.norm] {
$[field.each(~ignored)]
  $[field]: $[field.if(number)]number$[field.else.if(option)]$[field.each(option)]$[option.each]$[field.if(non_first)] | $[field.end]'$[field.option]'$[option.end]$[field.end]$[field.else]string$[field.end];
$[field.end]
}
```

`templates/routes.txt` (no tag in the name: generated once):

```
$[table.each]
GET /$[table]
$[table.end]
```

`$[table]` is the raw SQL name. Generated plurals only append `s` (`$[table.unix.plural]` would give `categorys`), so irregular plurals need `[U:category|categories]` in the table comment.

The `.cgn` suffix is optional and removed from the output name. It stops editors and linters from parsing templates as TypeScript.

## 4. Save the settings

`cogen.properties`:

```properties
lang=en
inputFile=schema.sql
templatePath=templates/
outputPath=src/
```

`lang=en` loads English singularization rules, so `products` becomes `Product`.

## 5. Generate

```sh
cogen -p cogen.properties
```

```
src/models/Category.ts
src/models/Product.ts
src/routes.txt
```

`src/models/Product.ts`:

```typescript
export interface Product {
  id: number;
  category_id: number;
  name: string;
  price: number;
  status: 'draft' | 'published';
}
```

`src/routes.txt`:

```
GET /categories
GET /products
```

## Next steps

- [templating.md](templating.md): loops, conditions, file name rules and the full tag reference.
- [modeling.md](modeling.md): supported SQL and comment commands.
- [cli.md](cli.md): every option, project file keys, `--filter` / `--exclude`.
- [`samples/`](../samples): Laravel, Adonis and React templates.
- The [VS Code extension](../extension/README.md) adds highlighting, completion, inline errors and a live preview for `.cgn` files.
