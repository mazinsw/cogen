import { Block } from '@/ast/entity/block';
import { CommentEach } from '@/ast/entity/comment-each';
import { Condition, Expression, Operator } from '@/ast/entity/condition';
import { ConditionBlock } from '@/ast/entity/condition-block';
import { Constant } from '@/ast/entity/constant';
import { ConstraintConstant } from '@/ast/entity/constraint-constant';
import { ConstraintEach } from '@/ast/entity/constraint-each';
import { DescriptorConstant } from '@/ast/entity/descriptor-constant';
import { FieldConstant } from '@/ast/entity/field-constant';
import { FieldEach } from '@/ast/entity/field-each';
import { ForeignConstant } from '@/ast/entity/foreign-constant';
import { ForeignEach } from '@/ast/entity/foreign-each';
import { ImageConstant } from '@/ast/entity/image-constant';
import { IndexConstant } from '@/ast/entity/index-constant';
import { IndexEach } from '@/ast/entity/index-each';
import { InheritedConstant } from '@/ast/entity/inherited-constant';
import { Node } from '@/ast/entity/node';
import { OptionConstant } from '@/ast/entity/option-constant';
import { OptionEach } from '@/ast/entity/option-each';
import { PrimaryConstant } from '@/ast/entity/primary-constant';
import { PrimaryEach } from '@/ast/entity/primary-each';
import { ReferenceConstant } from '@/ast/entity/reference-constant';
import { ReferenceEach } from '@/ast/entity/reference-each';
import { ReplaceCommand } from '@/ast/entity/replace-command';
import { StringValue } from '@/ast/entity/string-value';
import { TableConstant } from '@/ast/entity/table-constant';
import { TableEach } from '@/ast/entity/table-each';
import { TemplateSource } from '@/ast/entity/templace-source';
import { UniqueConstant } from '@/ast/entity/unique-constant';
import { UniqueEach } from '@/ast/entity/unique-each';
import { ListErrorListener } from '@/ast/list-error-listener';
import { Stack } from '@/data/struct/stack';
import { TemplateLexer } from '@/grammar/TemplateLexer';
import {
  AndConditionContext,
  CommentEachStmtContext,
  ConstraintEachStmtContext,
  ConstraintLevelContext,
  ConstraintStmtContext,
  EachConditionContext,
  ExpressionContext,
  FieldEachStmtContext,
  FieldLevelContext,
  FieldStmtContext,
  ForeignEachStmtContext,
  IndexEachStmtContext,
  OptionEachStmtContext,
  OrConditionContext,
  PrimaryEachStmtContext,
  PriorityConditionContext,
  ReferenceEachStmtContext,
  RegexContext,
  ReplaceStmtContext,
  TableEachStmtContext,
  TableLevelContext,
  TableStmtContext,
  TemplateContext,
  TemplateParser,
  TextContentContext,
  UniqueEachStmtContext,
} from '@/grammar/TemplateParser';
import { TemplateParserListener } from '@/grammar/TemplateParserListener';
import { CharStream, CharStreams, CommonTokenStream, Token } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import * as fs from 'fs';

export class ASTBuilder implements TemplateParserListener {
  private stack: Stack<Node>;
  private errors: string[];

  constructor(private templateSource: TemplateSource) {
    this.errors = [];
    this.stack = new Stack<Node>();
  }

  public getErrors(): string[] {
    return this.errors;
  }

  public async build(
    fileName: string,
    pathAsContent: boolean,
  ): Promise<boolean> {
    let chars: CharStream;
    try {
      chars = CharStreams.fromString(
        pathAsContent
          ? fileName
          : await fs.promises.readFile(fileName, this.templateSource.encoding),
      );
    } catch (error) {
      this.errors.push(error.message);
      return false;
    }
    const lexer = new TemplateLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const lexerErrorListener = new ListErrorListener<number>();
    lexer.removeErrorListeners();
    lexer.addErrorListener(lexerErrorListener);
    this.errors.unshift(...lexerErrorListener.getNotificationList());
    if (this.errors.length > 0) {
      return false;
    }
    const parser = new TemplateParser(tokens);
    parser.removeErrorListeners();
    const parserErrorListener = new ListErrorListener<Token>();
    parser.addErrorListener(parserErrorListener);
    const tree = parser.template();
    this.errors.unshift(...parserErrorListener.getNotificationList());
    if (this.errors.length > 0) {
      return false;
    }
    ParseTreeWalker.DEFAULT.walk<TemplateParserListener>(this, tree);
    return true;
  }

