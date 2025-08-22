import { DataSource } from '@/ast/entity/data-source';
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
      this.logger?.addMessage(error.message);
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
      const filenameTemplateSource = new TemplateSource(tempFile);
      filenameTemplateSource.setLogger(this.logger);
      if (tempFile.includes('$[')) {
        await filenameTemplateSource.load(true);
      }
      const contentTemplateSource = new TemplateSource(file.path);
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
        let pathFieldIndex = -1;
        for (const field of table.getFields()) {
          pathFieldIndex++;
          // Hashtable<String, String> newValues = new Hashtable<>();
          // TemplateLoader.extractComment(table.getComment(), newValues, "T.");
          // TemplateLoader.extractComment(field.getComment(), newValues, "F.");
          let destFile = tempFile;
          if (filenameTemplateSource.getStatements().length > 0) {
            destFile = filenameTemplateSource.execute(this.dataSource, {
              table,
              field,
              index: { table: tableIndex, field: pathFieldIndex },
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
          if (prevFile != null && prevFile === destFile) {
            continue;
          }
          prevFile = destFile;
          this.logger?.addMessage('Template: ' + destFile);
          if (file.isDirectory) {
            await fs.promises.mkdir(destFile, { recursive: true });
            continue;
          }
          await fs.promises.mkdir(path.dirname(destFile), {
            recursive: true,
          });
          fieldIndex++;
          const encoding = 'utf8'; // detectEncoding(file);
          // String fileContent = FileUtils.readFileToString(file, charset);
          const fileContent = filenameTemplateSource.execute(this.dataSource, {
            table,
            field,
            index: { table: tableIndex, field: fieldIndex },
          });
          await fs.promises.writeFile(destFile, fileContent, { encoding });
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
