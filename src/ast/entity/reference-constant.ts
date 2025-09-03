import { SourceContext, SourceType } from '@/ast/entity/source';
import { TableConstant } from '@/ast/entity/table-constant';

export class ReferenceConstant extends TableConstant {
  public execute(context: SourceContext): void {
    if (context.type === SourceType.REFERENCE) {
      return super.execute(context);
    }
    const referenceName = context.table.getReference(context.field.name);
    const tablePosition = context.data.findTableIndex(referenceName);
    const table = context.data.tables[tablePosition];
    super.execute({
      ...context,
      type: SourceType.REFERENCE,
      table,
      position: tablePosition,
    });
  }
}