  makeTableConstantFromLevel(ctx: TableLevelContext): Constant {
    switch (true) {
      case !!ctx.K_TABLE():
        return new TableConstant(ctx.K_TABLE().text);
      case !!ctx.K_REFERENCE():
        return new ReferenceConstant(ctx.K_REFERENCE().text);
      default: // K_INHERITED
        return new InheritedConstant(ctx.K_INHERITED().text);
    }
  }

  makeFieldConstantFromLevel(ctx: FieldLevelContext): Constant {
    switch (true) {
      case !!ctx.K_FIELD():
        return new FieldConstant(ctx.K_FIELD().text);
      case !!ctx.K_DESCRIPTOR():
        return new DescriptorConstant(ctx.K_DESCRIPTOR().text);
      case !!ctx.K_OPTION():
        return new OptionConstant(ctx.K_OPTION().text);
      default: // K_IMAGE
        return new ImageConstant(ctx.K_IMAGE().text);
    }
  }

  makeConstraintConstantFromLevel(ctx: ConstraintLevelContext): Constant {
    switch (true) {
      case !!ctx.K_CONSTRAINT():
        return new ConstraintConstant(ctx.K_CONSTRAINT().text);
      case !!ctx.K_INDEX():
        return new IndexConstant(ctx.K_INDEX().text);
      case !!ctx.K_UNIQUE():
        return new UniqueConstant(ctx.K_UNIQUE().text);
      case !!ctx.K_PRIMARY():
        return new PrimaryConstant(ctx.K_PRIMARY().text);
      default: // K_FOREIGN
        return new ForeignConstant(ctx.K_FOREIGN().text);
    }
  }

  enterTemplate(_: TemplateContext) {
    this.stack.push(this.templateSource);
  }

  exitTemplate(_: TemplateContext) {
    this.stack.pop();
  }

  exitTextContent(ctx: TextContentContext) {
    const block = this.stack.peek() as Block;
    block.addStatement(new StringValue(ctx.text));
  }

  exitTableStmt(ctx: TableStmtContext) {
    const block = this.stack.peek() as Block;
    const constant = this.makeTableConstantFromLevel(ctx.tableLevel());
    ctx.tableProps().forEach((prop) => {
      switch (true) {
        case !!prop.tableProp().K_UNIX():
          constant.addProperty(Constant.Property.UNIX);
          break;
        case !!prop.tableProp().K_PLURAL():
          constant.addProperty(Constant.Property.PLURAL);
          break;
        case !!prop.tableProp().K_NORM():
          constant.addProperty(Constant.Property.NORMALIZED);
          break;
        case !!prop.tableProp().K_DEFAULT():
          constant.addProperty(Constant.Property.DEFAULT);
          break;
        case !!prop.tableProp().K_NAME():
          constant.addProperty(Constant.Property.NAME);
          break;
        case !!prop.tableProp().K_COMMENT():
          constant.addProperty(Constant.Property.COMMENT);
          break;
        case !!prop.tableProp().K_GENDER():
          constant.addProperty(Constant.Property.GENDER);
          break;
        case !!prop.tableProp().K_CHARS():
          constant.addProperty(Constant.Property.CHARS);
          break;
        case !!prop.tableProp().K_LETTER():
          constant.addProperty(Constant.Property.LETTER);
          break;
        case !!prop.tableProp().K_PACKAGE():
          constant.addProperty(Constant.Property.PACKAGE);
          break;
        case !!prop.tableProp().K_INHERITED():
          constant.addProperty(Constant.Property.INHERITED);
          break;
        case !!prop.tableProp().K_PATH():
          constant.addProperty(Constant.Property.PATH);
          break;
        case !!prop.tableProp().K_STYLE():
          constant.addProperty(Constant.Property.STYLE);
          break;
        case !!prop.tableProp().K_EXTRA():
          constant.addProperty(Constant.Property.EXTRA);
          break;
      }
    });
    block.addStatement(constant);
  }

