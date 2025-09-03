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
  private dataSource: DataSource;
  private files: FileEntry[];
  private contents: string;

  constructor(private logger: LogListener) {
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
    this.dataSource = new DataSource(this.configuration);
    this.dataSource.setLogger(this.logger);
    try {
      await this.dataSource.load();
    } catch (error) {
      return 5;
    }
    try {
      await this.generate();
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

  public async generate() {
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
      let prevFile: string = null;
      let tableIndex = -1;
      for (const table of this.dataSource.getTables()) {
        tableIndex++;
        // Hashtable<String, CommonField> indexedFields = new Hashtable<>();
        // processArray(table, indexedFields);
        let fieldIndex = -1;
        for (const field of table.getFields()) {
          let destFile = tempFile;
          if (filenameTemplateSource.getStatements().length > 0) {
            this.contents = '';
            filenameTemplateSource.execute({
              type: SourceType.TABLE,
              table,
              field,
              output: this,
              data: this.dataSource,
              config: this.configuration,
              position: tableIndex,
            });
            destFile = this.contents;
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
            `${file.isDirectory ? 'Directory' : `File (${contentTemplateSource.encoding})`}: ${destFile}`,
          );
          if (file.isDirectory) {
            await fs.promises.mkdir(destFile, { recursive: true });
            continue;
          }
          await fs.promises.mkdir(path.dirname(destFile), { recursive: true });
          fieldIndex++;
          this.contents = '';
          contentTemplateSource.execute({
            type: SourceType.TABLE,
            table,
            field,
            output: this,
            data: this.dataSource,
            config: this.configuration,
            position: tableIndex,
          });
          await contentTemplateSource.writeFile(destFile, this.contents);
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
}
