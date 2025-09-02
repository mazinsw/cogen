import { LoopBlock } from '@/ast/entity/loop-block';
import { SourceContext, SourceType } from '@/ast/entity/source';
import { UniqueKey } from '@/ast/entity/unique-key';

export class UniqueEach extends LoopBlock {
  private unique: UniqueKey;

  public buildContext(
    context: SourceContext,
    position: number,
    runPosition: number,
  ): SourceContext {
    const orderField = this.unique.fields[position];
    const field = context.table.find(orderField.name);
    if (!field) {
      throw new Error(
        `Field ${orderField.name} not found in table ${context.table.name} from unique index ${this.unique.name}`,
      );
    }
    return {
      ...context,
      field,
      index: this.unique,
      type: SourceType.UNIQUE,
      position: { ...context.position, field: runPosition, index: runPosition },
    };
  }

  public getLength(context: SourceContext): number {
    this.unique = context.field && context.table.getUniqueIndex(context.field);
    return this.unique?.fields.length ?? 0;
  }
}
