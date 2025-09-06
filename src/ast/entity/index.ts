import { NamedNode } from '@/ast/entity/named-node';
import { OrderField } from '@/ast/entity/order-field';

export class Index extends NamedNode {
  constructor(public fields: OrderField[] = []) {
    super(null);
  }

  public getFields(): OrderField[] {
    return this.fields;
  }

  public addField(field: OrderField) {
    this.fields.push(field);
  }

  public find(name: string): OrderField | null {
    const nameLC = name.toLocaleLowerCase();
    for (const orderField of this.getFields()) {
      if (orderField.getName().toLocaleLowerCase() === nameLC) {
        return orderField;
      }
    }
    return null;
  }

  public exists(name: string): boolean {
    return this.find(name) != null;
  }
}
