import { Field } from '@/ast/entity/field';
import { Node } from '@/ast/entity/node';

export class CommonField extends Node {
  public fields: Field[] = [];
  public ranges: { lo: number; hi: number }[] = [];

  constructor() {
    super();
  }

  public toString(): string {
    return this.ranges.map((item) => `${item.lo}:${item.hi}`).join(';');
  }

  public addField(field: Field) {
    this.fields.push(field);
  }

  get size(): number {
    return this.fields.length;
  }

  public applyRanges(indexes: number[]) {
    const newRanges = indexes.map((index) => ({ lo: index, hi: index }));
    this.ranges = newRanges.map((item, index) => {
      const range = this.ranges[index] || item;
      return {
        lo: Math.min(item.lo, range.lo),
        hi: Math.min(item.hi, range.hi),
      };
    });
  }
}
