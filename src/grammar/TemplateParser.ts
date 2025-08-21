// Generated from src/grammar/TemplateParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { TemplateParserListener } from "./TemplateParserListener";

export class TemplateParser extends Parser {
	public static readonly OPEN = 1;
	public static readonly TEXT = 2;
	public static readonly CLOSE = 3;
	public static readonly K_ALL = 4;
	public static readonly K_ARRAY = 5;
	public static readonly K_BIGINT = 6;
	public static readonly K_BLOB = 7;
	public static readonly K_BOOLEAN = 8;
	public static readonly K_CHARS = 9;
	public static readonly K_COMMENT = 10;
	public static readonly K_CONSTRAINT = 11;
	public static readonly K_CONTAINS = 12;
	public static readonly K_COUNT = 13;
	public static readonly K_CURRENCY = 14;
	public static readonly K_DATE = 15;
	public static readonly K_DATETIME = 16;
	public static readonly K_DEFAULT = 17;
	public static readonly K_DESCRIPTION = 18;
	public static readonly K_DESCRIPTOR = 19;
	public static readonly K_DOUBLE = 20;
	public static readonly K_EACH = 21;
	public static readonly K_END = 22;
	public static readonly K_ENUM = 23;
	public static readonly K_EXISTS = 24;
	public static readonly K_FIELD = 25;
	public static readonly K_FLOAT = 26;
	public static readonly K_FOLDER = 27;
	public static readonly K_FOREIGN = 28;
	public static readonly K_GENDER = 29;
	public static readonly K_HEIGHT = 30;
	public static readonly K_HIGH = 31;
	public static readonly K_IF = 32;
	public static readonly K_IMAGE = 33;
	public static readonly K_INDEX = 34;
	public static readonly K_INFO = 35;
	public static readonly K_INHERITED = 36;
	public static readonly K_INTEGER = 37;
	public static readonly K_LENGTH = 38;
	public static readonly K_LETTER = 39;
	public static readonly K_LOW = 40;
	public static readonly K_MASK = 41;
	public static readonly K_MASKED = 42;
	public static readonly K_MATCH = 43;
	public static readonly K_NAME = 44;
	public static readonly K_NORM = 45;
	public static readonly K_NULL = 46;
	public static readonly K_NUMBER = 47;
	public static readonly K_OPTION = 48;
	public static readonly K_PACKAGE = 49;
	public static readonly K_PATH = 50;
	public static readonly K_PLURAL = 51;
	public static readonly K_PRIMARY = 52;
	public static readonly K_RADIO = 53;
	public static readonly K_REFERENCE = 54;
	public static readonly K_REPEATED = 55;
	public static readonly K_SEARCHABLE = 56;
	public static readonly K_SINGULAR = 57;
	public static readonly K_SIZE = 58;
	public static readonly K_STRING = 59;
	public static readonly K_STYLE = 60;
	public static readonly K_TABLE = 61;
	public static readonly K_TEXT = 62;
	public static readonly K_TIME = 63;
	public static readonly K_UNIQUE = 64;
	public static readonly K_UNIX = 65;
	public static readonly K_UNSIGNED = 66;
	public static readonly K_WIDTH = 67;
	public static readonly K_FIRST = 68;
	public static readonly K_FEW_FIELDS = 69;
	public static readonly K_ELSE = 70;
	public static readonly K_ON = 71;
	public static readonly K_DELETE = 72;
	public static readonly K_UPDATE = 73;
	public static readonly K_INSERT = 74;
	public static readonly K_NOID = 75;
	public static readonly MATCH_OPEN = 76;
	public static readonly DOT = 77;
	public static readonly LPAR = 78;
	public static readonly RPAR = 79;
	public static readonly OR = 80;
	public static readonly AND = 81;
	public static readonly WORD = 82;
	public static readonly MATCH_CLOSE = 83;
	public static readonly REGEX = 84;
	public static readonly RULE_template = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_block = 2;
	public static readonly RULE_tableIfStmt = 3;
	public static readonly RULE_tableExistsStmt = 4;
	public static readonly RULE_tableEachStmt = 5;
	public static readonly RULE_tableElseIfStmt = 6;
	public static readonly RULE_tableElseExistsStmt = 7;
	public static readonly RULE_tableElseEachStmt = 8;
	public static readonly RULE_tableElseEndStmt = 9;
	public static readonly RULE_tableElseStmt = 10;
	public static readonly RULE_tableElseCondEndStmt = 11;
	public static readonly RULE_tableElseCondStmt = 12;
	public static readonly RULE_inheritedIfStmt = 13;
	public static readonly RULE_inheritedExistsStmt = 14;
	public static readonly RULE_inheritedEachStmt = 15;
	public static readonly RULE_inheritedElseIfStmt = 16;
	public static readonly RULE_inheritedElseExistsStmt = 17;
	public static readonly RULE_inheritedElseEachStmt = 18;
	public static readonly RULE_inheritedElseEndStmt = 19;
	public static readonly RULE_inheritedElseStmt = 20;
	public static readonly RULE_inheritedElseCondEndStmt = 21;
	public static readonly RULE_inheritedElseCondStmt = 22;
	public static readonly RULE_referenceIfStmt = 23;
	public static readonly RULE_referenceExistsStmt = 24;
	public static readonly RULE_referenceEachStmt = 25;
	public static readonly RULE_referenceElseIfStmt = 26;
	public static readonly RULE_referenceElseExistsStmt = 27;
	public static readonly RULE_referenceElseEachStmt = 28;
	public static readonly RULE_referenceElseEndStmt = 29;
	public static readonly RULE_referenceElseStmt = 30;
	public static readonly RULE_referenceElseCondEndStmt = 31;
	public static readonly RULE_referenceElseCondStmt = 32;
	public static readonly RULE_fieldIfStmt = 33;
	public static readonly RULE_fieldExistsStmt = 34;
	public static readonly RULE_fieldMatchStmt = 35;
	public static readonly RULE_fieldContainsStmt = 36;
	public static readonly RULE_fieldEachStmt = 37;
	public static readonly RULE_fieldElseIfStmt = 38;
	public static readonly RULE_fieldElseExistsStmt = 39;
	public static readonly RULE_fieldElseMatchStmt = 40;
	public static readonly RULE_fieldElseContainsStmt = 41;
	public static readonly RULE_fieldElseEachStmt = 42;
	public static readonly RULE_fieldElseEndStmt = 43;
	public static readonly RULE_fieldElseStmt = 44;
	public static readonly RULE_fieldElseCondEndStmt = 45;
	public static readonly RULE_fieldElseCondStmt = 46;
	public static readonly RULE_descriptorIfStmt = 47;
	public static readonly RULE_descriptorMatchStmt = 48;
	public static readonly RULE_descriptorContainsStmt = 49;
	public static readonly RULE_descriptorEachStmt = 50;
	public static readonly RULE_descriptorElseIfStmt = 51;
	public static readonly RULE_descriptorElseMatchStmt = 52;
	public static readonly RULE_descriptorElseContainsStmt = 53;
	public static readonly RULE_descriptorElseEachStmt = 54;
	public static readonly RULE_descriptorElseEndStmt = 55;
	public static readonly RULE_descriptorElseStmt = 56;
	public static readonly RULE_descriptorElseCondEndStmt = 57;
	public static readonly RULE_descriptorElseCondStmt = 58;
	public static readonly RULE_indexIfStmt = 59;
	public static readonly RULE_indexEachStmt = 60;
	public static readonly RULE_indexElseIfStmt = 61;
	public static readonly RULE_indexElseEachStmt = 62;
	public static readonly RULE_indexElseEndStmt = 63;
	public static readonly RULE_indexElseStmt = 64;
	public static readonly RULE_indexElseCondEndStmt = 65;
	public static readonly RULE_uniqueIfStmt = 66;
	public static readonly RULE_uniqueEachStmt = 67;
	public static readonly RULE_uniqueElseIfStmt = 68;
	public static readonly RULE_uniqueElseEachStmt = 69;
	public static readonly RULE_uniqueElseEndStmt = 70;
	public static readonly RULE_uniqueElseStmt = 71;
	public static readonly RULE_uniqueElseCondEndStmt = 72;
	public static readonly RULE_primaryIfStmt = 73;
	public static readonly RULE_primaryEachStmt = 74;
	public static readonly RULE_primaryElseIfStmt = 75;
	public static readonly RULE_primaryElseEachStmt = 76;
	public static readonly RULE_primaryElseEndStmt = 77;
	public static readonly RULE_primaryElseStmt = 78;
	public static readonly RULE_primaryElseCondEndStmt = 79;
	public static readonly RULE_constraintIfStmt = 80;
	public static readonly RULE_constraintEachStmt = 81;
	public static readonly RULE_constraintElseIfStmt = 82;
	public static readonly RULE_constraintElseEachStmt = 83;
	public static readonly RULE_constraintElseEndStmt = 84;
	public static readonly RULE_constraintElseStmt = 85;
	public static readonly RULE_constraintElseCondEndStmt = 86;
	public static readonly RULE_foreignIfStmt = 87;
	public static readonly RULE_foreignEachStmt = 88;
	public static readonly RULE_foreignElseIfStmt = 89;
	public static readonly RULE_foreignElseEachStmt = 90;
	public static readonly RULE_foreignElseEndStmt = 91;
	public static readonly RULE_foreignElseStmt = 92;
	public static readonly RULE_foreignElseCondEndStmt = 93;
	public static readonly RULE_constant = 94;
	public static readonly RULE_tableStmt = 95;
	public static readonly RULE_tableProps = 96;
	public static readonly RULE_tableProp = 97;
	public static readonly RULE_fieldStmt = 98;
	public static readonly RULE_fieldProps = 99;
	public static readonly RULE_fieldProp = 100;
	public static readonly RULE_indexNameStmt = 101;
	public static readonly RULE_uniqueNameStmt = 102;
	public static readonly RULE_primaryNameStmt = 103;
	public static readonly RULE_constraintNameStmt = 104;
	public static readonly RULE_foreignNameStmt = 105;
	public static readonly RULE_text = 106;
	public static readonly RULE_tableLevel = 107;
	public static readonly RULE_fieldLevel = 108;
	public static readonly RULE_regex = 109;
	public static readonly RULE_word = 110;
	public static readonly RULE_tableCondition = 111;
	public static readonly RULE_fieldCondition = 112;
	public static readonly RULE_indexCondition = 113;
	public static readonly RULE_constraintCondition = 114;
	public static readonly RULE_condition = 115;
	public static readonly RULE_anyCondition = 116;
	public static readonly RULE_priorityCondition = 117;
	public static readonly RULE_orCondition = 118;
	public static readonly RULE_andCondition = 119;
	public static readonly RULE_expression = 120;
	public static readonly RULE_attribute = 121;
	public static readonly RULE_property = 122;
	public static readonly RULE_type = 123;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"template", "statement", "block", "tableIfStmt", "tableExistsStmt", "tableEachStmt", 
		"tableElseIfStmt", "tableElseExistsStmt", "tableElseEachStmt", "tableElseEndStmt", 
		"tableElseStmt", "tableElseCondEndStmt", "tableElseCondStmt", "inheritedIfStmt", 
		"inheritedExistsStmt", "inheritedEachStmt", "inheritedElseIfStmt", "inheritedElseExistsStmt", 
		"inheritedElseEachStmt", "inheritedElseEndStmt", "inheritedElseStmt", 
		"inheritedElseCondEndStmt", "inheritedElseCondStmt", "referenceIfStmt", 
		"referenceExistsStmt", "referenceEachStmt", "referenceElseIfStmt", "referenceElseExistsStmt", 
		"referenceElseEachStmt", "referenceElseEndStmt", "referenceElseStmt", 
		"referenceElseCondEndStmt", "referenceElseCondStmt", "fieldIfStmt", "fieldExistsStmt", 
		"fieldMatchStmt", "fieldContainsStmt", "fieldEachStmt", "fieldElseIfStmt", 
		"fieldElseExistsStmt", "fieldElseMatchStmt", "fieldElseContainsStmt", 
		"fieldElseEachStmt", "fieldElseEndStmt", "fieldElseStmt", "fieldElseCondEndStmt", 
		"fieldElseCondStmt", "descriptorIfStmt", "descriptorMatchStmt", "descriptorContainsStmt", 
		"descriptorEachStmt", "descriptorElseIfStmt", "descriptorElseMatchStmt", 
		"descriptorElseContainsStmt", "descriptorElseEachStmt", "descriptorElseEndStmt", 
		"descriptorElseStmt", "descriptorElseCondEndStmt", "descriptorElseCondStmt", 
		"indexIfStmt", "indexEachStmt", "indexElseIfStmt", "indexElseEachStmt", 
		"indexElseEndStmt", "indexElseStmt", "indexElseCondEndStmt", "uniqueIfStmt", 
		"uniqueEachStmt", "uniqueElseIfStmt", "uniqueElseEachStmt", "uniqueElseEndStmt", 
		"uniqueElseStmt", "uniqueElseCondEndStmt", "primaryIfStmt", "primaryEachStmt", 
		"primaryElseIfStmt", "primaryElseEachStmt", "primaryElseEndStmt", "primaryElseStmt", 
		"primaryElseCondEndStmt", "constraintIfStmt", "constraintEachStmt", "constraintElseIfStmt", 
		"constraintElseEachStmt", "constraintElseEndStmt", "constraintElseStmt", 
		"constraintElseCondEndStmt", "foreignIfStmt", "foreignEachStmt", "foreignElseIfStmt", 
		"foreignElseEachStmt", "foreignElseEndStmt", "foreignElseStmt", "foreignElseCondEndStmt", 
		"constant", "tableStmt", "tableProps", "tableProp", "fieldStmt", "fieldProps", 
		"fieldProp", "indexNameStmt", "uniqueNameStmt", "primaryNameStmt", "constraintNameStmt", 
		"foreignNameStmt", "text", "tableLevel", "fieldLevel", "regex", "word", 
		"tableCondition", "fieldCondition", "indexCondition", "constraintCondition", 
		"condition", "anyCondition", "priorityCondition", "orCondition", "andCondition", 
		"expression", "attribute", "property", "type",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'$['", undefined, "']'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'.'", "'('", undefined, "'|'", "'&'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OPEN", "TEXT", "CLOSE", "K_ALL", "K_ARRAY", "K_BIGINT", "K_BLOB", 
		"K_BOOLEAN", "K_CHARS", "K_COMMENT", "K_CONSTRAINT", "K_CONTAINS", "K_COUNT", 
		"K_CURRENCY", "K_DATE", "K_DATETIME", "K_DEFAULT", "K_DESCRIPTION", "K_DESCRIPTOR", 
		"K_DOUBLE", "K_EACH", "K_END", "K_ENUM", "K_EXISTS", "K_FIELD", "K_FLOAT", 
		"K_FOLDER", "K_FOREIGN", "K_GENDER", "K_HEIGHT", "K_HIGH", "K_IF", "K_IMAGE", 
		"K_INDEX", "K_INFO", "K_INHERITED", "K_INTEGER", "K_LENGTH", "K_LETTER", 
		"K_LOW", "K_MASK", "K_MASKED", "K_MATCH", "K_NAME", "K_NORM", "K_NULL", 
		"K_NUMBER", "K_OPTION", "K_PACKAGE", "K_PATH", "K_PLURAL", "K_PRIMARY", 
		"K_RADIO", "K_REFERENCE", "K_REPEATED", "K_SEARCHABLE", "K_SINGULAR", 
		"K_SIZE", "K_STRING", "K_STYLE", "K_TABLE", "K_TEXT", "K_TIME", "K_UNIQUE", 
		"K_UNIX", "K_UNSIGNED", "K_WIDTH", "K_FIRST", "K_FEW_FIELDS", "K_ELSE", 
		"K_ON", "K_DELETE", "K_UPDATE", "K_INSERT", "K_NOID", "MATCH_OPEN", "DOT", 
		"LPAR", "RPAR", "OR", "AND", "WORD", "MATCH_CLOSE", "REGEX",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TemplateParser._LITERAL_NAMES, TemplateParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TemplateParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "TemplateParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return TemplateParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TemplateParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TemplateParser._ATN, this);
	}
	// @RuleVersion(0)
	public template(): TemplateContext {
		let _localctx: TemplateContext = new TemplateContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TemplateParser.RULE_template);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TemplateParser.OPEN || _la === TemplateParser.TEXT) {
				{
				{
				this.state = 248;
				this.statement();
				}
				}
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 254;
			this.match(TemplateParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TemplateParser.RULE_statement);
		try {
			this.state = 259;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 256;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 257;
				this.constant();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 258;
				this.text();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TemplateParser.RULE_block);
		try {
			this.state = 289;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 261;
				this.tableIfStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 262;
				this.tableExistsStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 263;
				this.tableEachStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 264;
				this.inheritedIfStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 265;
				this.inheritedExistsStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 266;
				this.inheritedEachStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 267;
				this.referenceIfStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 268;
				this.referenceExistsStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 269;
				this.referenceEachStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 270;
				this.fieldIfStmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 271;
				this.fieldExistsStmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 272;
				this.fieldEachStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 273;
				this.fieldMatchStmt();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 274;
				this.fieldContainsStmt();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 275;
				this.descriptorIfStmt();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 276;
				this.descriptorEachStmt();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 277;
				this.descriptorMatchStmt();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 278;
				this.descriptorContainsStmt();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 279;
				this.indexIfStmt();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 280;
				this.indexEachStmt();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 281;
				this.uniqueIfStmt();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 282;
				this.uniqueEachStmt();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 283;
				this.primaryIfStmt();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 284;
				this.primaryEachStmt();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 285;
				this.constraintIfStmt();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 286;
				this.constraintEachStmt();
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 287;
				this.foreignIfStmt();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 288;
				this.foreignEachStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableIfStmt(): TableIfStmtContext {
		let _localctx: TableIfStmtContext = new TableIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TemplateParser.RULE_tableIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this.match(TemplateParser.OPEN);
			this.state = 292;
			this.match(TemplateParser.K_TABLE);
			this.state = 293;
			this.match(TemplateParser.DOT);
			this.state = 294;
			this.match(TemplateParser.K_IF);
			this.state = 295;
			this.match(TemplateParser.LPAR);
			this.state = 296;
			this.tableCondition();
			this.state = 297;
			this.match(TemplateParser.RPAR);
			this.state = 298;
			this.match(TemplateParser.CLOSE);
			this.state = 302;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 299;
					this.statement();
					}
					}
				}
				this.state = 304;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 306;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 305;
				this.tableElseStmt();
				}
				break;
			}
			this.state = 308;
			this.match(TemplateParser.OPEN);
			this.state = 309;
			this.match(TemplateParser.K_TABLE);
			this.state = 310;
			this.match(TemplateParser.DOT);
			this.state = 311;
			this.match(TemplateParser.K_END);
			this.state = 312;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableExistsStmt(): TableExistsStmtContext {
		let _localctx: TableExistsStmtContext = new TableExistsStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, TemplateParser.RULE_tableExistsStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this.match(TemplateParser.OPEN);
			this.state = 315;
			this.match(TemplateParser.K_TABLE);
			this.state = 316;
			this.match(TemplateParser.DOT);
			this.state = 317;
			this.match(TemplateParser.K_EXISTS);
			this.state = 318;
			this.match(TemplateParser.LPAR);
			this.state = 319;
			this.tableCondition();
			this.state = 320;
			this.match(TemplateParser.RPAR);
			this.state = 321;
			this.match(TemplateParser.CLOSE);
			this.state = 325;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 322;
					this.statement();
					}
					}
				}
				this.state = 327;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 329;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 328;
				this.tableElseStmt();
				}
				break;
			}
			this.state = 331;
			this.match(TemplateParser.OPEN);
			this.state = 332;
			this.match(TemplateParser.K_TABLE);
			this.state = 333;
			this.match(TemplateParser.DOT);
			this.state = 334;
			this.match(TemplateParser.K_END);
			this.state = 335;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableEachStmt(): TableEachStmtContext {
		let _localctx: TableEachStmtContext = new TableEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TemplateParser.RULE_tableEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.match(TemplateParser.OPEN);
			this.state = 338;
			this.match(TemplateParser.K_TABLE);
			this.state = 339;
			this.match(TemplateParser.DOT);
			this.state = 340;
			this.match(TemplateParser.K_EACH);
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 341;
				this.match(TemplateParser.LPAR);
				this.state = 342;
				this.tableCondition();
				this.state = 343;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 347;
			this.match(TemplateParser.CLOSE);
			this.state = 351;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 348;
					this.statement();
					}
					}
				}
				this.state = 353;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 354;
			this.match(TemplateParser.OPEN);
			this.state = 355;
			this.match(TemplateParser.K_TABLE);
			this.state = 356;
			this.match(TemplateParser.DOT);
			this.state = 357;
			this.match(TemplateParser.K_END);
			this.state = 358;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableElseIfStmt(): TableElseIfStmtContext {
		let _localctx: TableElseIfStmtContext = new TableElseIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TemplateParser.RULE_tableElseIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.match(TemplateParser.OPEN);
			this.state = 361;
			this.match(TemplateParser.K_TABLE);
			this.state = 362;
			this.match(TemplateParser.DOT);
			this.state = 363;
			this.match(TemplateParser.K_ELSE);
			this.state = 364;
			this.match(TemplateParser.DOT);
			this.state = 365;
			this.match(TemplateParser.K_IF);
			this.state = 366;
			this.match(TemplateParser.LPAR);
			this.state = 367;
			this.tableCondition();
			this.state = 368;
			this.match(TemplateParser.RPAR);
			this.state = 369;
			this.match(TemplateParser.CLOSE);
			this.state = 373;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 370;
					this.statement();
					}
					}
				}
				this.state = 375;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableElseExistsStmt(): TableElseExistsStmtContext {
		let _localctx: TableElseExistsStmtContext = new TableElseExistsStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TemplateParser.RULE_tableElseExistsStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.match(TemplateParser.OPEN);
			this.state = 377;
			this.match(TemplateParser.K_TABLE);
			this.state = 378;
			this.match(TemplateParser.DOT);
			this.state = 379;
			this.match(TemplateParser.K_ELSE);
			this.state = 380;
			this.match(TemplateParser.DOT);
			this.state = 381;
			this.match(TemplateParser.K_EXISTS);
			this.state = 382;
			this.match(TemplateParser.LPAR);
			this.state = 383;
			this.tableCondition();
			this.state = 384;
			this.match(TemplateParser.RPAR);
			this.state = 385;
			this.match(TemplateParser.CLOSE);
			this.state = 389;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 386;
					this.statement();
					}
					}
				}
				this.state = 391;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableElseEachStmt(): TableElseEachStmtContext {
		let _localctx: TableElseEachStmtContext = new TableElseEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TemplateParser.RULE_tableElseEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.match(TemplateParser.OPEN);
			this.state = 393;
			this.match(TemplateParser.K_TABLE);
			this.state = 394;
			this.match(TemplateParser.DOT);
			this.state = 395;
			this.match(TemplateParser.K_ELSE);
			this.state = 396;
			this.match(TemplateParser.DOT);
			this.state = 397;
			this.match(TemplateParser.K_EACH);
			this.state = 402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 398;
				this.match(TemplateParser.LPAR);
				this.state = 399;
				this.tableCondition();
				this.state = 400;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 404;
			this.match(TemplateParser.CLOSE);
			this.state = 408;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 405;
					this.statement();
					}
					}
				}
				this.state = 410;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableElseEndStmt(): TableElseEndStmtContext {
		let _localctx: TableElseEndStmtContext = new TableElseEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, TemplateParser.RULE_tableElseEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this.match(TemplateParser.OPEN);
			this.state = 412;
			this.match(TemplateParser.K_TABLE);
			this.state = 413;
			this.match(TemplateParser.DOT);
			this.state = 414;
			this.match(TemplateParser.K_ELSE);
			this.state = 415;
			this.match(TemplateParser.CLOSE);
			this.state = 419;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 416;
					this.statement();
					}
					}
				}
				this.state = 421;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableElseStmt(): TableElseStmtContext {
		let _localctx: TableElseStmtContext = new TableElseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, TemplateParser.RULE_tableElseStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 425;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 422;
				this.tableElseCondEndStmt();
				}
				break;

			case 2:
				{
				this.state = 423;
				this.tableElseEachStmt();
				}
				break;

			case 3:
				{
				this.state = 424;
				this.tableElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableElseCondEndStmt(): TableElseCondEndStmtContext {
		let _localctx: TableElseCondEndStmtContext = new TableElseCondEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TemplateParser.RULE_tableElseCondEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 427;
					this.tableElseCondStmt();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 430;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 434;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 432;
				this.tableElseEachStmt();
				}
				break;

			case 2:
				{
				this.state = 433;
				this.tableElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableElseCondStmt(): TableElseCondStmtContext {
		let _localctx: TableElseCondStmtContext = new TableElseCondStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, TemplateParser.RULE_tableElseCondStmt);
		try {
			this.state = 438;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 436;
				this.tableElseIfStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 437;
				this.tableElseExistsStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inheritedIfStmt(): InheritedIfStmtContext {
		let _localctx: InheritedIfStmtContext = new InheritedIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, TemplateParser.RULE_inheritedIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			this.match(TemplateParser.OPEN);
			this.state = 441;
			this.match(TemplateParser.K_INHERITED);
			this.state = 442;
			this.match(TemplateParser.DOT);
			this.state = 443;
			this.match(TemplateParser.K_IF);
			this.state = 444;
			this.match(TemplateParser.LPAR);
			this.state = 445;
			this.tableCondition();
			this.state = 446;
			this.match(TemplateParser.RPAR);
			this.state = 447;
			this.match(TemplateParser.CLOSE);
			this.state = 451;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 448;
					this.statement();
					}
					}
				}
				this.state = 453;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 455;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 454;
				this.inheritedElseStmt();
				}
				break;
			}
			this.state = 457;
			this.match(TemplateParser.OPEN);
			this.state = 458;
			this.match(TemplateParser.K_INHERITED);
			this.state = 459;
			this.match(TemplateParser.DOT);
			this.state = 460;
			this.match(TemplateParser.K_END);
			this.state = 461;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inheritedExistsStmt(): InheritedExistsStmtContext {
		let _localctx: InheritedExistsStmtContext = new InheritedExistsStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, TemplateParser.RULE_inheritedExistsStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this.match(TemplateParser.OPEN);
			this.state = 464;
			this.match(TemplateParser.K_INHERITED);
			this.state = 465;
			this.match(TemplateParser.DOT);
			this.state = 466;
			this.match(TemplateParser.K_EXISTS);
			this.state = 467;
			this.match(TemplateParser.LPAR);
			this.state = 468;
			this.tableCondition();
			this.state = 469;
			this.match(TemplateParser.RPAR);
			this.state = 470;
			this.match(TemplateParser.CLOSE);
			this.state = 474;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 471;
					this.statement();
					}
					}
				}
				this.state = 476;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			this.state = 478;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 477;
				this.inheritedElseStmt();
				}
				break;
			}
			this.state = 480;
			this.match(TemplateParser.OPEN);
			this.state = 481;
			this.match(TemplateParser.K_INHERITED);
			this.state = 482;
			this.match(TemplateParser.DOT);
			this.state = 483;
			this.match(TemplateParser.K_END);
			this.state = 484;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inheritedEachStmt(): InheritedEachStmtContext {
		let _localctx: InheritedEachStmtContext = new InheritedEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TemplateParser.RULE_inheritedEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this.match(TemplateParser.OPEN);
			this.state = 487;
			this.match(TemplateParser.K_INHERITED);
			this.state = 488;
			this.match(TemplateParser.DOT);
			this.state = 489;
			this.match(TemplateParser.K_EACH);
			this.state = 494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 490;
				this.match(TemplateParser.LPAR);
				this.state = 491;
				this.tableCondition();
				this.state = 492;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 496;
			this.match(TemplateParser.CLOSE);
			this.state = 500;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 497;
					this.statement();
					}
					}
				}
				this.state = 502;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 503;
			this.match(TemplateParser.OPEN);
			this.state = 504;
			this.match(TemplateParser.K_INHERITED);
			this.state = 505;
			this.match(TemplateParser.DOT);
			this.state = 506;
			this.match(TemplateParser.K_END);
			this.state = 507;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inheritedElseIfStmt(): InheritedElseIfStmtContext {
		let _localctx: InheritedElseIfStmtContext = new InheritedElseIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, TemplateParser.RULE_inheritedElseIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
			this.match(TemplateParser.OPEN);
			this.state = 510;
			this.match(TemplateParser.K_INHERITED);
			this.state = 511;
			this.match(TemplateParser.DOT);
			this.state = 512;
			this.match(TemplateParser.K_ELSE);
			this.state = 513;
			this.match(TemplateParser.DOT);
			this.state = 514;
			this.match(TemplateParser.K_IF);
			this.state = 515;
			this.match(TemplateParser.LPAR);
			this.state = 516;
			this.tableCondition();
			this.state = 517;
			this.match(TemplateParser.RPAR);
			this.state = 518;
			this.match(TemplateParser.CLOSE);
			this.state = 522;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 519;
					this.statement();
					}
					}
				}
				this.state = 524;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inheritedElseExistsStmt(): InheritedElseExistsStmtContext {
		let _localctx: InheritedElseExistsStmtContext = new InheritedElseExistsStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, TemplateParser.RULE_inheritedElseExistsStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 525;
			this.match(TemplateParser.OPEN);
			this.state = 526;
			this.match(TemplateParser.K_INHERITED);
			this.state = 527;
			this.match(TemplateParser.DOT);
			this.state = 528;
			this.match(TemplateParser.K_ELSE);
			this.state = 529;
			this.match(TemplateParser.DOT);
			this.state = 530;
			this.match(TemplateParser.K_EXISTS);
			this.state = 531;
			this.match(TemplateParser.LPAR);
			this.state = 532;
			this.tableCondition();
			this.state = 533;
			this.match(TemplateParser.RPAR);
			this.state = 534;
			this.match(TemplateParser.CLOSE);
			this.state = 538;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 535;
					this.statement();
					}
					}
				}
				this.state = 540;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inheritedElseEachStmt(): InheritedElseEachStmtContext {
		let _localctx: InheritedElseEachStmtContext = new InheritedElseEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, TemplateParser.RULE_inheritedElseEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			this.match(TemplateParser.OPEN);
			this.state = 542;
			this.match(TemplateParser.K_INHERITED);
			this.state = 543;
			this.match(TemplateParser.DOT);
			this.state = 544;
			this.match(TemplateParser.K_ELSE);
			this.state = 545;
			this.match(TemplateParser.DOT);
			this.state = 546;
			this.match(TemplateParser.K_EACH);
			this.state = 551;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 547;
				this.match(TemplateParser.LPAR);
				this.state = 548;
				this.tableCondition();
				this.state = 549;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 553;
			this.match(TemplateParser.CLOSE);
			this.state = 557;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 554;
					this.statement();
					}
					}
				}
				this.state = 559;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inheritedElseEndStmt(): InheritedElseEndStmtContext {
		let _localctx: InheritedElseEndStmtContext = new InheritedElseEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, TemplateParser.RULE_inheritedElseEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 560;
			this.match(TemplateParser.OPEN);
			this.state = 561;
			this.match(TemplateParser.K_INHERITED);
			this.state = 562;
			this.match(TemplateParser.DOT);
			this.state = 563;
			this.match(TemplateParser.K_ELSE);
			this.state = 564;
			this.match(TemplateParser.CLOSE);
			this.state = 568;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 565;
					this.statement();
					}
					}
				}
				this.state = 570;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inheritedElseStmt(): InheritedElseStmtContext {
		let _localctx: InheritedElseStmtContext = new InheritedElseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, TemplateParser.RULE_inheritedElseStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 571;
				this.inheritedElseCondEndStmt();
				}
				break;

			case 2:
				{
				this.state = 572;
				this.inheritedElseEachStmt();
				}
				break;

			case 3:
				{
				this.state = 573;
				this.inheritedElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inheritedElseCondEndStmt(): InheritedElseCondEndStmtContext {
		let _localctx: InheritedElseCondEndStmtContext = new InheritedElseCondEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, TemplateParser.RULE_inheritedElseCondEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 577;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 576;
					this.inheritedElseCondStmt();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 579;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 583;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 581;
				this.inheritedElseEachStmt();
				}
				break;

			case 2:
				{
				this.state = 582;
				this.inheritedElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inheritedElseCondStmt(): InheritedElseCondStmtContext {
		let _localctx: InheritedElseCondStmtContext = new InheritedElseCondStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, TemplateParser.RULE_inheritedElseCondStmt);
		try {
			this.state = 587;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 585;
				this.inheritedElseIfStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 586;
				this.inheritedElseExistsStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceIfStmt(): ReferenceIfStmtContext {
		let _localctx: ReferenceIfStmtContext = new ReferenceIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, TemplateParser.RULE_referenceIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 589;
			this.match(TemplateParser.OPEN);
			this.state = 590;
			this.match(TemplateParser.K_REFERENCE);
			this.state = 591;
			this.match(TemplateParser.DOT);
			this.state = 592;
			this.match(TemplateParser.K_IF);
			this.state = 593;
			this.match(TemplateParser.LPAR);
			this.state = 594;
			this.tableCondition();
			this.state = 595;
			this.match(TemplateParser.RPAR);
			this.state = 596;
			this.match(TemplateParser.CLOSE);
			this.state = 600;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 597;
					this.statement();
					}
					}
				}
				this.state = 602;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			this.state = 604;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 603;
				this.referenceElseStmt();
				}
				break;
			}
			this.state = 606;
			this.match(TemplateParser.OPEN);
			this.state = 607;
			this.match(TemplateParser.K_REFERENCE);
			this.state = 608;
			this.match(TemplateParser.DOT);
			this.state = 609;
			this.match(TemplateParser.K_END);
			this.state = 610;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceExistsStmt(): ReferenceExistsStmtContext {
		let _localctx: ReferenceExistsStmtContext = new ReferenceExistsStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, TemplateParser.RULE_referenceExistsStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
			this.match(TemplateParser.OPEN);
			this.state = 613;
			this.match(TemplateParser.K_REFERENCE);
			this.state = 614;
			this.match(TemplateParser.DOT);
			this.state = 615;
			this.match(TemplateParser.K_EXISTS);
			this.state = 616;
			this.match(TemplateParser.LPAR);
			this.state = 617;
			this.tableCondition();
			this.state = 618;
			this.match(TemplateParser.RPAR);
			this.state = 619;
			this.match(TemplateParser.CLOSE);
			this.state = 623;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 620;
					this.statement();
					}
					}
				}
				this.state = 625;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			this.state = 627;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 626;
				this.referenceElseStmt();
				}
				break;
			}
			this.state = 629;
			this.match(TemplateParser.OPEN);
			this.state = 630;
			this.match(TemplateParser.K_REFERENCE);
			this.state = 631;
			this.match(TemplateParser.DOT);
			this.state = 632;
			this.match(TemplateParser.K_END);
			this.state = 633;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceEachStmt(): ReferenceEachStmtContext {
		let _localctx: ReferenceEachStmtContext = new ReferenceEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, TemplateParser.RULE_referenceEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 635;
			this.match(TemplateParser.OPEN);
			this.state = 636;
			this.match(TemplateParser.K_REFERENCE);
			this.state = 637;
			this.match(TemplateParser.DOT);
			this.state = 638;
			this.match(TemplateParser.K_EACH);
			this.state = 643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 639;
				this.match(TemplateParser.LPAR);
				this.state = 640;
				this.tableCondition();
				this.state = 641;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 645;
			this.match(TemplateParser.CLOSE);
			this.state = 649;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 646;
					this.statement();
					}
					}
				}
				this.state = 651;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			this.state = 652;
			this.match(TemplateParser.OPEN);
			this.state = 653;
			this.match(TemplateParser.K_REFERENCE);
			this.state = 654;
			this.match(TemplateParser.DOT);
			this.state = 655;
			this.match(TemplateParser.K_END);
			this.state = 656;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceElseIfStmt(): ReferenceElseIfStmtContext {
		let _localctx: ReferenceElseIfStmtContext = new ReferenceElseIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, TemplateParser.RULE_referenceElseIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 658;
			this.match(TemplateParser.OPEN);
			this.state = 659;
			this.match(TemplateParser.K_REFERENCE);
			this.state = 660;
			this.match(TemplateParser.DOT);
			this.state = 661;
			this.match(TemplateParser.K_ELSE);
			this.state = 662;
			this.match(TemplateParser.DOT);
			this.state = 663;
			this.match(TemplateParser.K_IF);
			this.state = 664;
			this.match(TemplateParser.LPAR);
			this.state = 665;
			this.tableCondition();
			this.state = 666;
			this.match(TemplateParser.RPAR);
			this.state = 667;
			this.match(TemplateParser.CLOSE);
			this.state = 671;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 668;
					this.statement();
					}
					}
				}
				this.state = 673;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceElseExistsStmt(): ReferenceElseExistsStmtContext {
		let _localctx: ReferenceElseExistsStmtContext = new ReferenceElseExistsStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, TemplateParser.RULE_referenceElseExistsStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 674;
			this.match(TemplateParser.OPEN);
			this.state = 675;
			this.match(TemplateParser.K_REFERENCE);
			this.state = 676;
			this.match(TemplateParser.DOT);
			this.state = 677;
			this.match(TemplateParser.K_ELSE);
			this.state = 678;
			this.match(TemplateParser.DOT);
			this.state = 679;
			this.match(TemplateParser.K_EXISTS);
			this.state = 680;
			this.match(TemplateParser.LPAR);
			this.state = 681;
			this.tableCondition();
			this.state = 682;
			this.match(TemplateParser.RPAR);
			this.state = 683;
			this.match(TemplateParser.CLOSE);
			this.state = 687;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 684;
					this.statement();
					}
					}
				}
				this.state = 689;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceElseEachStmt(): ReferenceElseEachStmtContext {
		let _localctx: ReferenceElseEachStmtContext = new ReferenceElseEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, TemplateParser.RULE_referenceElseEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			this.match(TemplateParser.OPEN);
			this.state = 691;
			this.match(TemplateParser.K_REFERENCE);
			this.state = 692;
			this.match(TemplateParser.DOT);
			this.state = 693;
			this.match(TemplateParser.K_ELSE);
			this.state = 694;
			this.match(TemplateParser.DOT);
			this.state = 695;
			this.match(TemplateParser.K_EACH);
			this.state = 700;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 696;
				this.match(TemplateParser.LPAR);
				this.state = 697;
				this.tableCondition();
				this.state = 698;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 702;
			this.match(TemplateParser.CLOSE);
			this.state = 706;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 703;
					this.statement();
					}
					}
				}
				this.state = 708;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceElseEndStmt(): ReferenceElseEndStmtContext {
		let _localctx: ReferenceElseEndStmtContext = new ReferenceElseEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, TemplateParser.RULE_referenceElseEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 709;
			this.match(TemplateParser.OPEN);
			this.state = 710;
			this.match(TemplateParser.K_REFERENCE);
			this.state = 711;
			this.match(TemplateParser.DOT);
			this.state = 712;
			this.match(TemplateParser.K_ELSE);
			this.state = 713;
			this.match(TemplateParser.CLOSE);
			this.state = 717;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 714;
					this.statement();
					}
					}
				}
				this.state = 719;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceElseStmt(): ReferenceElseStmtContext {
		let _localctx: ReferenceElseStmtContext = new ReferenceElseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, TemplateParser.RULE_referenceElseStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 723;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 720;
				this.referenceElseCondEndStmt();
				}
				break;

			case 2:
				{
				this.state = 721;
				this.referenceElseEachStmt();
				}
				break;

			case 3:
				{
				this.state = 722;
				this.referenceElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceElseCondEndStmt(): ReferenceElseCondEndStmtContext {
		let _localctx: ReferenceElseCondEndStmtContext = new ReferenceElseCondEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, TemplateParser.RULE_referenceElseCondEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 726;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 725;
					this.referenceElseCondStmt();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 728;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 732;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 730;
				this.referenceElseEachStmt();
				}
				break;

			case 2:
				{
				this.state = 731;
				this.referenceElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceElseCondStmt(): ReferenceElseCondStmtContext {
		let _localctx: ReferenceElseCondStmtContext = new ReferenceElseCondStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, TemplateParser.RULE_referenceElseCondStmt);
		try {
			this.state = 736;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 734;
				this.referenceElseIfStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 735;
				this.referenceElseExistsStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldIfStmt(): FieldIfStmtContext {
		let _localctx: FieldIfStmtContext = new FieldIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, TemplateParser.RULE_fieldIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 738;
			this.match(TemplateParser.OPEN);
			this.state = 739;
			this.match(TemplateParser.K_FIELD);
			this.state = 740;
			this.match(TemplateParser.DOT);
			this.state = 741;
			this.match(TemplateParser.K_IF);
			this.state = 742;
			this.match(TemplateParser.LPAR);
			this.state = 743;
			this.fieldCondition();
			this.state = 744;
			this.match(TemplateParser.RPAR);
			this.state = 745;
			this.match(TemplateParser.CLOSE);
			this.state = 749;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 746;
					this.statement();
					}
					}
				}
				this.state = 751;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			this.state = 753;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 752;
				this.fieldElseStmt();
				}
				break;
			}
			this.state = 755;
			this.match(TemplateParser.OPEN);
			this.state = 756;
			this.match(TemplateParser.K_FIELD);
			this.state = 757;
			this.match(TemplateParser.DOT);
			this.state = 758;
			this.match(TemplateParser.K_END);
			this.state = 759;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldExistsStmt(): FieldExistsStmtContext {
		let _localctx: FieldExistsStmtContext = new FieldExistsStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, TemplateParser.RULE_fieldExistsStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			this.match(TemplateParser.OPEN);
			this.state = 762;
			this.match(TemplateParser.K_FIELD);
			this.state = 763;
			this.match(TemplateParser.DOT);
			this.state = 764;
			this.match(TemplateParser.K_EXISTS);
			this.state = 765;
			this.match(TemplateParser.LPAR);
			this.state = 766;
			this.fieldCondition();
			this.state = 767;
			this.match(TemplateParser.RPAR);
			this.state = 768;
			this.match(TemplateParser.CLOSE);
			this.state = 772;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 769;
					this.statement();
					}
					}
				}
				this.state = 774;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			}
			this.state = 776;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 775;
				this.fieldElseStmt();
				}
				break;
			}
			this.state = 778;
			this.match(TemplateParser.OPEN);
			this.state = 779;
			this.match(TemplateParser.K_FIELD);
			this.state = 780;
			this.match(TemplateParser.DOT);
			this.state = 781;
			this.match(TemplateParser.K_END);
			this.state = 782;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldMatchStmt(): FieldMatchStmtContext {
		let _localctx: FieldMatchStmtContext = new FieldMatchStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, TemplateParser.RULE_fieldMatchStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 784;
			this.match(TemplateParser.OPEN);
			this.state = 785;
			this.match(TemplateParser.K_FIELD);
			this.state = 786;
			this.match(TemplateParser.DOT);
			this.state = 787;
			this.match(TemplateParser.MATCH_OPEN);
			this.state = 788;
			this.regex();
			this.state = 789;
			this.match(TemplateParser.MATCH_CLOSE);
			this.state = 790;
			this.match(TemplateParser.CLOSE);
			this.state = 794;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 791;
					this.statement();
					}
					}
				}
				this.state = 796;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			}
			this.state = 798;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 797;
				this.fieldElseStmt();
				}
				break;
			}
			this.state = 800;
			this.match(TemplateParser.OPEN);
			this.state = 801;
			this.match(TemplateParser.K_FIELD);
			this.state = 802;
			this.match(TemplateParser.DOT);
			this.state = 803;
			this.match(TemplateParser.K_END);
			this.state = 804;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldContainsStmt(): FieldContainsStmtContext {
		let _localctx: FieldContainsStmtContext = new FieldContainsStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, TemplateParser.RULE_fieldContainsStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 806;
			this.match(TemplateParser.OPEN);
			this.state = 807;
			this.match(TemplateParser.K_FIELD);
			this.state = 808;
			this.match(TemplateParser.DOT);
			this.state = 809;
			this.match(TemplateParser.K_CONTAINS);
			this.state = 810;
			this.match(TemplateParser.LPAR);
			this.state = 811;
			this.word();
			this.state = 812;
			this.match(TemplateParser.RPAR);
			this.state = 813;
			this.match(TemplateParser.CLOSE);
			this.state = 817;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 814;
					this.statement();
					}
					}
				}
				this.state = 819;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			}
			this.state = 821;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 820;
				this.fieldElseStmt();
				}
				break;
			}
			this.state = 823;
			this.match(TemplateParser.OPEN);
			this.state = 824;
			this.match(TemplateParser.K_FIELD);
			this.state = 825;
			this.match(TemplateParser.DOT);
			this.state = 826;
			this.match(TemplateParser.K_END);
			this.state = 827;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldEachStmt(): FieldEachStmtContext {
		let _localctx: FieldEachStmtContext = new FieldEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, TemplateParser.RULE_fieldEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 829;
			this.match(TemplateParser.OPEN);
			this.state = 830;
			this.match(TemplateParser.K_FIELD);
			this.state = 831;
			this.match(TemplateParser.DOT);
			this.state = 832;
			this.match(TemplateParser.K_EACH);
			this.state = 837;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 833;
				this.match(TemplateParser.LPAR);
				this.state = 834;
				this.fieldCondition();
				this.state = 835;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 839;
			this.match(TemplateParser.CLOSE);
			this.state = 843;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 840;
					this.statement();
					}
					}
				}
				this.state = 845;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			}
			this.state = 846;
			this.match(TemplateParser.OPEN);
			this.state = 847;
			this.match(TemplateParser.K_FIELD);
			this.state = 848;
			this.match(TemplateParser.DOT);
			this.state = 849;
			this.match(TemplateParser.K_END);
			this.state = 850;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldElseIfStmt(): FieldElseIfStmtContext {
		let _localctx: FieldElseIfStmtContext = new FieldElseIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, TemplateParser.RULE_fieldElseIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 852;
			this.match(TemplateParser.OPEN);
			this.state = 853;
			this.match(TemplateParser.K_FIELD);
			this.state = 854;
			this.match(TemplateParser.DOT);
			this.state = 855;
			this.match(TemplateParser.K_ELSE);
			this.state = 856;
			this.match(TemplateParser.DOT);
			this.state = 857;
			this.match(TemplateParser.K_IF);
			this.state = 858;
			this.match(TemplateParser.LPAR);
			this.state = 859;
			this.fieldCondition();
			this.state = 860;
			this.match(TemplateParser.RPAR);
			this.state = 861;
			this.match(TemplateParser.CLOSE);
			this.state = 865;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 862;
					this.statement();
					}
					}
				}
				this.state = 867;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldElseExistsStmt(): FieldElseExistsStmtContext {
		let _localctx: FieldElseExistsStmtContext = new FieldElseExistsStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, TemplateParser.RULE_fieldElseExistsStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 868;
			this.match(TemplateParser.OPEN);
			this.state = 869;
			this.match(TemplateParser.K_FIELD);
			this.state = 870;
			this.match(TemplateParser.DOT);
			this.state = 871;
			this.match(TemplateParser.K_ELSE);
			this.state = 872;
			this.match(TemplateParser.DOT);
			this.state = 873;
			this.match(TemplateParser.K_EXISTS);
			this.state = 874;
			this.match(TemplateParser.LPAR);
			this.state = 875;
			this.fieldCondition();
			this.state = 876;
			this.match(TemplateParser.RPAR);
			this.state = 877;
			this.match(TemplateParser.CLOSE);
			this.state = 881;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 878;
					this.statement();
					}
					}
				}
				this.state = 883;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldElseMatchStmt(): FieldElseMatchStmtContext {
		let _localctx: FieldElseMatchStmtContext = new FieldElseMatchStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, TemplateParser.RULE_fieldElseMatchStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 884;
			this.match(TemplateParser.OPEN);
			this.state = 885;
			this.match(TemplateParser.K_FIELD);
			this.state = 886;
			this.match(TemplateParser.DOT);
			this.state = 887;
			this.match(TemplateParser.K_ELSE);
			this.state = 888;
			this.match(TemplateParser.DOT);
			this.state = 889;
			this.match(TemplateParser.MATCH_OPEN);
			this.state = 890;
			this.regex();
			this.state = 891;
			this.match(TemplateParser.MATCH_CLOSE);
			this.state = 892;
			this.match(TemplateParser.CLOSE);
			this.state = 896;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 893;
					this.statement();
					}
					}
				}
				this.state = 898;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldElseContainsStmt(): FieldElseContainsStmtContext {
		let _localctx: FieldElseContainsStmtContext = new FieldElseContainsStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, TemplateParser.RULE_fieldElseContainsStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 899;
			this.match(TemplateParser.OPEN);
			this.state = 900;
			this.match(TemplateParser.K_FIELD);
			this.state = 901;
			this.match(TemplateParser.DOT);
			this.state = 902;
			this.match(TemplateParser.K_ELSE);
			this.state = 903;
			this.match(TemplateParser.DOT);
			this.state = 904;
			this.match(TemplateParser.K_CONTAINS);
			this.state = 905;
			this.match(TemplateParser.LPAR);
			this.state = 906;
			this.word();
			this.state = 907;
			this.match(TemplateParser.RPAR);
			this.state = 908;
			this.match(TemplateParser.CLOSE);
			this.state = 912;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 909;
					this.statement();
					}
					}
				}
				this.state = 914;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldElseEachStmt(): FieldElseEachStmtContext {
		let _localctx: FieldElseEachStmtContext = new FieldElseEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, TemplateParser.RULE_fieldElseEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 915;
			this.match(TemplateParser.OPEN);
			this.state = 916;
			this.match(TemplateParser.K_FIELD);
			this.state = 917;
			this.match(TemplateParser.DOT);
			this.state = 918;
			this.match(TemplateParser.K_ELSE);
			this.state = 919;
			this.match(TemplateParser.DOT);
			this.state = 920;
			this.match(TemplateParser.K_EACH);
			this.state = 925;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 921;
				this.match(TemplateParser.LPAR);
				this.state = 922;
				this.fieldCondition();
				this.state = 923;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 927;
			this.match(TemplateParser.CLOSE);
			this.state = 931;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 928;
					this.statement();
					}
					}
				}
				this.state = 933;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldElseEndStmt(): FieldElseEndStmtContext {
		let _localctx: FieldElseEndStmtContext = new FieldElseEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, TemplateParser.RULE_fieldElseEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 934;
			this.match(TemplateParser.OPEN);
			this.state = 935;
			this.match(TemplateParser.K_FIELD);
			this.state = 936;
			this.match(TemplateParser.DOT);
			this.state = 937;
			this.match(TemplateParser.K_ELSE);
			this.state = 938;
			this.match(TemplateParser.CLOSE);
			this.state = 942;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 939;
					this.statement();
					}
					}
				}
				this.state = 944;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldElseStmt(): FieldElseStmtContext {
		let _localctx: FieldElseStmtContext = new FieldElseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, TemplateParser.RULE_fieldElseStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 948;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 945;
				this.fieldElseEachStmt();
				}
				break;

			case 2:
				{
				this.state = 946;
				this.fieldElseEndStmt();
				}
				break;

			case 3:
				{
				this.state = 947;
				this.fieldElseCondEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldElseCondEndStmt(): FieldElseCondEndStmtContext {
		let _localctx: FieldElseCondEndStmtContext = new FieldElseCondEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, TemplateParser.RULE_fieldElseCondEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 951;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 950;
					this.fieldElseCondStmt();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 953;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 957;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 955;
				this.fieldElseEachStmt();
				}
				break;

			case 2:
				{
				this.state = 956;
				this.fieldElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldElseCondStmt(): FieldElseCondStmtContext {
		let _localctx: FieldElseCondStmtContext = new FieldElseCondStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, TemplateParser.RULE_fieldElseCondStmt);
		try {
			this.state = 963;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 959;
				this.fieldElseIfStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 960;
				this.fieldElseExistsStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 961;
				this.fieldElseMatchStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 962;
				this.fieldElseContainsStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public descriptorIfStmt(): DescriptorIfStmtContext {
		let _localctx: DescriptorIfStmtContext = new DescriptorIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, TemplateParser.RULE_descriptorIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 965;
			this.match(TemplateParser.OPEN);
			this.state = 966;
			this.match(TemplateParser.K_DESCRIPTOR);
			this.state = 967;
			this.match(TemplateParser.DOT);
			this.state = 968;
			this.match(TemplateParser.K_IF);
			this.state = 969;
			this.match(TemplateParser.LPAR);
			this.state = 970;
			this.fieldCondition();
			this.state = 971;
			this.match(TemplateParser.RPAR);
			this.state = 972;
			this.match(TemplateParser.CLOSE);
			this.state = 976;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 973;
					this.statement();
					}
					}
				}
				this.state = 978;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			}
			this.state = 980;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 979;
				this.descriptorElseStmt();
				}
				break;
			}
			this.state = 982;
			this.match(TemplateParser.OPEN);
			this.state = 983;
			this.match(TemplateParser.K_DESCRIPTOR);
			this.state = 984;
			this.match(TemplateParser.DOT);
			this.state = 985;
			this.match(TemplateParser.K_END);
			this.state = 986;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public descriptorMatchStmt(): DescriptorMatchStmtContext {
		let _localctx: DescriptorMatchStmtContext = new DescriptorMatchStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, TemplateParser.RULE_descriptorMatchStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 988;
			this.match(TemplateParser.OPEN);
			this.state = 989;
			this.match(TemplateParser.K_DESCRIPTOR);
			this.state = 990;
			this.match(TemplateParser.DOT);
			this.state = 991;
			this.match(TemplateParser.MATCH_OPEN);
			this.state = 992;
			this.regex();
			this.state = 993;
			this.match(TemplateParser.MATCH_CLOSE);
			this.state = 994;
			this.match(TemplateParser.CLOSE);
			this.state = 998;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 995;
					this.statement();
					}
					}
				}
				this.state = 1000;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			}
			this.state = 1002;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 1001;
				this.descriptorElseStmt();
				}
				break;
			}
			this.state = 1004;
			this.match(TemplateParser.OPEN);
			this.state = 1005;
			this.match(TemplateParser.K_DESCRIPTOR);
			this.state = 1006;
			this.match(TemplateParser.DOT);
			this.state = 1007;
			this.match(TemplateParser.K_END);
			this.state = 1008;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public descriptorContainsStmt(): DescriptorContainsStmtContext {
		let _localctx: DescriptorContainsStmtContext = new DescriptorContainsStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, TemplateParser.RULE_descriptorContainsStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1010;
			this.match(TemplateParser.OPEN);
			this.state = 1011;
			this.match(TemplateParser.K_DESCRIPTOR);
			this.state = 1012;
			this.match(TemplateParser.DOT);
			this.state = 1013;
			this.match(TemplateParser.K_CONTAINS);
			this.state = 1014;
			this.match(TemplateParser.LPAR);
			this.state = 1015;
			this.word();
			this.state = 1016;
			this.match(TemplateParser.RPAR);
			this.state = 1017;
			this.match(TemplateParser.CLOSE);
			this.state = 1021;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1018;
					this.statement();
					}
					}
				}
				this.state = 1023;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			}
			this.state = 1025;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 1024;
				this.descriptorElseStmt();
				}
				break;
			}
			this.state = 1027;
			this.match(TemplateParser.OPEN);
			this.state = 1028;
			this.match(TemplateParser.K_DESCRIPTOR);
			this.state = 1029;
			this.match(TemplateParser.DOT);
			this.state = 1030;
			this.match(TemplateParser.K_END);
			this.state = 1031;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public descriptorEachStmt(): DescriptorEachStmtContext {
		let _localctx: DescriptorEachStmtContext = new DescriptorEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, TemplateParser.RULE_descriptorEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1033;
			this.match(TemplateParser.OPEN);
			this.state = 1034;
			this.match(TemplateParser.K_DESCRIPTOR);
			this.state = 1035;
			this.match(TemplateParser.DOT);
			this.state = 1036;
			this.match(TemplateParser.K_EACH);
			this.state = 1041;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 1037;
				this.match(TemplateParser.LPAR);
				this.state = 1038;
				this.fieldCondition();
				this.state = 1039;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 1043;
			this.match(TemplateParser.CLOSE);
			this.state = 1047;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1044;
					this.statement();
					}
					}
				}
				this.state = 1049;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			}
			this.state = 1050;
			this.match(TemplateParser.OPEN);
			this.state = 1051;
			this.match(TemplateParser.K_DESCRIPTOR);
			this.state = 1052;
			this.match(TemplateParser.DOT);
			this.state = 1053;
			this.match(TemplateParser.K_END);
			this.state = 1054;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public descriptorElseIfStmt(): DescriptorElseIfStmtContext {
		let _localctx: DescriptorElseIfStmtContext = new DescriptorElseIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, TemplateParser.RULE_descriptorElseIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1056;
			this.match(TemplateParser.OPEN);
			this.state = 1057;
			this.match(TemplateParser.K_DESCRIPTOR);
			this.state = 1058;
			this.match(TemplateParser.DOT);
			this.state = 1059;
			this.match(TemplateParser.K_ELSE);
			this.state = 1060;
			this.match(TemplateParser.DOT);
			this.state = 1061;
			this.match(TemplateParser.K_IF);
			this.state = 1062;
			this.match(TemplateParser.LPAR);
			this.state = 1063;
			this.fieldCondition();
			this.state = 1064;
			this.match(TemplateParser.RPAR);
			this.state = 1065;
			this.match(TemplateParser.CLOSE);
			this.state = 1069;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1066;
					this.statement();
					}
					}
				}
				this.state = 1071;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public descriptorElseMatchStmt(): DescriptorElseMatchStmtContext {
		let _localctx: DescriptorElseMatchStmtContext = new DescriptorElseMatchStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, TemplateParser.RULE_descriptorElseMatchStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1072;
			this.match(TemplateParser.OPEN);
			this.state = 1073;
			this.match(TemplateParser.K_DESCRIPTOR);
			this.state = 1074;
			this.match(TemplateParser.DOT);
			this.state = 1075;
			this.match(TemplateParser.K_ELSE);
			this.state = 1076;
			this.match(TemplateParser.DOT);
			this.state = 1077;
			this.match(TemplateParser.MATCH_OPEN);
			this.state = 1078;
			this.regex();
			this.state = 1079;
			this.match(TemplateParser.MATCH_CLOSE);
			this.state = 1080;
			this.match(TemplateParser.CLOSE);
			this.state = 1084;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1081;
					this.statement();
					}
					}
				}
				this.state = 1086;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public descriptorElseContainsStmt(): DescriptorElseContainsStmtContext {
		let _localctx: DescriptorElseContainsStmtContext = new DescriptorElseContainsStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, TemplateParser.RULE_descriptorElseContainsStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1087;
			this.match(TemplateParser.OPEN);
			this.state = 1088;
			this.match(TemplateParser.K_DESCRIPTOR);
			this.state = 1089;
			this.match(TemplateParser.DOT);
			this.state = 1090;
			this.match(TemplateParser.K_ELSE);
			this.state = 1091;
			this.match(TemplateParser.DOT);
			this.state = 1092;
			this.match(TemplateParser.K_CONTAINS);
			this.state = 1093;
			this.match(TemplateParser.LPAR);
			this.state = 1094;
			this.word();
			this.state = 1095;
			this.match(TemplateParser.RPAR);
			this.state = 1096;
			this.match(TemplateParser.CLOSE);
			this.state = 1100;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1097;
					this.statement();
					}
					}
				}
				this.state = 1102;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public descriptorElseEachStmt(): DescriptorElseEachStmtContext {
		let _localctx: DescriptorElseEachStmtContext = new DescriptorElseEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, TemplateParser.RULE_descriptorElseEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1103;
			this.match(TemplateParser.OPEN);
			this.state = 1104;
			this.match(TemplateParser.K_DESCRIPTOR);
			this.state = 1105;
			this.match(TemplateParser.DOT);
			this.state = 1106;
			this.match(TemplateParser.K_ELSE);
			this.state = 1107;
			this.match(TemplateParser.DOT);
			this.state = 1108;
			this.match(TemplateParser.K_EACH);
			this.state = 1113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 1109;
				this.match(TemplateParser.LPAR);
				this.state = 1110;
				this.fieldCondition();
				this.state = 1111;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 1115;
			this.match(TemplateParser.CLOSE);
			this.state = 1119;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1116;
					this.statement();
					}
					}
				}
				this.state = 1121;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public descriptorElseEndStmt(): DescriptorElseEndStmtContext {
		let _localctx: DescriptorElseEndStmtContext = new DescriptorElseEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, TemplateParser.RULE_descriptorElseEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1122;
			this.match(TemplateParser.OPEN);
			this.state = 1123;
			this.match(TemplateParser.K_DESCRIPTOR);
			this.state = 1124;
			this.match(TemplateParser.DOT);
			this.state = 1125;
			this.match(TemplateParser.K_ELSE);
			this.state = 1126;
			this.match(TemplateParser.CLOSE);
			this.state = 1130;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1127;
					this.statement();
					}
					}
				}
				this.state = 1132;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public descriptorElseStmt(): DescriptorElseStmtContext {
		let _localctx: DescriptorElseStmtContext = new DescriptorElseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, TemplateParser.RULE_descriptorElseStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1136;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 1133;
				this.descriptorElseCondEndStmt();
				}
				break;

			case 2:
				{
				this.state = 1134;
				this.descriptorElseEachStmt();
				}
				break;

			case 3:
				{
				this.state = 1135;
				this.descriptorElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public descriptorElseCondEndStmt(): DescriptorElseCondEndStmtContext {
		let _localctx: DescriptorElseCondEndStmtContext = new DescriptorElseCondEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, TemplateParser.RULE_descriptorElseCondEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1139;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1138;
					this.descriptorElseCondStmt();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1141;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1145;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				{
				this.state = 1143;
				this.descriptorElseEachStmt();
				}
				break;

			case 2:
				{
				this.state = 1144;
				this.descriptorElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public descriptorElseCondStmt(): DescriptorElseCondStmtContext {
		let _localctx: DescriptorElseCondStmtContext = new DescriptorElseCondStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, TemplateParser.RULE_descriptorElseCondStmt);
		try {
			this.state = 1150;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1147;
				this.descriptorElseIfStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1148;
				this.descriptorElseMatchStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1149;
				this.descriptorElseContainsStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexIfStmt(): IndexIfStmtContext {
		let _localctx: IndexIfStmtContext = new IndexIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, TemplateParser.RULE_indexIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1152;
			this.match(TemplateParser.OPEN);
			this.state = 1153;
			this.match(TemplateParser.K_INDEX);
			this.state = 1154;
			this.match(TemplateParser.DOT);
			this.state = 1155;
			this.match(TemplateParser.K_IF);
			this.state = 1156;
			this.match(TemplateParser.LPAR);
			this.state = 1157;
			this.indexCondition();
			this.state = 1158;
			this.match(TemplateParser.RPAR);
			this.state = 1159;
			this.match(TemplateParser.CLOSE);
			this.state = 1163;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1160;
					this.statement();
					}
					}
				}
				this.state = 1165;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			}
			this.state = 1167;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 1166;
				this.indexElseStmt();
				}
				break;
			}
			this.state = 1169;
			this.match(TemplateParser.OPEN);
			this.state = 1170;
			this.match(TemplateParser.K_INDEX);
			this.state = 1171;
			this.match(TemplateParser.DOT);
			this.state = 1172;
			this.match(TemplateParser.K_END);
			this.state = 1173;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexEachStmt(): IndexEachStmtContext {
		let _localctx: IndexEachStmtContext = new IndexEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, TemplateParser.RULE_indexEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1175;
			this.match(TemplateParser.OPEN);
			this.state = 1176;
			this.match(TemplateParser.K_INDEX);
			this.state = 1177;
			this.match(TemplateParser.DOT);
			this.state = 1178;
			this.match(TemplateParser.K_EACH);
			this.state = 1183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 1179;
				this.match(TemplateParser.LPAR);
				this.state = 1180;
				this.indexCondition();
				this.state = 1181;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 1185;
			this.match(TemplateParser.CLOSE);
			this.state = 1189;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1186;
					this.statement();
					}
					}
				}
				this.state = 1191;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			}
			this.state = 1192;
			this.match(TemplateParser.OPEN);
			this.state = 1193;
			this.match(TemplateParser.K_INDEX);
			this.state = 1194;
			this.match(TemplateParser.DOT);
			this.state = 1195;
			this.match(TemplateParser.K_END);
			this.state = 1196;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexElseIfStmt(): IndexElseIfStmtContext {
		let _localctx: IndexElseIfStmtContext = new IndexElseIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, TemplateParser.RULE_indexElseIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1198;
			this.match(TemplateParser.OPEN);
			this.state = 1199;
			this.match(TemplateParser.K_INDEX);
			this.state = 1200;
			this.match(TemplateParser.DOT);
			this.state = 1201;
			this.match(TemplateParser.K_ELSE);
			this.state = 1202;
			this.match(TemplateParser.DOT);
			this.state = 1203;
			this.match(TemplateParser.K_IF);
			this.state = 1204;
			this.match(TemplateParser.LPAR);
			this.state = 1205;
			this.indexCondition();
			this.state = 1206;
			this.match(TemplateParser.RPAR);
			this.state = 1207;
			this.match(TemplateParser.CLOSE);
			this.state = 1211;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1208;
					this.statement();
					}
					}
				}
				this.state = 1213;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexElseEachStmt(): IndexElseEachStmtContext {
		let _localctx: IndexElseEachStmtContext = new IndexElseEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, TemplateParser.RULE_indexElseEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1214;
			this.match(TemplateParser.OPEN);
			this.state = 1215;
			this.match(TemplateParser.K_INDEX);
			this.state = 1216;
			this.match(TemplateParser.DOT);
			this.state = 1217;
			this.match(TemplateParser.K_ELSE);
			this.state = 1218;
			this.match(TemplateParser.DOT);
			this.state = 1219;
			this.match(TemplateParser.K_EACH);
			this.state = 1224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 1220;
				this.match(TemplateParser.LPAR);
				this.state = 1221;
				this.indexCondition();
				this.state = 1222;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 1226;
			this.match(TemplateParser.CLOSE);
			this.state = 1230;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1227;
					this.statement();
					}
					}
				}
				this.state = 1232;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexElseEndStmt(): IndexElseEndStmtContext {
		let _localctx: IndexElseEndStmtContext = new IndexElseEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, TemplateParser.RULE_indexElseEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1233;
			this.match(TemplateParser.OPEN);
			this.state = 1234;
			this.match(TemplateParser.K_INDEX);
			this.state = 1235;
			this.match(TemplateParser.DOT);
			this.state = 1236;
			this.match(TemplateParser.K_ELSE);
			this.state = 1237;
			this.match(TemplateParser.CLOSE);
			this.state = 1241;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1238;
					this.statement();
					}
					}
				}
				this.state = 1243;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexElseStmt(): IndexElseStmtContext {
		let _localctx: IndexElseStmtContext = new IndexElseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, TemplateParser.RULE_indexElseStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1247;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 1244;
				this.indexElseCondEndStmt();
				}
				break;

			case 2:
				{
				this.state = 1245;
				this.indexElseEachStmt();
				}
				break;

			case 3:
				{
				this.state = 1246;
				this.indexElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexElseCondEndStmt(): IndexElseCondEndStmtContext {
		let _localctx: IndexElseCondEndStmtContext = new IndexElseCondEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, TemplateParser.RULE_indexElseCondEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1250;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1249;
					this.indexElseIfStmt();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1252;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1256;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 1254;
				this.indexElseEachStmt();
				}
				break;

			case 2:
				{
				this.state = 1255;
				this.indexElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uniqueIfStmt(): UniqueIfStmtContext {
		let _localctx: UniqueIfStmtContext = new UniqueIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, TemplateParser.RULE_uniqueIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1258;
			this.match(TemplateParser.OPEN);
			this.state = 1259;
			this.match(TemplateParser.K_UNIQUE);
			this.state = 1260;
			this.match(TemplateParser.DOT);
			this.state = 1261;
			this.match(TemplateParser.K_IF);
			this.state = 1262;
			this.match(TemplateParser.LPAR);
			this.state = 1263;
			this.indexCondition();
			this.state = 1264;
			this.match(TemplateParser.RPAR);
			this.state = 1265;
			this.match(TemplateParser.CLOSE);
			this.state = 1269;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1266;
					this.statement();
					}
					}
				}
				this.state = 1271;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			}
			this.state = 1273;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				{
				this.state = 1272;
				this.uniqueElseStmt();
				}
				break;
			}
			this.state = 1275;
			this.match(TemplateParser.OPEN);
			this.state = 1276;
			this.match(TemplateParser.K_UNIQUE);
			this.state = 1277;
			this.match(TemplateParser.DOT);
			this.state = 1278;
			this.match(TemplateParser.K_END);
			this.state = 1279;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uniqueEachStmt(): UniqueEachStmtContext {
		let _localctx: UniqueEachStmtContext = new UniqueEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, TemplateParser.RULE_uniqueEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1281;
			this.match(TemplateParser.OPEN);
			this.state = 1282;
			this.match(TemplateParser.K_UNIQUE);
			this.state = 1283;
			this.match(TemplateParser.DOT);
			this.state = 1284;
			this.match(TemplateParser.K_EACH);
			this.state = 1289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 1285;
				this.match(TemplateParser.LPAR);
				this.state = 1286;
				this.indexCondition();
				this.state = 1287;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 1291;
			this.match(TemplateParser.CLOSE);
			this.state = 1295;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1292;
					this.statement();
					}
					}
				}
				this.state = 1297;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
			}
			this.state = 1298;
			this.match(TemplateParser.OPEN);
			this.state = 1299;
			this.match(TemplateParser.K_UNIQUE);
			this.state = 1300;
			this.match(TemplateParser.DOT);
			this.state = 1301;
			this.match(TemplateParser.K_END);
			this.state = 1302;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uniqueElseIfStmt(): UniqueElseIfStmtContext {
		let _localctx: UniqueElseIfStmtContext = new UniqueElseIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, TemplateParser.RULE_uniqueElseIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1304;
			this.match(TemplateParser.OPEN);
			this.state = 1305;
			this.match(TemplateParser.K_UNIQUE);
			this.state = 1306;
			this.match(TemplateParser.DOT);
			this.state = 1307;
			this.match(TemplateParser.K_ELSE);
			this.state = 1308;
			this.match(TemplateParser.DOT);
			this.state = 1309;
			this.match(TemplateParser.K_IF);
			this.state = 1310;
			this.match(TemplateParser.LPAR);
			this.state = 1311;
			this.indexCondition();
			this.state = 1312;
			this.match(TemplateParser.RPAR);
			this.state = 1313;
			this.match(TemplateParser.CLOSE);
			this.state = 1317;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1314;
					this.statement();
					}
					}
				}
				this.state = 1319;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uniqueElseEachStmt(): UniqueElseEachStmtContext {
		let _localctx: UniqueElseEachStmtContext = new UniqueElseEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, TemplateParser.RULE_uniqueElseEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1320;
			this.match(TemplateParser.OPEN);
			this.state = 1321;
			this.match(TemplateParser.K_UNIQUE);
			this.state = 1322;
			this.match(TemplateParser.DOT);
			this.state = 1323;
			this.match(TemplateParser.K_ELSE);
			this.state = 1324;
			this.match(TemplateParser.DOT);
			this.state = 1325;
			this.match(TemplateParser.K_EACH);
			this.state = 1330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 1326;
				this.match(TemplateParser.LPAR);
				this.state = 1327;
				this.indexCondition();
				this.state = 1328;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 1332;
			this.match(TemplateParser.CLOSE);
			this.state = 1336;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1333;
					this.statement();
					}
					}
				}
				this.state = 1338;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uniqueElseEndStmt(): UniqueElseEndStmtContext {
		let _localctx: UniqueElseEndStmtContext = new UniqueElseEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, TemplateParser.RULE_uniqueElseEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1339;
			this.match(TemplateParser.OPEN);
			this.state = 1340;
			this.match(TemplateParser.K_UNIQUE);
			this.state = 1341;
			this.match(TemplateParser.DOT);
			this.state = 1342;
			this.match(TemplateParser.K_ELSE);
			this.state = 1343;
			this.match(TemplateParser.CLOSE);
			this.state = 1347;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1344;
					this.statement();
					}
					}
				}
				this.state = 1349;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uniqueElseStmt(): UniqueElseStmtContext {
		let _localctx: UniqueElseStmtContext = new UniqueElseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, TemplateParser.RULE_uniqueElseStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1353;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				this.state = 1350;
				this.uniqueElseCondEndStmt();
				}
				break;

			case 2:
				{
				this.state = 1351;
				this.uniqueElseEachStmt();
				}
				break;

			case 3:
				{
				this.state = 1352;
				this.uniqueElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uniqueElseCondEndStmt(): UniqueElseCondEndStmtContext {
		let _localctx: UniqueElseCondEndStmtContext = new UniqueElseCondEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, TemplateParser.RULE_uniqueElseCondEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1356;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1355;
					this.uniqueElseIfStmt();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1358;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1362;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				{
				this.state = 1360;
				this.uniqueElseEachStmt();
				}
				break;

			case 2:
				{
				this.state = 1361;
				this.uniqueElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryIfStmt(): PrimaryIfStmtContext {
		let _localctx: PrimaryIfStmtContext = new PrimaryIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, TemplateParser.RULE_primaryIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1364;
			this.match(TemplateParser.OPEN);
			this.state = 1365;
			this.match(TemplateParser.K_PRIMARY);
			this.state = 1366;
			this.match(TemplateParser.DOT);
			this.state = 1367;
			this.match(TemplateParser.K_IF);
			this.state = 1368;
			this.match(TemplateParser.LPAR);
			this.state = 1369;
			this.indexCondition();
			this.state = 1370;
			this.match(TemplateParser.RPAR);
			this.state = 1371;
			this.match(TemplateParser.CLOSE);
			this.state = 1375;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1372;
					this.statement();
					}
					}
				}
				this.state = 1377;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
			}
			this.state = 1379;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				{
				this.state = 1378;
				this.primaryElseStmt();
				}
				break;
			}
			this.state = 1381;
			this.match(TemplateParser.OPEN);
			this.state = 1382;
			this.match(TemplateParser.K_PRIMARY);
			this.state = 1383;
			this.match(TemplateParser.DOT);
			this.state = 1384;
			this.match(TemplateParser.K_END);
			this.state = 1385;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryEachStmt(): PrimaryEachStmtContext {
		let _localctx: PrimaryEachStmtContext = new PrimaryEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, TemplateParser.RULE_primaryEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1387;
			this.match(TemplateParser.OPEN);
			this.state = 1388;
			this.match(TemplateParser.K_PRIMARY);
			this.state = 1389;
			this.match(TemplateParser.DOT);
			this.state = 1390;
			this.match(TemplateParser.K_EACH);
			this.state = 1395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 1391;
				this.match(TemplateParser.LPAR);
				this.state = 1392;
				this.indexCondition();
				this.state = 1393;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 1397;
			this.match(TemplateParser.CLOSE);
			this.state = 1401;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1398;
					this.statement();
					}
					}
				}
				this.state = 1403;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
			}
			this.state = 1404;
			this.match(TemplateParser.OPEN);
			this.state = 1405;
			this.match(TemplateParser.K_PRIMARY);
			this.state = 1406;
			this.match(TemplateParser.DOT);
			this.state = 1407;
			this.match(TemplateParser.K_END);
			this.state = 1408;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryElseIfStmt(): PrimaryElseIfStmtContext {
		let _localctx: PrimaryElseIfStmtContext = new PrimaryElseIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, TemplateParser.RULE_primaryElseIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1410;
			this.match(TemplateParser.OPEN);
			this.state = 1411;
			this.match(TemplateParser.K_PRIMARY);
			this.state = 1412;
			this.match(TemplateParser.DOT);
			this.state = 1413;
			this.match(TemplateParser.K_ELSE);
			this.state = 1414;
			this.match(TemplateParser.DOT);
			this.state = 1415;
			this.match(TemplateParser.K_IF);
			this.state = 1416;
			this.match(TemplateParser.LPAR);
			this.state = 1417;
			this.indexCondition();
			this.state = 1418;
			this.match(TemplateParser.RPAR);
			this.state = 1419;
			this.match(TemplateParser.CLOSE);
			this.state = 1423;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1420;
					this.statement();
					}
					}
				}
				this.state = 1425;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryElseEachStmt(): PrimaryElseEachStmtContext {
		let _localctx: PrimaryElseEachStmtContext = new PrimaryElseEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, TemplateParser.RULE_primaryElseEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1426;
			this.match(TemplateParser.OPEN);
			this.state = 1427;
			this.match(TemplateParser.K_PRIMARY);
			this.state = 1428;
			this.match(TemplateParser.DOT);
			this.state = 1429;
			this.match(TemplateParser.K_ELSE);
			this.state = 1430;
			this.match(TemplateParser.DOT);
			this.state = 1431;
			this.match(TemplateParser.K_EACH);
			this.state = 1436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 1432;
				this.match(TemplateParser.LPAR);
				this.state = 1433;
				this.indexCondition();
				this.state = 1434;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 1438;
			this.match(TemplateParser.CLOSE);
			this.state = 1442;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1439;
					this.statement();
					}
					}
				}
				this.state = 1444;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryElseEndStmt(): PrimaryElseEndStmtContext {
		let _localctx: PrimaryElseEndStmtContext = new PrimaryElseEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, TemplateParser.RULE_primaryElseEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1445;
			this.match(TemplateParser.OPEN);
			this.state = 1446;
			this.match(TemplateParser.K_PRIMARY);
			this.state = 1447;
			this.match(TemplateParser.DOT);
			this.state = 1448;
			this.match(TemplateParser.K_ELSE);
			this.state = 1449;
			this.match(TemplateParser.CLOSE);
			this.state = 1453;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1450;
					this.statement();
					}
					}
				}
				this.state = 1455;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryElseStmt(): PrimaryElseStmtContext {
		let _localctx: PrimaryElseStmtContext = new PrimaryElseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, TemplateParser.RULE_primaryElseStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1459;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 1456;
				this.primaryElseCondEndStmt();
				}
				break;

			case 2:
				{
				this.state = 1457;
				this.primaryElseEachStmt();
				}
				break;

			case 3:
				{
				this.state = 1458;
				this.primaryElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryElseCondEndStmt(): PrimaryElseCondEndStmtContext {
		let _localctx: PrimaryElseCondEndStmtContext = new PrimaryElseCondEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, TemplateParser.RULE_primaryElseCondEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1462;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1461;
					this.primaryElseIfStmt();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1464;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1468;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				{
				this.state = 1466;
				this.primaryElseEachStmt();
				}
				break;

			case 2:
				{
				this.state = 1467;
				this.primaryElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraintIfStmt(): ConstraintIfStmtContext {
		let _localctx: ConstraintIfStmtContext = new ConstraintIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, TemplateParser.RULE_constraintIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1470;
			this.match(TemplateParser.OPEN);
			this.state = 1471;
			this.match(TemplateParser.K_CONSTRAINT);
			this.state = 1472;
			this.match(TemplateParser.DOT);
			this.state = 1473;
			this.match(TemplateParser.K_IF);
			this.state = 1474;
			this.match(TemplateParser.LPAR);
			this.state = 1475;
			this.constraintCondition();
			this.state = 1476;
			this.match(TemplateParser.RPAR);
			this.state = 1477;
			this.match(TemplateParser.CLOSE);
			this.state = 1481;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1478;
					this.statement();
					}
					}
				}
				this.state = 1483;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			}
			this.state = 1485;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				{
				this.state = 1484;
				this.constraintElseStmt();
				}
				break;
			}
			this.state = 1487;
			this.match(TemplateParser.OPEN);
			this.state = 1488;
			this.match(TemplateParser.K_CONSTRAINT);
			this.state = 1489;
			this.match(TemplateParser.DOT);
			this.state = 1490;
			this.match(TemplateParser.K_END);
			this.state = 1491;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraintEachStmt(): ConstraintEachStmtContext {
		let _localctx: ConstraintEachStmtContext = new ConstraintEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, TemplateParser.RULE_constraintEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1493;
			this.match(TemplateParser.OPEN);
			this.state = 1494;
			this.match(TemplateParser.K_CONSTRAINT);
			this.state = 1495;
			this.match(TemplateParser.DOT);
			this.state = 1496;
			this.match(TemplateParser.K_EACH);
			this.state = 1501;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 1497;
				this.match(TemplateParser.LPAR);
				this.state = 1498;
				this.constraintCondition();
				this.state = 1499;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 1503;
			this.match(TemplateParser.CLOSE);
			this.state = 1507;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1504;
					this.statement();
					}
					}
				}
				this.state = 1509;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
			}
			this.state = 1510;
			this.match(TemplateParser.OPEN);
			this.state = 1511;
			this.match(TemplateParser.K_CONSTRAINT);
			this.state = 1512;
			this.match(TemplateParser.DOT);
			this.state = 1513;
			this.match(TemplateParser.K_END);
			this.state = 1514;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraintElseIfStmt(): ConstraintElseIfStmtContext {
		let _localctx: ConstraintElseIfStmtContext = new ConstraintElseIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, TemplateParser.RULE_constraintElseIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1516;
			this.match(TemplateParser.OPEN);
			this.state = 1517;
			this.match(TemplateParser.K_CONSTRAINT);
			this.state = 1518;
			this.match(TemplateParser.DOT);
			this.state = 1519;
			this.match(TemplateParser.K_ELSE);
			this.state = 1520;
			this.match(TemplateParser.DOT);
			this.state = 1521;
			this.match(TemplateParser.K_IF);
			this.state = 1522;
			this.match(TemplateParser.LPAR);
			this.state = 1523;
			this.indexCondition();
			this.state = 1524;
			this.match(TemplateParser.RPAR);
			this.state = 1525;
			this.match(TemplateParser.CLOSE);
			this.state = 1529;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1526;
					this.statement();
					}
					}
				}
				this.state = 1531;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraintElseEachStmt(): ConstraintElseEachStmtContext {
		let _localctx: ConstraintElseEachStmtContext = new ConstraintElseEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, TemplateParser.RULE_constraintElseEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1532;
			this.match(TemplateParser.OPEN);
			this.state = 1533;
			this.match(TemplateParser.K_CONSTRAINT);
			this.state = 1534;
			this.match(TemplateParser.DOT);
			this.state = 1535;
			this.match(TemplateParser.K_ELSE);
			this.state = 1536;
			this.match(TemplateParser.DOT);
			this.state = 1537;
			this.match(TemplateParser.K_EACH);
			this.state = 1542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 1538;
				this.match(TemplateParser.LPAR);
				this.state = 1539;
				this.indexCondition();
				this.state = 1540;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 1544;
			this.match(TemplateParser.CLOSE);
			this.state = 1548;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1545;
					this.statement();
					}
					}
				}
				this.state = 1550;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraintElseEndStmt(): ConstraintElseEndStmtContext {
		let _localctx: ConstraintElseEndStmtContext = new ConstraintElseEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, TemplateParser.RULE_constraintElseEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1551;
			this.match(TemplateParser.OPEN);
			this.state = 1552;
			this.match(TemplateParser.K_CONSTRAINT);
			this.state = 1553;
			this.match(TemplateParser.DOT);
			this.state = 1554;
			this.match(TemplateParser.K_ELSE);
			this.state = 1555;
			this.match(TemplateParser.CLOSE);
			this.state = 1559;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1556;
					this.statement();
					}
					}
				}
				this.state = 1561;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraintElseStmt(): ConstraintElseStmtContext {
		let _localctx: ConstraintElseStmtContext = new ConstraintElseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, TemplateParser.RULE_constraintElseStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1565;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				{
				this.state = 1562;
				this.constraintElseCondEndStmt();
				}
				break;

			case 2:
				{
				this.state = 1563;
				this.constraintElseEachStmt();
				}
				break;

			case 3:
				{
				this.state = 1564;
				this.constraintElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraintElseCondEndStmt(): ConstraintElseCondEndStmtContext {
		let _localctx: ConstraintElseCondEndStmtContext = new ConstraintElseCondEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, TemplateParser.RULE_constraintElseCondEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1568;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1567;
					this.constraintElseIfStmt();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1570;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1574;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				{
				this.state = 1572;
				this.constraintElseEachStmt();
				}
				break;

			case 2:
				{
				this.state = 1573;
				this.constraintElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public foreignIfStmt(): ForeignIfStmtContext {
		let _localctx: ForeignIfStmtContext = new ForeignIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, TemplateParser.RULE_foreignIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1576;
			this.match(TemplateParser.OPEN);
			this.state = 1577;
			this.match(TemplateParser.K_FOREIGN);
			this.state = 1578;
			this.match(TemplateParser.DOT);
			this.state = 1579;
			this.match(TemplateParser.K_IF);
			this.state = 1580;
			this.match(TemplateParser.LPAR);
			this.state = 1581;
			this.fieldCondition();
			this.state = 1582;
			this.match(TemplateParser.RPAR);
			this.state = 1583;
			this.match(TemplateParser.CLOSE);
			this.state = 1587;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1584;
					this.statement();
					}
					}
				}
				this.state = 1589;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
			}
			this.state = 1591;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				{
				this.state = 1590;
				this.foreignElseStmt();
				}
				break;
			}
			this.state = 1593;
			this.match(TemplateParser.OPEN);
			this.state = 1594;
			this.match(TemplateParser.K_FOREIGN);
			this.state = 1595;
			this.match(TemplateParser.DOT);
			this.state = 1596;
			this.match(TemplateParser.K_END);
			this.state = 1597;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public foreignEachStmt(): ForeignEachStmtContext {
		let _localctx: ForeignEachStmtContext = new ForeignEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, TemplateParser.RULE_foreignEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1599;
			this.match(TemplateParser.OPEN);
			this.state = 1600;
			this.match(TemplateParser.K_FOREIGN);
			this.state = 1601;
			this.match(TemplateParser.DOT);
			this.state = 1602;
			this.match(TemplateParser.K_EACH);
			this.state = 1607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 1603;
				this.match(TemplateParser.LPAR);
				this.state = 1604;
				this.fieldCondition();
				this.state = 1605;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 1609;
			this.match(TemplateParser.CLOSE);
			this.state = 1613;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1610;
					this.statement();
					}
					}
				}
				this.state = 1615;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
			}
			this.state = 1616;
			this.match(TemplateParser.OPEN);
			this.state = 1617;
			this.match(TemplateParser.K_FOREIGN);
			this.state = 1618;
			this.match(TemplateParser.DOT);
			this.state = 1619;
			this.match(TemplateParser.K_END);
			this.state = 1620;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public foreignElseIfStmt(): ForeignElseIfStmtContext {
		let _localctx: ForeignElseIfStmtContext = new ForeignElseIfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, TemplateParser.RULE_foreignElseIfStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1622;
			this.match(TemplateParser.OPEN);
			this.state = 1623;
			this.match(TemplateParser.K_FOREIGN);
			this.state = 1624;
			this.match(TemplateParser.DOT);
			this.state = 1625;
			this.match(TemplateParser.K_ELSE);
			this.state = 1626;
			this.match(TemplateParser.DOT);
			this.state = 1627;
			this.match(TemplateParser.K_IF);
			this.state = 1628;
			this.match(TemplateParser.LPAR);
			this.state = 1629;
			this.indexCondition();
			this.state = 1630;
			this.match(TemplateParser.RPAR);
			this.state = 1631;
			this.match(TemplateParser.CLOSE);
			this.state = 1635;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1632;
					this.statement();
					}
					}
				}
				this.state = 1637;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public foreignElseEachStmt(): ForeignElseEachStmtContext {
		let _localctx: ForeignElseEachStmtContext = new ForeignElseEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, TemplateParser.RULE_foreignElseEachStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1638;
			this.match(TemplateParser.OPEN);
			this.state = 1639;
			this.match(TemplateParser.K_FOREIGN);
			this.state = 1640;
			this.match(TemplateParser.DOT);
			this.state = 1641;
			this.match(TemplateParser.K_ELSE);
			this.state = 1642;
			this.match(TemplateParser.DOT);
			this.state = 1643;
			this.match(TemplateParser.K_EACH);
			this.state = 1648;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TemplateParser.LPAR) {
				{
				this.state = 1644;
				this.match(TemplateParser.LPAR);
				this.state = 1645;
				this.indexCondition();
				this.state = 1646;
				this.match(TemplateParser.RPAR);
				}
			}

			this.state = 1650;
			this.match(TemplateParser.CLOSE);
			this.state = 1654;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1651;
					this.statement();
					}
					}
				}
				this.state = 1656;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public foreignElseEndStmt(): ForeignElseEndStmtContext {
		let _localctx: ForeignElseEndStmtContext = new ForeignElseEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, TemplateParser.RULE_foreignElseEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1657;
			this.match(TemplateParser.OPEN);
			this.state = 1658;
			this.match(TemplateParser.K_FOREIGN);
			this.state = 1659;
			this.match(TemplateParser.DOT);
			this.state = 1660;
			this.match(TemplateParser.K_ELSE);
			this.state = 1661;
			this.match(TemplateParser.CLOSE);
			this.state = 1665;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1662;
					this.statement();
					}
					}
				}
				this.state = 1667;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public foreignElseStmt(): ForeignElseStmtContext {
		let _localctx: ForeignElseStmtContext = new ForeignElseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, TemplateParser.RULE_foreignElseStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1671;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				{
				this.state = 1668;
				this.foreignElseCondEndStmt();
				}
				break;

			case 2:
				{
				this.state = 1669;
				this.foreignElseEachStmt();
				}
				break;

			case 3:
				{
				this.state = 1670;
				this.foreignElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public foreignElseCondEndStmt(): ForeignElseCondEndStmtContext {
		let _localctx: ForeignElseCondEndStmtContext = new ForeignElseCondEndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, TemplateParser.RULE_foreignElseCondEndStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1674;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1673;
					this.foreignElseIfStmt();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1676;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1680;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				{
				this.state = 1678;
				this.foreignElseEachStmt();
				}
				break;

			case 2:
				{
				this.state = 1679;
				this.foreignElseEndStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, TemplateParser.RULE_constant);
		try {
			this.state = 1689;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1682;
				this.tableStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1683;
				this.fieldStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1684;
				this.indexNameStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1685;
				this.uniqueNameStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1686;
				this.primaryNameStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1687;
				this.constraintNameStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1688;
				this.foreignNameStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableStmt(): TableStmtContext {
		let _localctx: TableStmtContext = new TableStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, TemplateParser.RULE_tableStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1691;
			this.match(TemplateParser.OPEN);
			this.state = 1692;
			this.tableLevel();
			this.state = 1696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TemplateParser.DOT) {
				{
				{
				this.state = 1693;
				this.tableProps();
				}
				}
				this.state = 1698;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1699;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableProps(): TablePropsContext {
		let _localctx: TablePropsContext = new TablePropsContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, TemplateParser.RULE_tableProps);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1701;
			this.match(TemplateParser.DOT);
			this.state = 1702;
			this.tableProp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableProp(): TablePropContext {
		let _localctx: TablePropContext = new TablePropContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, TemplateParser.RULE_tableProp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1704;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TemplateParser.K_CHARS) | (1 << TemplateParser.K_COMMENT) | (1 << TemplateParser.K_DEFAULT) | (1 << TemplateParser.K_GENDER))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (TemplateParser.K_INHERITED - 36)) | (1 << (TemplateParser.K_LETTER - 36)) | (1 << (TemplateParser.K_NAME - 36)) | (1 << (TemplateParser.K_NORM - 36)) | (1 << (TemplateParser.K_PACKAGE - 36)) | (1 << (TemplateParser.K_PATH - 36)) | (1 << (TemplateParser.K_PLURAL - 36)) | (1 << (TemplateParser.K_STYLE - 36)) | (1 << (TemplateParser.K_UNIX - 36)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldStmt(): FieldStmtContext {
		let _localctx: FieldStmtContext = new FieldStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, TemplateParser.RULE_fieldStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1706;
			this.match(TemplateParser.OPEN);
			this.state = 1707;
			this.fieldLevel();
			this.state = 1711;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TemplateParser.DOT) {
				{
				{
				this.state = 1708;
				this.fieldProps();
				}
				}
				this.state = 1713;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1714;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldProps(): FieldPropsContext {
		let _localctx: FieldPropsContext = new FieldPropsContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, TemplateParser.RULE_fieldProps);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1716;
			this.match(TemplateParser.DOT);
			this.state = 1717;
			this.fieldProp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldProp(): FieldPropContext {
		let _localctx: FieldPropContext = new FieldPropContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, TemplateParser.RULE_fieldProp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1719;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TemplateParser.K_ARRAY) | (1 << TemplateParser.K_CHARS) | (1 << TemplateParser.K_COMMENT) | (1 << TemplateParser.K_COUNT) | (1 << TemplateParser.K_DEFAULT) | (1 << TemplateParser.K_FOLDER) | (1 << TemplateParser.K_GENDER) | (1 << TemplateParser.K_HEIGHT) | (1 << TemplateParser.K_HIGH))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TemplateParser.K_IMAGE - 33)) | (1 << (TemplateParser.K_INDEX - 33)) | (1 << (TemplateParser.K_INFO - 33)) | (1 << (TemplateParser.K_LENGTH - 33)) | (1 << (TemplateParser.K_LETTER - 33)) | (1 << (TemplateParser.K_LOW - 33)) | (1 << (TemplateParser.K_MASK - 33)) | (1 << (TemplateParser.K_NAME - 33)) | (1 << (TemplateParser.K_NORM - 33)) | (1 << (TemplateParser.K_NUMBER - 33)) | (1 << (TemplateParser.K_OPTION - 33)) | (1 << (TemplateParser.K_SINGULAR - 33)) | (1 << (TemplateParser.K_SIZE - 33)) | (1 << (TemplateParser.K_STYLE - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (TemplateParser.K_UNIX - 65)) | (1 << (TemplateParser.K_WIDTH - 65)) | (1 << (TemplateParser.K_ON - 65)) | (1 << (TemplateParser.K_DELETE - 65)) | (1 << (TemplateParser.K_UPDATE - 65)) | (1 << (TemplateParser.K_INSERT - 65)) | (1 << (TemplateParser.K_NOID - 65)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexNameStmt(): IndexNameStmtContext {
		let _localctx: IndexNameStmtContext = new IndexNameStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, TemplateParser.RULE_indexNameStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1721;
			this.match(TemplateParser.OPEN);
			this.state = 1722;
			this.match(TemplateParser.K_INDEX);
			this.state = 1723;
			this.match(TemplateParser.DOT);
			this.state = 1724;
			this.match(TemplateParser.K_NAME);
			this.state = 1725;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uniqueNameStmt(): UniqueNameStmtContext {
		let _localctx: UniqueNameStmtContext = new UniqueNameStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, TemplateParser.RULE_uniqueNameStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1727;
			this.match(TemplateParser.OPEN);
			this.state = 1728;
			this.match(TemplateParser.K_UNIQUE);
			this.state = 1729;
			this.match(TemplateParser.DOT);
			this.state = 1730;
			this.match(TemplateParser.K_NAME);
			this.state = 1731;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNameStmt(): PrimaryNameStmtContext {
		let _localctx: PrimaryNameStmtContext = new PrimaryNameStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, TemplateParser.RULE_primaryNameStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1733;
			this.match(TemplateParser.OPEN);
			this.state = 1734;
			this.match(TemplateParser.K_PRIMARY);
			this.state = 1735;
			this.match(TemplateParser.DOT);
			this.state = 1736;
			this.match(TemplateParser.K_NAME);
			this.state = 1737;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraintNameStmt(): ConstraintNameStmtContext {
		let _localctx: ConstraintNameStmtContext = new ConstraintNameStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, TemplateParser.RULE_constraintNameStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1739;
			this.match(TemplateParser.OPEN);
			this.state = 1740;
			this.match(TemplateParser.K_CONSTRAINT);
			this.state = 1741;
			this.match(TemplateParser.DOT);
			this.state = 1742;
			this.match(TemplateParser.K_NAME);
			this.state = 1743;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public foreignNameStmt(): ForeignNameStmtContext {
		let _localctx: ForeignNameStmtContext = new ForeignNameStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, TemplateParser.RULE_foreignNameStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1745;
			this.match(TemplateParser.OPEN);
			this.state = 1746;
			this.match(TemplateParser.K_FOREIGN);
			this.state = 1747;
			this.match(TemplateParser.DOT);
			this.state = 1748;
			this.match(TemplateParser.K_NAME);
			this.state = 1749;
			this.match(TemplateParser.CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public text(): TextContext {
		let _localctx: TextContext = new TextContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, TemplateParser.RULE_text);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1751;
			this.match(TemplateParser.TEXT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableLevel(): TableLevelContext {
		let _localctx: TableLevelContext = new TableLevelContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, TemplateParser.RULE_tableLevel);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1753;
			_la = this._input.LA(1);
			if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (TemplateParser.K_INHERITED - 36)) | (1 << (TemplateParser.K_REFERENCE - 36)) | (1 << (TemplateParser.K_TABLE - 36)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldLevel(): FieldLevelContext {
		let _localctx: FieldLevelContext = new FieldLevelContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, TemplateParser.RULE_fieldLevel);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1755;
			_la = this._input.LA(1);
			if (!(((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & ((1 << (TemplateParser.K_DESCRIPTOR - 19)) | (1 << (TemplateParser.K_FIELD - 19)) | (1 << (TemplateParser.K_IMAGE - 19)) | (1 << (TemplateParser.K_OPTION - 19)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public regex(): RegexContext {
		let _localctx: RegexContext = new RegexContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, TemplateParser.RULE_regex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1757;
			this.match(TemplateParser.REGEX);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public word(): WordContext {
		let _localctx: WordContext = new WordContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, TemplateParser.RULE_word);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1759;
			this.match(TemplateParser.WORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableCondition(): TableConditionContext {
		let _localctx: TableConditionContext = new TableConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, TemplateParser.RULE_tableCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1761;
			this.condition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldCondition(): FieldConditionContext {
		let _localctx: FieldConditionContext = new FieldConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, TemplateParser.RULE_fieldCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1763;
			this.condition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexCondition(): IndexConditionContext {
		let _localctx: IndexConditionContext = new IndexConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, TemplateParser.RULE_indexCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1765;
			this.condition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraintCondition(): ConstraintConditionContext {
		let _localctx: ConstraintConditionContext = new ConstraintConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, TemplateParser.RULE_constraintCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1767;
			this.condition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, TemplateParser.RULE_condition);
		try {
			this.state = 1777;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1769;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1770;
				this.priorityCondition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1771;
				this.anyCondition();
				this.state = 1772;
				this.orCondition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1774;
				this.anyCondition();
				this.state = 1775;
				this.andCondition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anyCondition(): AnyConditionContext {
		let _localctx: AnyConditionContext = new AnyConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, TemplateParser.RULE_anyCondition);
		try {
			this.state = 1781;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TemplateParser.K_ALL:
			case TemplateParser.K_ARRAY:
			case TemplateParser.K_BIGINT:
			case TemplateParser.K_BLOB:
			case TemplateParser.K_BOOLEAN:
			case TemplateParser.K_COMMENT:
			case TemplateParser.K_CONSTRAINT:
			case TemplateParser.K_CURRENCY:
			case TemplateParser.K_DATE:
			case TemplateParser.K_DATETIME:
			case TemplateParser.K_DEFAULT:
			case TemplateParser.K_DESCRIPTION:
			case TemplateParser.K_DESCRIPTOR:
			case TemplateParser.K_DOUBLE:
			case TemplateParser.K_ENUM:
			case TemplateParser.K_FLOAT:
			case TemplateParser.K_FOREIGN:
			case TemplateParser.K_IMAGE:
			case TemplateParser.K_INDEX:
			case TemplateParser.K_INFO:
			case TemplateParser.K_INHERITED:
			case TemplateParser.K_INTEGER:
			case TemplateParser.K_MASKED:
			case TemplateParser.K_NULL:
			case TemplateParser.K_OPTION:
			case TemplateParser.K_PACKAGE:
			case TemplateParser.K_PATH:
			case TemplateParser.K_PRIMARY:
			case TemplateParser.K_RADIO:
			case TemplateParser.K_REFERENCE:
			case TemplateParser.K_REPEATED:
			case TemplateParser.K_SEARCHABLE:
			case TemplateParser.K_STRING:
			case TemplateParser.K_TEXT:
			case TemplateParser.K_TIME:
			case TemplateParser.K_UNIQUE:
			case TemplateParser.K_UNSIGNED:
			case TemplateParser.K_FIRST:
			case TemplateParser.K_FEW_FIELDS:
			case TemplateParser.WORD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1779;
				this.expression();
				}
				break;
			case TemplateParser.LPAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1780;
				this.priorityCondition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public priorityCondition(): PriorityConditionContext {
		let _localctx: PriorityConditionContext = new PriorityConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, TemplateParser.RULE_priorityCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1783;
			this.match(TemplateParser.LPAR);
			this.state = 1784;
			this.condition();
			this.state = 1785;
			this.match(TemplateParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orCondition(): OrConditionContext {
		let _localctx: OrConditionContext = new OrConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, TemplateParser.RULE_orCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1787;
			this.match(TemplateParser.OR);
			this.state = 1788;
			this.condition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public andCondition(): AndConditionContext {
		let _localctx: AndConditionContext = new AndConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, TemplateParser.RULE_andCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1790;
			this.match(TemplateParser.AND);
			this.state = 1791;
			this.condition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, TemplateParser.RULE_expression);
		try {
			this.state = 1797;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TemplateParser.K_COMMENT:
			case TemplateParser.K_INHERITED:
			case TemplateParser.K_PACKAGE:
			case TemplateParser.K_PATH:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1793;
				this.attribute();
				}
				break;
			case TemplateParser.K_ALL:
			case TemplateParser.K_ARRAY:
			case TemplateParser.K_CONSTRAINT:
			case TemplateParser.K_DEFAULT:
			case TemplateParser.K_DESCRIPTION:
			case TemplateParser.K_DESCRIPTOR:
			case TemplateParser.K_FOREIGN:
			case TemplateParser.K_IMAGE:
			case TemplateParser.K_INDEX:
			case TemplateParser.K_INFO:
			case TemplateParser.K_MASKED:
			case TemplateParser.K_NULL:
			case TemplateParser.K_OPTION:
			case TemplateParser.K_PRIMARY:
			case TemplateParser.K_RADIO:
			case TemplateParser.K_REFERENCE:
			case TemplateParser.K_REPEATED:
			case TemplateParser.K_SEARCHABLE:
			case TemplateParser.K_UNIQUE:
			case TemplateParser.K_UNSIGNED:
			case TemplateParser.K_FIRST:
			case TemplateParser.K_FEW_FIELDS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1794;
				this.property();
				}
				break;
			case TemplateParser.K_BIGINT:
			case TemplateParser.K_BLOB:
			case TemplateParser.K_BOOLEAN:
			case TemplateParser.K_CURRENCY:
			case TemplateParser.K_DATE:
			case TemplateParser.K_DATETIME:
			case TemplateParser.K_DOUBLE:
			case TemplateParser.K_ENUM:
			case TemplateParser.K_FLOAT:
			case TemplateParser.K_INTEGER:
			case TemplateParser.K_STRING:
			case TemplateParser.K_TEXT:
			case TemplateParser.K_TIME:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1795;
				this.type();
				}
				break;
			case TemplateParser.WORD:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1796;
				this.word();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, TemplateParser.RULE_attribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1799;
			_la = this._input.LA(1);
			if (!(_la === TemplateParser.K_COMMENT || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (TemplateParser.K_INHERITED - 36)) | (1 << (TemplateParser.K_PACKAGE - 36)) | (1 << (TemplateParser.K_PATH - 36)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, TemplateParser.RULE_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1801;
			_la = this._input.LA(1);
			if (!(((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & ((1 << (TemplateParser.K_ALL - 4)) | (1 << (TemplateParser.K_ARRAY - 4)) | (1 << (TemplateParser.K_CONSTRAINT - 4)) | (1 << (TemplateParser.K_DEFAULT - 4)) | (1 << (TemplateParser.K_DESCRIPTION - 4)) | (1 << (TemplateParser.K_DESCRIPTOR - 4)) | (1 << (TemplateParser.K_FOREIGN - 4)) | (1 << (TemplateParser.K_IMAGE - 4)) | (1 << (TemplateParser.K_INDEX - 4)) | (1 << (TemplateParser.K_INFO - 4)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (TemplateParser.K_MASKED - 42)) | (1 << (TemplateParser.K_NULL - 42)) | (1 << (TemplateParser.K_OPTION - 42)) | (1 << (TemplateParser.K_PRIMARY - 42)) | (1 << (TemplateParser.K_RADIO - 42)) | (1 << (TemplateParser.K_REFERENCE - 42)) | (1 << (TemplateParser.K_REPEATED - 42)) | (1 << (TemplateParser.K_SEARCHABLE - 42)) | (1 << (TemplateParser.K_UNIQUE - 42)) | (1 << (TemplateParser.K_UNSIGNED - 42)) | (1 << (TemplateParser.K_FIRST - 42)) | (1 << (TemplateParser.K_FEW_FIELDS - 42)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, TemplateParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1803;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TemplateParser.K_BIGINT) | (1 << TemplateParser.K_BLOB) | (1 << TemplateParser.K_BOOLEAN) | (1 << TemplateParser.K_CURRENCY) | (1 << TemplateParser.K_DATE) | (1 << TemplateParser.K_DATETIME) | (1 << TemplateParser.K_DOUBLE) | (1 << TemplateParser.K_ENUM) | (1 << TemplateParser.K_FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (TemplateParser.K_INTEGER - 37)) | (1 << (TemplateParser.K_STRING - 37)) | (1 << (TemplateParser.K_TEXT - 37)) | (1 << (TemplateParser.K_TIME - 37)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03V\u0710\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x03\x02\x07\x02\xFC\n\x02\f\x02\x0E\x02\xFF\v\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03\u0106\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
		"\x04\u0124\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x07\x05\u012F\n\x05\f\x05\x0E\x05\u0132\v\x05\x03\x05" +
		"\x05\x05\u0135\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07" +
		"\x06\u0146\n\x06\f\x06\x0E\x06\u0149\v\x06\x03\x06\x05\x06\u014C\n\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u015C\n\x07\x03\x07\x03" +
		"\x07\x07\x07\u0160\n\x07\f\x07\x0E\x07\u0163\v\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x07\b\u0176\n\b\f\b\x0E\b\u0179\v\b\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u0186\n" +
		"\t\f\t\x0E\t\u0189\v\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x05\n\u0195\n\n\x03\n\x03\n\x07\n\u0199\n\n\f\n\x0E\n\u019C" +
		"\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u01A4\n\v\f\v\x0E\v\u01A7" +
		"\v\v\x03\f\x03\f\x03\f\x05\f\u01AC\n\f\x03\r\x06\r\u01AF\n\r\r\r\x0E\r" +
		"\u01B0\x03\r\x03\r\x05\r\u01B5\n\r\x03\x0E\x03\x0E\x05\x0E\u01B9\n\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x07\x0F\u01C4\n\x0F\f\x0F\x0E\x0F\u01C7\v\x0F\x03\x0F\x05\x0F\u01CA\n" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u01DB\n\x10" +
		"\f\x10\x0E\x10\u01DE\v\x10\x03\x10\x05\x10\u01E1\n\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x05\x11\u01F1\n\x11\x03\x11\x03\x11\x07\x11\u01F5" +
		"\n\x11\f\x11\x0E\x11\u01F8\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x07\x12\u020B\n\x12\f\x12\x0E\x12\u020E\v\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x07\x13\u021B\n\x13\f\x13\x0E\x13\u021E\v\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x05\x14\u022A\n\x14\x03\x14\x03\x14\x07\x14\u022E\n\x14\f\x14\x0E\x14" +
		"\u0231\v\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0239" +
		"\n\x15\f\x15\x0E\x15\u023C\v\x15\x03\x16\x03\x16\x03\x16\x05\x16\u0241" +
		"\n\x16\x03\x17\x06\x17\u0244\n\x17\r\x17\x0E\x17\u0245\x03\x17\x03\x17" +
		"\x05\x17\u024A\n\x17\x03\x18\x03\x18\x05\x18\u024E\n\x18\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0259" +
		"\n\x19\f\x19\x0E\x19\u025C\v\x19\x03\x19\x05\x19\u025F\n\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u0270\n\x1A\f\x1A\x0E\x1A" +
		"\u0273\v\x1A\x03\x1A\x05\x1A\u0276\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x05\x1B\u0286\n\x1B\x03\x1B\x03\x1B\x07\x1B\u028A\n\x1B\f\x1B" +
		"\x0E\x1B\u028D\v\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x07\x1C\u02A0\n\x1C\f\x1C\x0E\x1C\u02A3\v\x1C\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x07\x1D\u02B0\n\x1D\f\x1D\x0E\x1D\u02B3\v\x1D\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u02BF" +
		"\n\x1E\x03\x1E\x03\x1E\x07\x1E\u02C3\n\x1E\f\x1E\x0E\x1E\u02C6\v\x1E\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u02CE\n\x1F\f\x1F" +
		"\x0E\x1F\u02D1\v\x1F\x03 \x03 \x03 \x05 \u02D6\n \x03!\x06!\u02D9\n!\r" +
		"!\x0E!\u02DA\x03!\x03!\x05!\u02DF\n!\x03\"\x03\"\x05\"\u02E3\n\"\x03#" +
		"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x07#\u02EE\n#\f#\x0E#\u02F1\v" +
		"#\x03#\x05#\u02F4\n#\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x03$\x07$\u0305\n$\f$\x0E$\u0308\v$\x03$\x05$\u030B" +
		"\n$\x03$\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03" +
		"%\x07%\u031B\n%\f%\x0E%\u031E\v%\x03%\x05%\u0321\n%\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x07&\u0332\n" +
		"&\f&\x0E&\u0335\v&\x03&\x05&\u0338\n&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0348\n\'\x03\'\x03" +
		"\'\x07\'\u034C\n\'\f\'\x0E\'\u034F\v\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
		"\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u0362\n" +
		"(\f(\x0E(\u0365\v(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
		")\x07)\u0372\n)\f)\x0E)\u0375\v)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03" +
		"*\x03*\x03*\x07*\u0381\n*\f*\x0E*\u0384\v*\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x07+\u0391\n+\f+\x0E+\u0394\v+\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u03A0\n,\x03,\x03,\x07,\u03A4" +
		"\n,\f,\x0E,\u03A7\v,\x03-\x03-\x03-\x03-\x03-\x03-\x07-\u03AF\n-\f-\x0E" +
		"-\u03B2\v-\x03.\x03.\x03.\x05.\u03B7\n.\x03/\x06/\u03BA\n/\r/\x0E/\u03BB" +
		"\x03/\x03/\x05/\u03C0\n/\x030\x030\x030\x030\x050\u03C6\n0\x031\x031\x03" +
		"1\x031\x031\x031\x031\x031\x031\x071\u03D1\n1\f1\x0E1\u03D4\v1\x031\x05" +
		"1\u03D7\n1\x031\x031\x031\x031\x031\x031\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x072\u03E7\n2\f2\x0E2\u03EA\v2\x032\x052\u03ED\n2\x032\x03" +
		"2\x032\x032\x032\x032\x033\x033\x033\x033\x033\x033\x033\x033\x033\x07" +
		"3\u03FE\n3\f3\x0E3\u0401\v3\x033\x053\u0404\n3\x033\x033\x033\x033\x03" +
		"3\x033\x034\x034\x034\x034\x034\x034\x034\x034\x054\u0414\n4\x034\x03" +
		"4\x074\u0418\n4\f4\x0E4\u041B\v4\x034\x034\x034\x034\x034\x034\x035\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x075\u042E\n5\f5\x0E5\u0431" +
		"\v5\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x076\u043D\n6\f" +
		"6\x0E6\u0440\v6\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x077\u044D\n7\f7\x0E7\u0450\v7\x038\x038\x038\x038\x038\x038\x038\x03" +
		"8\x038\x038\x058\u045C\n8\x038\x038\x078\u0460\n8\f8\x0E8\u0463\v8\x03" +
		"9\x039\x039\x039\x039\x039\x079\u046B\n9\f9\x0E9\u046E\v9\x03:\x03:\x03" +
		":\x05:\u0473\n:\x03;\x06;\u0476\n;\r;\x0E;\u0477\x03;\x03;\x05;\u047C" +
		"\n;\x03<\x03<\x03<\x05<\u0481\n<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03" +
		"=\x03=\x07=\u048C\n=\f=\x0E=\u048F\v=\x03=\x05=\u0492\n=\x03=\x03=\x03" +
		"=\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x05>\u04A2\n" +
		">\x03>\x03>\x07>\u04A6\n>\f>\x0E>\u04A9\v>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x07?\u04BC\n" +
		"?\f?\x0E?\u04BF\v?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05" +
		"@\u04CB\n@\x03@\x03@\x07@\u04CF\n@\f@\x0E@\u04D2\v@\x03A\x03A\x03A\x03" +
		"A\x03A\x03A\x07A\u04DA\nA\fA\x0EA\u04DD\vA\x03B\x03B\x03B\x05B\u04E2\n" +
		"B\x03C\x06C\u04E5\nC\rC\x0EC\u04E6\x03C\x03C\x05C\u04EB\nC\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x03D\x03D\x07D\u04F6\nD\fD\x0ED\u04F9\vD\x03D\x05" +
		"D\u04FC\nD\x03D\x03D\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x05E\u050C\nE\x03E\x03E\x07E\u0510\nE\fE\x0EE\u0513\vE\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
		"F\x03F\x03F\x07F\u0526\nF\fF\x0EF\u0529\vF\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x05G\u0535\nG\x03G\x03G\x07G\u0539\nG\fG\x0EG\u053C" +
		"\vG\x03H\x03H\x03H\x03H\x03H\x03H\x07H\u0544\nH\fH\x0EH\u0547\vH\x03I" +
		"\x03I\x03I\x05I\u054C\nI\x03J\x06J\u054F\nJ\rJ\x0EJ\u0550\x03J\x03J\x05" +
		"J\u0555\nJ\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x07K\u0560\nK" +
		"\fK\x0EK\u0563\vK\x03K\x05K\u0566\nK\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
		"L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u0576\nL\x03L\x03L\x07L\u057A" +
		"\nL\fL\x0EL\u057D\vL\x03L\x03L\x03L\x03L\x03L\x03L\x03M\x03M\x03M\x03" +
		"M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x07M\u0590\nM\fM\x0EM\u0593\vM\x03" +
		"N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x05N\u059F\nN\x03N\x03" +
		"N\x07N\u05A3\nN\fN\x0EN\u05A6\vN\x03O\x03O\x03O\x03O\x03O\x03O\x07O\u05AE" +
		"\nO\fO\x0EO\u05B1\vO\x03P\x03P\x03P\x05P\u05B6\nP\x03Q\x06Q\u05B9\nQ\r" +
		"Q\x0EQ\u05BA\x03Q\x03Q\x05Q\u05BF\nQ\x03R\x03R\x03R\x03R\x03R\x03R\x03" +
		"R\x03R\x03R\x07R\u05CA\nR\fR\x0ER\u05CD\vR\x03R\x05R\u05D0\nR\x03R\x03" +
		"R\x03R\x03R\x03R\x03R\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u05E0" +
		"\nS\x03S\x03S\x07S\u05E4\nS\fS\x0ES\u05E7\vS\x03S\x03S\x03S\x03S\x03S" +
		"\x03S\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x07T\u05FA" +
		"\nT\fT\x0ET\u05FD\vT\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03" +
		"U\x05U\u0609\nU\x03U\x03U\x07U\u060D\nU\fU\x0EU\u0610\vU\x03V\x03V\x03" +
		"V\x03V\x03V\x03V\x07V\u0618\nV\fV\x0EV\u061B\vV\x03W\x03W\x03W\x05W\u0620" +
		"\nW\x03X\x06X\u0623\nX\rX\x0EX\u0624\x03X\x03X\x05X\u0629\nX\x03Y\x03" +
		"Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x07Y\u0634\nY\fY\x0EY\u0637\vY\x03" +
		"Y\x05Y\u063A\nY\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03" +
		"Z\x03Z\x03Z\x03Z\x05Z\u064A\nZ\x03Z\x03Z\x07Z\u064E\nZ\fZ\x0EZ\u0651\v" +
		"Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03" +
		"[\x03[\x03[\x03[\x07[\u0664\n[\f[\x0E[\u0667\v[\x03\\\x03\\\x03\\\x03" +
		"\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x05\\\u0673\n\\\x03\\\x03\\\x07" +
		"\\\u0677\n\\\f\\\x0E\\\u067A\v\\\x03]\x03]\x03]\x03]\x03]\x03]\x07]\u0682" +
		"\n]\f]\x0E]\u0685\v]\x03^\x03^\x03^\x05^\u068A\n^\x03_\x06_\u068D\n_\r" +
		"_\x0E_\u068E\x03_\x03_\x05_\u0693\n_\x03`\x03`\x03`\x03`\x03`\x03`\x03" +
		"`\x05`\u069C\n`\x03a\x03a\x03a\x07a\u06A1\na\fa\x0Ea\u06A4\va\x03a\x03" +
		"a\x03b\x03b\x03b\x03c\x03c\x03d\x03d\x03d\x07d\u06B0\nd\fd\x0Ed\u06B3" +
		"\vd\x03d\x03d\x03e\x03e\x03e\x03f\x03f\x03g\x03g\x03g\x03g\x03g\x03g\x03" +
		"h\x03h\x03h\x03h\x03h\x03h\x03i\x03i\x03i\x03i\x03i\x03i\x03j\x03j\x03" +
		"j\x03j\x03j\x03j\x03k\x03k\x03k\x03k\x03k\x03k\x03l\x03l\x03m\x03m\x03" +
		"n\x03n\x03o\x03o\x03p\x03p\x03q\x03q\x03r\x03r\x03s\x03s\x03t\x03t\x03" +
		"u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x05u\u06F4\nu\x03v\x03v\x05v\u06F8" +
		"\nv\x03w\x03w\x03w\x03w\x03x\x03x\x03x\x03y\x03y\x03y\x03z\x03z\x03z\x03" +
		"z\x05z\u0708\nz\x03{\x03{\x03|\x03|\x03}\x03}\x03}\x02\x02\x02~\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
		"\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
		"\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
		"\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6" +
		"\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8" +
		"\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA" +
		"\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC" +
		"\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\x02\t\v\x02\v\f\x13" +
		"\x13\x1F\x1F&&))./35>>CC\x11\x02\x07\x07\v\f\x0F\x0F\x13\x13\x1D\x1D\x1F" +
		"!#%(+./12;<>>CCEEIM\x05\x02&&88??\x06\x02\x15\x15\x1B\x1B##22\x05\x02" +
		"\f\f&&34\x0E\x02\x06\x07\r\r\x13\x15\x1E\x1E#%,,00226:BBDDFG\n\x02\b\n" +
		"\x10\x12\x16\x16\x19\x19\x1C\x1C\'\'==@A\x02\u0762\x02\xFD\x03\x02\x02" +
		"\x02\x04\u0105\x03\x02\x02\x02\x06\u0123\x03\x02\x02\x02\b\u0125\x03\x02" +
		"\x02\x02\n\u013C\x03\x02\x02\x02\f\u0153\x03\x02\x02\x02\x0E\u016A\x03" +
		"\x02\x02\x02\x10\u017A\x03\x02\x02\x02\x12\u018A\x03\x02\x02\x02\x14\u019D" +
		"\x03\x02\x02\x02\x16\u01AB\x03\x02\x02\x02\x18\u01AE\x03\x02\x02\x02\x1A" +
		"\u01B8\x03\x02\x02\x02\x1C\u01BA\x03\x02\x02\x02\x1E\u01D1\x03\x02\x02" +
		"\x02 \u01E8\x03\x02\x02\x02\"\u01FF\x03\x02\x02\x02$\u020F\x03\x02\x02" +
		"\x02&\u021F\x03\x02\x02\x02(\u0232\x03\x02\x02\x02*\u0240\x03\x02\x02" +
		"\x02,\u0243\x03\x02\x02\x02.\u024D\x03\x02\x02\x020\u024F\x03\x02\x02" +
		"\x022\u0266\x03\x02\x02\x024\u027D\x03\x02\x02\x026\u0294\x03\x02\x02" +
		"\x028\u02A4\x03\x02\x02\x02:\u02B4\x03\x02\x02\x02<\u02C7\x03\x02\x02" +
		"\x02>\u02D5\x03\x02\x02\x02@\u02D8\x03\x02\x02\x02B\u02E2\x03\x02\x02" +
		"\x02D\u02E4\x03\x02\x02\x02F\u02FB\x03\x02\x02\x02H\u0312\x03\x02\x02" +
		"\x02J\u0328\x03\x02\x02\x02L\u033F\x03\x02\x02\x02N\u0356\x03\x02\x02" +
		"\x02P\u0366\x03\x02\x02\x02R\u0376\x03\x02\x02\x02T\u0385\x03\x02\x02" +
		"\x02V\u0395\x03\x02\x02\x02X\u03A8\x03\x02\x02\x02Z\u03B6\x03\x02\x02" +
		"\x02\\\u03B9\x03\x02\x02\x02^\u03C5\x03\x02\x02\x02`\u03C7\x03\x02\x02" +
		"\x02b\u03DE\x03\x02\x02\x02d\u03F4\x03\x02\x02\x02f\u040B\x03\x02\x02" +
		"\x02h\u0422\x03\x02\x02\x02j\u0432\x03\x02\x02\x02l\u0441\x03\x02\x02" +
		"\x02n\u0451\x03\x02\x02\x02p\u0464\x03\x02\x02\x02r\u0472\x03\x02\x02" +
		"\x02t\u0475\x03\x02\x02\x02v\u0480\x03\x02\x02\x02x\u0482\x03\x02\x02" +
		"\x02z\u0499\x03\x02\x02\x02|\u04B0\x03\x02\x02\x02~\u04C0\x03\x02\x02" +
		"\x02\x80\u04D3\x03\x02\x02\x02\x82\u04E1\x03\x02\x02\x02\x84\u04E4\x03" +
		"\x02\x02\x02\x86\u04EC\x03\x02\x02\x02\x88\u0503\x03\x02\x02\x02\x8A\u051A" +
		"\x03\x02\x02\x02\x8C\u052A\x03\x02\x02\x02\x8E\u053D\x03\x02\x02\x02\x90" +
		"\u054B\x03\x02\x02\x02\x92\u054E\x03\x02\x02\x02\x94\u0556\x03\x02\x02" +
		"\x02\x96\u056D\x03\x02\x02\x02\x98\u0584\x03\x02\x02\x02\x9A\u0594\x03" +
		"\x02\x02\x02\x9C\u05A7\x03\x02\x02\x02\x9E\u05B5\x03\x02\x02\x02\xA0\u05B8" +
		"\x03\x02\x02\x02\xA2\u05C0\x03\x02\x02\x02\xA4\u05D7\x03\x02\x02\x02\xA6" +
		"\u05EE\x03\x02\x02\x02\xA8\u05FE\x03\x02\x02\x02\xAA\u0611\x03\x02\x02" +
		"\x02\xAC\u061F\x03\x02\x02\x02\xAE\u0622\x03\x02\x02\x02\xB0\u062A\x03" +
		"\x02\x02\x02\xB2\u0641\x03\x02\x02\x02\xB4\u0658\x03\x02\x02\x02\xB6\u0668" +
		"\x03\x02\x02\x02\xB8\u067B\x03\x02\x02\x02\xBA\u0689\x03\x02\x02\x02\xBC" +
		"\u068C\x03\x02\x02\x02\xBE\u069B\x03\x02\x02\x02\xC0\u069D\x03\x02\x02" +
		"\x02\xC2\u06A7\x03\x02\x02\x02\xC4\u06AA\x03\x02\x02\x02\xC6\u06AC\x03" +
		"\x02\x02\x02\xC8\u06B6\x03\x02\x02\x02\xCA\u06B9\x03\x02\x02\x02\xCC\u06BB" +
		"\x03\x02\x02\x02\xCE\u06C1\x03\x02\x02\x02\xD0\u06C7\x03\x02\x02\x02\xD2" +
		"\u06CD\x03\x02\x02\x02\xD4\u06D3\x03\x02\x02\x02\xD6\u06D9\x03\x02\x02" +
		"\x02\xD8\u06DB\x03\x02\x02\x02\xDA\u06DD\x03\x02\x02\x02\xDC\u06DF\x03" +
		"\x02\x02\x02\xDE\u06E1\x03\x02\x02\x02\xE0\u06E3\x03\x02\x02\x02\xE2\u06E5" +
		"\x03\x02\x02\x02\xE4\u06E7\x03\x02\x02\x02\xE6\u06E9\x03\x02\x02\x02\xE8" +
		"\u06F3\x03\x02\x02\x02\xEA\u06F7\x03\x02\x02\x02\xEC\u06F9\x03\x02\x02" +
		"\x02\xEE\u06FD\x03\x02\x02\x02\xF0\u0700\x03\x02\x02\x02\xF2\u0707\x03" +
		"\x02\x02\x02\xF4\u0709\x03\x02\x02\x02\xF6\u070B\x03\x02\x02\x02\xF8\u070D" +
		"\x03\x02\x02\x02\xFA\xFC\x05\x04\x03\x02\xFB\xFA\x03\x02\x02\x02\xFC\xFF" +
		"\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\xFE\u0100\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0101" +
		"\x07\x02\x02\x03\u0101\x03\x03\x02\x02\x02\u0102\u0106\x05\x06\x04\x02" +
		"\u0103\u0106\x05\xBE`\x02\u0104\u0106\x05\xD6l\x02\u0105\u0102\x03\x02" +
		"\x02\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0104\x03\x02\x02\x02\u0106" +
		"\x05\x03\x02\x02\x02\u0107\u0124\x05\b\x05\x02\u0108\u0124\x05\n\x06\x02" +
		"\u0109\u0124\x05\f\x07\x02\u010A\u0124\x05\x1C\x0F\x02\u010B\u0124\x05" +
		"\x1E\x10\x02\u010C\u0124\x05 \x11\x02\u010D\u0124\x050\x19\x02\u010E\u0124" +
		"\x052\x1A\x02\u010F\u0124\x054\x1B\x02\u0110\u0124\x05D#\x02\u0111\u0124" +
		"\x05F$\x02\u0112\u0124\x05L\'\x02\u0113\u0124\x05H%\x02\u0114\u0124\x05" +
		"J&\x02\u0115\u0124\x05`1\x02\u0116\u0124\x05f4\x02\u0117\u0124\x05b2\x02" +
		"\u0118\u0124\x05d3\x02\u0119\u0124\x05x=\x02\u011A\u0124\x05z>\x02\u011B" +
		"\u0124\x05\x86D\x02\u011C\u0124\x05\x88E\x02\u011D\u0124\x05\x94K\x02" +
		"\u011E\u0124\x05\x96L\x02\u011F\u0124\x05\xA2R\x02\u0120\u0124\x05\xA4" +
		"S\x02\u0121\u0124\x05\xB0Y\x02\u0122\u0124\x05\xB2Z\x02\u0123\u0107\x03" +
		"\x02\x02\x02\u0123\u0108\x03\x02\x02\x02\u0123\u0109\x03\x02\x02\x02\u0123" +
		"\u010A\x03\x02\x02\x02\u0123\u010B\x03\x02\x02\x02\u0123\u010C\x03\x02" +
		"\x02\x02\u0123\u010D\x03\x02\x02\x02\u0123\u010E\x03\x02\x02\x02\u0123" +
		"\u010F\x03\x02\x02\x02\u0123\u0110\x03\x02\x02\x02\u0123\u0111\x03\x02" +
		"\x02\x02\u0123\u0112\x03\x02\x02\x02\u0123\u0113\x03\x02\x02\x02\u0123" +
		"\u0114\x03\x02\x02\x02\u0123\u0115\x03\x02\x02\x02\u0123\u0116\x03\x02" +
		"\x02\x02\u0123\u0117\x03\x02\x02\x02\u0123\u0118\x03\x02\x02\x02\u0123" +
		"\u0119\x03\x02\x02\x02\u0123\u011A\x03\x02\x02\x02\u0123\u011B\x03\x02" +
		"\x02\x02\u0123\u011C\x03\x02\x02\x02\u0123\u011D\x03\x02\x02\x02\u0123" +
		"\u011E\x03\x02\x02\x02\u0123\u011F\x03\x02\x02\x02\u0123\u0120\x03\x02" +
		"\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0122\x03\x02\x02\x02\u0124" +
		"\x07\x03\x02\x02\x02\u0125\u0126\x07\x03\x02\x02\u0126\u0127\x07?\x02" +
		"\x02\u0127\u0128\x07O\x02\x02\u0128\u0129\x07\"\x02\x02\u0129\u012A\x07" +
		"P\x02\x02\u012A\u012B\x05\xE0q\x02\u012B\u012C\x07Q\x02\x02\u012C\u0130" +
		"\x07\x05\x02\x02\u012D\u012F\x05\x04\x03\x02\u012E\u012D\x03\x02\x02\x02" +
		"\u012F\u0132\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130\u0131\x03" +
		"\x02\x02\x02\u0131\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0133" +
		"\u0135\x05\x16\f\x02\u0134\u0133\x03\x02\x02\x02\u0134\u0135\x03\x02\x02" +
		"\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137\x07\x03\x02\x02\u0137\u0138" +
		"\x07?\x02\x02\u0138\u0139\x07O\x02\x02\u0139\u013A\x07\x18\x02\x02\u013A" +
		"\u013B\x07\x05\x02\x02\u013B\t\x03\x02\x02\x02\u013C\u013D\x07\x03\x02" +
		"\x02\u013D\u013E\x07?\x02\x02\u013E\u013F\x07O\x02\x02\u013F\u0140\x07" +
		"\x1A\x02\x02\u0140\u0141\x07P\x02\x02\u0141\u0142\x05\xE0q\x02\u0142\u0143" +
		"\x07Q\x02\x02\u0143\u0147\x07\x05\x02\x02\u0144\u0146\x05\x04\x03\x02" +
		"\u0145\u0144\x03\x02\x02\x02\u0146\u0149\x03\x02\x02\x02\u0147\u0145\x03" +
		"\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014B\x03\x02\x02\x02\u0149" +
		"\u0147\x03\x02\x02\x02\u014A\u014C\x05\x16\f\x02\u014B\u014A\x03\x02\x02" +
		"\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u014E" +
		"\x07\x03\x02\x02\u014E\u014F\x07?\x02\x02\u014F\u0150\x07O\x02\x02\u0150" +
		"\u0151\x07\x18\x02\x02\u0151\u0152\x07\x05\x02\x02\u0152\v\x03\x02\x02" +
		"\x02\u0153\u0154\x07\x03\x02\x02\u0154\u0155\x07?\x02\x02\u0155\u0156" +
		"\x07O\x02\x02\u0156\u015B\x07\x17\x02\x02\u0157\u0158\x07P\x02\x02\u0158" +
		"\u0159\x05\xE0q\x02\u0159\u015A\x07Q\x02\x02\u015A\u015C\x03\x02\x02\x02" +
		"\u015B\u0157\x03\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\u015D\x03" +
		"\x02\x02\x02\u015D\u0161\x07\x05\x02\x02\u015E\u0160\x05\x04\x03\x02\u015F" +
		"\u015E\x03\x02\x02\x02\u0160\u0163\x03\x02\x02\x02\u0161\u015F\x03\x02" +
		"\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0164\x03\x02\x02\x02\u0163" +
		"\u0161\x03\x02\x02\x02\u0164\u0165\x07\x03\x02\x02\u0165\u0166\x07?\x02" +
		"\x02\u0166\u0167\x07O\x02\x02\u0167\u0168\x07\x18\x02\x02\u0168\u0169" +
		"\x07\x05\x02\x02\u0169\r\x03\x02\x02\x02\u016A\u016B\x07\x03\x02\x02\u016B" +
		"\u016C\x07?\x02\x02\u016C\u016D\x07O\x02\x02\u016D\u016E\x07H\x02\x02" +
		"\u016E\u016F\x07O\x02\x02\u016F\u0170\x07\"\x02\x02\u0170\u0171\x07P\x02" +
		"\x02\u0171\u0172\x05\xE0q\x02\u0172\u0173\x07Q\x02\x02\u0173\u0177\x07" +
		"\x05\x02\x02\u0174\u0176\x05\x04\x03\x02\u0175\u0174\x03\x02\x02\x02\u0176" +
		"\u0179\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0178\x03\x02" +
		"\x02\x02\u0178\x0F\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u017A\u017B" +
		"\x07\x03\x02\x02\u017B\u017C\x07?\x02\x02\u017C\u017D\x07O\x02\x02\u017D" +
		"\u017E\x07H\x02\x02\u017E\u017F\x07O\x02\x02\u017F\u0180\x07\x1A\x02\x02" +
		"\u0180\u0181\x07P\x02\x02\u0181\u0182\x05\xE0q\x02\u0182\u0183\x07Q\x02" +
		"\x02\u0183\u0187\x07\x05\x02\x02\u0184\u0186\x05\x04\x03\x02\u0185\u0184" +
		"\x03\x02\x02\x02\u0186\u0189\x03\x02\x02\x02\u0187\u0185\x03\x02\x02\x02" +
		"\u0187\u0188\x03\x02\x02\x02\u0188\x11\x03\x02\x02\x02\u0189\u0187\x03" +
		"\x02\x02\x02\u018A\u018B\x07\x03\x02\x02\u018B\u018C\x07?\x02\x02\u018C" +
		"\u018D\x07O\x02\x02\u018D\u018E\x07H\x02\x02\u018E\u018F\x07O\x02\x02" +
		"\u018F\u0194\x07\x17\x02\x02\u0190\u0191\x07P\x02\x02\u0191\u0192\x05" +
		"\xE0q\x02\u0192\u0193\x07Q\x02\x02\u0193\u0195\x03\x02\x02\x02\u0194\u0190" +
		"\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02" +
		"\u0196\u019A\x07\x05\x02\x02\u0197\u0199\x05\x04\x03\x02\u0198\u0197\x03" +
		"\x02\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A" +
		"\u019B\x03\x02\x02\x02\u019B\x13\x03\x02\x02\x02\u019C\u019A\x03\x02\x02" +
		"\x02\u019D\u019E\x07\x03\x02\x02\u019E\u019F\x07?\x02\x02\u019F\u01A0" +
		"\x07O\x02\x02\u01A0\u01A1\x07H\x02\x02\u01A1\u01A5\x07\x05\x02\x02\u01A2" +
		"\u01A4\x05\x04\x03\x02\u01A3\u01A2\x03\x02\x02\x02\u01A4\u01A7\x03\x02" +
		"\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6" +
		"\x15\x03\x02\x02\x02\u01A7\u01A5\x03\x02\x02\x02\u01A8\u01AC\x05\x18\r" +
		"\x02\u01A9\u01AC\x05\x12\n\x02\u01AA\u01AC\x05\x14\v\x02\u01AB\u01A8\x03" +
		"\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AC" +
		"\x17\x03\x02\x02\x02\u01AD\u01AF\x05\x1A\x0E\x02\u01AE\u01AD\x03\x02\x02" +
		"\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B0\u01B1" +
		"\x03\x02\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B5\x05\x12\n\x02" +
		"\u01B3\u01B5\x05\x14\v\x02\u01B4\u01B2\x03\x02\x02\x02\u01B4\u01B3\x03" +
		"\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\x19\x03\x02\x02\x02\u01B6" +
		"\u01B9\x05\x0E\b\x02\u01B7\u01B9\x05\x10\t\x02\u01B8\u01B6\x03\x02\x02" +
		"\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9\x1B\x03\x02\x02\x02\u01BA\u01BB" +
		"\x07\x03\x02\x02\u01BB\u01BC\x07&\x02\x02\u01BC\u01BD\x07O\x02\x02\u01BD" +
		"\u01BE\x07\"\x02\x02\u01BE\u01BF\x07P\x02\x02\u01BF\u01C0\x05\xE0q\x02" +
		"\u01C0\u01C1\x07Q\x02\x02\u01C1\u01C5\x07\x05\x02\x02\u01C2\u01C4\x05" +
		"\x04\x03\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4\u01C7\x03\x02\x02\x02\u01C5" +
		"\u01C3\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C9\x03\x02" +
		"\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C8\u01CA\x05*\x16\x02\u01C9\u01C8" +
		"\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02" +
		"\u01CB\u01CC\x07\x03\x02\x02\u01CC\u01CD\x07&\x02\x02\u01CD\u01CE\x07" +
		"O\x02\x02\u01CE\u01CF\x07\x18\x02\x02\u01CF\u01D0\x07\x05\x02\x02\u01D0" +
		"\x1D\x03\x02\x02\x02\u01D1\u01D2\x07\x03\x02\x02\u01D2\u01D3\x07&\x02" +
		"\x02\u01D3\u01D4\x07O\x02\x02\u01D4\u01D5\x07\x1A\x02\x02\u01D5\u01D6" +
		"\x07P\x02\x02\u01D6\u01D7\x05\xE0q\x02\u01D7\u01D8\x07Q\x02\x02\u01D8" +
		"\u01DC\x07\x05\x02\x02\u01D9\u01DB\x05\x04\x03\x02\u01DA\u01D9\x03\x02" +
		"\x02\x02\u01DB\u01DE\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DC" +
		"\u01DD\x03\x02\x02\x02\u01DD\u01E0\x03\x02\x02\x02\u01DE\u01DC\x03\x02" +
		"\x02\x02\u01DF\u01E1\x05*\x16\x02\u01E0\u01DF\x03\x02\x02\x02\u01E0\u01E1" +
		"\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E3\x07\x03\x02\x02" +
		"\u01E3\u01E4\x07&\x02\x02\u01E4\u01E5\x07O\x02\x02\u01E5\u01E6\x07\x18" +
		"\x02\x02\u01E6\u01E7\x07\x05\x02\x02\u01E7\x1F\x03\x02\x02\x02\u01E8\u01E9" +
		"\x07\x03\x02\x02\u01E9\u01EA\x07&\x02\x02\u01EA\u01EB\x07O\x02\x02\u01EB" +
		"\u01F0\x07\x17\x02\x02\u01EC\u01ED\x07P\x02\x02\u01ED\u01EE\x05\xE0q\x02" +
		"\u01EE\u01EF\x07Q\x02\x02\u01EF\u01F1\x03\x02\x02\x02\u01F0\u01EC\x03" +
		"\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2" +
		"\u01F6\x07\x05\x02\x02\u01F3\u01F5\x05\x04\x03\x02\u01F4\u01F3\x03\x02" +
		"\x02\x02\u01F5\u01F8\x03\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6" +
		"\u01F7\x03\x02\x02\x02\u01F7\u01F9\x03\x02\x02\x02\u01F8\u01F6\x03\x02" +
		"\x02\x02\u01F9\u01FA\x07\x03\x02\x02\u01FA\u01FB\x07&\x02\x02\u01FB\u01FC" +
		"\x07O\x02\x02\u01FC\u01FD\x07\x18\x02\x02\u01FD\u01FE\x07\x05\x02\x02" +
		"\u01FE!\x03\x02\x02\x02\u01FF\u0200\x07\x03\x02\x02\u0200\u0201\x07&\x02" +
		"\x02\u0201\u0202\x07O\x02\x02\u0202\u0203\x07H\x02\x02\u0203\u0204\x07" +
		"O\x02\x02\u0204\u0205\x07\"\x02\x02\u0205\u0206\x07P\x02\x02\u0206\u0207" +
		"\x05\xE0q\x02\u0207\u0208\x07Q\x02\x02\u0208\u020C\x07\x05\x02\x02\u0209" +
		"\u020B\x05\x04\x03\x02\u020A\u0209\x03\x02\x02\x02\u020B\u020E\x03\x02" +
		"\x02\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D" +
		"#\x03\x02\x02\x02\u020E\u020C\x03\x02\x02\x02\u020F\u0210\x07\x03\x02" +
		"\x02\u0210\u0211\x07&\x02\x02\u0211\u0212\x07O\x02\x02\u0212\u0213\x07" +
		"H\x02\x02\u0213\u0214\x07O\x02\x02\u0214\u0215\x07\x1A\x02\x02\u0215\u0216" +
		"\x07P\x02\x02\u0216\u0217\x05\xE0q\x02\u0217\u0218\x07Q\x02\x02\u0218" +
		"\u021C\x07\x05\x02\x02\u0219\u021B\x05\x04\x03\x02\u021A\u0219\x03\x02" +
		"\x02\x02\u021B\u021E\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021C" +
		"\u021D\x03\x02\x02\x02\u021D%\x03\x02\x02\x02\u021E\u021C\x03\x02\x02" +
		"\x02\u021F\u0220\x07\x03\x02\x02\u0220\u0221\x07&\x02\x02\u0221\u0222" +
		"\x07O\x02\x02\u0222\u0223\x07H\x02\x02\u0223\u0224\x07O\x02\x02\u0224" +
		"\u0229\x07\x17\x02\x02\u0225\u0226\x07P\x02\x02\u0226\u0227\x05\xE0q\x02" +
		"\u0227\u0228\x07Q\x02\x02\u0228\u022A\x03\x02\x02\x02\u0229\u0225\x03" +
		"\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B" +
		"\u022F\x07\x05\x02\x02\u022C\u022E\x05\x04\x03\x02\u022D\u022C\x03\x02" +
		"\x02\x02\u022E\u0231\x03\x02\x02\x02\u022F\u022D\x03\x02\x02\x02\u022F" +
		"\u0230\x03\x02\x02\x02\u0230\'\x03\x02\x02\x02\u0231\u022F\x03\x02\x02" +
		"\x02\u0232\u0233\x07\x03\x02\x02\u0233\u0234\x07&\x02\x02\u0234\u0235" +
		"\x07O\x02\x02\u0235\u0236\x07H\x02\x02\u0236\u023A\x07\x05\x02\x02\u0237" +
		"\u0239\x05\x04\x03\x02\u0238\u0237\x03\x02\x02\x02\u0239\u023C\x03\x02" +
		"\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B" +
		")\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D\u0241\x05,\x17\x02" +
		"\u023E\u0241\x05&\x14\x02\u023F\u0241\x05(\x15\x02\u0240\u023D\x03\x02" +
		"\x02\x02\u0240\u023E\x03\x02\x02\x02\u0240\u023F\x03\x02\x02\x02\u0241" +
		"+\x03\x02\x02\x02\u0242\u0244\x05.\x18\x02\u0243\u0242\x03\x02\x02\x02" +
		"\u0244\u0245\x03\x02\x02\x02\u0245\u0243\x03\x02\x02\x02\u0245\u0246\x03" +
		"\x02\x02\x02\u0246\u0249\x03\x02\x02\x02\u0247\u024A\x05&\x14\x02\u0248" +
		"\u024A\x05(\x15\x02\u0249\u0247\x03\x02\x02\x02\u0249\u0248\x03\x02\x02" +
		"\x02\u0249\u024A\x03\x02\x02\x02\u024A-\x03\x02\x02\x02\u024B\u024E\x05" +
		"\"\x12\x02\u024C\u024E\x05$\x13\x02\u024D\u024B\x03\x02\x02\x02\u024D" +
		"\u024C\x03\x02\x02\x02\u024E/\x03\x02\x02\x02\u024F\u0250\x07\x03\x02" +
		"\x02\u0250\u0251\x078\x02\x02\u0251\u0252\x07O\x02\x02\u0252\u0253\x07" +
		"\"\x02\x02\u0253\u0254\x07P\x02\x02\u0254\u0255\x05\xE0q\x02\u0255\u0256" +
		"\x07Q\x02\x02\u0256\u025A\x07\x05\x02\x02\u0257\u0259\x05\x04\x03\x02" +
		"\u0258\u0257\x03\x02\x02\x02\u0259\u025C\x03\x02\x02\x02\u025A\u0258\x03" +
		"\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025E\x03\x02\x02\x02\u025C" +
		"\u025A\x03\x02\x02\x02\u025D\u025F\x05> \x02\u025E\u025D\x03\x02\x02\x02" +
		"\u025E\u025F\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260\u0261\x07" +
		"\x03\x02\x02\u0261\u0262\x078\x02\x02\u0262\u0263\x07O\x02\x02\u0263\u0264" +
		"\x07\x18\x02\x02\u0264\u0265\x07\x05\x02\x02\u02651\x03\x02\x02\x02\u0266" +
		"\u0267\x07\x03\x02\x02\u0267\u0268\x078\x02\x02\u0268\u0269\x07O\x02\x02" +
		"\u0269\u026A\x07\x1A\x02\x02\u026A\u026B\x07P\x02\x02\u026B\u026C\x05" +
		"\xE0q\x02\u026C\u026D\x07Q\x02\x02\u026D\u0271\x07\x05\x02\x02\u026E\u0270" +
		"\x05\x04\x03\x02\u026F\u026E\x03\x02\x02\x02\u0270\u0273\x03\x02\x02\x02" +
		"\u0271\u026F\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0275\x03" +
		"\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0274\u0276\x05> \x02\u0275\u0274" +
		"\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02" +
		"\u0277\u0278\x07\x03\x02\x02\u0278\u0279\x078\x02\x02\u0279\u027A\x07" +
		"O\x02\x02\u027A\u027B\x07\x18\x02\x02\u027B\u027C\x07\x05\x02\x02\u027C" +
		"3\x03\x02\x02\x02\u027D\u027E\x07\x03\x02\x02\u027E\u027F\x078\x02\x02" +
		"\u027F\u0280\x07O\x02\x02\u0280\u0285\x07\x17\x02\x02\u0281\u0282\x07" +
		"P\x02\x02\u0282\u0283\x05\xE0q\x02\u0283\u0284\x07Q\x02\x02\u0284\u0286" +
		"\x03\x02\x02\x02\u0285\u0281\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02" +
		"\u0286\u0287\x03\x02\x02\x02\u0287\u028B\x07\x05\x02\x02\u0288\u028A\x05" +
		"\x04\x03\x02\u0289\u0288\x03\x02\x02\x02\u028A\u028D\x03\x02\x02\x02\u028B" +
		"\u0289\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028E\x03\x02" +
		"\x02\x02\u028D\u028B\x03\x02\x02\x02\u028E\u028F\x07\x03\x02\x02\u028F" +
		"\u0290\x078\x02\x02\u0290\u0291\x07O\x02\x02\u0291\u0292\x07\x18\x02\x02" +
		"\u0292\u0293\x07\x05\x02\x02\u02935\x03\x02\x02\x02\u0294\u0295\x07\x03" +
		"\x02\x02\u0295\u0296\x078\x02\x02\u0296\u0297\x07O\x02\x02\u0297\u0298" +
		"\x07H\x02\x02\u0298\u0299\x07O\x02\x02\u0299\u029A\x07\"\x02\x02\u029A" +
		"\u029B\x07P\x02\x02\u029B\u029C\x05\xE0q\x02\u029C\u029D\x07Q\x02\x02" +
		"\u029D\u02A1\x07\x05\x02\x02\u029E\u02A0\x05\x04\x03\x02\u029F\u029E\x03" +
		"\x02\x02\x02\u02A0\u02A3\x03\x02\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A1" +
		"\u02A2\x03\x02\x02\x02\u02A27\x03\x02\x02\x02\u02A3\u02A1\x03\x02\x02" +
		"\x02\u02A4\u02A5\x07\x03\x02\x02\u02A5\u02A6\x078\x02\x02\u02A6\u02A7" +
		"\x07O\x02\x02\u02A7\u02A8\x07H\x02\x02\u02A8\u02A9\x07O\x02\x02\u02A9" +
		"\u02AA\x07\x1A\x02\x02\u02AA\u02AB\x07P\x02\x02\u02AB\u02AC\x05\xE0q\x02" +
		"\u02AC\u02AD\x07Q\x02\x02\u02AD\u02B1\x07\x05\x02\x02\u02AE\u02B0\x05" +
		"\x04\x03\x02\u02AF\u02AE\x03\x02\x02\x02\u02B0\u02B3\x03\x02\x02\x02\u02B1" +
		"\u02AF\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B29\x03\x02\x02" +
		"\x02\u02B3\u02B1\x03\x02\x02\x02\u02B4\u02B5\x07\x03\x02\x02\u02B5\u02B6" +
		"\x078\x02\x02\u02B6\u02B7\x07O\x02\x02\u02B7\u02B8\x07H\x02\x02\u02B8" +
		"\u02B9\x07O\x02\x02\u02B9\u02BE\x07\x17\x02\x02\u02BA\u02BB\x07P\x02\x02" +
		"\u02BB\u02BC\x05\xE0q\x02\u02BC\u02BD\x07Q\x02\x02\u02BD\u02BF\x03\x02" +
		"\x02\x02\u02BE\u02BA\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF" +
		"\u02C0\x03\x02\x02\x02\u02C0\u02C4\x07\x05\x02\x02\u02C1\u02C3\x05\x04" +
		"\x03\x02\u02C2\u02C1\x03\x02\x02\x02\u02C3\u02C6\x03\x02\x02\x02\u02C4" +
		"\u02C2\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5;\x03\x02\x02" +
		"\x02\u02C6\u02C4\x03\x02\x02\x02\u02C7\u02C8\x07\x03\x02\x02\u02C8\u02C9" +
		"\x078\x02\x02\u02C9\u02CA\x07O\x02\x02\u02CA\u02CB\x07H\x02\x02\u02CB" +
		"\u02CF\x07\x05\x02\x02\u02CC\u02CE\x05\x04\x03\x02\u02CD\u02CC\x03\x02" +
		"\x02\x02\u02CE\u02D1\x03\x02\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02CF" +
		"\u02D0\x03\x02\x02\x02\u02D0=\x03\x02\x02\x02\u02D1\u02CF\x03\x02\x02" +
		"\x02\u02D2\u02D6\x05@!\x02\u02D3\u02D6\x05:\x1E\x02\u02D4\u02D6\x05<\x1F" +
		"\x02\u02D5\u02D2\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D5\u02D4" +
		"\x03\x02\x02\x02\u02D6?\x03\x02\x02\x02\u02D7\u02D9\x05B\"\x02\u02D8\u02D7" +
		"\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02D8\x03\x02\x02\x02" +
		"\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02DE\x03\x02\x02\x02\u02DC\u02DF\x05" +
		":\x1E\x02\u02DD\u02DF\x05<\x1F\x02\u02DE\u02DC\x03\x02\x02\x02\u02DE\u02DD" +
		"\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DFA\x03\x02\x02\x02\u02E0" +
		"\u02E3\x056\x1C\x02\u02E1\u02E3\x058\x1D\x02\u02E2\u02E0\x03\x02\x02\x02" +
		"\u02E2\u02E1\x03\x02\x02\x02\u02E3C\x03\x02\x02\x02\u02E4\u02E5\x07\x03" +
		"\x02\x02\u02E5\u02E6\x07\x1B\x02\x02\u02E6\u02E7\x07O\x02\x02\u02E7\u02E8" +
		"\x07\"\x02\x02\u02E8\u02E9\x07P\x02\x02\u02E9\u02EA\x05\xE2r\x02\u02EA" +
		"\u02EB\x07Q\x02\x02\u02EB\u02EF\x07\x05\x02\x02\u02EC\u02EE\x05\x04\x03" +
		"\x02\u02ED\u02EC\x03\x02\x02\x02\u02EE\u02F1\x03\x02\x02\x02\u02EF\u02ED" +
		"\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0\u02F3\x03\x02\x02\x02" +
		"\u02F1\u02EF\x03\x02\x02\x02\u02F2\u02F4\x05Z.\x02\u02F3\u02F2\x03\x02" +
		"\x02\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5" +
		"\u02F6\x07\x03\x02\x02\u02F6\u02F7\x07\x1B\x02\x02\u02F7\u02F8\x07O\x02" +
		"\x02\u02F8\u02F9\x07\x18\x02\x02\u02F9\u02FA\x07\x05\x02\x02\u02FAE\x03" +
		"\x02\x02\x02\u02FB\u02FC\x07\x03\x02\x02\u02FC\u02FD\x07\x1B\x02\x02\u02FD" +
		"\u02FE\x07O\x02\x02\u02FE\u02FF\x07\x1A\x02\x02\u02FF\u0300\x07P\x02\x02" +
		"\u0300\u0301\x05\xE2r\x02\u0301\u0302\x07Q\x02\x02\u0302\u0306\x07\x05" +
		"\x02\x02\u0303\u0305\x05\x04\x03\x02\u0304\u0303\x03\x02\x02\x02\u0305" +
		"\u0308\x03\x02\x02\x02\u0306\u0304\x03\x02\x02\x02\u0306\u0307\x03\x02" +
		"\x02\x02\u0307\u030A\x03\x02\x02\x02\u0308\u0306\x03\x02\x02\x02\u0309" +
		"\u030B\x05Z.\x02\u030A\u0309\x03\x02\x02\x02\u030A\u030B\x03\x02\x02\x02" +
		"\u030B\u030C\x03\x02\x02\x02\u030C\u030D\x07\x03\x02\x02\u030D\u030E\x07" +
		"\x1B\x02\x02\u030E\u030F\x07O\x02\x02\u030F\u0310\x07\x18\x02\x02\u0310" +
		"\u0311\x07\x05\x02\x02\u0311G\x03\x02\x02\x02\u0312\u0313\x07\x03\x02" +
		"\x02\u0313\u0314\x07\x1B\x02\x02\u0314\u0315\x07O\x02\x02\u0315\u0316" +
		"\x07N\x02\x02\u0316\u0317\x05\xDCo\x02\u0317\u0318\x07U\x02\x02\u0318" +
		"\u031C\x07\x05\x02\x02\u0319\u031B\x05\x04\x03\x02\u031A\u0319\x03\x02" +
		"\x02\x02\u031B\u031E\x03\x02\x02\x02\u031C\u031A\x03\x02\x02\x02\u031C" +
		"\u031D\x03\x02\x02\x02\u031D\u0320\x03\x02\x02\x02\u031E\u031C\x03\x02" +
		"\x02\x02\u031F\u0321\x05Z.\x02\u0320\u031F\x03\x02\x02\x02\u0320\u0321" +
		"\x03\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\u0323\x07\x03\x02\x02" +
		"\u0323\u0324\x07\x1B\x02\x02\u0324\u0325\x07O\x02\x02\u0325\u0326\x07" +
		"\x18\x02\x02\u0326\u0327\x07\x05\x02\x02\u0327I\x03\x02\x02\x02\u0328" +
		"\u0329\x07\x03\x02\x02\u0329\u032A\x07\x1B\x02\x02\u032A\u032B\x07O\x02" +
		"\x02\u032B\u032C\x07\x0E\x02\x02\u032C\u032D\x07P\x02\x02\u032D\u032E" +
		"\x05\xDEp\x02\u032E\u032F\x07Q\x02\x02\u032F\u0333\x07\x05\x02\x02\u0330" +
		"\u0332\x05\x04\x03\x02\u0331\u0330\x03\x02\x02\x02\u0332\u0335\x03\x02" +
		"\x02\x02\u0333\u0331\x03\x02\x02\x02\u0333\u0334\x03\x02\x02\x02\u0334" +
		"\u0337\x03\x02\x02\x02\u0335\u0333\x03\x02\x02\x02\u0336\u0338\x05Z.\x02" +
		"\u0337\u0336\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02\u0338\u0339\x03" +
		"\x02\x02\x02\u0339\u033A\x07\x03\x02\x02\u033A\u033B\x07\x1B\x02\x02\u033B" +
		"\u033C\x07O\x02\x02\u033C\u033D\x07\x18\x02\x02\u033D\u033E\x07\x05\x02" +
		"\x02\u033EK\x03\x02\x02\x02\u033F\u0340\x07\x03\x02\x02\u0340\u0341\x07" +
		"\x1B\x02\x02\u0341\u0342\x07O\x02\x02\u0342\u0347\x07\x17\x02\x02\u0343" +
		"\u0344\x07P\x02\x02\u0344\u0345\x05\xE2r\x02\u0345\u0346\x07Q\x02\x02" +
		"\u0346\u0348\x03\x02\x02\x02\u0347\u0343\x03\x02\x02\x02\u0347\u0348\x03" +
		"\x02\x02\x02\u0348\u0349\x03\x02\x02\x02\u0349\u034D\x07\x05\x02\x02\u034A" +
		"\u034C\x05\x04\x03\x02\u034B\u034A\x03\x02\x02\x02\u034C\u034F\x03\x02" +
		"\x02\x02\u034D\u034B\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E" +
		"\u0350\x03\x02\x02\x02\u034F\u034D\x03\x02\x02\x02\u0350\u0351\x07\x03" +
		"\x02\x02\u0351\u0352\x07\x1B\x02\x02\u0352\u0353\x07O\x02\x02\u0353\u0354" +
		"\x07\x18\x02\x02\u0354\u0355\x07\x05\x02\x02\u0355M\x03\x02\x02\x02\u0356" +
		"\u0357\x07\x03\x02\x02\u0357\u0358\x07\x1B\x02\x02\u0358\u0359\x07O\x02" +
		"\x02\u0359\u035A\x07H\x02\x02\u035A\u035B\x07O\x02\x02\u035B\u035C\x07" +
		"\"\x02\x02\u035C\u035D\x07P\x02\x02\u035D\u035E\x05\xE2r\x02\u035E\u035F" +
		"\x07Q\x02\x02\u035F\u0363\x07\x05\x02\x02\u0360\u0362\x05\x04\x03\x02" +
		"\u0361\u0360\x03\x02\x02\x02\u0362\u0365\x03\x02\x02\x02\u0363\u0361\x03" +
		"\x02\x02\x02\u0363\u0364\x03\x02\x02\x02\u0364O\x03\x02\x02\x02\u0365" +
		"\u0363\x03\x02\x02\x02\u0366\u0367\x07\x03\x02\x02\u0367\u0368\x07\x1B" +
		"\x02\x02\u0368\u0369\x07O\x02\x02\u0369\u036A\x07H\x02\x02\u036A\u036B" +
		"\x07O\x02\x02\u036B\u036C\x07\x1A\x02\x02\u036C\u036D\x07P\x02\x02\u036D" +
		"\u036E\x05\xE2r\x02\u036E\u036F\x07Q\x02\x02\u036F\u0373\x07\x05\x02\x02" +
		"\u0370\u0372\x05\x04\x03\x02\u0371\u0370\x03\x02\x02\x02\u0372\u0375\x03" +
		"\x02\x02\x02\u0373\u0371\x03\x02\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374" +
		"Q\x03\x02\x02\x02\u0375\u0373\x03\x02\x02\x02\u0376\u0377\x07\x03\x02" +
		"\x02\u0377\u0378\x07\x1B\x02\x02\u0378\u0379\x07O\x02\x02\u0379\u037A" +
		"\x07H\x02\x02\u037A\u037B\x07O\x02\x02\u037B\u037C\x07N\x02\x02\u037C" +
		"\u037D\x05\xDCo\x02\u037D\u037E\x07U\x02\x02\u037E\u0382\x07\x05\x02\x02" +
		"\u037F\u0381\x05\x04\x03\x02\u0380\u037F\x03\x02\x02\x02\u0381\u0384\x03" +
		"\x02\x02\x02\u0382\u0380\x03\x02\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383" +
		"S\x03\x02\x02\x02\u0384\u0382\x03\x02\x02\x02\u0385\u0386\x07\x03\x02" +
		"\x02\u0386\u0387\x07\x1B\x02\x02\u0387\u0388\x07O\x02\x02\u0388\u0389" +
		"\x07H\x02\x02\u0389\u038A\x07O\x02\x02\u038A\u038B\x07\x0E\x02\x02\u038B" +
		"\u038C\x07P\x02\x02\u038C\u038D\x05\xDEp\x02\u038D\u038E\x07Q\x02\x02" +
		"\u038E\u0392\x07\x05\x02\x02\u038F\u0391\x05\x04\x03\x02\u0390\u038F\x03" +
		"\x02\x02\x02\u0391\u0394\x03\x02\x02\x02\u0392\u0390\x03\x02\x02\x02\u0392" +
		"\u0393\x03\x02\x02\x02\u0393U\x03\x02\x02\x02\u0394\u0392\x03\x02\x02" +
		"\x02\u0395\u0396\x07\x03\x02\x02\u0396\u0397\x07\x1B\x02\x02\u0397\u0398" +
		"\x07O\x02\x02\u0398\u0399\x07H\x02\x02\u0399\u039A\x07O\x02\x02\u039A" +
		"\u039F\x07\x17\x02\x02\u039B\u039C\x07P\x02\x02\u039C\u039D\x05\xE2r\x02" +
		"\u039D\u039E\x07Q\x02\x02\u039E\u03A0\x03\x02\x02\x02\u039F\u039B\x03" +
		"\x02\x02\x02\u039F\u03A0\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1" +
		"\u03A5\x07\x05\x02\x02\u03A2\u03A4\x05\x04\x03\x02\u03A3\u03A2\x03\x02" +
		"\x02\x02\u03A4\u03A7\x03\x02\x02\x02\u03A5\u03A3\x03\x02\x02\x02\u03A5" +
		"\u03A6\x03\x02\x02\x02\u03A6W\x03\x02\x02\x02\u03A7\u03A5\x03\x02\x02" +
		"\x02\u03A8\u03A9\x07\x03\x02\x02\u03A9\u03AA\x07\x1B\x02\x02\u03AA\u03AB" +
		"\x07O\x02\x02\u03AB\u03AC\x07H\x02\x02\u03AC\u03B0\x07\x05\x02\x02\u03AD" +
		"\u03AF\x05\x04\x03\x02\u03AE\u03AD\x03\x02\x02\x02\u03AF\u03B2\x03\x02" +
		"\x02\x02\u03B0\u03AE\x03\x02\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1" +
		"Y\x03\x02\x02\x02\u03B2\u03B0\x03\x02\x02\x02\u03B3\u03B7\x05V,\x02\u03B4" +
		"\u03B7\x05X-\x02\u03B5\u03B7\x05\\/\x02\u03B6\u03B3\x03\x02\x02\x02\u03B6" +
		"\u03B4\x03\x02\x02\x02\u03B6\u03B5\x03\x02\x02\x02\u03B7[\x03\x02\x02" +
		"\x02\u03B8\u03BA\x05^0\x02\u03B9\u03B8\x03\x02\x02\x02\u03BA\u03BB\x03" +
		"\x02\x02\x02\u03BB\u03B9\x03\x02\x02\x02\u03BB\u03BC\x03\x02\x02\x02\u03BC" +
		"\u03BF\x03\x02\x02\x02\u03BD\u03C0\x05V,\x02\u03BE\u03C0\x05X-\x02\u03BF" +
		"\u03BD\x03\x02\x02\x02\u03BF\u03BE\x03\x02\x02\x02\u03BF\u03C0\x03\x02" +
		"\x02\x02\u03C0]\x03\x02\x02\x02\u03C1\u03C6\x05N(\x02\u03C2\u03C6\x05" +
		"P)\x02\u03C3\u03C6\x05R*\x02\u03C4\u03C6\x05T+\x02\u03C5\u03C1\x03\x02" +
		"\x02\x02\u03C5\u03C2\x03\x02\x02\x02\u03C5\u03C3\x03\x02\x02\x02\u03C5" +
		"\u03C4\x03\x02\x02\x02\u03C6_\x03\x02\x02\x02\u03C7\u03C8\x07\x03\x02" +
		"\x02\u03C8\u03C9\x07\x15\x02\x02\u03C9\u03CA\x07O\x02\x02\u03CA\u03CB" +
		"\x07\"\x02\x02\u03CB\u03CC\x07P\x02\x02\u03CC\u03CD\x05\xE2r\x02\u03CD" +
		"\u03CE\x07Q\x02\x02\u03CE\u03D2\x07\x05\x02\x02\u03CF\u03D1\x05\x04\x03" +
		"\x02\u03D0\u03CF\x03\x02\x02\x02\u03D1\u03D4\x03\x02\x02\x02\u03D2\u03D0" +
		"\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02\u03D3\u03D6\x03\x02\x02\x02" +
		"\u03D4\u03D2\x03\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u03D5\u03D7\x05r:\x02\u03D6\u03D5\x03\x02\x02\x02\u03D6\u03D7\x03" +
		"\x02\x02\x02\u03D7\u03D8\x03\x02\x02\x02\u03D8\u03D9\x07\x03\x02\x02\u03D9" +
		"\u03DA\x07\x15\x02\x02\u03DA\u03DB\x07O\x02\x02\u03DB\u03DC\x07\x18\x02" +
		"\x02\u03DC\u03DD\x07\x05\x02\x02\u03DDa\x03\x02\x02\x02\u03DE\u03DF\x07" +
		"\x03\x02\x02\u03DF\u03E0\x07\x15\x02\x02\u03E0\u03E1\x07O\x02\x02\u03E1" +
		"\u03E2\x07N\x02\x02\u03E2\u03E3\x05\xDCo\x02\u03E3\u03E4\x07U\x02\x02" +
		"\u03E4\u03E8\x07\x05\x02\x02\u03E5\u03E7\x05\x04\x03\x02\u03E6\u03E5\x03" +
		"\x02\x02\x02\u03E7\u03EA\x03\x02\x02\x02\u03E8\u03E6\x03\x02\x02\x02\u03E8" +
		"\u03E9\x03\x02\x02\x02\u03E9\u03EC\x03\x02\x02\x02\u03EA\u03E8\x03\x02" +
		"\x02\x02\u03EB\u03ED\x05r:\x02\u03EC\u03EB\x03\x02\x02\x02\u03EC\u03ED" +
		"\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03EE\u03EF\x07\x03\x02\x02" +
		"\u03EF\u03F0\x07\x15\x02\x02\u03F0\u03F1\x07O\x02\x02\u03F1\u03F2\x07" +
		"\x18\x02\x02\u03F2\u03F3\x07\x05\x02\x02\u03F3c\x03\x02\x02\x02\u03F4" +
		"\u03F5\x07\x03\x02\x02\u03F5\u03F6\x07\x15\x02\x02\u03F6\u03F7\x07O\x02" +
		"\x02\u03F7\u03F8\x07\x0E\x02\x02\u03F8\u03F9\x07P\x02\x02\u03F9\u03FA" +
		"\x05\xDEp\x02\u03FA\u03FB\x07Q\x02\x02\u03FB\u03FF\x07\x05\x02\x02\u03FC" +
		"\u03FE\x05\x04\x03\x02\u03FD\u03FC\x03\x02\x02\x02\u03FE\u0401\x03\x02" +
		"\x02\x02\u03FF\u03FD\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400" +
		"\u0403\x03\x02\x02\x02\u0401\u03FF\x03\x02\x02\x02\u0402\u0404\x05r:\x02" +
		"\u0403\u0402\x03\x02\x02\x02\u0403\u0404\x03\x02\x02\x02\u0404\u0405\x03" +
		"\x02\x02\x02\u0405\u0406\x07\x03\x02\x02\u0406\u0407\x07\x15\x02\x02\u0407" +
		"\u0408\x07O\x02\x02\u0408\u0409\x07\x18\x02\x02\u0409\u040A\x07\x05\x02" +
		"\x02\u040Ae\x03\x02\x02\x02\u040B\u040C\x07\x03\x02\x02\u040C\u040D\x07" +
		"\x15\x02\x02\u040D\u040E\x07O\x02\x02\u040E\u0413\x07\x17\x02\x02\u040F" +
		"\u0410\x07P\x02\x02\u0410\u0411\x05\xE2r\x02\u0411\u0412\x07Q\x02\x02" +
		"\u0412\u0414\x03\x02\x02\x02\u0413\u040F\x03\x02\x02\x02\u0413\u0414\x03" +
		"\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\u0419\x07\x05\x02\x02\u0416" +
		"\u0418\x05\x04\x03\x02\u0417\u0416\x03\x02\x02\x02\u0418\u041B\x03\x02" +
		"\x02\x02\u0419\u0417\x03\x02\x02\x02\u0419\u041A\x03\x02\x02\x02\u041A" +
		"\u041C\x03\x02\x02\x02\u041B\u0419\x03\x02\x02\x02\u041C\u041D\x07\x03" +
		"\x02\x02\u041D\u041E\x07\x15\x02\x02\u041E\u041F\x07O\x02\x02\u041F\u0420" +
		"\x07\x18\x02\x02\u0420\u0421\x07\x05\x02\x02\u0421g\x03\x02\x02\x02\u0422" +
		"\u0423\x07\x03\x02\x02\u0423\u0424\x07\x15\x02\x02\u0424\u0425\x07O\x02" +
		"\x02\u0425\u0426\x07H\x02\x02\u0426\u0427\x07O\x02\x02\u0427\u0428\x07" +
		"\"\x02\x02\u0428\u0429\x07P\x02\x02\u0429\u042A\x05\xE2r\x02\u042A\u042B" +
		"\x07Q\x02\x02\u042B\u042F\x07\x05\x02\x02\u042C\u042E\x05\x04\x03\x02" +
		"\u042D\u042C\x03\x02\x02\x02\u042E\u0431\x03\x02\x02\x02\u042F\u042D\x03" +
		"\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430i\x03\x02\x02\x02\u0431" +
		"\u042F\x03\x02\x02\x02\u0432\u0433\x07\x03\x02\x02\u0433\u0434\x07\x15" +
		"\x02\x02\u0434\u0435\x07O\x02\x02\u0435\u0436\x07H\x02\x02\u0436\u0437" +
		"\x07O\x02\x02\u0437\u0438\x07N\x02\x02\u0438\u0439\x05\xDCo\x02\u0439" +
		"\u043A\x07U\x02\x02\u043A\u043E\x07\x05\x02\x02\u043B\u043D\x05\x04\x03" +
		"\x02\u043C\u043B\x03\x02\x02\x02\u043D\u0440\x03\x02\x02\x02\u043E\u043C" +
		"\x03\x02\x02\x02\u043E\u043F\x03\x02\x02\x02\u043Fk\x03\x02\x02\x02\u0440" +
		"\u043E\x03\x02\x02\x02\u0441\u0442\x07\x03\x02\x02\u0442\u0443\x07\x15" +
		"\x02\x02\u0443\u0444\x07O\x02\x02\u0444\u0445\x07H\x02\x02\u0445\u0446" +
		"\x07O\x02\x02\u0446\u0447\x07\x0E\x02\x02\u0447\u0448\x07P\x02\x02\u0448" +
		"\u0449\x05\xDEp\x02\u0449\u044A\x07Q\x02\x02\u044A\u044E\x07\x05\x02\x02" +
		"\u044B\u044D\x05\x04\x03\x02\u044C\u044B\x03\x02\x02\x02\u044D\u0450\x03" +
		"\x02\x02\x02\u044E\u044C\x03\x02\x02\x02\u044E\u044F\x03\x02\x02\x02\u044F" +
		"m\x03\x02\x02\x02\u0450\u044E\x03\x02\x02\x02\u0451\u0452\x07\x03\x02" +
		"\x02\u0452\u0453\x07\x15\x02\x02\u0453\u0454\x07O\x02\x02\u0454\u0455" +
		"\x07H\x02\x02\u0455\u0456\x07O\x02\x02\u0456\u045B\x07\x17\x02\x02\u0457" +
		"\u0458\x07P\x02\x02\u0458\u0459\x05\xE2r\x02\u0459\u045A\x07Q\x02\x02" +
		"\u045A\u045C\x03\x02\x02\x02\u045B\u0457\x03\x02\x02\x02\u045B\u045C\x03" +
		"\x02\x02\x02\u045C\u045D\x03\x02\x02\x02\u045D\u0461\x07\x05\x02\x02\u045E" +
		"\u0460\x05\x04\x03\x02\u045F\u045E\x03\x02\x02\x02\u0460\u0463\x03\x02" +
		"\x02\x02\u0461\u045F\x03\x02\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462" +
		"o\x03\x02\x02\x02\u0463\u0461\x03\x02\x02\x02\u0464\u0465\x07\x03\x02" +
		"\x02\u0465\u0466\x07\x15\x02\x02\u0466\u0467\x07O\x02\x02\u0467\u0468" +
		"\x07H\x02\x02\u0468\u046C\x07\x05\x02\x02\u0469\u046B\x05\x04\x03\x02" +
		"\u046A\u0469\x03\x02\x02\x02\u046B\u046E\x03\x02\x02\x02\u046C\u046A\x03" +
		"\x02\x02\x02\u046C\u046D\x03\x02\x02\x02\u046Dq\x03\x02\x02\x02\u046E" +
		"\u046C\x03\x02\x02\x02\u046F\u0473\x05t;\x02\u0470\u0473\x05n8\x02\u0471" +
		"\u0473\x05p9\x02\u0472\u046F\x03\x02\x02\x02\u0472\u0470\x03\x02\x02\x02" +
		"\u0472\u0471\x03\x02\x02\x02\u0473s\x03\x02\x02\x02\u0474\u0476\x05v<" +
		"\x02\u0475\u0474\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02\u0477\u0475" +
		"\x03\x02\x02\x02\u0477\u0478\x03\x02\x02\x02\u0478\u047B\x03\x02\x02\x02" +
		"\u0479\u047C\x05n8\x02\u047A\u047C\x05p9\x02\u047B\u0479\x03\x02\x02\x02" +
		"\u047B\u047A\x03\x02\x02\x02\u047B\u047C\x03\x02\x02\x02\u047Cu\x03\x02" +
		"\x02\x02\u047D\u0481\x05h5\x02\u047E\u0481\x05j6\x02\u047F\u0481\x05l" +
		"7\x02\u0480\u047D\x03\x02\x02\x02\u0480\u047E\x03\x02\x02\x02\u0480\u047F" +
		"\x03\x02\x02\x02\u0481w\x03\x02\x02\x02\u0482\u0483\x07\x03\x02\x02\u0483" +
		"\u0484\x07$\x02\x02\u0484\u0485\x07O\x02\x02\u0485\u0486\x07\"\x02\x02" +
		"\u0486\u0487\x07P\x02\x02\u0487\u0488\x05\xE4s\x02\u0488\u0489\x07Q\x02" +
		"\x02\u0489\u048D\x07\x05\x02\x02\u048A\u048C\x05\x04\x03\x02\u048B\u048A" +
		"\x03\x02\x02\x02\u048C\u048F\x03\x02\x02\x02\u048D\u048B\x03\x02\x02\x02" +
		"\u048D\u048E\x03\x02\x02\x02\u048E\u0491\x03\x02\x02\x02\u048F\u048D\x03" +
		"\x02\x02\x02\u0490\u0492\x05\x82B\x02\u0491\u0490\x03\x02\x02\x02\u0491" +
		"\u0492\x03\x02\x02\x02\u0492\u0493\x03\x02\x02\x02\u0493\u0494\x07\x03" +
		"\x02\x02\u0494\u0495\x07$\x02\x02\u0495\u0496\x07O\x02\x02\u0496\u0497" +
		"\x07\x18\x02\x02\u0497\u0498\x07\x05\x02\x02\u0498y\x03\x02\x02\x02\u0499" +
		"\u049A\x07\x03\x02\x02\u049A\u049B\x07$\x02\x02\u049B\u049C\x07O\x02\x02" +
		"\u049C\u04A1\x07\x17\x02\x02\u049D\u049E\x07P\x02\x02\u049E\u049F\x05" +
		"\xE4s\x02\u049F\u04A0\x07Q\x02\x02\u04A0\u04A2\x03\x02\x02\x02\u04A1\u049D" +
		"\x03\x02\x02\x02\u04A1\u04A2\x03\x02\x02\x02\u04A2\u04A3\x03\x02\x02\x02" +
		"\u04A3\u04A7\x07\x05\x02\x02\u04A4\u04A6\x05\x04\x03\x02\u04A5\u04A4\x03" +
		"\x02\x02\x02\u04A6\u04A9\x03\x02\x02\x02\u04A7\u04A5\x03\x02\x02\x02\u04A7" +
		"\u04A8\x03\x02\x02\x02\u04A8\u04AA\x03\x02\x02\x02\u04A9\u04A7\x03\x02" +
		"\x02\x02\u04AA\u04AB\x07\x03\x02\x02\u04AB\u04AC\x07$\x02\x02\u04AC\u04AD" +
		"\x07O\x02\x02\u04AD\u04AE\x07\x18\x02\x02\u04AE\u04AF\x07\x05\x02\x02" +
		"\u04AF{\x03\x02\x02\x02\u04B0\u04B1\x07\x03\x02\x02\u04B1\u04B2\x07$\x02" +
		"\x02\u04B2\u04B3\x07O\x02\x02\u04B3\u04B4\x07H\x02\x02\u04B4\u04B5\x07" +
		"O\x02\x02\u04B5\u04B6\x07\"\x02\x02\u04B6\u04B7\x07P\x02\x02\u04B7\u04B8" +
		"\x05\xE4s\x02\u04B8\u04B9\x07Q\x02\x02\u04B9\u04BD\x07\x05\x02\x02\u04BA" +
		"\u04BC\x05\x04\x03\x02\u04BB\u04BA\x03\x02\x02\x02\u04BC\u04BF\x03\x02" +
		"\x02\x02\u04BD\u04BB\x03\x02\x02\x02\u04BD\u04BE\x03\x02\x02\x02\u04BE" +
		"}\x03\x02\x02\x02\u04BF\u04BD\x03\x02\x02\x02\u04C0\u04C1\x07\x03\x02" +
		"\x02\u04C1\u04C2\x07$\x02\x02\u04C2\u04C3\x07O\x02\x02\u04C3\u04C4\x07" +
		"H\x02\x02\u04C4\u04C5\x07O\x02\x02\u04C5\u04CA\x07\x17\x02\x02\u04C6\u04C7" +
		"\x07P\x02\x02\u04C7\u04C8\x05\xE4s\x02\u04C8\u04C9\x07Q\x02\x02\u04C9" +
		"\u04CB\x03\x02\x02\x02\u04CA\u04C6\x03\x02\x02\x02\u04CA\u04CB\x03\x02" +
		"\x02\x02\u04CB\u04CC\x03\x02\x02\x02\u04CC\u04D0\x07\x05\x02\x02\u04CD" +
		"\u04CF\x05\x04\x03\x02\u04CE\u04CD\x03\x02\x02\x02\u04CF\u04D2\x03\x02" +
		"\x02\x02\u04D0\u04CE\x03\x02\x02\x02\u04D0\u04D1\x03\x02\x02\x02\u04D1" +
		"\x7F\x03\x02\x02\x02\u04D2\u04D0\x03\x02\x02\x02\u04D3\u04D4\x07\x03\x02" +
		"\x02\u04D4\u04D5\x07$\x02\x02\u04D5\u04D6\x07O\x02\x02\u04D6\u04D7\x07" +
		"H\x02\x02\u04D7\u04DB\x07\x05\x02\x02\u04D8\u04DA\x05\x04\x03\x02\u04D9" +
		"\u04D8\x03\x02\x02\x02\u04DA\u04DD\x03\x02\x02\x02\u04DB\u04D9\x03\x02" +
		"\x02\x02\u04DB\u04DC\x03\x02\x02\x02\u04DC\x81\x03\x02\x02\x02\u04DD\u04DB" +
		"\x03\x02\x02\x02\u04DE\u04E2\x05\x84C\x02\u04DF\u04E2\x05~@\x02\u04E0" +
		"\u04E2\x05\x80A\x02\u04E1\u04DE\x03\x02\x02\x02\u04E1\u04DF\x03\x02\x02" +
		"\x02\u04E1\u04E0\x03\x02\x02\x02\u04E2\x83\x03\x02\x02\x02\u04E3\u04E5" +
		"\x05|?\x02\u04E4\u04E3\x03\x02\x02\x02\u04E5\u04E6\x03\x02\x02\x02\u04E6" +
		"\u04E4\x03\x02\x02\x02\u04E6\u04E7\x03\x02\x02\x02\u04E7\u04EA\x03\x02" +
		"\x02\x02\u04E8\u04EB\x05~@\x02\u04E9\u04EB\x05\x80A\x02\u04EA\u04E8\x03" +
		"\x02\x02\x02\u04EA\u04E9\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02\u04EB" +
		"\x85\x03\x02\x02\x02\u04EC\u04ED\x07\x03\x02\x02\u04ED\u04EE\x07B\x02" +
		"\x02\u04EE\u04EF\x07O\x02\x02\u04EF\u04F0\x07\"\x02\x02\u04F0\u04F1\x07" +
		"P\x02\x02\u04F1\u04F2\x05\xE4s\x02\u04F2\u04F3\x07Q\x02\x02\u04F3\u04F7" +
		"\x07\x05\x02\x02\u04F4\u04F6\x05\x04\x03\x02\u04F5\u04F4\x03\x02\x02\x02" +
		"\u04F6\u04F9\x03\x02\x02\x02\u04F7\u04F5\x03\x02\x02\x02\u04F7\u04F8\x03" +
		"\x02\x02\x02\u04F8\u04FB\x03\x02\x02\x02\u04F9\u04F7\x03\x02\x02\x02\u04FA" +
		"\u04FC\x05\x90I\x02\u04FB\u04FA\x03\x02\x02\x02\u04FB\u04FC\x03\x02\x02" +
		"\x02\u04FC\u04FD\x03\x02\x02\x02\u04FD\u04FE\x07\x03\x02\x02\u04FE\u04FF" +
		"\x07B\x02\x02\u04FF\u0500\x07O\x02\x02\u0500\u0501\x07\x18\x02\x02\u0501" +
		"\u0502\x07\x05\x02\x02\u0502\x87\x03\x02\x02\x02\u0503\u0504\x07\x03\x02" +
		"\x02\u0504\u0505\x07B\x02\x02\u0505\u0506\x07O\x02\x02\u0506\u050B\x07" +
		"\x17\x02\x02\u0507\u0508\x07P\x02\x02\u0508\u0509\x05\xE4s\x02\u0509\u050A" +
		"\x07Q\x02\x02\u050A\u050C\x03\x02\x02\x02\u050B\u0507\x03\x02\x02\x02" +
		"\u050B\u050C\x03\x02\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D\u0511\x07" +
		"\x05\x02\x02\u050E\u0510\x05\x04\x03\x02\u050F\u050E\x03\x02\x02\x02\u0510" +
		"\u0513\x03\x02\x02\x02\u0511\u050F\x03\x02\x02\x02\u0511\u0512\x03\x02" +
		"\x02\x02\u0512\u0514\x03\x02\x02\x02\u0513\u0511\x03\x02\x02\x02\u0514" +
		"\u0515\x07\x03\x02\x02\u0515\u0516\x07B\x02\x02\u0516\u0517\x07O\x02\x02" +
		"\u0517\u0518\x07\x18\x02\x02\u0518\u0519\x07\x05\x02\x02\u0519\x89\x03" +
		"\x02\x02\x02\u051A\u051B\x07\x03\x02\x02\u051B\u051C\x07B\x02\x02\u051C" +
		"\u051D\x07O\x02\x02\u051D\u051E\x07H\x02\x02\u051E\u051F\x07O\x02\x02" +
		"\u051F\u0520\x07\"\x02\x02\u0520\u0521\x07P\x02\x02\u0521\u0522\x05\xE4" +
		"s\x02\u0522\u0523\x07Q\x02\x02\u0523\u0527\x07\x05\x02\x02\u0524\u0526" +
		"\x05\x04\x03\x02\u0525\u0524\x03\x02\x02\x02\u0526\u0529\x03\x02\x02\x02" +
		"\u0527\u0525\x03\x02\x02\x02\u0527\u0528\x03\x02\x02\x02\u0528\x8B\x03" +
		"\x02\x02\x02\u0529\u0527\x03\x02\x02\x02\u052A\u052B\x07\x03\x02\x02\u052B" +
		"\u052C\x07B\x02\x02\u052C\u052D\x07O\x02\x02\u052D\u052E\x07H\x02\x02" +
		"\u052E\u052F\x07O\x02\x02\u052F\u0534\x07\x17\x02\x02\u0530\u0531\x07" +
		"P\x02\x02\u0531\u0532\x05\xE4s\x02\u0532\u0533\x07Q\x02\x02\u0533\u0535" +
		"\x03\x02\x02\x02\u0534\u0530\x03\x02\x02\x02\u0534\u0535\x03\x02\x02\x02" +
		"\u0535\u0536\x03\x02\x02\x02\u0536\u053A\x07\x05\x02\x02\u0537\u0539\x05" +
		"\x04\x03\x02\u0538\u0537\x03\x02\x02\x02\u0539\u053C\x03\x02\x02\x02\u053A" +
		"\u0538\x03\x02\x02\x02\u053A\u053B\x03\x02\x02\x02\u053B\x8D\x03\x02\x02" +
		"\x02\u053C\u053A\x03\x02\x02\x02\u053D\u053E\x07\x03\x02\x02\u053E\u053F" +
		"\x07B\x02\x02\u053F\u0540\x07O\x02\x02\u0540\u0541\x07H\x02\x02\u0541" +
		"\u0545\x07\x05\x02\x02\u0542\u0544\x05\x04\x03\x02\u0543\u0542\x03\x02" +
		"\x02\x02\u0544\u0547\x03\x02\x02\x02\u0545\u0543\x03\x02\x02\x02\u0545" +
		"\u0546\x03\x02\x02\x02\u0546\x8F\x03\x02\x02\x02\u0547\u0545\x03\x02\x02" +
		"\x02\u0548\u054C\x05\x92J\x02\u0549\u054C\x05\x8CG\x02\u054A\u054C\x05" +
		"\x8EH\x02\u054B\u0548\x03\x02\x02\x02\u054B\u0549\x03\x02\x02\x02\u054B" +
		"\u054A\x03\x02\x02\x02\u054C\x91\x03\x02\x02\x02\u054D\u054F\x05\x8AF" +
		"\x02\u054E\u054D\x03\x02\x02\x02\u054F\u0550\x03\x02\x02\x02\u0550\u054E" +
		"\x03\x02\x02\x02\u0550\u0551\x03\x02\x02\x02\u0551\u0554\x03\x02\x02\x02" +
		"\u0552\u0555\x05\x8CG\x02\u0553\u0555\x05\x8EH\x02\u0554\u0552\x03\x02" +
		"\x02\x02\u0554\u0553\x03\x02\x02\x02\u0554\u0555\x03\x02\x02\x02\u0555" +
		"\x93\x03\x02\x02\x02\u0556\u0557\x07\x03\x02\x02\u0557\u0558\x076\x02" +
		"\x02\u0558\u0559\x07O\x02\x02\u0559\u055A\x07\"\x02\x02\u055A\u055B\x07" +
		"P\x02\x02\u055B\u055C\x05\xE4s\x02\u055C\u055D\x07Q\x02\x02\u055D\u0561" +
		"\x07\x05\x02\x02\u055E\u0560\x05\x04\x03\x02\u055F\u055E\x03\x02\x02\x02" +
		"\u0560\u0563\x03\x02\x02\x02\u0561\u055F\x03\x02\x02\x02\u0561\u0562\x03" +
		"\x02\x02\x02\u0562\u0565\x03\x02\x02\x02\u0563\u0561\x03\x02\x02\x02\u0564" +
		"\u0566\x05\x9EP\x02\u0565\u0564\x03\x02\x02\x02\u0565\u0566\x03\x02\x02" +
		"\x02\u0566\u0567\x03\x02\x02\x02\u0567\u0568\x07\x03\x02\x02\u0568\u0569" +
		"\x076\x02\x02\u0569\u056A\x07O\x02\x02\u056A\u056B\x07\x18\x02\x02\u056B" +
		"\u056C\x07\x05\x02\x02\u056C\x95\x03\x02\x02\x02\u056D\u056E\x07\x03\x02" +
		"\x02\u056E\u056F\x076\x02\x02\u056F\u0570\x07O\x02\x02\u0570\u0575\x07" +
		"\x17\x02\x02\u0571\u0572\x07P\x02\x02\u0572\u0573\x05\xE4s\x02\u0573\u0574" +
		"\x07Q\x02\x02\u0574\u0576\x03\x02\x02\x02\u0575\u0571\x03\x02\x02\x02" +
		"\u0575\u0576\x03\x02\x02\x02\u0576\u0577\x03\x02\x02\x02\u0577\u057B\x07" +
		"\x05\x02\x02\u0578\u057A\x05\x04\x03\x02\u0579\u0578\x03\x02\x02\x02\u057A" +
		"\u057D\x03\x02\x02\x02\u057B\u0579\x03\x02\x02\x02\u057B\u057C\x03\x02" +
		"\x02\x02\u057C\u057E\x03\x02\x02\x02\u057D\u057B\x03\x02\x02\x02\u057E" +
		"\u057F\x07\x03\x02\x02\u057F\u0580\x076\x02\x02\u0580\u0581\x07O\x02\x02" +
		"\u0581\u0582\x07\x18\x02\x02\u0582\u0583\x07\x05\x02\x02\u0583\x97\x03" +
		"\x02\x02\x02\u0584\u0585\x07\x03\x02\x02\u0585\u0586\x076\x02\x02\u0586" +
		"\u0587\x07O\x02\x02\u0587\u0588\x07H\x02\x02\u0588\u0589\x07O\x02\x02" +
		"\u0589\u058A\x07\"\x02\x02\u058A\u058B\x07P\x02\x02\u058B\u058C\x05\xE4" +
		"s\x02\u058C\u058D\x07Q\x02\x02\u058D\u0591\x07\x05\x02\x02\u058E\u0590" +
		"\x05\x04\x03\x02\u058F\u058E\x03\x02\x02\x02\u0590\u0593\x03\x02\x02\x02" +
		"\u0591\u058F\x03\x02\x02\x02\u0591\u0592\x03\x02\x02\x02\u0592\x99\x03" +
		"\x02\x02\x02\u0593\u0591\x03\x02\x02\x02\u0594\u0595\x07\x03\x02\x02\u0595" +
		"\u0596\x076\x02\x02\u0596\u0597\x07O\x02\x02\u0597\u0598\x07H\x02\x02" +
		"\u0598\u0599\x07O\x02\x02\u0599\u059E\x07\x17\x02\x02\u059A\u059B\x07" +
		"P\x02\x02\u059B\u059C\x05\xE4s\x02\u059C\u059D\x07Q\x02\x02\u059D\u059F" +
		"\x03\x02\x02\x02\u059E\u059A\x03\x02\x02\x02\u059E\u059F\x03\x02\x02\x02" +
		"\u059F\u05A0\x03\x02\x02\x02\u05A0\u05A4\x07\x05\x02\x02\u05A1\u05A3\x05" +
		"\x04\x03\x02\u05A2\u05A1\x03\x02\x02\x02\u05A3\u05A6\x03\x02\x02\x02\u05A4" +
		"\u05A2\x03\x02\x02\x02\u05A4\u05A5\x03\x02\x02\x02\u05A5\x9B\x03\x02\x02" +
		"\x02\u05A6\u05A4\x03\x02\x02\x02\u05A7\u05A8\x07\x03\x02\x02\u05A8\u05A9" +
		"\x076\x02\x02\u05A9\u05AA\x07O\x02\x02\u05AA\u05AB\x07H\x02\x02\u05AB" +
		"\u05AF\x07\x05\x02\x02\u05AC\u05AE\x05\x04\x03\x02\u05AD\u05AC\x03\x02" +
		"\x02\x02\u05AE\u05B1\x03\x02\x02\x02\u05AF\u05AD\x03\x02\x02\x02\u05AF" +
		"\u05B0\x03\x02\x02\x02\u05B0\x9D\x03\x02\x02\x02\u05B1\u05AF\x03\x02\x02" +
		"\x02\u05B2\u05B6\x05\xA0Q\x02\u05B3\u05B6\x05\x9AN\x02\u05B4\u05B6\x05" +
		"\x9CO\x02\u05B5\u05B2\x03\x02\x02\x02\u05B5\u05B3\x03\x02\x02\x02\u05B5" +
		"\u05B4\x03\x02\x02\x02\u05B6\x9F\x03\x02\x02\x02\u05B7\u05B9\x05\x98M" +
		"\x02\u05B8\u05B7\x03\x02\x02\x02\u05B9\u05BA\x03\x02\x02\x02\u05BA\u05B8" +
		"\x03\x02\x02\x02\u05BA\u05BB\x03\x02\x02\x02\u05BB\u05BE\x03\x02\x02\x02" +
		"\u05BC\u05BF\x05\x9AN\x02\u05BD\u05BF\x05\x9CO\x02\u05BE\u05BC\x03\x02" +
		"\x02\x02\u05BE\u05BD\x03\x02\x02\x02\u05BE\u05BF\x03\x02\x02\x02\u05BF" +
		"\xA1\x03\x02\x02\x02\u05C0\u05C1\x07\x03\x02\x02\u05C1\u05C2\x07\r\x02" +
		"\x02\u05C2\u05C3\x07O\x02\x02\u05C3\u05C4\x07\"\x02\x02\u05C4\u05C5\x07" +
		"P\x02\x02\u05C5\u05C6\x05\xE6t\x02\u05C6\u05C7\x07Q\x02\x02\u05C7\u05CB" +
		"\x07\x05\x02\x02\u05C8\u05CA\x05\x04\x03\x02\u05C9\u05C8\x03\x02\x02\x02" +
		"\u05CA\u05CD\x03\x02\x02\x02\u05CB\u05C9\x03\x02\x02\x02\u05CB\u05CC\x03" +
		"\x02\x02\x02\u05CC\u05CF\x03\x02\x02\x02\u05CD\u05CB\x03\x02\x02\x02\u05CE" +
		"\u05D0\x05\xACW\x02\u05CF\u05CE\x03\x02\x02\x02\u05CF\u05D0\x03\x02\x02" +
		"\x02\u05D0\u05D1\x03\x02\x02\x02\u05D1\u05D2\x07\x03\x02\x02\u05D2\u05D3" +
		"\x07\r\x02\x02\u05D3\u05D4\x07O\x02\x02\u05D4\u05D5\x07\x18\x02\x02\u05D5" +
		"\u05D6\x07\x05\x02\x02\u05D6\xA3\x03\x02\x02\x02\u05D7\u05D8\x07\x03\x02" +
		"\x02\u05D8\u05D9\x07\r\x02\x02\u05D9\u05DA\x07O\x02\x02\u05DA\u05DF\x07" +
		"\x17\x02\x02\u05DB\u05DC\x07P\x02\x02\u05DC\u05DD\x05\xE6t\x02\u05DD\u05DE" +
		"\x07Q\x02\x02\u05DE\u05E0\x03\x02\x02\x02\u05DF\u05DB\x03\x02\x02\x02" +
		"\u05DF\u05E0\x03\x02\x02\x02\u05E0\u05E1\x03\x02\x02\x02\u05E1\u05E5\x07" +
		"\x05\x02\x02\u05E2\u05E4\x05\x04\x03\x02\u05E3\u05E2\x03\x02\x02\x02\u05E4" +
		"\u05E7\x03\x02\x02\x02\u05E5\u05E3\x03\x02\x02\x02\u05E5\u05E6\x03\x02" +
		"\x02\x02\u05E6\u05E8\x03\x02\x02\x02\u05E7\u05E5\x03\x02\x02\x02\u05E8" +
		"\u05E9\x07\x03\x02\x02\u05E9\u05EA\x07\r\x02\x02\u05EA\u05EB\x07O\x02" +
		"\x02\u05EB\u05EC\x07\x18\x02\x02\u05EC\u05ED\x07\x05\x02\x02\u05ED\xA5" +
		"\x03\x02\x02\x02\u05EE\u05EF\x07\x03\x02\x02\u05EF\u05F0\x07\r\x02\x02" +
		"\u05F0\u05F1\x07O\x02\x02\u05F1\u05F2\x07H\x02\x02\u05F2\u05F3\x07O\x02" +
		"\x02\u05F3\u05F4\x07\"\x02\x02\u05F4\u05F5\x07P\x02\x02\u05F5\u05F6\x05" +
		"\xE4s\x02\u05F6\u05F7\x07Q\x02\x02\u05F7\u05FB\x07\x05\x02\x02\u05F8\u05FA" +
		"\x05\x04\x03\x02\u05F9\u05F8\x03\x02\x02\x02\u05FA\u05FD\x03\x02\x02\x02" +
		"\u05FB\u05F9\x03\x02\x02\x02\u05FB\u05FC\x03\x02\x02\x02\u05FC\xA7\x03" +
		"\x02\x02\x02\u05FD\u05FB\x03\x02\x02\x02\u05FE\u05FF\x07\x03\x02\x02\u05FF" +
		"\u0600\x07\r\x02\x02\u0600\u0601\x07O\x02\x02\u0601\u0602\x07H\x02\x02" +
		"\u0602\u0603\x07O\x02\x02\u0603\u0608\x07\x17\x02\x02\u0604\u0605\x07" +
		"P\x02\x02\u0605\u0606\x05\xE4s\x02\u0606\u0607\x07Q\x02\x02\u0607\u0609" +
		"\x03\x02\x02\x02\u0608\u0604\x03\x02\x02\x02\u0608\u0609\x03\x02\x02\x02" +
		"\u0609\u060A\x03\x02\x02\x02\u060A\u060E\x07\x05\x02\x02\u060B\u060D\x05" +
		"\x04\x03\x02\u060C\u060B\x03\x02\x02\x02\u060D\u0610\x03\x02\x02\x02\u060E" +
		"\u060C\x03\x02\x02\x02\u060E\u060F\x03\x02\x02\x02\u060F\xA9\x03\x02\x02" +
		"\x02\u0610\u060E\x03\x02\x02\x02\u0611\u0612\x07\x03\x02\x02\u0612\u0613" +
		"\x07\r\x02\x02\u0613\u0614\x07O\x02\x02\u0614\u0615\x07H\x02\x02\u0615" +
		"\u0619\x07\x05\x02\x02\u0616\u0618\x05\x04\x03\x02\u0617\u0616\x03\x02" +
		"\x02\x02\u0618\u061B\x03\x02\x02\x02\u0619\u0617\x03\x02\x02\x02\u0619" +
		"\u061A\x03\x02\x02\x02\u061A\xAB\x03\x02\x02\x02\u061B\u0619\x03\x02\x02" +
		"\x02\u061C\u0620\x05\xAEX\x02\u061D\u0620\x05\xA8U\x02\u061E\u0620\x05" +
		"\xAAV\x02\u061F\u061C\x03\x02\x02\x02\u061F\u061D\x03\x02\x02\x02\u061F" +
		"\u061E\x03\x02\x02\x02\u0620\xAD\x03\x02\x02\x02\u0621\u0623\x05\xA6T" +
		"\x02\u0622\u0621\x03\x02\x02\x02\u0623\u0624\x03\x02\x02\x02\u0624\u0622" +
		"\x03\x02\x02\x02\u0624\u0625\x03\x02\x02\x02\u0625\u0628\x03\x02\x02\x02" +
		"\u0626\u0629\x05\xA8U\x02\u0627\u0629\x05\xAAV\x02\u0628\u0626\x03\x02" +
		"\x02\x02\u0628\u0627\x03\x02\x02\x02\u0628\u0629\x03\x02\x02\x02\u0629" +
		"\xAF\x03\x02\x02\x02\u062A\u062B\x07\x03\x02\x02\u062B\u062C\x07\x1E\x02" +
		"\x02\u062C\u062D\x07O\x02\x02\u062D\u062E\x07\"\x02\x02\u062E\u062F\x07" +
		"P\x02\x02\u062F\u0630\x05\xE2r\x02\u0630\u0631\x07Q\x02\x02\u0631\u0635" +
		"\x07\x05\x02\x02\u0632\u0634\x05\x04\x03\x02\u0633\u0632\x03\x02\x02\x02" +
		"\u0634\u0637\x03\x02\x02\x02\u0635\u0633\x03\x02\x02\x02\u0635\u0636\x03" +
		"\x02\x02\x02\u0636\u0639\x03\x02\x02\x02\u0637\u0635\x03\x02\x02\x02\u0638" +
		"\u063A\x05\xBA^\x02\u0639\u0638\x03\x02\x02\x02\u0639\u063A\x03\x02\x02" +
		"\x02\u063A\u063B\x03\x02\x02\x02\u063B\u063C\x07\x03\x02\x02\u063C\u063D" +
		"\x07\x1E\x02\x02\u063D\u063E\x07O\x02\x02\u063E\u063F\x07\x18\x02\x02" +
		"\u063F\u0640\x07\x05\x02\x02\u0640\xB1\x03\x02\x02\x02\u0641\u0642\x07" +
		"\x03\x02\x02\u0642\u0643\x07\x1E\x02\x02\u0643\u0644\x07O\x02\x02\u0644" +
		"\u0649\x07\x17\x02\x02\u0645\u0646\x07P\x02\x02\u0646\u0647\x05\xE2r\x02" +
		"\u0647\u0648\x07Q\x02\x02\u0648\u064A\x03\x02\x02\x02\u0649\u0645\x03" +
		"\x02\x02\x02\u0649\u064A\x03\x02\x02\x02\u064A\u064B\x03\x02\x02\x02\u064B" +
		"\u064F\x07\x05\x02\x02\u064C\u064E\x05\x04\x03\x02\u064D\u064C\x03\x02" +
		"\x02\x02\u064E\u0651\x03\x02\x02\x02\u064F\u064D\x03\x02\x02\x02\u064F" +
		"\u0650\x03\x02\x02\x02\u0650\u0652\x03\x02\x02\x02\u0651\u064F\x03\x02" +
		"\x02\x02\u0652\u0653\x07\x03\x02\x02\u0653\u0654\x07\x1E\x02\x02\u0654" +
		"\u0655\x07O\x02\x02\u0655\u0656\x07\x18\x02\x02\u0656\u0657\x07\x05\x02" +
		"\x02\u0657\xB3\x03\x02\x02\x02\u0658\u0659\x07\x03\x02\x02\u0659\u065A" +
		"\x07\x1E\x02\x02\u065A\u065B\x07O\x02\x02\u065B\u065C\x07H\x02\x02\u065C" +
		"\u065D\x07O\x02\x02\u065D\u065E\x07\"\x02\x02\u065E\u065F\x07P\x02\x02" +
		"\u065F\u0660\x05\xE4s\x02\u0660\u0661\x07Q\x02\x02\u0661\u0665\x07\x05" +
		"\x02\x02\u0662\u0664\x05\x04\x03\x02\u0663\u0662\x03\x02\x02\x02\u0664" +
		"\u0667\x03\x02\x02\x02\u0665\u0663\x03\x02\x02\x02\u0665\u0666\x03\x02" +
		"\x02\x02\u0666\xB5\x03\x02\x02\x02\u0667\u0665\x03\x02\x02\x02\u0668\u0669" +
		"\x07\x03\x02\x02\u0669\u066A\x07\x1E\x02\x02\u066A\u066B\x07O\x02\x02" +
		"\u066B\u066C\x07H\x02\x02\u066C\u066D\x07O\x02\x02\u066D\u0672\x07\x17" +
		"\x02\x02\u066E\u066F\x07P\x02\x02\u066F\u0670\x05\xE4s\x02\u0670\u0671" +
		"\x07Q\x02\x02\u0671\u0673\x03\x02\x02\x02\u0672\u066E\x03\x02\x02\x02" +
		"\u0672\u0673\x03\x02\x02\x02\u0673\u0674\x03\x02\x02\x02\u0674\u0678\x07" +
		"\x05\x02\x02\u0675\u0677\x05\x04\x03\x02\u0676\u0675\x03\x02\x02\x02\u0677" +
		"\u067A\x03\x02\x02\x02\u0678\u0676\x03\x02\x02\x02\u0678\u0679\x03\x02" +
		"\x02\x02\u0679\xB7\x03\x02\x02\x02\u067A\u0678\x03\x02\x02\x02\u067B\u067C" +
		"\x07\x03\x02\x02\u067C\u067D\x07\x1E\x02\x02\u067D\u067E\x07O\x02\x02" +
		"\u067E\u067F\x07H\x02\x02\u067F\u0683\x07\x05\x02\x02\u0680\u0682\x05" +
		"\x04\x03\x02\u0681\u0680\x03\x02\x02\x02\u0682\u0685\x03\x02\x02\x02\u0683" +
		"\u0681\x03\x02\x02\x02\u0683\u0684\x03\x02\x02\x02\u0684\xB9\x03\x02\x02" +
		"\x02\u0685\u0683\x03\x02\x02\x02\u0686\u068A\x05\xBC_\x02\u0687\u068A" +
		"\x05\xB6\\\x02\u0688\u068A\x05\xB8]\x02\u0689\u0686\x03\x02\x02\x02\u0689" +
		"\u0687\x03\x02\x02\x02\u0689\u0688\x03\x02\x02\x02\u068A\xBB\x03\x02\x02" +
		"\x02\u068B\u068D\x05\xB4[\x02\u068C\u068B\x03\x02\x02\x02\u068D\u068E" +
		"\x03\x02\x02\x02\u068E\u068C\x03\x02\x02\x02\u068E\u068F\x03\x02\x02\x02" +
		"\u068F\u0692\x03\x02\x02\x02\u0690\u0693\x05\xB6\\\x02\u0691\u0693\x05" +
		"\xB8]\x02\u0692\u0690\x03\x02\x02\x02\u0692\u0691\x03\x02\x02\x02\u0692" +
		"\u0693\x03\x02\x02\x02\u0693\xBD\x03\x02\x02\x02\u0694\u069C\x05\xC0a" +
		"\x02\u0695\u069C\x05\xC6d\x02\u0696\u069C\x05\xCCg\x02\u0697\u069C\x05" +
		"\xCEh\x02\u0698\u069C\x05\xD0i\x02\u0699\u069C\x05\xD2j\x02\u069A\u069C" +
		"\x05\xD4k\x02\u069B\u0694\x03\x02\x02\x02\u069B\u0695\x03\x02\x02\x02" +
		"\u069B\u0696\x03\x02\x02\x02\u069B\u0697\x03\x02\x02\x02\u069B\u0698\x03" +
		"\x02\x02\x02\u069B\u0699\x03\x02\x02\x02\u069B\u069A\x03\x02\x02\x02\u069C" +
		"\xBF\x03\x02\x02\x02\u069D\u069E\x07\x03\x02\x02\u069E\u06A2\x05\xD8m" +
		"\x02\u069F\u06A1\x05\xC2b\x02\u06A0\u069F\x03\x02\x02\x02\u06A1\u06A4" +
		"\x03\x02\x02\x02\u06A2\u06A0\x03\x02\x02\x02\u06A2\u06A3\x03\x02\x02\x02" +
		"\u06A3\u06A5\x03\x02\x02\x02\u06A4\u06A2\x03\x02\x02\x02\u06A5\u06A6\x07" +
		"\x05\x02\x02\u06A6\xC1\x03\x02\x02\x02\u06A7\u06A8\x07O\x02\x02\u06A8" +
		"\u06A9\x05\xC4c\x02\u06A9\xC3\x03\x02\x02\x02\u06AA\u06AB\t\x02\x02\x02" +
		"\u06AB\xC5\x03\x02\x02\x02\u06AC\u06AD\x07\x03\x02\x02\u06AD\u06B1\x05" +
		"\xDAn\x02\u06AE\u06B0\x05\xC8e\x02\u06AF\u06AE\x03\x02\x02\x02\u06B0\u06B3" +
		"\x03\x02\x02\x02\u06B1\u06AF\x03\x02\x02\x02\u06B1\u06B2\x03\x02\x02\x02" +
		"\u06B2\u06B4\x03\x02\x02\x02\u06B3\u06B1\x03\x02\x02\x02\u06B4\u06B5\x07" +
		"\x05\x02\x02\u06B5\xC7\x03\x02\x02\x02\u06B6\u06B7\x07O\x02\x02\u06B7" +
		"\u06B8\x05\xCAf\x02\u06B8\xC9\x03\x02\x02\x02\u06B9";
	private static readonly _serializedATNSegment3: string =
		"\u06BA\t\x03\x02\x02\u06BA\xCB\x03\x02\x02\x02\u06BB\u06BC\x07\x03\x02" +
		"\x02\u06BC\u06BD\x07$\x02\x02\u06BD\u06BE\x07O\x02\x02\u06BE\u06BF\x07" +
		".\x02\x02\u06BF\u06C0\x07\x05\x02\x02\u06C0\xCD\x03\x02\x02\x02\u06C1" +
		"\u06C2\x07\x03\x02\x02\u06C2\u06C3\x07B\x02\x02\u06C3\u06C4\x07O\x02\x02" +
		"\u06C4\u06C5\x07.\x02\x02\u06C5\u06C6\x07\x05\x02\x02\u06C6\xCF\x03\x02" +
		"\x02\x02\u06C7\u06C8\x07\x03\x02\x02\u06C8\u06C9\x076\x02\x02\u06C9\u06CA" +
		"\x07O\x02\x02\u06CA\u06CB\x07.\x02\x02\u06CB\u06CC\x07\x05\x02\x02\u06CC" +
		"\xD1\x03\x02\x02\x02\u06CD\u06CE\x07\x03\x02\x02\u06CE\u06CF\x07\r\x02" +
		"\x02\u06CF\u06D0\x07O\x02\x02\u06D0\u06D1\x07.\x02\x02\u06D1\u06D2\x07" +
		"\x05\x02\x02\u06D2\xD3\x03\x02\x02\x02\u06D3\u06D4\x07\x03\x02\x02\u06D4" +
		"\u06D5\x07\x1E\x02\x02\u06D5\u06D6\x07O\x02\x02\u06D6\u06D7\x07.\x02\x02" +
		"\u06D7\u06D8\x07\x05\x02\x02\u06D8\xD5\x03\x02\x02\x02\u06D9\u06DA\x07" +
		"\x04\x02\x02\u06DA\xD7\x03\x02\x02\x02\u06DB\u06DC\t\x04\x02\x02\u06DC" +
		"\xD9\x03\x02\x02\x02\u06DD\u06DE\t\x05\x02\x02\u06DE\xDB\x03\x02\x02\x02" +
		"\u06DF\u06E0\x07V\x02\x02\u06E0\xDD\x03\x02\x02\x02\u06E1\u06E2\x07T\x02" +
		"\x02\u06E2\xDF\x03\x02\x02\x02\u06E3\u06E4\x05\xE8u\x02\u06E4\xE1\x03" +
		"\x02\x02\x02\u06E5\u06E6\x05\xE8u\x02\u06E6\xE3\x03\x02\x02\x02\u06E7" +
		"\u06E8\x05\xE8u\x02\u06E8\xE5\x03\x02\x02\x02\u06E9\u06EA\x05\xE8u\x02" +
		"\u06EA\xE7\x03\x02\x02\x02\u06EB\u06F4\x05\xF2z\x02\u06EC\u06F4\x05\xEC" +
		"w\x02\u06ED\u06EE\x05\xEAv\x02\u06EE\u06EF\x05\xEEx\x02\u06EF\u06F4\x03" +
		"\x02\x02\x02\u06F0\u06F1\x05\xEAv\x02\u06F1\u06F2\x05\xF0y\x02\u06F2\u06F4" +
		"\x03\x02\x02\x02\u06F3\u06EB\x03\x02\x02\x02\u06F3\u06EC\x03\x02\x02\x02" +
		"\u06F3\u06ED\x03\x02\x02\x02\u06F3\u06F0\x03\x02\x02\x02\u06F4\xE9\x03" +
		"\x02\x02\x02\u06F5\u06F8\x05\xF2z\x02\u06F6\u06F8\x05\xECw\x02\u06F7\u06F5" +
		"\x03\x02\x02\x02\u06F7\u06F6\x03\x02\x02\x02\u06F8\xEB\x03\x02\x02\x02" +
		"\u06F9\u06FA\x07P\x02\x02\u06FA\u06FB\x05\xE8u\x02\u06FB\u06FC\x07Q\x02" +
		"\x02\u06FC\xED\x03\x02\x02\x02\u06FD\u06FE\x07R\x02\x02\u06FE\u06FF\x05" +
		"\xE8u\x02\u06FF\xEF\x03\x02\x02\x02\u0700\u0701\x07S\x02\x02\u0701\u0702" +
		"\x05\xE8u\x02\u0702\xF1\x03\x02\x02\x02\u0703\u0708\x05\xF4{\x02\u0704" +
		"\u0708\x05\xF6|\x02\u0705\u0708\x05\xF8}\x02\u0706\u0708\x05\xDEp\x02" +
		"\u0707\u0703\x03\x02\x02\x02\u0707\u0704\x03\x02\x02\x02\u0707\u0705\x03" +
		"\x02\x02\x02\u0707\u0706\x03\x02\x02\x02\u0708\xF3\x03\x02\x02\x02\u0709" +
		"\u070A\t\x06\x02\x02\u070A\xF5\x03\x02\x02\x02\u070B\u070C\t\x07\x02\x02" +
		"\u070C\xF7\x03\x02\x02\x02\u070D\u070E\t\b\x02\x02\u070E\xF9\x03\x02\x02" +
		"\x02\x96\xFD\u0105\u0123\u0130\u0134\u0147\u014B\u015B\u0161\u0177\u0187" +
		"\u0194\u019A\u01A5\u01AB\u01B0\u01B4\u01B8\u01C5\u01C9\u01DC\u01E0\u01F0" +
		"\u01F6\u020C\u021C\u0229\u022F\u023A\u0240\u0245\u0249\u024D\u025A\u025E" +
		"\u0271\u0275\u0285\u028B\u02A1\u02B1\u02BE\u02C4\u02CF\u02D5\u02DA\u02DE" +
		"\u02E2\u02EF\u02F3\u0306\u030A\u031C\u0320\u0333\u0337\u0347\u034D\u0363" +
		"\u0373\u0382\u0392\u039F\u03A5\u03B0\u03B6\u03BB\u03BF\u03C5\u03D2\u03D6" +
		"\u03E8\u03EC\u03FF\u0403\u0413\u0419\u042F\u043E\u044E\u045B\u0461\u046C" +
		"\u0472\u0477\u047B\u0480\u048D\u0491\u04A1\u04A7\u04BD\u04CA\u04D0\u04DB" +
		"\u04E1\u04E6\u04EA\u04F7\u04FB\u050B\u0511\u0527\u0534\u053A\u0545\u054B" +
		"\u0550\u0554\u0561\u0565\u0575\u057B\u0591\u059E\u05A4\u05AF\u05B5\u05BA" +
		"\u05BE\u05CB\u05CF\u05DF\u05E5\u05FB\u0608\u060E\u0619\u061F\u0624\u0628" +
		"\u0635\u0639\u0649\u064F\u0665\u0672\u0678\u0683\u0689\u068E\u0692\u069B" +
		"\u06A2\u06B1\u06F3\u06F7\u0707";
	public static readonly _serializedATN: string = Utils.join(
		[
			TemplateParser._serializedATNSegment0,
			TemplateParser._serializedATNSegment1,
			TemplateParser._serializedATNSegment2,
			TemplateParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TemplateParser.__ATN) {
			TemplateParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TemplateParser._serializedATN));
		}

		return TemplateParser.__ATN;
	}

}

export class TemplateContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(TemplateParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_template; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterTemplate) {
			listener.enterTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitTemplate) {
			listener.exitTemplate(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public text(): TextContext | undefined {
		return this.tryGetRuleContext(0, TextContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_statement; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public tableIfStmt(): TableIfStmtContext | undefined {
		return this.tryGetRuleContext(0, TableIfStmtContext);
	}
	public tableExistsStmt(): TableExistsStmtContext | undefined {
		return this.tryGetRuleContext(0, TableExistsStmtContext);
	}
	public tableEachStmt(): TableEachStmtContext | undefined {
		return this.tryGetRuleContext(0, TableEachStmtContext);
	}
	public inheritedIfStmt(): InheritedIfStmtContext | undefined {
		return this.tryGetRuleContext(0, InheritedIfStmtContext);
	}
	public inheritedExistsStmt(): InheritedExistsStmtContext | undefined {
		return this.tryGetRuleContext(0, InheritedExistsStmtContext);
	}
	public inheritedEachStmt(): InheritedEachStmtContext | undefined {
		return this.tryGetRuleContext(0, InheritedEachStmtContext);
	}
	public referenceIfStmt(): ReferenceIfStmtContext | undefined {
		return this.tryGetRuleContext(0, ReferenceIfStmtContext);
	}
	public referenceExistsStmt(): ReferenceExistsStmtContext | undefined {
		return this.tryGetRuleContext(0, ReferenceExistsStmtContext);
	}
	public referenceEachStmt(): ReferenceEachStmtContext | undefined {
		return this.tryGetRuleContext(0, ReferenceEachStmtContext);
	}
	public fieldIfStmt(): FieldIfStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldIfStmtContext);
	}
	public fieldExistsStmt(): FieldExistsStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldExistsStmtContext);
	}
	public fieldEachStmt(): FieldEachStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldEachStmtContext);
	}
	public fieldMatchStmt(): FieldMatchStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldMatchStmtContext);
	}
	public fieldContainsStmt(): FieldContainsStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldContainsStmtContext);
	}
	public descriptorIfStmt(): DescriptorIfStmtContext | undefined {
		return this.tryGetRuleContext(0, DescriptorIfStmtContext);
	}
	public descriptorEachStmt(): DescriptorEachStmtContext | undefined {
		return this.tryGetRuleContext(0, DescriptorEachStmtContext);
	}
	public descriptorMatchStmt(): DescriptorMatchStmtContext | undefined {
		return this.tryGetRuleContext(0, DescriptorMatchStmtContext);
	}
	public descriptorContainsStmt(): DescriptorContainsStmtContext | undefined {
		return this.tryGetRuleContext(0, DescriptorContainsStmtContext);
	}
	public indexIfStmt(): IndexIfStmtContext | undefined {
		return this.tryGetRuleContext(0, IndexIfStmtContext);
	}
	public indexEachStmt(): IndexEachStmtContext | undefined {
		return this.tryGetRuleContext(0, IndexEachStmtContext);
	}
	public uniqueIfStmt(): UniqueIfStmtContext | undefined {
		return this.tryGetRuleContext(0, UniqueIfStmtContext);
	}
	public uniqueEachStmt(): UniqueEachStmtContext | undefined {
		return this.tryGetRuleContext(0, UniqueEachStmtContext);
	}
	public primaryIfStmt(): PrimaryIfStmtContext | undefined {
		return this.tryGetRuleContext(0, PrimaryIfStmtContext);
	}
	public primaryEachStmt(): PrimaryEachStmtContext | undefined {
		return this.tryGetRuleContext(0, PrimaryEachStmtContext);
	}
	public constraintIfStmt(): ConstraintIfStmtContext | undefined {
		return this.tryGetRuleContext(0, ConstraintIfStmtContext);
	}
	public constraintEachStmt(): ConstraintEachStmtContext | undefined {
		return this.tryGetRuleContext(0, ConstraintEachStmtContext);
	}
	public foreignIfStmt(): ForeignIfStmtContext | undefined {
		return this.tryGetRuleContext(0, ForeignIfStmtContext);
	}
	public foreignEachStmt(): ForeignEachStmtContext | undefined {
		return this.tryGetRuleContext(0, ForeignEachStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_block; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class TableIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_TABLE(): TerminalNode[];
	public K_TABLE(i: number): TerminalNode;
	public K_TABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_TABLE);
		} else {
			return this.getToken(TemplateParser.K_TABLE, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public tableCondition(): TableConditionContext {
		return this.getRuleContext(0, TableConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public tableElseStmt(): TableElseStmtContext | undefined {
		return this.tryGetRuleContext(0, TableElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_tableIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterTableIfStmt) {
			listener.enterTableIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitTableIfStmt) {
			listener.exitTableIfStmt(this);
		}
	}
}


export class TableExistsStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_TABLE(): TerminalNode[];
	public K_TABLE(i: number): TerminalNode;
	public K_TABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_TABLE);
		} else {
			return this.getToken(TemplateParser.K_TABLE, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_EXISTS(): TerminalNode { return this.getToken(TemplateParser.K_EXISTS, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public tableCondition(): TableConditionContext {
		return this.getRuleContext(0, TableConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public tableElseStmt(): TableElseStmtContext | undefined {
		return this.tryGetRuleContext(0, TableElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_tableExistsStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterTableExistsStmt) {
			listener.enterTableExistsStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitTableExistsStmt) {
			listener.exitTableExistsStmt(this);
		}
	}
}


export class TableEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_TABLE(): TerminalNode[];
	public K_TABLE(i: number): TerminalNode;
	public K_TABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_TABLE);
		} else {
			return this.getToken(TemplateParser.K_TABLE, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public tableCondition(): TableConditionContext | undefined {
		return this.tryGetRuleContext(0, TableConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_tableEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterTableEachStmt) {
			listener.enterTableEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitTableEachStmt) {
			listener.exitTableEachStmt(this);
		}
	}
}


export class TableElseIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_TABLE(): TerminalNode { return this.getToken(TemplateParser.K_TABLE, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public tableCondition(): TableConditionContext {
		return this.getRuleContext(0, TableConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_tableElseIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterTableElseIfStmt) {
			listener.enterTableElseIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitTableElseIfStmt) {
			listener.exitTableElseIfStmt(this);
		}
	}
}


export class TableElseExistsStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_TABLE(): TerminalNode { return this.getToken(TemplateParser.K_TABLE, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_EXISTS(): TerminalNode { return this.getToken(TemplateParser.K_EXISTS, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public tableCondition(): TableConditionContext {
		return this.getRuleContext(0, TableConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_tableElseExistsStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterTableElseExistsStmt) {
			listener.enterTableElseExistsStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitTableElseExistsStmt) {
			listener.exitTableElseExistsStmt(this);
		}
	}
}


export class TableElseEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_TABLE(): TerminalNode { return this.getToken(TemplateParser.K_TABLE, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public tableCondition(): TableConditionContext | undefined {
		return this.tryGetRuleContext(0, TableConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_tableElseEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterTableElseEachStmt) {
			listener.enterTableElseEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitTableElseEachStmt) {
			listener.exitTableElseEachStmt(this);
		}
	}
}


export class TableElseEndStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_TABLE(): TerminalNode { return this.getToken(TemplateParser.K_TABLE, 0); }
	public DOT(): TerminalNode { return this.getToken(TemplateParser.DOT, 0); }
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_tableElseEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterTableElseEndStmt) {
			listener.enterTableElseEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitTableElseEndStmt) {
			listener.exitTableElseEndStmt(this);
		}
	}
}


export class TableElseStmtContext extends ParserRuleContext {
	public tableElseCondEndStmt(): TableElseCondEndStmtContext | undefined {
		return this.tryGetRuleContext(0, TableElseCondEndStmtContext);
	}
	public tableElseEachStmt(): TableElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, TableElseEachStmtContext);
	}
	public tableElseEndStmt(): TableElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, TableElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_tableElseStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterTableElseStmt) {
			listener.enterTableElseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitTableElseStmt) {
			listener.exitTableElseStmt(this);
		}
	}
}


export class TableElseCondEndStmtContext extends ParserRuleContext {
	public tableElseCondStmt(): TableElseCondStmtContext[];
	public tableElseCondStmt(i: number): TableElseCondStmtContext;
	public tableElseCondStmt(i?: number): TableElseCondStmtContext | TableElseCondStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableElseCondStmtContext);
		} else {
			return this.getRuleContext(i, TableElseCondStmtContext);
		}
	}
	public tableElseEachStmt(): TableElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, TableElseEachStmtContext);
	}
	public tableElseEndStmt(): TableElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, TableElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_tableElseCondEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterTableElseCondEndStmt) {
			listener.enterTableElseCondEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitTableElseCondEndStmt) {
			listener.exitTableElseCondEndStmt(this);
		}
	}
}


export class TableElseCondStmtContext extends ParserRuleContext {
	public tableElseIfStmt(): TableElseIfStmtContext | undefined {
		return this.tryGetRuleContext(0, TableElseIfStmtContext);
	}
	public tableElseExistsStmt(): TableElseExistsStmtContext | undefined {
		return this.tryGetRuleContext(0, TableElseExistsStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_tableElseCondStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterTableElseCondStmt) {
			listener.enterTableElseCondStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitTableElseCondStmt) {
			listener.exitTableElseCondStmt(this);
		}
	}
}


export class InheritedIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_INHERITED(): TerminalNode[];
	public K_INHERITED(i: number): TerminalNode;
	public K_INHERITED(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_INHERITED);
		} else {
			return this.getToken(TemplateParser.K_INHERITED, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public tableCondition(): TableConditionContext {
		return this.getRuleContext(0, TableConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public inheritedElseStmt(): InheritedElseStmtContext | undefined {
		return this.tryGetRuleContext(0, InheritedElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_inheritedIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterInheritedIfStmt) {
			listener.enterInheritedIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitInheritedIfStmt) {
			listener.exitInheritedIfStmt(this);
		}
	}
}


export class InheritedExistsStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_INHERITED(): TerminalNode[];
	public K_INHERITED(i: number): TerminalNode;
	public K_INHERITED(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_INHERITED);
		} else {
			return this.getToken(TemplateParser.K_INHERITED, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_EXISTS(): TerminalNode { return this.getToken(TemplateParser.K_EXISTS, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public tableCondition(): TableConditionContext {
		return this.getRuleContext(0, TableConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public inheritedElseStmt(): InheritedElseStmtContext | undefined {
		return this.tryGetRuleContext(0, InheritedElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_inheritedExistsStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterInheritedExistsStmt) {
			listener.enterInheritedExistsStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitInheritedExistsStmt) {
			listener.exitInheritedExistsStmt(this);
		}
	}
}


export class InheritedEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_INHERITED(): TerminalNode[];
	public K_INHERITED(i: number): TerminalNode;
	public K_INHERITED(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_INHERITED);
		} else {
			return this.getToken(TemplateParser.K_INHERITED, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public tableCondition(): TableConditionContext | undefined {
		return this.tryGetRuleContext(0, TableConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_inheritedEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterInheritedEachStmt) {
			listener.enterInheritedEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitInheritedEachStmt) {
			listener.exitInheritedEachStmt(this);
		}
	}
}


export class InheritedElseIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_INHERITED(): TerminalNode { return this.getToken(TemplateParser.K_INHERITED, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public tableCondition(): TableConditionContext {
		return this.getRuleContext(0, TableConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_inheritedElseIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterInheritedElseIfStmt) {
			listener.enterInheritedElseIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitInheritedElseIfStmt) {
			listener.exitInheritedElseIfStmt(this);
		}
	}
}


export class InheritedElseExistsStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_INHERITED(): TerminalNode { return this.getToken(TemplateParser.K_INHERITED, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_EXISTS(): TerminalNode { return this.getToken(TemplateParser.K_EXISTS, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public tableCondition(): TableConditionContext {
		return this.getRuleContext(0, TableConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_inheritedElseExistsStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterInheritedElseExistsStmt) {
			listener.enterInheritedElseExistsStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitInheritedElseExistsStmt) {
			listener.exitInheritedElseExistsStmt(this);
		}
	}
}


export class InheritedElseEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_INHERITED(): TerminalNode { return this.getToken(TemplateParser.K_INHERITED, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public tableCondition(): TableConditionContext | undefined {
		return this.tryGetRuleContext(0, TableConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_inheritedElseEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterInheritedElseEachStmt) {
			listener.enterInheritedElseEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitInheritedElseEachStmt) {
			listener.exitInheritedElseEachStmt(this);
		}
	}
}


export class InheritedElseEndStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_INHERITED(): TerminalNode { return this.getToken(TemplateParser.K_INHERITED, 0); }
	public DOT(): TerminalNode { return this.getToken(TemplateParser.DOT, 0); }
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_inheritedElseEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterInheritedElseEndStmt) {
			listener.enterInheritedElseEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitInheritedElseEndStmt) {
			listener.exitInheritedElseEndStmt(this);
		}
	}
}


export class InheritedElseStmtContext extends ParserRuleContext {
	public inheritedElseCondEndStmt(): InheritedElseCondEndStmtContext | undefined {
		return this.tryGetRuleContext(0, InheritedElseCondEndStmtContext);
	}
	public inheritedElseEachStmt(): InheritedElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, InheritedElseEachStmtContext);
	}
	public inheritedElseEndStmt(): InheritedElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, InheritedElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_inheritedElseStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterInheritedElseStmt) {
			listener.enterInheritedElseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitInheritedElseStmt) {
			listener.exitInheritedElseStmt(this);
		}
	}
}


export class InheritedElseCondEndStmtContext extends ParserRuleContext {
	public inheritedElseCondStmt(): InheritedElseCondStmtContext[];
	public inheritedElseCondStmt(i: number): InheritedElseCondStmtContext;
	public inheritedElseCondStmt(i?: number): InheritedElseCondStmtContext | InheritedElseCondStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InheritedElseCondStmtContext);
		} else {
			return this.getRuleContext(i, InheritedElseCondStmtContext);
		}
	}
	public inheritedElseEachStmt(): InheritedElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, InheritedElseEachStmtContext);
	}
	public inheritedElseEndStmt(): InheritedElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, InheritedElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_inheritedElseCondEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterInheritedElseCondEndStmt) {
			listener.enterInheritedElseCondEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitInheritedElseCondEndStmt) {
			listener.exitInheritedElseCondEndStmt(this);
		}
	}
}


export class InheritedElseCondStmtContext extends ParserRuleContext {
	public inheritedElseIfStmt(): InheritedElseIfStmtContext | undefined {
		return this.tryGetRuleContext(0, InheritedElseIfStmtContext);
	}
	public inheritedElseExistsStmt(): InheritedElseExistsStmtContext | undefined {
		return this.tryGetRuleContext(0, InheritedElseExistsStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_inheritedElseCondStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterInheritedElseCondStmt) {
			listener.enterInheritedElseCondStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitInheritedElseCondStmt) {
			listener.exitInheritedElseCondStmt(this);
		}
	}
}


export class ReferenceIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_REFERENCE(): TerminalNode[];
	public K_REFERENCE(i: number): TerminalNode;
	public K_REFERENCE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_REFERENCE);
		} else {
			return this.getToken(TemplateParser.K_REFERENCE, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public tableCondition(): TableConditionContext {
		return this.getRuleContext(0, TableConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public referenceElseStmt(): ReferenceElseStmtContext | undefined {
		return this.tryGetRuleContext(0, ReferenceElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_referenceIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterReferenceIfStmt) {
			listener.enterReferenceIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitReferenceIfStmt) {
			listener.exitReferenceIfStmt(this);
		}
	}
}


export class ReferenceExistsStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_REFERENCE(): TerminalNode[];
	public K_REFERENCE(i: number): TerminalNode;
	public K_REFERENCE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_REFERENCE);
		} else {
			return this.getToken(TemplateParser.K_REFERENCE, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_EXISTS(): TerminalNode { return this.getToken(TemplateParser.K_EXISTS, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public tableCondition(): TableConditionContext {
		return this.getRuleContext(0, TableConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public referenceElseStmt(): ReferenceElseStmtContext | undefined {
		return this.tryGetRuleContext(0, ReferenceElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_referenceExistsStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterReferenceExistsStmt) {
			listener.enterReferenceExistsStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitReferenceExistsStmt) {
			listener.exitReferenceExistsStmt(this);
		}
	}
}


export class ReferenceEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_REFERENCE(): TerminalNode[];
	public K_REFERENCE(i: number): TerminalNode;
	public K_REFERENCE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_REFERENCE);
		} else {
			return this.getToken(TemplateParser.K_REFERENCE, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public tableCondition(): TableConditionContext | undefined {
		return this.tryGetRuleContext(0, TableConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_referenceEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterReferenceEachStmt) {
			listener.enterReferenceEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitReferenceEachStmt) {
			listener.exitReferenceEachStmt(this);
		}
	}
}


export class ReferenceElseIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_REFERENCE(): TerminalNode { return this.getToken(TemplateParser.K_REFERENCE, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public tableCondition(): TableConditionContext {
		return this.getRuleContext(0, TableConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_referenceElseIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterReferenceElseIfStmt) {
			listener.enterReferenceElseIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitReferenceElseIfStmt) {
			listener.exitReferenceElseIfStmt(this);
		}
	}
}


export class ReferenceElseExistsStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_REFERENCE(): TerminalNode { return this.getToken(TemplateParser.K_REFERENCE, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_EXISTS(): TerminalNode { return this.getToken(TemplateParser.K_EXISTS, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public tableCondition(): TableConditionContext {
		return this.getRuleContext(0, TableConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_referenceElseExistsStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterReferenceElseExistsStmt) {
			listener.enterReferenceElseExistsStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitReferenceElseExistsStmt) {
			listener.exitReferenceElseExistsStmt(this);
		}
	}
}


export class ReferenceElseEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_REFERENCE(): TerminalNode { return this.getToken(TemplateParser.K_REFERENCE, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public tableCondition(): TableConditionContext | undefined {
		return this.tryGetRuleContext(0, TableConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_referenceElseEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterReferenceElseEachStmt) {
			listener.enterReferenceElseEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitReferenceElseEachStmt) {
			listener.exitReferenceElseEachStmt(this);
		}
	}
}


export class ReferenceElseEndStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_REFERENCE(): TerminalNode { return this.getToken(TemplateParser.K_REFERENCE, 0); }
	public DOT(): TerminalNode { return this.getToken(TemplateParser.DOT, 0); }
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_referenceElseEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterReferenceElseEndStmt) {
			listener.enterReferenceElseEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitReferenceElseEndStmt) {
			listener.exitReferenceElseEndStmt(this);
		}
	}
}


export class ReferenceElseStmtContext extends ParserRuleContext {
	public referenceElseCondEndStmt(): ReferenceElseCondEndStmtContext | undefined {
		return this.tryGetRuleContext(0, ReferenceElseCondEndStmtContext);
	}
	public referenceElseEachStmt(): ReferenceElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, ReferenceElseEachStmtContext);
	}
	public referenceElseEndStmt(): ReferenceElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, ReferenceElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_referenceElseStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterReferenceElseStmt) {
			listener.enterReferenceElseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitReferenceElseStmt) {
			listener.exitReferenceElseStmt(this);
		}
	}
}


export class ReferenceElseCondEndStmtContext extends ParserRuleContext {
	public referenceElseCondStmt(): ReferenceElseCondStmtContext[];
	public referenceElseCondStmt(i: number): ReferenceElseCondStmtContext;
	public referenceElseCondStmt(i?: number): ReferenceElseCondStmtContext | ReferenceElseCondStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ReferenceElseCondStmtContext);
		} else {
			return this.getRuleContext(i, ReferenceElseCondStmtContext);
		}
	}
	public referenceElseEachStmt(): ReferenceElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, ReferenceElseEachStmtContext);
	}
	public referenceElseEndStmt(): ReferenceElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, ReferenceElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_referenceElseCondEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterReferenceElseCondEndStmt) {
			listener.enterReferenceElseCondEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitReferenceElseCondEndStmt) {
			listener.exitReferenceElseCondEndStmt(this);
		}
	}
}


export class ReferenceElseCondStmtContext extends ParserRuleContext {
	public referenceElseIfStmt(): ReferenceElseIfStmtContext | undefined {
		return this.tryGetRuleContext(0, ReferenceElseIfStmtContext);
	}
	public referenceElseExistsStmt(): ReferenceElseExistsStmtContext | undefined {
		return this.tryGetRuleContext(0, ReferenceElseExistsStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_referenceElseCondStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterReferenceElseCondStmt) {
			listener.enterReferenceElseCondStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitReferenceElseCondStmt) {
			listener.exitReferenceElseCondStmt(this);
		}
	}
}


export class FieldIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_FIELD(): TerminalNode[];
	public K_FIELD(i: number): TerminalNode;
	public K_FIELD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_FIELD);
		} else {
			return this.getToken(TemplateParser.K_FIELD, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public fieldCondition(): FieldConditionContext {
		return this.getRuleContext(0, FieldConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public fieldElseStmt(): FieldElseStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldIfStmt) {
			listener.enterFieldIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldIfStmt) {
			listener.exitFieldIfStmt(this);
		}
	}
}


export class FieldExistsStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_FIELD(): TerminalNode[];
	public K_FIELD(i: number): TerminalNode;
	public K_FIELD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_FIELD);
		} else {
			return this.getToken(TemplateParser.K_FIELD, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_EXISTS(): TerminalNode { return this.getToken(TemplateParser.K_EXISTS, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public fieldCondition(): FieldConditionContext {
		return this.getRuleContext(0, FieldConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public fieldElseStmt(): FieldElseStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldExistsStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldExistsStmt) {
			listener.enterFieldExistsStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldExistsStmt) {
			listener.exitFieldExistsStmt(this);
		}
	}
}


export class FieldMatchStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_FIELD(): TerminalNode[];
	public K_FIELD(i: number): TerminalNode;
	public K_FIELD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_FIELD);
		} else {
			return this.getToken(TemplateParser.K_FIELD, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public MATCH_OPEN(): TerminalNode { return this.getToken(TemplateParser.MATCH_OPEN, 0); }
	public regex(): RegexContext {
		return this.getRuleContext(0, RegexContext);
	}
	public MATCH_CLOSE(): TerminalNode { return this.getToken(TemplateParser.MATCH_CLOSE, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public fieldElseStmt(): FieldElseStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldMatchStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldMatchStmt) {
			listener.enterFieldMatchStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldMatchStmt) {
			listener.exitFieldMatchStmt(this);
		}
	}
}


export class FieldContainsStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_FIELD(): TerminalNode[];
	public K_FIELD(i: number): TerminalNode;
	public K_FIELD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_FIELD);
		} else {
			return this.getToken(TemplateParser.K_FIELD, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_CONTAINS(): TerminalNode { return this.getToken(TemplateParser.K_CONTAINS, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public word(): WordContext {
		return this.getRuleContext(0, WordContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public fieldElseStmt(): FieldElseStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldContainsStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldContainsStmt) {
			listener.enterFieldContainsStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldContainsStmt) {
			listener.exitFieldContainsStmt(this);
		}
	}
}


export class FieldEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_FIELD(): TerminalNode[];
	public K_FIELD(i: number): TerminalNode;
	public K_FIELD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_FIELD);
		} else {
			return this.getToken(TemplateParser.K_FIELD, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public fieldCondition(): FieldConditionContext | undefined {
		return this.tryGetRuleContext(0, FieldConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldEachStmt) {
			listener.enterFieldEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldEachStmt) {
			listener.exitFieldEachStmt(this);
		}
	}
}


export class FieldElseIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_FIELD(): TerminalNode { return this.getToken(TemplateParser.K_FIELD, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public fieldCondition(): FieldConditionContext {
		return this.getRuleContext(0, FieldConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldElseIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldElseIfStmt) {
			listener.enterFieldElseIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldElseIfStmt) {
			listener.exitFieldElseIfStmt(this);
		}
	}
}


export class FieldElseExistsStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_FIELD(): TerminalNode { return this.getToken(TemplateParser.K_FIELD, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_EXISTS(): TerminalNode { return this.getToken(TemplateParser.K_EXISTS, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public fieldCondition(): FieldConditionContext {
		return this.getRuleContext(0, FieldConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldElseExistsStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldElseExistsStmt) {
			listener.enterFieldElseExistsStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldElseExistsStmt) {
			listener.exitFieldElseExistsStmt(this);
		}
	}
}


export class FieldElseMatchStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_FIELD(): TerminalNode { return this.getToken(TemplateParser.K_FIELD, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public MATCH_OPEN(): TerminalNode { return this.getToken(TemplateParser.MATCH_OPEN, 0); }
	public regex(): RegexContext {
		return this.getRuleContext(0, RegexContext);
	}
	public MATCH_CLOSE(): TerminalNode { return this.getToken(TemplateParser.MATCH_CLOSE, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldElseMatchStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldElseMatchStmt) {
			listener.enterFieldElseMatchStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldElseMatchStmt) {
			listener.exitFieldElseMatchStmt(this);
		}
	}
}


export class FieldElseContainsStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_FIELD(): TerminalNode { return this.getToken(TemplateParser.K_FIELD, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_CONTAINS(): TerminalNode { return this.getToken(TemplateParser.K_CONTAINS, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public word(): WordContext {
		return this.getRuleContext(0, WordContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldElseContainsStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldElseContainsStmt) {
			listener.enterFieldElseContainsStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldElseContainsStmt) {
			listener.exitFieldElseContainsStmt(this);
		}
	}
}


export class FieldElseEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_FIELD(): TerminalNode { return this.getToken(TemplateParser.K_FIELD, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public fieldCondition(): FieldConditionContext | undefined {
		return this.tryGetRuleContext(0, FieldConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldElseEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldElseEachStmt) {
			listener.enterFieldElseEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldElseEachStmt) {
			listener.exitFieldElseEachStmt(this);
		}
	}
}


export class FieldElseEndStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_FIELD(): TerminalNode { return this.getToken(TemplateParser.K_FIELD, 0); }
	public DOT(): TerminalNode { return this.getToken(TemplateParser.DOT, 0); }
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldElseEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldElseEndStmt) {
			listener.enterFieldElseEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldElseEndStmt) {
			listener.exitFieldElseEndStmt(this);
		}
	}
}


export class FieldElseStmtContext extends ParserRuleContext {
	public fieldElseEachStmt(): FieldElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldElseEachStmtContext);
	}
	public fieldElseEndStmt(): FieldElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldElseEndStmtContext);
	}
	public fieldElseCondEndStmt(): FieldElseCondEndStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldElseCondEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldElseStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldElseStmt) {
			listener.enterFieldElseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldElseStmt) {
			listener.exitFieldElseStmt(this);
		}
	}
}


export class FieldElseCondEndStmtContext extends ParserRuleContext {
	public fieldElseCondStmt(): FieldElseCondStmtContext[];
	public fieldElseCondStmt(i: number): FieldElseCondStmtContext;
	public fieldElseCondStmt(i?: number): FieldElseCondStmtContext | FieldElseCondStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldElseCondStmtContext);
		} else {
			return this.getRuleContext(i, FieldElseCondStmtContext);
		}
	}
	public fieldElseEachStmt(): FieldElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldElseEachStmtContext);
	}
	public fieldElseEndStmt(): FieldElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldElseCondEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldElseCondEndStmt) {
			listener.enterFieldElseCondEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldElseCondEndStmt) {
			listener.exitFieldElseCondEndStmt(this);
		}
	}
}


export class FieldElseCondStmtContext extends ParserRuleContext {
	public fieldElseIfStmt(): FieldElseIfStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldElseIfStmtContext);
	}
	public fieldElseExistsStmt(): FieldElseExistsStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldElseExistsStmtContext);
	}
	public fieldElseMatchStmt(): FieldElseMatchStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldElseMatchStmtContext);
	}
	public fieldElseContainsStmt(): FieldElseContainsStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldElseContainsStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldElseCondStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldElseCondStmt) {
			listener.enterFieldElseCondStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldElseCondStmt) {
			listener.exitFieldElseCondStmt(this);
		}
	}
}


