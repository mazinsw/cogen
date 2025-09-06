import { LoopBlock } from '@/ast/entity/loop-block';
import { SourceContext, SourceType } from '@/ast/entity/source';
import { wrapText } from '@/util/helper';

export class DescriptionEach extends LoopBlock {
  private comments: string[];

  public buildContext(
    context: SourceContext,
    position: number,
    runPosition: number,
  ): SourceContext {
    const comment = this.comments[position].replaceAll("'", "\\'");
    return {
      ...context,
      comment,
      type: SourceType.COMMENT,
      position: runPosition,
    };
  }

  public getLength(context: SourceContext): number {
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    const table = context.tableStack[index];
    const comment =
      context.type === SourceType.TABLE
        ? table.parsedComment
        : context.field?.parsedComment;
    this.comments = wrapText(comment || '', 72);
    return this.comments.length;
  }
}
