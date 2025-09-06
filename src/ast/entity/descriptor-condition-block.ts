import { SourceContext, SourceType } from '@/ast/entity/source';
import { TestConditionBlock } from '@/ast/entity/test-condition-block';

export class DescriptorConditionBlock extends TestConditionBlock {
  public buildTestContext(context: SourceContext): SourceContext {
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    const currentTable = context.tableStack[index];
    const field = currentTable.getDescriptor();
    const fieldPosition = currentTable.fields.indexOf(field);
    const tableStack =
      index === 0 ? context.tableStack : [currentTable, ...context.tableStack];
    return {
      ...context,
      type: SourceType.FIELD,
      tableStack,
      field,
      position: fieldPosition,
    };
  }
}
