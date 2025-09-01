import { LoopBlock } from '@/ast/entity/loop-block';
import { PrimaryKey } from '@/ast/entity/primary-key';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class PrimaryEach extends LoopBlock {
  private primaryKey: PrimaryKey;

  public buildContext(
    context: SourceContext,
    position?: number,
    runPosition?: number,
  ): SourceContext {
    const orderField = this.primaryKey.fields[position];
    const field = context.table.find(orderField.name);
    if (!field) {
      throw new Error(
        `Field ${orderField.name} not found in table ${context.table.name} from primary key ${this.primaryKey.name}`,
      );
    }
    return {
      ...context,
      field,
      index: this.primaryKey,
      type: SourceType.PRIMARY,
      position: { ...context.position, field: runPosition, index: runPosition },
    };
  }

  public getLength(context: SourceContext): number {
    this.primaryKey = context.table.getPrimaryKey();
    return this.primaryKey?.fields.length || 0;
  }
}
