import { Node } from '@/ast/entity/node';

enum Property {
  ARRAY,
  CHARS,
  COMMENT,
  COUNT,
  DEFAULT,
  DELETE,
  FOLDER,
  GENDER,
  HEIGHT,
  HIGH,
  IMAGE,
  INDEX,
  INFORMATION,
  INHERITED,
  INSERT,
  LENGTH,
  LETTER,
  LOW,
  MASK,
  NAME,
  NO_ID,
  NORMALIZED,
  NUMBER,
  ON,
  OPTION,
  PACKAGE,
  PATH,
  PLURAL,
  SINGULAR,
  SIZE,
  STYLE,
  UNIX,
  UPDATE,
  WIDTH,
  EXTRA,
}

export class Constant extends Node {
  static readonly Property = Property;

  protected properties: Property[];

  constructor(protected caseSample: string) {
    super();
    this.properties = [];
  }

  addProperty(property: Property) {
    this.properties.push(property);
  }
}
