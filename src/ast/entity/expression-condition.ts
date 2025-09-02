import { CommentedNode } from '@/ast/entity/commented-node';
import { Condition } from '@/ast/entity/condition';
import { DataType } from '@/ast/entity/data-type';
import { EnumType } from '@/ast/entity/enum-type';
import { FulltextIndex } from '@/ast/entity/fulltext-index';
import { PrimaryKey } from '@/ast/entity/primary-key';
import { SourceContext, SourceType } from '@/ast/entity/source';

export enum Expression {
  ATTRIBUTE_COMMENT,
  ATTRIBUTE_DESCRIPTION,
  ATTRIBUTE_INHERITED,
  ATTRIBUTE_PACKAGE,
  ATTRIBUTE_PATH,

  PROPERTY_ALL,
  PROPERTY_REFERENCE,
  PROPERTY_PRIMARY,
  PROPERTY_REPEATED,
  PROPERTY_NULL,
  PROPERTY_OPTIONAL,
  PROPERTY_REQUIRED,
  PROPERTY_UNSIGNED,
  PROPERTY_DEFAULT,
  PROPERTY_INFO,
  PROPERTY_DESCRIPTOR,
  PROPERTY_SEARCHABLE,
  PROPERTY_INDEX,
  PROPERTY_CONSTRAINT,
  PROPERTY_FOREIGN,
  PROPERTY_UNIQUE,
  PROPERTY_FULLTEXT,
  PROPERTY_RADIO,
  PROPERTY_MASKED,
  PROPERTY_PASSWORD,
  PROPERTY_ARRAY,
  PROPERTY_IMAGE,
  PROPERTY_OPTION,
  PROPERTY_FEW_FIELDS,
  PROPERTY_MANY,
  PROPERTY_SINGLE,
  PROPERTY_FIRST,
  PROPERTY_NON_FIRST,

  TYPE_INTEGER,
  TYPE_TINYINT,
  TYPE_BIGINT,
  TYPE_STRING,
  TYPE_CHAR,
  TYPE_TEXT,
  TYPE_BOOLEAN,
  TYPE_CURRENCY,
  TYPE_DOUBLE,
  TYPE_FLOAT,
  TYPE_DATE,
  TYPE_JSON,
  TYPE_DATETIME,
  TYPE_TIMESTAMP,
  TYPE_TIME,
  TYPE_ENUM,
  TYPE_BLOB,
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
  ) {
    super();
  }

  public check(context: SourceContext): boolean {
    const leftOk =
      this.expression === undefined
        ? !this.left || this.left.check(context)
        : this.test(context);
    if (this.operator === Operator.OR && leftOk) {
      return true;
    }
    if (this.operator === Operator.OR) {
      return !this.right || this.right.check(context);
    }
    // and short circuit
    if (!leftOk) {
      return false;
    }
    return !this.right || this.right.check(context);
  }

  public test(context: SourceContext): boolean {
    const getSelectedIndex = () =>
      context.index ||
      (!!context.field &&
        ((context.type === SourceType.FOREIGN &&
          context.table.findForeignKey(context.field.name)) ||
          (context.type === SourceType.CONSTRAINT &&
            context.table.findConstraint(context.field.name)) ||
          (context.type === SourceType.INDEX &&
            context.table.findIndex(context.field)) ||
          (context.type === SourceType.PRIMARY &&
            context.table.getPrimaryKey()) ||
          context.table.getUniqueIndex(context.field)));

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

    const asComment = () => SourceType.COMMENT === context.type;
    const asOption = () => SourceType.OPTION === context.type;

    switch (this.expression) {
      case Expression.ATTRIBUTE_COMMENT:
      case Expression.ATTRIBUTE_DESCRIPTION:
        return asTable()
          ? !!context.table.parsedComment
          : !!context.field?.parsedComment;
      case Expression.ATTRIBUTE_INHERITED:
        return context.table.is(CommentedNode.Attribute.INHERITED);
      case Expression.ATTRIBUTE_PACKAGE:
        return context.table.is(CommentedNode.Attribute.PACKAGE);
      case Expression.ATTRIBUTE_PATH:
        return (
          context.table.getAttributes(CommentedNode.Attribute.PACKAGE).length >=
          2
        );

      case Expression.PROPERTY_ALL:
        return true;
      case Expression.PROPERTY_REFERENCE:
        return (
          !!context.field && !!context.table.findForeignKey(context.field.name)
        );
      case Expression.PROPERTY_PRIMARY:
        return context.type === SourceType.UNIQUE
          ? context.table.constraints[context.position.index] instanceof
              PrimaryKey
          : !!context.field && context.table.isPrimaryKeyField(context.field);
      case Expression.PROPERTY_REPEATED:
        return false;
      case Expression.PROPERTY_NULL:
        return !!context.field && !context.field.isNotNull();
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
          ? context.table.is(CommentedNode.Attribute.INFORMATION)
          : !!context.field?.is(CommentedNode.Attribute.INFORMATION);
      case Expression.PROPERTY_DESCRIPTOR:
        return (
          context.field?.is(CommentedNode.Attribute.INFORMATION) &&
          !context.field?.getAttribute(CommentedNode.Attribute.INFORMATION)
        );
      case Expression.PROPERTY_SEARCHABLE:
        return context.field?.is(CommentedNode.Attribute.INFORMATION);
      case Expression.PROPERTY_INDEX:
        return asTable()
          ? context.table.indexes.length > 0
          : !!getSelectedIndex();
      case Expression.PROPERTY_CONSTRAINT:
        const hasPrimaryKey = context.table.getPrimaryKey() != null;
        return (
          (context.table.constraints.length > 1 && hasPrimaryKey) ||
          (context.table.constraints.length > 0 && !hasPrimaryKey)
        );
      case Expression.PROPERTY_FOREIGN:
        return asTable()
          ? context.table.getForeignKeys().length > 0
          : !!context.field &&
              !!context.table.findForeignKey(context.field.name);
      case Expression.PROPERTY_UNIQUE:
        return asTable()
          ? context.table.getUniqueKeys(true).length > 0
          : !!context.field && !!context.table.isUnique(context.field);
      case Expression.PROPERTY_FULLTEXT:
        const selectedIndex = getSelectedIndex();
        return !!selectedIndex && selectedIndex instanceof FulltextIndex;
      case Expression.PROPERTY_RADIO:
        return (
          !!context.field && context.field.is(CommentedNode.Attribute.RADIO)
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
        return false;
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
        return asTable()
          ? context.position.table === 0
          : asComment()
            ? context.position.comment === 0
            : asOption()
              ? context.position.option === 0
              : context.position.field === 0;
      case Expression.PROPERTY_NON_FIRST:
        return asTable()
          ? context.position.table > 0
          : asComment()
            ? context.position.comment > 0
            : asOption()
              ? context.position.option > 0
              : context.position.field > 0;

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
        return context.field?.getType().getType() === DataType.ENUM;
      case Expression.TYPE_BLOB:
        return context.field?.getType().getType() === DataType.BLOB;
    }
    return false;
  }
}
