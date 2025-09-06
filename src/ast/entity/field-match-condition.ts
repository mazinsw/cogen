import { Condition } from '@/ast/entity/condition';
import { SourceContext } from '@/ast/entity/source';

export class FieldMatchCondition extends Condition {
  constructor(public regex: string) {
    super();
  }

  public check(context: SourceContext): boolean {
    return (
      new RegExp(this.regex, 'i').test(context.field.name) === !this.inverted
    );
  }
}
