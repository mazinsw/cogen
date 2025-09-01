import { Block } from '@/ast/entity/block';
import { Condition } from '@/ast/entity/condition';
import { SourceContext } from '@/ast/entity/source';

export abstract class ConditionBlock extends Block {
  public condition?: Condition;

  public abstract buildContext(
    context: SourceContext,
    position?: number,
    runPosition?: number,
  ): SourceContext;
}
