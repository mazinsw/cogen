import { SourceContext } from '@/ast/entity/source';
import { Value } from '@/ast/entity/value';

export class StringValue extends Value {
  constructor(private value: string) {
    super();
  }

  public getValue() {
    return this.value;
  }

  public setValue(value: string) {
    this.value = value;
  }

  public toString(): string {
    return this.value;
  }

  public execute(context: SourceContext): void {
    context.output.appendContents(this.value);
  }
}
