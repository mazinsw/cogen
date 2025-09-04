import { Node } from '@/ast/entity/node';
import { SourceContext } from '@/ast/entity/source';

export class Block extends Node {
  public statements: Node[] = [];

  public getStatements(): Node[] {
    return this.statements;
  }

  public addStatement(statement: Node) {
    this.statements.push(statement);
  }

  public execute(context: SourceContext) {
    this.statements.forEach((statement) => {
      statement.execute(context);
    });
  }
}
