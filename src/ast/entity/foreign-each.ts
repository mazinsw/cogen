import { ForeignKey } from '@/ast/entity/foreign-key';
import { KeyEach } from '@/ast/entity/key-each';
import { SourceContext, SourceType } from '@/ast/entity/source';
import { Table } from '@/ast/entity/table';

export class ForeignEach extends KeyEach<ForeignKey> {
  protected readonly keyType = SourceType.FOREIGN;
  protected readonly keyLabel = 'foreign key';

  protected tableKeys(table: Table): ForeignKey[] {
    return table.getForeignKeys();
  }

  protected fieldKey(table: Table, context: SourceContext): ForeignKey | null {
    return table.findForeignKey(context.field.name);
  }
}
