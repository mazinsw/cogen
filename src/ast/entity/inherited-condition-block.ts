import { SourceContext, SourceType } from '@/ast/entity/source';
import { Table } from '@/ast/entity/table';
import { TestConditionBlock } from '@/ast/entity/test-condition-block';

export class InheritedConditionBlock extends TestConditionBlock {
  public buildTestContext(context: SourceContext): SourceContext {
    const tablePosition = context.data.findTableIndex(
      context.table.getAttribute(Table.Attribute.INHERITED),
    );
    const table = context.data.tables[tablePosition];
    return {
      ...context,
      type: SourceType.INHERITED,
      table,
      position: { ...context.position, table: tablePosition },
    };
  }
}
