import { Condition } from '@/ast/entity/condition';
import { SourceContext } from '@/ast/entity/source';

export class TableFindsCondition extends Condition {
  constructor(public regex: string) {
    super();
  }

  public check(context: SourceContext): boolean {
    return (
      context.tableStack[0].fields.some((field) =>
        new RegExp(this.regex, 'i').test(field.name),
      ) === !this.inverted
    );
  }
}
