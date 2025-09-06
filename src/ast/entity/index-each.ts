import { Index } from '@/ast/entity';
import { LoopBlock } from '@/ast/entity/loop-block';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class IndexEach extends LoopBlock {
  private index: Index;

  public buildContext(
    context: SourceContext,
    position: number,
    runPosition: number,
  ): SourceContext {
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    const table = context.tableStack[index];
    const orderField = this.index.fields[position];
    const field = table.find(orderField.name);
    if (!field) {
      throw new Error(
        `Field ${orderField.name} not found in table ${table.name} from index ${this.index.name}`,
      );
    }
    return {
      ...context,
      field,
      index: this.index,
      type: SourceType.INDEX,
      position: runPosition,
    };
  }

  public getLength(context: SourceContext): number {
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    const table = context.tableStack[index];
    this.index =
      (context.type === SourceType.INDEX ? context.index : null) ||
      (context.field && table.findIndex(context.field));
    return this.index?.fields.length || 0;
  }
}
