import { Source } from '@/ast/entity/source';
import { ASTBuilder } from '@/ast/template/ast-builder';

export class TemplateSource extends Source {
  public async load(pathAsContent?: boolean) {
    this.statements = [];
    const builder = new ASTBuilder(this);
    const ok = await builder.build(this.filePathOrContents, pathAsContent);
    if (ok) {
      return;
    }
    for (const error of builder.getErrors()) {
      this.logger?.addMessage(error);
    }
    throw new Error('Failed to load or parse template source');
  }
}
