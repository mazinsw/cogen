import { LoopBlock } from '@/ast/entity/loop-block';
import { SourceContext, SourceType } from '@/ast/entity/source';
import { wrapText } from '@/util/helper';

export class CommentEach extends LoopBlock {
  private comments: string[];

  public buildContext(
    context: SourceContext,
    position?: number,
    runPosition?: number,
  ): SourceContext {
    const comment = this.comments[position];
    return {
      ...context,
      comment,
      type: SourceType.COMMENT,
      position: { ...context.position, comment: runPosition },
    };
  }

  public getLength(context: SourceContext): number {
    const comment =
      context.type === SourceType.TABLE
        ? context.table.parsedComment
        : context.field?.parsedComment;
    this.comments = wrapText(comment || '', 72);
    return this.comments.length;
  }
}
