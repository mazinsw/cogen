import { Value } from '@/ast/model/value';

export class FloatValue extends Value {
  private value: number;

  constructor(value: string | number) {
    super();
    this.setValue(Number(value));
  }

  public getValue() {
    return this.value;
  }

  public setValue(value: number) {
    this.value = value;
  }

  public toString(): string {
    return `${this.value}`;
  }
}
