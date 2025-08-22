import { Block } from '@/ast/entity/block';
import { Constant } from '@/ast/entity/constant';
import { ConstraintConstant } from '@/ast/entity/constraint-constant';
import { DescriptorConstant } from '@/ast/entity/descriptor-constant';
import { FieldConstant } from '@/ast/entity/field-constant';
import { ForeignConstant } from '@/ast/entity/foreign-constant';
import { ImageConstant } from '@/ast/entity/image-constant';
import { IndexConstant } from '@/ast/entity/index-constant';
import { InheritedConstant } from '@/ast/entity/inherited-constant';
import { Node } from '@/ast/entity/node';
import { OptionConstant } from '@/ast/entity/option-constant';
import { PrimaryConstant } from '@/ast/entity/primary-constant';
import { ReferenceConstant } from '@/ast/entity/reference-constant';
import { ReplaceCommand } from '@/ast/entity/replace-command';
import { StringValue } from '@/ast/entity/string-value';
import { TableConstant } from '@/ast/entity/table-constant';
import { TemplateSource } from '@/ast/entity/templace-source';
import { UniqueConstant } from '@/ast/entity/unique-constant';
import { ListErrorListener } from '@/ast/list-error-listener';
import { Stack } from '@/data/struct/stack';
import { TemplateLexer } from '@/grammar/TemplateLexer';
import {
  ConstraintLevelContext,
  ConstraintStmtContext,
  FieldLevelContext,
  FieldStmtContext,
  RegexContext,
  ReplaceStmtContext,
  TableLevelContext,
  TableStmtContext,
  TemplateContext,
  TemplateParser,
  TextContentContext,
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
}
