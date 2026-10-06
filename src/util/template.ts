import { DataSource } from '@/ast/entity/data-source';
import { Table } from '@/ast/entity/table';
import { TemplateSource } from '@/ast/entity/templace-source';
import { Runner } from '@/tools/runner';
import { Configuration } from '@/util/configuration';
import { LogListener } from '@/util/log-listener';

export async function runTemplateText(
  inputText: string,
  templateText: string,
  options?: {
    legacy?: boolean;
    filename?: string;
    onWriteFile?: (destFile: string) => Promise<void>;
    /** receives parser and generator messages, defaults to console.log */
    logger?: LogListener;
    configuration?: Configuration;
    /** only generate output for the tables accepted by this filter */
    tableFilter?: (table: Table) => boolean;
  },
): Promise<string> {
  const logger = options?.logger || { addMessage: console.log };
  const runner = new Runner();
  if (options?.configuration) {
    runner.setConfiguration(options.configuration);
  }
  if (options?.legacy) {
    runner.getConfiguration().legacy = true;
  }
  runner.tableFilter = options?.tableFilter;
  const dataSource = new DataSource(runner.getConfiguration(), inputText);
  dataSource.setLogger(logger);
  await dataSource.load(true);
  runner.dataSource = dataSource;

  const filenameTemplateSource = new TemplateSource(
    runner.getConfiguration(),
    options?.filename || '$[table.unix]',
  );
  filenameTemplateSource.setLogger(logger);
  await filenameTemplateSource.load(true);
  const contentTemplateSource = new TemplateSource(
    runner.getConfiguration(),
    templateText,
  );
  contentTemplateSource.setLogger(logger);
  await runner.generate(
    filenameTemplateSource,
    contentTemplateSource,
    options?.onWriteFile,
  );
  await contentTemplateSource.load(true);
  let contents = '';
  await runner.generate(
    filenameTemplateSource,
    contentTemplateSource,
    async () => {
      contents += runner.contents;
    },
  );
  return contents;
}
