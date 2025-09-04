import { FieldBaseConstant } from '@/ast/entity/field-base-constant';
import { SourceContext, SourceType } from '@/ast/entity/source';

export class UniqueConstant extends FieldBaseConstant {
  public execute(context: SourceContext): void {
    super.execute({ ...context, type: SourceType.UNIQUE });
  }
}
