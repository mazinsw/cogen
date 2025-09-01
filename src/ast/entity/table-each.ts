import { LoopBlock } from '@/ast/entity/loop-block';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class TableEach extends LoopBlock {
  public buildContext(
    context: SourceContext,
    position?: number,
    runPosition?: number,
  ): SourceContext {
    const table = context.data.tables[position];
    return {
      ...context,
      table,
      type: SourceType.TABLE,
      position: { ...context.position, table: runPosition },
    };
  }

  public getLength(context: SourceContext): number {
    return context.data.tables.length;
  }
}
