import { Node } from '@/ast/entity/node';

export class Block extends Node {
  public statements: Node[];

  constructor() {
    super();
    this.statements = [];
  }

  public getStatements(): Node[] {
    return this.statements;
  }

  public addStatement(statement: Node) {
    this.statements.push(statement);
  }
}