export class DescriptorIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_DESCRIPTOR(): TerminalNode[];
	public K_DESCRIPTOR(i: number): TerminalNode;
	public K_DESCRIPTOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_DESCRIPTOR);
		} else {
			return this.getToken(TemplateParser.K_DESCRIPTOR, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public fieldCondition(): FieldConditionContext {
		return this.getRuleContext(0, FieldConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public descriptorElseStmt(): DescriptorElseStmtContext | undefined {
		return this.tryGetRuleContext(0, DescriptorElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_descriptorIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterDescriptorIfStmt) {
			listener.enterDescriptorIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitDescriptorIfStmt) {
			listener.exitDescriptorIfStmt(this);
		}
	}
}


export class DescriptorMatchStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_DESCRIPTOR(): TerminalNode[];
	public K_DESCRIPTOR(i: number): TerminalNode;
	public K_DESCRIPTOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_DESCRIPTOR);
		} else {
			return this.getToken(TemplateParser.K_DESCRIPTOR, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public MATCH_OPEN(): TerminalNode { return this.getToken(TemplateParser.MATCH_OPEN, 0); }
	public regex(): RegexContext {
		return this.getRuleContext(0, RegexContext);
	}
	public MATCH_CLOSE(): TerminalNode { return this.getToken(TemplateParser.MATCH_CLOSE, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public descriptorElseStmt(): DescriptorElseStmtContext | undefined {
		return this.tryGetRuleContext(0, DescriptorElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_descriptorMatchStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterDescriptorMatchStmt) {
			listener.enterDescriptorMatchStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitDescriptorMatchStmt) {
			listener.exitDescriptorMatchStmt(this);
		}
	}
}


export class DescriptorContainsStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_DESCRIPTOR(): TerminalNode[];
	public K_DESCRIPTOR(i: number): TerminalNode;
	public K_DESCRIPTOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_DESCRIPTOR);
		} else {
			return this.getToken(TemplateParser.K_DESCRIPTOR, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_CONTAINS(): TerminalNode { return this.getToken(TemplateParser.K_CONTAINS, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public word(): WordContext {
		return this.getRuleContext(0, WordContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public descriptorElseStmt(): DescriptorElseStmtContext | undefined {
		return this.tryGetRuleContext(0, DescriptorElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_descriptorContainsStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterDescriptorContainsStmt) {
			listener.enterDescriptorContainsStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitDescriptorContainsStmt) {
			listener.exitDescriptorContainsStmt(this);
		}
	}
}


export class DescriptorEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_DESCRIPTOR(): TerminalNode[];
	public K_DESCRIPTOR(i: number): TerminalNode;
	public K_DESCRIPTOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_DESCRIPTOR);
		} else {
			return this.getToken(TemplateParser.K_DESCRIPTOR, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public fieldCondition(): FieldConditionContext | undefined {
		return this.tryGetRuleContext(0, FieldConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_descriptorEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterDescriptorEachStmt) {
			listener.enterDescriptorEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitDescriptorEachStmt) {
			listener.exitDescriptorEachStmt(this);
		}
	}
}


export class DescriptorElseIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_DESCRIPTOR(): TerminalNode { return this.getToken(TemplateParser.K_DESCRIPTOR, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public fieldCondition(): FieldConditionContext {
		return this.getRuleContext(0, FieldConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_descriptorElseIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterDescriptorElseIfStmt) {
			listener.enterDescriptorElseIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitDescriptorElseIfStmt) {
			listener.exitDescriptorElseIfStmt(this);
		}
	}
}


export class DescriptorElseMatchStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_DESCRIPTOR(): TerminalNode { return this.getToken(TemplateParser.K_DESCRIPTOR, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public MATCH_OPEN(): TerminalNode { return this.getToken(TemplateParser.MATCH_OPEN, 0); }
	public regex(): RegexContext {
		return this.getRuleContext(0, RegexContext);
	}
	public MATCH_CLOSE(): TerminalNode { return this.getToken(TemplateParser.MATCH_CLOSE, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_descriptorElseMatchStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterDescriptorElseMatchStmt) {
			listener.enterDescriptorElseMatchStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitDescriptorElseMatchStmt) {
			listener.exitDescriptorElseMatchStmt(this);
		}
	}
}


export class DescriptorElseContainsStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_DESCRIPTOR(): TerminalNode { return this.getToken(TemplateParser.K_DESCRIPTOR, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_CONTAINS(): TerminalNode { return this.getToken(TemplateParser.K_CONTAINS, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public word(): WordContext {
		return this.getRuleContext(0, WordContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_descriptorElseContainsStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterDescriptorElseContainsStmt) {
			listener.enterDescriptorElseContainsStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitDescriptorElseContainsStmt) {
			listener.exitDescriptorElseContainsStmt(this);
		}
	}
}


export class DescriptorElseEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_DESCRIPTOR(): TerminalNode { return this.getToken(TemplateParser.K_DESCRIPTOR, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public fieldCondition(): FieldConditionContext | undefined {
		return this.tryGetRuleContext(0, FieldConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_descriptorElseEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterDescriptorElseEachStmt) {
			listener.enterDescriptorElseEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitDescriptorElseEachStmt) {
			listener.exitDescriptorElseEachStmt(this);
		}
	}
}


export class DescriptorElseEndStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_DESCRIPTOR(): TerminalNode { return this.getToken(TemplateParser.K_DESCRIPTOR, 0); }
	public DOT(): TerminalNode { return this.getToken(TemplateParser.DOT, 0); }
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_descriptorElseEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterDescriptorElseEndStmt) {
			listener.enterDescriptorElseEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitDescriptorElseEndStmt) {
			listener.exitDescriptorElseEndStmt(this);
		}
	}
}


export class DescriptorElseStmtContext extends ParserRuleContext {
	public descriptorElseCondEndStmt(): DescriptorElseCondEndStmtContext | undefined {
		return this.tryGetRuleContext(0, DescriptorElseCondEndStmtContext);
	}
	public descriptorElseEachStmt(): DescriptorElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, DescriptorElseEachStmtContext);
	}
	public descriptorElseEndStmt(): DescriptorElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, DescriptorElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_descriptorElseStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterDescriptorElseStmt) {
			listener.enterDescriptorElseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitDescriptorElseStmt) {
			listener.exitDescriptorElseStmt(this);
		}
	}
}


export class DescriptorElseCondEndStmtContext extends ParserRuleContext {
	public descriptorElseCondStmt(): DescriptorElseCondStmtContext[];
	public descriptorElseCondStmt(i: number): DescriptorElseCondStmtContext;
	public descriptorElseCondStmt(i?: number): DescriptorElseCondStmtContext | DescriptorElseCondStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DescriptorElseCondStmtContext);
		} else {
			return this.getRuleContext(i, DescriptorElseCondStmtContext);
		}
	}
	public descriptorElseEachStmt(): DescriptorElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, DescriptorElseEachStmtContext);
	}
	public descriptorElseEndStmt(): DescriptorElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, DescriptorElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_descriptorElseCondEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterDescriptorElseCondEndStmt) {
			listener.enterDescriptorElseCondEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitDescriptorElseCondEndStmt) {
			listener.exitDescriptorElseCondEndStmt(this);
		}
	}
}


