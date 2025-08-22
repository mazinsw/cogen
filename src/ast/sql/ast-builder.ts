import * as fs from 'fs';
import { SQLLexer } from '../../grammar/SQLLexer';
import {
  FulltextStmtContext,
  SQLParser,
  TypeTimeStampStmtContext,
} from '../../grammar/SQLParser';
import { SQLParserListener } from '../../grammar/SQLParserListener';
import { AutoIncrementContext } from '../../grammar/SQLParser';
import { CharsetNameContext } from '../../grammar/SQLParser';
import { CollateNameContext } from '../../grammar/SQLParser';
import { ColumnDefaultValueContext } from '../../grammar/SQLParser';
import { ColumnNameContext } from '../../grammar/SQLParser';
import { ColumnNotNullContext } from '../../grammar/SQLParser';
import { ColumnNullContext } from '../../grammar/SQLParser';
import { ConstraintNameContext } from '../../grammar/SQLParser';
import { ConstraintTableContext } from '../../grammar/SQLParser';
import { CreateSchemaContext } from '../../grammar/SQLParser';
import { CreateTableContext } from '../../grammar/SQLParser';
import { DefaultValueContext } from '../../grammar/SQLParser';
import { DropSchemaContext } from '../../grammar/SQLParser';
import { DropTableNameContext } from '../../grammar/SQLParser';
import { FieldCommentContext } from '../../grammar/SQLParser';
import { FieldStmtContext } from '../../grammar/SQLParser';
import { ForeignStmtContext } from '../../grammar/SQLParser';
import { IdNameContext } from '../../grammar/SQLParser';
import { IndexColNameContext } from '../../grammar/SQLParser';
import { IndexStmtContext } from '../../grammar/SQLParser';
import { PrimaryKeyStmtContext } from '../../grammar/SQLParser';
import { ReferenceDefinitionContext } from '../../grammar/SQLParser';
import { ReferenceDeleteOptionContext } from '../../grammar/SQLParser';
import { ReferenceTableContext } from '../../grammar/SQLParser';
import { ReferenceUpdateOptionContext } from '../../grammar/SQLParser';
import { SetDefaultValueContext } from '../../grammar/SQLParser';
import { StringItemContext } from '../../grammar/SQLParser';
import { TableCommentContext } from '../../grammar/SQLParser';
import { TableNameContext } from '../../grammar/SQLParser';
import { TypeBigIntStmtContext } from '../../grammar/SQLParser';
import { TypeBlobStmtContext } from '../../grammar/SQLParser';
import { TypeBooleanStmtContext } from '../../grammar/SQLParser';
import { TypeCharStmtContext } from '../../grammar/SQLParser';
import { TypeDateStmtContext } from '../../grammar/SQLParser';
import { TypeDateTimeStmtContext } from '../../grammar/SQLParser';
import { TypeDecimalStmtContext } from '../../grammar/SQLParser';
import { TypeDoubleStmtContext } from '../../grammar/SQLParser';
import { TypeEnumStmtContext } from '../../grammar/SQLParser';
import { TypeFloatStmtContext } from '../../grammar/SQLParser';
import { TypeIntStmtContext } from '../../grammar/SQLParser';
import { TypeIntegerStmtContext } from '../../grammar/SQLParser';
import { TypeJsonStmtContext } from '../../grammar/SQLParser';
import { TypeLongBlobStmtContext } from '../../grammar/SQLParser';
import { TypeLongTextStmtContext } from '../../grammar/SQLParser';
import { TypeMediumBlobStmtContext } from '../../grammar/SQLParser';
import { TypeMediumTextStmtContext } from '../../grammar/SQLParser';
import { TypeNumericStmtContext } from '../../grammar/SQLParser';
import { TypeTextStmtContext } from '../../grammar/SQLParser';
import { TypeTimeStmtContext } from '../../grammar/SQLParser';
import { TypeTinyBlobStmtContext } from '../../grammar/SQLParser';
import { TypeTinyIntStmtContext } from '../../grammar/SQLParser';
import { TypeTinyTextStmtContext } from '../../grammar/SQLParser';
import { TypeVarCharStmtContext } from '../../grammar/SQLParser';
import { UniqueStmtContext } from '../../grammar/SQLParser';
import { UseStmtContext } from '../../grammar/SQLParser';
import { Stack } from '../../data/struct/stack';
import { CharStream, CharStreams, CommonTokenStream, Token } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { ListErrorListener } from './list-error-listener';
import { ScriptNode } from '@/ast/model/script-node';
import { Node } from '@/ast/model/node';
import { NamedNode } from '@/ast/model/named-node';
import { Field } from '@/ast/model/field';
import { DataType } from '@/ast/model/data-type';
import { Value } from '@/ast/model/value';
import { Table } from '@/ast/model/table';
import { StringType } from '@/ast/model/string-type';
import { EnumType } from '@/ast/model/enum-type';
import { StringValue } from '@/ast/model/string-value';
import { IntegerValue } from '@/ast/model/integer-value';
import { FloatValue } from '@/ast/model/float-value';
import { BooleanValue } from '@/ast/model/boolean-value';
import { PrimaryKey } from '@/ast/model/primary-key';
import { Index } from '@/ast/model';
import { Comment } from '@/util/comment';
import { UniqueKey } from '@/ast/model/unique-key';
import { ForeignKey } from '@/ast/model/foreign-key';
import { OrderField } from '@/ast/model/order-field';
import { LiteralValue } from '@/ast/model/literal-value';
import { FulltextIndex } from '@/ast/model/fulltext-index';

export class ASTBuilder implements SQLParserListener {
  private stack: Stack<Node>;
  private script: ScriptNode;
  private errors: string[];

  constructor() {
    this.script = new ScriptNode();
    this.errors = [];
    this.stack = new Stack<Node>();
  }

  public getScript(): ScriptNode {
    return this.script;
  }

  public getErrors(): string[] {
    return this.errors;
  }

  public async build(fileName: string): Promise<boolean> {
    let chars: CharStream;
    try {
      chars = CharStreams.fromString(
        await fs.promises.readFile(fileName, 'utf-8'),
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
    this.script.addStatement(this.stack.pop());
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
