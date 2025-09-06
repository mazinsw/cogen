import { runTemplateText } from '@/util/template';

describe('Runner', () => {
  it('example sql to class', async () => {
    const result = await runTemplateText(
      `CREATE TABLE MyTable (\n` +
        `  name TEXT COMMENT 'Field comment[S]',\n` +
        `  age BOOL NOT NULL DEFAULT 0 COMMENT 'Field comment[F:false]'\n` +
        `) COMMENT = 'Table comment[N:My Table|My tables]';\n`,

      `/** $[table.comment] */\n` +
        `export class $[Table.norm] {\n` +
        `$[field.each]\n` +
        `  /** $[field.comment] */\n` +
        `  private $[field.norm]: $[field.if(boolean)]boolean$[field.else]string$[field.end];\n` +
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
        `  /** Field comment */\n` +
        `  private name: string;\n` +
        `  /** Field comment */\n` +
        `  private age: boolean;\n` +
        `}\n`,
    );
  });

  it('iterate over tables', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users (); CREATE TABLE Products ();',
      '$[table.each]$[table.if(~first)], $[table.end]$$[table.unix]$[table.end]',
      { filename: 'single' },
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

  it('access parent level table', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users (id INT, name TEXT, PRIMARY KEY(id));' +
        'CREATE TABLE Posts (user_id INT, content TEXT, INDEX (user_id), ' +
        '  CONSTRAINT FOREIGN KEY (user_id) REFERENCES Users(id)' +
        ');' +
        'CREATE TABLE Comments (post_id INT, content TEXT, INDEX (post_id), ' +
        '  CONSTRAINT FOREIGN KEY (post_id) REFERENCES Posts(id)' +
        ');',
      '$[field.each(reference)]$[reference.~match(users)]$[table..norm].$[field] -> $[table.norm]$[reference.end]$[field.end]',
    );
    expect(result).toBe('comments.post_id -> posts');
  });

  it('match parent level table', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users (id INT, name TEXT, PRIMARY KEY(id));' +
        'CREATE TABLE Posts (user_id INT, content TEXT, INDEX (user_id), ' +
        '  CONSTRAINT FOREIGN KEY (user_id) REFERENCES Users(id)' +
        ');' +
        'CREATE TABLE Comments (post_id INT, content TEXT, INDEX (post_id), ' +
        '  CONSTRAINT FOREIGN KEY (post_id) REFERENCES Posts(id)' +
        ');',
      '$[field.each(reference)]$[reference.match(posts)]$[table.] > $[table]$[table..match(comments)] < $[table]$[table.end]$[reference.end]$[field.end]',
    );
    expect(result).toBe('Comments > Posts < Comments');
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

  it('replace with capture', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users (link_url TEXT, image_url TEXT COMMENT "[I]");',
      '$[image.replace((.+)_url,file_$1)]',
    );
    expect(result).toBe('file_image');
  });

  it('replace multiple case insensitive', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users_users_USERS ();',
      '$[table.replace(_Users)]',
    );
    expect(result).toBe('Users');
  });

  it('keep new single new lines', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users (name TEXT, age INT);',
      '$[field.each]\n$[field]\n$[field.end]',
    );
    expect(result).toBe('name\nage\n');
  });

  it('negative priority expression', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users (name TEXT, age INT);',
      '$[field.each(~(text|enum))]\n$[field]\n$[field.end]',
    );
    expect(result).toBe('age\n');
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

  it('gender condition check', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Cadeiras (tipo TEXT COMMENT "[G:o]") COMMENT = "[G:a]";' +
        'CREATE TABLE Bancos (agencia TEXT COMMENT "[G:a]") COMMENT = "[G:o]";',
      'Table $[table] is $[table.if(masculine)]masculine$[table.end]$[table.if(feminine)]feminine$[table.end]' +
        ': $[field.each]$[field] is $[field.if(masculine)]masculine$[field.end]$[field.if(feminine)]feminine$[field.end], $[field.end]\n\n',
    );
    expect(result).toBe(
      'Table Cadeiras is feminine: tipo is masculine, \n' +
        'Table Bancos is masculine: agencia is feminine, \n',
    );
  });

  it('check parent dependency', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users (id INT, name TEXT, PRIMARY KEY(id));' +
        'CREATE TABLE Posts (user_id INT, content TEXT, INDEX (user_id), ' +
        '  CONSTRAINT FOREIGN KEY (user_id) REFERENCES Users(id)' +
        ');' +
        'CREATE TABLE Comments (post_id INT, content TEXT, INDEX (post_id), ' +
        '  CONSTRAINT FOREIGN KEY (post_id) REFERENCES Posts(id)' +
        ');',
      '$[table.each(depends)]$[field.each(reference&depends)]$[table.] <- $[table].$[field]$[field.end]\n\n$[table.end]',
    );
    expect(result).toBe('Users <- Posts.user_id\nPosts <- Comments.post_id\n');
  });

  it('check parent dependency', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users_Comments () COMMENT = "AA[*]/_ôBB";',
      '$[table.comment.replace(\\[\\*\\]/_ô)]',
    );
    expect(result).toBe('AABB');
  });
});
