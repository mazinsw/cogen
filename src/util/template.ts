import { DataSource } from '@/ast/entity/data-source';
import { TemplateSource } from '@/ast/entity/templace-source';
import { Runner } from '@/tools/runner';

export async function runTemplateText(
  inputText: string,
  templateText: string,
  options?: {
    legacy?: boolean;
    filename?: string;
    onWriteFile?: (destFile: string) => Promise<void>;
  },
): Promise<string> {
  const runner = new Runner();
  if (options?.legacy) {
    runner.getConfiguration().legacy = true;
  }
  const dataSource = new DataSource(runner.getConfiguration(), inputText);
  await dataSource.load(true);
  runner.dataSource = dataSource;

  const filenameTemplateSource = new TemplateSource(
    runner.getConfiguration(),
    options?.filename || '$[table.unix]',
  );
  await filenameTemplateSource.load(true);
  const contentTemplateSource = new TemplateSource(
    runner.getConfiguration(),
    templateText,
  );
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
