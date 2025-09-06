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
  private legacyConstraint?: TableConstraintEach;
  private legacyIndex?: TableIndexEach;
  private legacyComment?: CommentEach;

  public buildContext(
    context: SourceContext,
    position: number,
    runPosition: number,
  ): SourceContext {
    if (this.legacyConstraint) {
      return this.legacyConstraint.buildContext(
        { ...context, type: this.newType },
        position,
        runPosition,
      );
    }
    if (this.legacyIndex) {
      return this.legacyIndex.buildContext(context, position, runPosition);
    }
    if (this.legacyComment) {
      return this.legacyComment.buildContext(context, position, runPosition);
    }
    const relativePosition = this.reverse
      ? context.data.tables.length - position - 1
      : position;
    const table = context.data.tables[relativePosition];
    return {
      ...context,
      tableStack: [table, ...context.tableStack],
      type: SourceType.TABLE,
      position: runPosition,
    };
  }

  public getLength(context: SourceContext): number {
    if (
      !(this.condition instanceof ExpressionCondition) ||
      !context.config.legacy
    ) {
      return context.data.tables.length;
    }
    const expressionCondition = this.condition as ExpressionCondition;
    if (expressionCondition.expression === Expression.PROPERTY_INDEX) {
      this.legacyIndex = new TableIndexEach();
      return this.legacyIndex.getLength(context);
    }
    if (expressionCondition.expression === Expression.ATTRIBUTE_COMMENT) {
      this.legacyComment = new CommentEach();
      return this.legacyComment.getLength({
        ...context,
        type: SourceType.TABLE,
      });
    }
    const legacy = {
      [Expression.PROPERTY_FOREIGN]: SourceType.FOREIGN,
      [Expression.PROPERTY_PRIMARY]: SourceType.PRIMARY,
      [Expression.PROPERTY_UNIQUE]: SourceType.UNIQUE,
      [Expression.PROPERTY_CONSTRAINT]: SourceType.CONSTRAINT,
    };
    this.newType = legacy[expressionCondition.expression];
    if (this.newType === undefined) {
      return context.data.tables.length;
    }
    this.legacyConstraint = new TableConstraintEach();
    return this.legacyConstraint.getLength({
      ...context,
      type: this.newType,
    });
  }
}
