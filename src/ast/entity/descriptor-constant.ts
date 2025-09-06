import { FieldBaseConstant } from '@/ast/entity/field-base-constant';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class DescriptorConstant extends FieldBaseConstant {
  public execute(context: SourceContext): void {
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    const table = context.tableStack[index];
    const field = context.field?.isDescriptor()
      ? context.field
      : table.getDescriptor();
    super.execute({
      ...context,
      field,
      type: SourceType.FIELD,
      position:
        field === context.field
          ? context.position
          : table.fields.indexOf(field),
    });
  }
}
