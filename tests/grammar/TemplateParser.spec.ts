import { parseTemplate } from '../helper';

describe('TemplateParser', () => {
  it('escaped and invalid symbol', async () => {
    const parser = parseTemplate("$a $[table] \\$[table] $b \nwo[(])rd$a $[field]");
    const root = parser.template();
    expect(root.toStringTree(parser)).toBe(
      '(template ' +
      '(statement (text $a )) ' +
      '(statement (constant (tableStmt $[ (tableLevel table) ]))) ' +
      '(statement (text  \\$[table] $b \\nwo[(])rd$a )) ' +
      '(statement (constant (fieldStmt $[ (fieldLevel field) ]))) ' +
      '<EOF>)'
    );
  });

  it('table normalized name', async () => {
    const parser = parseTemplate("$[table.norm]");
    const root = parser.template();
    expect(root.toStringTree(parser)).toBe(
      '(template ' +
      '(statement (constant (tableStmt $[ (tableLevel table) (tableProps . (tableProp norm)) ]))) ' +
      '<EOF>)'
    );
  });

  it('if with multiple conditions and levels', async () => {
    const parser = parseTemplate('$[table.if((image|descriptor)&string)]code$[table.end]');
    const root = parser.template();
    expect(root.toStringTree(parser)).toBe(
      '(template ' +
      '(statement (block (tableIfStmt $[ table . if ( (tableCondition (condition (anyCondition ' +
      '(priorityCondition ( (condition (anyCondition ' +
      '(expression (property image))) ' +
      '(orCondition | (condition ' +
      '(expression (property descriptor))))) ))) (andCondition & (condition (expression (type string)))))) ) ] ' +
      '(statement (text code)) $[ table . end ]))) <EOF>)'
    );
  });
});
