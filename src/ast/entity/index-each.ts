import { Index } from '@/ast/entity/index';
import { KeyEach } from '@/ast/entity/key-each';
import { SourceContext, SourceType } from '@/ast/entity/source';
import { Table } from '@/ast/entity/table';

export class IndexEach extends KeyEach<Index> {
  protected readonly keyType = SourceType.INDEX;
  protected readonly keyLabel = 'index';

  protected tableKeys(table: Table): Index[] {
    return table.indexes;
  }

  protected fieldKey(table: Table, context: SourceContext): Index | null {
    return table.findIndex(context.field);
  }
}
