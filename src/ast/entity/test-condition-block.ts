import { ConditionBlock } from '@/ast/entity/condition-block';
import { SourceContext } from '@/ast/entity/source';

export abstract class TestConditionBlock extends ConditionBlock {
  public elseCondition?: ConditionBlock;

  public abstract buildTestContext(context: SourceContext): SourceContext;

  public execute(context: SourceContext): void {
    const newContext = this.buildTestContext(context);
    const checked = !this.condition || this.condition.check(newContext);
    if (checked) {
      super.execute(newContext);
    } else {
      this.elseCondition?.execute(context);
    }
  }
}
