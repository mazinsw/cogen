import { DataSource } from '@/ast/entity/data-source';
import { SourceType } from '@/ast/entity/source';
import { TemplateSource } from '@/ast/entity/templace-source';
import { Configuration } from '@/util/configuration';
import { FileEntry, readDirRecursive } from '@/util/file';
import { LogListener } from '@/util/log-listener';
import * as fs from 'fs';
import * as path from 'path';

export class Runner {
  private configuration: Configuration;
  public dataSource: DataSource;
  private files: FileEntry[];
  public contents: string;

  constructor(private logger?: LogListener) {
    this.setConfiguration(new Configuration());
  }

  public getConfiguration(): Configuration {
    return this.configuration;
  }

  public setConfiguration(configuration: Configuration) {
    this.configuration = configuration;
  }

  public appendContents(text: string) {
    this.contents += text;
  }

  public async execute(saveOnSuccess = false): Promise<number> {
    const startTime = Date.now();
    this.dataSource = new DataSource(
      this.configuration,
      this.configuration.getInputFile(),
    );
    this.dataSource.setLogger(this.logger);
    try {
      await this.dataSource.load();
    } catch (error) {
      console.error(error);
      return 5;
    }
    try {
      await this.iterate();
      if (saveOnSuccess) await this.configuration.save();
    } catch (error) {
      console.error(error);
      return 5;
    }
    const estimatedTime = Date.now() - startTime;
    const seconds = estimatedTime / 1000;
    this.logger?.addMessage('Finished after ' + seconds.toFixed(3) + ' s');
    return 0;
  }

  private async iterate() {
    const templateDirectory = this.configuration.getTemplatePath();
    this.files = await readDirRecursive(templateDirectory);
    for (const file of this.files) {
      if (file.path === templateDirectory) {
        continue;
      }
      const tempFile = this.configuration.rebasePath(file.path);
      const filenameTemplateSource = new TemplateSource(
        this.configuration,
        tempFile,
      );
      filenameTemplateSource.setLogger(this.logger);
      if (tempFile.includes('$[')) {
        await filenameTemplateSource.load(true);
      }
      const contentTemplateSource = new TemplateSource(
        this.configuration,
        file.path,
      );
      contentTemplateSource.setLogger(this.logger);
      if (!file.isDirectory) {
        await contentTemplateSource.load();
      }
      const parentFile = path.dirname(tempFile);
      await this.generate(
        filenameTemplateSource,
        contentTemplateSource,
        async (destFile) => {
          await contentTemplateSource.writeFile(destFile, this.contents);
        },
        parentFile,
        file.isDirectory,
      );
    }
  }

  public async generate(
    filenameTemplateSource: TemplateSource,
    contentTemplateSource: TemplateSource,
    onWriteFile?: (destFile: string) => Promise<void>,
    parentFile?: string,
    isDirectory?: boolean,
  ) {
    let prevFile: string = null;
    let tableIndex = -1;
    for (const table of this.dataSource.getTables()) {
      tableIndex++;
      let fieldIndex = -1;
      const fields = table.fields.length === 0 ? [undefined] : table.fields;
      for (const field of fields) {
        let destFile = filenameTemplateSource.filePathOrContents;
        if (filenameTemplateSource.getStatements().length > 0) {
          destFile = '';
          filenameTemplateSource.execute({
            type: SourceType.TABLE,
            tableStack: [table],
            field,
            output: {
              appendContents(text) {
                destFile += text;
              },
            },
            data: this.dataSource,
            config: this.configuration,
            position: tableIndex,
          });
          destFile = destFile.replaceAll('\\', path.sep);
          destFile = destFile.replaceAll('/', path.sep);
          if (destFile.includes(path.sep + path.sep)) {
            continue;
          }
        }
        if (parentFile === destFile) {
          continue;
        }
        if (prevFile === destFile) {
          continue;
        }
        prevFile = destFile;
        this.logger?.addMessage(
          `${isDirectory ? 'Directory' : `File (${contentTemplateSource.encoding})`}: ${destFile}`,
        );
        if (isDirectory) {
          await fs.promises.mkdir(destFile, { recursive: true });
          continue;
        }
        await fs.promises.mkdir(path.dirname(destFile), { recursive: true });
        fieldIndex++;
        this.contents = '';
        contentTemplateSource.execute({
          type: SourceType.TABLE,
          tableStack: [table],
          field,
          output: this,
          data: this.dataSource,
          config: this.configuration,
          position: tableIndex,
        });
        await onWriteFile?.(destFile);
        if (filenameTemplateSource.getStatements().length === 0) {
          break;
        }
      }
      if (filenameTemplateSource.getStatements().length === 0) {
        break;
      }
    }
  }
}
