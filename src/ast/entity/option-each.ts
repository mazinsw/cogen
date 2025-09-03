import { EnumType } from '@/ast/entity/enum-type';
import { LoopBlock } from '@/ast/entity/loop-block';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class OptionEach extends LoopBlock {
  public buildContext(
    context: SourceContext,
    position: number,
    runPosition: number,
  ): SourceContext {
    const option = (context.field.getType() as EnumType).elements[position];
    return {
      ...context,
      option,
      type: SourceType.OPTION,
      position: runPosition,
    };
  }

  public getLength(context: SourceContext): number {
    if (!context.field || !(context.field.getType() instanceof EnumType)) {
      return 0;
    }
    return (context.field.getType() as EnumType).elements.length;
  }
}
