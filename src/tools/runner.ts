import { ASTBuilder } from '@/ast/sql/ast-builder';
import { Configuration } from '@/util/configuration';
import { LogListener } from '@/util/log-listener';

export class Runner {
  private configuration: Configuration;

  constructor(private logger: LogListener) {
    this.setConfiguration(new Configuration());
  }

  public getConfiguration(): Configuration {
    return this.configuration;
  }

  public setConfiguration(configuration: Configuration) {
    this.configuration = configuration;
  }

  public async execute(saveOnSuccess = false): Promise<number> {
    const builder = new ASTBuilder();
    if (!(await builder.build(this.configuration.getInputFile()))) {
      for (const error of builder.getErrors()) {
        this.logger?.addMessage(error);
      }
      return 5;
    }
    try {
      // const generator = new TemplateGenerator(
      //   builder.getScript(),
      //   this.configuration,
      // );
      // generator.setLogListener(this.loggger);
      // generator.start();
      if (saveOnSuccess) await this.configuration.save();
    } catch (error) {
      this.logger?.addMessage(error.message);
      return 5;
    }
    return 0;
  }
}
