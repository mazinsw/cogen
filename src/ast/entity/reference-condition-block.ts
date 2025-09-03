import { SourceContext, SourceType } from '@/ast/entity/source';
import { TestConditionBlock } from '@/ast/entity/test-condition-block';

export class ReferenceConditionBlock extends TestConditionBlock {
  public buildTestContext(context: SourceContext): SourceContext {
    if (context.type === SourceType.REFERENCE) {
      return context;
    }
    const referenceName = context.table.getReference(context.field.name);
    const tablePosition = context.data.findTableIndex(referenceName);
    const table = context.data.tables[tablePosition];
    return {
      ...context,
      type: SourceType.REFERENCE,
      table,
      position: tablePosition,
    };
  }
}
