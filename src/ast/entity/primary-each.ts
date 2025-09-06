import { LoopBlock } from '@/ast/entity/loop-block';
import { PrimaryKey } from '@/ast/entity/primary-key';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class PrimaryEach extends LoopBlock {
  private primaryKey: PrimaryKey;

  public buildContext(
    context: SourceContext,
    position: number,
    runPosition: number,
  ): SourceContext {
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    const table = context.tableStack[index];
    const orderField = this.primaryKey.fields[position];
    const field = table.find(orderField.name);
    if (!field) {
      throw new Error(
        `Field ${orderField.name} not found in table ${table.name} from primary key ${this.primaryKey.name}`,
      );
    }
    return {
      ...context,
      field,
      index: this.primaryKey,
      type: SourceType.PRIMARY,
      position: runPosition,
    };
  }

  public getLength(context: SourceContext): number {
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    const table = context.tableStack[index];
    this.primaryKey =
      (context.type === SourceType.PRIMARY ? context.index : null) ||
      table.getPrimaryKey();
    return this.primaryKey?.fields.length || 0;
  }
}
