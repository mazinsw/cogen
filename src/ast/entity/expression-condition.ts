import { CommentedNode } from '@/ast/entity/commented-node';
import { Condition } from '@/ast/entity/condition';
import { DataType } from '@/ast/entity/data-type';
import { EnumType } from '@/ast/entity/enum-type';
import { FulltextIndex } from '@/ast/entity/fulltext-index';
import { PrimaryKey } from '@/ast/entity/primary-key';
import { SourceContext, SourceType } from '@/ast/entity/source';
import { getGenderChar } from '@/util/gender';
import { despluralize } from '@/util/plural';

export enum Expression {
  ATTRIBUTE_COMMENT,
  ATTRIBUTE_DESCRIPTION,
  ATTRIBUTE_INHERITED,
  ATTRIBUTE_PACKAGE,
  ATTRIBUTE_PATH,

  PROPERTY_ALL,
  PROPERTY_ARRAY,
  PROPERTY_CONSTRAINT,
  PROPERTY_DEFAULT,
  PROPERTY_DEPENDS,
  PROPERTY_DESCRIPTOR,
  PROPERTY_FEMININE,
  PROPERTY_FEW_FIELDS,
  PROPERTY_FIRST,
  PROPERTY_FOREIGN,
  PROPERTY_FULLTEXT,
  PROPERTY_IGNORED,
  PROPERTY_IMAGE,
  PROPERTY_INDEX,
  PROPERTY_INFO,
  PROPERTY_MANY,
  PROPERTY_MASCULINE,
  PROPERTY_MASKED,
  PROPERTY_NON_FIRST,
  PROPERTY_NULL,
  PROPERTY_NUMBER,
  PROPERTY_OPTION,
  PROPERTY_OPTIONAL,
  PROPERTY_PASSWORD,
  PROPERTY_PLURALIZABLE,
  PROPERTY_PRIMARY,
  PROPERTY_RADIO,
  PROPERTY_REFERENCE,
  PROPERTY_REPEATED,
  PROPERTY_REQUIRED,
  PROPERTY_SEARCHABLE,
  PROPERTY_SELF_REFERENCE,
  PROPERTY_SINGLE,
  PROPERTY_UNIQUE,
  PROPERTY_UNPLURALIZABLE,
  PROPERTY_UNSIGNED,

  TYPE_BIGINT,
  TYPE_BLOB,
  TYPE_BOOLEAN,
  TYPE_CHAR,
  TYPE_CURRENCY,
  TYPE_DATE,
  TYPE_DATETIME,
  TYPE_DOUBLE,
  TYPE_ENUM,
  TYPE_FLOAT,
  TYPE_INTEGER,
  TYPE_JSON,
  TYPE_STRING,
  TYPE_TEXT,
  TYPE_TIME,
  TYPE_TIMESTAMP,
  TYPE_TINYINT,
}

export enum Operator {
  AND,
  OR,
}

export class ExpressionCondition extends Condition {
  constructor(
    public expression?: Expression,
    public left?: Condition,
    public operator?: Operator,
    public right?: Condition,
    inverted?: boolean,
  ) {
    super();
    this.inverted = inverted;
  }

  public check(context: SourceContext): boolean {
    const leftOk =
      (this.expression === undefined
        ? !this.left || this.left.check(context)
        : !!this.test(context)) === !this.inverted;
    if (this.operator === Operator.OR && leftOk) {
      return true;
    }
    if (this.operator === Operator.OR) {
      return !this.right || this.right.check(context) === !this.inverted;
    }
    // and short circuit
    if (!leftOk) {
      return false;
    }
    return !this.right || this.right.check(context) === !this.inverted;
  }

