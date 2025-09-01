import { DataType } from '@/ast/entity/data-type';

export class EnumType extends DataType {
  public elements: string[];

  constructor(type: number) {
    super(type);
    this.elements = [];
  }

  public getElements(): string[] {
    return this.elements;
  }

  public addElement(element: string) {
    this.elements.push(element);
  }

  public isBoolean(): boolean {
    if (this.getType() != DataType.ENUM || this.elements.length != 2)
      return false;
    return this.elements.includes('Y') && this.elements.includes('N');
  }
}
