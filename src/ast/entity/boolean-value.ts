import { Value } from '@/ast/entity/value';

export class BooleanValue extends Value {
  public value: boolean;

  constructor(value: boolean) {
    super();
    this.value = value;
  }

  public static fromString(value: string) {
    return new this(
      !['false', '0', 'n'].includes(value.toLowerCase()) && value !== '',
    );
  }

  public toString(): string {
    return this.value ? 'true' : 'false';
  }
}
