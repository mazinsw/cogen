import { SourceContext, SourceType } from '@/ast/entity/source';
import { Table } from '@/ast/entity/table';
import { TableBaseConstant } from '@/ast/entity/table-base-constant';

export class InheritedConstant extends TableBaseConstant {
  public execute(context: SourceContext): void {
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    const contextTable = context.tableStack[index];
    const tablePosition = context.data.findTableIndex(
      contextTable.getAttribute(Table.Attribute.INHERITED),
    );
    const table = context.data.tables[tablePosition];
    super.execute({
      ...context,
      type: SourceType.INHERITED,
      tableStack: [table, ...context.tableStack],
      position: tablePosition,
    });
  }
}
