import { Constraint } from '@/ast/entity/constraint';
import { KeyEach } from '@/ast/entity/key-each';
import { SourceContext, SourceType } from '@/ast/entity/source';
import { Table } from '@/ast/entity/table';

export class ConstraintEach extends KeyEach<Constraint> {
  protected readonly keyType = SourceType.CONSTRAINT;
  protected readonly keyLabel = 'constraint';

  protected tableKeys(table: Table): Constraint[] {
    return table.constraints;
  }

  protected fieldKey(table: Table, context: SourceContext): Constraint | null {
    return table.findForeignKey(context.field.name);
  }
}