  exitFieldStmt(ctx: FieldStmtContext) {
    const block = this.stack.peek() as Block;
    const constant = this.makeFieldConstantFromLevel(ctx.fieldLevel());
    ctx.fieldProps().forEach((prop) => {
      switch (true) {
        case !!prop.fieldProp().K_UNIX():
          constant.addProperty(Constant.Property.UNIX);
          break;
        case !!prop.fieldProp().K_NAME():
          constant.addProperty(Constant.Property.NAME);
          break;
        case !!prop.fieldProp().K_NORM():
          constant.addProperty(Constant.Property.NORMALIZED);
          break;
        case !!prop.fieldProp().K_SINGULAR():
          constant.addProperty(Constant.Property.SINGULAR);
          break;
        case !!prop.fieldProp().K_INFO():
          constant.addProperty(Constant.Property.INFORMATION);
          break;
        case !!prop.fieldProp().K_COMMENT():
          constant.addProperty(Constant.Property.COMMENT);
          break;
        case !!prop.fieldProp().K_MASK():
          constant.addProperty(Constant.Property.MASK);
          break;
        case !!prop.fieldProp().K_STYLE():
          constant.addProperty(Constant.Property.STYLE);
          break;
        case !!prop.fieldProp().K_GENDER():
          constant.addProperty(Constant.Property.GENDER);
          break;
        case !!prop.fieldProp().K_CHARS():
          constant.addProperty(Constant.Property.CHARS);
          break;
        case !!prop.fieldProp().K_LETTER():
          constant.addProperty(Constant.Property.LETTER);
          break;
        case !!prop.fieldProp().K_ARRAY():
          constant.addProperty(Constant.Property.ARRAY);
          break;
        case !!prop.fieldProp().K_COUNT():
          constant.addProperty(Constant.Property.COUNT);
          break;
        case !!prop.fieldProp().K_INDEX():
          constant.addProperty(Constant.Property.INDEX);
          break;
        case !!prop.fieldProp().K_NUMBER():
          constant.addProperty(Constant.Property.NUMBER);
          break;
        case !!prop.fieldProp().K_SIZE():
          constant.addProperty(Constant.Property.SIZE);
          break;
        case !!prop.fieldProp().K_LENGTH():
          constant.addProperty(Constant.Property.LENGTH);
          break;
        case !!prop.fieldProp().K_OPTION():
          constant.addProperty(Constant.Property.OPTION);
          break;
        case !!prop.fieldProp().K_IMAGE():
          constant.addProperty(Constant.Property.IMAGE);
          break;
        case !!prop.fieldProp().K_LOW():
          constant.addProperty(Constant.Property.LOW);
          break;
        case !!prop.fieldProp().K_HIGH():
          constant.addProperty(Constant.Property.HIGH);
          break;
        case !!prop.fieldProp().K_WIDTH():
          constant.addProperty(Constant.Property.WIDTH);
          break;
        case !!prop.fieldProp().K_HEIGHT():
          constant.addProperty(Constant.Property.HEIGHT);
          break;
        case !!prop.fieldProp().K_FOLDER():
          constant.addProperty(Constant.Property.FOLDER);
          break;
        case !!prop.fieldProp().K_DEFAULT():
          constant.addProperty(Constant.Property.DEFAULT);
          break;
        case !!prop.fieldProp().K_ON():
          constant.addProperty(Constant.Property.ON);
          break;
        case !!prop.fieldProp().K_DELETE():
          constant.addProperty(Constant.Property.DELETE);
          break;
        case !!prop.fieldProp().K_UPDATE():
          constant.addProperty(Constant.Property.UPDATE);
          break;
        case !!prop.fieldProp().K_INSERT():
          constant.addProperty(Constant.Property.INSERT);
          break;
        case !!prop.fieldProp().K_NOID():
          constant.addProperty(Constant.Property.NO_ID);
          break;
      }
    });
    block.addStatement(constant);
  }