export class DescriptorElseCondStmtContext extends ParserRuleContext {
	public descriptorElseIfStmt(): DescriptorElseIfStmtContext | undefined {
		return this.tryGetRuleContext(0, DescriptorElseIfStmtContext);
	}
	public descriptorElseMatchStmt(): DescriptorElseMatchStmtContext | undefined {
		return this.tryGetRuleContext(0, DescriptorElseMatchStmtContext);
	}
	public descriptorElseContainsStmt(): DescriptorElseContainsStmtContext | undefined {
		return this.tryGetRuleContext(0, DescriptorElseContainsStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_descriptorElseCondStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterDescriptorElseCondStmt) {
			listener.enterDescriptorElseCondStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitDescriptorElseCondStmt) {
			listener.exitDescriptorElseCondStmt(this);
		}
	}
}


export class IndexIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_INDEX(): TerminalNode[];
	public K_INDEX(i: number): TerminalNode;
	public K_INDEX(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_INDEX);
		} else {
			return this.getToken(TemplateParser.K_INDEX, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public indexCondition(): IndexConditionContext {
		return this.getRuleContext(0, IndexConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public indexElseStmt(): IndexElseStmtContext | undefined {
		return this.tryGetRuleContext(0, IndexElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_indexIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterIndexIfStmt) {
			listener.enterIndexIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitIndexIfStmt) {
			listener.exitIndexIfStmt(this);
		}
	}
}


export class IndexEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_INDEX(): TerminalNode[];
	public K_INDEX(i: number): TerminalNode;
	public K_INDEX(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_INDEX);
		} else {
			return this.getToken(TemplateParser.K_INDEX, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public indexCondition(): IndexConditionContext | undefined {
		return this.tryGetRuleContext(0, IndexConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_indexEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterIndexEachStmt) {
			listener.enterIndexEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitIndexEachStmt) {
			listener.exitIndexEachStmt(this);
		}
	}
}


export class IndexElseIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_INDEX(): TerminalNode { return this.getToken(TemplateParser.K_INDEX, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public indexCondition(): IndexConditionContext {
		return this.getRuleContext(0, IndexConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_indexElseIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterIndexElseIfStmt) {
			listener.enterIndexElseIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitIndexElseIfStmt) {
			listener.exitIndexElseIfStmt(this);
		}
	}
}


export class IndexElseEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_INDEX(): TerminalNode { return this.getToken(TemplateParser.K_INDEX, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public indexCondition(): IndexConditionContext | undefined {
		return this.tryGetRuleContext(0, IndexConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_indexElseEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterIndexElseEachStmt) {
			listener.enterIndexElseEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitIndexElseEachStmt) {
			listener.exitIndexElseEachStmt(this);
		}
	}
}


export class IndexElseEndStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_INDEX(): TerminalNode { return this.getToken(TemplateParser.K_INDEX, 0); }
	public DOT(): TerminalNode { return this.getToken(TemplateParser.DOT, 0); }
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_indexElseEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterIndexElseEndStmt) {
			listener.enterIndexElseEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitIndexElseEndStmt) {
			listener.exitIndexElseEndStmt(this);
		}
	}
}


export class IndexElseStmtContext extends ParserRuleContext {
	public indexElseCondEndStmt(): IndexElseCondEndStmtContext | undefined {
		return this.tryGetRuleContext(0, IndexElseCondEndStmtContext);
	}
	public indexElseEachStmt(): IndexElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, IndexElseEachStmtContext);
	}
	public indexElseEndStmt(): IndexElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, IndexElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_indexElseStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterIndexElseStmt) {
			listener.enterIndexElseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitIndexElseStmt) {
			listener.exitIndexElseStmt(this);
		}
	}
}


