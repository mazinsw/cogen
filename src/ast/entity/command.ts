import { Constant } from '@/ast/entity/constant';
import { Node } from '@/ast/entity/node';

export abstract class Command extends Node {
  constructor(protected constant: Constant) {
    super();
  }
}
