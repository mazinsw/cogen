import { DataSource } from '@/ast/entity/data-source';
import { TemplateSource } from '@/ast/entity/templace-source';
import { Runner } from '@/tools/runner';
import { Configuration } from '@/util/configuration';
import { runTemplateText } from '@/util/template';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';

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

  it('replace with upper and lower case transform', async () => {
    const result = await runTemplateText(
      'CREATE TABLE producs_for_CUSTOMERS ();',
      '$[table.replace((.+)_(.+)_(.+),\\U$1_\\E$2_\\L$3)]',
    );
    expect(result).toBe('PRODUCS_for_customers');
  });

  it('replace multiple case insensitive', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users_users_USERS ();',
      '$[table.replace(_Users)]',
    );
    expect(result).toBe('Users');
  });

  it('clear regex flags', async () => {
    const result = await runTemplateText(
      'CREATE TABLE _users_users_Users ();',
      '$[table.replace(_users,,)]',
    );
    expect(result).toBe('_users_Users');
  });

  it('override regex flags', async () => {
    const result = await runTemplateText(
      'CREATE TABLE _users_users_Users ();',
      '$[table.replace(_users,,i)]',
    );
    expect(result).toBe('_users_Users');
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

  it('generated columns', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Members (user_id INT, leave_at TIMESTAMP NULL, ' +
        'active_user_id INT GENERATED ALWAYS AS (if((`leave_at` is null), `user_id`, NULL)) VIRTUAL, ' +
        'total INT AS (user_id + 1) STORED NOT NULL);',
      '$[field.each(generated)]$[field] $[field.if(virtual)]virtual$[field.end]' +
        '$[field.if(stored)]stored$[field.end] $[field.expression]\n$[field.end]' +
        '$[field.each(~generated)]$[field] $[field.end]',
    );
    expect(result).toBe(
      'active_user_id virtual if((`leave_at` is null), `user_id`, NULL)\n' +
        'total stored user_id + 1\n' +
        'user_id leave_at ',
    );
  });

  it('strip template extension from file name', async () => {
    const files: string[] = [];
    await runTemplateText(
      'CREATE TABLE Users (); CREATE TABLE Products ();',
      'content',
      {
        filename: 'src/$[table.unix].html.cgn',
        async onWriteFile(destFile) {
          files.push(destFile);
        },
      },
    );
    expect(files).toEqual([
      path.join('src', 'users.html'),
      path.join('src', 'products.html'),
    ]);
  });

  it('strip template extension from static file name', async () => {
    const files: string[] = [];
    await runTemplateText('CREATE TABLE Users ();', 'content', {
      filename: 'src/index.ts.cgn',
      async onWriteFile(destFile) {
        files.push(destFile);
      },
    });
    expect(files).toEqual(['src/index.ts']);
  });

  it('keep plain template file name', async () => {
    const files: string[] = [];
    await runTemplateText('CREATE TABLE Users ();', 'content', {
      filename: 'src/$[table.unix].ts',
      async onWriteFile(destFile) {
        files.push(destFile);
      },
    });
    expect(files).toEqual([path.join('src', 'users.ts')]);
  });

  it('keep template extension on directory', async () => {
    const tempDir = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'cogen-'));
    try {
      const runner = new Runner();
      runner.dataSource = new DataSource(
        runner.getConfiguration(),
        'CREATE TABLE Users ();',
      );
      await runner.dataSource.load(true);
      const filenameSource = new TemplateSource(
        runner.getConfiguration(),
        path.join(tempDir, '$[table.unix].cgn'),
      );
      await filenameSource.load(true);
      const contentSource = new TemplateSource(runner.getConfiguration(), '');
      await runner.generate(
        filenameSource,
        contentSource,
        undefined,
        tempDir,
        true,
      );
      expect(fs.readdirSync(tempDir)).toEqual(['users.cgn']);
    } finally {
      await fs.promises.rm(tempDir, { recursive: true, force: true });
    }
  });

  it('generate only filtered tables', async () => {
    const result = await runTemplateText(
      'CREATE TABLE Users (); CREATE TABLE Products ();',
      '$[table.unix]:$[table.each]$[table.unix],$[table.end]',
      { tableFilter: (table) => table.getName() === 'Products' },
    );
    expect(result).toBe('products:users,products,');
  });

  describe('filter and exclude tables from configuration', () => {
    const input =
      'CREATE TABLE Users (); CREATE TABLE Products (); CREATE TABLE Orders ();';
    const template = '$[table.unix]:$[table.each]$[table.unix],$[table.end];';

    it('generate only tables in filter', async () => {
      const configuration = new Configuration().setFilterTables('products');
      const result = await runTemplateText(input, template, { configuration });
      expect(result).toBe('products:users,products,orders,;');
    });

    it('skip tables in exclude', async () => {
      const configuration = new Configuration().setExcludeTables(
        'users,orders',
      );
      const result = await runTemplateText(input, template, { configuration });
      expect(result).toBe('products:users,products,orders,;');
    });

    it('exclude wins over filter', async () => {
      const configuration = new Configuration()
        .setFilterTables('users,products')
        .setExcludeTables('users');
      const result = await runTemplateText(input, template, { configuration });
      expect(result).toBe('products:users,products,orders,;');
    });

    it('match table names case-insensitively', async () => {
      const configuration = new Configuration().setFilterTables(
        'PRODUCTS, orders',
      );
      const result = await runTemplateText(input, template, { configuration });
      expect(result).toBe(
        'products:users,products,orders,;orders:users,products,orders,;',
      );
    });
  });
});
