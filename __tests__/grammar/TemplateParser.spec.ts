import { parseTemplate } from '../helper';

describe('TemplateParser', () => {
  it('table normalized name', async () => {
    const parser = parseTemplate("$a$[table.norm]\\$[0]");
    const root = parser.template();
    expect(root.toStringTree(parser)).toBe(
      '(template ' +
      '(statement (text $a)) ' +
      '(statement (constant (tableStmt $[ (tableLevel table) (tableProps . (tableProp norm)) ]))) ' +
      '(statement (text \\$[0])) ' +
      '<EOF>)'
    );
  });
});
