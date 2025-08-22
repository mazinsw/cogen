import { Value } from '@/ast/model/value';

export class StringValue extends Value {
  constructor(private value: string) {
    super();
  }

  public getValue() {
    return this.value;
  }

  public setValue(value: string) {
    this.value = value;
  }

  public toString(): string {
    return this.value;
  }
}
