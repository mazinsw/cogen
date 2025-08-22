import { Index } from '@/ast/entity';
import { BooleanValue } from '@/ast/entity/boolean-value';
import { DataSource } from '@/ast/entity/data-source';
import { DataType } from '@/ast/entity/data-type';
import { EnumType } from '@/ast/entity/enum-type';
import { Field } from '@/ast/entity/field';
import { FloatValue } from '@/ast/entity/float-value';
import { ForeignKey } from '@/ast/entity/foreign-key';
import { FulltextIndex } from '@/ast/entity/fulltext-index';
import { IntegerValue } from '@/ast/entity/integer-value';
import { LiteralValue } from '@/ast/entity/literal-value';
import { NamedNode } from '@/ast/entity/named-node';
import { Node } from '@/ast/entity/node';
import { OrderField } from '@/ast/entity/order-field';
import { PrimaryKey } from '@/ast/entity/primary-key';
import { StringType } from '@/ast/entity/string-type';
import { StringValue } from '@/ast/entity/string-value';
import { Table } from '@/ast/entity/table';
import { UniqueKey } from '@/ast/entity/unique-key';
import { Value } from '@/ast/entity/value';
import { ListErrorListener } from '@/ast/list-error-listener';
import { Stack } from '@/data/struct/stack';
import { SQLLexer } from '@/grammar/SQLLexer';
import {
  AutoIncrementContext,
  CharsetNameContext,
  CollateNameContext,
  ColumnDefaultValueContext,
  ColumnNameContext,
  ColumnNotNullContext,
  ColumnNullContext,
  ConstraintNameContext,
  ConstraintTableContext,
  CreateSchemaContext,
  CreateTableContext,
  DefaultValueContext,
  DropSchemaContext,
  DropTableNameContext,
  FieldCommentContext,
  FieldStmtContext,
  ForeignStmtContext,
  FulltextStmtContext,
  IdNameContext,
  IndexColNameContext,
  IndexStmtContext,
  PrimaryKeyStmtContext,
  ReferenceDefinitionContext,
  ReferenceDeleteOptionContext,
  ReferenceTableContext,
  ReferenceUpdateOptionContext,
  SetDefaultValueContext,
  SQLParser,
  StringItemContext,
  TableCommentContext,
  TableNameContext,
  TypeBigIntStmtContext,
  TypeBlobStmtContext,
  TypeBooleanStmtContext,
  TypeCharStmtContext,
  TypeDateStmtContext,
  TypeDateTimeStmtContext,
  TypeDecimalStmtContext,
  TypeDoubleStmtContext,
  TypeEnumStmtContext,
  TypeFloatStmtContext,
  TypeIntegerStmtContext,
  TypeIntStmtContext,
  TypeJsonStmtContext,
  TypeLongBlobStmtContext,
  TypeLongTextStmtContext,
  TypeMediumBlobStmtContext,
  TypeMediumTextStmtContext,
  TypeNumericStmtContext,
  TypeTextStmtContext,
  TypeTimeStampStmtContext,
  TypeTimeStmtContext,
  TypeTinyBlobStmtContext,
  TypeTinyIntStmtContext,
  TypeTinyTextStmtContext,
  TypeVarCharStmtContext,
  UniqueStmtContext,
  UseStmtContext,
} from '@/grammar/SQLParser';
import { SQLParserListener } from '@/grammar/SQLParserListener';
import { Comment } from '@/util/comment';
import { CharStream, CharStreams, CommonTokenStream, Token } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import * as fs from 'fs';

export class ASTBuilder implements SQLParserListener {
  private stack: Stack<Node>;
  private errors: string[];

  constructor(private dataSource: DataSource) {
    this.errors = [];
    this.stack = new Stack<Node>();
  }

  public getErrors(): string[] {
    return this.errors;
  }

