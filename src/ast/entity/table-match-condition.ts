import { Condition } from '@/ast/entity/condition';
import { SourceContext } from '@/ast/entity/source';

export class TableMatchCondition extends Condition {
  constructor(public regex: string) {
    super();
  }

  public check(context: SourceContext): boolean {
    // table parent level already unshifted into context
    const table = context.tableStack[0];
    return new RegExp(this.regex, 'i').test(table.name) === !this.inverted;
  }
}
