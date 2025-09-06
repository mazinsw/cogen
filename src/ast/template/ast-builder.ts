import { Block } from '@/ast/entity/block';
import { CommentEach } from '@/ast/entity/comment-each';
import { ConditionBlock } from '@/ast/entity/condition-block';
import { Constant } from '@/ast/entity/constant';
import { ConstraintConditionBlock } from '@/ast/entity/constraint-condition-block';
import { ConstraintConstant } from '@/ast/entity/constraint-constant';
import { ConstraintEach } from '@/ast/entity/constraint-each';
import { DescriptionEach } from '@/ast/entity/description-each';
import { DescriptorConditionBlock } from '@/ast/entity/descriptor-condition-block';
import { DescriptorConstant } from '@/ast/entity/descriptor-constant';
import {
  Expression,
  ExpressionCondition,
  Operator,
} from '@/ast/entity/expression-condition';
import { FieldConditionBlock } from '@/ast/entity/field-condition-block';
import { FieldConstant } from '@/ast/entity/field-constant';
import { FieldContainsCondition } from '@/ast/entity/field-contains-condition';
import { FieldEach } from '@/ast/entity/field-each';
import { FieldMatchCondition } from '@/ast/entity/field-match-condition';
import { ForeignConditionBlock } from '@/ast/entity/foreign-condition-block';
import { ForeignConstant } from '@/ast/entity/foreign-constant';
import { ForeignEach } from '@/ast/entity/foreign-each';
import { ImageConstant } from '@/ast/entity/image-constant';
import { IndexConditionBlock } from '@/ast/entity/index-condition-block';
import { IndexConstant } from '@/ast/entity/index-constant';
import { IndexEach } from '@/ast/entity/index-each';
import { InheritedConditionBlock } from '@/ast/entity/inherited-condition-block';
import { InheritedConstant } from '@/ast/entity/inherited-constant';
import { InheritedEach } from '@/ast/entity/inherited-each';
import { Node } from '@/ast/entity/node';
import { OptionConstant } from '@/ast/entity/option-constant';
import { OptionEach } from '@/ast/entity/option-each';
import { PrimaryConditionBlock } from '@/ast/entity/primary-condition-block';
import { PrimaryConstant } from '@/ast/entity/primary-constant';
import { PrimaryEach } from '@/ast/entity/primary-each';
import { PrimaryKeyConstant } from '@/ast/entity/primary-key-constant';
import { ReferenceConditionBlock } from '@/ast/entity/reference-condition-block';
import { ReferenceConstant } from '@/ast/entity/reference-constant';
import { ReferenceEach } from '@/ast/entity/reference-each';
import { ReplaceCommand } from '@/ast/entity/replace-command';
import { StringValue } from '@/ast/entity/string-value';
import { TableConditionBlock } from '@/ast/entity/table-condition-block';
import { TableConstant } from '@/ast/entity/table-constant';
import { TableContainsCondition } from '@/ast/entity/table-contains-condition';
import { TableEach } from '@/ast/entity/table-each';
import { TableExistsCondition } from '@/ast/entity/table-exists-condition';
import { TableFindsCondition } from '@/ast/entity/table-finds-condition';
import { TableMatchCondition } from '@/ast/entity/table-match-condition';
import { TemplateSource } from '@/ast/entity/templace-source';
import { TestConditionBlock } from '@/ast/entity/test-condition-block';
import { UniqueConditionBlock } from '@/ast/entity/unique-condition-block';
import { UniqueConstant } from '@/ast/entity/unique-constant';
import { UniqueEach } from '@/ast/entity/unique-each';
import { ListErrorListener } from '@/ast/list-error-listener';
import { Stack } from '@/data/struct/stack';
import { TemplateLexer } from '@/grammar/TemplateLexer';
import {
  AndConditionContext,
  CommentEachStmtContext,
  ConstraintEachStmtContext,
  ConstraintElseEachStmtContext,
  ConstraintElseEndStmtContext,
  ConstraintElseIfStmtContext,
  ConstraintIfStmtContext,
  ConstraintLevelContext,
  ConstraintStmtContext,
  DescriptionEachStmtContext,
  DescriptorContainsStmtContext,
  DescriptorElseContainsStmtContext,
  DescriptorElseEndStmtContext,
  DescriptorElseIfStmtContext,
  DescriptorElseMatchStmtContext,
  DescriptorIfStmtContext,
  DescriptorMatchStmtContext,
  EachConditionContext,
  ExpressionContext,
  FieldContainsStmtContext,
  FieldEachStmtContext,
  FieldElseContainsStmtContext,
  FieldElseEachStmtContext,
  FieldElseEndStmtContext,
  FieldElseExistsStmtContext,
  FieldElseIfStmtContext,
  FieldElseMatchStmtContext,
  FieldElseReverseEachStmtContext,
  FieldExistsStmtContext,
  FieldIfStmtContext,
  FieldLevelContext,
  FieldMatchStmtContext,
  FieldReverseEachStmtContext,
  FieldStmtContext,
  ForeignEachStmtContext,
  ForeignElseEachStmtContext,
  ForeignElseEndStmtContext,
  ForeignElseIfStmtContext,
  ForeignIfStmtContext,
  IndexEachStmtContext,
  IndexElseEachStmtContext,
  IndexElseEndStmtContext,
  IndexElseIfStmtContext,
  IndexIfStmtContext,
  InheritedContainsStmtContext,
  InheritedEachStmtContext,
  InheritedElseContainsStmtContext,
  InheritedElseEachStmtContext,
  InheritedElseEndStmtContext,
  InheritedElseExistsStmtContext,
  InheritedElseFindsStmtContext,
  InheritedElseIfStmtContext,
  InheritedElseMatchStmtContext,
  InheritedExistsStmtContext,
  InheritedFindsStmtContext,
  InheritedIfStmtContext,
  InheritedMatchStmtContext,
  NegativeExpressionContext,
  NegativePriorityConditionContext,
  OptionEachStmtContext,
  OrConditionContext,
  PrimaryEachStmtContext,
  PrimaryElseEachStmtContext,
  PrimaryElseEndStmtContext,
  PrimaryElseIfStmtContext,
  PrimaryIfStmtContext,
  PriorityConditionContext,
  ReferenceContainsStmtContext,
  ReferenceEachStmtContext,
  ReferenceElseContainsStmtContext,
  ReferenceElseEachStmtContext,
  ReferenceElseEndStmtContext,
  ReferenceElseExistsStmtContext,
  ReferenceElseFindsStmtContext,
  ReferenceElseIfStmtContext,
  ReferenceElseMatchStmtContext,
  ReferenceElseReverseEachStmtContext,
  ReferenceExistsStmtContext,
  ReferenceFindsStmtContext,
  ReferenceIfStmtContext,
  ReferenceMatchStmtContext,
  ReferenceReverseEachStmtContext,
  RegexContext,
  ReplacePropContext,
  TableContainsStmtContext,
  TableEachStmtContext,
  TableElseContainsStmtContext,
  TableElseEachStmtContext,
  TableElseEndStmtContext,
  TableElseExistsStmtContext,
  TableElseFindsStmtContext,
  TableElseIfStmtContext,
  TableElseMatchStmtContext,
  TableExistsStmtContext,
  TableFindsStmtContext,
  TableIfStmtContext,
  TableLevelContext,
  TableMatchStmtContext,
  TableStmtContext,
  TemplateContext,
  TemplateParser,
  TestConditionContext,
  TextContentContext,
  UniqueEachStmtContext,
  UniqueElseEachStmtContext,
  UniqueElseEndStmtContext,
  UniqueElseIfStmtContext,
  UniqueIfStmtContext,
} from '@/grammar/TemplateParser';
import { TemplateParserListener } from '@/grammar/TemplateParserListener';
import { CharStream, CharStreams, CommonTokenStream, Token } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';

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
        pathAsContent ? fileName : await this.templateSource.readFile(fileName),
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
      case !!ctx.K_PRIMARY():
        return new PrimaryConstant(ctx.K_PRIMARY().text);
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
      case !!ctx.K_PRIMARY_KEY():
        return new PrimaryKeyConstant(ctx.K_PRIMARY_KEY().text);
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
    const text = ctx.text.replace(/^\r?\n/, '');
    const applyText =
      block.statements.length === 0 ||
      block.statements[block.statements.length - 1] instanceof Block
        ? text
        : ctx.text;
    if (applyText) {
      block.addStatement(new StringValue(applyText));
    }
  }

  exitTableStmt(ctx: TableStmtContext) {
    const block = this.stack.peek() as Block;
    const constant = this.makeTableConstantFromLevel(ctx.tableLevel());
    constant.parentLevel = ctx.DOT().length;
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
        case !!prop.tableProp().K_ORDER():
          constant.addProperty(Constant.Property.ORDER);
          break;
        case !!prop.tableProp().K_STYLE():
          constant.addProperty(Constant.Property.STYLE);
          break;
        case !!prop.tableProp().K_EXTRA():
          constant.addProperty(Constant.Property.EXTRA);
          break;
      }
    });
    block.addStatement(this.addReplaceStmt(constant, ctx.replaceProp()));
  }

  exitFieldStmt(ctx: FieldStmtContext) {
    const block = this.stack.peek() as Block;
    const constant = this.makeFieldConstantFromLevel(ctx.fieldLevel());
    constant.parentLevel = ctx.DOT().length;
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
    block.addStatement(this.addReplaceStmt(constant, ctx.replaceProp()));
  }

  exitConstraintStmt(ctx: ConstraintStmtContext) {
    const block = this.stack.peek() as Block;
    const constant = this.makeConstraintConstantFromLevel(
      ctx.constraintLevel(),
    );
    constant.parentLevel = ctx.DOT().length;
    constant.addProperty(Constant.Property.NAME);
    block.addStatement(this.addReplaceStmt(constant, ctx.replaceProp()));
  }

  addReplaceStmt(constant: Constant, ctx?: ReplacePropContext) {
    if (!ctx) {
      return constant;
    }
    return new ReplaceCommand(
      constant,
      ctx.regex(0).text,
      ctx.tryGetRuleContext(1, RegexContext)?.text,
    );
  }

  enterFieldIfStmt(ctx: FieldIfStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new FieldConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitFieldIfStmt(_: FieldIfStmtContext) {
    this.stack.pop();
  }

  enterFieldExistsStmt(ctx: FieldExistsStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new FieldConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableExistsCondition();
    conditionBlock.condition.inverted = !!ctx.NOT();
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitFieldExistsStmt(_: FieldExistsStmtContext) {
    this.stack.pop();
  }

  enterFieldMatchStmt(ctx: FieldMatchStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new FieldConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new FieldMatchCondition(ctx.regex().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitFieldMatchStmt(_: FieldMatchStmtContext) {
    this.stack.pop();
  }

  enterFieldContainsStmt(ctx: FieldContainsStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new FieldConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new FieldContainsCondition(ctx.word().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitFieldContainsStmt(_: FieldContainsStmtContext) {
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

  enterFieldReverseEachStmt(_: FieldReverseEachStmtContext) {
    const block = this.stack.peek() as Block;
    const loop = new FieldEach();
    loop.reverse = true;
    block.addStatement(loop);
    this.stack.push(loop);
  }

  exitFieldReverseEachStmt(_: FieldReverseEachStmtContext) {
    this.stack.pop();
  }

  enterFieldElseIfStmt(ctx: FieldElseIfStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new FieldConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterFieldElseExistsStmt(ctx: FieldElseExistsStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new FieldConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableExistsCondition();
    conditionBlock.condition.inverted = !!ctx.NOT();
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterFieldElseMatchStmt(ctx: FieldElseMatchStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new FieldConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new FieldMatchCondition(ctx.regex().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterFieldElseContainsStmt(ctx: FieldElseContainsStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new FieldConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new FieldContainsCondition(ctx.word().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterFieldElseEachStmt(_: FieldElseEachStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const loop = new FieldEach();
    testConditionBlock.elseCondition = loop;
    this.stack.push(loop);
  }

  enterFieldElseReverseEachStmt(_: FieldElseReverseEachStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const loop = new FieldEach();
    loop.reverse = true;
    testConditionBlock.elseCondition = loop;
    this.stack.push(loop);
  }

  enterFieldElseEndStmt(ctx: FieldElseEndStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new FieldConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 1;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterDescriptorIfStmt(ctx: DescriptorIfStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new DescriptorConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitDescriptorIfStmt(_: DescriptorIfStmtContext) {
    this.stack.pop();
  }

  enterDescriptorMatchStmt(ctx: DescriptorMatchStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new DescriptorConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new FieldMatchCondition(ctx.regex().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitDescriptorMatchStmt(_: DescriptorMatchStmtContext) {
    this.stack.pop();
  }

  enterDescriptorContainsStmt(ctx: DescriptorContainsStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new DescriptorConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new FieldContainsCondition(ctx.word().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitDescriptorContainsStmt(_: DescriptorContainsStmtContext) {
    this.stack.pop();
  }

  enterDescriptorElseIfStmt(ctx: DescriptorElseIfStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new DescriptorConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterDescriptorElseMatchStmt(ctx: DescriptorElseMatchStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new DescriptorConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new FieldMatchCondition(ctx.regex().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterDescriptorElseContainsStmt(ctx: DescriptorElseContainsStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new DescriptorConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new FieldContainsCondition(ctx.word().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterDescriptorElseEndStmt(ctx: DescriptorElseEndStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new DescriptorConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 1;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterReferenceIfStmt(ctx: ReferenceIfStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new ReferenceConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitReferenceIfStmt(_: ReferenceIfStmtContext) {
    this.stack.pop();
  }

  enterReferenceExistsStmt(ctx: ReferenceExistsStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new ReferenceConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableExistsCondition();
    conditionBlock.condition.inverted = !!ctx.NOT();
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitReferenceExistsStmt(_: ReferenceExistsStmtContext) {
    this.stack.pop();
  }

  enterReferenceFindsStmt(ctx: ReferenceFindsStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new ReferenceConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableFindsCondition(ctx.regex().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitReferenceFindsStmt(_: ReferenceFindsStmtContext) {
    this.stack.pop();
  }

  enterReferenceMatchStmt(ctx: ReferenceMatchStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new ReferenceConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableMatchCondition(ctx.regex().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitReferenceMatchStmt(_: ReferenceMatchStmtContext) {
    this.stack.pop();
  }

  enterReferenceContainsStmt(ctx: ReferenceContainsStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new ReferenceConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableContainsCondition(ctx.word().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitReferenceContainsStmt(_: ReferenceContainsStmtContext) {
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

  enterReferenceReverseEachStmt(_: ReferenceReverseEachStmtContext) {
    const block = this.stack.peek() as Block;
    const loop = new ReferenceEach();
    loop.reverse = true;
    block.addStatement(loop);
    this.stack.push(loop);
  }

  exitReferenceReverseEachStmt(_: ReferenceReverseEachStmtContext) {
    this.stack.pop();
  }

  enterReferenceElseIfStmt(ctx: ReferenceElseIfStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new ReferenceConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterReferenceElseExistsStmt(ctx: ReferenceElseExistsStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new ReferenceConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableExistsCondition();
    conditionBlock.condition.inverted = !!ctx.NOT();
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterReferenceElseFindsStmt(ctx: ReferenceElseFindsStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new ReferenceConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableFindsCondition(ctx.regex().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterReferenceElseMatchStmt(ctx: ReferenceElseMatchStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new ReferenceConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableMatchCondition(ctx.regex().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterReferenceElseContainsStmt(ctx: ReferenceElseContainsStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new ReferenceConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableContainsCondition(ctx.word().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterReferenceElseEachStmt(_: ReferenceElseEachStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const loop = new ReferenceEach();
    testConditionBlock.elseCondition = loop;
    this.stack.push(loop);
  }

  enterReferenceElseReverseEachStmt(_: ReferenceElseReverseEachStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const loop = new ReferenceEach();
    loop.reverse = true;
    testConditionBlock.elseCondition = loop;
    this.stack.push(loop);
  }

  enterReferenceElseEndStmt(ctx: ReferenceElseEndStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new ReferenceConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 1;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterTableIfStmt(ctx: TableIfStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new TableConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitTableIfStmt(_: TableIfStmtContext) {
    this.stack.pop();
  }

  enterTableExistsStmt(ctx: TableExistsStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new TableConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableExistsCondition();
    conditionBlock.condition.inverted = !!ctx.NOT();
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitTableExistsStmt(_: TableExistsStmtContext) {
    this.stack.pop();
  }

  enterTableFindsStmt(ctx: TableFindsStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new TableConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableFindsCondition(ctx.regex().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitTableFindsStmt(_: TableFindsStmtContext) {
    this.stack.pop();
  }

  enterTableMatchStmt(ctx: TableMatchStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new TableConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableMatchCondition(ctx.regex().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitTableMatchStmt(_: TableMatchStmtContext) {
    this.stack.pop();
  }

  enterTableContainsStmt(ctx: TableContainsStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new TableConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableContainsCondition(ctx.word().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitTableContainsStmt(_: TableContainsStmtContext) {
    this.stack.pop();
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

  enterTableElseIfStmt(ctx: TableElseIfStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new TableConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterTableElseExistsStmt(ctx: TableElseExistsStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new TableConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableExistsCondition();
    conditionBlock.condition.inverted = !!ctx.NOT();
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterTableElseFindsStmt(ctx: TableElseFindsStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new TableConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableFindsCondition(ctx.regex().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterTableElseMatchStmt(ctx: TableElseMatchStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new TableConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableMatchCondition(ctx.regex().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterTableElseContainsStmt(ctx: TableElseContainsStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new TableConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableContainsCondition(ctx.word().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterTableElseEachStmt(_: TableElseEachStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const loop = new TableEach();
    testConditionBlock.elseCondition = loop;
    this.stack.push(loop);
  }

  enterTableElseEndStmt(ctx: TableElseEndStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new TableConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 1;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterInheritedIfStmt(ctx: InheritedIfStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new InheritedConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitInheritedIfStmt(_: InheritedIfStmtContext) {
    this.stack.pop();
  }

  enterInheritedExistsStmt(ctx: InheritedExistsStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new InheritedConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableExistsCondition();
    conditionBlock.condition.inverted = !!ctx.NOT();
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitInheritedExistsStmt(_: InheritedExistsStmtContext) {
    this.stack.pop();
  }

  enterInheritedFindsStmt(ctx: InheritedFindsStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new InheritedConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableFindsCondition(ctx.regex().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitInheritedFindsStmt(_: InheritedFindsStmtContext) {
    this.stack.pop();
  }

  enterInheritedMatchStmt(ctx: InheritedMatchStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new InheritedConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableMatchCondition(ctx.regex().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitInheritedMatchStmt(_: InheritedMatchStmtContext) {
    this.stack.pop();
  }

  enterInheritedContainsStmt(ctx: InheritedContainsStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new InheritedConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableContainsCondition(ctx.word().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitInheritedContainsStmt(_: InheritedContainsStmtContext) {
    this.stack.pop();
  }

  enterInheritedEachStmt(_: InheritedEachStmtContext) {
    const block = this.stack.peek() as Block;
    const loop = new InheritedEach();
    block.addStatement(loop);
    this.stack.push(loop);
  }

  exitInheritedEachStmt(_: InheritedEachStmtContext) {
    this.stack.pop();
  }

  enterInheritedElseIfStmt(ctx: InheritedElseIfStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new InheritedConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterInheritedElseExistsStmt(ctx: InheritedElseExistsStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new InheritedConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableExistsCondition();
    conditionBlock.condition.inverted = !!ctx.NOT();
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterInheritedElseFindsStmt(ctx: InheritedElseFindsStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new InheritedConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableFindsCondition(ctx.regex().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterInheritedElseMatchStmt(ctx: InheritedElseMatchStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new InheritedConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableMatchCondition(ctx.regex().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterInheritedElseContainsStmt(ctx: InheritedElseContainsStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new InheritedConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    conditionBlock.condition = new TableContainsCondition(ctx.word().text);
    conditionBlock.condition.inverted = !!ctx.NOT();
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterInheritedElseEachStmt(_: InheritedElseEachStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const loop = new InheritedEach();
    testConditionBlock.elseCondition = loop;
    this.stack.push(loop);
  }

  enterInheritedElseEndStmt(ctx: InheritedElseEndStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new InheritedConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 1;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterConstraintIfStmt(ctx: ConstraintIfStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new ConstraintConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitConstraintIfStmt(_: ConstraintIfStmtContext) {
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

  enterConstraintElseIfStmt(ctx: ConstraintElseIfStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new ConstraintConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterConstraintElseEachStmt(_: ConstraintElseEachStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const loop = new ConstraintEach();
    testConditionBlock.elseCondition = loop;
    this.stack.push(loop);
  }

  enterConstraintElseEndStmt(ctx: ConstraintElseEndStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new ConstraintConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 1;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterIndexIfStmt(ctx: IndexIfStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new IndexConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitIndexIfStmt(_: IndexIfStmtContext) {
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

  enterIndexElseIfStmt(ctx: IndexElseIfStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new IndexConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterIndexElseEachStmt(_: IndexElseEachStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const loop = new IndexEach();
    testConditionBlock.elseCondition = loop;
    this.stack.push(loop);
  }

  enterIndexElseEndStmt(ctx: IndexElseEndStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new IndexConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 1;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterUniqueIfStmt(ctx: UniqueIfStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new UniqueConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitUniqueIfStmt(_: UniqueIfStmtContext) {
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

  enterUniqueElseIfStmt(ctx: UniqueElseIfStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new UniqueConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterUniqueElseEachStmt(_: UniqueElseEachStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const loop = new UniqueEach();
    testConditionBlock.elseCondition = loop;
    this.stack.push(loop);
  }

  enterUniqueElseEndStmt(ctx: UniqueElseEndStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new UniqueConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 1;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterPrimaryIfStmt(ctx: PrimaryIfStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new PrimaryConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitPrimaryIfStmt(_: PrimaryIfStmtContext) {
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

  enterPrimaryElseIfStmt(ctx: PrimaryElseIfStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new PrimaryConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterPrimaryElseEachStmt(_: PrimaryElseEachStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const loop = new PrimaryEach();
    testConditionBlock.elseCondition = loop;
    this.stack.push(loop);
  }

  enterPrimaryElseEndStmt(ctx: PrimaryElseEndStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new PrimaryConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 1;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterForeignIfStmt(ctx: ForeignIfStmtContext) {
    const block = this.stack.peek() as Block;
    const conditionBlock = new ForeignConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    block.addStatement(conditionBlock);
    this.stack.push(conditionBlock);
  }

  exitForeignIfStmt(_: ForeignIfStmtContext) {
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

  enterForeignElseIfStmt(ctx: ForeignElseIfStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new ForeignConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 2;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
  }

  enterForeignElseEachStmt(_: ForeignElseEachStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const loop = new ForeignEach();
    testConditionBlock.elseCondition = loop;
    this.stack.push(loop);
  }

  enterForeignElseEndStmt(ctx: ForeignElseEndStmtContext) {
    const testConditionBlock = this.stack.pop() as TestConditionBlock;
    const conditionBlock = new ForeignConditionBlock();
    conditionBlock.parentLevel = ctx.DOT().length - 1;
    testConditionBlock.elseCondition = conditionBlock;
    this.stack.push(conditionBlock);
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

  enterDescriptionEachStmt(_: DescriptionEachStmtContext) {
    const block = this.stack.peek() as Block;
    const loop = new DescriptionEach();
    block.addStatement(loop);
    this.stack.push(loop);
  }

  exitDescriptionEachStmt(_: DescriptionEachStmtContext) {
    this.stack.pop();
  }

  enterEachCondition(_: EachConditionContext) {
    const conditionBlock = this.stack.peek() as ConditionBlock;
    conditionBlock.condition ||= new ExpressionCondition();
    this.stack.push(conditionBlock.condition);
  }

  exitEachCondition(_: EachConditionContext) {
    this.stack.pop();
  }

  enterTestCondition(_: TestConditionContext) {
    const conditionBlock = this.stack.peek() as ConditionBlock;
    conditionBlock.condition ||= new ExpressionCondition();
    this.stack.push(conditionBlock.condition);
  }

  exitTestCondition(_: TestConditionContext) {
    this.stack.pop();
  }

  enterPriorityCondition(_: PriorityConditionContext) {
    const condition = this.stack.peek() as ExpressionCondition;
    const priorityCondition = new ExpressionCondition();
    condition.left = priorityCondition;
    this.stack.push(priorityCondition);
  }

  exitPriorityCondition(_: PriorityConditionContext) {
    this.stack.pop();
  }

  enterNegativePriorityCondition(_: NegativePriorityConditionContext) {
    const condition = this.stack.peek() as ExpressionCondition;
    condition.inverted = true;
    const priorityCondition = new ExpressionCondition();
    condition.left = priorityCondition;
    this.stack.push(priorityCondition);
  }

  exitNegativePriorityCondition(_: NegativePriorityConditionContext) {
    this.stack.pop();
  }

  enterAndCondition(_: AndConditionContext) {
    const condition = this.stack.peek() as ExpressionCondition;
    condition.operator = Operator.AND;
    const andCondition = new ExpressionCondition();
    condition.right = andCondition;
    this.stack.push(andCondition);
  }

  exitAndCondition(_: AndConditionContext) {
    this.stack.pop();
  }

  enterOrCondition(_: OrConditionContext) {
    const condition = this.stack.peek() as ExpressionCondition;
    condition.operator = Operator.OR;
    const orCondition = new ExpressionCondition();
    condition.right = orCondition;
    this.stack.push(orCondition);
  }

  exitOrCondition(_: OrConditionContext) {
    this.stack.pop();
  }

  enterNegativeExpression(_: NegativeExpressionContext) {
    const condition = this.stack.peek() as ExpressionCondition;
    condition.inverted = true;
  }

  enterExpression(ctx: ExpressionContext) {
    const condition = this.stack.peek() as ExpressionCondition;
    const attribute = ctx.attribute();
    if (attribute) {
      switch (true) {
        case !!attribute.K_COMMENT():
          return (condition.expression = Expression.ATTRIBUTE_COMMENT);
        case !!attribute.K_DESCRIPTION():
          return (condition.expression = Expression.ATTRIBUTE_DESCRIPTION);
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
        case !!property.K_NUMBER():
          return (condition.expression = Expression.PROPERTY_NUMBER);
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
        case !!property.K_IGNORED():
          return (condition.expression = Expression.PROPERTY_IGNORED);
        case !!property.K_DESCRIPTOR():
          return (condition.expression = Expression.PROPERTY_DESCRIPTOR);
        case !!property.K_SEARCHABLE():
          return (condition.expression = Expression.PROPERTY_SEARCHABLE);
        case !!property.K_INDEX():
          return (condition.expression = Expression.PROPERTY_INDEX);
        case !!property.K_CONSTRAINT():
          return (condition.expression = Expression.PROPERTY_CONSTRAINT);
        case !!property.K_FOREIGN():
          return (condition.expression = Expression.PROPERTY_FOREIGN);
        case !!property.K_UNIQUE():
          return (condition.expression = Expression.PROPERTY_UNIQUE);
        case !!property.K_UNPLURALIZABLE():
          return (condition.expression = Expression.PROPERTY_UNPLURALIZABLE);
        case !!property.K_FULLTEXT():
          return (condition.expression = Expression.PROPERTY_FULLTEXT);
        case !!property.K_RADIO():
          return (condition.expression = Expression.PROPERTY_RADIO);
        case !!property.K_MASKED():
          return (condition.expression = Expression.PROPERTY_MASKED);
        case !!property.K_PASSWORD():
          return (condition.expression = Expression.PROPERTY_PASSWORD);
        case !!property.K_PLURALIZABLE():
          return (condition.expression = Expression.PROPERTY_PLURALIZABLE);
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
        case !!property.K_SELF_REFERENCE():
          return (condition.expression = Expression.PROPERTY_SELF_REFERENCE);
        case !!property.K_FIRST():
          return (condition.expression = Expression.PROPERTY_FIRST);
        default: // K_NON_FIRST
          return (condition.expression = Expression.PROPERTY_NON_FIRST);
      }
    }

    const type = ctx.type()!;
    switch (true) {
      case !!type.K_INT():
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
