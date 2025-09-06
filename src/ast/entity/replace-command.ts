import { Command } from '@/ast/entity/command';
import { Constant } from '@/ast/entity/constant';
import { SourceContext } from '@/ast/entity/source';

export class ReplaceCommand extends Command {
  constructor(
    constant: Constant,
    protected subject: string,
    protected replacement?: string,
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
    output = output.replace(
      new RegExp(this.subject, 'gi'),
      this.replacement || '',
    );
    context.output.appendContents(output);
  }
}
