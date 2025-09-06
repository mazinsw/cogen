import { SourceContext, SourceType } from '@/ast/entity/source';
import { Table } from '@/ast/entity/table';
import { TestConditionBlock } from '@/ast/entity/test-condition-block';

export class InheritedConditionBlock extends TestConditionBlock {
  public buildTestContext(context: SourceContext): SourceContext {
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    const contextTable = context.tableStack[index];
    const tablePosition = context.data.findTableIndex(
      contextTable.getAttribute(Table.Attribute.INHERITED),
    );
    const table = context.data.tables[tablePosition];
    return {
      ...context,
      type: SourceType.INHERITED,
      tableStack: [table, ...context.tableStack],
      position: tablePosition,
    };
  }
}
