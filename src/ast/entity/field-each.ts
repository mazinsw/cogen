import { CommentEach } from '@/ast/entity/comment-each';
import { DescriptionEach } from '@/ast/entity/description-each';
import {
  Expression,
  ExpressionCondition,
} from '@/ast/entity/expression-condition';
import { LoopBlock } from '@/ast/entity/loop-block';
import { OptionEach } from '@/ast/entity/option-each';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class FieldEach extends LoopBlock {
  private retroCompatOption?: OptionEach;
  private retroCompatComment?: CommentEach;
  private retroCompatDescription?: DescriptionEach;

  public buildContext(
    context: SourceContext,
    position: number,
    runPosition: number,
  ): SourceContext {
    if (this.retroCompatOption) {
      return this.retroCompatOption.buildContext(
        context,
        position,
        runPosition,
      );
    }
    if (this.retroCompatComment) {
      return this.retroCompatComment.buildContext(
        context,
        position,
        runPosition,
      );
    }
    if (this.retroCompatDescription) {
      return this.retroCompatDescription.buildContext(
        context,
        position,
        runPosition,
      );
    }
    const relativePosition = this.reverse
      ? context.table.fields.length - position - 1
      : position;
    const field = context.table.fields[relativePosition];
    return {
      ...context,
      field,
      type: SourceType.FIELD,
      position: { ...context.position, field: runPosition },
    };
  }

  public getLength(context: SourceContext): number {
    if (!(this.condition instanceof ExpressionCondition)) {
      return context.table.fields.length;
    }
    const expressionCondition = this.condition as ExpressionCondition;
    if (expressionCondition.expression === Expression.PROPERTY_OPTION) {
      this.retroCompatOption = new OptionEach();
      return this.retroCompatOption.getLength(context);
    }
    if (expressionCondition.expression === Expression.ATTRIBUTE_COMMENT) {
      this.retroCompatComment = new CommentEach();
      return this.retroCompatComment.getLength(context);
    }
    if (expressionCondition.expression === Expression.ATTRIBUTE_DESCRIPTION) {
      this.retroCompatDescription = new DescriptionEach();
      return this.retroCompatDescription.getLength(context);
    }
    return context.table.fields.length;
  }
}
