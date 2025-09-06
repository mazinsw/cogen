import { Condition } from '@/ast/entity/condition';
import { SourceContext } from '@/ast/entity/source';

export class TableContainsCondition extends Condition {
  constructor(public word: string) {
    super();
  }

  public check(context: SourceContext): boolean {
    return (
      context.tableStack[0].name
        .toLocaleLowerCase()
        .includes(this.word.toLocaleLowerCase()) === !this.inverted
    );
  }
}
