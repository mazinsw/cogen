import { Constraint } from '@/ast/entity/constraint';
import { LoopBlock } from '@/ast/entity/loop-block';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class ConstraintEach extends LoopBlock {
  private constraint: Constraint;

  public buildContext(
    context: SourceContext,
    position: number,
    runPosition: number,
  ): SourceContext {
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    const table = context.tableStack[index];
    const orderField = this.constraint.fields[position];
    const field = table.find(orderField.name);
    if (!field) {
      throw new Error(
        `Field ${orderField.name} not found in table ${table.name} from constraint ${this.constraint.name}`,
      );
    }
    return {
      ...context,
      field,
      index: this.constraint,
      type: SourceType.CONSTRAINT,
      position: runPosition,
    };
  }

  public getLength(context: SourceContext): number {
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    const table = context.tableStack[index];
    this.constraint =
      (context.type === SourceType.CONSTRAINT ? context.index : null) ||
      (context.field && table.findForeignKey(context.field.name));
    return this.constraint?.fields.length ?? 0;
  }
}
