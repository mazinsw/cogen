import { LoopBlock } from '@/ast/entity/loop-block';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class TableIndexEach extends LoopBlock {
  public buildContext(
    context: SourceContext,
    position: number,
    runPosition: number,
  ): SourceContext {
    const tableIndex = Math.min(
      this.parentLevel,
      context.tableStack.length - 1,
    );
    const table = context.tableStack[tableIndex];
    const relativePosition = this.reverse
      ? table.indexes.length - position - 1
      : position;
    const index = table.indexes[relativePosition];
    return { ...context, index, type: SourceType.INDEX, position: runPosition };
  }

  public getLength(context: SourceContext): number {
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    const table = context.tableStack[index];
    return table.indexes.length;
  }
}
