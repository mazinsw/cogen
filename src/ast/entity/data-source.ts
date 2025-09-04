import { Node } from '@/ast/entity/node';
import { Source } from '@/ast/entity/source';
import { Table } from '@/ast/entity/table';
import { ASTBuilder } from '@/ast/sql/ast-builder';

export class DataSource extends Source {
  public tables: Table[] = [];

  public async load(pathAsContent?: boolean) {
    const builder = new ASTBuilder(this);
    const ok = await builder.build(this.filePathOrContents, pathAsContent);
    if (ok) {
      return;
    }
    for (const error of builder.getErrors()) {
      this.logger?.addMessage(error);
    }
    throw new Error('Failed to load or parse data source');
  }

  public addStatement(statement: Node) {
    if (statement instanceof Table) {
      this.tables.push(statement);
      statement.prepare();
      return;
    }
    super.addStatement(statement);
  }

  public getTables() {
    return this.tables;
  }

  public findTableIndex(name: string): number {
    if (!name) {
      return -1;
    }
    const nameLC = name.toLocaleLowerCase();
    for (const [index, table] of this.getTables().entries()) {
      if (table.name.toLocaleLowerCase() === nameLC) {
        return index;
      }
    }
    return -1;
  }

  public findTable(name: string): Table | null {
    const index = this.findTableIndex(name);
    if (index < 0) {
      return null;
    }
    return this.tables[index];
  }
}
