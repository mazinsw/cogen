import { Index } from '@/ast/entity/index';
import { LoopBlock } from '@/ast/entity/loop-block';
import { SourceContext, SourceType } from '@/ast/entity/source';
import { Table } from '@/ast/entity/table';

/**
 * Loop over an index or key.
 * At table level it iterates the keys of the table, each one becoming the
 * current key; inside a key or a field it iterates the fields of that key.
 */
export abstract class KeyEach<T extends Index> extends LoopBlock {
  private key?: T;
  private keys?: T[];

  /** source type of the current key */
  protected abstract readonly keyType: SourceType;
  protected abstract readonly keyLabel: string;

  /** keys iterated at table level */
  protected abstract tableKeys(table: Table): T[];

  /** key of the current field when not inside a key loop */
  protected abstract fieldKey(table: Table, context: SourceContext): T | null;

  public buildContext(
    context: SourceContext,
    position: number,
    runPosition: number,
  ): SourceContext {
    const table = this.contextTable(context);
    if (this.keys) {
      const relativePosition = this.reverse
        ? this.keys.length - position - 1
        : position;
      const key = this.keys[relativePosition];
      return {
        ...context,
        field: table.find(key.fields[0]?.name) || context.field,
        index: key,
        type: this.keyType,
        position: runPosition,
      };
    }
    const orderField = this.key.fields[position];
    const field = table.find(orderField.name);
    if (!field) {
      throw new Error(
        `Field ${orderField.name} not found in table ${table.name} from ${this.keyLabel} ${this.key.name}`,
      );
    }
    return {
      ...context,
      field,
      index: this.key,
      type: this.keyType,
      position: runPosition,
    };
  }

  public getLength(context: SourceContext): number {
    const table = this.contextTable(context);
    if (context.type === SourceType.TABLE) {
      this.key = undefined;
      this.keys = this.tableKeys(table);
      return this.keys.length;
    }
    this.keys = undefined;
    this.key =
      (context.type === this.keyType ? (context.index as T) : null) ||
      (context.field && this.fieldKey(table, context)) ||
      undefined;
    return this.key?.fields.length ?? 0;
  }

  private contextTable(context: SourceContext): Table {
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    return context.tableStack[index];
  }
}
