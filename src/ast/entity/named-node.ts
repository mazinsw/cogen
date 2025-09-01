import { Node } from '@/ast/entity/node';

export class NamedNode extends Node {
  constructor(public name: string | null) {
    super();
  }

  public getName() {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }
}
