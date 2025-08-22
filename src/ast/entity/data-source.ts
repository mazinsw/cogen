import { Node } from '@/ast/entity/node';
import { Table } from '@/ast/entity/table';
import { ASTBuilder } from '@/ast/sql/ast-builder';
import { Configuration } from '@/util/configuration';
import { LogListener } from '@/util/log-listener';

export class DataSource extends Node {
  private tables: Table[];
  private statements: Node[];
  private logger?: LogListener;

  constructor(private configuration: Configuration) {
    super();
    this.statements = [];
    this.tables = [];
  }

  public async load() {
    const builder = new ASTBuilder(this);
    const ok = await builder.build(this.configuration.getInputFile());
    if (ok) {
      return;
    }
    for (const error of builder.getErrors()) {
      this.logger?.addMessage(error);
    }
    throw new Error('Failed to load or parse data source');
  }

  public setLogger(logger: LogListener) {
    this.logger = logger;
  }

  public getStatements(): Node[] {
    return this.statements;
  }

  public addStatement(statement: Node) {
    if (statement instanceof Table) {
      this.tables.push(statement);
      return;
    }
    this.statements.push(statement);
  }

  public getTables() {
    return this.tables;
  }

  public findTable(name: string): Table | null {
    if (name == null) {
      return null;
    }
    const nameLC = name.toLocaleLowerCase();
    for (const table of this.getTables()) {
      if (table.getName().toLocaleLowerCase() === nameLC) {
        return table;
      }
    }
    return null;
  }
}
