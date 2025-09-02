import { SourceContext, SourceType } from '@/ast/entity/source';
import { TestConditionBlock } from '@/ast/entity/test-condition-block';

export class IndexConditionBlock extends TestConditionBlock {
  public buildTestContext(context: SourceContext): SourceContext {
    return { ...context, type: SourceType.INDEX };
  }
}
