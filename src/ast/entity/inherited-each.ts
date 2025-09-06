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
      tableStack: [table, ...context.tableStack],
      field,
      type: SourceType.INHERITED,
      position: runPosition,
    };
  }

  public getLength(context: SourceContext): number {
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    const contextTable = context.tableStack[index];
    this.tablePosition =
      context.type === SourceType.INHERITED
        ? context.data.tables.indexOf(contextTable)
        : context.data.findTableIndex(
            contextTable.getAttribute(Table.Attribute.INHERITED),
          );
    const table = context.data.tables[this.tablePosition];
    return table?.fields.length ?? 0;
  }
}
