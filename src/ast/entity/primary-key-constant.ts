import { FieldBaseConstant } from '@/ast/entity/field-base-constant';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class PrimaryKeyConstant extends FieldBaseConstant {
  public execute(context: SourceContext): void {
    const index = context.table.getPrimaryKey();
    const field =
      index === context.index
        ? context.field
        : context.table.find(index.fields[0].name);
    super.execute({
      ...context,
      field,
      index,
      type: SourceType.PRIMARY,
      position:
        field === context.field
          ? context.position
          : context.table.fields.indexOf(field),
    });
  }
}
