import { Runner } from '@/tools/runner';
import { Configuration } from '@/util/configuration';
import { LogListener } from '@/util/log-listener';

export class Main implements LogListener {
  public static async run() {
    const main = new Main();
    const status = await main.start(process.argv.slice(2));
    process.exitCode = status;
  }

  public async start(args: string[]): Promise<number> {
    const config = new Configuration();
    let silent = false;
    let saveOnComplete = false;
    let i = 0;
    while (i < args.length) {
      const cmd = args[i];
      switch (cmd) {
        case '-p':
        case '--project':
          if (i + 1 >= args.length) return this.showHelp(3, cmd);
          config.setProjectFile(args[i + 1]);
          try {
            await config.load();
          } catch (error) {
            return this.showHelp(3, cmd, error.message);
          }
          i++;
          break;
        case '-f':
        case '--file':
        case '-i':
        case '--input':
          if (i + 1 >= args.length) return this.showHelp(3, cmd);
          config.setInputFile(args[i + 1]);
          i++;
          break;
        case '-o':
        case '--output':
          if (i + 1 >= args.length) return this.showHelp(3, cmd);
          config.setOutputPath(args[i + 1]);
          i++;
          break;
        case '-t':
        case '--template':
          if (i + 1 >= args.length) return this.showHelp(3, cmd);
          config.setTemplatePath(args[i + 1]);
          i++;
          break;
        case '-u':
        case '--uppercase':
          if (i + 1 >= args.length) return this.showHelp(3, cmd);
          config.setUpperWords(args[i + 1]);
          i++;
          break;
        case '-d':
        case '--despluralize':
          if (i + 1 >= args.length) return this.showHelp(3, cmd);
          config.setDictionary(args[i + 1]);
          i++;
          break;
        case '-w':
        case '--write':
          if (i + 1 >= args.length) return this.showHelp(3, cmd);
          config.setProjectFile(args[i + 1]);
          saveOnComplete = true;
          i++;
          break;
        case '-h':
        case '--help':
          return this.showHelp(0, cmd);
        case '-s':
        case '--silent':
          silent = true;
          break;
        case '-l':
        case '--legacy':
          config.legacy = true;
          break;
        default:
          config.setInputFile(cmd);
      }
      i++;
    }
    if (config.getInputFile() == null) return this.showHelp(4, '-i');
    if (config.getOutputPath() == null) return this.showHelp(4, '-o');
    let logger = silent ? null : this;
    const runner = new Runner(logger);
    runner.setConfiguration(config);
    return runner.execute(saveOnComplete);
  }

  private showHelp(status: number, cmd: string, errorMessage?: string): number {
    console.log('===== cogen (COde GENerator) =====');
    if (status == 4) console.log('Command not found: ' + cmd);
    else if (status == 3) console.log("Parameter of '" + cmd + "' not found");
    else if (status != 0)
      console.log("Invalid command or usage of '" + cmd + "'");
    if (errorMessage) {
      console.log('Error: ' + errorMessage);
    }
    if (status != 0) {
      console.log();
    }
    console.log('Usage: cogen [options] input.sql');
    console.log('Options:');
    console.log(
      '\t(-d|--despluralize) "match1|match2/slice_end/[replacement[/min_length]];ms|ls/1/s/4": set the despluralization database rules',
    );
    console.log('\t(-f|--file|-i|--input) input.sql: set the input sql file');
    console.log('\t(-h|--help): show this help');
    console.log('\t(-l|--legacy): use legacy loops instead of as filter');
    console.log('\t(-o|--output) storage/generated: set the output directory');
    console.log('\t(-p|--project) cogen.properties: read a project from file');
    console.log('\t(-s|--silent): run without print anything');
    console.log(
      '\t(-t|--template) scripts/template/: set the template input directory',
    );
    console.log(
      '\t(-u|--uppercase) "|USA|W3C|": set the uppercase database names',
    );
    console.log(
      '\t(-w|--write) cogen.properties: save configuration to file when finishes',
    );
    return status;
  }

  public addMessage(message: string) {
    console.log(message);
  }
}
