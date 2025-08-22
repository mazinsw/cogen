import { NamedNode } from '@/ast/entity/named-node';

export class OrderField extends NamedNode {
  public static ASCENDENT = 0;
  public static DESCENDENT = 1;

  private order: number;

  constructor(name: string, order: number) {
    super(name);
    this.setOrder(order);
  }

  public getOrder() {
    return this.order;
  }

  public setOrder(order: number) {
    this.order = order;
  }
}
