import { ConditionBlock } from '@/ast/entity/condition-block';
import { SourceContext } from '@/ast/entity/source';

export abstract class TestConditionBlock extends ConditionBlock {
  public elseCondition?: ConditionBlock;

  /** null when the tested node doesn't exist, the test is then false */
  public abstract buildTestContext(
    context: SourceContext,
  ): SourceContext | null;

  public execute(context: SourceContext): void {
    const testContext = this.buildTestContext(context);
    const checkContext = testContext ?? context;
    const checked =
      !!testContext && (!this.condition || this.condition.check(testContext));
    const newDeepContext = { ...context, tableStack: checkContext.tableStack };
    if (checked) {
      super.execute(newDeepContext);
    } else {
      this.elseCondition?.execute(newDeepContext);
    }
  }
}
