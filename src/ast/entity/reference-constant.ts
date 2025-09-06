import { SourceContext, SourceType } from '@/ast/entity/source';
import { TableBaseConstant } from '@/ast/entity/table-base-constant';

export class ReferenceConstant extends TableBaseConstant {
  public execute(context: SourceContext): void {
    if (context.type === SourceType.REFERENCE) {
      return super.execute(context);
    }
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    const contextTable = context.tableStack[index];
    const referenceName = contextTable.getReference(context.field.name);
    const tablePosition = context.data.findTableIndex(referenceName);
    if (tablePosition < 0) {
      return super.execute(context);
    }
    const table = context.data.tables[tablePosition];
    super.execute({
      ...context,
      type: SourceType.REFERENCE,
      tableStack: [table, ...context.tableStack],
      position: table === contextTable ? context.position : tablePosition,
    });
  }
}
