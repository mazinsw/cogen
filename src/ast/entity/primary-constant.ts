import { FieldBaseConstant } from '@/ast/entity/field-base-constant';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class PrimaryConstant extends FieldBaseConstant {
  public execute(context: SourceContext): void {
    const tableIndex = Math.min(
      this.parentLevel,
      context.tableStack.length - 1,
    );
    const table = context.tableStack[tableIndex];
    const index = table.getPrimaryKey();
    const field =
      index === context.index
        ? context.field
        : table.find(index.fields[0].name);
    super.execute({
      ...context,
      field,
      index,
      type: SourceType.FIELD,
      position:
        index === context.index
          ? context.position
          : table.fields.indexOf(field),
    });
  }
}
