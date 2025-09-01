import { LoopBlock } from '@/ast/entity/loop-block';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class ReferenceEach extends LoopBlock {
  private tablePosition: number;

  public buildContext(
    context: SourceContext,
    position?: number,
    runPosition?: number,
  ): SourceContext {
    const table = context.data.tables[this.tablePosition];
    const field = table.fields[position];
    return {
      ...context,
      table,
      field,
      type: SourceType.FIELD,
      position: {
        ...context.position,
        field: runPosition,
        table: this.tablePosition,
      },
    };
  }

  public getLength(context: SourceContext): number {
    this.tablePosition = context.data.findTableIndex(
      context.table.getReference(context.field.name),
    );
    const table = context.data.tables[this.tablePosition];
    return table?.fields.length ?? 0;
  }
}
