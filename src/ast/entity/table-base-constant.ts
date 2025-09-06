import { Constant } from '@/ast/entity/constant';
import { SourceContext, SourceType } from '@/ast/entity/source';
import { Table } from '@/ast/entity/table';
import { getGenderChar } from '@/util/gender';
import { firstLetters, recase } from '@/util/helper';
import { normalize } from '@/util/normalize';
import { unixTransform } from '@/util/unix';

export class TableBaseConstant extends Constant {
  public execute(context: SourceContext): void {
    const index = Math.min(this.parentLevel, context.tableStack.length - 1);
    const table = context.tableStack[index];
    let text = table.name;
    let firstAttribute = Table.Attribute.NAMES;
    for (const property of this.properties) {
      switch (property) {
        case Constant.Property.STYLE:
          firstAttribute = Table.Attribute.STYLES;
          text = table.getAttribute(firstAttribute);
          text = recase(this.caseSample, text || '');
          break;
        case Constant.Property.EXTRA:
          text = table.getAttribute(firstAttribute, 1);
          text = recase(this.caseSample, text || '');
          break;
        case Constant.Property.PACKAGE:
          firstAttribute = Table.Attribute.PACKAGE;
          text = table.getAttribute(firstAttribute);
          break;
        case Constant.Property.PATH:
          text = table.getAttribute(Table.Attribute.PACKAGE, 1);
          break;
        case Constant.Property.ORDER:
          const digits = `${context.data.getTables().length}`.length;
          text = `${context.position}`.padStart(digits, '0');
          break;
        case Constant.Property.INHERITED:
          text = table.getAttribute(Table.Attribute.INHERITED, 0);
          break;
        case Constant.Property.GENDER:
          firstAttribute = Table.Attribute.GENDER;
          text =
            table.getAttribute(firstAttribute) ||
            getGenderChar(
              table
                .getNormalizedAndDespluralizedName(context.config)
                .toLowerCase(),
            );
          text = recase(this.caseSample, text);
          break;
        case Constant.Property.LETTER:
          text = table.getNormalizedName(context.config).substring(0, 1);
          text = recase(this.caseSample, text);
          break;
        case Constant.Property.NAME:
          firstAttribute = Table.Attribute.NAMES;
          text =
            table.getAttribute(firstAttribute) ||
            table.getNormalizedAndDespluralizedName(context.config);
          text = recase(this.caseSample, text, context.config.getUpperWords());
          break;
        case Constant.Property.PLURAL:
          text = table.getAttribute(firstAttribute, 1);
          if (!text && firstAttribute === Table.Attribute.NAMES) {
            text =
              table.getNormalizedAndDespluralizedName(context.config) + 's';
          } else if (!text && firstAttribute !== Table.Attribute.NAMES) {
            text = unixTransform(
              normalize(table.getNormalizedName(context.config) + 's'),
            );
          }
          text = recase(this.caseSample, text, context.config.getUpperWords());
          break;
        case Constant.Property.INFORMATION:
          const info =
            table.getAttribute(Table.Attribute.INFORMATION) ||
            table.getAttribute(Table.Attribute.NAMES) ||
            table.getNormalizedAndDespluralizedName(context.config);
          text = recase(this.caseSample, info);
          break;
        case Constant.Property.UNIX:
          firstAttribute = Table.Attribute.UNIX_NAMES;
          const unixName =
            table.getAttribute(firstAttribute) ||
            unixTransform(table.getNormalizedName(context.config));
          text = recase(this.caseSample, unixName);
          break;
        case Constant.Property.DEFAULT:
          if (firstAttribute === Table.Attribute.UNIX_NAMES) {
            const unixNameDefault =
              table.getAttribute(firstAttribute, 1) ||
              unixTransform(table.getNormalizedDefault());
            text = recase(this.caseSample, unixNameDefault);
          } else {
            text = recase(
              this.caseSample,
              table.getNormalizedDefault(),
              context.config.getUpperWords(),
            );
          }
          break;
        case Constant.Property.NORMALIZED:
          text = table.getNormalizedName(context.config);
          text = recase(this.caseSample, text, context.config.getUpperWords());
          break;
        case Constant.Property.CHARS:
          text = firstLetters(table.getNormalizedName(context.config));
          break;
        case Constant.Property.DESCRIPTION:
          text = table.parsedComment.replaceAll("'", "\\'");
          break;
        case Constant.Property.COMMENT:
          text =
            context.type === SourceType.COMMENT
              ? context.comment
              : table.parsedComment;
          break;
        case Constant.Property.IDENTIFIER:
          text = table.getAttribute(Table.Attribute.IDENTIFIER);
          break;
      }
    }
    context.output.appendContents(text || '');
  }
}
