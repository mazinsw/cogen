import { parseTemplate } from '@/util/helper';
import * as fs from 'node:fs';
import * as path from 'node:path';

describe('TemplateParser', () => {
  it('escaped and invalid symbol', async () => {
    const parser = parseTemplate(
      '$a $[table] \\$[table] $b \nwo[(])rd$a $[field]',
    );
    const root = parser.template();
    expect(root.toStringTree(parser)).toBe(
      '(template ' +
        '(statement (textContent $a )) ' +
        '(statement (constant (tableStmt $[ (tableLevel table) ]))) ' +
        '(statement (textContent  \\$[table] $b \\nwo[(])rd$a )) ' +
        '(statement (constant (fieldStmt $[ (fieldLevel field) ]))) ' +
        '<EOF>)',
    );
  });

  it('table normalized name', async () => {
    const parser = parseTemplate('$[table.norm]');
    const root = parser.template();
    expect(root.toStringTree(parser)).toBe(
      '(template ' +
        '(statement (constant (tableStmt $[ (tableLevel table) (tableProps . (tableProp norm)) ]))) ' +
        '<EOF>)',
    );
  });

  it('if with multiple conditions and levels', async () => {
    const parser = parseTemplate(
      '$[table.if((image|descriptor)&string)]code$[table.end]',
    );
    const root = parser.template();
    expect(root.toStringTree(parser)).toBe(
      '(template ' +
        '(statement (block (tableIfStmt $[ table . if ( (tableCondition (condition (anyCondition ' +
        '(priorityCondition ( (condition (anyCondition ' +
        '(expression (property image))) ' +
        '(orCondition | (condition ' +
        '(expression (property descriptor))))) ))) (andCondition & (condition (expression (type string)))))) ) ] ' +
        '(statement (textContent code)) $[ table . end ]))) <EOF>)',
    );
  });

  it('parse from template file', async () => {
    const parser = parseTemplate(
      fs.readFileSync(
        path.join(
          __dirname,
          '../../samples/typescript-react/$[table.style]-register-dialog.tsx',
        ),
        'utf8',
      ),
    );
    const root = parser.template();
    expect(root.toStringTree(parser)).toContain('fieldReverseEachStmt');
  });

  it('parse from more complex template file', async () => {
    const parser = parseTemplate(
      fs.readFileSync(
        path.join(
          __dirname,
          '../../samples/typescript-react/$[table.style]-form.tsx',
        ),
        'utf8',
      ),
    );
    const root = parser.template();
    expect(root.toStringTree(parser)).toContain('replaceStmt');
  });

  it('parse migration template file', async () => {
    const parser = parseTemplate(
      fs.readFileSync(
        path.join(
          __dirname,
          '../../samples/adonis-database-migration/17360021896$[table.order]_create_$[table.norm]_table.ts',
        ),
        'utf8',
      ),
    );
    const root = parser.template();
    expect(root.toStringTree(parser)).toContain('fulltext');
  });
});
