import { FieldConstant } from '@/ast/entity/field-constant';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class PrimaryConstant extends FieldConstant {
  public execute(context: SourceContext): void {
    const index = context.table.getPrimaryKey();
    const field = context.table.getPrimary();
    super.execute({
      ...context,
      field,
      index,
      type: SourceType.PRIMARY,
      position: context.table.fields.indexOf(field),
    });
  }
}