export class IndexElseCondEndStmtContext extends ParserRuleContext {
	public indexElseIfStmt(): IndexElseIfStmtContext[];
	public indexElseIfStmt(i: number): IndexElseIfStmtContext;
	public indexElseIfStmt(i?: number): IndexElseIfStmtContext | IndexElseIfStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IndexElseIfStmtContext);
		} else {
			return this.getRuleContext(i, IndexElseIfStmtContext);
		}
	}
	public indexElseEachStmt(): IndexElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, IndexElseEachStmtContext);
	}
	public indexElseEndStmt(): IndexElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, IndexElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_indexElseCondEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterIndexElseCondEndStmt) {
			listener.enterIndexElseCondEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitIndexElseCondEndStmt) {
			listener.exitIndexElseCondEndStmt(this);
		}
	}
}


export class UniqueIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_UNIQUE(): TerminalNode[];
	public K_UNIQUE(i: number): TerminalNode;
	public K_UNIQUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_UNIQUE);
		} else {
			return this.getToken(TemplateParser.K_UNIQUE, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public indexCondition(): IndexConditionContext {
		return this.getRuleContext(0, IndexConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public uniqueElseStmt(): UniqueElseStmtContext | undefined {
		return this.tryGetRuleContext(0, UniqueElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_uniqueIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterUniqueIfStmt) {
			listener.enterUniqueIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitUniqueIfStmt) {
			listener.exitUniqueIfStmt(this);
		}
	}
}


export class UniqueEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_UNIQUE(): TerminalNode[];
	public K_UNIQUE(i: number): TerminalNode;
	public K_UNIQUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_UNIQUE);
		} else {
			return this.getToken(TemplateParser.K_UNIQUE, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public indexCondition(): IndexConditionContext | undefined {
		return this.tryGetRuleContext(0, IndexConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_uniqueEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterUniqueEachStmt) {
			listener.enterUniqueEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitUniqueEachStmt) {
			listener.exitUniqueEachStmt(this);
		}
	}
}


export class UniqueElseIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_UNIQUE(): TerminalNode { return this.getToken(TemplateParser.K_UNIQUE, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public indexCondition(): IndexConditionContext {
		return this.getRuleContext(0, IndexConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_uniqueElseIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterUniqueElseIfStmt) {
			listener.enterUniqueElseIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitUniqueElseIfStmt) {
			listener.exitUniqueElseIfStmt(this);
		}
	}
}


export class UniqueElseEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_UNIQUE(): TerminalNode { return this.getToken(TemplateParser.K_UNIQUE, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public indexCondition(): IndexConditionContext | undefined {
		return this.tryGetRuleContext(0, IndexConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_uniqueElseEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterUniqueElseEachStmt) {
			listener.enterUniqueElseEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitUniqueElseEachStmt) {
			listener.exitUniqueElseEachStmt(this);
		}
	}
}


export class UniqueElseEndStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_UNIQUE(): TerminalNode { return this.getToken(TemplateParser.K_UNIQUE, 0); }
	public DOT(): TerminalNode { return this.getToken(TemplateParser.DOT, 0); }
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_uniqueElseEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterUniqueElseEndStmt) {
			listener.enterUniqueElseEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitUniqueElseEndStmt) {
			listener.exitUniqueElseEndStmt(this);
		}
	}
}


export class UniqueElseStmtContext extends ParserRuleContext {
	public uniqueElseCondEndStmt(): UniqueElseCondEndStmtContext | undefined {
		return this.tryGetRuleContext(0, UniqueElseCondEndStmtContext);
	}
	public uniqueElseEachStmt(): UniqueElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, UniqueElseEachStmtContext);
	}
	public uniqueElseEndStmt(): UniqueElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, UniqueElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_uniqueElseStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterUniqueElseStmt) {
			listener.enterUniqueElseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitUniqueElseStmt) {
			listener.exitUniqueElseStmt(this);
		}
	}
}


