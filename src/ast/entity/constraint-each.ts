import { Constraint } from '@/ast/entity/constraint';
import { LoopBlock } from '@/ast/entity/loop-block';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class ConstraintEach extends LoopBlock {
  private constraint: Constraint;

  public buildContext(
    context: SourceContext,
    position?: number,
    runPosition?: number,
  ): SourceContext {
    const orderField = this.constraint.fields[position];
    const field = context.table.find(orderField.name);
    if (!field) {
      throw new Error(
        `Field ${orderField.name} not found in table ${context.table.name} from constraint ${this.constraint.name}`,
      );
    }
    return {
      ...context,
      field,
      index: this.constraint,
      type: SourceType.CONSTRAINT,
      position: { ...context.position, field: runPosition, index: runPosition },
    };
  }

  public getLength(context: SourceContext): number {
    this.constraint =
      context.field && context.table.findForeignKey(context.field.name);
    return this.constraint?.fields.length ?? 0;
  }
}
