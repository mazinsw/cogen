import { Index } from '@/ast/entity';
import { LoopBlock } from '@/ast/entity/loop-block';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class IndexEach extends LoopBlock {
  private index: Index;

  public buildContext(
    context: SourceContext,
    position?: number,
    runPosition?: number,
  ): SourceContext {
    const orderField = this.index.fields[position];
    const field = context.table.find(orderField.name);
    if (!field) {
      throw new Error(
        `Field ${orderField.name} not found in table ${context.table.name} from index ${this.index.name}`,
      );
    }
    return {
      ...context,
      field,
      index: this.index,
      type: SourceType.INDEX,
      position: { ...context.position, field: runPosition, index: runPosition },
    };
  }

  public getLength(context: SourceContext): number {
    this.index = context.field && context.table.findIndex(context.field);
    return this.index?.fields.length || 0;
  }
}
