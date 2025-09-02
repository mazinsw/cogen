import { Node } from '@/ast/entity/node';

export abstract class Value extends Node {
  public abstract toString(): string;
}