export class UniqueElseCondEndStmtContext extends ParserRuleContext {
	public uniqueElseIfStmt(): UniqueElseIfStmtContext[];
	public uniqueElseIfStmt(i: number): UniqueElseIfStmtContext;
	public uniqueElseIfStmt(i?: number): UniqueElseIfStmtContext | UniqueElseIfStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UniqueElseIfStmtContext);
		} else {
			return this.getRuleContext(i, UniqueElseIfStmtContext);
		}
	}
	public uniqueElseEachStmt(): UniqueElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, UniqueElseEachStmtContext);
	}
	public uniqueElseEndStmt(): UniqueElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, UniqueElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_uniqueElseCondEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterUniqueElseCondEndStmt) {
			listener.enterUniqueElseCondEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitUniqueElseCondEndStmt) {
			listener.exitUniqueElseCondEndStmt(this);
		}
	}
}


export class PrimaryIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_PRIMARY(): TerminalNode[];
	public K_PRIMARY(i: number): TerminalNode;
	public K_PRIMARY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_PRIMARY);
		} else {
			return this.getToken(TemplateParser.K_PRIMARY, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public indexCondition(): IndexConditionContext {
		return this.getRuleContext(0, IndexConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public primaryElseStmt(): PrimaryElseStmtContext | undefined {
		return this.tryGetRuleContext(0, PrimaryElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_primaryIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterPrimaryIfStmt) {
			listener.enterPrimaryIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitPrimaryIfStmt) {
			listener.exitPrimaryIfStmt(this);
		}
	}
}


export class PrimaryEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_PRIMARY(): TerminalNode[];
	public K_PRIMARY(i: number): TerminalNode;
	public K_PRIMARY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_PRIMARY);
		} else {
			return this.getToken(TemplateParser.K_PRIMARY, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public indexCondition(): IndexConditionContext | undefined {
		return this.tryGetRuleContext(0, IndexConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_primaryEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterPrimaryEachStmt) {
			listener.enterPrimaryEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitPrimaryEachStmt) {
			listener.exitPrimaryEachStmt(this);
		}
	}
}


export class PrimaryElseIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_PRIMARY(): TerminalNode { return this.getToken(TemplateParser.K_PRIMARY, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public indexCondition(): IndexConditionContext {
		return this.getRuleContext(0, IndexConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_primaryElseIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterPrimaryElseIfStmt) {
			listener.enterPrimaryElseIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitPrimaryElseIfStmt) {
			listener.exitPrimaryElseIfStmt(this);
		}
	}
}


export class PrimaryElseEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_PRIMARY(): TerminalNode { return this.getToken(TemplateParser.K_PRIMARY, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public indexCondition(): IndexConditionContext | undefined {
		return this.tryGetRuleContext(0, IndexConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_primaryElseEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterPrimaryElseEachStmt) {
			listener.enterPrimaryElseEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitPrimaryElseEachStmt) {
			listener.exitPrimaryElseEachStmt(this);
		}
	}
}


export class PrimaryElseEndStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_PRIMARY(): TerminalNode { return this.getToken(TemplateParser.K_PRIMARY, 0); }
	public DOT(): TerminalNode { return this.getToken(TemplateParser.DOT, 0); }
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_primaryElseEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterPrimaryElseEndStmt) {
			listener.enterPrimaryElseEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitPrimaryElseEndStmt) {
			listener.exitPrimaryElseEndStmt(this);
		}
	}
}


export class PrimaryElseStmtContext extends ParserRuleContext {
	public primaryElseCondEndStmt(): PrimaryElseCondEndStmtContext | undefined {
		return this.tryGetRuleContext(0, PrimaryElseCondEndStmtContext);
	}
	public primaryElseEachStmt(): PrimaryElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, PrimaryElseEachStmtContext);
	}
	public primaryElseEndStmt(): PrimaryElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, PrimaryElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_primaryElseStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterPrimaryElseStmt) {
			listener.enterPrimaryElseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitPrimaryElseStmt) {
			listener.exitPrimaryElseStmt(this);
		}
	}
}


