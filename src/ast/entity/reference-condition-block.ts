import { SourceContext, SourceType } from '@/ast/entity/source';
import { TestConditionBlock } from '@/ast/entity/test-condition-block';

export class ReferenceConditionBlock extends TestConditionBlock {
  public buildTestContext(context: SourceContext): SourceContext {
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    if (context.type === SourceType.REFERENCE) {
      const tableStack =
        index === 0
          ? context.tableStack
          : [context.tableStack[index], ...context.tableStack];
      return { ...context, tableStack };
    }
    const contextTable = context.tableStack[index];
    const referenceName = contextTable.getReference(context.field.name);
    const tablePosition = context.data.findTableIndex(referenceName);
    if (tablePosition < 0) {
      return context;
    }
    const table = context.data.tables[tablePosition];
    return {
      ...context,
      type: SourceType.REFERENCE,
      tableStack: [table, ...context.tableStack],
      position: tablePosition,
    };
  }
}