  public test(context: SourceContext): boolean {
    const table = context.tableStack[0];
    const getSelectedIndex = () =>
      context.index ||
      (!!context.field &&
        ((context.type === SourceType.FOREIGN &&
          table.findForeignKey(context.field.name)) ||
          (context.type === SourceType.CONSTRAINT &&
            table.findConstraint(context.field.name)) ||
          (context.type === SourceType.INDEX &&
            table.findIndex(context.field)) ||
          (context.type === SourceType.PRIMARY && table.getPrimaryKey()) ||
          table.getUniqueIndex(context.field)));

    const asIndex = () =>
      [
        SourceType.INDEX,
        SourceType.UNIQUE,
        SourceType.FOREIGN,
        SourceType.CONSTRAINT,
        SourceType.PRIMARY,
      ].includes(context.type);

    const asTable = () =>
      [SourceType.REFERENCE, SourceType.TABLE, SourceType.INHERITED].includes(
        context.type,
      );

    const isPluralizable = () =>
      asTable()
        ? table.name.toLocaleLowerCase() ===
          (
            table.getNormalizedAndDespluralizedName(context.config) + 's'
          ).toLocaleLowerCase()
        : !!context.field &&
          context.field?.name.toLocaleLowerCase() ===
            (
              context.field?.getNormalizedAndDespluralizedName(context.config) +
              's'
            ).toLocaleLowerCase();

    switch (this.expression) {
      case Expression.ATTRIBUTE_COMMENT:
      case Expression.ATTRIBUTE_DESCRIPTION:
        return context.type === SourceType.COMMENT
          ? true
          : asTable()
            ? !!table.parsedComment
            : !!context.field?.parsedComment;
      case Expression.ATTRIBUTE_INHERITED:
        return table.is(CommentedNode.Attribute.INHERITED);
      case Expression.ATTRIBUTE_PACKAGE:
        return table.is(CommentedNode.Attribute.PACKAGE);
      case Expression.ATTRIBUTE_PATH:
        return table.getAttributes(CommentedNode.Attribute.PACKAGE).length >= 2;

      case Expression.PROPERTY_ALL:
        return true;
      case Expression.PROPERTY_MASCULINE: {
        const genderChar = asTable()
          ? table.getAttribute(CommentedNode.Attribute.GENDER) ||
            getGenderChar(
              table
                .getNormalizedAndDespluralizedName(context.config)
                .toLocaleLowerCase(),
            )
          : context.field?.getAttribute(CommentedNode.Attribute.GENDER) ||
            getGenderChar(
              despluralize(
                context.field?.name || '',
                context.config.getDictionary(),
              ).toLocaleLowerCase(),
            );
        return genderChar.toLocaleLowerCase() === 'o';
      }
      case Expression.PROPERTY_FEMININE: {
        const genderChar = asTable()
          ? table.getAttribute(CommentedNode.Attribute.GENDER) ||
            getGenderChar(
              table
                .getNormalizedAndDespluralizedName(context.config)
                .toLocaleLowerCase(),
            )
          : context.field?.getAttribute(CommentedNode.Attribute.GENDER) ||
            getGenderChar(
              despluralize(
                context.field?.name || '',
                context.config.getDictionary(),
              ).toLocaleLowerCase(),
            );
        return genderChar.toLocaleLowerCase() === 'a';
      }
      case Expression.PROPERTY_REFERENCE:
        return !!context.field && !!table.findForeignKey(context.field.name);
      case Expression.PROPERTY_SELF_REFERENCE:
        return (
          !!context.field &&
          table.findForeignKey(context.field.name)?.getTableName() ===
            table.name
        );
      case Expression.PROPERTY_PRIMARY:
        return context.type === SourceType.UNIQUE
          ? context.index instanceof PrimaryKey
          : !!context.field && table.isPrimaryKeyField(context.field);
      case Expression.PROPERTY_REPEATED:
        const commonField = table.indexedFields.get(
          context.field?.getNormalizedName(),
        );
        return commonField
          ? commonField.fields.indexOf(context.field) > 0
          : false;
      case Expression.PROPERTY_NULL:
        return !!context.field && !context.field.isNotNull();
      case Expression.PROPERTY_NUMBER:
        return context.field?.getType().isNumeric();
      case Expression.PROPERTY_OPTIONAL:
        return (
          !!context.field &&
          (!context.field.isNotNull() || !!context.field.getValue())
        );
      case Expression.PROPERTY_REQUIRED:
        return !!context.field && context.field.isNotNull();
      case Expression.PROPERTY_UNSIGNED:
        return !!context.field && context.field.isUnsigned();
      case Expression.PROPERTY_DEFAULT:
        return !!context.field && !!context.field.getValue();
      case Expression.PROPERTY_INFO:
        return asTable()
          ? table.is(CommentedNode.Attribute.INFORMATION)
          : !!context.field?.is(CommentedNode.Attribute.INFORMATION);
      case Expression.PROPERTY_DEPENDS:
        const parentTable =
          context.tableStack[Math.min(1, context.tableStack.length - 1)];
        return asTable()
          ? table.getForeignKeys(parentTable.name).length > 0
          : table
              .getForeignKeys(parentTable.name)
              .some((item) => item.exists(context.field?.name || ''));
      case Expression.PROPERTY_DESCRIPTOR:
        return !!context.field && table.getDescriptor() === context.field;
      case Expression.PROPERTY_SEARCHABLE:
        return (
          !!context.field &&
          context.field.is(CommentedNode.Attribute.DESCRIPTOR)
        );
      case Expression.PROPERTY_INDEX:
        return asTable() ? table.indexes.length > 0 : !!getSelectedIndex();
      case Expression.PROPERTY_CONSTRAINT:
        const hasPrimaryKey = table.getPrimaryKey() != null;
        return (
          (table.constraints.length > 1 && hasPrimaryKey) ||
          (table.constraints.length > 0 && !hasPrimaryKey)
        );
      case Expression.PROPERTY_FOREIGN:
        return asTable()
          ? table.getForeignKeys().length > 0
          : !!context.field && !!table.findForeignKey(context.field.name);
      case Expression.PROPERTY_UNIQUE:
        return asTable()
          ? table.getUniqueKeys(true).length > 0
          : !!context.field && !!table.isUnique(context.field);
      case Expression.PROPERTY_UNPLURALIZABLE:
        return !isPluralizable();
      case Expression.PROPERTY_PLURALIZABLE:
        return isPluralizable();
      case Expression.PROPERTY_FULLTEXT:
        const selectedIndex = getSelectedIndex();
        return !!selectedIndex && selectedIndex instanceof FulltextIndex;
      case Expression.PROPERTY_RADIO:
        return (
          !!context.field && context.field.is(CommentedNode.Attribute.RADIO)
        );
      case Expression.PROPERTY_IGNORED:
        return (
          !!context.field && context.field.is(CommentedNode.Attribute.HIDDEN)
        );
      case Expression.PROPERTY_MASKED:
        return (
          !!context.field && context.field.is(CommentedNode.Attribute.MASK)
        );
      case Expression.PROPERTY_PASSWORD:
        return (
          !!context.field && context.field.is(CommentedNode.Attribute.PASSWORD)
        );
      case Expression.PROPERTY_ARRAY:
        return table.indexedFields.has(context.field?.getNormalizedName());
      case Expression.PROPERTY_IMAGE:
        return (
          !!context.field && context.field.is(CommentedNode.Attribute.IMAGE)
        );
      case Expression.PROPERTY_OPTION:
        return (
          context.field?.getType().getType() === DataType.ENUM &&
          !context.field.getType().isBoolean()
        );
      case Expression.PROPERTY_FEW_FIELDS:
        return asIndex()
          ? getSelectedIndex()?.getFields().length < 4
          : context.field?.getType().getType() != DataType.ENUM ||
              (context.field.getType() as EnumType).getElements().length < 4;
      case Expression.PROPERTY_MANY:
        return asIndex()
          ? getSelectedIndex()?.getFields().length >= 2
          : context.field?.getType().getType() != DataType.ENUM ||
              (context.field.getType() as EnumType).getElements().length >= 2;
      case Expression.PROPERTY_SINGLE:
        return asIndex()
          ? getSelectedIndex()?.getFields().length == 1
          : context.field?.getType().getType() != DataType.ENUM ||
              (context.field.getType() as EnumType).getElements().length == 1;
      case Expression.PROPERTY_FIRST:
        return context.position === 0;
      case Expression.PROPERTY_NON_FIRST:
        return context.position > 0;
      case Expression.TYPE_INTEGER:
        return context.field?.getType().getType() === DataType.INTEGER;
      case Expression.TYPE_TINYINT:
        return context.field?.getType().getType() === DataType.TINYINT;
      case Expression.TYPE_BIGINT:
        return context.field?.getType().getType() === DataType.BIGINT;
      case Expression.TYPE_STRING:
        return context.field?.getType().getType() === DataType.STRING;
      case Expression.TYPE_CHAR:
        return context.field?.getType().getType() === DataType.CHAR;
      case Expression.TYPE_TEXT:
        return context.field?.getType().getType() === DataType.TEXT;
      case Expression.TYPE_BOOLEAN:
        return context.field?.getType().isBoolean();
      case Expression.TYPE_CURRENCY:
        return context.field?.getType().getType() === DataType.DECIMAL;
      case Expression.TYPE_DOUBLE:
        return context.field?.getType().getType() === DataType.DOUBLE;
      case Expression.TYPE_FLOAT:
        return context.field?.getType().getType() === DataType.FLOAT;
      case Expression.TYPE_DATE:
        return context.field?.getType().getType() === DataType.DATE;
      case Expression.TYPE_JSON:
        return context.field?.getType().getType() === DataType.JSON;
      case Expression.TYPE_DATETIME:
        return context.field?.getType().getType() === DataType.DATETIME;
      case Expression.TYPE_TIMESTAMP:
        return context.field?.getType().getType() === DataType.TIMESTAMP;
      case Expression.TYPE_TIME:
        return context.field?.getType().getType() === DataType.TIME;
      case Expression.TYPE_ENUM:
        return (
          context.field?.getType().getType() === DataType.ENUM &&
          (!context.config.legacy || !context.field?.getType().isBoolean())
        );
      case Expression.TYPE_BLOB:
        return context.field?.getType().getType() === DataType.BLOB;
    }
    return false;
  }
}
