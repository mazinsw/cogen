import { KeyEach } from '@/ast/entity/key-each';
import { SourceContext, SourceType } from '@/ast/entity/source';
import { Table } from '@/ast/entity/table';
import { UniqueKey } from '@/ast/entity/unique-key';

export class UniqueEach extends KeyEach<UniqueKey> {
  protected readonly keyType = SourceType.UNIQUE;
  protected readonly keyLabel = 'unique index';

  protected tableKeys(table: Table): UniqueKey[] {
    return table.getUniqueKeys(true);
  }

  protected fieldKey(table: Table, context: SourceContext): UniqueKey | null {
    return table.getUniqueIndex(context.field) as UniqueKey | null;
  }
}
