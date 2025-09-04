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
});
