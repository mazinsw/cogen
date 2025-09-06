import { Index } from '@/ast/entity';
import { Block } from '@/ast/entity/block';
import { DataSource } from '@/ast/entity/data-source';
import { Field } from '@/ast/entity/field';
import { Table } from '@/ast/entity/table';
import { Configuration } from '@/util/configuration';
import { LogListener } from '@/util/log-listener';
import chardet from 'chardet';
import * as fs from 'fs';
import * as iconv from 'iconv-lite';

export interface OutputWriter {
  appendContents(text: string): void;
}

export enum SourceType {
  TABLE,
  FIELD,
  UNIQUE,
  INDEX,
  FOREIGN,
  CONSTRAINT,
  REFERENCE,
  INHERITED,
  PRIMARY,
  OPTION,
  IMAGE,
  COMMENT,
}

export class SourceContext {
  type: SourceType;
  tableStack: Table[];
  field: Field;
  index?: Index;
  option?: string;
  comment?: string;
  output: OutputWriter;
  config: Configuration;
  data: DataSource;
  position: number;
}

export abstract class Source extends Block {
  protected logger?: LogListener;
  public encoding: string;

  constructor(
    protected configuration: Configuration,
    public filePathOrContents?: string,
  ) {
    super();
  }

  public abstract load(pathAsContent?: boolean): Promise<void>;

  public setLogger(logger: LogListener) {
    this.logger = logger;
  }

  public async readFile(fileName: string): Promise<string> {
    const buffer = await fs.promises.readFile(fileName);
    const [first, second] = chardet
      .analyse(buffer)
      .filter(
        (item, index) =>
          index === 0 || (item.name === 'UTF-8' && item.confidence > 0),
      );
    const encodingName =
      first && first?.confidence < 100
        ? second?.name || first?.name
        : first.name;
    this.encoding = encodingName || 'UTF-8';
    return iconv.decode(buffer, this.encoding);
  }

  public async writeFile(fileName: string, contents: string) {
    const buffer = iconv.encode(contents, this.encoding);
    await fs.promises.writeFile(fileName, buffer);
  }
}
