import { Node } from '@/ast/entity/node';

export class DataType extends Node {
  public static STRING = 0;
  public static INTEGER = 1;
  public static FLOAT = 2;
  public static ENUM = 3;
  public static DATETIME = 4;
  public static DATE = 5;
  public static TIME = 6;
  public static BOOLEAN = 7;
  public static DOUBLE = 8;
  public static BIGINT = 9;
  public static TEXT = 10;
  public static CHAR = 11;
  public static TINYINT = 12;
  public static BLOB = 13;
  public static DECIMAL = 14;
  public static JSON = 15;
  public static TIMESTAMP = 16;

  constructor(private type: number) {
    super();
  }

  public getType() {
    return this.type;
  }

  public setType(type: number) {
    this.type = type;
  }

  public isBoolean(): boolean {
    return this.getType() == DataType.BOOLEAN;
  }

  public isNumeric(): boolean {
    return (
      this.getType() == DataType.INTEGER ||
      this.getType() == DataType.BIGINT ||
      this.getType() == DataType.TINYINT ||
      this.getType() == DataType.FLOAT ||
      this.getType() == DataType.DECIMAL ||
      this.getType() == DataType.DOUBLE
    );
  }

  public isString(): boolean {
    return (
      this.getType() == DataType.STRING ||
      this.getType() == DataType.TEXT ||
      this.getType() == DataType.CHAR ||
      this.getType() == DataType.JSON
    );
  }

  public getSize() {
    switch (this.getType()) {
      case DataType.DOUBLE:
      case DataType.BIGINT:
      case DataType.DATETIME:
      case DataType.TIMESTAMP:
        return 8;
      case DataType.INTEGER:
      case DataType.FLOAT:
        return 4;
      case DataType.TIME:
      case DataType.DATE:
        return 3;
      case DataType.TINYINT:
      case DataType.BOOLEAN:
        return 1;
    }
    return 0;
  }
}
