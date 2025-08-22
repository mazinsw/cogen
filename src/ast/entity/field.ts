import { CommentedNode } from '@/ast/entity/commented-node';
import { DataType } from '@/ast/entity/data-type';
import { Value } from '@/ast/entity/value';

export class Field extends CommentedNode {
  private type: DataType;
  private value: Value;
  private notNull: boolean;
  private autoIncrement: boolean;
  private unsigned: boolean;

  constructor(name: string) {
    super(name);
  }

  public getType(): DataType {
    return this.type;
  }

  public setType(type: DataType) {
    this.type = type;
  }

  public getValue(): Value {
    return this.value;
  }

  public setValue(value: Value) {
    this.value = value;
  }

  public isNotNull(): boolean {
    return this.notNull;
  }

  public setNotNull(notNull: boolean) {
    this.notNull = notNull;
  }

  public isAutoIncrement(): boolean {
    return this.autoIncrement;
  }

  public setAutoIncrement(autoIncrement: boolean) {
    this.autoIncrement = autoIncrement;
  }

  public isUnsigned(): boolean {
    return this.unsigned;
  }

  public setUnsigned(unsigned: boolean) {
    this.unsigned = unsigned;
  }
}
