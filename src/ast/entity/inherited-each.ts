import { LoopBlock } from '@/ast/entity/loop-block';
import { SourceContext, SourceType } from '@/ast/entity/source';
import { Table } from '@/ast/entity/table';

export class InheritedEach extends LoopBlock {
  private tablePosition: number;

  public buildContext(
    context: SourceContext,
    position: number,
    runPosition: number,
  ): SourceContext {
    const table = context.data.tables[this.tablePosition];
    const field = table.fields[position];
    return {
      ...context,
      table,
      field,
      type: SourceType.INHERITED,
      position: runPosition,
    };
  }

  public getLength(context: SourceContext): number {
    this.tablePosition =
      context.type === SourceType.INHERITED
        ? context.data.tables.indexOf(context.table)
        : context.data.findTableIndex(
            context.table.getAttribute(Table.Attribute.INHERITED),
          );
    const table = context.data.tables[this.tablePosition];
    return table?.fields.length ?? 0;
  }
}
