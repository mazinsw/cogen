import { DataSource } from '@/ast/entity/data-source';
import { Field } from '@/ast/entity/field';
import { Node } from '@/ast/entity/node';
import { Table } from '@/ast/entity/table';
import { ASTBuilder } from '@/ast/template/ast-builder';
import { LogListener } from '@/util/log-listener';

export class TemplateSource extends Node {
  private statements: Node[];
  private logger?: LogListener;

  constructor(private filePathOrContents?: string) {
    super();
    this.statements = [];
  }

  public async load(pathAsContent?: boolean) {
    this.statements = [];
    const builder = new ASTBuilder(this);
    const ok = await builder.build(this.filePathOrContents, pathAsContent);
    if (ok) {
      return;
    }
    for (const error of builder.getErrors()) {
      this.logger?.addMessage(error);
    }
    throw new Error('Failed to load or parse template source');
  }

  public setLogger(logger: LogListener) {
    this.logger = logger;
  }

  public getStatements(): Node[] {
    return this.statements;
  }

  public addStatement(statement: Node) {
    this.statements.push(statement);
  }

  public execute(
    dataSource: DataSource,
    context: {
      table: Table;
      field: Field;
      index: { table: number; field: number };
    },
  ): string {
    return this.filePathOrContents;
  }
}
