import type { SourceContext } from '@/ast/entity/source';

export abstract class Node {
  public execute(context: SourceContext): void {}
}
