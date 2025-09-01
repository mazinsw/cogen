import { ConditionBlock } from '@/ast/entity/condition-block';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class FieldEach extends ConditionBlock {
  public reverse?: boolean;

  public execute(context: SourceContext): void {
    let runIndex = 0;
    for (let index = 0; index < context.table.fields.length; index++) {
      const field = context.table.fields[index];
      const newContext = {
        ...context,
        field,
        type: SourceType.FIELD,
        position: { ...context.position, field: runIndex },
      };
      const loop = !this.condition || this.condition.check(newContext);
      if (!loop) {
        continue;
      }
      super.execute(newContext);
      runIndex++;
    }
  }
}
