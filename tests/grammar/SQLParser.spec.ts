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
});
