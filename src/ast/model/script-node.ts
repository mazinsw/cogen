import { Node } from '@/ast/model/node';

export class ScriptNode extends Node {
  private statements: Node[];

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
