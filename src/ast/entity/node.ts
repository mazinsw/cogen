import type { SourceContext } from '@/ast/entity/source';

export abstract class Node {
  public execute(_context: SourceContext): void {}
}
