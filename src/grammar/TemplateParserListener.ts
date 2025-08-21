// Generated from src/grammar/TemplateParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { TemplateContext } from "./TemplateParser";
import { StatementContext } from "./TemplateParser";
import { BlockContext } from "./TemplateParser";
import { TableIfStmtContext } from "./TemplateParser";
import { TableExistsStmtContext } from "./TemplateParser";
import { TableEachStmtContext } from "./TemplateParser";
import { TableElseIfStmtContext } from "./TemplateParser";
import { TableElseExistsStmtContext } from "./TemplateParser";
import { TableElseEachStmtContext } from "./TemplateParser";
import { TableElseEndStmtContext } from "./TemplateParser";
import { TableElseStmtContext } from "./TemplateParser";
import { TableElseCondEndStmtContext } from "./TemplateParser";
import { TableElseCondStmtContext } from "./TemplateParser";
import { InheritedIfStmtContext } from "./TemplateParser";
import { InheritedExistsStmtContext } from "./TemplateParser";
import { InheritedEachStmtContext } from "./TemplateParser";
import { InheritedElseIfStmtContext } from "./TemplateParser";
import { InheritedElseExistsStmtContext } from "./TemplateParser";
import { InheritedElseEachStmtContext } from "./TemplateParser";
import { InheritedElseEndStmtContext } from "./TemplateParser";
import { InheritedElseStmtContext } from "./TemplateParser";
import { InheritedElseCondEndStmtContext } from "./TemplateParser";
import { InheritedElseCondStmtContext } from "./TemplateParser";
import { ReferenceIfStmtContext } from "./TemplateParser";
import { ReferenceExistsStmtContext } from "./TemplateParser";
import { ReferenceEachStmtContext } from "./TemplateParser";
import { ReferenceElseIfStmtContext } from "./TemplateParser";
import { ReferenceElseExistsStmtContext } from "./TemplateParser";
import { ReferenceElseEachStmtContext } from "./TemplateParser";
import { ReferenceElseEndStmtContext } from "./TemplateParser";
import { ReferenceElseStmtContext } from "./TemplateParser";
import { ReferenceElseCondEndStmtContext } from "./TemplateParser";
import { ReferenceElseCondStmtContext } from "./TemplateParser";
import { FieldIfStmtContext } from "./TemplateParser";
import { FieldExistsStmtContext } from "./TemplateParser";
import { FieldMatchStmtContext } from "./TemplateParser";
import { FieldContainsStmtContext } from "./TemplateParser";
import { FieldEachStmtContext } from "./TemplateParser";
import { FieldElseIfStmtContext } from "./TemplateParser";
import { FieldElseExistsStmtContext } from "./TemplateParser";
import { FieldElseMatchStmtContext } from "./TemplateParser";
import { FieldElseContainsStmtContext } from "./TemplateParser";
import { FieldElseEachStmtContext } from "./TemplateParser";
import { FieldElseEndStmtContext } from "./TemplateParser";
import { FieldElseStmtContext } from "./TemplateParser";
import { FieldElseCondEndStmtContext } from "./TemplateParser";
import { FieldElseCondStmtContext } from "./TemplateParser";
import { DescriptorIfStmtContext } from "./TemplateParser";
import { DescriptorMatchStmtContext } from "./TemplateParser";
import { DescriptorContainsStmtContext } from "./TemplateParser";
import { DescriptorEachStmtContext } from "./TemplateParser";
import { DescriptorElseIfStmtContext } from "./TemplateParser";
import { DescriptorElseMatchStmtContext } from "./TemplateParser";
import { DescriptorElseContainsStmtContext } from "./TemplateParser";
import { DescriptorElseEachStmtContext } from "./TemplateParser";
import { DescriptorElseEndStmtContext } from "./TemplateParser";
import { DescriptorElseStmtContext } from "./TemplateParser";
import { DescriptorElseCondEndStmtContext } from "./TemplateParser";
import { DescriptorElseCondStmtContext } from "./TemplateParser";
import { IndexIfStmtContext } from "./TemplateParser";
import { IndexEachStmtContext } from "./TemplateParser";
import { IndexElseIfStmtContext } from "./TemplateParser";
import { IndexElseEachStmtContext } from "./TemplateParser";
import { IndexElseEndStmtContext } from "./TemplateParser";
import { IndexElseStmtContext } from "./TemplateParser";
import { IndexElseCondEndStmtContext } from "./TemplateParser";
import { UniqueIfStmtContext } from "./TemplateParser";
import { UniqueEachStmtContext } from "./TemplateParser";
import { UniqueElseIfStmtContext } from "./TemplateParser";
import { UniqueElseEachStmtContext } from "./TemplateParser";
import { UniqueElseEndStmtContext } from "./TemplateParser";
import { UniqueElseStmtContext } from "./TemplateParser";
import { UniqueElseCondEndStmtContext } from "./TemplateParser";
import { PrimaryIfStmtContext } from "./TemplateParser";
import { PrimaryEachStmtContext } from "./TemplateParser";
import { PrimaryElseIfStmtContext } from "./TemplateParser";
import { PrimaryElseEachStmtContext } from "./TemplateParser";
import { PrimaryElseEndStmtContext } from "./TemplateParser";
import { PrimaryElseStmtContext } from "./TemplateParser";
import { PrimaryElseCondEndStmtContext } from "./TemplateParser";
import { ConstraintIfStmtContext } from "./TemplateParser";
import { ConstraintEachStmtContext } from "./TemplateParser";
import { ConstraintElseIfStmtContext } from "./TemplateParser";
import { ConstraintElseEachStmtContext } from "./TemplateParser";
import { ConstraintElseEndStmtContext } from "./TemplateParser";
import { ConstraintElseStmtContext } from "./TemplateParser";
import { ConstraintElseCondEndStmtContext } from "./TemplateParser";
import { ForeignIfStmtContext } from "./TemplateParser";
import { ForeignEachStmtContext } from "./TemplateParser";
import { ForeignElseIfStmtContext } from "./TemplateParser";
import { ForeignElseEachStmtContext } from "./TemplateParser";
import { ForeignElseEndStmtContext } from "./TemplateParser";
import { ForeignElseStmtContext } from "./TemplateParser";
import { ForeignElseCondEndStmtContext } from "./TemplateParser";
import { ConstantContext } from "./TemplateParser";
import { TableStmtContext } from "./TemplateParser";
import { TablePropsContext } from "./TemplateParser";
import { TablePropContext } from "./TemplateParser";
import { FieldStmtContext } from "./TemplateParser";
import { FieldPropsContext } from "./TemplateParser";
import { FieldPropContext } from "./TemplateParser";
import { IndexNameStmtContext } from "./TemplateParser";
import { UniqueNameStmtContext } from "./TemplateParser";
import { PrimaryNameStmtContext } from "./TemplateParser";
import { ConstraintNameStmtContext } from "./TemplateParser";
import { ForeignNameStmtContext } from "./TemplateParser";
import { TextContext } from "./TemplateParser";
import { TableLevelContext } from "./TemplateParser";
import { FieldLevelContext } from "./TemplateParser";
import { RegexContext } from "./TemplateParser";
import { WordContext } from "./TemplateParser";
import { TableConditionContext } from "./TemplateParser";
import { FieldConditionContext } from "./TemplateParser";
import { IndexConditionContext } from "./TemplateParser";
import { ConstraintConditionContext } from "./TemplateParser";
import { ConditionContext } from "./TemplateParser";
import { AnyConditionContext } from "./TemplateParser";
import { PriorityConditionContext } from "./TemplateParser";
import { OrConditionContext } from "./TemplateParser";
import { AndConditionContext } from "./TemplateParser";
import { ExpressionContext } from "./TemplateParser";
import { AttributeContext } from "./TemplateParser";
import { PropertyContext } from "./TemplateParser";
import { TypeContext } from "./TemplateParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TemplateParser`.
 */
