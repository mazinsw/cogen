import { ForeignKey } from '@/ast/entity/foreign-key';
import { LoopBlock } from '@/ast/entity/loop-block';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class ForeignEach extends LoopBlock {
  private foreign: ForeignKey;

  public buildContext(
    context: SourceContext,
    position: number,
    runPosition: number,
  ): SourceContext {
    const orderField = this.foreign.fields[position];
    const field = context.table.find(orderField.name);
    if (!field) {
      throw new Error(
        `Field ${orderField.name} not found in table ${context.table.name} from foreign key ${this.foreign.name}`,
      );
    }
    return {
      ...context,
      field,
      index: this.foreign,
      type: SourceType.FOREIGN,
      position: { ...context.position, field: runPosition, index: runPosition },
    };
  }

  public getLength(context: SourceContext): number {
    this.foreign =
      (context.type === SourceType.FOREIGN
        ? (context.index as ForeignKey)
        : null) ||
      (context.field && context.table.findForeignKey(context.field.name));
    return this.foreign?.fields.length ?? 0;
  }
}
