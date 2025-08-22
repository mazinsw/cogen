import { Node } from '@/ast/entity/node';
import { TemplateSource } from '@/ast/entity/templace-source';
import { ListErrorListener } from '@/ast/list-error-listener';
import { Stack } from '@/data/struct/stack';
import { TemplateLexer } from '@/grammar/TemplateLexer';
import {
  AndConditionContext,
  AnyConditionContext,
  AttributeContext,
  BlockContext,
  ConditionContext,
  ConstantContext,
  ConstraintConditionContext,
  ConstraintEachStmtContext,
  ConstraintElseCondEndStmtContext,
  ConstraintElseEachStmtContext,
  ConstraintElseEndStmtContext,
  ConstraintElseIfStmtContext,
  ConstraintElseStmtContext,
  ConstraintIfStmtContext,
  ConstraintNameStmtContext,
  DescriptorContainsStmtContext,
  DescriptorEachStmtContext,
  DescriptorElseCondEndStmtContext,
  DescriptorElseCondStmtContext,
  DescriptorElseContainsStmtContext,
  DescriptorElseEachStmtContext,
  DescriptorElseEndStmtContext,
  DescriptorElseIfStmtContext,
  DescriptorElseMatchStmtContext,
  DescriptorElseStmtContext,
  DescriptorIfStmtContext,
  DescriptorMatchStmtContext,
  ExpressionContext,
  FieldConditionContext,
  FieldContainsStmtContext,
  FieldEachStmtContext,
  FieldElseCondEndStmtContext,
  FieldElseCondStmtContext,
  FieldElseContainsStmtContext,
  FieldElseEachStmtContext,
  FieldElseEndStmtContext,
  FieldElseExistsStmtContext,
  FieldElseFindsStmtContext,
  FieldElseIfStmtContext,
  FieldElseMatchStmtContext,
  FieldElseReverseEachStmtContext,
  FieldElseStmtContext,
  FieldExistsStmtContext,
  FieldFindsStmtContext,
  FieldIfStmtContext,
  FieldLevelContext,
  FieldMatchStmtContext,
  FieldPropContext,
  FieldPropsContext,
  FieldReplaceStmtContext,
  FieldReverseEachStmtContext,
  FieldStmtContext,
  ForeignEachStmtContext,
  ForeignElseCondEndStmtContext,
  ForeignElseEachStmtContext,
  ForeignElseEndStmtContext,
  ForeignElseIfStmtContext,
  ForeignElseStmtContext,
  ForeignIfStmtContext,
  ForeignNameStmtContext,
  IndexConditionContext,
  IndexEachStmtContext,
  IndexElseCondEndStmtContext,
  IndexElseEachStmtContext,
  IndexElseEndStmtContext,
  IndexElseIfStmtContext,
  IndexElseStmtContext,
  IndexIfStmtContext,
  IndexNameStmtContext,
  InheritedContainsStmtContext,
  InheritedEachStmtContext,
  InheritedElseCondEndStmtContext,
  InheritedElseCondStmtContext,
  InheritedElseContainsStmtContext,
  InheritedElseEachStmtContext,
  InheritedElseEndStmtContext,
  InheritedElseExistsStmtContext,
  InheritedElseFindsStmtContext,
  InheritedElseIfStmtContext,
  InheritedElseMatchStmtContext,
  InheritedElseStmtContext,
  InheritedExistsStmtContext,
  InheritedFindsStmtContext,
  InheritedIfStmtContext,
  InheritedMatchStmtContext,
  OrConditionContext,
  PrimaryEachStmtContext,
  PrimaryElseCondEndStmtContext,
  PrimaryElseEachStmtContext,
  PrimaryElseEndStmtContext,
  PrimaryElseIfStmtContext,
  PrimaryElseStmtContext,
  PrimaryIfStmtContext,
  PrimaryNameStmtContext,
  PriorityConditionContext,
  PropertyContext,
  ReferenceContainsStmtContext,
  ReferenceEachStmtContext,
  ReferenceElseCondEndStmtContext,
  ReferenceElseCondStmtContext,
  ReferenceElseContainsStmtContext,
  ReferenceElseEachStmtContext,
  ReferenceElseEndStmtContext,
  ReferenceElseExistsStmtContext,
  ReferenceElseFindsStmtContext,
  ReferenceElseIfStmtContext,
  ReferenceElseMatchStmtContext,
  ReferenceElseStmtContext,
  ReferenceExistsStmtContext,
  ReferenceFindsStmtContext,
  ReferenceIfStmtContext,
  ReferenceMatchStmtContext,
  RegexContext,
  StatementContext,
  TableConditionContext,
  TableContainsStmtContext,
  TableEachStmtContext,
  TableElseCondEndStmtContext,
  TableElseCondStmtContext,
  TableElseContainsStmtContext,
  TableElseEachStmtContext,
  TableElseEndStmtContext,
  TableElseExistsStmtContext,
  TableElseFindsStmtContext,
  TableElseIfStmtContext,
  TableElseMatchStmtContext,
  TableElseStmtContext,
  TableExistsStmtContext,
  TableFindsStmtContext,
  TableIfStmtContext,
  TableLevelContext,
  TableMatchStmtContext,
  TablePropContext,
  TablePropsContext,
  TableReplaceStmtContext,
  TableStmtContext,
  TemplateContext,
  TemplateParser,
  TextContentContext,
  TypeContext,
  UniqueEachStmtContext,
  UniqueElseCondEndStmtContext,
  UniqueElseEachStmtContext,
  UniqueElseEndStmtContext,
  UniqueElseIfStmtContext,
  UniqueElseStmtContext,
  UniqueIfStmtContext,
  UniqueNameStmtContext,
  WordContext,
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
          : await fs.promises.readFile(fileName, 'utf-8'),
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

  enterTemplate(_: TemplateContext): void {}

  exitTemplate(_: TemplateContext): void {}

  enterStatement(_: StatementContext): void {}

  exitStatement(_: StatementContext): void {}

  enterBlock(_: BlockContext): void {}

  exitBlock(_: BlockContext): void {}

  enterTableIfStmt(_: TableIfStmtContext): void {}

  exitTableIfStmt(_: TableIfStmtContext): void {}

  enterTableExistsStmt(_: TableExistsStmtContext): void {}

  exitTableExistsStmt(_: TableExistsStmtContext): void {}

  enterTableFindsStmt(_: TableFindsStmtContext): void {}

  exitTableFindsStmt(_: TableFindsStmtContext): void {}

  enterTableMatchStmt(_: TableMatchStmtContext): void {}

  exitTableMatchStmt(_: TableMatchStmtContext): void {}

  enterTableContainsStmt(_: TableContainsStmtContext): void {}

  exitTableContainsStmt(_: TableContainsStmtContext): void {}

  enterTableEachStmt(_: TableEachStmtContext): void {}

  exitTableEachStmt(_: TableEachStmtContext): void {}

  enterTableElseIfStmt(_: TableElseIfStmtContext): void {}

  exitTableElseIfStmt(_: TableElseIfStmtContext): void {}

  enterTableElseExistsStmt(_: TableElseExistsStmtContext): void {}

  exitTableElseExistsStmt(_: TableElseExistsStmtContext): void {}

  enterTableElseFindsStmt(_: TableElseFindsStmtContext): void {}

  exitTableElseFindsStmt(_: TableElseFindsStmtContext): void {}

  enterTableElseMatchStmt(_: TableElseMatchStmtContext): void {}

  exitTableElseMatchStmt(_: TableElseMatchStmtContext): void {}

  enterTableElseContainsStmt(_: TableElseContainsStmtContext): void {}

  exitTableElseContainsStmt(_: TableElseContainsStmtContext): void {}

  enterTableElseEachStmt(_: TableElseEachStmtContext): void {}

  exitTableElseEachStmt(_: TableElseEachStmtContext): void {}

  enterTableElseEndStmt(_: TableElseEndStmtContext): void {}

  exitTableElseEndStmt(_: TableElseEndStmtContext): void {}

  enterTableElseStmt(_: TableElseStmtContext): void {}

  exitTableElseStmt(_: TableElseStmtContext): void {}

  enterTableElseCondEndStmt(_: TableElseCondEndStmtContext): void {}

  exitTableElseCondEndStmt(_: TableElseCondEndStmtContext): void {}

  enterTableElseCondStmt(_: TableElseCondStmtContext): void {}

  exitTableElseCondStmt(_: TableElseCondStmtContext): void {}

  enterInheritedIfStmt(_: InheritedIfStmtContext): void {}

  exitInheritedIfStmt(_: InheritedIfStmtContext): void {}

  enterInheritedExistsStmt(_: InheritedExistsStmtContext): void {}

  exitInheritedExistsStmt(_: InheritedExistsStmtContext): void {}

  enterInheritedFindsStmt(_: InheritedFindsStmtContext): void {}

  exitInheritedFindsStmt(_: InheritedFindsStmtContext): void {}

  enterInheritedMatchStmt(_: InheritedMatchStmtContext): void {}

  exitInheritedMatchStmt(_: InheritedMatchStmtContext): void {}

  enterInheritedContainsStmt(_: InheritedContainsStmtContext): void {}

  exitInheritedContainsStmt(_: InheritedContainsStmtContext): void {}

  enterInheritedEachStmt(_: InheritedEachStmtContext): void {}

  exitInheritedEachStmt(_: InheritedEachStmtContext): void {}

  enterInheritedElseIfStmt(_: InheritedElseIfStmtContext): void {}

  exitInheritedElseIfStmt(_: InheritedElseIfStmtContext): void {}

  enterInheritedElseExistsStmt(_: InheritedElseExistsStmtContext): void {}

  exitInheritedElseExistsStmt(_: InheritedElseExistsStmtContext): void {}

  enterInheritedElseFindsStmt(_: InheritedElseFindsStmtContext): void {}

  exitInheritedElseFindsStmt(_: InheritedElseFindsStmtContext): void {}

  enterInheritedElseMatchStmt(_: InheritedElseMatchStmtContext): void {}

  exitInheritedElseMatchStmt(_: InheritedElseMatchStmtContext): void {}

  enterInheritedElseContainsStmt(_: InheritedElseContainsStmtContext): void {}

  exitInheritedElseContainsStmt(_: InheritedElseContainsStmtContext): void {}

  enterInheritedElseEachStmt(_: InheritedElseEachStmtContext): void {}

  exitInheritedElseEachStmt(_: InheritedElseEachStmtContext): void {}

  enterInheritedElseEndStmt(_: InheritedElseEndStmtContext): void {}

  exitInheritedElseEndStmt(_: InheritedElseEndStmtContext): void {}

  enterInheritedElseStmt(_: InheritedElseStmtContext): void {}

  exitInheritedElseStmt(_: InheritedElseStmtContext): void {}

  enterInheritedElseCondEndStmt(_: InheritedElseCondEndStmtContext): void {}

  exitInheritedElseCondEndStmt(_: InheritedElseCondEndStmtContext): void {}

  enterInheritedElseCondStmt(_: InheritedElseCondStmtContext): void {}

  exitInheritedElseCondStmt(_: InheritedElseCondStmtContext): void {}

  enterReferenceIfStmt(_: ReferenceIfStmtContext): void {}

  exitReferenceIfStmt(_: ReferenceIfStmtContext): void {}

  enterReferenceExistsStmt(_: ReferenceExistsStmtContext): void {}

  exitReferenceExistsStmt(_: ReferenceExistsStmtContext): void {}

  enterReferenceFindsStmt(_: ReferenceFindsStmtContext): void {}

  exitReferenceFindsStmt(_: ReferenceFindsStmtContext): void {}

  enterReferenceMatchStmt(_: ReferenceMatchStmtContext): void {}

  exitReferenceMatchStmt(_: ReferenceMatchStmtContext): void {}

  enterReferenceContainsStmt(_: ReferenceContainsStmtContext): void {}

  exitReferenceContainsStmt(_: ReferenceContainsStmtContext): void {}

  enterReferenceEachStmt(_: ReferenceEachStmtContext): void {}

  exitReferenceEachStmt(_: ReferenceEachStmtContext): void {}

  enterReferenceElseIfStmt(_: ReferenceElseIfStmtContext): void {}

  exitReferenceElseIfStmt(_: ReferenceElseIfStmtContext): void {}

  enterReferenceElseExistsStmt(_: ReferenceElseExistsStmtContext): void {}

  exitReferenceElseExistsStmt(_: ReferenceElseExistsStmtContext): void {}

  enterReferenceElseFindsStmt(_: ReferenceElseFindsStmtContext): void {}

  exitReferenceElseFindsStmt(_: ReferenceElseFindsStmtContext): void {}

  enterReferenceElseMatchStmt(_: ReferenceElseMatchStmtContext): void {}

  exitReferenceElseMatchStmt(_: ReferenceElseMatchStmtContext): void {}

  enterReferenceElseContainsStmt(_: ReferenceElseContainsStmtContext): void {}

  exitReferenceElseContainsStmt(_: ReferenceElseContainsStmtContext): void {}

  enterReferenceElseEachStmt(_: ReferenceElseEachStmtContext): void {}

  exitReferenceElseEachStmt(_: ReferenceElseEachStmtContext): void {}

  enterReferenceElseEndStmt(_: ReferenceElseEndStmtContext): void {}

  exitReferenceElseEndStmt(_: ReferenceElseEndStmtContext): void {}

  enterReferenceElseStmt(_: ReferenceElseStmtContext): void {}

  exitReferenceElseStmt(_: ReferenceElseStmtContext): void {}

  enterReferenceElseCondEndStmt(_: ReferenceElseCondEndStmtContext): void {}

  exitReferenceElseCondEndStmt(_: ReferenceElseCondEndStmtContext): void {}

  enterReferenceElseCondStmt(_: ReferenceElseCondStmtContext): void {}

  exitReferenceElseCondStmt(_: ReferenceElseCondStmtContext): void {}

  enterFieldIfStmt(_: FieldIfStmtContext): void {}

  exitFieldIfStmt(_: FieldIfStmtContext): void {}

  enterFieldExistsStmt(_: FieldExistsStmtContext): void {}

  exitFieldExistsStmt(_: FieldExistsStmtContext): void {}

  enterFieldFindsStmt(_: FieldFindsStmtContext): void {}

  exitFieldFindsStmt(_: FieldFindsStmtContext): void {}

  enterFieldMatchStmt(_: FieldMatchStmtContext): void {}

  exitFieldMatchStmt(_: FieldMatchStmtContext): void {}

  enterFieldContainsStmt(_: FieldContainsStmtContext): void {}

  exitFieldContainsStmt(_: FieldContainsStmtContext): void {}

  enterFieldEachStmt(_: FieldEachStmtContext): void {}

  exitFieldEachStmt(_: FieldEachStmtContext): void {}

  enterFieldReverseEachStmt(_: FieldReverseEachStmtContext): void {}

  exitFieldReverseEachStmt(_: FieldReverseEachStmtContext): void {}

  enterFieldElseIfStmt(_: FieldElseIfStmtContext): void {}

  exitFieldElseIfStmt(_: FieldElseIfStmtContext): void {}

  enterFieldElseExistsStmt(_: FieldElseExistsStmtContext): void {}

  exitFieldElseExistsStmt(_: FieldElseExistsStmtContext): void {}

  enterFieldElseFindsStmt(_: FieldElseFindsStmtContext): void {}

  exitFieldElseFindsStmt(_: FieldElseFindsStmtContext): void {}

  enterFieldElseMatchStmt(_: FieldElseMatchStmtContext): void {}

  exitFieldElseMatchStmt(_: FieldElseMatchStmtContext): void {}

  enterFieldElseContainsStmt(_: FieldElseContainsStmtContext): void {}

  exitFieldElseContainsStmt(_: FieldElseContainsStmtContext): void {}

  enterFieldElseEachStmt(_: FieldElseEachStmtContext): void {}

  exitFieldElseEachStmt(_: FieldElseEachStmtContext): void {}

  enterFieldElseReverseEachStmt(_: FieldElseReverseEachStmtContext): void {}

  exitFieldElseReverseEachStmt(_: FieldElseReverseEachStmtContext): void {}

  enterFieldElseEndStmt(_: FieldElseEndStmtContext): void {}

  exitFieldElseEndStmt(_: FieldElseEndStmtContext): void {}

  enterFieldElseStmt(_: FieldElseStmtContext): void {}

  exitFieldElseStmt(_: FieldElseStmtContext): void {}

  enterFieldElseCondEndStmt(_: FieldElseCondEndStmtContext): void {}

  exitFieldElseCondEndStmt(_: FieldElseCondEndStmtContext): void {}

  enterFieldElseCondStmt(_: FieldElseCondStmtContext): void {}

  exitFieldElseCondStmt(_: FieldElseCondStmtContext): void {}

  enterDescriptorIfStmt(_: DescriptorIfStmtContext): void {}

  exitDescriptorIfStmt(_: DescriptorIfStmtContext): void {}

  enterDescriptorMatchStmt(_: DescriptorMatchStmtContext): void {}

  exitDescriptorMatchStmt(_: DescriptorMatchStmtContext): void {}

  enterDescriptorContainsStmt(_: DescriptorContainsStmtContext): void {}

  exitDescriptorContainsStmt(_: DescriptorContainsStmtContext): void {}

  enterDescriptorEachStmt(_: DescriptorEachStmtContext): void {}

  exitDescriptorEachStmt(_: DescriptorEachStmtContext): void {}

  enterDescriptorElseIfStmt(_: DescriptorElseIfStmtContext): void {}

  exitDescriptorElseIfStmt(_: DescriptorElseIfStmtContext): void {}

  enterDescriptorElseMatchStmt(_: DescriptorElseMatchStmtContext): void {}

  exitDescriptorElseMatchStmt(_: DescriptorElseMatchStmtContext): void {}

  enterDescriptorElseContainsStmt(_: DescriptorElseContainsStmtContext): void {}

  exitDescriptorElseContainsStmt(_: DescriptorElseContainsStmtContext): void {}

  enterDescriptorElseEachStmt(_: DescriptorElseEachStmtContext): void {}

  exitDescriptorElseEachStmt(_: DescriptorElseEachStmtContext): void {}

  enterDescriptorElseEndStmt(_: DescriptorElseEndStmtContext): void {}

  exitDescriptorElseEndStmt(_: DescriptorElseEndStmtContext): void {}

  enterDescriptorElseStmt(_: DescriptorElseStmtContext): void {}

  exitDescriptorElseStmt(_: DescriptorElseStmtContext): void {}

  enterDescriptorElseCondEndStmt(_: DescriptorElseCondEndStmtContext): void {}

  exitDescriptorElseCondEndStmt(_: DescriptorElseCondEndStmtContext): void {}

  enterDescriptorElseCondStmt(_: DescriptorElseCondStmtContext): void {}

  exitDescriptorElseCondStmt(_: DescriptorElseCondStmtContext): void {}

  enterIndexIfStmt(_: IndexIfStmtContext): void {}

  exitIndexIfStmt(_: IndexIfStmtContext): void {}

  enterIndexEachStmt(_: IndexEachStmtContext): void {}

  exitIndexEachStmt(_: IndexEachStmtContext): void {}

  enterIndexElseIfStmt(_: IndexElseIfStmtContext): void {}

  exitIndexElseIfStmt(_: IndexElseIfStmtContext): void {}

  enterIndexElseEachStmt(_: IndexElseEachStmtContext): void {}

  exitIndexElseEachStmt(_: IndexElseEachStmtContext): void {}

  enterIndexElseEndStmt(_: IndexElseEndStmtContext): void {}

  exitIndexElseEndStmt(_: IndexElseEndStmtContext): void {}

  enterIndexElseStmt(_: IndexElseStmtContext): void {}

  exitIndexElseStmt(_: IndexElseStmtContext): void {}

  enterIndexElseCondEndStmt(_: IndexElseCondEndStmtContext): void {}

  exitIndexElseCondEndStmt(_: IndexElseCondEndStmtContext): void {}

  enterUniqueIfStmt(_: UniqueIfStmtContext): void {}

  exitUniqueIfStmt(_: UniqueIfStmtContext): void {}

  enterUniqueEachStmt(_: UniqueEachStmtContext): void {}

  exitUniqueEachStmt(_: UniqueEachStmtContext): void {}

  enterUniqueElseIfStmt(_: UniqueElseIfStmtContext): void {}

  exitUniqueElseIfStmt(_: UniqueElseIfStmtContext): void {}

  enterUniqueElseEachStmt(_: UniqueElseEachStmtContext): void {}

  exitUniqueElseEachStmt(_: UniqueElseEachStmtContext): void {}

  enterUniqueElseEndStmt(_: UniqueElseEndStmtContext): void {}

  exitUniqueElseEndStmt(_: UniqueElseEndStmtContext): void {}

  enterUniqueElseStmt(_: UniqueElseStmtContext): void {}

  exitUniqueElseStmt(_: UniqueElseStmtContext): void {}

  enterUniqueElseCondEndStmt(_: UniqueElseCondEndStmtContext): void {}

  exitUniqueElseCondEndStmt(_: UniqueElseCondEndStmtContext): void {}

  enterPrimaryIfStmt(_: PrimaryIfStmtContext): void {}

  exitPrimaryIfStmt(_: PrimaryIfStmtContext): void {}

  enterPrimaryEachStmt(_: PrimaryEachStmtContext): void {}

  exitPrimaryEachStmt(_: PrimaryEachStmtContext): void {}

  enterPrimaryElseIfStmt(_: PrimaryElseIfStmtContext): void {}

  exitPrimaryElseIfStmt(_: PrimaryElseIfStmtContext): void {}

  enterPrimaryElseEachStmt(_: PrimaryElseEachStmtContext): void {}

  exitPrimaryElseEachStmt(_: PrimaryElseEachStmtContext): void {}

  enterPrimaryElseEndStmt(_: PrimaryElseEndStmtContext): void {}

  exitPrimaryElseEndStmt(_: PrimaryElseEndStmtContext): void {}

  enterPrimaryElseStmt(_: PrimaryElseStmtContext): void {}

  exitPrimaryElseStmt(_: PrimaryElseStmtContext): void {}

  enterPrimaryElseCondEndStmt(_: PrimaryElseCondEndStmtContext): void {}

  exitPrimaryElseCondEndStmt(_: PrimaryElseCondEndStmtContext): void {}

  enterConstraintIfStmt(_: ConstraintIfStmtContext): void {}

  exitConstraintIfStmt(_: ConstraintIfStmtContext): void {}

  enterConstraintEachStmt(_: ConstraintEachStmtContext): void {}

  exitConstraintEachStmt(_: ConstraintEachStmtContext): void {}

  enterConstraintElseIfStmt(_: ConstraintElseIfStmtContext): void {}

  exitConstraintElseIfStmt(_: ConstraintElseIfStmtContext): void {}

  enterConstraintElseEachStmt(_: ConstraintElseEachStmtContext): void {}

  exitConstraintElseEachStmt(_: ConstraintElseEachStmtContext): void {}

  enterConstraintElseEndStmt(_: ConstraintElseEndStmtContext): void {}

  exitConstraintElseEndStmt(_: ConstraintElseEndStmtContext): void {}

  enterConstraintElseStmt(_: ConstraintElseStmtContext): void {}

  exitConstraintElseStmt(_: ConstraintElseStmtContext): void {}

  enterConstraintElseCondEndStmt(_: ConstraintElseCondEndStmtContext): void {}

  exitConstraintElseCondEndStmt(_: ConstraintElseCondEndStmtContext): void {}

  enterForeignIfStmt(_: ForeignIfStmtContext): void {}

  exitForeignIfStmt(_: ForeignIfStmtContext): void {}

  enterForeignEachStmt(_: ForeignEachStmtContext): void {}

  exitForeignEachStmt(_: ForeignEachStmtContext): void {}

  enterForeignElseIfStmt(_: ForeignElseIfStmtContext): void {}

  exitForeignElseIfStmt(_: ForeignElseIfStmtContext): void {}

  enterForeignElseEachStmt(_: ForeignElseEachStmtContext): void {}

  exitForeignElseEachStmt(_: ForeignElseEachStmtContext): void {}

  enterForeignElseEndStmt(_: ForeignElseEndStmtContext): void {}

  exitForeignElseEndStmt(_: ForeignElseEndStmtContext): void {}

  enterForeignElseStmt(_: ForeignElseStmtContext): void {}

  exitForeignElseStmt(_: ForeignElseStmtContext): void {}

  enterForeignElseCondEndStmt(_: ForeignElseCondEndStmtContext): void {}

  exitForeignElseCondEndStmt(_: ForeignElseCondEndStmtContext): void {}

  enterConstant(_: ConstantContext): void {}

  exitConstant(_: ConstantContext): void {}

  enterTableReplaceStmt(_: TableReplaceStmtContext): void {}

  exitTableReplaceStmt(_: TableReplaceStmtContext): void {}

  enterTableStmt(_: TableStmtContext): void {}

  exitTableStmt(_: TableStmtContext): void {}

  enterTableProps(_: TablePropsContext): void {}

  exitTableProps(_: TablePropsContext): void {}

  enterTableProp(_: TablePropContext): void {}

  exitTableProp(_: TablePropContext): void {}

  enterFieldReplaceStmt(_: FieldReplaceStmtContext): void {}

  exitFieldReplaceStmt(_: FieldReplaceStmtContext): void {}

  enterFieldStmt(_: FieldStmtContext): void {}

  exitFieldStmt(_: FieldStmtContext): void {}

  enterFieldProps(_: FieldPropsContext): void {}

  exitFieldProps(_: FieldPropsContext): void {}

  enterFieldProp(_: FieldPropContext): void {}

  exitFieldProp(_: FieldPropContext): void {}

  enterIndexNameStmt(_: IndexNameStmtContext): void {}

  exitIndexNameStmt(_: IndexNameStmtContext): void {}

  enterUniqueNameStmt(_: UniqueNameStmtContext): void {}

  exitUniqueNameStmt(_: UniqueNameStmtContext): void {}

  enterPrimaryNameStmt(_: PrimaryNameStmtContext): void {}

  exitPrimaryNameStmt(_: PrimaryNameStmtContext): void {}

  enterConstraintNameStmt(_: ConstraintNameStmtContext): void {}

  exitConstraintNameStmt(_: ConstraintNameStmtContext): void {}

  enterForeignNameStmt(_: ForeignNameStmtContext): void {}

  exitForeignNameStmt(_: ForeignNameStmtContext): void {}

  enterTextContent(_: TextContentContext): void {}

  exitTextContent(_: TextContentContext): void {}

  enterTableLevel(_: TableLevelContext): void {}

  exitTableLevel(_: TableLevelContext): void {}

  enterFieldLevel(_: FieldLevelContext): void {}

  exitFieldLevel(_: FieldLevelContext): void {}

  enterRegex(_: RegexContext): void {}

  exitRegex(_: RegexContext): void {}

  enterWord(_: WordContext): void {}

  exitWord(_: WordContext): void {}

  enterTableCondition(_: TableConditionContext): void {}

  exitTableCondition(_: TableConditionContext): void {}

  enterFieldCondition(_: FieldConditionContext): void {}

  exitFieldCondition(_: FieldConditionContext): void {}

  enterIndexCondition(_: IndexConditionContext): void {}

  exitIndexCondition(_: IndexConditionContext): void {}

  enterConstraintCondition(_: ConstraintConditionContext): void {}

  exitConstraintCondition(_: ConstraintConditionContext): void {}

  enterCondition(_: ConditionContext): void {}

  exitCondition(_: ConditionContext): void {}

  enterAnyCondition(_: AnyConditionContext): void {}

  exitAnyCondition(_: AnyConditionContext): void {}

  enterPriorityCondition(_: PriorityConditionContext): void {}

  exitPriorityCondition(_: PriorityConditionContext): void {}

  enterOrCondition(_: OrConditionContext): void {}

  exitOrCondition(_: OrConditionContext): void {}

  enterAndCondition(_: AndConditionContext): void {}

  exitAndCondition(_: AndConditionContext): void {}

  enterExpression(_: ExpressionContext): void {}

  exitExpression(_: ExpressionContext): void {}

  enterAttribute(_: AttributeContext): void {}

  exitAttribute(_: AttributeContext): void {}

  enterProperty(_: PropertyContext): void {}

  exitProperty(_: PropertyContext): void {}

  enterType(_: TypeContext): void {}

  exitType(_: TypeContext): void {}

  // public _enterCreateTable(_: CreateTableContext): void {
  //   const table = new Table('[Undefined]');
  //   this.stack.push(table);
  // }

  // public _exitTableName(_: TableNameContext): void {
  //   const node = this.stack.pop() as NamedNode; // pop Name
  //   const table = this.stack.peek() as Table;
  //   table.setName(node.getName());
  // }

  // public _exitCreateTable(_: CreateTableContext): void {
  //   this.templateSource.addStatement(this.stack.pop());
  // }

  // public _enterFieldStmt(_: FieldStmtContext): void {
  //   const field = new Field('');
  //   const table = this.stack.peek() as Table;
  //   table.addField(field);
  //   this.stack.push(field);
  // }

  // public _exitColumnName(_: ColumnNameContext): void {
  //   const node = this.stack.pop() as NamedNode;
  //   const field = this.stack.peek() as Field;
  //   field.setName(node.getName());
  // }

  // public _enterTypeIntegerStmt(ctx: TypeIntegerStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new DataType(DataType.INTEGER);
  //   field.setType(type);
  //   field.setUnsigned(ctx.K_UNSIGNED() != null);
  // }

  // public _enterTypeIntStmt(ctx: TypeIntStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new DataType(DataType.INTEGER);
  //   field.setType(type);
  //   field.setUnsigned(ctx.K_UNSIGNED() != null);
  // }

  // public _enterTypeDoubleStmt(_: TypeDoubleStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new DataType(DataType.DOUBLE);
  //   field.setType(type);
  // }

  // public _enterTypeMediumBlobStmt(_: TypeMediumBlobStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new DataType(DataType.BLOB);
  //   field.setType(type);
  // }

  // public _enterTypeBlobStmt(_: TypeBlobStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new DataType(DataType.BLOB);
  //   field.setType(type);
  // }

  // public _enterTypeLongBlobStmt(_: TypeLongBlobStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new DataType(DataType.BLOB);
  //   field.setType(type);
  // }

  // public _enterTypeTinyBlobStmt(_: TypeTinyBlobStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new DataType(DataType.BLOB);
  //   field.setType(type);
  // }

  // public _enterTypeFloatStmt(_: TypeFloatStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new DataType(DataType.FLOAT);
  //   field.setType(type);
  // }

  // public _enterTypeDecimalStmt(_: TypeDecimalStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new DataType(DataType.DECIMAL);
  //   field.setType(type);
  // }

  // public _enterTypeNumericStmt(_: TypeNumericStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new DataType(DataType.DECIMAL);
  //   field.setType(type);
  // }

  // public _enterTypeDateTimeStmt(_: TypeDateTimeStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new DataType(DataType.DATETIME);
  //   field.setType(type);
  // }

  // public _enterTypeTimeStampStmt(_: TypeTimeStampStmtContext) {
  //   const field = this.stack.peek() as Field;
  //   const type = new DataType(DataType.TIMESTAMP);
  //   field.setType(type);
  // }

  // public _enterTypeBooleanStmt(_: TypeBooleanStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new DataType(DataType.BOOLEAN);
  //   field.setType(type);
  // }

  // public _enterTypeDateStmt(_: TypeDateStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new DataType(DataType.DATE);
  //   field.setType(type);
  // }

  // public _enterTypeTimeStmt(_: TypeTimeStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new DataType(DataType.TIME);
  //   field.setType(type);
  // }

  // public _enterTypeVarCharStmt(ctx: TypeVarCharStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new StringType(DataType.STRING);
  //   type.setLength(Number(ctx.INT().text));
  //   field.setType(type);
  // }

  // public _enterTypeBigIntStmt(ctx: TypeBigIntStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new DataType(DataType.BIGINT);
  //   field.setType(type);
  //   field.setUnsigned(ctx.K_UNSIGNED() != null);
  // }

  // public _enterTypeJsonStmt(_: TypeJsonStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new StringType(DataType.JSON);
  //   type.setLength(4294967295);
  //   field.setType(type);
  // }

  // public _enterTypeTinyIntStmt(ctx: TypeTinyIntStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new DataType(DataType.TINYINT);
  //   field.setType(type);
  //   field.setUnsigned(ctx.K_UNSIGNED() != null);
  // }

  // public _enterTypeTextStmt(_: TypeTextStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new StringType(DataType.TEXT);
  //   type.setLength(65535);
  //   field.setType(type);
  // }

  // public _enterTypeLongTextStmt(_: TypeLongTextStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new StringType(DataType.TEXT);
  //   type.setLength(4294967295);
  //   field.setType(type);
  // }

  // public _enterTypeMediumTextStmt(_: TypeMediumTextStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new StringType(DataType.TEXT);
  //   type.setLength(16777215);
  //   field.setType(type);
  // }

  // public _enterTypeTinyTextStmt(_: TypeTinyTextStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new StringType(DataType.TEXT);
  //   type.setLength(255);
  //   field.setType(type);
  // }

  // public _enterTypeCharStmt(_: TypeCharStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new DataType(DataType.CHAR);
  //   field.setType(type);
  // }

  // public _enterTypeEnumStmt(_: TypeEnumStmtContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = new EnumType(DataType.ENUM);
  //   field.setType(type);
  // }

  // public _enterColumnNotNull(_: ColumnNotNullContext): void {
  //   const field = this.stack.peek() as Field;
  //   field.setNotNull(true);
  // }

  // public _enterColumnNull(_: ColumnNullContext): void {
  //   const field = this.stack.peek() as Field;
  //   field.setNotNull(false);
  // }

  // public _enterDefaultValue(ctx: DefaultValueContext): void {
  //   let value: Value = null;
  //   if (ctx.STRING() != null) value = new StringValue(ctx.STRING().text);
  //   else if (ctx.INT() != null) value = new IntegerValue(ctx.INT().text);
  //   else if (ctx.FLOAT() != null) value = new FloatValue(ctx.FLOAT().text);
  //   else if (ctx.BOOL() != null)
  //     value = BooleanValue.fromString(ctx.BOOL().text);
  //   else if (ctx.K_CURRENT_TIMESTAMP() != null)
  //     value = new LiteralValue(ctx.K_CURRENT_TIMESTAMP().text);
  //   else if (ctx.K_NULL() != null) value = new StringValue('null');
  //   this.stack.push(value);
  // }

  // public _exitColumnDefaultValue(_: ColumnDefaultValueContext): void {
  //   const value = this.stack.pop() as Value;
  //   const field = this.stack.peek() as Field;
  //   field.setValue(value);
  // }

  // public _exitSetDefaultValue(_: SetDefaultValueContext): void {
  //   this.stack.pop();
  // }

  // public _exitStringItem(ctx: StringItemContext): void {
  //   const field = this.stack.peek() as Field;
  //   const type = field.getType() as EnumType;
  //   let elem = ctx.STRING().text;
  //   elem = elem.substring(1, elem.length - 1);
  //   type.addElement(elem);
  // }

  // public _exitFieldStmt(_: FieldStmtContext): void {
  //   this.stack.pop();
  // }

  // public _enterPrimaryKeyStmt(_: PrimaryKeyStmtContext): void {
  //   const pk = new PrimaryKey();
  //   pk.setName('PRIMARY');
  //   const table = this.stack.peek() as Table;
  //   table.addConstraint(pk);
  //   this.stack.push(pk);
  // }

  // public _exitPrimaryKeyStmt(_: PrimaryKeyStmtContext): void {
  //   this.stack.pop();
  // }

  // public _enterIndexStmt(_: IndexStmtContext): void {
  //   const index = new Index();
  //   const table = this.stack.peek() as Table;
  //   table.addIndex(index);
  //   this.stack.push(index);
  // }

  // public _enterAutoIncrement(_: AutoIncrementContext): void {
  //   const field = this.stack.peek() as Field;
  //   field.setAutoIncrement(true);
  // }

  // public _enterFieldComment(ctx: FieldCommentContext): void {
  //   const field = this.stack.peek() as Field;
  //   field.setComment(Comment.parse(ctx.STRING().text));
  // }

  // public _exitIndexStmt(_: IndexStmtContext): void {
  //   this.stack.pop();
  // }

  // public _enterFulltextStmt(_: FulltextStmtContext) {
  //   const fi = new FulltextIndex();
  //   const table = this.stack.peek() as Table;
  //   table.addIndex(fi);
  //   this.stack.push(fi);
  // }

  // public _exitFulltextStmt(_: FulltextStmtContext) {
  //   this.stack.pop();
  // }

  // public _enterUniqueStmt(_: UniqueStmtContext): void {
  //   const uk = new UniqueKey();
  //   const table = this.stack.peek() as Table;
  //   table.addConstraint(uk);
  //   this.stack.push(uk);
  // }

  // public _exitUniqueStmt(_: UniqueStmtContext): void {
  //   this.stack.pop();
  // }

  // public _enterForeignStmt(_: ForeignStmtContext): void {
  //   const fk = new ForeignKey('[Unknow]');
  //   const table = this.stack.peek() as Table;
  //   table.addConstraint(fk);
  //   this.stack.push(fk);
  // }

  // public _exitForeignStmt(_: ForeignStmtContext): void {
  //   this.stack.pop();
  // }

  // public _enterReferenceDefinition(_: ReferenceDefinitionContext): void {
  //   const fk = this.stack.peek() as ForeignKey;
  //   this.stack.push(fk.getReferences());
  // }

  // public _exitReferenceDefinition(_: ReferenceDefinitionContext): void {
  //   this.stack.pop();
  // }

  // public _enterReferenceUpdateOption(ctx: ReferenceUpdateOptionContext): void {
  //   const index = this.stack.pop() as Index;
  //   const fk = this.stack.peek() as ForeignKey;
  //   fk.setUpdateActionFromString(ctx.text);
  //   this.stack.push(index);
  // }

  // public _enterReferenceDeleteOption(ctx: ReferenceDeleteOptionContext): void {
  //   const index = this.stack.pop() as Index;
  //   const fk = this.stack.peek() as ForeignKey;
  //   fk.setDeleteActionFromString(ctx.text);
  //   this.stack.push(index);
  // }

  // public _exitCreateSchema(_: CreateSchemaContext): void {
  //   this.discard(this.stack.pop()); // pop Name
  // }

  // public _enterTableComment(ctx: TableCommentContext): void {
  //   const table = this.stack.peek() as Table;
  //   table.setComment(Comment.parse(ctx.STRING().text));
  // }

  // public _exitUseStmt(_: UseStmtContext): void {
  //   this.discard(this.stack.pop()); // pop Name
  // }

  // public _exitDropSchema(_: DropSchemaContext): void {
  //   this.discard(this.stack.pop()); // pop Name
  // }

  // public _exitDropTableName(_: DropTableNameContext): void {
  //   this.discard(this.stack.pop()); // pop Name
  // }

  // public _exitCharsetName(_: CharsetNameContext): void {
  //   this.discard(this.stack.pop()); // pop Name
  // }

  // public _exitCollateName(_: CollateNameContext): void {
  //   this.discard(this.stack.pop()); // pop Name
  // }

  // public _exitConstraintName(_: ConstraintNameContext): void {
  //   const namedNode = this.stack.pop() as NamedNode;
  //   const index = this.stack.peek() as Index;
  //   index.setName(namedNode.getName());
  // }

  // public _exitConstraintTable(_: ConstraintTableContext): void {
  //   const namedNode = this.stack.pop() as NamedNode;
  //   const index = this.stack.peek() as Index;
  //   index.setName(namedNode.getName());
  // }

  // public _exitIndexColName(ctx: IndexColNameContext): void {
  //   const namedNode = this.stack.pop() as NamedNode;
  //   const index = this.stack.peek() as Index;
  //   let type = OrderField.ASCENDENT;
  //   if (ctx.K_DESC) type = OrderField.DESCENDENT;
  //   index.addField(new OrderField(namedNode.getName(), type));
  // }

  // public _exitReferenceTable(_: ReferenceTableContext): void {
  //   const namedNode = this.stack.pop() as NamedNode;
  //   const index = this.stack.pop() as Index;
  //   const fk = this.stack.peek() as ForeignKey;
  //   fk.setTableName(namedNode.getName());
  //   this.stack.push(index);
  // }

  private discard(_node: Node): void {
    // process.stdout.write('Discarding: ' + _node.constructor.name);
    // if (_node instanceof NamedNode) process.stdout.write(' = ' + _node.getName());
    // else console.log();
  }

  // public _enterIdName(ctx: IdNameContext): void {
  //   if (ctx.ID() != null) {
  //     const name = ctx.ID().text;
  //     this.stack.push(new NamedNode(name.substring(1, name.length - 1)));
  //   } else {
  //     this.stack.push(new NamedNode(ctx.NAME().text));
  //   }
  // }
}
