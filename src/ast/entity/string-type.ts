import { DataType } from '@/ast/entity/data-type';

export class StringType extends DataType {
  private length: number;

  constructor(type: number) {
    super(type);
  }

  public setLength(length: number) {
    this.length = length;
  }

  public getLength() {
    return this.length;
  }
}
