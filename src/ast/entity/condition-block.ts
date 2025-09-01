import { Block } from '@/ast/entity/block';
import { Condition } from '@/ast/entity/condition';

export class ConditionBlock extends Block {
  public condition?: Condition;

  constructor() {
    super();
  }
}
