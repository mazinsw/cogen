import { Source, SourceContext } from '@/ast/entity/source';
import { ASTBuilder } from '@/ast/template/ast-builder';
import { Configuration } from '@/util/configuration';

export class TemplateSource extends Source {
  constructor(
    configuration: Configuration,
    private filePathOrContents?: string,
  ) {
    super(configuration);
  }

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

  public execute(context: SourceContext) {
    this.statements.forEach((statement) => {
      statement.execute(context);
    });
  }
}