export class PrimaryElseCondEndStmtContext extends ParserRuleContext {
	public primaryElseIfStmt(): PrimaryElseIfStmtContext[];
	public primaryElseIfStmt(i: number): PrimaryElseIfStmtContext;
	public primaryElseIfStmt(i?: number): PrimaryElseIfStmtContext | PrimaryElseIfStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryElseIfStmtContext);
		} else {
			return this.getRuleContext(i, PrimaryElseIfStmtContext);
		}
	}
	public primaryElseEachStmt(): PrimaryElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, PrimaryElseEachStmtContext);
	}
	public primaryElseEndStmt(): PrimaryElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, PrimaryElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_primaryElseCondEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterPrimaryElseCondEndStmt) {
			listener.enterPrimaryElseCondEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitPrimaryElseCondEndStmt) {
			listener.exitPrimaryElseCondEndStmt(this);
		}
	}
}


export class ConstraintIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_CONSTRAINT(): TerminalNode[];
	public K_CONSTRAINT(i: number): TerminalNode;
	public K_CONSTRAINT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_CONSTRAINT);
		} else {
			return this.getToken(TemplateParser.K_CONSTRAINT, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public constraintCondition(): ConstraintConditionContext {
		return this.getRuleContext(0, ConstraintConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public constraintElseStmt(): ConstraintElseStmtContext | undefined {
		return this.tryGetRuleContext(0, ConstraintElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_constraintIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterConstraintIfStmt) {
			listener.enterConstraintIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitConstraintIfStmt) {
			listener.exitConstraintIfStmt(this);
		}
	}
}


export class ConstraintEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_CONSTRAINT(): TerminalNode[];
	public K_CONSTRAINT(i: number): TerminalNode;
	public K_CONSTRAINT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_CONSTRAINT);
		} else {
			return this.getToken(TemplateParser.K_CONSTRAINT, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public constraintCondition(): ConstraintConditionContext | undefined {
		return this.tryGetRuleContext(0, ConstraintConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_constraintEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterConstraintEachStmt) {
			listener.enterConstraintEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitConstraintEachStmt) {
			listener.exitConstraintEachStmt(this);
		}
	}
}


export class ConstraintElseIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_CONSTRAINT(): TerminalNode { return this.getToken(TemplateParser.K_CONSTRAINT, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public indexCondition(): IndexConditionContext {
		return this.getRuleContext(0, IndexConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_constraintElseIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterConstraintElseIfStmt) {
			listener.enterConstraintElseIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitConstraintElseIfStmt) {
			listener.exitConstraintElseIfStmt(this);
		}
	}
}


export class ConstraintElseEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_CONSTRAINT(): TerminalNode { return this.getToken(TemplateParser.K_CONSTRAINT, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public indexCondition(): IndexConditionContext | undefined {
		return this.tryGetRuleContext(0, IndexConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_constraintElseEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterConstraintElseEachStmt) {
			listener.enterConstraintElseEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitConstraintElseEachStmt) {
			listener.exitConstraintElseEachStmt(this);
		}
	}
}


export class ConstraintElseEndStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_CONSTRAINT(): TerminalNode { return this.getToken(TemplateParser.K_CONSTRAINT, 0); }
	public DOT(): TerminalNode { return this.getToken(TemplateParser.DOT, 0); }
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_constraintElseEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterConstraintElseEndStmt) {
			listener.enterConstraintElseEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitConstraintElseEndStmt) {
			listener.exitConstraintElseEndStmt(this);
		}
	}
}


export class ConstraintElseStmtContext extends ParserRuleContext {
	public constraintElseCondEndStmt(): ConstraintElseCondEndStmtContext | undefined {
		return this.tryGetRuleContext(0, ConstraintElseCondEndStmtContext);
	}
	public constraintElseEachStmt(): ConstraintElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, ConstraintElseEachStmtContext);
	}
	public constraintElseEndStmt(): ConstraintElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, ConstraintElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_constraintElseStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterConstraintElseStmt) {
			listener.enterConstraintElseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitConstraintElseStmt) {
			listener.exitConstraintElseStmt(this);
		}
	}
}


