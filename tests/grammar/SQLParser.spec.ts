import { parseSQL } from '@/util/helper';

describe('SQLParser', () => {
  it('simple create table', async () => {
    const parser = parseSQL('CREATE TABLE User ();');
    const root = parser.script();
    expect(root.toStringTree(parser)).toBe(
      '(script (stmt (' +
        'createTable CREATE TABLE (tableName (idName User)) ( ) tableOptions' +
        ') ;))',
    );
  });

  it('generated column', async () => {
    const parser = parseSQL(
      'CREATE TABLE `members` (\n' +
        '  `user_id` INT UNSIGNED NULL,\n' +
        '  `leave_at` TIMESTAMP NULL,\n' +
        '  `active_user_id` INT UNSIGNED GENERATED ALWAYS AS ' +
        "(if((`leave_at` is null),`user_id`,NULL)) VIRTUAL COMMENT 'Active user',\n" +
        '  `total` INT AS (`user_id` + 1) STORED NOT NULL\n' +
        ');',
    );
    const root = parser.script();
    expect(parser.numberOfSyntaxErrors).toBe(0);
    const tree = root.toStringTree(parser);
    expect(tree).toContain(
      '(generatedColumn GENERATED ALWAYS AS (generatedExpression ( ',
    );
    expect(tree).toContain(') )) VIRTUAL)');
    expect(tree).toContain(
      '(expressionToken +) (expressionToken 1) )) STORED) (columnNotNull NOT NULL)',
    );
  });
});
