import { Value } from "./Value";

export class BooleanValue extends Value {
  public value: boolean;

  public constructor(value: boolean) {
    super();
    this.value = value;
  }

  public static fromString(value: string) {
    return new this(!['false', '0', 'n'].includes(value.toLocaleLowerCase()) && value !== "");
  }

  public toString(): String {
    return this.value ? 'true' : 'false';
  }
}
