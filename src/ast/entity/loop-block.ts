import { ConditionBlock } from '@/ast/entity/condition-block';
import { SourceContext } from '@/ast/entity/source';

export abstract class LoopBlock extends ConditionBlock {
  public reverse?: boolean;

  public abstract buildContext(
    context: SourceContext,
    position: number,
    runPosition: number,
  ): SourceContext;

  public execute(context: SourceContext): void {
    let runIndex = 0;
    const length = this.getLength(context);
    for (let index = 0; index < length; index++) {
      const newContext = this.buildContext(context, index, runIndex);
      const loop = !this.condition || this.condition.check(newContext);
      if (!loop) {
        continue;
      }
      super.execute(newContext);
      runIndex++;
    }
  }

  public abstract getLength(context: SourceContext): number;
}