export interface TemplateParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TemplateParser.template`.
	 * @param ctx the parse tree
	 */
	enterTemplate?: (ctx: TemplateContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.template`.
	 * @param ctx the parse tree
	 */
	exitTemplate?: (ctx: TemplateContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.tableIfStmt`.
	 * @param ctx the parse tree
	 */
	enterTableIfStmt?: (ctx: TableIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.tableIfStmt`.
	 * @param ctx the parse tree
	 */
	exitTableIfStmt?: (ctx: TableIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.tableExistsStmt`.
	 * @param ctx the parse tree
	 */
	enterTableExistsStmt?: (ctx: TableExistsStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.tableExistsStmt`.
	 * @param ctx the parse tree
	 */
	exitTableExistsStmt?: (ctx: TableExistsStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.tableEachStmt`.
	 * @param ctx the parse tree
	 */
	enterTableEachStmt?: (ctx: TableEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.tableEachStmt`.
	 * @param ctx the parse tree
	 */
	exitTableEachStmt?: (ctx: TableEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.tableElseIfStmt`.
	 * @param ctx the parse tree
	 */
	enterTableElseIfStmt?: (ctx: TableElseIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.tableElseIfStmt`.
	 * @param ctx the parse tree
	 */
	exitTableElseIfStmt?: (ctx: TableElseIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.tableElseExistsStmt`.
	 * @param ctx the parse tree
	 */
	enterTableElseExistsStmt?: (ctx: TableElseExistsStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.tableElseExistsStmt`.
	 * @param ctx the parse tree
	 */
	exitTableElseExistsStmt?: (ctx: TableElseExistsStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.tableElseEachStmt`.
	 * @param ctx the parse tree
	 */
	enterTableElseEachStmt?: (ctx: TableElseEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.tableElseEachStmt`.
	 * @param ctx the parse tree
	 */
	exitTableElseEachStmt?: (ctx: TableElseEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.tableElseEndStmt`.
	 * @param ctx the parse tree
	 */
	enterTableElseEndStmt?: (ctx: TableElseEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.tableElseEndStmt`.
	 * @param ctx the parse tree
	 */
	exitTableElseEndStmt?: (ctx: TableElseEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.tableElseStmt`.
	 * @param ctx the parse tree
	 */
	enterTableElseStmt?: (ctx: TableElseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.tableElseStmt`.
	 * @param ctx the parse tree
	 */
	exitTableElseStmt?: (ctx: TableElseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.tableElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	enterTableElseCondEndStmt?: (ctx: TableElseCondEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.tableElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	exitTableElseCondEndStmt?: (ctx: TableElseCondEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.tableElseCondStmt`.
	 * @param ctx the parse tree
	 */
	enterTableElseCondStmt?: (ctx: TableElseCondStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.tableElseCondStmt`.
	 * @param ctx the parse tree
	 */
	exitTableElseCondStmt?: (ctx: TableElseCondStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.inheritedIfStmt`.
	 * @param ctx the parse tree
	 */
	enterInheritedIfStmt?: (ctx: InheritedIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.inheritedIfStmt`.
	 * @param ctx the parse tree
	 */
	exitInheritedIfStmt?: (ctx: InheritedIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.inheritedExistsStmt`.
	 * @param ctx the parse tree
	 */
	enterInheritedExistsStmt?: (ctx: InheritedExistsStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.inheritedExistsStmt`.
	 * @param ctx the parse tree
	 */
	exitInheritedExistsStmt?: (ctx: InheritedExistsStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.inheritedEachStmt`.
	 * @param ctx the parse tree
	 */
	enterInheritedEachStmt?: (ctx: InheritedEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.inheritedEachStmt`.
	 * @param ctx the parse tree
	 */
	exitInheritedEachStmt?: (ctx: InheritedEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.inheritedElseIfStmt`.
	 * @param ctx the parse tree
	 */
	enterInheritedElseIfStmt?: (ctx: InheritedElseIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.inheritedElseIfStmt`.
	 * @param ctx the parse tree
	 */
	exitInheritedElseIfStmt?: (ctx: InheritedElseIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.inheritedElseExistsStmt`.
	 * @param ctx the parse tree
	 */
	enterInheritedElseExistsStmt?: (ctx: InheritedElseExistsStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.inheritedElseExistsStmt`.
	 * @param ctx the parse tree
	 */
	exitInheritedElseExistsStmt?: (ctx: InheritedElseExistsStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.inheritedElseEachStmt`.
	 * @param ctx the parse tree
	 */
	enterInheritedElseEachStmt?: (ctx: InheritedElseEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.inheritedElseEachStmt`.
	 * @param ctx the parse tree
	 */
	exitInheritedElseEachStmt?: (ctx: InheritedElseEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.inheritedElseEndStmt`.
	 * @param ctx the parse tree
	 */
	enterInheritedElseEndStmt?: (ctx: InheritedElseEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.inheritedElseEndStmt`.
	 * @param ctx the parse tree
	 */
	exitInheritedElseEndStmt?: (ctx: InheritedElseEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.inheritedElseStmt`.
	 * @param ctx the parse tree
	 */
	enterInheritedElseStmt?: (ctx: InheritedElseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.inheritedElseStmt`.
	 * @param ctx the parse tree
	 */
	exitInheritedElseStmt?: (ctx: InheritedElseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.inheritedElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	enterInheritedElseCondEndStmt?: (ctx: InheritedElseCondEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.inheritedElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	exitInheritedElseCondEndStmt?: (ctx: InheritedElseCondEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.inheritedElseCondStmt`.
	 * @param ctx the parse tree
	 */
	enterInheritedElseCondStmt?: (ctx: InheritedElseCondStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.inheritedElseCondStmt`.
	 * @param ctx the parse tree
	 */
	exitInheritedElseCondStmt?: (ctx: InheritedElseCondStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.referenceIfStmt`.
	 * @param ctx the parse tree
	 */
	enterReferenceIfStmt?: (ctx: ReferenceIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.referenceIfStmt`.
	 * @param ctx the parse tree
	 */
	exitReferenceIfStmt?: (ctx: ReferenceIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.referenceExistsStmt`.
	 * @param ctx the parse tree
	 */
	enterReferenceExistsStmt?: (ctx: ReferenceExistsStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.referenceExistsStmt`.
	 * @param ctx the parse tree
	 */
	exitReferenceExistsStmt?: (ctx: ReferenceExistsStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.referenceEachStmt`.
	 * @param ctx the parse tree
	 */
	enterReferenceEachStmt?: (ctx: ReferenceEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.referenceEachStmt`.
	 * @param ctx the parse tree
	 */
	exitReferenceEachStmt?: (ctx: ReferenceEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.referenceElseIfStmt`.
	 * @param ctx the parse tree
	 */
	enterReferenceElseIfStmt?: (ctx: ReferenceElseIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.referenceElseIfStmt`.
	 * @param ctx the parse tree
	 */
	exitReferenceElseIfStmt?: (ctx: ReferenceElseIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.referenceElseExistsStmt`.
	 * @param ctx the parse tree
	 */
	enterReferenceElseExistsStmt?: (ctx: ReferenceElseExistsStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.referenceElseExistsStmt`.
	 * @param ctx the parse tree
	 */
	exitReferenceElseExistsStmt?: (ctx: ReferenceElseExistsStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.referenceElseEachStmt`.
	 * @param ctx the parse tree
	 */
	enterReferenceElseEachStmt?: (ctx: ReferenceElseEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.referenceElseEachStmt`.
	 * @param ctx the parse tree
	 */
	exitReferenceElseEachStmt?: (ctx: ReferenceElseEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.referenceElseEndStmt`.
	 * @param ctx the parse tree
	 */
	enterReferenceElseEndStmt?: (ctx: ReferenceElseEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.referenceElseEndStmt`.
	 * @param ctx the parse tree
	 */
	exitReferenceElseEndStmt?: (ctx: ReferenceElseEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.referenceElseStmt`.
	 * @param ctx the parse tree
	 */
	enterReferenceElseStmt?: (ctx: ReferenceElseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.referenceElseStmt`.
	 * @param ctx the parse tree
	 */
	exitReferenceElseStmt?: (ctx: ReferenceElseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.referenceElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	enterReferenceElseCondEndStmt?: (ctx: ReferenceElseCondEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.referenceElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	exitReferenceElseCondEndStmt?: (ctx: ReferenceElseCondEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.referenceElseCondStmt`.
	 * @param ctx the parse tree
	 */
	enterReferenceElseCondStmt?: (ctx: ReferenceElseCondStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.referenceElseCondStmt`.
	 * @param ctx the parse tree
	 */
	exitReferenceElseCondStmt?: (ctx: ReferenceElseCondStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldIfStmt`.
	 * @param ctx the parse tree
	 */
	enterFieldIfStmt?: (ctx: FieldIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldIfStmt`.
	 * @param ctx the parse tree
	 */
	exitFieldIfStmt?: (ctx: FieldIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldExistsStmt`.
	 * @param ctx the parse tree
	 */
	enterFieldExistsStmt?: (ctx: FieldExistsStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldExistsStmt`.
	 * @param ctx the parse tree
	 */
	exitFieldExistsStmt?: (ctx: FieldExistsStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldMatchStmt`.
	 * @param ctx the parse tree
	 */
	enterFieldMatchStmt?: (ctx: FieldMatchStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldMatchStmt`.
	 * @param ctx the parse tree
	 */
	exitFieldMatchStmt?: (ctx: FieldMatchStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldContainsStmt`.
	 * @param ctx the parse tree
	 */
	enterFieldContainsStmt?: (ctx: FieldContainsStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldContainsStmt`.
	 * @param ctx the parse tree
	 */
	exitFieldContainsStmt?: (ctx: FieldContainsStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldEachStmt`.
	 * @param ctx the parse tree
	 */
	enterFieldEachStmt?: (ctx: FieldEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldEachStmt`.
	 * @param ctx the parse tree
	 */
	exitFieldEachStmt?: (ctx: FieldEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldElseIfStmt`.
	 * @param ctx the parse tree
	 */
	enterFieldElseIfStmt?: (ctx: FieldElseIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldElseIfStmt`.
	 * @param ctx the parse tree
	 */
	exitFieldElseIfStmt?: (ctx: FieldElseIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldElseExistsStmt`.
	 * @param ctx the parse tree
	 */
	enterFieldElseExistsStmt?: (ctx: FieldElseExistsStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldElseExistsStmt`.
	 * @param ctx the parse tree
	 */
	exitFieldElseExistsStmt?: (ctx: FieldElseExistsStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldElseMatchStmt`.
	 * @param ctx the parse tree
	 */
	enterFieldElseMatchStmt?: (ctx: FieldElseMatchStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldElseMatchStmt`.
	 * @param ctx the parse tree
	 */
	exitFieldElseMatchStmt?: (ctx: FieldElseMatchStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldElseContainsStmt`.
	 * @param ctx the parse tree
	 */
	enterFieldElseContainsStmt?: (ctx: FieldElseContainsStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldElseContainsStmt`.
	 * @param ctx the parse tree
	 */
	exitFieldElseContainsStmt?: (ctx: FieldElseContainsStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldElseEachStmt`.
	 * @param ctx the parse tree
	 */
	enterFieldElseEachStmt?: (ctx: FieldElseEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldElseEachStmt`.
	 * @param ctx the parse tree
	 */
	exitFieldElseEachStmt?: (ctx: FieldElseEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldElseEndStmt`.
	 * @param ctx the parse tree
	 */
	enterFieldElseEndStmt?: (ctx: FieldElseEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldElseEndStmt`.
	 * @param ctx the parse tree
	 */
	exitFieldElseEndStmt?: (ctx: FieldElseEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldElseStmt`.
	 * @param ctx the parse tree
	 */
	enterFieldElseStmt?: (ctx: FieldElseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldElseStmt`.
	 * @param ctx the parse tree
	 */
	exitFieldElseStmt?: (ctx: FieldElseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	enterFieldElseCondEndStmt?: (ctx: FieldElseCondEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	exitFieldElseCondEndStmt?: (ctx: FieldElseCondEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldElseCondStmt`.
	 * @param ctx the parse tree
	 */
	enterFieldElseCondStmt?: (ctx: FieldElseCondStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldElseCondStmt`.
	 * @param ctx the parse tree
	 */
	exitFieldElseCondStmt?: (ctx: FieldElseCondStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.descriptorIfStmt`.
	 * @param ctx the parse tree
	 */
	enterDescriptorIfStmt?: (ctx: DescriptorIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.descriptorIfStmt`.
	 * @param ctx the parse tree
	 */
	exitDescriptorIfStmt?: (ctx: DescriptorIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.descriptorMatchStmt`.
	 * @param ctx the parse tree
	 */
	enterDescriptorMatchStmt?: (ctx: DescriptorMatchStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.descriptorMatchStmt`.
	 * @param ctx the parse tree
	 */
	exitDescriptorMatchStmt?: (ctx: DescriptorMatchStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.descriptorContainsStmt`.
	 * @param ctx the parse tree
	 */
	enterDescriptorContainsStmt?: (ctx: DescriptorContainsStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.descriptorContainsStmt`.
	 * @param ctx the parse tree
	 */
	exitDescriptorContainsStmt?: (ctx: DescriptorContainsStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.descriptorEachStmt`.
	 * @param ctx the parse tree
	 */
	enterDescriptorEachStmt?: (ctx: DescriptorEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.descriptorEachStmt`.
	 * @param ctx the parse tree
	 */
	exitDescriptorEachStmt?: (ctx: DescriptorEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.descriptorElseIfStmt`.
	 * @param ctx the parse tree
	 */
	enterDescriptorElseIfStmt?: (ctx: DescriptorElseIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.descriptorElseIfStmt`.
	 * @param ctx the parse tree
	 */
	exitDescriptorElseIfStmt?: (ctx: DescriptorElseIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.descriptorElseMatchStmt`.
	 * @param ctx the parse tree
	 */
	enterDescriptorElseMatchStmt?: (ctx: DescriptorElseMatchStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.descriptorElseMatchStmt`.
	 * @param ctx the parse tree
	 */
	exitDescriptorElseMatchStmt?: (ctx: DescriptorElseMatchStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.descriptorElseContainsStmt`.
	 * @param ctx the parse tree
	 */
	enterDescriptorElseContainsStmt?: (ctx: DescriptorElseContainsStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.descriptorElseContainsStmt`.
	 * @param ctx the parse tree
	 */
	exitDescriptorElseContainsStmt?: (ctx: DescriptorElseContainsStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.descriptorElseEachStmt`.
	 * @param ctx the parse tree
	 */
	enterDescriptorElseEachStmt?: (ctx: DescriptorElseEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.descriptorElseEachStmt`.
	 * @param ctx the parse tree
	 */
	exitDescriptorElseEachStmt?: (ctx: DescriptorElseEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.descriptorElseEndStmt`.
	 * @param ctx the parse tree
	 */
	enterDescriptorElseEndStmt?: (ctx: DescriptorElseEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.descriptorElseEndStmt`.
	 * @param ctx the parse tree
	 */
	exitDescriptorElseEndStmt?: (ctx: DescriptorElseEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.descriptorElseStmt`.
	 * @param ctx the parse tree
	 */
	enterDescriptorElseStmt?: (ctx: DescriptorElseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.descriptorElseStmt`.
	 * @param ctx the parse tree
	 */
	exitDescriptorElseStmt?: (ctx: DescriptorElseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.descriptorElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	enterDescriptorElseCondEndStmt?: (ctx: DescriptorElseCondEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.descriptorElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	exitDescriptorElseCondEndStmt?: (ctx: DescriptorElseCondEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.descriptorElseCondStmt`.
	 * @param ctx the parse tree
	 */
	enterDescriptorElseCondStmt?: (ctx: DescriptorElseCondStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.descriptorElseCondStmt`.
	 * @param ctx the parse tree
	 */
	exitDescriptorElseCondStmt?: (ctx: DescriptorElseCondStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.indexIfStmt`.
	 * @param ctx the parse tree
	 */
	enterIndexIfStmt?: (ctx: IndexIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.indexIfStmt`.
	 * @param ctx the parse tree
	 */
	exitIndexIfStmt?: (ctx: IndexIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.indexEachStmt`.
	 * @param ctx the parse tree
	 */
	enterIndexEachStmt?: (ctx: IndexEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.indexEachStmt`.
	 * @param ctx the parse tree
	 */
	exitIndexEachStmt?: (ctx: IndexEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.indexElseIfStmt`.
	 * @param ctx the parse tree
	 */
	enterIndexElseIfStmt?: (ctx: IndexElseIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.indexElseIfStmt`.
	 * @param ctx the parse tree
	 */
	exitIndexElseIfStmt?: (ctx: IndexElseIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.indexElseEachStmt`.
	 * @param ctx the parse tree
	 */
	enterIndexElseEachStmt?: (ctx: IndexElseEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.indexElseEachStmt`.
	 * @param ctx the parse tree
	 */
	exitIndexElseEachStmt?: (ctx: IndexElseEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.indexElseEndStmt`.
	 * @param ctx the parse tree
	 */
	enterIndexElseEndStmt?: (ctx: IndexElseEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.indexElseEndStmt`.
	 * @param ctx the parse tree
	 */
	exitIndexElseEndStmt?: (ctx: IndexElseEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.indexElseStmt`.
	 * @param ctx the parse tree
	 */
	enterIndexElseStmt?: (ctx: IndexElseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.indexElseStmt`.
	 * @param ctx the parse tree
	 */
	exitIndexElseStmt?: (ctx: IndexElseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.indexElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	enterIndexElseCondEndStmt?: (ctx: IndexElseCondEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.indexElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	exitIndexElseCondEndStmt?: (ctx: IndexElseCondEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.uniqueIfStmt`.
	 * @param ctx the parse tree
	 */
	enterUniqueIfStmt?: (ctx: UniqueIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.uniqueIfStmt`.
	 * @param ctx the parse tree
	 */
	exitUniqueIfStmt?: (ctx: UniqueIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.uniqueEachStmt`.
	 * @param ctx the parse tree
	 */
	enterUniqueEachStmt?: (ctx: UniqueEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.uniqueEachStmt`.
	 * @param ctx the parse tree
	 */
	exitUniqueEachStmt?: (ctx: UniqueEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.uniqueElseIfStmt`.
	 * @param ctx the parse tree
	 */
	enterUniqueElseIfStmt?: (ctx: UniqueElseIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.uniqueElseIfStmt`.
	 * @param ctx the parse tree
	 */
	exitUniqueElseIfStmt?: (ctx: UniqueElseIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.uniqueElseEachStmt`.
	 * @param ctx the parse tree
	 */
	enterUniqueElseEachStmt?: (ctx: UniqueElseEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.uniqueElseEachStmt`.
	 * @param ctx the parse tree
	 */
	exitUniqueElseEachStmt?: (ctx: UniqueElseEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.uniqueElseEndStmt`.
	 * @param ctx the parse tree
	 */
	enterUniqueElseEndStmt?: (ctx: UniqueElseEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.uniqueElseEndStmt`.
	 * @param ctx the parse tree
	 */
	exitUniqueElseEndStmt?: (ctx: UniqueElseEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.uniqueElseStmt`.
	 * @param ctx the parse tree
	 */
	enterUniqueElseStmt?: (ctx: UniqueElseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.uniqueElseStmt`.
	 * @param ctx the parse tree
	 */
	exitUniqueElseStmt?: (ctx: UniqueElseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.uniqueElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	enterUniqueElseCondEndStmt?: (ctx: UniqueElseCondEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.uniqueElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	exitUniqueElseCondEndStmt?: (ctx: UniqueElseCondEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.primaryIfStmt`.
	 * @param ctx the parse tree
	 */
	enterPrimaryIfStmt?: (ctx: PrimaryIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.primaryIfStmt`.
	 * @param ctx the parse tree
	 */
	exitPrimaryIfStmt?: (ctx: PrimaryIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.primaryEachStmt`.
	 * @param ctx the parse tree
	 */
	enterPrimaryEachStmt?: (ctx: PrimaryEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.primaryEachStmt`.
	 * @param ctx the parse tree
	 */
	exitPrimaryEachStmt?: (ctx: PrimaryEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.primaryElseIfStmt`.
	 * @param ctx the parse tree
	 */
	enterPrimaryElseIfStmt?: (ctx: PrimaryElseIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.primaryElseIfStmt`.
	 * @param ctx the parse tree
	 */
	exitPrimaryElseIfStmt?: (ctx: PrimaryElseIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.primaryElseEachStmt`.
	 * @param ctx the parse tree
	 */
	enterPrimaryElseEachStmt?: (ctx: PrimaryElseEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.primaryElseEachStmt`.
	 * @param ctx the parse tree
	 */
	exitPrimaryElseEachStmt?: (ctx: PrimaryElseEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.primaryElseEndStmt`.
	 * @param ctx the parse tree
	 */
	enterPrimaryElseEndStmt?: (ctx: PrimaryElseEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.primaryElseEndStmt`.
	 * @param ctx the parse tree
	 */
	exitPrimaryElseEndStmt?: (ctx: PrimaryElseEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.primaryElseStmt`.
	 * @param ctx the parse tree
	 */
	enterPrimaryElseStmt?: (ctx: PrimaryElseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.primaryElseStmt`.
	 * @param ctx the parse tree
	 */
	exitPrimaryElseStmt?: (ctx: PrimaryElseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.primaryElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	enterPrimaryElseCondEndStmt?: (ctx: PrimaryElseCondEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.primaryElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	exitPrimaryElseCondEndStmt?: (ctx: PrimaryElseCondEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.constraintIfStmt`.
	 * @param ctx the parse tree
	 */
	enterConstraintIfStmt?: (ctx: ConstraintIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.constraintIfStmt`.
	 * @param ctx the parse tree
	 */
	exitConstraintIfStmt?: (ctx: ConstraintIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.constraintEachStmt`.
	 * @param ctx the parse tree
	 */
	enterConstraintEachStmt?: (ctx: ConstraintEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.constraintEachStmt`.
	 * @param ctx the parse tree
	 */
	exitConstraintEachStmt?: (ctx: ConstraintEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.constraintElseIfStmt`.
	 * @param ctx the parse tree
	 */
	enterConstraintElseIfStmt?: (ctx: ConstraintElseIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.constraintElseIfStmt`.
	 * @param ctx the parse tree
	 */
	exitConstraintElseIfStmt?: (ctx: ConstraintElseIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.constraintElseEachStmt`.
	 * @param ctx the parse tree
	 */
	enterConstraintElseEachStmt?: (ctx: ConstraintElseEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.constraintElseEachStmt`.
	 * @param ctx the parse tree
	 */
	exitConstraintElseEachStmt?: (ctx: ConstraintElseEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.constraintElseEndStmt`.
	 * @param ctx the parse tree
	 */
	enterConstraintElseEndStmt?: (ctx: ConstraintElseEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.constraintElseEndStmt`.
	 * @param ctx the parse tree
	 */
	exitConstraintElseEndStmt?: (ctx: ConstraintElseEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.constraintElseStmt`.
	 * @param ctx the parse tree
	 */
	enterConstraintElseStmt?: (ctx: ConstraintElseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.constraintElseStmt`.
	 * @param ctx the parse tree
	 */
	exitConstraintElseStmt?: (ctx: ConstraintElseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.constraintElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	enterConstraintElseCondEndStmt?: (ctx: ConstraintElseCondEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.constraintElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	exitConstraintElseCondEndStmt?: (ctx: ConstraintElseCondEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.foreignIfStmt`.
	 * @param ctx the parse tree
	 */
	enterForeignIfStmt?: (ctx: ForeignIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.foreignIfStmt`.
	 * @param ctx the parse tree
	 */
	exitForeignIfStmt?: (ctx: ForeignIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.foreignEachStmt`.
	 * @param ctx the parse tree
	 */
	enterForeignEachStmt?: (ctx: ForeignEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.foreignEachStmt`.
	 * @param ctx the parse tree
	 */
	exitForeignEachStmt?: (ctx: ForeignEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.foreignElseIfStmt`.
	 * @param ctx the parse tree
	 */
	enterForeignElseIfStmt?: (ctx: ForeignElseIfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.foreignElseIfStmt`.
	 * @param ctx the parse tree
	 */
	exitForeignElseIfStmt?: (ctx: ForeignElseIfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.foreignElseEachStmt`.
	 * @param ctx the parse tree
	 */
	enterForeignElseEachStmt?: (ctx: ForeignElseEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.foreignElseEachStmt`.
	 * @param ctx the parse tree
	 */
	exitForeignElseEachStmt?: (ctx: ForeignElseEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.foreignElseEndStmt`.
	 * @param ctx the parse tree
	 */
	enterForeignElseEndStmt?: (ctx: ForeignElseEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.foreignElseEndStmt`.
	 * @param ctx the parse tree
	 */
	exitForeignElseEndStmt?: (ctx: ForeignElseEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.foreignElseStmt`.
	 * @param ctx the parse tree
	 */
	enterForeignElseStmt?: (ctx: ForeignElseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.foreignElseStmt`.
	 * @param ctx the parse tree
	 */
	exitForeignElseStmt?: (ctx: ForeignElseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.foreignElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	enterForeignElseCondEndStmt?: (ctx: ForeignElseCondEndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.foreignElseCondEndStmt`.
	 * @param ctx the parse tree
	 */
	exitForeignElseCondEndStmt?: (ctx: ForeignElseCondEndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.tableStmt`.
	 * @param ctx the parse tree
	 */
	enterTableStmt?: (ctx: TableStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.tableStmt`.
	 * @param ctx the parse tree
	 */
	exitTableStmt?: (ctx: TableStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.tableProps`.
	 * @param ctx the parse tree
	 */
	enterTableProps?: (ctx: TablePropsContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.tableProps`.
	 * @param ctx the parse tree
	 */
	exitTableProps?: (ctx: TablePropsContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.tableProp`.
	 * @param ctx the parse tree
	 */
	enterTableProp?: (ctx: TablePropContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.tableProp`.
	 * @param ctx the parse tree
	 */
	exitTableProp?: (ctx: TablePropContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldStmt`.
	 * @param ctx the parse tree
	 */
	enterFieldStmt?: (ctx: FieldStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldStmt`.
	 * @param ctx the parse tree
	 */
	exitFieldStmt?: (ctx: FieldStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldProps`.
	 * @param ctx the parse tree
	 */
	enterFieldProps?: (ctx: FieldPropsContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldProps`.
	 * @param ctx the parse tree
	 */
	exitFieldProps?: (ctx: FieldPropsContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldProp`.
	 * @param ctx the parse tree
	 */
	enterFieldProp?: (ctx: FieldPropContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldProp`.
	 * @param ctx the parse tree
	 */
	exitFieldProp?: (ctx: FieldPropContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.indexNameStmt`.
	 * @param ctx the parse tree
	 */
	enterIndexNameStmt?: (ctx: IndexNameStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.indexNameStmt`.
	 * @param ctx the parse tree
	 */
	exitIndexNameStmt?: (ctx: IndexNameStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.uniqueNameStmt`.
	 * @param ctx the parse tree
	 */
	enterUniqueNameStmt?: (ctx: UniqueNameStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.uniqueNameStmt`.
	 * @param ctx the parse tree
	 */
	exitUniqueNameStmt?: (ctx: UniqueNameStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.primaryNameStmt`.
	 * @param ctx the parse tree
	 */
	enterPrimaryNameStmt?: (ctx: PrimaryNameStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.primaryNameStmt`.
	 * @param ctx the parse tree
	 */
	exitPrimaryNameStmt?: (ctx: PrimaryNameStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.constraintNameStmt`.
	 * @param ctx the parse tree
	 */
	enterConstraintNameStmt?: (ctx: ConstraintNameStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.constraintNameStmt`.
	 * @param ctx the parse tree
	 */
	exitConstraintNameStmt?: (ctx: ConstraintNameStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.foreignNameStmt`.
	 * @param ctx the parse tree
	 */
	enterForeignNameStmt?: (ctx: ForeignNameStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.foreignNameStmt`.
	 * @param ctx the parse tree
	 */
	exitForeignNameStmt?: (ctx: ForeignNameStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.text`.
	 * @param ctx the parse tree
	 */
	enterText?: (ctx: TextContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.text`.
	 * @param ctx the parse tree
	 */
	exitText?: (ctx: TextContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.tableLevel`.
	 * @param ctx the parse tree
	 */
	enterTableLevel?: (ctx: TableLevelContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.tableLevel`.
	 * @param ctx the parse tree
	 */
	exitTableLevel?: (ctx: TableLevelContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldLevel`.
	 * @param ctx the parse tree
	 */
	enterFieldLevel?: (ctx: FieldLevelContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldLevel`.
	 * @param ctx the parse tree
	 */
	exitFieldLevel?: (ctx: FieldLevelContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.regex`.
	 * @param ctx the parse tree
	 */
	enterRegex?: (ctx: RegexContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.regex`.
	 * @param ctx the parse tree
	 */
	exitRegex?: (ctx: RegexContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.word`.
	 * @param ctx the parse tree
	 */
	enterWord?: (ctx: WordContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.word`.
	 * @param ctx the parse tree
	 */
	exitWord?: (ctx: WordContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.tableCondition`.
	 * @param ctx the parse tree
	 */
	enterTableCondition?: (ctx: TableConditionContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.tableCondition`.
	 * @param ctx the parse tree
	 */
	exitTableCondition?: (ctx: TableConditionContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.fieldCondition`.
	 * @param ctx the parse tree
	 */
	enterFieldCondition?: (ctx: FieldConditionContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.fieldCondition`.
	 * @param ctx the parse tree
	 */
	exitFieldCondition?: (ctx: FieldConditionContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.indexCondition`.
	 * @param ctx the parse tree
	 */
	enterIndexCondition?: (ctx: IndexConditionContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.indexCondition`.
	 * @param ctx the parse tree
	 */
	exitIndexCondition?: (ctx: IndexConditionContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.constraintCondition`.
	 * @param ctx the parse tree
	 */
	enterConstraintCondition?: (ctx: ConstraintConditionContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.constraintCondition`.
	 * @param ctx the parse tree
	 */
	exitConstraintCondition?: (ctx: ConstraintConditionContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.anyCondition`.
	 * @param ctx the parse tree
	 */
	enterAnyCondition?: (ctx: AnyConditionContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.anyCondition`.
	 * @param ctx the parse tree
	 */
	exitAnyCondition?: (ctx: AnyConditionContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.priorityCondition`.
	 * @param ctx the parse tree
	 */
	enterPriorityCondition?: (ctx: PriorityConditionContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.priorityCondition`.
	 * @param ctx the parse tree
	 */
	exitPriorityCondition?: (ctx: PriorityConditionContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.orCondition`.
	 * @param ctx the parse tree
	 */
	enterOrCondition?: (ctx: OrConditionContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.orCondition`.
	 * @param ctx the parse tree
	 */
	exitOrCondition?: (ctx: OrConditionContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.andCondition`.
	 * @param ctx the parse tree
	 */
	enterAndCondition?: (ctx: AndConditionContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.andCondition`.
	 * @param ctx the parse tree
	 */
	exitAndCondition?: (ctx: AndConditionContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `TemplateParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `TemplateParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
}

