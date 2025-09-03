import { ExpressionCondition } from '@/ast/entity/expression-condition';
import { SourceContext } from '@/ast/entity/source';

export class TableExistsCondition extends ExpressionCondition {
  public check(context: SourceContext): boolean {
    return context.table.fields.some((field, position) =>
      super.check({ ...context, field, position }),
    );
  }
}
