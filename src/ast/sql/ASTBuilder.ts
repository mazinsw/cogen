import fs from "fs";
import { SQLLexer } from '../../../src/grammar/SQLLexer';
import { SQLParser } from '../../../src/grammar/SQLParser';
import { SQLParserListener } from '../../../src/grammar/SQLParserListener';
import { AutoIncrementContext } from '../../../src/grammar/SQLParser';
import { CharsetNameContext } from '../../../src/grammar/SQLParser';
import { CollateNameContext } from '../../../src/grammar/SQLParser';
import { ColumnDefaultValueContext } from '../../../src/grammar/SQLParser';
import { ColumnNameContext } from '../../../src/grammar/SQLParser';
import { ColumnNotNullContext } from '../../../src/grammar/SQLParser';
import { ColumnNullContext } from '../../../src/grammar/SQLParser';
import { ConstraintNameContext } from '../../../src/grammar/SQLParser';
import { ConstraintTableContext } from '../../../src/grammar/SQLParser';
import { CreateSchemaContext } from '../../../src/grammar/SQLParser';
import { CreateTableContext } from '../../../src/grammar/SQLParser';
import { DefaultValueContext } from '../../../src/grammar/SQLParser';
import { DropSchemaContext } from '../../../src/grammar/SQLParser';
import { DropTableNameContext } from '../../../src/grammar/SQLParser';
import { FieldCommentContext } from '../../../src/grammar/SQLParser';
import { FieldStmtContext } from '../../../src/grammar/SQLParser';
import { ForeignStmtContext } from '../../../src/grammar/SQLParser';
import { IdNameContext } from '../../../src/grammar/SQLParser';
import { IndexColNameContext } from '../../../src/grammar/SQLParser';
import { IndexStmtContext } from '../../../src/grammar/SQLParser';
import { PrimaryKeyStmtContext } from '../../../src/grammar/SQLParser';
import { ReferenceDefinitionContext } from '../../../src/grammar/SQLParser';
import { ReferenceDeleteOptionContext } from '../../../src/grammar/SQLParser';
import { ReferenceTableContext } from '../../../src/grammar/SQLParser';
import { ReferenceUpdateOptionContext } from '../../../src/grammar/SQLParser';
import { SetDefaultValueContext } from '../../../src/grammar/SQLParser';
import { StringItemContext } from '../../../src/grammar/SQLParser';
import { TableCommentContext } from '../../../src/grammar/SQLParser';
import { TableNameContext } from '../../../src/grammar/SQLParser';
import { TypeBigIntStmtContext } from '../../../src/grammar/SQLParser';
import { TypeBlobStmtContext } from '../../../src/grammar/SQLParser';
import { TypeBooleanStmtContext } from '../../../src/grammar/SQLParser';
import { TypeCharStmtContext } from '../../../src/grammar/SQLParser';
import { TypeDateStmtContext } from '../../../src/grammar/SQLParser';
import { TypeDateTimeStmtContext } from '../../../src/grammar/SQLParser';
import { TypeDecimalStmtContext } from '../../../src/grammar/SQLParser';
import { TypeDoubleStmtContext } from '../../../src/grammar/SQLParser';
import { TypeEnumStmtContext } from '../../../src/grammar/SQLParser';
import { TypeFloatStmtContext } from '../../../src/grammar/SQLParser';
import { TypeIntStmtContext } from '../../../src/grammar/SQLParser';
import { TypeIntegerStmtContext } from '../../../src/grammar/SQLParser';
import { TypeJsonStmtContext } from '../../../src/grammar/SQLParser';
import { TypeLongBlobStmtContext } from '../../../src/grammar/SQLParser';
import { TypeLongTextStmtContext } from '../../../src/grammar/SQLParser';
import { TypeMediumBlobStmtContext } from '../../../src/grammar/SQLParser';
import { TypeMediumTextStmtContext } from '../../../src/grammar/SQLParser';
import { TypeNumericStmtContext } from '../../../src/grammar/SQLParser';
import { TypeTextStmtContext } from '../../../src/grammar/SQLParser';
import { TypeTimeStmtContext } from '../../../src/grammar/SQLParser';
import { TypeTinyBlobStmtContext } from '../../../src/grammar/SQLParser';
import { TypeTinyIntStmtContext } from '../../../src/grammar/SQLParser';
import { TypeTinyTextStmtContext } from '../../../src/grammar/SQLParser';
import { TypeVarCharStmtContext } from '../../../src/grammar/SQLParser';
import { UniqueStmtContext } from '../../../src/grammar/SQLParser';
import { UseStmtContext } from '../../../src/grammar/SQLParser';
import { Stack } from '../../data/struct/stack';
import { CharStream, CharStreams, CommonTokenStream, Token } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { ListErrorListener } from "./ListErrorListener";

