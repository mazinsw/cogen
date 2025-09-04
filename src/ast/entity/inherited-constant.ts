import { SourceContext, SourceType } from '@/ast/entity/source';
import { Table } from '@/ast/entity/table';
import { TableBaseConstant } from '@/ast/entity/table-base-constant';

export class InheritedConstant extends TableBaseConstant {
  public execute(context: SourceContext): void {
    const tablePosition = context.data.findTableIndex(
      context.table.getAttribute(Table.Attribute.INHERITED),
    );
    const table = context.data.tables[tablePosition];
    super.execute({
      ...context,
      type: SourceType.INHERITED,
      table,
      position: tablePosition,
    });
  }
}