  exitConstraintStmt(ctx: ConstraintStmtContext) {
    const block = this.stack.peek() as Block;
    const constant = this.makeConstraintConstantFromLevel(
      ctx.constraintLevel(),
    );
    constant.addProperty(Constant.Property.NAME);
    block.addStatement(constant);
  }

  exitReplaceStmt(ctx: ReplaceStmtContext) {
    const block = this.stack.peek() as Block;
    let constant: Constant;
    if (ctx.allLevels().tableLevel()) {
      constant = this.makeTableConstantFromLevel(ctx.allLevels().tableLevel());
    }
    if (ctx.allLevels().fieldLevel()) {
      constant = this.makeFieldConstantFromLevel(ctx.allLevels().fieldLevel());
    }
    if (ctx.allLevels().constraintLevel()) {
      constant = this.makeConstraintConstantFromLevel(
        ctx.allLevels().constraintLevel(),
      );
    }
    const command = new ReplaceCommand(
      constant,
      ctx.regex(0).text,
      ctx.tryGetRuleContext(1, RegexContext)?.text,
    );
    block.addStatement(command);
  }

  enterTableEachStmt(_: TableEachStmtContext) {
    const block = this.stack.peek() as Block;
    const loop = new TableEach();
    block.addStatement(loop);
    this.stack.push(loop);
  }

  exitTableEachStmt(_: TableEachStmtContext) {
    this.stack.pop();
  }

  enterFieldEachStmt(_: FieldEachStmtContext) {
    const block = this.stack.peek() as Block;
    const loop = new FieldEach();
    block.addStatement(loop);
    this.stack.push(loop);
  }

  exitFieldEachStmt(_: FieldEachStmtContext) {
    this.stack.pop();
  }

  enterConstraintEachStmt(_: ConstraintEachStmtContext) {
    const block = this.stack.peek() as Block;
    const loop = new ConstraintEach();
    block.addStatement(loop);
    this.stack.push(loop);
  }

  exitConstraintEachStmt(_: ConstraintEachStmtContext) {
    this.stack.pop();
  }

  enterIndexEachStmt(_: IndexEachStmtContext) {
    const block = this.stack.peek() as Block;
    const loop = new IndexEach();
    block.addStatement(loop);
    this.stack.push(loop);
  }

  exitIndexEachStmt(_: IndexEachStmtContext) {
    this.stack.pop();
  }

  enterUniqueEachStmt(_: UniqueEachStmtContext) {
    const block = this.stack.peek() as Block;
    const loop = new UniqueEach();
    block.addStatement(loop);
    this.stack.push(loop);
  }

  exitUniqueEachStmt(_: UniqueEachStmtContext) {
    this.stack.pop();
  }

  enterPrimaryEachStmt(_: PrimaryEachStmtContext) {
    const block = this.stack.peek() as Block;
    const loop = new PrimaryEach();
    block.addStatement(loop);
    this.stack.push(loop);
  }

  exitPrimaryEachStmt(_: PrimaryEachStmtContext) {
    this.stack.pop();
  }

  enterForeignEachStmt(_: ForeignEachStmtContext) {
    const block = this.stack.peek() as Block;
    const loop = new ForeignEach();
    block.addStatement(loop);
    this.stack.push(loop);
  }

  exitForeignEachStmt(_: ForeignEachStmtContext) {
    this.stack.pop();
  }