export class ASTBuilder implements SQLParserListener {
  private stack: Stack<Node>;
  private script: ScriptNode;
  private errors: string[];

  constructor () {
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

  public build(fileName: string): boolean {
    let chars: CharStream;
    try {
      chars = CharStreams.fromString(fs.readFileSync(fileName, "utf-8"));
    } catch (e: any) {
      this.errors.push("can't load SQL source file");
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
    const table = new Table("[Undefined]");
    this.stack.push(table);
  }

  public exitTableName(_: TableNameContext): void {
    const node = this.stack.pop() as NamedNode; // pop Name
    const table = this.stack.peek() as Table;
    table.setName(node.getName());
  }

  public exitCreateTable(_: CreateTableContext): void {
    this.script.addStatement(stack.pop());
  }

  public enterFieldStmt(_: FieldStmtContext): void {
    const field = new Field("");
    const table = this.stack.peek() as Table;
    table.addField(field);
    this.stack.push(field);
  }

  public exitColumnName(_: ColumnNameContext): void {
    NamedNode node = this.stack.pop(); // pop Nam as NamedNodee
    const field = this.stack.peek() as Field;
    field.setName(node.getName());
  }

  public enterTypeIntegerStmt(_: TypeIntegerStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.INTEGER);
    field.setType(type);
  }

  public enterTypeIntStmt(_: TypeIntStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.INTEGER);
    field.setType(type);
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
    type.setLength(Long.valueOf(ctx.INT().getText()));
    field.setType(type);
  }

