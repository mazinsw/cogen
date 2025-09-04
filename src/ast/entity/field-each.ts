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
  private legacyOption?: OptionEach;
  private legacyComment?: CommentEach;
  private legacyDescription?: DescriptionEach;

  public buildContext(
    context: SourceContext,
    position: number,
    runPosition: number,
  ): SourceContext {
    if (this.legacyOption) {
      return this.legacyOption.buildContext(context, position, runPosition);
    }
    if (this.legacyComment) {
      return this.legacyComment.buildContext(context, position, runPosition);
    }
    if (this.legacyDescription) {
      return this.legacyDescription.buildContext(
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
      position: runPosition,
    };
  }

  public getLength(context: SourceContext): number {
    if (
      !(this.condition instanceof ExpressionCondition) ||
      !context.config.legacy
    ) {
      return context.table.fields.length;
    }
    const expressionCondition = this.condition as ExpressionCondition;
    if (expressionCondition.expression === Expression.PROPERTY_OPTION) {
      this.legacyOption = new OptionEach();
      return this.legacyOption.getLength(context);
    }
    if (expressionCondition.expression === Expression.ATTRIBUTE_COMMENT) {
      this.legacyComment = new CommentEach();
      return this.legacyComment.getLength(context);
    }
    if (expressionCondition.expression === Expression.ATTRIBUTE_DESCRIPTION) {
      this.legacyDescription = new DescriptionEach();
      return this.legacyDescription.getLength(context);
    }
    return context.table.fields.length;
  }
}
