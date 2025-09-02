import { Block } from '@/ast/entity/block';
import { Condition } from '@/ast/entity/condition';

export abstract class ConditionBlock extends Block {
  public condition?: Condition;
}
