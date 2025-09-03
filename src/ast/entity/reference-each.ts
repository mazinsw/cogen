import { LoopBlock } from '@/ast/entity/loop-block';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class ReferenceEach extends LoopBlock {
  private tablePosition: number;

  public buildContext(
    context: SourceContext,
    position: number,
    runPosition: number,
  ): SourceContext {
    const table = context.data.tables[this.tablePosition];
    const relativePosition = this.reverse
      ? table.fields.length - position - 1
      : position;
    const field = table.fields[relativePosition];
    return {
      ...context,
      table,
      field,
      type: SourceType.FIELD,
      position: runPosition,
    };
  }

  public getLength(context: SourceContext): number {
    const referenceName =
      context.type === SourceType.REFERENCE
        ? context.table.name
        : context.table.getReference(context.field.name);
    this.tablePosition = context.data.findTableIndex(referenceName);
    const table = context.data.tables[this.tablePosition];
    return table?.fields.length ?? 0;
  }
}
