import { SourceContext, SourceType } from '@/ast/entity/source';
import { TestConditionBlock } from '@/ast/entity/test-condition-block';

export class DescriptorConditionBlock extends TestConditionBlock {
  public buildTestContext(context: SourceContext): SourceContext {
    const field = context.table.getDescriptor();
    const fieldPosition = context.table.fields.indexOf(field);
    return {
      ...context,
      type: SourceType.FIELD,
      field,
      position: { ...context.position, field: fieldPosition },
    };
  }
}
