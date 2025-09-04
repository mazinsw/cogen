import { SourceContext, SourceType } from '@/ast/entity/source';
import { TableBaseConstant } from '@/ast/entity/table-base-constant';

export class TableConstant extends TableBaseConstant {
  public execute(context: SourceContext): void {
    super.execute({ ...context, type: SourceType.TABLE });
  }
}
