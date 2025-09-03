import { Constant } from '@/ast/entity/constant';
import { SourceContext, SourceType } from '@/ast/entity/source';
import { Table } from '@/ast/entity/table';
import { getGenderChar } from '@/util/gender';
import { firstLetters, recase } from '@/util/helper';
import { normalize } from '@/util/normalize';
import { unixTransform } from '@/util/unix';

export class TableConstant extends Constant {
  public execute(context: SourceContext): void {
    let text = context.table.name;
    let firstAttribute = Table.Attribute.NAMES;
    for (const property of this.properties) {
      switch (property) {
        case Constant.Property.STYLE:
          firstAttribute = Table.Attribute.STYLES;
          text = context.table.getAttribute(firstAttribute);
          text = recase(this.caseSample, text || '');
          break;
        case Constant.Property.EXTRA:
          text = context.table.getAttribute(firstAttribute, 1);
          text = recase(this.caseSample, text || '');
          break;
        case Constant.Property.PACKAGE:
          firstAttribute = Table.Attribute.PACKAGE;
          text = context.table.getAttribute(firstAttribute);
          break;
        case Constant.Property.PATH:
          text = context.table.getAttribute(Table.Attribute.PACKAGE, 1);
          break;
        case Constant.Property.ORDER:
          const digits = `${context.data.getTables().length}`.length;
          text = `${context.position}`.padStart(digits, '0');
          break;
        case Constant.Property.INHERITED:
          text = context.table.getAttribute(Table.Attribute.INHERITED, 0);
          break;
        case Constant.Property.GENDER:
          firstAttribute = Table.Attribute.GENDER;
          text =
            context.table.getAttribute(firstAttribute) ||
            getGenderChar(
              context.table
                .getNormalizedAndDespluralizedName(context.config)
                .toLocaleLowerCase(),
            );
          text = recase(this.caseSample, text);
          break;
        case Constant.Property.LETTER:
          text = context.table
            .getNormalizedName(context.config)
            .substring(0, 1);
          text = recase(this.caseSample, text);
          break;
        case Constant.Property.NAME:
          firstAttribute = Table.Attribute.NAMES;
          text =
            context.table.getAttribute(firstAttribute) ||
            context.table.getNormalizedAndDespluralizedName(context.config);
          text = recase(this.caseSample, text, context.config.getUpperWords());
          break;
        case Constant.Property.PLURAL:
          text = context.table.getAttribute(firstAttribute, 1);
          if (!text && firstAttribute === Table.Attribute.NAMES) {
            text =
              context.table.getNormalizedAndDespluralizedName(context.config) +
              's';
          } else if (!text && firstAttribute !== Table.Attribute.NAMES) {
            text = unixTransform(
              normalize(context.table.getNormalizedName(context.config) + 's'),
            );
          }
          text = recase(this.caseSample, text, context.config.getUpperWords());
          break;
        case Constant.Property.INFORMATION:
          const info =
            context.table.getAttribute(Table.Attribute.INFORMATION) ||
            context.table.getAttribute(Table.Attribute.NAMES) ||
            context.table.getNormalizedAndDespluralizedName(context.config);
          text = recase(this.caseSample, info);
          break;
        case Constant.Property.UNIX:
          firstAttribute = Table.Attribute.UNIX_NAMES;
          const unixName =
            context.table.getAttribute(firstAttribute) ||
            unixTransform(context.table.getNormalizedName(context.config));
          text = recase(this.caseSample, unixName);
          break;
        case Constant.Property.DEFAULT:
          if (firstAttribute === Table.Attribute.UNIX_NAMES) {
            const unixNameDefault =
              context.table.getAttribute(firstAttribute, 1) ||
              unixTransform(context.table.getNormalizedDefault());
            text = recase(this.caseSample, unixNameDefault);
          } else {
            text = recase(
              this.caseSample,
              context.table.getNormalizedDefault(),
              context.config.getUpperWords(),
            );
          }
          break;
        case Constant.Property.NORMALIZED:
          text = context.table.getNormalizedName(context.config);
          text = recase(this.caseSample, text, context.config.getUpperWords());
          break;
        case Constant.Property.CHARS:
          text = firstLetters(context.table.getNormalizedName(context.config));
          break;
        case Constant.Property.DESCRIPTION:
          text = context.table.parsedComment.replaceAll("'", "\\'");
          break;
        case Constant.Property.COMMENT:
          text =
            context.type === SourceType.COMMENT
              ? context.comment
              : context.table.parsedComment;
          break;
        case Constant.Property.IDENTIFIER:
          text = context.table.getAttribute(Table.Attribute.IDENTIFIER);
          break;
      }
    }
    context.output.appendContents(text || '');
  }
}
