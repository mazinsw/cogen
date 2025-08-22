import { Field } from '@/ast/entity/field';
import { Node } from '@/ast/entity/node';

export class CommonField extends Node {
  private fields: Field[];
  private range: string;

  public CommonField() {
    this.fields = [];
  }

  public toString(): string {
    return this.getRange();
  }

  public getFields() {
    return this.fields;
  }

  public addField(field: Field) {
    this.fields.push(field);
  }

  public indexOf(field: Field): number {
    return this.getFields().indexOf(field);
  }

  public size(): number {
    return this.getFields().length;
  }

  public getRange() {
    return this.range;
  }

  public setRange(range: string) {
    this.range = range;
  }
}
