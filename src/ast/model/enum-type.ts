import { DataType } from '@/ast/model/data-type';

export class EnumType extends DataType {
  private elements: string[];

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
    if (this.getType() != DataType.ENUM || this.getElements().length != 2)
      return false;
    return this.getElements().includes('Y') && this.getElements().includes('N');
  }
}
