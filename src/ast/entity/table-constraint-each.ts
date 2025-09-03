import { Constraint } from '@/ast/entity/constraint';
import { ForeignKey } from '@/ast/entity/foreign-key';
import { LoopBlock } from '@/ast/entity/loop-block';
import { PrimaryKey } from '@/ast/entity/primary-key';
import { SourceContext, SourceType } from '@/ast/entity/source';
import { UniqueKey } from '@/ast/entity/unique-key';

export class TableConstraintEach extends LoopBlock {
  private constraints: Constraint[];

  public buildContext(
    context: SourceContext,
    position: number,
    runPosition: number,
  ): SourceContext {
    const relativePosition = this.reverse
      ? this.constraints.length - position - 1
      : position;
    const index = this.constraints[relativePosition];
    return { ...context, index, position: runPosition };
  }

  public getLength(context: SourceContext): number {
    this.constraints = [];
    context.table.constraints.forEach((constraint) => {
      if (
        context.type === SourceType.FOREIGN &&
        !(constraint instanceof ForeignKey)
      ) {
        return;
      }
      if (
        context.type === SourceType.UNIQUE &&
        !(constraint instanceof UniqueKey)
      ) {
        return;
      }
      if (
        context.type === SourceType.PRIMARY &&
        !(constraint instanceof PrimaryKey)
      ) {
        return;
      }
      this.constraints.push(constraint);
    });
    return this.constraints.length;
  }
}
