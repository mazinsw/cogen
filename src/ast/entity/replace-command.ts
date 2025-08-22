import { Command } from '@/ast/entity/command';
import { Constant } from '@/ast/entity/constant';

export class ReplaceCommand extends Command {
  constructor(
    constant: Constant,
    protected subject: string,
    protected replacement?: string,
  ) {
    super(constant);
  }
}