  enterReferenceEachStmt(_: ReferenceEachStmtContext) {
    const block = this.stack.peek() as Block;
    const loop = new ReferenceEach();
    block.addStatement(loop);
    this.stack.push(loop);
  }

  exitReferenceEachStmt(_: ReferenceEachStmtContext) {
    this.stack.pop();
  }

  enterOptionEachStmt(_: OptionEachStmtContext) {
    const block = this.stack.peek() as Block;
    const loop = new OptionEach();
    block.addStatement(loop);
    this.stack.push(loop);
  }

  exitOptionEachStmt(_: OptionEachStmtContext) {
    this.stack.pop();
  }

  enterCommentEachStmt(_: CommentEachStmtContext) {
    const block = this.stack.peek() as Block;
    const loop = new CommentEach();
    block.addStatement(loop);
    this.stack.push(loop);
  }

  exitCommentEachStmt(_: CommentEachStmtContext) {
    this.stack.pop();
  }

  enterEachCondition(_: EachConditionContext) {
    const conditionBlock = this.stack.peek() as ConditionBlock;
    const condition = new Condition();
    conditionBlock.condition = condition;
    this.stack.push(condition);
  }

  exitEachCondition(_: EachConditionContext) {
    this.stack.pop();
  }

  enterPriorityCondition(_: PriorityConditionContext) {
    const condition = this.stack.peek() as Condition;
    const priorityCondition = new Condition();
    condition.left = priorityCondition;
    this.stack.push(priorityCondition);
  }

  exitPriorityCondition(_: PriorityConditionContext) {
    this.stack.pop();
  }

  enterAndCondition(_: AndConditionContext) {
    const condition = this.stack.peek() as Condition;
    condition.operator = Operator.AND;
    const andCondition = new Condition();
    condition.right = andCondition;
    this.stack.push(andCondition);
  }

  exitAndCondition(_: AndConditionContext) {
    this.stack.pop();
  }

  enterOrCondition(_: OrConditionContext) {
    const condition = this.stack.peek() as Condition;
    condition.operator = Operator.OR;
    const orCondition = new Condition();
    condition.right = orCondition;
    this.stack.push(orCondition);
  }

  exitOrCondition(_: OrConditionContext) {
    this.stack.pop();
  }

