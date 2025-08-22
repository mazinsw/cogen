import { Constant } from '@/ast/entity/constant';
import { SourceContext } from '@/ast/entity/source';
import { Table } from '@/ast/entity/table';
import { recase } from '@/util/helper';

export class TableConstant extends Constant {
  public execute(context: SourceContext): void {
    let text = context.table.getName();
    for (const property of this.properties) {
      switch (property) {
        case Constant.Property.STYLE:
          text = context.table.getAttribute(Table.Attribute.STYLES);
          break;
        case Constant.Property.EXTRA:
          text = context.table.getAttribute(Table.Attribute.STYLES, 1);
          break;
      }
    }
    context.output.appendContents(recase(this.caseSample, text));
  }
}
