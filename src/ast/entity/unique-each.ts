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
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    const table = context.tableStack[index];
    const orderField = this.unique.fields[position];
    const field = table.find(orderField.name);
    if (!field) {
      throw new Error(
        `Field ${orderField.name} not found in table ${table.name} from unique index ${this.unique.name}`,
      );
    }
    return {
      ...context,
      field,
      index: this.unique,
      type: SourceType.UNIQUE,
      position: runPosition,
    };
  }

  public getLength(context: SourceContext): number {
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    const table = context.tableStack[index];
    this.unique =
      (context.type === SourceType.UNIQUE ? context.index : null) ||
      (context.field && table.getUniqueIndex(context.field));
    return this.unique?.fields.length ?? 0;
  }
}
