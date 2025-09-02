import { Command } from '@/ast/entity/command';
import { Constant } from '@/ast/entity/constant';
import { OutputWriter, SourceContext } from '@/ast/entity/source';

export class ReplaceCommand extends Command implements OutputWriter {
  private output: string;

  constructor(
    constant: Constant,
    protected subject: string,
    protected replacement?: string,
  ) {
    super(constant);
  }

  public execute(context: SourceContext): void {
    this.output = '';
    this.constant.execute({ ...context, output: this });
    this.output = this.output.replace(
      new RegExp(this.subject),
      this.replacement,
    );
    context.output.appendContents(this.output);
  }

  appendContents(text: string): void {
    this.output += text;
  }
}
