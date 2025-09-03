import { FieldConstant } from '@/ast/entity/field-constant';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class ImageConstant extends FieldConstant {
  public execute(context: SourceContext): void {
    const field = context.table.getImage();
    super.execute({
      ...context,
      field,
      type: SourceType.IMAGE,
      position: context.table.fields.indexOf(field),
    });
  }
}
