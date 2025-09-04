import { CommentedNode } from '@/ast/entity/commented-node';
import { DataType } from '@/ast/entity/data-type';
import { Value } from '@/ast/entity/value';
import { Configuration } from '@/util/configuration';
import { normalize } from '@/util/normalize';

export class Field extends CommentedNode {
  private type: DataType;
  private value: Value;
  private notNull: boolean;
  private autoIncrement: boolean;
  private unsigned: boolean;
  private normalizedName?: string;
  private normalizedAndDespluralizedName?: string;

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

  public getNormalizedName() {
    if (this.normalizedName) {
      return this.normalizedName;
    }
    this.normalizedName = normalize(this.name).replace(/\[\d+\]\.?/g, '');
    return this.normalizedName;
  }

  public getNormalizedAndDespluralizedName(config: Configuration) {
    if (this.normalizedAndDespluralizedName) {
      return this.normalizedAndDespluralizedName;
    }
    this.normalizedAndDespluralizedName = normalize(
      this.name,
      config.getDictionary(),
    ).replace(/\[\d+\]\.?/g, '');
    return this.normalizedAndDespluralizedName;
  }
}
