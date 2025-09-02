import { Condition } from '@/ast/entity/condition';
import { SourceContext } from '@/ast/entity/source';

export class FieldContainsCondition extends Condition {
  constructor(public word: string) {
    super();
  }

  public check(context: SourceContext): boolean {
    return context.field.name
      .toLocaleLowerCase()
      .includes(this.word.toLocaleLowerCase());
  }
}
