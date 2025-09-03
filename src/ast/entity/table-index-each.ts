import { LoopBlock } from '@/ast/entity/loop-block';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class TableIndexEach extends LoopBlock {
  public buildContext(
    context: SourceContext,
    position: number,
    runPosition: number,
  ): SourceContext {
    const relativePosition = this.reverse
      ? context.table.indexes.length - position - 1
      : position;
    const index = context.table.indexes[relativePosition];
    return { ...context, index, type: SourceType.INDEX, position: runPosition };
  }

  public getLength(context: SourceContext): number {
    return context.table.indexes.length;
  }
}
