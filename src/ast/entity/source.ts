import { Block } from '@/ast/entity/block';
import { Field } from '@/ast/entity/field';
import { Table } from '@/ast/entity/table';
import { Configuration } from '@/util/configuration';
import { LogListener } from '@/util/log-listener';

export interface OutputWriter {
  appendContents(text: string): void;
}

export class SourceContext {
  table: Table;
  field: Field;
  output: OutputWriter;
  index: { table: number; field: number };
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
