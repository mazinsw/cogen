import { Block } from '@/ast/entity/block';
import { Condition } from '@/ast/entity/condition';

export abstract class ConditionBlock extends Block {
  public parentLevel: number = 0;
  public condition?: Condition;
}
