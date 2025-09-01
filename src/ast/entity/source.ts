import { Index } from '@/ast/entity';
import { Block } from '@/ast/entity/block';
import { DataSource } from '@/ast/entity/data-source';
import { Field } from '@/ast/entity/field';
import { Table } from '@/ast/entity/table';
import { Configuration } from '@/util/configuration';
import { LogListener } from '@/util/log-listener';

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
  PRIMARY,
}

export class SourceContext {
  type: SourceType;
  table: Table;
  field: Field;
  index: Index;
  output: OutputWriter;
  config: Configuration;
  data: DataSource;
  position: {
    table: number;
    field: number;
    index: number;
  };
}

export abstract class Source extends Block {
  protected logger?: LogListener;
  public encoding: BufferEncoding;

  constructor(protected configuration: Configuration) {
    super();
    this.encoding = 'utf8';
  }

  public abstract load(): Promise<void>;

  public setLogger(logger: LogListener) {
    this.logger = logger;
  }
}
