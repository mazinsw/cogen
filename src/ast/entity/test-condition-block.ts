import { ConditionBlock } from '@/ast/entity/condition-block';
import { SourceContext } from '@/ast/entity/source';

export abstract class TestConditionBlock extends ConditionBlock {
  public elseCondition?: ConditionBlock;

  public abstract buildTestContext(context: SourceContext): SourceContext;

  public execute(context: SourceContext): void {
    const checkContext = this.buildTestContext(context);
    const checked = !this.condition || this.condition.check(checkContext);
    const newDeepContext = { ...context, tableStack: checkContext.tableStack };
    if (checked) {
      super.execute(newDeepContext);
    } else {
      this.elseCondition?.execute(newDeepContext);
    }
  }
}
