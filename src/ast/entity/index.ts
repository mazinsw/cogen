import { NamedNode } from '@/ast/entity/named-node';
import { OrderField } from '@/ast/entity/order-field';

export class Index extends NamedNode {
  constructor(private fields: OrderField[] = []) {
    super(null);
  }

  public getFields(): OrderField[] {
    return this.fields;
  }

  public addField(field: OrderField) {
    this.fields.push(field);
  }

  public find(name: string): OrderField | null {
    for (const orderField of this.getFields()) {
      if (orderField.getName() === name) return orderField;
    }
    return null;
  }

  public exists(name: string): boolean {
    return this.find(name) != null;
  }
}