export class ConstraintElseCondEndStmtContext extends ParserRuleContext {
	public constraintElseIfStmt(): ConstraintElseIfStmtContext[];
	public constraintElseIfStmt(i: number): ConstraintElseIfStmtContext;
	public constraintElseIfStmt(i?: number): ConstraintElseIfStmtContext | ConstraintElseIfStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstraintElseIfStmtContext);
		} else {
			return this.getRuleContext(i, ConstraintElseIfStmtContext);
		}
	}
	public constraintElseEachStmt(): ConstraintElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, ConstraintElseEachStmtContext);
	}
	public constraintElseEndStmt(): ConstraintElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, ConstraintElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_constraintElseCondEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterConstraintElseCondEndStmt) {
			listener.enterConstraintElseCondEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitConstraintElseCondEndStmt) {
			listener.exitConstraintElseCondEndStmt(this);
		}
	}
}


export class ForeignIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_FOREIGN(): TerminalNode[];
	public K_FOREIGN(i: number): TerminalNode;
	public K_FOREIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_FOREIGN);
		} else {
			return this.getToken(TemplateParser.K_FOREIGN, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public fieldCondition(): FieldConditionContext {
		return this.getRuleContext(0, FieldConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public foreignElseStmt(): ForeignElseStmtContext | undefined {
		return this.tryGetRuleContext(0, ForeignElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_foreignIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterForeignIfStmt) {
			listener.enterForeignIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitForeignIfStmt) {
			listener.exitForeignIfStmt(this);
		}
	}
}


export class ForeignEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.OPEN);
		} else {
			return this.getToken(TemplateParser.OPEN, i);
		}
	}
	public K_FOREIGN(): TerminalNode[];
	public K_FOREIGN(i: number): TerminalNode;
	public K_FOREIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.K_FOREIGN);
		} else {
			return this.getToken(TemplateParser.K_FOREIGN, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.CLOSE);
		} else {
			return this.getToken(TemplateParser.CLOSE, i);
		}
	}
	public K_END(): TerminalNode { return this.getToken(TemplateParser.K_END, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public fieldCondition(): FieldConditionContext | undefined {
		return this.tryGetRuleContext(0, FieldConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_foreignEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterForeignEachStmt) {
			listener.enterForeignEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitForeignEachStmt) {
			listener.exitForeignEachStmt(this);
		}
	}
}


export class ForeignElseIfStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_FOREIGN(): TerminalNode { return this.getToken(TemplateParser.K_FOREIGN, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_IF(): TerminalNode { return this.getToken(TemplateParser.K_IF, 0); }
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public indexCondition(): IndexConditionContext {
		return this.getRuleContext(0, IndexConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_foreignElseIfStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterForeignElseIfStmt) {
			listener.enterForeignElseIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitForeignElseIfStmt) {
			listener.exitForeignElseIfStmt(this);
		}
	}
}


export class ForeignElseEachStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_FOREIGN(): TerminalNode { return this.getToken(TemplateParser.K_FOREIGN, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TemplateParser.DOT);
		} else {
			return this.getToken(TemplateParser.DOT, i);
		}
	}
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public K_EACH(): TerminalNode { return this.getToken(TemplateParser.K_EACH, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.LPAR, 0); }
	public indexCondition(): IndexConditionContext | undefined {
		return this.tryGetRuleContext(0, IndexConditionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.RPAR, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_foreignElseEachStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterForeignElseEachStmt) {
			listener.enterForeignElseEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitForeignElseEachStmt) {
			listener.exitForeignElseEachStmt(this);
		}
	}
}


