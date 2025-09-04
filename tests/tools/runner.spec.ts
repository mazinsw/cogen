import { runTemplateText } from '@/util/template';

describe('Runner', () => {
  it('example sql to class', async () => {
    const result = await runTemplateText(
      `CREATE TABLE MyTable (\n` +
        `    name TEXT COMMENT 'Field comment[S]',\n` +
        `    age BOOL NOT NULL DEFAULT 0 COMMENT 'Field comment[F:false]'\n` +
        `) COMMENT = 'Table comment[N:My Table|My tables]';\n`,

      `/** $[table.comment] */\n` +
        `export class $[Table.norm] {\n` +
        `$[field.each]\n` +
        `    /** $[field.comment] */\n` +
        `    private $[field.norm]: $[field.if(boolean)]boolean$[field.else]string$[field.end];\n` +
        `$[field.end]\n` +
        `}\n`,
      {
        filename: 'src/models/$[table.unix].ts',
        async onWriteFile(destFile) {
          expect(destFile).toBe('src/models/my_table.ts');
        },
      },
    );
    expect(result).toBe(
      `/** Table comment */\n` +
        `export class MyTable {\n` +
        `    /** Field comment */\n` +
        `    private name: string;\n` +
        `    /** Field comment */\n` +
        `    private age: boolean;\n` +
        `}\n`,
    );
  });

  it('iterate over tables', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users (); CREATE TABLE Products ();',
      '$[table.each]$[table.if(~first)], $[table.end]$$[table.unix]$[table.end]',
    );
    expect(result).toBe('$users, $products');
  });

  it('iterate over fields', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users (full_name TEXT, age INT);',
      '$[field.each], $[fIeld.norm]$[field.end]',
    );
    expect(result).toBe(', fullName, age');
  });

  it('iterate non integer fields', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users (name TEXT, age INT);',
      '$[field.each(~int)]$[field]$[field.end]',
    );
    expect(result).toBe('name');
  });

  it('replace field name over loop', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users (image_url TEXT COMMENT "[I]", cover_url TEXT COMMENT "[I]");',
      '$[field.each(image)], $[image.replace(_url,_file)]$[field.end]',
    );
    expect(result).toBe(', image_file, cover_file');
  });

  it('replace inline field name', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users (link_url TEXT, image_url TEXT COMMENT "[I]");',
      '$[image.replace(_url,_file)]',
    );
    expect(result).toBe('image_file');
  });

  it('keep new single new lines', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users (name TEXT, age INT);',
      '$[field.each]\n$[field]\n$[field.end]',
    );
    expect(result).toBe('name\nage\n');
  });

  it('each field option', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users (active ENUM("Y", "N"), gender ENUM("male", "female"));',
      '$[field.each(enum)]$[field.each(option)], $[field.norm].$[field.option]$[field.end]$[field.end]',
    );
    expect(result).toBe(', gender.male, gender.male');
  });

  it('legacy each field option', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users (active ENUM("Y", "N"), gender ENUM("male", "female"));',
      '$[field.each(enum)]$[field.each(option)], $[field.norm].$[field.option]$[field.end]$[field.end]',
      { legacy: true },
    );
    expect(result).toBe(', gender.male, gender.female');
  });

  it('each comment line of table', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users () COMMENT = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";',
      '$[comment.each]$[table.comment]\n$[comment.end]',
    );
    expect(result).toBe(
      'is simply dummy text of the printing and typesetting industry. Lorem\nIpsum has been the industrys standard dummy text ever since the 1500s,\nwhen an unknown printer took a galley of type and scrambled it to make a\ntype specimen book. It has survived not only five centuries, but also\nthe leap into electronic typesetting, remaining essentially unchanged.\n',
    );
  });

  it('legacy each comment line of table', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users () COMMENT = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";',
      '$[table.each(comment)]$[table.comment]\n$[table.end]',
      { legacy: true },
    );
    expect(result).toBe(
      'is simply dummy text of the printing and typesetting industry. Lorem\nIpsum has been the industrys standard dummy text ever since the 1500s,\nwhen an unknown printer took a galley of type and scrambled it to make a\ntype specimen book. It has survived not only five centuries, but also\nthe leap into electronic typesetting, remaining essentially unchanged.\n',
    );
  });
});
