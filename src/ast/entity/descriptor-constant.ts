import { FieldBaseConstant } from '@/ast/entity/field-base-constant';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class DescriptorConstant extends FieldBaseConstant {
  public execute(context: SourceContext): void {
    const field = context.table.getDescriptor();
    super.execute({
      ...context,
      field,
      type: SourceType.FIELD,
      position:
        field === context.field
          ? context.position
          : context.table.fields.indexOf(field),
    });
  }
}
