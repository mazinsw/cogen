import { SourceContext, SourceType } from '@/ast/entity/source';
import { TestConditionBlock } from '@/ast/entity/test-condition-block';

export class PrimaryConditionBlock extends TestConditionBlock {
  public buildTestContext(context: SourceContext): SourceContext {
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    const tableStack =
      index === 0
        ? context.tableStack
        : [context.tableStack[index], ...context.tableStack];
    return { ...context, tableStack, type: SourceType.PRIMARY };
  }
}
