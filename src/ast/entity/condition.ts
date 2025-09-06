import { Node } from '@/ast/entity/node';
import { SourceContext } from '@/ast/entity/source';

export abstract class Condition extends Node {
  public inverted?: boolean;

  public abstract check(context: SourceContext): boolean;
}
