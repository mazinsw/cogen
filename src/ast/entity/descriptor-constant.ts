import { FieldConstant } from '@/ast/entity/field-constant';
import { SourceContext } from '@/ast/entity/source';

export class DescriptorConstant extends FieldConstant {
  public execute(context: SourceContext): void {
    const field = context.table.getDescriptor();
    super.execute({
      ...context,
      field,
      position: context.table.fields.indexOf(field),
    });
  }
}