  public async build(fileName: string): Promise<boolean> {
    let chars: CharStream;
    try {
      chars = CharStreams.fromString(
        await fs.promises.readFile(fileName, this.dataSource.encoding),
      );
    } catch (error) {
      this.errors.push(error.message);
      return false;
    }
    const lexer = new SQLLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const lexerErrorListener = new ListErrorListener<number>();
    lexer.removeErrorListeners();
    lexer.addErrorListener(lexerErrorListener);
    this.errors.unshift(...lexerErrorListener.getNotificationList());
    if (this.errors.length > 0) {
      return false;
    }
    const parser = new SQLParser(tokens);
    parser.removeErrorListeners();
    const parserErrorListener = new ListErrorListener<Token>();
    parser.addErrorListener(parserErrorListener);
    const tree = parser.script();
    this.errors.unshift(...parserErrorListener.getNotificationList());
    if (this.errors.length > 0) {
      return false;
    }
    ParseTreeWalker.DEFAULT.walk<SQLParserListener>(this, tree);
    return true;
  }

  public enterCreateTable(_: CreateTableContext): void {
    const table = new Table('[Undefined]');
    this.stack.push(table);
  }

  public exitTableName(_: TableNameContext): void {
    const node = this.stack.pop() as NamedNode; // pop Name
    const table = this.stack.peek() as Table;
    table.setName(node.getName());
  }

  public exitCreateTable(_: CreateTableContext): void {
    this.dataSource.addStatement(this.stack.pop());
  }

  public enterFieldStmt(_: FieldStmtContext): void {
    const field = new Field('');
    const table = this.stack.peek() as Table;
    table.addField(field);
    this.stack.push(field);
  }

  public exitColumnName(_: ColumnNameContext): void {
    const node = this.stack.pop() as NamedNode;
    const field = this.stack.peek() as Field;
    field.setName(node.getName());
  }

