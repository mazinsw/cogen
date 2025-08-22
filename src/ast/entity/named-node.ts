import { Node } from '@/ast/entity/node';

export class NamedNode extends Node {
  constructor(private name: string | null) {
    super();
  }

  public getName() {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }
}
