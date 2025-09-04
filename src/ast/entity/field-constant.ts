import { Constant } from '@/ast/entity/constant';
import { EnumType } from '@/ast/entity/enum-type';
import { Field } from '@/ast/entity/field';
import { SourceContext, SourceType } from '@/ast/entity/source';
import { StringType } from '@/ast/entity/string-type';
import { Table } from '@/ast/entity/table';
import { getGenderChar } from '@/util/gender';
import { firstLetters, recase } from '@/util/helper';
import { normalize } from '@/util/normalize';
import { despluralize } from '@/util/plural';
import { unixTransform } from '@/util/unix';

export class FieldConstant extends Constant {
  public execute(context: SourceContext): void {
    if (!context.field) {
      return;
    }
    let array = false;
    let image = context.type === SourceType.IMAGE;
    let option = context.type === SourceType.OPTION;
    // let onAction = false;
    let text = context.field.name;
    let firstAttribute = Field.Attribute.UNKNOWN;
    for (const property of this.properties) {
      switch (property) {
        case Constant.Property.STYLE:
          firstAttribute = Field.Attribute.STYLES;
          text = context.field.getAttribute(firstAttribute);
          text = recase(this.caseSample, text || '');
          break;
        case Constant.Property.EXTRA:
          text = context.field.getAttribute(firstAttribute, 1);
          text = recase(this.caseSample, text || '');
          break;
        case Constant.Property.MASK:
          text = context.field.getAttribute(Field.Attribute.MASK);
          break;
        case Constant.Property.ORDER:
          const digits = `${context.table.fields.length}`.length;
          text = `${context.position}`.padStart(digits, '0');
          break;
        case Constant.Property.GENDER:
          text =
            context.field.getAttribute(Field.Attribute.GENDER) ||
            getGenderChar(
              despluralize(
                context.field.name,
                context.config.getDictionary(),
              ).toLocaleLowerCase(),
            );
          text = recase(this.caseSample, text);
          break;
        case Constant.Property.LETTER:
          text = recase(this.caseSample, context.field.name.substring(0, 1));
          break;
        case Constant.Property.NAME:
          if (
            [
              SourceType.INDEX,
              SourceType.UNIQUE,
              SourceType.FOREIGN,
              SourceType.CONSTRAINT,
              SourceType.PRIMARY,
            ].includes(context.type) &&
            context.index
          ) {
            text = recase(this.caseSample, context.index.name);
            break;
          }
          if (option && !(context.field.getType() instanceof EnumType)) {
            text = '';
            break;
          }
          if (option) {
            const elements = (context.field.getType() as EnumType).elements;
            text =
              context.position >= 0 && context.position < elements.length
                ? context.field.getAttribute(
                    Field.Attribute.ENUM_NAMES,
                    context.position,
                  ) || text
                : '';
            text = recase(this.caseSample, text);
            break;
          }
          firstAttribute = Field.Attribute.NAMES;
          text =
            context.field.getAttribute(firstAttribute) || context.field.name;
          text = recase(this.caseSample, text, context.config.getUpperWords());
          break;
        case Constant.Property.PLURAL:
          text =
            context.field.getAttribute(Field.Attribute.UNIX_NAMES, 1) ||
            unixTransform(
              normalize(
                context.field.getAttribute(Field.Attribute.NAMES, 1) ||
                  context.field.getNormalizedName() + 's',
              ),
            );
          text = recase(this.caseSample, text);
          break;
        case Constant.Property.INFORMATION:
          const info =
            context.field.getAttribute(Field.Attribute.INFORMATION) ||
            context.field.getAttribute(Field.Attribute.NAMES) ||
            context.field.name;
          text = recase(this.caseSample, info);
          break;
        case Constant.Property.UNIX:
          if (option && !(context.field.getType() instanceof EnumType)) {
            text = '';
            break;
          }
          if (option) {
            const elements = (context.field.getType() as EnumType).elements;
            text =
              context.position >= 0 && context.position < elements.length
                ? unixTransform(text)
                : '';
            text = recase(this.caseSample, text);
            break;
          }
          const unixName =
            context.field.getAttribute(Field.Attribute.UNIX_NAMES) ||
            unixTransform(context.field.getNormalizedName());
          text = recase(this.caseSample, unixName);
          break;
        case Constant.Property.DEFAULT:
          if (image) {
            text = context.field.getAttribute(Field.Attribute.IMAGE, 2);
            break;
          }
          text = context.field.getValue()?.toString() ?? 'null';
          break;
        case Constant.Property.NORMALIZED:
          if (option) {
            text = normalize(
              context.option,
              context.config.getDictionary(),
            ).replace(/\[\d+\]\.?/g, '');
            text = recase(
              this.caseSample,
              text,
              context.config.getUpperWords(),
            );
            break;
          }
          text =
            firstAttribute === Field.Attribute.NAMES
              ? normalize(
                  context.field.getAttribute(Field.Attribute.NAMES) ||
                    context.field.name,
                ).replace(/\[\d+\]\.?/g, '')
              : context.field.getNormalizedName();
          text = recase(this.caseSample, text, context.config.getUpperWords());
          break;
        case Constant.Property.SINGULAR:
          text = context.field.getNormalizedAndDespluralizedName(
            context.config,
          );
          text = recase(this.caseSample, text, context.config.getUpperWords());
          break;
        case Constant.Property.NO_ID:
          text = context.field.getNormalizedName().replace(/I[dD]$/, '');
          text = recase(this.caseSample, text, context.config.getUpperWords());
          break;
        case Constant.Property.CHARS:
          text = firstLetters(context.field.getNormalizedName());
          break;
        case Constant.Property.SIZE:
          text = context.field.getType().getSize().toString();
          break;
        case Constant.Property.LOW:
          text =
            context.field.getType() instanceof EnumType ? (0).toString() : '';
          break;
        case Constant.Property.HIGH:
          text =
            context.field.getType() instanceof EnumType
              ? (
                  (context.field.getType() as EnumType).elements.length - 1
                ).toString()
              : '';
          break;
        case Constant.Property.LENGTH:
          text = (context.field.getType() as StringType).getLength().toString();
          break;
        case Constant.Property.DESCRIPTION:
          text = context.field.parsedComment.replaceAll("'", "\\'");
          break;
        case Constant.Property.COMMENT:
          text =
            context.type === SourceType.COMMENT
              ? context.comment
              : context.field.parsedComment;
          break;
        case Constant.Property.IDENTIFIER:
          text = context.field.getAttribute(Field.Attribute.IDENTIFIER);
          break;
        case Constant.Property.OPTION:
          option = true;
          if (!(context.field.getType() instanceof EnumType)) {
            text = '';
            break;
          }
          const elements = (context.field.getType() as EnumType).elements;
          text =
            context.position >= 0 && context.position < elements.length
              ? elements[context.position]
              : '';
          break;
        case Constant.Property.INDEX:
          if (option && !array) {
            text = context.position.toString();
            break;
          }
          text = (
            context.table.indexedFields
              .get(context.field.getNormalizedName())
              ?.fields.indexOf(context.field) ?? ''
          ).toString();
          break;
        case Constant.Property.NUMBER:
          const commonField = context.table.indexedFields.get(
            context.field.getNormalizedName(),
          );
          text = commonField
            ? (commonField.fields.indexOf(context.field) + 1).toString()
            : '';
          break;
        case Constant.Property.IMAGE:
          image = true;
          break;
        case Constant.Property.ARRAY:
          array = true;
          break;
        case Constant.Property.COUNT:
          text = (
            context.table.indexedFields.get(context.field.getNormalizedName())
              ?.size ?? ''
          ).toString();
          break;
        case Constant.Property.ON:
          // onAction = true;
          break;
        case Constant.Property.DELETE:
          text =
            context.table
              .findForeignKey(context.field.name)
              ?.getDeleteActionText() || 'NO ACTION';
          text = recase(this.caseSample, text);
          break;
        case Constant.Property.UPDATE:
          text =
            context.table
              .findForeignKey(context.field.name)
              ?.getUpdateActionText() || 'NO ACTION';
          text = recase(this.caseSample, text);
          break;
        case Constant.Property.WIDTH:
          text = context.field.getAttribute(Field.Attribute.IMAGE) || '64x64';
          text = text.split('x')[0];
          break;
        case Constant.Property.HEIGHT:
          text = context.field.getAttribute(Field.Attribute.IMAGE) || '64x64';
          text = text.split('x')[1];
          break;
        case Constant.Property.FOLDER:
          text =
            context.field.getAttribute(Field.Attribute.IMAGE, 1) ||
            context.table.getAttribute(Table.Attribute.UNIX_NAMES) ||
            unixTransform(context.table.getNormalizedName(context.config));
          break;
      }
    }
    context.output.appendContents(text || '');
  }
}
