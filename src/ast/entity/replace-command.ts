import { Command } from '@/ast/entity/command';
import { Constant } from '@/ast/entity/constant';
import { SourceContext } from '@/ast/entity/source';
import { replace } from '@/util/replace';

export class ReplaceCommand extends Command {
  constructor(
    constant: Constant,
    protected pattern: string,
    protected replacement?: string,
    protected flags?: string,
  ) {
    super(constant);
  }

  public execute(context: SourceContext): void {
    let output = '';
    this.constant.execute({
      ...context,
      output: {
        appendContents(text) {
          output += text;
        },
      },
    });
    output = replace(
      output,
      new RegExp(this.pattern, this.flags ?? 'gi'),
      this.replacement || '',
    );
    context.output.appendContents(output);
  }
}