  enterExpression(ctx: ExpressionContext) {
    const condition = this.stack.peek() as Condition;
    const attribute = ctx.attribute();
    if (attribute) {
      switch (true) {
        case !!attribute.K_COMMENT():
          return (condition.expression = Expression.ATTRIBUTE_COMMENT);
        case !!attribute.K_INHERITED():
          return (condition.expression = Expression.ATTRIBUTE_INHERITED);
        case !!attribute.K_PACKAGE():
          return (condition.expression = Expression.ATTRIBUTE_PACKAGE);
        default: // K_PATH
          return (condition.expression = Expression.ATTRIBUTE_PATH);
      }
    }
    const property = ctx.property();
    if (property) {
      switch (true) {
        case !!property.K_ALL():
          return (condition.expression = Expression.PROPERTY_ALL);
        case !!property.K_REFERENCE():
          return (condition.expression = Expression.PROPERTY_REFERENCE);
        case !!property.K_PRIMARY():
          return (condition.expression = Expression.PROPERTY_PRIMARY);
        case !!property.K_REPEATED():
          return (condition.expression = Expression.PROPERTY_REPEATED);
        case !!property.K_NULL():
          return (condition.expression = Expression.PROPERTY_NULL);
        case !!property.K_OPTIONAL():
          return (condition.expression = Expression.PROPERTY_OPTIONAL);
        case !!property.K_REQUIRED():
        case !!property.K_NOT_NULL():
        case !!property.K_NON_NULL():
          return (condition.expression = Expression.PROPERTY_REQUIRED);
        case !!property.K_UNSIGNED():
          return (condition.expression = Expression.PROPERTY_UNSIGNED);
        case !!property.K_DEFAULT():
          return (condition.expression = Expression.PROPERTY_DEFAULT);
        case !!property.K_INFO():
          return (condition.expression = Expression.PROPERTY_INFO);
        case !!property.K_DESCRIPTOR():
          return (condition.expression = Expression.PROPERTY_DESCRIPTOR);
        case !!property.K_SEARCHABLE():
          return (condition.expression = Expression.PROPERTY_SEARCHABLE);
        case !!property.K_DESCRIPTION():
          return (condition.expression = Expression.ATTRIBUTE_COMMENT);
        case !!property.K_INDEX():
          return (condition.expression = Expression.PROPERTY_INDEX);
        case !!property.K_CONSTRAINT():
          return (condition.expression = Expression.PROPERTY_CONSTRAINT);
        case !!property.K_FOREIGN():
          return (condition.expression = Expression.PROPERTY_FOREIGN);
        case !!property.K_UNIQUE():
          return (condition.expression = Expression.PROPERTY_UNIQUE);
        case !!property.K_FULLTEXT():
          return (condition.expression = Expression.PROPERTY_FULLTEXT);
        case !!property.K_RADIO():
          return (condition.expression = Expression.PROPERTY_RADIO);
        case !!property.K_MASKED():
          return (condition.expression = Expression.PROPERTY_MASKED);
        case !!property.K_PASSWORD():
          return (condition.expression = Expression.PROPERTY_PASSWORD);
        case !!property.K_ARRAY():
          return (condition.expression = Expression.PROPERTY_ARRAY);
        case !!property.K_IMAGE():
          return (condition.expression = Expression.PROPERTY_IMAGE);
        case !!property.K_OPTION():
          return (condition.expression = Expression.PROPERTY_OPTION);
        case !!property.K_FEW_FIELDS():
          return (condition.expression = Expression.PROPERTY_FEW_FIELDS);
        case !!property.K_MANY():
          return (condition.expression = Expression.PROPERTY_MANY);
        case !!property.K_SINGLE():
          return (condition.expression = Expression.PROPERTY_SINGLE);
        case !!property.K_FIRST():
          return (condition.expression = Expression.PROPERTY_FIRST);
        default: // K_NON_FIRST
          return (condition.expression = Expression.PROPERTY_NON_FIRST);
      }
    }

    const type = ctx.type()!;
    switch (true) {
      case !!type.K_INTEGER():
        return (condition.expression = Expression.TYPE_INTEGER);
      case !!type.K_TINYINT():
        return (condition.expression = Expression.TYPE_TINYINT);
      case !!type.K_BIGINT():
        return (condition.expression = Expression.TYPE_BIGINT);
      case !!type.K_STRING():
        return (condition.expression = Expression.TYPE_STRING);
      case !!type.K_CHAR():
        return (condition.expression = Expression.TYPE_CHAR);
      case !!type.K_TEXT():
        return (condition.expression = Expression.TYPE_TEXT);
      case !!type.K_BOOLEAN():
        return (condition.expression = Expression.TYPE_BOOLEAN);
      case !!type.K_CURRENCY():
        return (condition.expression = Expression.TYPE_CURRENCY);
      case !!type.K_DOUBLE():
        return (condition.expression = Expression.TYPE_DOUBLE);
      case !!type.K_FLOAT():
        return (condition.expression = Expression.TYPE_FLOAT);
      case !!type.K_DATE():
        return (condition.expression = Expression.TYPE_DATE);
      case !!type.K_JSON():
        return (condition.expression = Expression.TYPE_JSON);
      case !!type.K_DATETIME():
        return (condition.expression = Expression.TYPE_DATETIME);
      case !!type.K_TIMESTAMP():
        return (condition.expression = Expression.TYPE_TIMESTAMP);
      case !!type.K_TIME():
        return (condition.expression = Expression.TYPE_TIME);
      case !!type.K_ENUM():
        return (condition.expression = Expression.TYPE_ENUM);
      default: // K_BLOB
        return (condition.expression = Expression.TYPE_BLOB);
    }
  }
}