  public enterTypeIntegerStmt(ctx: TypeIntegerStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.INTEGER);
    field.setType(type);
    field.setUnsigned(ctx.K_UNSIGNED() != null);
  }

  public enterTypeIntStmt(ctx: TypeIntStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.INTEGER);
    field.setType(type);
    field.setUnsigned(ctx.K_UNSIGNED() != null);
  }

  public enterTypeDoubleStmt(_: TypeDoubleStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.DOUBLE);
    field.setType(type);
  }

  public enterTypeMediumBlobStmt(_: TypeMediumBlobStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.BLOB);
    field.setType(type);
  }

  public enterTypeBlobStmt(_: TypeBlobStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.BLOB);
    field.setType(type);
  }

  public enterTypeLongBlobStmt(_: TypeLongBlobStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.BLOB);
    field.setType(type);
  }

  public enterTypeTinyBlobStmt(_: TypeTinyBlobStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.BLOB);
    field.setType(type);
  }

  public enterTypeFloatStmt(_: TypeFloatStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.FLOAT);
    field.setType(type);
  }

  public enterTypeDecimalStmt(_: TypeDecimalStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.DECIMAL);
    field.setType(type);
  }

  public enterTypeNumericStmt(_: TypeNumericStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.DECIMAL);
    field.setType(type);
  }

  public enterTypeDateTimeStmt(_: TypeDateTimeStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.DATETIME);
    field.setType(type);
  }

  public enterTypeTimeStampStmt(_: TypeTimeStampStmtContext) {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.TIMESTAMP);
    field.setType(type);
  }

  public enterTypeBooleanStmt(_: TypeBooleanStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.BOOLEAN);
    field.setType(type);
  }

  public enterTypeDateStmt(_: TypeDateStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.DATE);
    field.setType(type);
  }

  public enterTypeTimeStmt(_: TypeTimeStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.TIME);
    field.setType(type);
  }

  public enterTypeVarCharStmt(ctx: TypeVarCharStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new StringType(DataType.STRING);
    type.setLength(Number(ctx.INT().text));
    field.setType(type);
  }

  public enterTypeBigIntStmt(ctx: TypeBigIntStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.BIGINT);
    field.setType(type);
    field.setUnsigned(ctx.K_UNSIGNED() != null);
  }

  public enterTypeJsonStmt(_: TypeJsonStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new StringType(DataType.JSON);
    type.setLength(4294967295);
    field.setType(type);
  }

  public enterTypeTinyIntStmt(ctx: TypeTinyIntStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.TINYINT);
    field.setType(type);
    field.setUnsigned(ctx.K_UNSIGNED() != null);
  }

  public enterTypeTextStmt(_: TypeTextStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new StringType(DataType.TEXT);
    type.setLength(65535);
    field.setType(type);
  }

  public enterTypeLongTextStmt(_: TypeLongTextStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new StringType(DataType.TEXT);
    type.setLength(4294967295);
    field.setType(type);
  }

  public enterTypeMediumTextStmt(_: TypeMediumTextStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new StringType(DataType.TEXT);
    type.setLength(16777215);
    field.setType(type);
  }

  public enterTypeTinyTextStmt(_: TypeTinyTextStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new StringType(DataType.TEXT);
    type.setLength(255);
    field.setType(type);
  }

  public enterTypeCharStmt(_: TypeCharStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.CHAR);
    field.setType(type);
  }

  public enterTypeEnumStmt(_: TypeEnumStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new EnumType(DataType.ENUM);
    field.setType(type);
  }

  public enterColumnNotNull(_: ColumnNotNullContext): void {
    const field = this.stack.peek() as Field;
    field.setNotNull(true);
  }

  public enterColumnNull(_: ColumnNullContext): void {
    const field = this.stack.peek() as Field;
    field.setNotNull(false);
  }

  public enterDefaultValue(ctx: DefaultValueContext): void {
    let value: Value = null;
    if (ctx.STRING() != null) value = new StringValue(ctx.STRING().text);
    else if (ctx.INT() != null) value = new IntegerValue(ctx.INT().text);
    else if (ctx.FLOAT() != null) value = new FloatValue(ctx.FLOAT().text);
    else if (ctx.BOOL() != null)
      value = BooleanValue.fromString(ctx.BOOL().text);
    else if (ctx.K_CURRENT_TIMESTAMP() != null)
      value = new LiteralValue(ctx.K_CURRENT_TIMESTAMP().text);
    else if (ctx.K_NULL() != null) value = new StringValue('null');
    this.stack.push(value);
  }

  public exitColumnDefaultValue(_: ColumnDefaultValueContext): void {
    const value = this.stack.pop() as Value;
    const field = this.stack.peek() as Field;
    field.setValue(value);
  }

  public exitSetDefaultValue(_: SetDefaultValueContext): void {
    this.stack.pop();
  }

  public exitStringItem(ctx: StringItemContext): void {
    const field = this.stack.peek() as Field;
    const type = field.getType() as EnumType;
    let elem = ctx.STRING().text;
    elem = elem.substring(1, elem.length - 1);
    type.addElement(elem);
  }

  public exitFieldStmt(_: FieldStmtContext): void {
    this.stack.pop();
  }

  public enterPrimaryKeyStmt(_: PrimaryKeyStmtContext): void {
    const pk = new PrimaryKey();
    pk.setName('PRIMARY');
    const table = this.stack.peek() as Table;
    table.addConstraint(pk);
    this.stack.push(pk);
  }

  public exitPrimaryKeyStmt(_: PrimaryKeyStmtContext): void {
    this.stack.pop();
  }

  public enterIndexStmt(_: IndexStmtContext): void {
    const index = new Index();
    const table = this.stack.peek() as Table;
    table.addIndex(index);
    this.stack.push(index);
  }

  public enterAutoIncrement(_: AutoIncrementContext): void {
    const field = this.stack.peek() as Field;
    field.setAutoIncrement(true);
  }

  public enterFieldComment(ctx: FieldCommentContext): void {
    const field = this.stack.peek() as Field;
    field.setComment(Comment.parse(ctx.STRING().text));
  }

  public exitIndexStmt(_: IndexStmtContext): void {
    this.stack.pop();
  }

  public enterFulltextStmt(_: FulltextStmtContext) {
    const fi = new FulltextIndex();
    const table = this.stack.peek() as Table;
    table.addIndex(fi);
    this.stack.push(fi);
  }

  public exitFulltextStmt(_: FulltextStmtContext) {
    this.stack.pop();
  }

  public enterUniqueStmt(_: UniqueStmtContext): void {
    const uk = new UniqueKey();
    const table = this.stack.peek() as Table;
    table.addConstraint(uk);
    this.stack.push(uk);
  }

  public exitUniqueStmt(_: UniqueStmtContext): void {
    this.stack.pop();
  }

  public enterForeignStmt(_: ForeignStmtContext): void {
    const fk = new ForeignKey('[Unknow]');
    const table = this.stack.peek() as Table;
    table.addConstraint(fk);
    this.stack.push(fk);
  }

  public exitForeignStmt(_: ForeignStmtContext): void {
    this.stack.pop();
  }

  public enterReferenceDefinition(_: ReferenceDefinitionContext): void {
    const fk = this.stack.peek() as ForeignKey;
    this.stack.push(fk.getReferences());
  }

  public exitReferenceDefinition(_: ReferenceDefinitionContext): void {
    this.stack.pop();
  }

  public enterReferenceUpdateOption(ctx: ReferenceUpdateOptionContext): void {
    const index = this.stack.pop() as Index;
    const fk = this.stack.peek() as ForeignKey;
    fk.setUpdateActionFromString(ctx.text);
    this.stack.push(index);
  }

  public enterReferenceDeleteOption(ctx: ReferenceDeleteOptionContext): void {
    const index = this.stack.pop() as Index;
    const fk = this.stack.peek() as ForeignKey;
    fk.setDeleteActionFromString(ctx.text);
    this.stack.push(index);
  }

  public exitCreateSchema(_: CreateSchemaContext): void {
    this.discard(this.stack.pop()); // pop Name
  }

  public enterTableComment(ctx: TableCommentContext): void {
    const table = this.stack.peek() as Table;
    table.setComment(Comment.parse(ctx.STRING().text));
  }

  public exitUseStmt(_: UseStmtContext): void {
    this.discard(this.stack.pop()); // pop Name
  }

  public exitDropSchema(_: DropSchemaContext): void {
    this.discard(this.stack.pop()); // pop Name
  }

  public exitDropTableName(_: DropTableNameContext): void {
    this.discard(this.stack.pop()); // pop Name
  }

  public exitCharsetName(_: CharsetNameContext): void {
    this.discard(this.stack.pop()); // pop Name
  }

  public exitCollateName(_: CollateNameContext): void {
    this.discard(this.stack.pop()); // pop Name
  }

  public exitConstraintName(_: ConstraintNameContext): void {
    const namedNode = this.stack.pop() as NamedNode;
    const index = this.stack.peek() as Index;
    index.setName(namedNode.getName());
  }

  public exitConstraintTable(_: ConstraintTableContext): void {
    const namedNode = this.stack.pop() as NamedNode;
    const index = this.stack.peek() as Index;
    index.setName(namedNode.getName());
  }

  public exitIndexColName(ctx: IndexColNameContext): void {
    const namedNode = this.stack.pop() as NamedNode;
    const index = this.stack.peek() as Index;
    let type = OrderField.ASCENDENT;
    if (ctx.K_DESC) type = OrderField.DESCENDENT;
    index.addField(new OrderField(namedNode.getName(), type));
  }

  public exitReferenceTable(_: ReferenceTableContext): void {
    const namedNode = this.stack.pop() as NamedNode;
    const index = this.stack.pop() as Index;
    const fk = this.stack.peek() as ForeignKey;
    fk.setTableName(namedNode.getName());
    this.stack.push(index);
  }

  private discard(_node: Node): void {
    // process.stdout.write('Discarding: ' + _node.constructor.name);
    // if (_node instanceof NamedNode) process.stdout.write(' = ' + _node.getName());
    // else console.log();
  }

  public enterIdName(ctx: IdNameContext): void {
    if (ctx.ID() != null) {
      const name = ctx.ID().text;
      this.stack.push(new NamedNode(name.substring(1, name.length - 1)));
    } else {
      this.stack.push(new NamedNode(ctx.NAME().text));
    }
  }
}