export class ForeignElseEndStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_FOREIGN(): TerminalNode { return this.getToken(TemplateParser.K_FOREIGN, 0); }
	public DOT(): TerminalNode { return this.getToken(TemplateParser.DOT, 0); }
	public K_ELSE(): TerminalNode { return this.getToken(TemplateParser.K_ELSE, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_foreignElseEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterForeignElseEndStmt) {
			listener.enterForeignElseEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitForeignElseEndStmt) {
			listener.exitForeignElseEndStmt(this);
		}
	}
}


export class ForeignElseStmtContext extends ParserRuleContext {
	public foreignElseCondEndStmt(): ForeignElseCondEndStmtContext | undefined {
		return this.tryGetRuleContext(0, ForeignElseCondEndStmtContext);
	}
	public foreignElseEachStmt(): ForeignElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, ForeignElseEachStmtContext);
	}
	public foreignElseEndStmt(): ForeignElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, ForeignElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_foreignElseStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterForeignElseStmt) {
			listener.enterForeignElseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitForeignElseStmt) {
			listener.exitForeignElseStmt(this);
		}
	}
}


export class ForeignElseCondEndStmtContext extends ParserRuleContext {
	public foreignElseIfStmt(): ForeignElseIfStmtContext[];
	public foreignElseIfStmt(i: number): ForeignElseIfStmtContext;
	public foreignElseIfStmt(i?: number): ForeignElseIfStmtContext | ForeignElseIfStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ForeignElseIfStmtContext);
		} else {
			return this.getRuleContext(i, ForeignElseIfStmtContext);
		}
	}
	public foreignElseEachStmt(): ForeignElseEachStmtContext | undefined {
		return this.tryGetRuleContext(0, ForeignElseEachStmtContext);
	}
	public foreignElseEndStmt(): ForeignElseEndStmtContext | undefined {
		return this.tryGetRuleContext(0, ForeignElseEndStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_foreignElseCondEndStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterForeignElseCondEndStmt) {
			listener.enterForeignElseCondEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitForeignElseCondEndStmt) {
			listener.exitForeignElseCondEndStmt(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public tableStmt(): TableStmtContext | undefined {
		return this.tryGetRuleContext(0, TableStmtContext);
	}
	public fieldStmt(): FieldStmtContext | undefined {
		return this.tryGetRuleContext(0, FieldStmtContext);
	}
	public indexNameStmt(): IndexNameStmtContext | undefined {
		return this.tryGetRuleContext(0, IndexNameStmtContext);
	}
	public uniqueNameStmt(): UniqueNameStmtContext | undefined {
		return this.tryGetRuleContext(0, UniqueNameStmtContext);
	}
	public primaryNameStmt(): PrimaryNameStmtContext | undefined {
		return this.tryGetRuleContext(0, PrimaryNameStmtContext);
	}
	public constraintNameStmt(): ConstraintNameStmtContext | undefined {
		return this.tryGetRuleContext(0, ConstraintNameStmtContext);
	}
	public foreignNameStmt(): ForeignNameStmtContext | undefined {
		return this.tryGetRuleContext(0, ForeignNameStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_constant; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
}


export class TableStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public tableLevel(): TableLevelContext {
		return this.getRuleContext(0, TableLevelContext);
	}
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public tableProps(): TablePropsContext[];
	public tableProps(i: number): TablePropsContext;
	public tableProps(i?: number): TablePropsContext | TablePropsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropsContext);
		} else {
			return this.getRuleContext(i, TablePropsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_tableStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterTableStmt) {
			listener.enterTableStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitTableStmt) {
			listener.exitTableStmt(this);
		}
	}
}


export class TablePropsContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(TemplateParser.DOT, 0); }
	public tableProp(): TablePropContext {
		return this.getRuleContext(0, TablePropContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_tableProps; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterTableProps) {
			listener.enterTableProps(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitTableProps) {
			listener.exitTableProps(this);
		}
	}
}


export class TablePropContext extends ParserRuleContext {
	public K_UNIX(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_UNIX, 0); }
	public K_PLURAL(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_PLURAL, 0); }
	public K_NORM(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_NORM, 0); }
	public K_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_DEFAULT, 0); }
	public K_NAME(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_NAME, 0); }
	public K_COMMENT(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_COMMENT, 0); }
	public K_GENDER(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_GENDER, 0); }
	public K_CHARS(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_CHARS, 0); }
	public K_LETTER(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_LETTER, 0); }
	public K_PACKAGE(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_PACKAGE, 0); }
	public K_INHERITED(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_INHERITED, 0); }
	public K_PATH(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_PATH, 0); }
	public K_STYLE(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_STYLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_tableProp; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterTableProp) {
			listener.enterTableProp(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitTableProp) {
			listener.exitTableProp(this);
		}
	}
}


export class FieldStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public fieldLevel(): FieldLevelContext {
		return this.getRuleContext(0, FieldLevelContext);
	}
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	public fieldProps(): FieldPropsContext[];
	public fieldProps(i: number): FieldPropsContext;
	public fieldProps(i?: number): FieldPropsContext | FieldPropsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldPropsContext);
		} else {
			return this.getRuleContext(i, FieldPropsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldStmt) {
			listener.enterFieldStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldStmt) {
			listener.exitFieldStmt(this);
		}
	}
}


export class FieldPropsContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(TemplateParser.DOT, 0); }
	public fieldProp(): FieldPropContext {
		return this.getRuleContext(0, FieldPropContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldProps; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldProps) {
			listener.enterFieldProps(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldProps) {
			listener.exitFieldProps(this);
		}
	}
}


export class FieldPropContext extends ParserRuleContext {
	public K_NAME(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_NAME, 0); }
	public K_UNIX(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_UNIX, 0); }
	public K_NORM(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_NORM, 0); }
	public K_SINGULAR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_SINGULAR, 0); }
	public K_INFO(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_INFO, 0); }
	public K_COMMENT(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_COMMENT, 0); }
	public K_MASK(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_MASK, 0); }
	public K_STYLE(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_STYLE, 0); }
	public K_GENDER(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_GENDER, 0); }
	public K_CHARS(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_CHARS, 0); }
	public K_LETTER(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_LETTER, 0); }
	public K_ARRAY(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_ARRAY, 0); }
	public K_COUNT(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_COUNT, 0); }
	public K_INDEX(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_INDEX, 0); }
	public K_NUMBER(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_NUMBER, 0); }
	public K_SIZE(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_SIZE, 0); }
	public K_LENGTH(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_LENGTH, 0); }
	public K_OPTION(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_OPTION, 0); }
	public K_IMAGE(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_IMAGE, 0); }
	public K_LOW(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_LOW, 0); }
	public K_HIGH(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_HIGH, 0); }
	public K_WIDTH(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_WIDTH, 0); }
	public K_HEIGHT(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_HEIGHT, 0); }
	public K_FOLDER(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_FOLDER, 0); }
	public K_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_DEFAULT, 0); }
	public K_ON(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_ON, 0); }
	public K_DELETE(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_DELETE, 0); }
	public K_UPDATE(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_UPDATE, 0); }
	public K_INSERT(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_INSERT, 0); }
	public K_NOID(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_NOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldProp; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldProp) {
			listener.enterFieldProp(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldProp) {
			listener.exitFieldProp(this);
		}
	}
}


export class IndexNameStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_INDEX(): TerminalNode { return this.getToken(TemplateParser.K_INDEX, 0); }
	public DOT(): TerminalNode { return this.getToken(TemplateParser.DOT, 0); }
	public K_NAME(): TerminalNode { return this.getToken(TemplateParser.K_NAME, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_indexNameStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterIndexNameStmt) {
			listener.enterIndexNameStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitIndexNameStmt) {
			listener.exitIndexNameStmt(this);
		}
	}
}


export class UniqueNameStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_UNIQUE(): TerminalNode { return this.getToken(TemplateParser.K_UNIQUE, 0); }
	public DOT(): TerminalNode { return this.getToken(TemplateParser.DOT, 0); }
	public K_NAME(): TerminalNode { return this.getToken(TemplateParser.K_NAME, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_uniqueNameStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterUniqueNameStmt) {
			listener.enterUniqueNameStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitUniqueNameStmt) {
			listener.exitUniqueNameStmt(this);
		}
	}
}


export class PrimaryNameStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_PRIMARY(): TerminalNode { return this.getToken(TemplateParser.K_PRIMARY, 0); }
	public DOT(): TerminalNode { return this.getToken(TemplateParser.DOT, 0); }
	public K_NAME(): TerminalNode { return this.getToken(TemplateParser.K_NAME, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_primaryNameStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterPrimaryNameStmt) {
			listener.enterPrimaryNameStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitPrimaryNameStmt) {
			listener.exitPrimaryNameStmt(this);
		}
	}
}


export class ConstraintNameStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_CONSTRAINT(): TerminalNode { return this.getToken(TemplateParser.K_CONSTRAINT, 0); }
	public DOT(): TerminalNode { return this.getToken(TemplateParser.DOT, 0); }
	public K_NAME(): TerminalNode { return this.getToken(TemplateParser.K_NAME, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_constraintNameStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterConstraintNameStmt) {
			listener.enterConstraintNameStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitConstraintNameStmt) {
			listener.exitConstraintNameStmt(this);
		}
	}
}


export class ForeignNameStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(TemplateParser.OPEN, 0); }
	public K_FOREIGN(): TerminalNode { return this.getToken(TemplateParser.K_FOREIGN, 0); }
	public DOT(): TerminalNode { return this.getToken(TemplateParser.DOT, 0); }
	public K_NAME(): TerminalNode { return this.getToken(TemplateParser.K_NAME, 0); }
	public CLOSE(): TerminalNode { return this.getToken(TemplateParser.CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_foreignNameStmt; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterForeignNameStmt) {
			listener.enterForeignNameStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitForeignNameStmt) {
			listener.exitForeignNameStmt(this);
		}
	}
}


export class TextContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(TemplateParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_text; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterText) {
			listener.enterText(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitText) {
			listener.exitText(this);
		}
	}
}


export class TableLevelContext extends ParserRuleContext {
	public K_TABLE(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_TABLE, 0); }
	public K_INHERITED(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_INHERITED, 0); }
	public K_REFERENCE(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_REFERENCE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_tableLevel; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterTableLevel) {
			listener.enterTableLevel(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitTableLevel) {
			listener.exitTableLevel(this);
		}
	}
}


export class FieldLevelContext extends ParserRuleContext {
	public K_FIELD(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_FIELD, 0); }
	public K_DESCRIPTOR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_DESCRIPTOR, 0); }
	public K_OPTION(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_OPTION, 0); }
	public K_IMAGE(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_IMAGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldLevel; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldLevel) {
			listener.enterFieldLevel(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldLevel) {
			listener.exitFieldLevel(this);
		}
	}
}


export class RegexContext extends ParserRuleContext {
	public REGEX(): TerminalNode { return this.getToken(TemplateParser.REGEX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_regex; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterRegex) {
			listener.enterRegex(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitRegex) {
			listener.exitRegex(this);
		}
	}
}


export class WordContext extends ParserRuleContext {
	public WORD(): TerminalNode { return this.getToken(TemplateParser.WORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_word; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterWord) {
			listener.enterWord(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitWord) {
			listener.exitWord(this);
		}
	}
}


export class TableConditionContext extends ParserRuleContext {
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_tableCondition; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterTableCondition) {
			listener.enterTableCondition(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitTableCondition) {
			listener.exitTableCondition(this);
		}
	}
}


export class FieldConditionContext extends ParserRuleContext {
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_fieldCondition; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterFieldCondition) {
			listener.enterFieldCondition(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitFieldCondition) {
			listener.exitFieldCondition(this);
		}
	}
}


export class IndexConditionContext extends ParserRuleContext {
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_indexCondition; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterIndexCondition) {
			listener.enterIndexCondition(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitIndexCondition) {
			listener.exitIndexCondition(this);
		}
	}
}


export class ConstraintConditionContext extends ParserRuleContext {
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_constraintCondition; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterConstraintCondition) {
			listener.enterConstraintCondition(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitConstraintCondition) {
			listener.exitConstraintCondition(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public priorityCondition(): PriorityConditionContext | undefined {
		return this.tryGetRuleContext(0, PriorityConditionContext);
	}
	public anyCondition(): AnyConditionContext | undefined {
		return this.tryGetRuleContext(0, AnyConditionContext);
	}
	public orCondition(): OrConditionContext | undefined {
		return this.tryGetRuleContext(0, OrConditionContext);
	}
	public andCondition(): AndConditionContext | undefined {
		return this.tryGetRuleContext(0, AndConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_condition; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
}


export class AnyConditionContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public priorityCondition(): PriorityConditionContext | undefined {
		return this.tryGetRuleContext(0, PriorityConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_anyCondition; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterAnyCondition) {
			listener.enterAnyCondition(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitAnyCondition) {
			listener.exitAnyCondition(this);
		}
	}
}


export class PriorityConditionContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(TemplateParser.LPAR, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(TemplateParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_priorityCondition; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterPriorityCondition) {
			listener.enterPriorityCondition(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitPriorityCondition) {
			listener.exitPriorityCondition(this);
		}
	}
}


export class OrConditionContext extends ParserRuleContext {
	public OR(): TerminalNode { return this.getToken(TemplateParser.OR, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_orCondition; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterOrCondition) {
			listener.enterOrCondition(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitOrCondition) {
			listener.exitOrCondition(this);
		}
	}
}


export class AndConditionContext extends ParserRuleContext {
	public AND(): TerminalNode { return this.getToken(TemplateParser.AND, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_andCondition; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterAndCondition) {
			listener.enterAndCondition(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitAndCondition) {
			listener.exitAndCondition(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public attribute(): AttributeContext | undefined {
		return this.tryGetRuleContext(0, AttributeContext);
	}
	public property(): PropertyContext | undefined {
		return this.tryGetRuleContext(0, PropertyContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public word(): WordContext | undefined {
		return this.tryGetRuleContext(0, WordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_expression; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public K_COMMENT(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_COMMENT, 0); }
	public K_INHERITED(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_INHERITED, 0); }
	public K_PACKAGE(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_PACKAGE, 0); }
	public K_PATH(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_PATH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_attribute; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	public K_ALL(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_ALL, 0); }
	public K_REFERENCE(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_REFERENCE, 0); }
	public K_PRIMARY(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_PRIMARY, 0); }
	public K_REPEATED(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_REPEATED, 0); }
	public K_NULL(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_NULL, 0); }
	public K_UNSIGNED(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_UNSIGNED, 0); }
	public K_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_DEFAULT, 0); }
	public K_INFO(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_INFO, 0); }
	public K_DESCRIPTOR(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_DESCRIPTOR, 0); }
	public K_SEARCHABLE(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_SEARCHABLE, 0); }
	public K_DESCRIPTION(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_DESCRIPTION, 0); }
	public K_INDEX(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_INDEX, 0); }
	public K_CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_CONSTRAINT, 0); }
	public K_FOREIGN(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_FOREIGN, 0); }
	public K_UNIQUE(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_UNIQUE, 0); }
	public K_RADIO(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_RADIO, 0); }
	public K_MASKED(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_MASKED, 0); }
	public K_ARRAY(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_ARRAY, 0); }
	public K_IMAGE(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_IMAGE, 0); }
	public K_OPTION(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_OPTION, 0); }
	public K_FEW_FIELDS(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_FEW_FIELDS, 0); }
	public K_FIRST(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_FIRST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_property; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public K_INTEGER(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_INTEGER, 0); }
	public K_BIGINT(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_BIGINT, 0); }
	public K_STRING(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_STRING, 0); }
	public K_TEXT(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_TEXT, 0); }
	public K_BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_BOOLEAN, 0); }
	public K_CURRENCY(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_CURRENCY, 0); }
	public K_DOUBLE(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_DOUBLE, 0); }
	public K_FLOAT(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_FLOAT, 0); }
	public K_DATE(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_DATE, 0); }
	public K_DATETIME(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_DATETIME, 0); }
	public K_TIME(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_TIME, 0); }
	public K_ENUM(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_ENUM, 0); }
	public K_BLOB(): TerminalNode | undefined { return this.tryGetToken(TemplateParser.K_BLOB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TemplateParser.RULE_type; }
	// @Override
	public enterRule(listener: TemplateParserListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: TemplateParserListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
}


