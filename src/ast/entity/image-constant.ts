import { Field } from '@/ast/entity/field';
import { FieldBaseConstant } from '@/ast/entity/field-base-constant';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class ImageConstant extends FieldBaseConstant {
  public execute(context: SourceContext): void {
    const field = context.field?.is(Field.Attribute.IMAGE)
      ? context.field
      : context.table.getImage();
    super.execute({
      ...context,
      field,
      type: SourceType.IMAGE,
      position:
        field === context.field
          ? context.position
          : context.table.fields.indexOf(field),
    });
  }
}