  public enterTypeBigIntStmt(_: TypeBigIntStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.BIGINT);
    field.setType(type);
  }

  public enterTypeJsonStmt(_: TypeJsonStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new StringType(DataType.JSON);
    type.setLength(4294967295L);
    field.setType(type);
  }

  public enterTypeTinyIntStmt(_: TypeTinyIntStmtContext): void {
    const field = this.stack.peek() as Field;
    const type = new DataType(DataType.TINYINT);
    field.setType(type);
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
    type.setLength(4294967295L);
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
    if (ctx.STRING() != null)
      value = new StringValue(ctx.STRING().getText());
    else if (ctx.INT() != null)
      value = new IntegerValue(ctx.INT().getText());
    else if (ctx.FLOAT() != null)
      value = new FloatValue(ctx.FLOAT().getText());
    else if (ctx.BOOL() != null)
      value = new BooleanValue(ctx.BOOL().getText());
    this.stack.push(value);
  }

  public exitColumnDefaultValue(_: ColumnDefaultValueContext): void {
    const value = stack.pop() as Value;
    const field = this.stack.peek() as Field;
    field.setValue(value);
  }

  public exitSetDefaultValue(_: SetDefaultValueContext): void {
    this.stack.pop();
  }

  public exitStringItem(ctx: StringItemContext): void {
    const field = this.stack.peek() as Field;
    const type = (EnumType) field.getType();
    String elem = ctx.STRING().getText();
    elem = elem.substring(1, elem.length() - 1);
    type.addElement(elem);
  }

  public exitFieldStmt(_: FieldStmtContext): void {
    this.stack.pop();
  }

  public enterPrimaryKeyStmt(_: PrimaryKeyStmtContext): void {
    PrimaryKey pk = new PrimaryKey();
    pk.setName("PRIMARY");
    const table = this.stack.peek() as Table;
    table.addConstraint(pk);
    this.stack.push(pk);
  }

  public exitPrimaryKeyStmt(_: PrimaryKeyStmtContext): void {
    this.stack.pop();
  }

  public enterIndexStmt(_: IndexStmtContext): void {
    Index index = new Index();
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
    field.setComment(ParseComment.parse(ctx.STRING().getText()));
  }

  public exitIndexStmt(_: IndexStmtContext): void {
    this.stack.pop();
  }

  public enterUniqueStmt(_: UniqueStmtContext): void {
    UniqueKey uk = new UniqueKey();
    const table = this.stack.peek() as Table;
    table.addConstraint(uk);
    this.stack.push(uk);
  }

  public exitUniqueStmt(_: UniqueStmtContext): void {
    this.stack.pop();
  }

  public enterForeignStmt(_: ForeignStmtContext): void {
    ForeignKey fk = new ForeignKey("[Unknow]");
    const table = this.stack.peek() as Table;
    table.addConstraint(fk);
    this.stack.push(fk);
  }

  public exitForeignStmt(_: ForeignStmtContext): void {
    this.stack.pop();
  }

  public enterReferenceDefinition(_: ReferenceDefinitionContext): void {
    ForeignKey fk = (ForeignKey) this.stack.peek();
    this.stack.push(fk.getReferences());
  }

  public exitReferenceDefinition(_: ReferenceDefinitionContext): void {
    this.stack.pop();
  }

  public enterReferenceUpdateOption(ctx: ReferenceUpdateOptionContext): void {
    Index index = (Index) this.stack.pop();
    ForeignKey fk = (ForeignKey) this.stack.peek();
    fk.setUpdateAction(ctx.getText());
    this.stack.push(index);
  }

  public enterReferenceDeleteOption(ctx: ReferenceDeleteOptionContext): void {
    Index index = (Index) this.stack.pop();
    ForeignKey fk = (ForeignKey) this.stack.peek();
    fk.setDeleteAction(ctx.getText());
    this.stack.push(index);
  }

  public exitCreateSchema(_: CreateSchemaContext): void {
    this.discard(this.stack.pop()); // pop Name
  }

  public enterTableComment(ctx: TableCommentContext): void {
    const table = this.stack.peek() as Table;
    table.setComment(ParseComment.parse(ctx.STRING().getText()));
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
    NamedNode namedNode = this.stack.pop() as NamedNode;
    Index index = (Index) this.stack.peek();
    index.setName(namedNode.getName());
  }

  public exitConstraintTable(_: ConstraintTableContext): void {
    NamedNode namedNode = this.stack.pop() as NamedNode;
    Index index = (Index) this.stack.peek();
    index.setName(namedNode.getName());
  }

  public exitIndexColName(ctx: IndexColNameContext): void {
    NamedNode namedNode = this.stack.pop() as NamedNode;
    Index index = (Index) this.stack.peek();
    int type = OrderField.ASCENDENT;
    if (ctx.Type != null && ctx.Type.getText().equals("DESC"))
      type = OrderField.DESCENDENT;
    index.addField(new OrderField(namedNode.getName(), type));
  }

  public exitReferenceTable(_: ReferenceTableContext): void {
    NamedNode namedNode = this.stack.pop() as NamedNode;
    Index index = (Index) this.stack.pop();
    ForeignKey fk = (ForeignKey) this.stack.peek();
    fk.setTableName(namedNode.getName());
    this.stack.push(index);
  }

  private discard(node: Node): void {
//		System.out.print("Discarding: " + node.getClass().getName());
//		if (node instanceof NamedNode)
//			System.out.println(" = " + ((NamedNode) node).getName());
//		else
//			System.out.println();
  }

  public enterIdName(ctx: IdNameContext): void {
    if (ctx.ID() != null) {
      String name = ctx.ID().getText();
      this.stack.push(new NamedNode(name.substring(1, name.length() - 1)));
    } else {
      this.stack.push(new NamedNode(ctx.NAME().getText()));

    }
  }
}
