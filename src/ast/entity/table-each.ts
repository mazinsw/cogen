import { CommentEach } from '@/ast/entity/comment-each';
import {
  Expression,
  ExpressionCondition,
} from '@/ast/entity/expression-condition';
import { LoopBlock } from '@/ast/entity/loop-block';
import { SourceContext, SourceType } from '@/ast/entity/source';
import { TableConstraintEach } from '@/ast/entity/table-constraint-each';
import { TableIndexEach } from '@/ast/entity/table-index-each';

export class TableEach extends LoopBlock {
  private newType?: SourceType;
  private retroCompatConstraint?: TableConstraintEach;
  private retroCompatIndex?: TableIndexEach;
  private retroCompatComment?: CommentEach;

  public buildContext(
    context: SourceContext,
    position: number,
    runPosition: number,
  ): SourceContext {
    if (this.retroCompatConstraint) {
      return this.retroCompatConstraint.buildContext(
        { ...context, type: this.newType },
        position,
        runPosition,
      );
    }
    if (this.retroCompatIndex) {
      return this.retroCompatIndex.buildContext(context, position, runPosition);
    }
    if (this.retroCompatComment) {
      return this.retroCompatComment.buildContext(
        context,
        position,
        runPosition,
      );
    }
    const relativePosition = this.reverse
      ? context.data.tables.length - position - 1
      : position;
    const table = context.data.tables[relativePosition];
    return { ...context, table, type: SourceType.TABLE, position: runPosition };
  }

  public getLength(context: SourceContext): number {
    if (!(this.condition instanceof ExpressionCondition)) {
      return context.data.tables.length;
    }
    const expressionCondition = this.condition as ExpressionCondition;
    if (expressionCondition.expression === Expression.PROPERTY_INDEX) {
      this.retroCompatIndex = new TableIndexEach();
      return this.retroCompatIndex.getLength(context);
    }
    if (expressionCondition.expression === Expression.ATTRIBUTE_COMMENT) {
      this.retroCompatComment = new CommentEach();
      return this.retroCompatComment.getLength({
        ...context,
        type: SourceType.TABLE,
      });
    }
    const retroCompat = {
      [Expression.PROPERTY_FOREIGN]: SourceType.FOREIGN,
      [Expression.PROPERTY_PRIMARY]: SourceType.PRIMARY,
      [Expression.PROPERTY_UNIQUE]: SourceType.UNIQUE,
      [Expression.PROPERTY_CONSTRAINT]: SourceType.CONSTRAINT,
    };
    this.newType = retroCompat[expressionCondition.expression];
    if (this.newType === undefined) {
      return context.data.tables.length;
    }
    this.retroCompatConstraint = new TableConstraintEach();
    return this.retroCompatConstraint.getLength({
      ...context,
      type: this.newType,
    });
  }
}
