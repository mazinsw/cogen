// Generated from src/grammar/SQLParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { SQLParserListener } from "./SQLParserListener";

export class SQLParser extends Parser {
	public static readonly BOOL = 1;
	public static readonly K_DROP = 2;
	public static readonly K_DATABASE = 3;
	public static readonly K_SCHEMA = 4;
	public static readonly K_IF = 5;
	public static readonly K_EXISTS = 6;
	public static readonly K_NOT = 7;
	public static readonly K_DEFAULT = 8;
	public static readonly K_CHARACTER = 9;
	public static readonly K_SET = 10;
	public static readonly K_COLLATE = 11;
	public static readonly K_USE = 12;
	public static readonly K_TEMPORARY = 13;
	public static readonly K_TABLE = 14;
	public static readonly K_RESTRICT = 15;
	public static readonly K_CASCADE = 16;
	public static readonly K_CONSTRAINT = 17;
	public static readonly K_PRIMARY = 18;
	public static readonly K_KEY = 19;
	public static readonly K_INDEX = 20;
	public static readonly K_UNIQUE = 21;
	public static readonly K_FULLTEXT = 22;
	public static readonly K_FOREIGN = 23;
	public static readonly K_COMMENT = 24;
	public static readonly K_AUTO_INCREMENT = 25;
	public static readonly K_NULL = 26;
	public static readonly K_CURRENT_TIMESTAMP = 27;
	public static readonly K_REFERENCES = 28;
	public static readonly K_ON = 29;
	public static readonly K_DELETE = 30;
	public static readonly K_UPDATE = 31;
	public static readonly K_ASC = 32;
	public static readonly K_DESC = 33;
	public static readonly K_BIT = 34;
	public static readonly K_TINYINT = 35;
	public static readonly K_UNSIGNED = 36;
	public static readonly K_BINARY = 37;
	public static readonly K_ZEROFILL = 38;
	public static readonly K_SMALLINT = 39;
	public static readonly K_MEDIUMINT = 40;
	public static readonly K_INT = 41;
	public static readonly K_INTEGER = 42;
	public static readonly K_BIGINT = 43;
	public static readonly K_REAL = 44;
	public static readonly K_DOUBLE = 45;
	public static readonly K_FLOAT = 46;
	public static readonly K_DECIMAL = 47;
	public static readonly K_NUMERIC = 48;
	public static readonly K_BOOL = 49;
	public static readonly K_BOOLEAN = 50;
	public static readonly K_DATE = 51;
	public static readonly K_TIME = 52;
	public static readonly K_TIMESTAMP = 53;
	public static readonly K_DATETIME = 54;
	public static readonly K_YEAR = 55;
	public static readonly K_CHAR = 56;
	public static readonly K_VARCHAR = 57;
	public static readonly K_VARBINARY = 58;
	public static readonly K_TINYBLOB = 59;
	public static readonly K_BLOB = 60;
	public static readonly K_MEDIUMBLOB = 61;
	public static readonly K_LONGBLOB = 62;
	public static readonly K_JSON = 63;
	public static readonly K_TINYTEXT = 64;
	public static readonly K_TEXT = 65;
	public static readonly K_MEDIUMTEXT = 66;
	public static readonly K_LONGTEXT = 67;
	public static readonly K_ENUM = 68;
	public static readonly K_NO = 69;
	public static readonly K_ACTION = 70;
	public static readonly K_CREATE = 71;
	public static readonly K_FALSE = 72;
	public static readonly K_TRUE = 73;
	public static readonly DOT = 74;
	public static readonly EQ = 75;
	public static readonly SINGLE_QUOTE = 76;
	public static readonly DOUBLE_QUOTE = 77;
	public static readonly BACK_QUOTE = 78;
	public static readonly AT = 79;
	public static readonly COMMA = 80;
	public static readonly SEMICOLON = 81;
	public static readonly LPAR = 82;
	public static readonly RPAR = 83;
	public static readonly ID = 84;
	public static readonly NAME = 85;
	public static readonly INT = 86;
	public static readonly FLOAT = 87;
	public static readonly STRING = 88;
	public static readonly COMMENT = 89;
	public static readonly SINGLE_COMMENT = 90;
	public static readonly WS = 91;
	public static readonly RULE_script = 0;
	public static readonly RULE_stmt = 1;
	public static readonly RULE_dropSchema = 2;
	public static readonly RULE_createSchema = 3;
	public static readonly RULE_createSpecification = 4;
	public static readonly RULE_tableComment = 5;
	public static readonly RULE_setStmt = 6;
	public static readonly RULE_setOption = 7;
	public static readonly RULE_setDefaultValue = 8;
	public static readonly RULE_useStmt = 9;
	public static readonly RULE_dropTable = 10;
	public static readonly RULE_dropTableName = 11;
	public static readonly RULE_createTable = 12;
	public static readonly RULE_tableName = 13;
	public static readonly RULE_fieldList = 14;
	public static readonly RULE_createDefinition = 15;
	public static readonly RULE_columnName = 16;
	public static readonly RULE_constraintName = 17;
	public static readonly RULE_constraintTable = 18;
	public static readonly RULE_columnDefinition = 19;
	public static readonly RULE_autoIncrement = 20;
	public static readonly RULE_columnDefaultValue = 21;
	public static readonly RULE_columnNull = 22;
	public static readonly RULE_columnNotNull = 23;
	public static readonly RULE_fieldComment = 24;
	public static readonly RULE_autoIncrementValue = 25;
	public static readonly RULE_referenceDefinition = 26;
	public static readonly RULE_referenceDeleteOption = 27;
	public static readonly RULE_referenceUpdateOption = 28;
	public static readonly RULE_referenceTable = 29;
	public static readonly RULE_indexColName = 30;
	public static readonly RULE_dataType = 31;
	public static readonly RULE_stringItem = 32;
	public static readonly RULE_charsetName = 33;
	public static readonly RULE_collateName = 34;
	public static readonly RULE_referenceOption = 35;
	public static readonly RULE_defaultValue = 36;
	public static readonly RULE_tableOptions = 37;
	public static readonly RULE_option = 38;
	public static readonly RULE_idName = 39;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"script", "stmt", "dropSchema", "createSchema", "createSpecification", 
		"tableComment", "setStmt", "setOption", "setDefaultValue", "useStmt", 
		"dropTable", "dropTableName", "createTable", "tableName", "fieldList", 
		"createDefinition", "columnName", "constraintName", "constraintTable", 
		"columnDefinition", "autoIncrement", "columnDefaultValue", "columnNull", 
		"columnNotNull", "fieldComment", "autoIncrementValue", "referenceDefinition", 
		"referenceDeleteOption", "referenceUpdateOption", "referenceTable", "indexColName", 
		"dataType", "stringItem", "charsetName", "collateName", "referenceOption", 
		"defaultValue", "tableOptions", "option", "idName",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
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
		undefined, undefined, undefined, undefined, "'.'", "'='", "'''", "'\"'", 
		"'`'", "'@'", "','", "';'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "BOOL", "K_DROP", "K_DATABASE", "K_SCHEMA", "K_IF", "K_EXISTS", 
		"K_NOT", "K_DEFAULT", "K_CHARACTER", "K_SET", "K_COLLATE", "K_USE", "K_TEMPORARY", 
		"K_TABLE", "K_RESTRICT", "K_CASCADE", "K_CONSTRAINT", "K_PRIMARY", "K_KEY", 
		"K_INDEX", "K_UNIQUE", "K_FULLTEXT", "K_FOREIGN", "K_COMMENT", "K_AUTO_INCREMENT", 
		"K_NULL", "K_CURRENT_TIMESTAMP", "K_REFERENCES", "K_ON", "K_DELETE", "K_UPDATE", 
		"K_ASC", "K_DESC", "K_BIT", "K_TINYINT", "K_UNSIGNED", "K_BINARY", "K_ZEROFILL", 
		"K_SMALLINT", "K_MEDIUMINT", "K_INT", "K_INTEGER", "K_BIGINT", "K_REAL", 
		"K_DOUBLE", "K_FLOAT", "K_DECIMAL", "K_NUMERIC", "K_BOOL", "K_BOOLEAN", 
		"K_DATE", "K_TIME", "K_TIMESTAMP", "K_DATETIME", "K_YEAR", "K_CHAR", "K_VARCHAR", 
		"K_VARBINARY", "K_TINYBLOB", "K_BLOB", "K_MEDIUMBLOB", "K_LONGBLOB", "K_JSON", 
		"K_TINYTEXT", "K_TEXT", "K_MEDIUMTEXT", "K_LONGTEXT", "K_ENUM", "K_NO", 
		"K_ACTION", "K_CREATE", "K_FALSE", "K_TRUE", "DOT", "EQ", "SINGLE_QUOTE", 
		"DOUBLE_QUOTE", "BACK_QUOTE", "AT", "COMMA", "SEMICOLON", "LPAR", "RPAR", 
		"ID", "NAME", "INT", "FLOAT", "STRING", "COMMENT", "SINGLE_COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SQLParser._LITERAL_NAMES, SQLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SQLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SQLParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return SQLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SQLParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SQLParser._ATN, this);
	}
	// @RuleVersion(0)
	public script(): ScriptContext {
		let _localctx: ScriptContext = new ScriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SQLParser.RULE_script);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLParser.K_DROP) | (1 << SQLParser.K_SET) | (1 << SQLParser.K_USE))) !== 0) || _la === SQLParser.K_CREATE || _la === SQLParser.SEMICOLON) {
				{
				{
				this.state = 80;
				this.stmt();
				}
				}
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SQLParser.RULE_stmt);
		try {
			this.state = 105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 86;
				this.createSchema();
				this.state = 87;
				this.match(SQLParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 89;
				this.dropSchema();
				this.state = 90;
				this.match(SQLParser.SEMICOLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 92;
				this.createTable();
				this.state = 93;
				this.match(SQLParser.SEMICOLON);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 95;
				this.dropTable();
				this.state = 96;
				this.match(SQLParser.SEMICOLON);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 98;
				this.useStmt();
				this.state = 99;
				this.match(SQLParser.SEMICOLON);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 101;
				this.setStmt();
				this.state = 102;
				this.match(SQLParser.SEMICOLON);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 104;
				this.match(SQLParser.SEMICOLON);
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
	public dropSchema(): DropSchemaContext {
		let _localctx: DropSchemaContext = new DropSchemaContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SQLParser.RULE_dropSchema);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this.match(SQLParser.K_DROP);
			this.state = 108;
			_la = this._input.LA(1);
			if (!(_la === SQLParser.K_DATABASE || _la === SQLParser.K_SCHEMA)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_IF) {
				{
				this.state = 109;
				this.match(SQLParser.K_IF);
				this.state = 110;
				this.match(SQLParser.K_EXISTS);
				}
			}

			this.state = 113;
			this.idName();
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
	public createSchema(): CreateSchemaContext {
		let _localctx: CreateSchemaContext = new CreateSchemaContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SQLParser.RULE_createSchema);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.match(SQLParser.K_CREATE);
			this.state = 116;
			_la = this._input.LA(1);
			if (!(_la === SQLParser.K_DATABASE || _la === SQLParser.K_SCHEMA)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_IF) {
				{
				this.state = 117;
				this.match(SQLParser.K_IF);
				this.state = 118;
				this.match(SQLParser.K_NOT);
				this.state = 119;
				this.match(SQLParser.K_EXISTS);
				}
			}

			this.state = 122;
			this.idName();
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLParser.K_DEFAULT) | (1 << SQLParser.K_CHARACTER) | (1 << SQLParser.K_COLLATE) | (1 << SQLParser.K_COMMENT) | (1 << SQLParser.K_AUTO_INCREMENT))) !== 0)) {
				{
				{
				this.state = 123;
				this.createSpecification();
				}
				}
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public createSpecification(): CreateSpecificationContext {
		let _localctx: CreateSpecificationContext = new CreateSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SQLParser.RULE_createSpecification);
		let _la: number;
		try {
			this.state = 152;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_DEFAULT) {
					{
					this.state = 129;
					this.match(SQLParser.K_DEFAULT);
					}
				}

				this.state = 132;
				this.match(SQLParser.K_CHARACTER);
				this.state = 133;
				this.match(SQLParser.K_SET);
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.EQ) {
					{
					this.state = 134;
					this.match(SQLParser.EQ);
					}
				}

				this.state = 137;
				this.charsetName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_DEFAULT) {
					{
					this.state = 138;
					this.match(SQLParser.K_DEFAULT);
					}
				}

				this.state = 141;
				this.match(SQLParser.K_COLLATE);
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.EQ) {
					{
					this.state = 142;
					this.match(SQLParser.EQ);
					}
				}

				this.state = 145;
				this.collateName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 146;
				this.match(SQLParser.K_AUTO_INCREMENT);
				this.state = 147;
				this.match(SQLParser.EQ);
				this.state = 148;
				this.autoIncrementValue();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 149;
				this.match(SQLParser.K_COMMENT);
				this.state = 150;
				this.match(SQLParser.EQ);
				this.state = 151;
				this.tableComment();
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
	public tableComment(): TableCommentContext {
		let _localctx: TableCommentContext = new TableCommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SQLParser.RULE_tableComment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(SQLParser.STRING);
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
	public setStmt(): SetStmtContext {
		let _localctx: SetStmtContext = new SetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SQLParser.RULE_setStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(SQLParser.K_SET);
			this.state = 162;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 157;
					this.setOption();
					this.state = 158;
					this.match(SQLParser.COMMA);
					}
					}
				}
				this.state = 164;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 165;
			this.setOption();
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
	public setOption(): SetOptionContext {
		let _localctx: SetOptionContext = new SetOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SQLParser.RULE_setOption);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLParser.AT) {
				{
				{
				this.state = 167;
				this.match(SQLParser.AT);
				}
				}
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 173;
			this.match(SQLParser.NAME);
			this.state = 174;
			this.match(SQLParser.EQ);
			this.state = 183;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLParser.BOOL:
			case SQLParser.K_NULL:
			case SQLParser.K_CURRENT_TIMESTAMP:
			case SQLParser.INT:
			case SQLParser.FLOAT:
			case SQLParser.STRING:
				{
				this.state = 175;
				this.setDefaultValue();
				}
				break;
			case SQLParser.AT:
			case SQLParser.NAME:
				{
				{
				this.state = 179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLParser.AT) {
					{
					{
					this.state = 176;
					this.match(SQLParser.AT);
					}
					}
					this.state = 181;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 182;
				this.match(SQLParser.NAME);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public setDefaultValue(): SetDefaultValueContext {
		let _localctx: SetDefaultValueContext = new SetDefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SQLParser.RULE_setDefaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.defaultValue();
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
	public useStmt(): UseStmtContext {
		let _localctx: UseStmtContext = new UseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SQLParser.RULE_useStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.match(SQLParser.K_USE);
			this.state = 188;
			this.idName();
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
	public dropTable(): DropTableContext {
		let _localctx: DropTableContext = new DropTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SQLParser.RULE_dropTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.match(SQLParser.K_DROP);
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_TEMPORARY) {
				{
				this.state = 191;
				this.match(SQLParser.K_TEMPORARY);
				}
			}

			this.state = 194;
			this.match(SQLParser.K_TABLE);
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_IF) {
				{
				this.state = 195;
				this.match(SQLParser.K_IF);
				this.state = 196;
				this.match(SQLParser.K_EXISTS);
				}
			}

			this.state = 199;
			this.dropTableName();
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLParser.COMMA) {
				{
				{
				this.state = 200;
				this.match(SQLParser.COMMA);
				this.state = 201;
				this.dropTableName();
				}
				}
				this.state = 206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_RESTRICT || _la === SQLParser.K_CASCADE) {
				{
				this.state = 207;
				_la = this._input.LA(1);
				if (!(_la === SQLParser.K_RESTRICT || _la === SQLParser.K_CASCADE)) {
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
	public dropTableName(): DropTableNameContext {
		let _localctx: DropTableNameContext = new DropTableNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SQLParser.RULE_dropTableName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.idName();
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
	public createTable(): CreateTableContext {
		let _localctx: CreateTableContext = new CreateTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SQLParser.RULE_createTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.match(SQLParser.K_CREATE);
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_TEMPORARY) {
				{
				this.state = 213;
				this.match(SQLParser.K_TEMPORARY);
				}
			}

			this.state = 216;
			this.match(SQLParser.K_TABLE);
			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_IF) {
				{
				this.state = 217;
				this.match(SQLParser.K_IF);
				this.state = 218;
				this.match(SQLParser.K_NOT);
				this.state = 219;
				this.match(SQLParser.K_EXISTS);
				}
			}

			this.state = 222;
			this.tableName();
			this.state = 223;
			this.match(SQLParser.LPAR);
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLParser.K_CONSTRAINT) | (1 << SQLParser.K_PRIMARY) | (1 << SQLParser.K_KEY) | (1 << SQLParser.K_INDEX) | (1 << SQLParser.K_UNIQUE) | (1 << SQLParser.K_FULLTEXT) | (1 << SQLParser.K_FOREIGN))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (SQLParser.SINGLE_QUOTE - 76)) | (1 << (SQLParser.DOUBLE_QUOTE - 76)) | (1 << (SQLParser.ID - 76)) | (1 << (SQLParser.NAME - 76)))) !== 0)) {
				{
				this.state = 224;
				this.fieldList();
				}
			}

			this.state = 227;
			this.match(SQLParser.RPAR);
			this.state = 228;
			this.tableOptions();
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
	public tableName(): TableNameContext {
		let _localctx: TableNameContext = new TableNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SQLParser.RULE_tableName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.idName();
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
	public fieldList(): FieldListContext {
		let _localctx: FieldListContext = new FieldListContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SQLParser.RULE_fieldList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 232;
					this.createDefinition();
					this.state = 233;
					this.match(SQLParser.COMMA);
					}
					}
				}
				this.state = 239;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 240;
			this.createDefinition();
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
	public createDefinition(): CreateDefinitionContext {
		let _localctx: CreateDefinitionContext = new CreateDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SQLParser.RULE_createDefinition);
		let _la: number;
		try {
			let _alt: number;
			this.state = 347;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				_localctx = new FieldStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 242;
				this.columnName();
				this.state = 243;
				this.columnDefinition();
				}
				break;

			case 2:
				_localctx = new PrimaryKeyStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CONSTRAINT) {
					{
					this.state = 245;
					this.match(SQLParser.K_CONSTRAINT);
					this.state = 247;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (SQLParser.SINGLE_QUOTE - 76)) | (1 << (SQLParser.DOUBLE_QUOTE - 76)) | (1 << (SQLParser.ID - 76)) | (1 << (SQLParser.NAME - 76)))) !== 0)) {
						{
						this.state = 246;
						this.constraintName();
						}
					}

					}
				}

				this.state = 251;
				this.match(SQLParser.K_PRIMARY);
				this.state = 252;
				this.match(SQLParser.K_KEY);
				this.state = 253;
				this.match(SQLParser.LPAR);
				this.state = 259;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 254;
						this.indexColName();
						this.state = 255;
						this.match(SQLParser.COMMA);
						}
						}
					}
					this.state = 261;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
				}
				this.state = 262;
				this.indexColName();
				this.state = 263;
				this.match(SQLParser.RPAR);
				}
				break;

			case 3:
				_localctx = new IndexStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 265;
				_la = this._input.LA(1);
				if (!(_la === SQLParser.K_KEY || _la === SQLParser.K_INDEX)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (SQLParser.SINGLE_QUOTE - 76)) | (1 << (SQLParser.DOUBLE_QUOTE - 76)) | (1 << (SQLParser.ID - 76)) | (1 << (SQLParser.NAME - 76)))) !== 0)) {
					{
					this.state = 266;
					this.constraintName();
					}
				}

				this.state = 269;
				this.match(SQLParser.LPAR);
				this.state = 275;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 270;
						this.indexColName();
						this.state = 271;
						this.match(SQLParser.COMMA);
						}
						}
					}
					this.state = 277;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				}
				this.state = 278;
				this.indexColName();
				this.state = 279;
				this.match(SQLParser.RPAR);
				}
				break;

			case 4:
				_localctx = new FulltextStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 281;
				this.match(SQLParser.K_FULLTEXT);
				this.state = 282;
				_la = this._input.LA(1);
				if (!(_la === SQLParser.K_KEY || _la === SQLParser.K_INDEX)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (SQLParser.SINGLE_QUOTE - 76)) | (1 << (SQLParser.DOUBLE_QUOTE - 76)) | (1 << (SQLParser.ID - 76)) | (1 << (SQLParser.NAME - 76)))) !== 0)) {
					{
					this.state = 283;
					this.constraintName();
					}
				}

				this.state = 286;
				this.match(SQLParser.LPAR);
				this.state = 292;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 287;
						this.indexColName();
						this.state = 288;
						this.match(SQLParser.COMMA);
						}
						}
					}
					this.state = 294;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				}
				this.state = 295;
				this.indexColName();
				this.state = 296;
				this.match(SQLParser.RPAR);
				}
				break;

			case 5:
				_localctx = new UniqueStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CONSTRAINT) {
					{
					this.state = 298;
					this.match(SQLParser.K_CONSTRAINT);
					this.state = 300;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (SQLParser.SINGLE_QUOTE - 76)) | (1 << (SQLParser.DOUBLE_QUOTE - 76)) | (1 << (SQLParser.ID - 76)) | (1 << (SQLParser.NAME - 76)))) !== 0)) {
						{
						this.state = 299;
						this.constraintName();
						}
					}

					}
				}

				this.state = 304;
				this.match(SQLParser.K_UNIQUE);
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_KEY || _la === SQLParser.K_INDEX) {
					{
					this.state = 305;
					_la = this._input.LA(1);
					if (!(_la === SQLParser.K_KEY || _la === SQLParser.K_INDEX)) {
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

				this.state = 309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (SQLParser.SINGLE_QUOTE - 76)) | (1 << (SQLParser.DOUBLE_QUOTE - 76)) | (1 << (SQLParser.ID - 76)) | (1 << (SQLParser.NAME - 76)))) !== 0)) {
					{
					this.state = 308;
					this.constraintTable();
					}
				}

				this.state = 311;
				this.match(SQLParser.LPAR);
				this.state = 317;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 312;
						this.indexColName();
						this.state = 313;
						this.match(SQLParser.COMMA);
						}
						}
					}
					this.state = 319;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				}
				this.state = 320;
				this.indexColName();
				this.state = 321;
				this.match(SQLParser.RPAR);
				}
				break;

			case 6:
				_localctx = new ForeignStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CONSTRAINT) {
					{
					this.state = 323;
					this.match(SQLParser.K_CONSTRAINT);
					this.state = 325;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (SQLParser.SINGLE_QUOTE - 76)) | (1 << (SQLParser.DOUBLE_QUOTE - 76)) | (1 << (SQLParser.ID - 76)) | (1 << (SQLParser.NAME - 76)))) !== 0)) {
						{
						this.state = 324;
						this.constraintName();
						}
					}

					}
				}

				this.state = 329;
				this.match(SQLParser.K_FOREIGN);
				this.state = 330;
				this.match(SQLParser.K_KEY);
				this.state = 332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (SQLParser.SINGLE_QUOTE - 76)) | (1 << (SQLParser.DOUBLE_QUOTE - 76)) | (1 << (SQLParser.ID - 76)) | (1 << (SQLParser.NAME - 76)))) !== 0)) {
					{
					this.state = 331;
					this.constraintTable();
					}
				}

				this.state = 334;
				this.match(SQLParser.LPAR);
				this.state = 340;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 335;
						this.indexColName();
						this.state = 336;
						this.match(SQLParser.COMMA);
						}
						}
					}
					this.state = 342;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
				}
				this.state = 343;
				this.indexColName();
				this.state = 344;
				this.match(SQLParser.RPAR);
				this.state = 345;
				this.referenceDefinition();
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
	public columnName(): ColumnNameContext {
		let _localctx: ColumnNameContext = new ColumnNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SQLParser.RULE_columnName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this.idName();
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
	public constraintName(): ConstraintNameContext {
		let _localctx: ConstraintNameContext = new ConstraintNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SQLParser.RULE_constraintName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this.idName();
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
	public constraintTable(): ConstraintTableContext {
		let _localctx: ConstraintTableContext = new ConstraintTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SQLParser.RULE_constraintTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			this.idName();
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
	public columnDefinition(): ColumnDefinitionContext {
		let _localctx: ColumnDefinitionContext = new ColumnDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SQLParser.RULE_columnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.dataType();
			this.state = 358;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLParser.K_NULL:
				{
				this.state = 356;
				this.columnNull();
				}
				break;
			case SQLParser.K_NOT:
				{
				this.state = 357;
				this.columnNotNull();
				}
				break;
			case SQLParser.K_DEFAULT:
			case SQLParser.K_PRIMARY:
			case SQLParser.K_KEY:
			case SQLParser.K_UNIQUE:
			case SQLParser.K_COMMENT:
			case SQLParser.K_AUTO_INCREMENT:
			case SQLParser.COMMA:
			case SQLParser.RPAR:
				break;
			default:
				break;
			}
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_DEFAULT) {
				{
				this.state = 360;
				this.match(SQLParser.K_DEFAULT);
				this.state = 361;
				this.columnDefaultValue();
				}
			}

			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_AUTO_INCREMENT) {
				{
				this.state = 364;
				this.autoIncrement();
				}
			}

			this.state = 375;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLParser.K_UNIQUE:
				{
				{
				this.state = 367;
				this.match(SQLParser.K_UNIQUE);
				this.state = 369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_KEY) {
					{
					this.state = 368;
					this.match(SQLParser.K_KEY);
					}
				}

				}
				}
				break;
			case SQLParser.K_PRIMARY:
			case SQLParser.K_KEY:
				{
				{
				this.state = 372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_PRIMARY) {
					{
					this.state = 371;
					this.match(SQLParser.K_PRIMARY);
					}
				}

				this.state = 374;
				this.match(SQLParser.K_KEY);
				}
				}
				break;
			case SQLParser.K_COMMENT:
			case SQLParser.COMMA:
			case SQLParser.RPAR:
				break;
			default:
				break;
			}
			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_COMMENT) {
				{
				this.state = 377;
				this.match(SQLParser.K_COMMENT);
				this.state = 378;
				this.fieldComment();
				}
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
	public autoIncrement(): AutoIncrementContext {
		let _localctx: AutoIncrementContext = new AutoIncrementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SQLParser.RULE_autoIncrement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this.match(SQLParser.K_AUTO_INCREMENT);
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
	public columnDefaultValue(): ColumnDefaultValueContext {
		let _localctx: ColumnDefaultValueContext = new ColumnDefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SQLParser.RULE_columnDefaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.defaultValue();
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
	public columnNull(): ColumnNullContext {
		let _localctx: ColumnNullContext = new ColumnNullContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SQLParser.RULE_columnNull);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 385;
			this.match(SQLParser.K_NULL);
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
	public columnNotNull(): ColumnNotNullContext {
		let _localctx: ColumnNotNullContext = new ColumnNotNullContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SQLParser.RULE_columnNotNull);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			this.match(SQLParser.K_NOT);
			this.state = 388;
			this.match(SQLParser.K_NULL);
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
	public fieldComment(): FieldCommentContext {
		let _localctx: FieldCommentContext = new FieldCommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SQLParser.RULE_fieldComment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.match(SQLParser.STRING);
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
	public autoIncrementValue(): AutoIncrementValueContext {
		let _localctx: AutoIncrementValueContext = new AutoIncrementValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SQLParser.RULE_autoIncrementValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.match(SQLParser.INT);
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
	public referenceDefinition(): ReferenceDefinitionContext {
		let _localctx: ReferenceDefinitionContext = new ReferenceDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SQLParser.RULE_referenceDefinition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this.match(SQLParser.K_REFERENCES);
			this.state = 395;
			this.referenceTable();
			this.state = 396;
			this.match(SQLParser.LPAR);
			this.state = 402;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 397;
					this.indexColName();
					this.state = 398;
					this.match(SQLParser.COMMA);
					}
					}
				}
				this.state = 404;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			}
			this.state = 405;
			this.indexColName();
			this.state = 406;
			this.match(SQLParser.RPAR);
			this.state = 410;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 407;
				this.match(SQLParser.K_ON);
				this.state = 408;
				this.match(SQLParser.K_DELETE);
				this.state = 409;
				this.referenceDeleteOption();
				}
				break;
			}
			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_ON) {
				{
				this.state = 412;
				this.match(SQLParser.K_ON);
				this.state = 413;
				this.match(SQLParser.K_UPDATE);
				this.state = 414;
				this.referenceUpdateOption();
				}
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
	public referenceDeleteOption(): ReferenceDeleteOptionContext {
		let _localctx: ReferenceDeleteOptionContext = new ReferenceDeleteOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SQLParser.RULE_referenceDeleteOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.referenceOption();
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
	public referenceUpdateOption(): ReferenceUpdateOptionContext {
		let _localctx: ReferenceUpdateOptionContext = new ReferenceUpdateOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SQLParser.RULE_referenceUpdateOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this.referenceOption();
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
	public referenceTable(): ReferenceTableContext {
		let _localctx: ReferenceTableContext = new ReferenceTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SQLParser.RULE_referenceTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.idName();
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
	public indexColName(): IndexColNameContext {
		let _localctx: IndexColNameContext = new IndexColNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SQLParser.RULE_indexColName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 423;
			this.idName();
			this.state = 425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_ASC || _la === SQLParser.K_DESC) {
				{
				this.state = 424;
				_localctx._Type = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SQLParser.K_ASC || _la === SQLParser.K_DESC)) {
					_localctx._Type = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
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
	public dataType(): DataTypeContext {
		let _localctx: DataTypeContext = new DataTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SQLParser.RULE_dataType);
		let _la: number;
		try {
			let _alt: number;
			this.state = 722;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLParser.K_BIT:
				_localctx = new TypeBitStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 427;
				this.match(SQLParser.K_BIT);
				this.state = 431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 428;
					this.match(SQLParser.LPAR);
					this.state = 429;
					this.match(SQLParser.INT);
					this.state = 430;
					this.match(SQLParser.RPAR);
					}
				}

				}
				break;
			case SQLParser.K_TINYINT:
				_localctx = new TypeTinyIntStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 433;
				this.match(SQLParser.K_TINYINT);
				this.state = 437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 434;
					this.match(SQLParser.LPAR);
					this.state = 435;
					this.match(SQLParser.INT);
					this.state = 436;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_UNSIGNED) {
					{
					this.state = 439;
					this.match(SQLParser.K_UNSIGNED);
					}
				}

				this.state = 443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_ZEROFILL) {
					{
					this.state = 442;
					this.match(SQLParser.K_ZEROFILL);
					}
				}

				}
				break;
			case SQLParser.K_SMALLINT:
				_localctx = new TypeSmallIntStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 445;
				this.match(SQLParser.K_SMALLINT);
				this.state = 449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 446;
					this.match(SQLParser.LPAR);
					this.state = 447;
					this.match(SQLParser.INT);
					this.state = 448;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 452;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_UNSIGNED) {
					{
					this.state = 451;
					this.match(SQLParser.K_UNSIGNED);
					}
				}

				this.state = 455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_ZEROFILL) {
					{
					this.state = 454;
					this.match(SQLParser.K_ZEROFILL);
					}
				}

				}
				break;
			case SQLParser.K_MEDIUMINT:
				_localctx = new TypeMediumIntStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 457;
				this.match(SQLParser.K_MEDIUMINT);
				this.state = 461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 458;
					this.match(SQLParser.LPAR);
					this.state = 459;
					this.match(SQLParser.INT);
					this.state = 460;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 464;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_UNSIGNED) {
					{
					this.state = 463;
					this.match(SQLParser.K_UNSIGNED);
					}
				}

				this.state = 467;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_ZEROFILL) {
					{
					this.state = 466;
					this.match(SQLParser.K_ZEROFILL);
					}
				}

				}
				break;
			case SQLParser.K_INT:
				_localctx = new TypeIntStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 469;
				this.match(SQLParser.K_INT);
				this.state = 473;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 470;
					this.match(SQLParser.LPAR);
					this.state = 471;
					this.match(SQLParser.INT);
					this.state = 472;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_UNSIGNED) {
					{
					this.state = 475;
					this.match(SQLParser.K_UNSIGNED);
					}
				}

				this.state = 479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_ZEROFILL) {
					{
					this.state = 478;
					this.match(SQLParser.K_ZEROFILL);
					}
				}

				}
				break;
			case SQLParser.K_INTEGER:
				_localctx = new TypeIntegerStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 481;
				this.match(SQLParser.K_INTEGER);
				this.state = 485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 482;
					this.match(SQLParser.LPAR);
					this.state = 483;
					this.match(SQLParser.INT);
					this.state = 484;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_UNSIGNED) {
					{
					this.state = 487;
					this.match(SQLParser.K_UNSIGNED);
					}
				}

				this.state = 491;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_ZEROFILL) {
					{
					this.state = 490;
					this.match(SQLParser.K_ZEROFILL);
					}
				}

				}
				break;
			case SQLParser.K_BIGINT:
				_localctx = new TypeBigIntStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 493;
				this.match(SQLParser.K_BIGINT);
				this.state = 497;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 494;
					this.match(SQLParser.LPAR);
					this.state = 495;
					this.match(SQLParser.INT);
					this.state = 496;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_UNSIGNED) {
					{
					this.state = 499;
					this.match(SQLParser.K_UNSIGNED);
					}
				}

				this.state = 503;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_ZEROFILL) {
					{
					this.state = 502;
					this.match(SQLParser.K_ZEROFILL);
					}
				}

				}
				break;
			case SQLParser.K_REAL:
				_localctx = new TypeRealStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 505;
				this.match(SQLParser.K_REAL);
				this.state = 511;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 506;
					this.match(SQLParser.LPAR);
					this.state = 507;
					this.match(SQLParser.INT);
					this.state = 508;
					this.match(SQLParser.COMMA);
					this.state = 509;
					this.match(SQLParser.INT);
					this.state = 510;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 514;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_UNSIGNED) {
					{
					this.state = 513;
					this.match(SQLParser.K_UNSIGNED);
					}
				}

				this.state = 517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_ZEROFILL) {
					{
					this.state = 516;
					this.match(SQLParser.K_ZEROFILL);
					}
				}

				}
				break;
			case SQLParser.K_DOUBLE:
				_localctx = new TypeDoubleStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 519;
				this.match(SQLParser.K_DOUBLE);
				this.state = 525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 520;
					this.match(SQLParser.LPAR);
					this.state = 521;
					this.match(SQLParser.INT);
					this.state = 522;
					this.match(SQLParser.COMMA);
					this.state = 523;
					this.match(SQLParser.INT);
					this.state = 524;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_UNSIGNED) {
					{
					this.state = 527;
					this.match(SQLParser.K_UNSIGNED);
					}
				}

				this.state = 531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_ZEROFILL) {
					{
					this.state = 530;
					this.match(SQLParser.K_ZEROFILL);
					}
				}

				}
				break;
			case SQLParser.K_FLOAT:
				_localctx = new TypeFloatStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 533;
				this.match(SQLParser.K_FLOAT);
				this.state = 539;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 534;
					this.match(SQLParser.LPAR);
					this.state = 535;
					this.match(SQLParser.INT);
					this.state = 536;
					this.match(SQLParser.COMMA);
					this.state = 537;
					this.match(SQLParser.INT);
					this.state = 538;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_UNSIGNED) {
					{
					this.state = 541;
					this.match(SQLParser.K_UNSIGNED);
					}
				}

				this.state = 545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_ZEROFILL) {
					{
					this.state = 544;
					this.match(SQLParser.K_ZEROFILL);
					}
				}

				}
				break;
			case SQLParser.K_DECIMAL:
				_localctx = new TypeDecimalStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 547;
				this.match(SQLParser.K_DECIMAL);
				this.state = 555;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 548;
					this.match(SQLParser.LPAR);
					this.state = 549;
					this.match(SQLParser.INT);
					this.state = 552;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SQLParser.COMMA) {
						{
						this.state = 550;
						this.match(SQLParser.COMMA);
						this.state = 551;
						this.match(SQLParser.INT);
						}
					}

					this.state = 554;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 558;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_UNSIGNED) {
					{
					this.state = 557;
					this.match(SQLParser.K_UNSIGNED);
					}
				}

				this.state = 561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_ZEROFILL) {
					{
					this.state = 560;
					this.match(SQLParser.K_ZEROFILL);
					}
				}

				}
				break;
			case SQLParser.K_NUMERIC:
				_localctx = new TypeNumericStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 563;
				this.match(SQLParser.K_NUMERIC);
				this.state = 571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 564;
					this.match(SQLParser.LPAR);
					this.state = 565;
					this.match(SQLParser.INT);
					this.state = 568;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SQLParser.COMMA) {
						{
						this.state = 566;
						this.match(SQLParser.COMMA);
						this.state = 567;
						this.match(SQLParser.INT);
						}
					}

					this.state = 570;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 574;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_UNSIGNED) {
					{
					this.state = 573;
					this.match(SQLParser.K_UNSIGNED);
					}
				}

				this.state = 577;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_ZEROFILL) {
					{
					this.state = 576;
					this.match(SQLParser.K_ZEROFILL);
					}
				}

				}
				break;
			case SQLParser.K_BOOL:
			case SQLParser.K_BOOLEAN:
				_localctx = new TypeBooleanStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 579;
				_la = this._input.LA(1);
				if (!(_la === SQLParser.K_BOOL || _la === SQLParser.K_BOOLEAN)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case SQLParser.K_DATE:
				_localctx = new TypeDateStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 580;
				this.match(SQLParser.K_DATE);
				}
				break;
			case SQLParser.K_TIME:
				_localctx = new TypeTimeStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 581;
				this.match(SQLParser.K_TIME);
				}
				break;
			case SQLParser.K_TIMESTAMP:
				_localctx = new TypeTimeStampStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 582;
				this.match(SQLParser.K_TIMESTAMP);
				}
				break;
			case SQLParser.K_DATETIME:
				_localctx = new TypeDateTimeStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 583;
				this.match(SQLParser.K_DATETIME);
				}
				break;
			case SQLParser.K_YEAR:
				_localctx = new TypeYearStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 584;
				this.match(SQLParser.K_YEAR);
				}
				break;
			case SQLParser.K_CHAR:
				_localctx = new TypeCharStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 585;
				this.match(SQLParser.K_CHAR);
				this.state = 589;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 586;
					this.match(SQLParser.LPAR);
					this.state = 587;
					this.match(SQLParser.INT);
					this.state = 588;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 594;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CHARACTER) {
					{
					this.state = 591;
					this.match(SQLParser.K_CHARACTER);
					this.state = 592;
					this.match(SQLParser.K_SET);
					this.state = 593;
					this.charsetName();
					}
				}

				this.state = 598;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_COLLATE) {
					{
					this.state = 596;
					this.match(SQLParser.K_COLLATE);
					this.state = 597;
					this.collateName();
					}
				}

				}
				break;
			case SQLParser.K_VARCHAR:
				_localctx = new TypeVarCharStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 600;
				this.match(SQLParser.K_VARCHAR);
				this.state = 601;
				this.match(SQLParser.LPAR);
				this.state = 602;
				this.match(SQLParser.INT);
				this.state = 603;
				this.match(SQLParser.RPAR);
				this.state = 607;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CHARACTER) {
					{
					this.state = 604;
					this.match(SQLParser.K_CHARACTER);
					this.state = 605;
					this.match(SQLParser.K_SET);
					this.state = 606;
					this.charsetName();
					}
				}

				this.state = 611;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_COLLATE) {
					{
					this.state = 609;
					this.match(SQLParser.K_COLLATE);
					this.state = 610;
					this.collateName();
					}
				}

				}
				break;
			case SQLParser.K_BINARY:
				_localctx = new TypeBinaryStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 613;
				this.match(SQLParser.K_BINARY);
				this.state = 617;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 614;
					this.match(SQLParser.LPAR);
					this.state = 615;
					this.match(SQLParser.INT);
					this.state = 616;
					this.match(SQLParser.RPAR);
					}
				}

				}
				break;
			case SQLParser.K_VARBINARY:
				_localctx = new TypeVarBinaryStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 619;
				this.match(SQLParser.K_VARBINARY);
				this.state = 620;
				this.match(SQLParser.LPAR);
				this.state = 621;
				this.match(SQLParser.INT);
				this.state = 622;
				this.match(SQLParser.RPAR);
				}
				break;
			case SQLParser.K_TINYBLOB:
				_localctx = new TypeTinyBlobStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 623;
				this.match(SQLParser.K_TINYBLOB);
				}
				break;
			case SQLParser.K_BLOB:
				_localctx = new TypeBlobStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 624;
				this.match(SQLParser.K_BLOB);
				}
				break;
			case SQLParser.K_MEDIUMBLOB:
				_localctx = new TypeMediumBlobStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 625;
				this.match(SQLParser.K_MEDIUMBLOB);
				}
				break;
			case SQLParser.K_LONGBLOB:
				_localctx = new TypeLongBlobStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 626;
				this.match(SQLParser.K_LONGBLOB);
				}
				break;
			case SQLParser.K_JSON:
				_localctx = new TypeJsonStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 627;
				this.match(SQLParser.K_JSON);
				}
				break;
			case SQLParser.K_TINYTEXT:
				_localctx = new TypeTinyTextStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 628;
				this.match(SQLParser.K_TINYTEXT);
				this.state = 630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_BINARY) {
					{
					this.state = 629;
					this.match(SQLParser.K_BINARY);
					}
				}

				this.state = 635;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CHARACTER) {
					{
					this.state = 632;
					this.match(SQLParser.K_CHARACTER);
					this.state = 633;
					this.match(SQLParser.K_SET);
					this.state = 634;
					this.charsetName();
					}
				}

				this.state = 639;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_COLLATE) {
					{
					this.state = 637;
					this.match(SQLParser.K_COLLATE);
					this.state = 638;
					this.collateName();
					}
				}

				}
				break;
			case SQLParser.K_TEXT:
				_localctx = new TypeTextStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 641;
				this.match(SQLParser.K_TEXT);
				this.state = 643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_BINARY) {
					{
					this.state = 642;
					this.match(SQLParser.K_BINARY);
					}
				}

				this.state = 648;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CHARACTER) {
					{
					this.state = 645;
					this.match(SQLParser.K_CHARACTER);
					this.state = 646;
					this.match(SQLParser.K_SET);
					this.state = 647;
					this.charsetName();
					}
				}

				this.state = 652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_COLLATE) {
					{
					this.state = 650;
					this.match(SQLParser.K_COLLATE);
					this.state = 651;
					this.collateName();
					}
				}

				}
				break;
			case SQLParser.K_MEDIUMTEXT:
				_localctx = new TypeMediumTextStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 654;
				this.match(SQLParser.K_MEDIUMTEXT);
				this.state = 656;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_BINARY) {
					{
					this.state = 655;
					this.match(SQLParser.K_BINARY);
					}
				}

				this.state = 661;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CHARACTER) {
					{
					this.state = 658;
					this.match(SQLParser.K_CHARACTER);
					this.state = 659;
					this.match(SQLParser.K_SET);
					this.state = 660;
					this.charsetName();
					}
				}

				this.state = 665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_COLLATE) {
					{
					this.state = 663;
					this.match(SQLParser.K_COLLATE);
					this.state = 664;
					this.collateName();
					}
				}

				}
				break;
			case SQLParser.K_LONGTEXT:
				_localctx = new TypeLongTextStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 667;
				this.match(SQLParser.K_LONGTEXT);
				this.state = 669;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_BINARY) {
					{
					this.state = 668;
					this.match(SQLParser.K_BINARY);
					}
				}

				this.state = 674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CHARACTER) {
					{
					this.state = 671;
					this.match(SQLParser.K_CHARACTER);
					this.state = 672;
					this.match(SQLParser.K_SET);
					this.state = 673;
					this.charsetName();
					}
				}

				this.state = 678;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_COLLATE) {
					{
					this.state = 676;
					this.match(SQLParser.K_COLLATE);
					this.state = 677;
					this.collateName();
					}
				}

				}
				break;
			case SQLParser.K_ENUM:
				_localctx = new TypeEnumStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 680;
				this.match(SQLParser.K_ENUM);
				this.state = 681;
				this.match(SQLParser.LPAR);
				this.state = 687;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 682;
						this.stringItem();
						this.state = 683;
						this.match(SQLParser.COMMA);
						}
						}
					}
					this.state = 689;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
				}
				this.state = 690;
				this.stringItem();
				this.state = 691;
				this.match(SQLParser.RPAR);
				this.state = 695;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CHARACTER) {
					{
					this.state = 692;
					this.match(SQLParser.K_CHARACTER);
					this.state = 693;
					this.match(SQLParser.K_SET);
					this.state = 694;
					this.charsetName();
					}
				}

				this.state = 699;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_COLLATE) {
					{
					this.state = 697;
					this.match(SQLParser.K_COLLATE);
					this.state = 698;
					this.collateName();
					}
				}

				}
				break;
			case SQLParser.K_SET:
				_localctx = new TypeSetStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 701;
				this.match(SQLParser.K_SET);
				this.state = 702;
				this.match(SQLParser.LPAR);
				this.state = 708;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 703;
						this.stringItem();
						this.state = 704;
						this.match(SQLParser.COMMA);
						}
						}
					}
					this.state = 710;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
				}
				this.state = 711;
				this.stringItem();
				this.state = 712;
				this.match(SQLParser.RPAR);
				this.state = 716;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CHARACTER) {
					{
					this.state = 713;
					this.match(SQLParser.K_CHARACTER);
					this.state = 714;
					this.match(SQLParser.K_SET);
					this.state = 715;
					this.charsetName();
					}
				}

				this.state = 720;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_COLLATE) {
					{
					this.state = 718;
					this.match(SQLParser.K_COLLATE);
					this.state = 719;
					this.collateName();
					}
				}

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
	public stringItem(): StringItemContext {
		let _localctx: StringItemContext = new StringItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SQLParser.RULE_stringItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			this.match(SQLParser.STRING);
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
	public charsetName(): CharsetNameContext {
		let _localctx: CharsetNameContext = new CharsetNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SQLParser.RULE_charsetName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 726;
			this.idName();
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
	public collateName(): CollateNameContext {
		let _localctx: CollateNameContext = new CollateNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SQLParser.RULE_collateName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
			this.idName();
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
	public referenceOption(): ReferenceOptionContext {
		let _localctx: ReferenceOptionContext = new ReferenceOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SQLParser.RULE_referenceOption);
		try {
			this.state = 736;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLParser.K_RESTRICT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 730;
				this.match(SQLParser.K_RESTRICT);
				}
				break;
			case SQLParser.K_CASCADE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 731;
				this.match(SQLParser.K_CASCADE);
				}
				break;
			case SQLParser.K_SET:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 732;
				this.match(SQLParser.K_SET);
				this.state = 733;
				this.match(SQLParser.K_NULL);
				}
				}
				break;
			case SQLParser.K_NO:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 734;
				this.match(SQLParser.K_NO);
				this.state = 735;
				this.match(SQLParser.K_ACTION);
				}
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
	public defaultValue(): DefaultValueContext {
		let _localctx: DefaultValueContext = new DefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SQLParser.RULE_defaultValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 738;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLParser.BOOL) | (1 << SQLParser.K_NULL) | (1 << SQLParser.K_CURRENT_TIMESTAMP))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (SQLParser.INT - 86)) | (1 << (SQLParser.FLOAT - 86)) | (1 << (SQLParser.STRING - 86)))) !== 0))) {
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
	public tableOptions(): TableOptionsContext {
		let _localctx: TableOptionsContext = new TableOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SQLParser.RULE_tableOptions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLParser.K_DEFAULT) | (1 << SQLParser.K_CHARACTER) | (1 << SQLParser.K_COLLATE) | (1 << SQLParser.K_COMMENT) | (1 << SQLParser.K_AUTO_INCREMENT))) !== 0) || _la === SQLParser.NAME) {
				{
				{
				this.state = 740;
				this.option();
				}
				}
				this.state = 745;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public option(): OptionContext {
		let _localctx: OptionContext = new OptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SQLParser.RULE_option);
		try {
			this.state = 750;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 746;
				this.match(SQLParser.NAME);
				this.state = 747;
				this.match(SQLParser.EQ);
				this.state = 748;
				this.match(SQLParser.NAME);
				}
				break;
			case SQLParser.K_DEFAULT:
			case SQLParser.K_CHARACTER:
			case SQLParser.K_COLLATE:
			case SQLParser.K_COMMENT:
			case SQLParser.K_AUTO_INCREMENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 749;
				this.createSpecification();
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
	public idName(): IdNameContext {
		let _localctx: IdNameContext = new IdNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SQLParser.RULE_idName);
		try {
			this.state = 760;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 752;
				this.match(SQLParser.ID);
				}
				break;
			case SQLParser.SINGLE_QUOTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 753;
				this.match(SQLParser.SINGLE_QUOTE);
				this.state = 754;
				this.match(SQLParser.NAME);
				this.state = 755;
				this.match(SQLParser.SINGLE_QUOTE);
				}
				break;
			case SQLParser.DOUBLE_QUOTE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 756;
				this.match(SQLParser.DOUBLE_QUOTE);
				this.state = 757;
				this.match(SQLParser.NAME);
				this.state = 758;
				this.match(SQLParser.DOUBLE_QUOTE);
				}
				break;
			case SQLParser.NAME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 759;
				this.match(SQLParser.NAME);
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

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03]\u02FD\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x03\x02\x07\x02" +
		"T\n\x02\f\x02\x0E\x02W\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03l\n\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x05\x04r\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05{\n\x05\x03\x05\x03\x05\x07\x05\x7F\n\x05\f\x05\x0E" +
		"\x05\x82\v\x05\x03\x06\x05\x06\x85\n\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		"\x8A\n\x06\x03\x06\x03\x06\x05\x06\x8E\n\x06\x03\x06\x03\x06\x05\x06\x92" +
		"\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		"\x9B\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x07\b\xA3\n\b\f\b\x0E" +
		"\b\xA6\v\b\x03\b\x03\b\x03\t\x07\t\xAB\n\t\f\t\x0E\t\xAE\v\t\x03\t\x03" +
		"\t\x03\t\x03\t\x07\t\xB4\n\t\f\t\x0E\t\xB7\v\t\x03\t\x05\t\xBA\n\t\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x05\f\xC3\n\f\x03\f\x03\f\x03\f" +
		"\x05\f\xC8\n\f\x03\f\x03\f\x03\f\x07\f\xCD\n\f\f\f\x0E\f\xD0\v\f\x03\f" +
		"\x05\f\xD3\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0E\xD9\n\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\xDF\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\xE4\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x10\x07\x10\xEE\n\x10\f\x10\x0E\x10\xF1\v\x10\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xFA\n\x11\x05\x11\xFC\n\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0104\n\x11\f\x11" +
		"\x0E\x11\u0107\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u010E" +
		"\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0114\n\x11\f\x11\x0E\x11" +
		"\u0117\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u011F" +
		"\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0125\n\x11\f\x11\x0E\x11" +
		"\u0128\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u012F\n\x11" +
		"\x05\x11\u0131\n\x11\x03\x11\x03\x11\x05\x11\u0135\n\x11\x03\x11\x05\x11" +
		"\u0138\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u013E\n\x11\f\x11" +
		"\x0E\x11\u0141\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0148" +
		"\n\x11\x05\x11\u014A\n\x11\x03\x11\x03\x11\x03\x11\x05\x11\u014F\n\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0155\n\x11\f\x11\x0E\x11\u0158" +
		"\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u015E\n\x11\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x05\x15\u0169" +
		"\n\x15\x03\x15\x03\x15\x05\x15\u016D\n\x15\x03\x15\x05\x15\u0170\n\x15" +
		"\x03\x15\x03\x15\x05\x15\u0174\n\x15\x03\x15\x05\x15\u0177\n\x15\x03\x15" +
		"\x05\x15\u017A\n\x15\x03\x15\x03\x15\x05\x15\u017E\n\x15\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A" +
		"\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C" +
		"\u0193\n\x1C\f\x1C\x0E\x1C\u0196\v\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x05\x1C\u019D\n\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01A2\n\x1C" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x05 \u01AC" +
		"\n \x03!\x03!\x03!\x03!\x05!\u01B2\n!\x03!\x03!\x03!\x03!\x05!\u01B8\n" +
		"!\x03!\x05!\u01BB\n!\x03!\x05!\u01BE\n!\x03!\x03!\x03!\x03!\x05!\u01C4" +
		"\n!\x03!\x05!\u01C7\n!\x03!\x05!\u01CA\n!\x03!\x03!\x03!\x03!\x05!\u01D0" +
		"\n!\x03!\x05!\u01D3\n!\x03!\x05!\u01D6\n!\x03!\x03!\x03!\x03!\x05!\u01DC" +
		"\n!\x03!\x05!\u01DF\n!\x03!\x05!\u01E2\n!\x03!\x03!\x03!\x03!\x05!\u01E8" +
		"\n!\x03!\x05!\u01EB\n!\x03!\x05!\u01EE\n!\x03!\x03!\x03!\x03!\x05!\u01F4" +
		"\n!\x03!\x05!\u01F7\n!\x03!\x05!\u01FA\n!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x05!\u0202\n!\x03!\x05!\u0205\n!\x03!\x05!\u0208\n!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x05!\u0210\n!\x03!\x05!\u0213\n!\x03!\x05!\u0216\n!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x05!\u021E\n!\x03!\x05!\u0221\n!\x03!\x05!\u0224" +
		"\n!\x03!\x03!\x03!\x03!\x03!\x05!\u022B\n!\x03!\x05!\u022E\n!\x03!\x05" +
		"!\u0231\n!\x03!\x05!\u0234\n!\x03!\x03!\x03!\x03!\x03!\x05!\u023B\n!\x03" +
		"!\x05!\u023E\n!\x03!\x05!\u0241\n!\x03!\x05!\u0244\n!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u0250\n!\x03!\x03!\x03!\x05!\u0255" +
		"\n!\x03!\x03!\x05!\u0259\n!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u0262" +
		"\n!\x03!\x03!\x05!\u0266\n!\x03!\x03!\x03!\x03!\x05!\u026C\n!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u0279\n!\x03!\x03" +
		"!\x03!\x05!\u027E\n!\x03!\x03!\x05!\u0282\n!\x03!\x03!\x05!\u0286\n!\x03" +
		"!\x03!\x03!\x05!\u028B\n!\x03!\x03!\x05!\u028F\n!\x03!\x03!\x05!\u0293" +
		"\n!\x03!\x03!\x03!\x05!\u0298\n!\x03!\x03!\x05!\u029C\n!\x03!\x03!\x05" +
		"!\u02A0\n!\x03!\x03!\x03!\x05!\u02A5\n!\x03!\x03!\x05!\u02A9\n!\x03!\x03" +
		"!\x03!\x03!\x03!\x07!\u02B0\n!\f!\x0E!\u02B3\v!\x03!\x03!\x03!\x03!\x03" +
		"!\x05!\u02BA\n!\x03!\x03!\x05!\u02BE\n!\x03!\x03!\x03!\x03!\x03!\x07!" +
		"\u02C5\n!\f!\x0E!\u02C8\v!\x03!\x03!\x03!\x03!\x03!\x05!\u02CF\n!\x03" +
		"!\x03!\x05!\u02D3\n!\x05!\u02D5\n!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03" +
		"%\x03%\x03%\x03%\x03%\x03%\x05%\u02E3\n%\x03&\x03&\x03\'\x07\'\u02E8\n" +
		"\'\f\'\x0E\'\u02EB\v\'\x03(\x03(\x03(\x03(\x05(\u02F1\n(\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x05)\u02FB\n)\x03)\x02\x02\x02*\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02\x02\b\x03\x02\x05\x06\x03\x02\x11\x12\x03\x02\x15" +
		"\x16\x03\x02\"#\x03\x0234\x05\x02\x03\x03\x1C\x1DXZ\x02\u0377\x02U\x03" +
		"\x02\x02\x02\x04k\x03\x02\x02\x02\x06m\x03\x02\x02\x02\bu\x03\x02\x02" +
		"\x02\n\x9A\x03\x02\x02\x02\f\x9C\x03\x02\x02\x02\x0E\x9E\x03\x02\x02\x02" +
		"\x10\xAC\x03\x02\x02\x02\x12\xBB\x03\x02\x02\x02\x14\xBD\x03\x02\x02\x02" +
		"\x16\xC0\x03\x02\x02\x02\x18\xD4\x03\x02\x02\x02\x1A\xD6\x03\x02\x02\x02" +
		"\x1C\xE8\x03\x02\x02\x02\x1E\xEF\x03\x02\x02\x02 \u015D\x03\x02\x02\x02" +
		"\"\u015F\x03\x02\x02\x02$\u0161\x03\x02\x02\x02&\u0163\x03\x02\x02\x02" +
		"(\u0165\x03\x02\x02\x02*\u017F\x03\x02\x02\x02,\u0181\x03\x02\x02\x02" +
		".\u0183\x03\x02\x02\x020\u0185\x03\x02\x02\x022\u0188\x03\x02\x02\x02" +
		"4\u018A\x03\x02\x02\x026\u018C\x03\x02\x02\x028\u01A3\x03\x02\x02\x02" +
		":\u01A5\x03\x02\x02\x02<\u01A7\x03\x02\x02\x02>\u01A9\x03\x02\x02\x02" +
		"@\u02D4\x03\x02\x02\x02B\u02D6\x03\x02\x02\x02D\u02D8\x03\x02\x02\x02" +
		"F\u02DA\x03\x02\x02\x02H\u02E2\x03\x02\x02\x02J\u02E4\x03\x02\x02\x02" +
		"L\u02E9\x03\x02\x02\x02N\u02F0\x03\x02\x02\x02P\u02FA\x03\x02\x02\x02" +
		"RT\x05\x04\x03\x02SR\x03\x02\x02\x02TW\x03\x02\x02\x02US\x03\x02\x02\x02" +
		"UV\x03\x02\x02\x02V\x03\x03\x02\x02\x02WU\x03\x02\x02\x02XY\x05\b\x05" +
		"\x02YZ\x07S\x02\x02Zl\x03\x02\x02\x02[\\\x05\x06\x04\x02\\]\x07S\x02\x02" +
		"]l\x03\x02\x02\x02^_\x05\x1A\x0E\x02_`\x07S\x02\x02`l\x03\x02\x02\x02" +
		"ab\x05\x16\f\x02bc\x07S\x02\x02cl\x03\x02\x02\x02de\x05\x14\v\x02ef\x07" +
		"S\x02\x02fl\x03\x02\x02\x02gh\x05\x0E\b\x02hi\x07S\x02\x02il\x03\x02\x02" +
		"\x02jl\x07S\x02\x02kX\x03\x02\x02\x02k[\x03\x02\x02\x02k^\x03\x02\x02" +
		"\x02ka\x03\x02\x02\x02kd\x03\x02\x02\x02kg\x03\x02\x02\x02kj\x03\x02\x02" +
		"\x02l\x05\x03\x02\x02\x02mn\x07\x04\x02\x02nq\t\x02\x02\x02op\x07\x07" +
		"\x02\x02pr\x07\b\x02\x02qo\x03\x02\x02\x02qr\x03\x02\x02\x02rs\x03\x02" +
		"\x02\x02st\x05P)\x02t\x07\x03\x02\x02\x02uv\x07I\x02\x02vz\t\x02\x02\x02" +
		"wx\x07\x07\x02\x02xy\x07\t\x02\x02y{\x07\b\x02\x02zw\x03\x02\x02\x02z" +
		"{\x03\x02\x02\x02{|\x03\x02\x02\x02|\x80\x05P)\x02}\x7F\x05\n\x06\x02" +
		"~}\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81" +
		"\x03\x02\x02\x02\x81\t\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x83\x85" +
		"\x07\n\x02\x02\x84\x83\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x86" +
		"\x03\x02\x02\x02\x86\x87\x07\v\x02\x02\x87\x89\x07\f\x02\x02\x88\x8A\x07" +
		"M\x02\x02\x89\x88\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8B\x03" +
		"\x02\x02\x02\x8B\x9B\x05D#\x02\x8C\x8E\x07\n\x02\x02\x8D\x8C\x03\x02\x02" +
		"\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x91\x07\r\x02" +
		"\x02\x90\x92\x07M\x02\x02\x91\x90\x03\x02\x02\x02\x91\x92\x03\x02\x02" +
		"\x02\x92\x93\x03\x02\x02\x02\x93\x9B\x05F$\x02\x94\x95\x07\x1B\x02\x02" +
		"\x95\x96\x07M\x02\x02\x96\x9B\x054\x1B\x02\x97\x98\x07\x1A\x02\x02\x98" +
		"\x99\x07M\x02\x02\x99\x9B\x05\f\x07\x02\x9A\x84\x03\x02\x02\x02\x9A\x8D" +
		"\x03\x02\x02\x02\x9A\x94\x03\x02\x02\x02\x9A\x97\x03\x02\x02\x02\x9B\v" +
		"\x03\x02\x02\x02\x9C\x9D\x07Z\x02\x02\x9D\r\x03\x02\x02\x02\x9E\xA4\x07" +
		"\f\x02\x02\x9F\xA0\x05\x10\t\x02\xA0\xA1\x07R\x02\x02\xA1\xA3\x03\x02" +
		"\x02\x02\xA2\x9F\x03\x02\x02\x02\xA3\xA6\x03\x02\x02\x02\xA4\xA2\x03\x02" +
		"\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA7\x03\x02\x02\x02\xA6\xA4\x03\x02" +
		"\x02\x02\xA7\xA8\x05\x10\t\x02\xA8\x0F\x03\x02\x02\x02\xA9\xAB\x07Q\x02" +
		"\x02\xAA\xA9\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02\xAC\xAA\x03\x02\x02" +
		"\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAF\x03\x02\x02\x02\xAE\xAC\x03\x02\x02" +
		"\x02\xAF\xB0\x07W\x02\x02\xB0\xB9\x07M\x02\x02\xB1\xBA\x05\x12\n\x02\xB2" +
		"\xB4\x07Q\x02\x02\xB3\xB2\x03\x02\x02\x02\xB4\xB7\x03\x02\x02\x02\xB5" +
		"\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB8\x03\x02\x02\x02\xB7" +
		"\xB5\x03\x02\x02\x02\xB8\xBA\x07W\x02\x02\xB9\xB1\x03\x02\x02\x02\xB9" +
		"\xB5\x03\x02\x02\x02\xBA\x11\x03\x02\x02\x02\xBB\xBC\x05J&\x02\xBC\x13" +
		"\x03\x02\x02\x02\xBD\xBE\x07\x0E\x02\x02\xBE\xBF\x05P)\x02\xBF\x15\x03" +
		"\x02\x02\x02\xC0\xC2\x07\x04\x02\x02\xC1\xC3\x07\x0F\x02\x02\xC2\xC1\x03" +
		"\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC7\x07" +
		"\x10\x02\x02\xC5\xC6\x07\x07\x02\x02\xC6\xC8\x07\b\x02\x02\xC7\xC5\x03" +
		"\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCE\x05" +
		"\x18\r\x02\xCA\xCB\x07R\x02\x02\xCB\xCD\x05\x18\r\x02\xCC\xCA\x03\x02" +
		"\x02\x02\xCD\xD0\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02" +
		"\x02\x02\xCF\xD2\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD3\t\x03" +
		"\x02\x02\xD2\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\x17\x03\x02" +
		"\x02\x02\xD4\xD5\x05P)\x02\xD5\x19\x03\x02\x02\x02\xD6\xD8\x07I\x02\x02" +
		"\xD7\xD9\x07\x0F\x02\x02\xD8\xD7\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02" +
		"\xD9\xDA\x03\x02\x02\x02\xDA\xDE\x07\x10\x02\x02\xDB\xDC\x07\x07\x02\x02" +
		"\xDC\xDD\x07\t\x02\x02\xDD\xDF\x07\b\x02\x02\xDE\xDB\x03\x02\x02\x02\xDE" +
		"\xDF\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x05\x1C\x0F\x02\xE1" +
		"\xE3\x07T\x02\x02\xE2\xE4\x05\x1E\x10\x02\xE3\xE2\x03\x02\x02\x02\xE3" +
		"\xE4\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\x07U\x02\x02\xE6" +
		"\xE7\x05L\'\x02\xE7\x1B\x03\x02\x02\x02\xE8\xE9\x05P)\x02\xE9\x1D\x03" +
		"\x02\x02\x02\xEA\xEB\x05 \x11\x02\xEB\xEC\x07R\x02\x02\xEC\xEE\x03\x02" +
		"\x02\x02\xED\xEA\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02" +
		"\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF2\x03\x02\x02\x02\xF1\xEF\x03\x02" +
		"\x02\x02\xF2\xF3\x05 \x11\x02\xF3\x1F\x03\x02\x02\x02\xF4\xF5\x05\"\x12" +
		"\x02\xF5\xF6\x05(\x15\x02\xF6\u015E\x03\x02\x02\x02\xF7\xF9\x07\x13\x02" +
		"\x02\xF8\xFA\x05$\x13\x02\xF9\xF8\x03\x02\x02\x02\xF9\xFA\x03\x02\x02" +
		"\x02\xFA\xFC\x03\x02\x02\x02\xFB\xF7\x03\x02\x02\x02\xFB\xFC\x03\x02\x02" +
		"\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x07\x14\x02\x02\xFE\xFF\x07\x15\x02" +
		"\x02\xFF\u0105\x07T\x02\x02\u0100\u0101\x05> \x02\u0101\u0102\x07R\x02" +
		"\x02\u0102\u0104\x03\x02\x02\x02\u0103\u0100\x03\x02\x02\x02\u0104\u0107" +
		"\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02" +
		"\u0106\u0108\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02\u0108\u0109\x05" +
		"> \x02\u0109\u010A\x07U\x02\x02\u010A\u015E\x03\x02\x02\x02\u010B\u010D" +
		"\t\x04\x02\x02\u010C\u010E\x05$\x13\x02\u010D\u010C\x03\x02\x02\x02\u010D" +
		"\u010E\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0115\x07T\x02" +
		"\x02\u0110\u0111\x05> \x02\u0111\u0112\x07R\x02\x02\u0112\u0114\x03\x02" +
		"\x02\x02\u0113\u0110\x03\x02\x02\x02\u0114\u0117\x03\x02\x02\x02\u0115" +
		"\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0118\x03\x02" +
		"\x02\x02\u0117\u0115\x03\x02\x02\x02\u0118\u0119\x05> \x02\u0119\u011A" +
		"\x07U\x02\x02\u011A\u015E\x03\x02\x02\x02\u011B\u011C\x07\x18\x02\x02" +
		"\u011C\u011E\t\x04\x02\x02\u011D\u011F\x05$\x13\x02\u011E\u011D\x03\x02" +
		"\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120" +
		"\u0126\x07T\x02\x02\u0121\u0122\x05> \x02\u0122\u0123\x07R\x02\x02\u0123" +
		"\u0125\x03\x02\x02\x02\u0124\u0121\x03\x02\x02\x02\u0125\u0128\x03\x02" +
		"\x02\x02\u0126\u0124\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127" +
		"\u0129\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0129\u012A\x05> \x02" +
		"\u012A\u012B\x07U\x02\x02\u012B\u015E\x03\x02\x02\x02\u012C\u012E\x07" +
		"\x13\x02\x02\u012D\u012F\x05$\x13\x02\u012E\u012D\x03\x02\x02\x02\u012E" +
		"\u012F\x03\x02\x02\x02\u012F\u0131\x03\x02\x02\x02\u0130\u012C\x03\x02" +
		"\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132" +
		"\u0134\x07\x17\x02\x02\u0133\u0135\t\x04\x02\x02\u0134\u0133\x03\x02\x02" +
		"\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0137\x03\x02\x02\x02\u0136\u0138" +
		"\x05&\x14\x02\u0137\u0136\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02" +
		"\u0138\u0139\x03\x02\x02\x02\u0139\u013F\x07T\x02\x02\u013A\u013B\x05" +
		"> \x02\u013B\u013C\x07R\x02\x02\u013C\u013E\x03\x02\x02\x02\u013D\u013A" +
		"\x03\x02\x02\x02\u013E\u0141\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02" +
		"\u013F\u0140\x03\x02\x02\x02\u0140\u0142\x03\x02\x02\x02\u0141\u013F\x03" +
		"\x02\x02\x02\u0142\u0143\x05> \x02\u0143\u0144\x07U\x02\x02\u0144\u015E" +
		"\x03\x02\x02\x02\u0145\u0147\x07\x13\x02\x02\u0146\u0148\x05$\x13\x02" +
		"\u0147\u0146\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014A\x03" +
		"\x02\x02\x02\u0149\u0145\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A" +
		"\u014B\x03\x02\x02\x02\u014B\u014C\x07\x19\x02\x02\u014C\u014E\x07\x15" +
		"\x02\x02\u014D\u014F\x05&\x14\x02\u014E\u014D\x03\x02\x02\x02\u014E\u014F" +
		"\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0156\x07T\x02\x02" +
		"\u0151\u0152\x05> \x02\u0152\u0153\x07R\x02\x02\u0153\u0155\x03\x02\x02" +
		"\x02\u0154\u0151\x03\x02\x02\x02\u0155\u0158\x03\x02\x02\x02\u0156\u0154" +
		"\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0159\x03\x02\x02\x02" +
		"\u0158\u0156\x03\x02\x02\x02\u0159\u015A\x05> \x02\u015A\u015B\x07U\x02" +
		"\x02\u015B\u015C\x056\x1C\x02\u015C\u015E\x03\x02\x02\x02\u015D\xF4\x03" +
		"\x02\x02\x02\u015D\xFB\x03\x02\x02\x02\u015D\u010B\x03\x02\x02\x02\u015D" +
		"\u011B\x03\x02\x02\x02\u015D\u0130\x03\x02\x02\x02\u015D\u0149\x03\x02" +
		"\x02\x02\u015E!\x03\x02\x02\x02\u015F\u0160\x05P)\x02\u0160#\x03\x02\x02" +
		"\x02\u0161\u0162\x05P)\x02\u0162%\x03\x02\x02\x02\u0163\u0164\x05P)\x02" +
		"\u0164\'\x03\x02\x02\x02\u0165\u0168\x05@!\x02\u0166\u0169\x05.\x18\x02" +
		"\u0167\u0169\x050\x19\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0167\x03" +
		"\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016C\x03\x02\x02\x02\u016A" +
		"\u016B\x07\n\x02\x02\u016B\u016D\x05,\x17\x02\u016C\u016A\x03\x02\x02" +
		"\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016F\x03\x02\x02\x02\u016E\u0170" +
		"\x05*\x16\x02\u016F\u016E\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02" +
		"\u0170\u0179\x03\x02\x02\x02\u0171\u0173\x07\x17\x02\x02\u0172\u0174\x07" +
		"\x15\x02\x02\u0173\u0172\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174" +
		"\u017A\x03\x02\x02\x02\u0175\u0177\x07\x14\x02\x02\u0176\u0175\x03\x02" +
		"\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178" +
		"\u017A\x07\x15\x02\x02\u0179\u0171\x03\x02\x02\x02\u0179\u0176\x03\x02" +
		"\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017D\x03\x02\x02\x02\u017B" +
		"\u017C\x07\x1A\x02\x02\u017C\u017E\x052\x1A\x02\u017D\u017B\x03\x02\x02" +
		"\x02\u017D\u017E\x03\x02\x02\x02\u017E)\x03\x02\x02\x02\u017F\u0180\x07" +
		"\x1B\x02\x02\u0180+\x03\x02\x02\x02\u0181\u0182\x05J&\x02\u0182-\x03\x02" +
		"\x02\x02\u0183\u0184\x07\x1C\x02\x02\u0184/\x03\x02\x02\x02\u0185\u0186" +
		"\x07\t\x02\x02\u0186\u0187\x07\x1C\x02\x02\u01871\x03\x02\x02\x02\u0188" +
		"\u0189\x07Z\x02\x02\u01893\x03\x02\x02\x02\u018A\u018B\x07X\x02\x02\u018B" +
		"5\x03\x02\x02\x02\u018C\u018D\x07\x1E\x02\x02\u018D\u018E\x05<\x1F\x02" +
		"\u018E\u0194\x07T\x02\x02\u018F\u0190\x05> \x02\u0190\u0191\x07R\x02\x02" +
		"\u0191\u0193\x03\x02\x02\x02\u0192\u018F\x03\x02\x02\x02\u0193\u0196\x03" +
		"\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195" +
		"\u0197\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0197\u0198\x05> \x02" +
		"\u0198\u019C\x07U\x02\x02\u0199\u019A\x07\x1F\x02\x02\u019A\u019B\x07" +
		" \x02\x02\u019B\u019D\x058\x1D\x02\u019C\u0199\x03\x02\x02\x02\u019C\u019D" +
		"\x03\x02\x02\x02\u019D\u01A1\x03\x02\x02\x02\u019E\u019F\x07\x1F\x02\x02" +
		"\u019F\u01A0\x07!\x02\x02\u01A0\u01A2\x05:\x1E\x02\u01A1\u019E\x03\x02" +
		"\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A27\x03\x02\x02\x02\u01A3\u01A4" +
		"\x05H%\x02\u01A49\x03\x02\x02\x02\u01A5\u01A6\x05H%\x02\u01A6;\x03\x02" +
		"\x02\x02\u01A7\u01A8\x05P)\x02\u01A8=\x03\x02\x02\x02\u01A9\u01AB\x05" +
		"P)\x02\u01AA\u01AC\t\x05\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC" +
		"\x03\x02\x02\x02\u01AC?\x03\x02\x02\x02\u01AD\u01B1\x07$\x02\x02\u01AE" +
		"\u01AF\x07T\x02\x02\u01AF\u01B0\x07X\x02\x02\u01B0\u01B2\x07U\x02\x02" +
		"\u01B1\u01AE\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u02D5\x03" +
		"\x02\x02\x02\u01B3\u01B7\x07%\x02\x02\u01B4\u01B5\x07T\x02\x02\u01B5\u01B6" +
		"\x07X\x02\x02\u01B6\u01B8\x07U\x02\x02\u01B7\u01B4\x03\x02\x02\x02\u01B7" +
		"\u01B8\x03\x02\x02\x02\u01B8\u01BA\x03\x02\x02\x02\u01B9\u01BB\x07&\x02" +
		"\x02\u01BA\u01B9\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BD" +
		"\x03\x02\x02\x02\u01BC\u01BE\x07(\x02\x02\u01BD\u01BC\x03\x02\x02\x02" +
		"\u01BD\u01BE\x03\x02\x02\x02\u01BE\u02D5\x03\x02\x02\x02\u01BF\u01C3\x07" +
		")\x02\x02\u01C0\u01C1\x07T\x02\x02\u01C1\u01C2\x07X\x02\x02\u01C2\u01C4" +
		"\x07U\x02\x02\u01C3\u01C0\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02" +
		"\u01C4\u01C6\x03\x02\x02\x02\u01C5\u01C7\x07&\x02\x02\u01C6\u01C5\x03" +
		"\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C9\x03\x02\x02\x02\u01C8" +
		"\u01CA\x07(\x02\x02\u01C9\u01C8\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02" +
		"\x02\u01CA\u02D5\x03\x02\x02\x02\u01CB\u01CF\x07*\x02\x02\u01CC\u01CD" +
		"\x07T\x02\x02\u01CD\u01CE\x07X\x02\x02\u01CE\u01D0\x07U\x02\x02\u01CF" +
		"\u01CC\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D2\x03\x02" +
		"\x02\x02\u01D1\u01D3\x07&\x02\x02\u01D2\u01D1\x03\x02\x02\x02\u01D2\u01D3" +
		"\x03\x02\x02\x02\u01D3\u01D5\x03\x02\x02\x02\u01D4\u01D6\x07(\x02\x02" +
		"\u01D5\u01D4\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u02D5\x03" +
		"\x02\x02\x02\u01D7\u01DB\x07+\x02\x02\u01D8\u01D9\x07T\x02\x02\u01D9\u01DA" +
		"\x07X\x02\x02\u01DA\u01DC\x07U\x02\x02\u01DB\u01D8\x03\x02\x02\x02\u01DB" +
		"\u01DC\x03\x02\x02\x02\u01DC\u01DE\x03\x02\x02\x02\u01DD\u01DF\x07&\x02" +
		"\x02\u01DE\u01DD\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E1" +
		"\x03\x02\x02\x02\u01E0\u01E2\x07(\x02\x02\u01E1\u01E0\x03\x02\x02\x02" +
		"\u01E1\u01E2\x03\x02\x02\x02\u01E2\u02D5\x03\x02\x02\x02\u01E3\u01E7\x07" +
		",\x02\x02\u01E4\u01E5\x07T\x02\x02\u01E5\u01E6\x07X\x02\x02\u01E6\u01E8" +
		"\x07U\x02\x02\u01E7\u01E4\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02" +
		"\u01E8\u01EA\x03\x02\x02\x02\u01E9\u01EB\x07&\x02\x02\u01EA\u01E9\x03" +
		"\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01ED\x03\x02\x02\x02\u01EC" +
		"\u01EE\x07(\x02\x02\u01ED\u01EC\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02" +
		"\x02\u01EE\u02D5\x03\x02\x02\x02\u01EF\u01F3\x07-\x02\x02\u01F0\u01F1" +
		"\x07T\x02\x02\u01F1\u01F2\x07X\x02\x02\u01F2\u01F4\x07U\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u01F3\u01F0\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01F6" +
		"\x03\x02\x02\x02\u01F5\u01F7\x07&\x02\x02\u01F6\u01F5\x03\x02\x02\x02" +
		"\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F9\x03\x02\x02\x02\u01F8\u01FA\x07" +
		"(\x02\x02\u01F9\u01F8\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA" +
		"\u02D5\x03\x02\x02\x02\u01FB\u0201\x07.\x02\x02\u01FC\u01FD\x07T\x02\x02" +
		"\u01FD\u01FE\x07X\x02\x02\u01FE\u01FF\x07R\x02\x02\u01FF\u0200\x07X\x02" +
		"\x02\u0200\u0202\x07U\x02\x02\u0201\u01FC\x03\x02\x02\x02\u0201\u0202" +
		"\x03\x02\x02\x02\u0202\u0204\x03\x02\x02\x02\u0203\u0205\x07&\x02\x02" +
		"\u0204\u0203\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0207\x03" +
		"\x02\x02\x02\u0206\u0208\x07(\x02\x02\u0207\u0206\x03\x02\x02\x02\u0207" +
		"\u0208\x03\x02\x02\x02\u0208\u02D5\x03\x02\x02\x02\u0209\u020F\x07/\x02" +
		"\x02\u020A\u020B\x07T\x02\x02\u020B\u020C\x07X\x02\x02\u020C\u020D\x07" +
		"R\x02\x02\u020D\u020E\x07X\x02\x02\u020E\u0210\x07U\x02\x02\u020F\u020A" +
		"\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0212\x03\x02\x02\x02" +
		"\u0211\u0213\x07&\x02\x02\u0212\u0211\x03\x02\x02\x02\u0212\u0213\x03" +
		"\x02\x02\x02\u0213\u0215\x03\x02\x02\x02\u0214\u0216\x07(\x02\x02\u0215" +
		"\u0214\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u02D5\x03\x02" +
		"\x02\x02\u0217\u021D\x070\x02\x02\u0218\u0219\x07T\x02\x02\u0219\u021A" +
		"\x07X\x02\x02\u021A\u021B\x07R\x02\x02\u021B\u021C\x07X\x02\x02\u021C" +
		"\u021E\x07U\x02\x02\u021D\u0218\x03\x02\x02\x02\u021D\u021E\x03\x02\x02" +
		"\x02\u021E\u0220\x03\x02\x02\x02\u021F\u0221\x07&\x02\x02\u0220\u021F" +
		"\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0223\x03\x02\x02\x02" +
		"\u0222\u0224\x07(\x02\x02\u0223\u0222\x03\x02\x02\x02\u0223\u0224\x03" +
		"\x02\x02\x02\u0224\u02D5\x03\x02\x02\x02\u0225\u022D\x071\x02\x02\u0226" +
		"\u0227\x07T\x02\x02\u0227\u022A\x07X\x02\x02\u0228\u0229\x07R\x02\x02" +
		"\u0229\u022B\x07X\x02\x02\u022A\u0228\x03\x02\x02\x02\u022A\u022B\x03" +
		"\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022E\x07U\x02\x02\u022D" +
		"\u0226\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E\u0230\x03\x02" +
		"\x02\x02\u022F\u0231\x07&\x02\x02\u0230\u022F\x03\x02\x02\x02\u0230\u0231" +
		"\x03\x02\x02\x02\u0231\u0233\x03\x02\x02\x02\u0232\u0234\x07(\x02\x02" +
		"\u0233\u0232\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u02D5\x03" +
		"\x02\x02\x02\u0235\u023D\x072\x02\x02\u0236\u0237\x07T\x02\x02\u0237\u023A" +
		"\x07X\x02\x02\u0238\u0239\x07R\x02\x02\u0239\u023B\x07X\x02\x02\u023A" +
		"\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023C\x03\x02" +
		"\x02\x02\u023C\u023E\x07U\x02\x02\u023D\u0236\x03\x02\x02\x02\u023D\u023E" +
		"\x03\x02\x02\x02\u023E\u0240\x03\x02\x02\x02\u023F\u0241\x07&\x02\x02" +
		"\u0240\u023F\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241\u0243\x03" +
		"\x02\x02\x02\u0242\u0244\x07(\x02\x02\u0243\u0242\x03\x02\x02\x02\u0243" +
		"\u0244\x03\x02\x02\x02\u0244\u02D5\x03\x02\x02\x02\u0245\u02D5\t\x06\x02" +
		"\x02\u0246\u02D5\x075\x02\x02\u0247\u02D5\x076\x02\x02\u0248\u02D5\x07" +
		"7\x02\x02\u0249\u02D5\x078\x02\x02\u024A\u02D5\x079\x02\x02\u024B\u024F" +
		"\x07:\x02\x02\u024C\u024D\x07T\x02\x02\u024D\u024E\x07X\x02\x02\u024E" +
		"\u0250\x07U\x02\x02\u024F\u024C\x03\x02\x02\x02\u024F\u0250\x03\x02\x02" +
		"\x02\u0250\u0254\x03\x02\x02\x02\u0251\u0252\x07\v\x02\x02\u0252\u0253" +
		"\x07\f\x02\x02\u0253\u0255\x05D#\x02\u0254\u0251\x03\x02\x02\x02\u0254" +
		"\u0255\x03\x02\x02\x02\u0255\u0258\x03\x02\x02\x02\u0256\u0257\x07\r\x02" +
		"\x02\u0257\u0259\x05F$\x02\u0258\u0256\x03\x02\x02\x02\u0258\u0259\x03" +
		"\x02\x02\x02\u0259\u02D5\x03\x02\x02\x02\u025A\u025B\x07;\x02\x02\u025B" +
		"\u025C\x07T\x02\x02\u025C\u025D\x07X\x02\x02\u025D\u0261\x07U\x02\x02" +
		"\u025E\u025F\x07\v\x02\x02\u025F\u0260\x07\f\x02\x02\u0260\u0262\x05D" +
		"#\x02\u0261\u025E\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262\u0265" +
		"\x03\x02\x02\x02\u0263\u0264\x07\r\x02\x02\u0264\u0266\x05F$\x02\u0265" +
		"\u0263\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266\u02D5\x03\x02" +
		"\x02\x02\u0267\u026B\x07\'\x02\x02\u0268\u0269\x07T\x02\x02\u0269\u026A" +
		"\x07X\x02\x02\u026A\u026C\x07U\x02\x02\u026B\u0268\x03\x02\x02\x02\u026B" +
		"\u026C\x03\x02\x02\x02\u026C\u02D5\x03\x02\x02\x02\u026D\u026E\x07<\x02" +
		"\x02\u026E\u026F\x07T\x02\x02\u026F\u0270\x07X\x02\x02\u0270\u02D5\x07" +
		"U\x02\x02\u0271\u02D5\x07=\x02\x02\u0272\u02D5\x07>\x02\x02\u0273\u02D5" +
		"\x07?\x02\x02\u0274\u02D5\x07@\x02\x02\u0275\u02D5\x07A\x02\x02\u0276" +
		"\u0278\x07B\x02\x02\u0277\u0279\x07\'\x02\x02\u0278\u0277\x03\x02\x02" +
		"\x02\u0278\u0279\x03\x02\x02\x02\u0279\u027D\x03\x02\x02\x02\u027A\u027B" +
		"\x07\v\x02\x02\u027B\u027C\x07\f\x02\x02\u027C\u027E\x05D#\x02\u027D\u027A" +
		"\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E\u0281\x03\x02\x02\x02" +
		"\u027F\u0280\x07\r\x02\x02\u0280\u0282\x05F$\x02\u0281\u027F\x03\x02\x02" +
		"\x02\u0281\u0282\x03\x02\x02\x02\u0282\u02D5\x03\x02\x02\x02\u0283\u0285" +
		"\x07C\x02\x02\u0284\u0286\x07\'\x02\x02\u0285\u0284\x03\x02\x02\x02\u0285" +
		"\u0286\x03\x02\x02\x02\u0286\u028A\x03\x02\x02\x02\u0287\u0288\x07\v\x02" +
		"\x02\u0288\u0289\x07\f\x02\x02\u0289\u028B\x05D#\x02\u028A\u0287\x03\x02" +
		"\x02\x02\u028A\u028B\x03\x02\x02\x02\u028B\u028E\x03\x02\x02\x02\u028C" +
		"\u028D\x07\r\x02\x02\u028D\u028F\x05F$\x02\u028E\u028C\x03\x02\x02\x02" +
		"\u028E\u028F\x03\x02\x02\x02\u028F\u02D5\x03\x02\x02\x02\u0290\u0292\x07" +
		"D\x02\x02\u0291\u0293\x07\'\x02\x02\u0292\u0291\x03\x02\x02\x02\u0292" +
		"\u0293\x03\x02\x02\x02\u0293\u0297\x03\x02\x02\x02\u0294\u0295\x07\v\x02" +
		"\x02\u0295\u0296\x07\f\x02\x02\u0296\u0298\x05D#\x02\u0297\u0294\x03\x02" +
		"\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298\u029B\x03\x02\x02\x02\u0299" +
		"\u029A\x07\r\x02\x02\u029A\u029C\x05F$\x02\u029B\u0299\x03\x02\x02\x02" +
		"\u029B\u029C\x03\x02\x02\x02\u029C\u02D5\x03\x02\x02\x02\u029D\u029F\x07" +
		"E\x02\x02\u029E\u02A0\x07\'\x02\x02\u029F\u029E\x03\x02\x02\x02\u029F" +
		"\u02A0\x03\x02\x02\x02\u02A0\u02A4\x03\x02\x02\x02\u02A1\u02A2\x07\v\x02" +
		"\x02\u02A2\u02A3\x07\f\x02\x02\u02A3\u02A5\x05D#\x02\u02A4\u02A1\x03\x02" +
		"\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5\u02A8\x03\x02\x02\x02\u02A6" +
		"\u02A7\x07\r\x02\x02\u02A7\u02A9\x05F$\x02\u02A8\u02A6\x03\x02\x02\x02" +
		"\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02D5\x03\x02\x02\x02\u02AA\u02AB\x07" +
		"F\x02\x02\u02AB\u02B1\x07T\x02\x02\u02AC\u02AD\x05B\"\x02\u02AD\u02AE" +
		"\x07R\x02\x02\u02AE\u02B0\x03\x02\x02\x02\u02AF\u02AC\x03\x02\x02\x02" +
		"\u02B0\u02B3\x03\x02\x02\x02\u02B1\u02AF\x03\x02\x02\x02\u02B1\u02B2\x03" +
		"\x02\x02\x02\u02B2\u02B4\x03\x02\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B4" +
		"\u02B5\x05B\"\x02\u02B5\u02B9\x07U\x02\x02\u02B6\u02B7\x07\v\x02\x02\u02B7" +
		"\u02B8\x07\f\x02\x02\u02B8\u02BA\x05D#\x02\u02B9\u02B6\x03\x02\x02\x02" +
		"\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BD\x03\x02\x02\x02\u02BB\u02BC\x07" +
		"\r\x02\x02\u02BC\u02BE\x05F$\x02\u02BD\u02BB\x03\x02\x02\x02\u02BD\u02BE" +
		"\x03\x02\x02\x02\u02BE\u02D5\x03\x02\x02\x02\u02BF\u02C0\x07\f\x02\x02" +
		"\u02C0\u02C6\x07T\x02\x02\u02C1\u02C2\x05B\"\x02\u02C2\u02C3\x07R\x02" +
		"\x02\u02C3\u02C5\x03\x02\x02\x02\u02C4\u02C1\x03\x02\x02\x02\u02C5\u02C8" +
		"\x03\x02\x02\x02\u02C6\u02C4\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02" +
		"\u02C7\u02C9\x03\x02\x02\x02\u02C8\u02C6\x03\x02\x02\x02\u02C9\u02CA\x05" +
		"B\"\x02\u02CA\u02CE\x07U\x02\x02\u02CB\u02CC\x07\v\x02\x02\u02CC\u02CD" +
		"\x07\f\x02\x02\u02CD\u02CF\x05D#\x02\u02CE\u02CB\x03\x02\x02\x02\u02CE" +
		"\u02CF\x03\x02\x02\x02\u02CF\u02D2\x03\x02\x02\x02\u02D0\u02D1\x07\r\x02" +
		"\x02\u02D1\u02D3\x05F$\x02\u02D2\u02D0\x03\x02\x02\x02\u02D2\u02D3\x03" +
		"\x02\x02\x02\u02D3\u02D5\x03\x02\x02\x02\u02D4\u01AD\x03\x02\x02\x02\u02D4" +
		"\u01B3\x03\x02\x02\x02\u02D4\u01BF\x03\x02\x02\x02\u02D4\u01CB\x03\x02" +
		"\x02\x02\u02D4\u01D7\x03\x02\x02\x02\u02D4\u01E3\x03\x02\x02\x02\u02D4" +
		"\u01EF\x03\x02\x02\x02\u02D4\u01FB\x03\x02\x02\x02\u02D4\u0209\x03\x02" +
		"\x02\x02\u02D4\u0217\x03\x02\x02\x02\u02D4\u0225\x03\x02\x02\x02\u02D4" +
		"\u0235\x03\x02\x02\x02\u02D4\u0245\x03\x02\x02\x02\u02D4\u0246\x03\x02" +
		"\x02\x02\u02D4\u0247\x03\x02\x02\x02\u02D4\u0248\x03\x02\x02\x02\u02D4" +
		"\u0249\x03\x02\x02\x02\u02D4\u024A\x03\x02\x02\x02\u02D4\u024B\x03\x02" +
		"\x02\x02\u02D4\u025A\x03\x02\x02\x02\u02D4\u0267\x03\x02\x02\x02\u02D4" +
		"\u026D\x03\x02\x02\x02\u02D4\u0271\x03\x02\x02\x02\u02D4\u0272\x03\x02" +
		"\x02\x02\u02D4\u0273\x03\x02\x02\x02\u02D4\u0274\x03\x02\x02\x02\u02D4" +
		"\u0275\x03\x02\x02\x02\u02D4\u0276\x03\x02\x02\x02\u02D4\u0283\x03\x02" +
		"\x02\x02\u02D4\u0290\x03\x02\x02\x02\u02D4\u029D\x03\x02\x02\x02\u02D4" +
		"\u02AA\x03\x02\x02\x02\u02D4\u02BF\x03\x02\x02\x02\u02D5A\x03\x02\x02" +
		"\x02\u02D6\u02D7\x07Z\x02\x02\u02D7C\x03\x02\x02\x02\u02D8\u02D9\x05P" +
		")\x02\u02D9E\x03\x02\x02\x02\u02DA\u02DB\x05P)\x02\u02DBG\x03\x02\x02" +
		"\x02\u02DC\u02E3\x07\x11\x02\x02\u02DD\u02E3\x07\x12\x02\x02\u02DE\u02DF" +
		"\x07\f\x02\x02\u02DF\u02E3\x07\x1C\x02\x02\u02E0\u02E1\x07G\x02\x02\u02E1" +
		"\u02E3\x07H\x02\x02\u02E2\u02DC\x03\x02\x02\x02\u02E2\u02DD\x03\x02\x02" +
		"\x02\u02E2\u02DE\x03\x02\x02\x02\u02E2\u02E0\x03\x02\x02\x02\u02E3I\x03" +
		"\x02\x02\x02\u02E4\u02E5\t\x07\x02\x02\u02E5K\x03\x02\x02\x02\u02E6\u02E8" +
		"\x05N(\x02\u02E7\u02E6\x03\x02\x02\x02\u02E8\u02EB\x03\x02\x02\x02\u02E9" +
		"\u02E7\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EAM\x03\x02\x02" +
		"\x02\u02EB\u02E9\x03\x02\x02\x02\u02EC\u02ED\x07W\x02\x02\u02ED\u02EE" +
		"\x07M\x02\x02\u02EE\u02F1\x07W\x02\x02\u02EF\u02F1\x05\n\x06\x02\u02F0" +
		"\u02EC\x03\x02\x02\x02\u02F0\u02EF\x03\x02\x02\x02\u02F1O\x03\x02\x02" +
		"\x02\u02F2\u02FB\x07V\x02\x02\u02F3\u02F4\x07N\x02\x02\u02F4\u02F5\x07" +
		"W\x02\x02\u02F5\u02FB\x07N\x02\x02\u02F6\u02F7\x07O\x02\x02\u02F7\u02F8" +
		"\x07W\x02\x02\u02F8\u02FB\x07O\x02\x02\u02F9\u02FB\x07W\x02\x02\u02FA" +
		"\u02F2\x03\x02\x02\x02\u02FA\u02F3\x03\x02\x02\x02\u02FA\u02F6\x03\x02" +
		"\x02\x02\u02FA\u02F9\x03\x02\x02\x02\u02FBQ\x03\x02\x02\x02uUkqz\x80\x84" +
		"\x89\x8D\x91\x9A\xA4\xAC\xB5\xB9\xC2\xC7\xCE\xD2\xD8\xDE\xE3\xEF\xF9\xFB" +
		"\u0105\u010D\u0115\u011E\u0126\u012E\u0130\u0134\u0137\u013F\u0147\u0149" +
		"\u014E\u0156\u015D\u0168\u016C\u016F\u0173\u0176\u0179\u017D\u0194\u019C" +
		"\u01A1\u01AB\u01B1\u01B7\u01BA\u01BD\u01C3\u01C6\u01C9\u01CF\u01D2\u01D5" +
		"\u01DB\u01DE\u01E1\u01E7\u01EA\u01ED\u01F3\u01F6\u01F9\u0201\u0204\u0207" +
		"\u020F\u0212\u0215\u021D\u0220\u0223\u022A\u022D\u0230\u0233\u023A\u023D" +
		"\u0240\u0243\u024F\u0254\u0258\u0261\u0265\u026B\u0278\u027D\u0281\u0285" +
		"\u028A\u028E\u0292\u0297\u029B\u029F\u02A4\u02A8\u02B1\u02B9\u02BD\u02C6" +
		"\u02CE\u02D2\u02D4\u02E2\u02E9\u02F0\u02FA";
	public static readonly _serializedATN: string = Utils.join(
		[
			SQLParser._serializedATNSegment0,
			SQLParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SQLParser.__ATN) {
			SQLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SQLParser._serializedATN));
		}

		return SQLParser.__ATN;
	}

}

export class ScriptContext extends ParserRuleContext {
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_script; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterScript) {
			listener.enterScript(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitScript) {
			listener.exitScript(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public createSchema(): CreateSchemaContext | undefined {
		return this.tryGetRuleContext(0, CreateSchemaContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(SQLParser.SEMICOLON, 0); }
	public dropSchema(): DropSchemaContext | undefined {
		return this.tryGetRuleContext(0, DropSchemaContext);
	}
	public createTable(): CreateTableContext | undefined {
		return this.tryGetRuleContext(0, CreateTableContext);
	}
	public dropTable(): DropTableContext | undefined {
		return this.tryGetRuleContext(0, DropTableContext);
	}
	public useStmt(): UseStmtContext | undefined {
		return this.tryGetRuleContext(0, UseStmtContext);
	}
	public setStmt(): SetStmtContext | undefined {
		return this.tryGetRuleContext(0, SetStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_stmt; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
}


export class DropSchemaContext extends ParserRuleContext {
	public K_DROP(): TerminalNode { return this.getToken(SQLParser.K_DROP, 0); }
	public idName(): IdNameContext {
		return this.getRuleContext(0, IdNameContext);
	}
	public K_DATABASE(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_DATABASE, 0); }
	public K_SCHEMA(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_SCHEMA, 0); }
	public K_IF(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_IF, 0); }
	public K_EXISTS(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_EXISTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_dropSchema; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterDropSchema) {
			listener.enterDropSchema(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitDropSchema) {
			listener.exitDropSchema(this);
		}
	}
}


export class CreateSchemaContext extends ParserRuleContext {
	public K_CREATE(): TerminalNode { return this.getToken(SQLParser.K_CREATE, 0); }
	public idName(): IdNameContext {
		return this.getRuleContext(0, IdNameContext);
	}
	public K_DATABASE(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_DATABASE, 0); }
	public K_SCHEMA(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_SCHEMA, 0); }
	public K_IF(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_IF, 0); }
	public K_NOT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_NOT, 0); }
	public K_EXISTS(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_EXISTS, 0); }
	public createSpecification(): CreateSpecificationContext[];
	public createSpecification(i: number): CreateSpecificationContext;
	public createSpecification(i?: number): CreateSpecificationContext | CreateSpecificationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CreateSpecificationContext);
		} else {
			return this.getRuleContext(i, CreateSpecificationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_createSchema; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterCreateSchema) {
			listener.enterCreateSchema(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitCreateSchema) {
			listener.exitCreateSchema(this);
		}
	}
}


export class CreateSpecificationContext extends ParserRuleContext {
	public K_CHARACTER(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_CHARACTER, 0); }
	public K_SET(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_SET, 0); }
	public charsetName(): CharsetNameContext | undefined {
		return this.tryGetRuleContext(0, CharsetNameContext);
	}
	public K_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_DEFAULT, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(SQLParser.EQ, 0); }
	public K_COLLATE(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_COLLATE, 0); }
	public collateName(): CollateNameContext | undefined {
		return this.tryGetRuleContext(0, CollateNameContext);
	}
	public K_AUTO_INCREMENT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_AUTO_INCREMENT, 0); }
	public autoIncrementValue(): AutoIncrementValueContext | undefined {
		return this.tryGetRuleContext(0, AutoIncrementValueContext);
	}
	public K_COMMENT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_COMMENT, 0); }
	public tableComment(): TableCommentContext | undefined {
		return this.tryGetRuleContext(0, TableCommentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_createSpecification; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterCreateSpecification) {
			listener.enterCreateSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitCreateSpecification) {
			listener.exitCreateSpecification(this);
		}
	}
}


export class TableCommentContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(SQLParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_tableComment; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTableComment) {
			listener.enterTableComment(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTableComment) {
			listener.exitTableComment(this);
		}
	}
}


export class SetStmtContext extends ParserRuleContext {
	public K_SET(): TerminalNode { return this.getToken(SQLParser.K_SET, 0); }
	public setOption(): SetOptionContext[];
	public setOption(i: number): SetOptionContext;
	public setOption(i?: number): SetOptionContext | SetOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SetOptionContext);
		} else {
			return this.getRuleContext(i, SetOptionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.COMMA);
		} else {
			return this.getToken(SQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_setStmt; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterSetStmt) {
			listener.enterSetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitSetStmt) {
			listener.exitSetStmt(this);
		}
	}
}


export class SetOptionContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.NAME);
		} else {
			return this.getToken(SQLParser.NAME, i);
		}
	}
	public EQ(): TerminalNode { return this.getToken(SQLParser.EQ, 0); }
	public setDefaultValue(): SetDefaultValueContext | undefined {
		return this.tryGetRuleContext(0, SetDefaultValueContext);
	}
	public AT(): TerminalNode[];
	public AT(i: number): TerminalNode;
	public AT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.AT);
		} else {
			return this.getToken(SQLParser.AT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_setOption; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterSetOption) {
			listener.enterSetOption(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitSetOption) {
			listener.exitSetOption(this);
		}
	}
}


export class SetDefaultValueContext extends ParserRuleContext {
	public defaultValue(): DefaultValueContext {
		return this.getRuleContext(0, DefaultValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_setDefaultValue; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterSetDefaultValue) {
			listener.enterSetDefaultValue(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitSetDefaultValue) {
			listener.exitSetDefaultValue(this);
		}
	}
}


export class UseStmtContext extends ParserRuleContext {
	public K_USE(): TerminalNode { return this.getToken(SQLParser.K_USE, 0); }
	public idName(): IdNameContext {
		return this.getRuleContext(0, IdNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_useStmt; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterUseStmt) {
			listener.enterUseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitUseStmt) {
			listener.exitUseStmt(this);
		}
	}
}


export class DropTableContext extends ParserRuleContext {
	public K_DROP(): TerminalNode { return this.getToken(SQLParser.K_DROP, 0); }
	public K_TABLE(): TerminalNode { return this.getToken(SQLParser.K_TABLE, 0); }
	public dropTableName(): DropTableNameContext[];
	public dropTableName(i: number): DropTableNameContext;
	public dropTableName(i?: number): DropTableNameContext | DropTableNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DropTableNameContext);
		} else {
			return this.getRuleContext(i, DropTableNameContext);
		}
	}
	public K_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_TEMPORARY, 0); }
	public K_IF(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_IF, 0); }
	public K_EXISTS(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_EXISTS, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.COMMA);
		} else {
			return this.getToken(SQLParser.COMMA, i);
		}
	}
	public K_RESTRICT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_RESTRICT, 0); }
	public K_CASCADE(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_CASCADE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_dropTable; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterDropTable) {
			listener.enterDropTable(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitDropTable) {
			listener.exitDropTable(this);
		}
	}
}


export class DropTableNameContext extends ParserRuleContext {
	public idName(): IdNameContext {
		return this.getRuleContext(0, IdNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_dropTableName; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterDropTableName) {
			listener.enterDropTableName(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitDropTableName) {
			listener.exitDropTableName(this);
		}
	}
}


export class CreateTableContext extends ParserRuleContext {
	public K_CREATE(): TerminalNode { return this.getToken(SQLParser.K_CREATE, 0); }
	public K_TABLE(): TerminalNode { return this.getToken(SQLParser.K_TABLE, 0); }
	public tableName(): TableNameContext {
		return this.getRuleContext(0, TableNameContext);
	}
	public LPAR(): TerminalNode { return this.getToken(SQLParser.LPAR, 0); }
	public RPAR(): TerminalNode { return this.getToken(SQLParser.RPAR, 0); }
	public tableOptions(): TableOptionsContext {
		return this.getRuleContext(0, TableOptionsContext);
	}
	public K_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_TEMPORARY, 0); }
	public K_IF(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_IF, 0); }
	public K_NOT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_NOT, 0); }
	public K_EXISTS(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_EXISTS, 0); }
	public fieldList(): FieldListContext | undefined {
		return this.tryGetRuleContext(0, FieldListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_createTable; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterCreateTable) {
			listener.enterCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitCreateTable) {
			listener.exitCreateTable(this);
		}
	}
}


export class TableNameContext extends ParserRuleContext {
	public idName(): IdNameContext {
		return this.getRuleContext(0, IdNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_tableName; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTableName) {
			listener.enterTableName(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTableName) {
			listener.exitTableName(this);
		}
	}
}


export class FieldListContext extends ParserRuleContext {
	public createDefinition(): CreateDefinitionContext[];
	public createDefinition(i: number): CreateDefinitionContext;
	public createDefinition(i?: number): CreateDefinitionContext | CreateDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CreateDefinitionContext);
		} else {
			return this.getRuleContext(i, CreateDefinitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.COMMA);
		} else {
			return this.getToken(SQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_fieldList; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterFieldList) {
			listener.enterFieldList(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitFieldList) {
			listener.exitFieldList(this);
		}
	}
}


export class CreateDefinitionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_createDefinition; }
	public copyFrom(ctx: CreateDefinitionContext): void {
		super.copyFrom(ctx);
	}
}
export class FieldStmtContext extends CreateDefinitionContext {
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
	}
	public columnDefinition(): ColumnDefinitionContext {
		return this.getRuleContext(0, ColumnDefinitionContext);
	}
	constructor(ctx: CreateDefinitionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterFieldStmt) {
			listener.enterFieldStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitFieldStmt) {
			listener.exitFieldStmt(this);
		}
	}
}
export class PrimaryKeyStmtContext extends CreateDefinitionContext {
	public K_PRIMARY(): TerminalNode { return this.getToken(SQLParser.K_PRIMARY, 0); }
	public K_KEY(): TerminalNode { return this.getToken(SQLParser.K_KEY, 0); }
	public LPAR(): TerminalNode { return this.getToken(SQLParser.LPAR, 0); }
	public indexColName(): IndexColNameContext[];
	public indexColName(i: number): IndexColNameContext;
	public indexColName(i?: number): IndexColNameContext | IndexColNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IndexColNameContext);
		} else {
			return this.getRuleContext(i, IndexColNameContext);
		}
	}
	public RPAR(): TerminalNode { return this.getToken(SQLParser.RPAR, 0); }
	public K_CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_CONSTRAINT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.COMMA);
		} else {
			return this.getToken(SQLParser.COMMA, i);
		}
	}
	public constraintName(): ConstraintNameContext | undefined {
		return this.tryGetRuleContext(0, ConstraintNameContext);
	}
	constructor(ctx: CreateDefinitionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterPrimaryKeyStmt) {
			listener.enterPrimaryKeyStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitPrimaryKeyStmt) {
			listener.exitPrimaryKeyStmt(this);
		}
	}
}
export class IndexStmtContext extends CreateDefinitionContext {
	public LPAR(): TerminalNode { return this.getToken(SQLParser.LPAR, 0); }
	public indexColName(): IndexColNameContext[];
	public indexColName(i: number): IndexColNameContext;
	public indexColName(i?: number): IndexColNameContext | IndexColNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IndexColNameContext);
		} else {
			return this.getRuleContext(i, IndexColNameContext);
		}
	}
	public RPAR(): TerminalNode { return this.getToken(SQLParser.RPAR, 0); }
	public K_INDEX(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_INDEX, 0); }
	public K_KEY(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_KEY, 0); }
	public constraintName(): ConstraintNameContext | undefined {
		return this.tryGetRuleContext(0, ConstraintNameContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.COMMA);
		} else {
			return this.getToken(SQLParser.COMMA, i);
		}
	}
	constructor(ctx: CreateDefinitionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterIndexStmt) {
			listener.enterIndexStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitIndexStmt) {
			listener.exitIndexStmt(this);
		}
	}
}
export class FulltextStmtContext extends CreateDefinitionContext {
	public K_FULLTEXT(): TerminalNode { return this.getToken(SQLParser.K_FULLTEXT, 0); }
	public LPAR(): TerminalNode { return this.getToken(SQLParser.LPAR, 0); }
	public indexColName(): IndexColNameContext[];
	public indexColName(i: number): IndexColNameContext;
	public indexColName(i?: number): IndexColNameContext | IndexColNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IndexColNameContext);
		} else {
			return this.getRuleContext(i, IndexColNameContext);
		}
	}
	public RPAR(): TerminalNode { return this.getToken(SQLParser.RPAR, 0); }
	public K_INDEX(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_INDEX, 0); }
	public K_KEY(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_KEY, 0); }
	public constraintName(): ConstraintNameContext | undefined {
		return this.tryGetRuleContext(0, ConstraintNameContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.COMMA);
		} else {
			return this.getToken(SQLParser.COMMA, i);
		}
	}
	constructor(ctx: CreateDefinitionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterFulltextStmt) {
			listener.enterFulltextStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitFulltextStmt) {
			listener.exitFulltextStmt(this);
		}
	}
}
export class UniqueStmtContext extends CreateDefinitionContext {
	public K_UNIQUE(): TerminalNode { return this.getToken(SQLParser.K_UNIQUE, 0); }
	public LPAR(): TerminalNode { return this.getToken(SQLParser.LPAR, 0); }
	public indexColName(): IndexColNameContext[];
	public indexColName(i: number): IndexColNameContext;
	public indexColName(i?: number): IndexColNameContext | IndexColNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IndexColNameContext);
		} else {
			return this.getRuleContext(i, IndexColNameContext);
		}
	}
	public RPAR(): TerminalNode { return this.getToken(SQLParser.RPAR, 0); }
	public K_CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_CONSTRAINT, 0); }
	public constraintTable(): ConstraintTableContext | undefined {
		return this.tryGetRuleContext(0, ConstraintTableContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.COMMA);
		} else {
			return this.getToken(SQLParser.COMMA, i);
		}
	}
	public K_INDEX(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_INDEX, 0); }
	public K_KEY(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_KEY, 0); }
	public constraintName(): ConstraintNameContext | undefined {
		return this.tryGetRuleContext(0, ConstraintNameContext);
	}
	constructor(ctx: CreateDefinitionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterUniqueStmt) {
			listener.enterUniqueStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitUniqueStmt) {
			listener.exitUniqueStmt(this);
		}
	}
}
export class ForeignStmtContext extends CreateDefinitionContext {
	public K_FOREIGN(): TerminalNode { return this.getToken(SQLParser.K_FOREIGN, 0); }
	public K_KEY(): TerminalNode { return this.getToken(SQLParser.K_KEY, 0); }
	public LPAR(): TerminalNode { return this.getToken(SQLParser.LPAR, 0); }
	public indexColName(): IndexColNameContext[];
	public indexColName(i: number): IndexColNameContext;
	public indexColName(i?: number): IndexColNameContext | IndexColNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IndexColNameContext);
		} else {
			return this.getRuleContext(i, IndexColNameContext);
		}
	}
	public RPAR(): TerminalNode { return this.getToken(SQLParser.RPAR, 0); }
	public referenceDefinition(): ReferenceDefinitionContext {
		return this.getRuleContext(0, ReferenceDefinitionContext);
	}
	public K_CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_CONSTRAINT, 0); }
	public constraintTable(): ConstraintTableContext | undefined {
		return this.tryGetRuleContext(0, ConstraintTableContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.COMMA);
		} else {
			return this.getToken(SQLParser.COMMA, i);
		}
	}
	public constraintName(): ConstraintNameContext | undefined {
		return this.tryGetRuleContext(0, ConstraintNameContext);
	}
	constructor(ctx: CreateDefinitionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterForeignStmt) {
			listener.enterForeignStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitForeignStmt) {
			listener.exitForeignStmt(this);
		}
	}
}


export class ColumnNameContext extends ParserRuleContext {
	public idName(): IdNameContext {
		return this.getRuleContext(0, IdNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_columnName; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterColumnName) {
			listener.enterColumnName(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitColumnName) {
			listener.exitColumnName(this);
		}
	}
}


export class ConstraintNameContext extends ParserRuleContext {
	public idName(): IdNameContext {
		return this.getRuleContext(0, IdNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_constraintName; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterConstraintName) {
			listener.enterConstraintName(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitConstraintName) {
			listener.exitConstraintName(this);
		}
	}
}


export class ConstraintTableContext extends ParserRuleContext {
	public idName(): IdNameContext {
		return this.getRuleContext(0, IdNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_constraintTable; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterConstraintTable) {
			listener.enterConstraintTable(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitConstraintTable) {
			listener.exitConstraintTable(this);
		}
	}
}


export class ColumnDefinitionContext extends ParserRuleContext {
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public columnNull(): ColumnNullContext | undefined {
		return this.tryGetRuleContext(0, ColumnNullContext);
	}
	public columnNotNull(): ColumnNotNullContext | undefined {
		return this.tryGetRuleContext(0, ColumnNotNullContext);
	}
	public K_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_DEFAULT, 0); }
	public columnDefaultValue(): ColumnDefaultValueContext | undefined {
		return this.tryGetRuleContext(0, ColumnDefaultValueContext);
	}
	public autoIncrement(): AutoIncrementContext | undefined {
		return this.tryGetRuleContext(0, AutoIncrementContext);
	}
	public K_COMMENT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_COMMENT, 0); }
	public fieldComment(): FieldCommentContext | undefined {
		return this.tryGetRuleContext(0, FieldCommentContext);
	}
	public K_UNIQUE(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_UNIQUE, 0); }
	public K_KEY(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_KEY, 0); }
	public K_PRIMARY(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_PRIMARY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_columnDefinition; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterColumnDefinition) {
			listener.enterColumnDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitColumnDefinition) {
			listener.exitColumnDefinition(this);
		}
	}
}


export class AutoIncrementContext extends ParserRuleContext {
	public K_AUTO_INCREMENT(): TerminalNode { return this.getToken(SQLParser.K_AUTO_INCREMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_autoIncrement; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterAutoIncrement) {
			listener.enterAutoIncrement(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitAutoIncrement) {
			listener.exitAutoIncrement(this);
		}
	}
}


export class ColumnDefaultValueContext extends ParserRuleContext {
	public defaultValue(): DefaultValueContext {
		return this.getRuleContext(0, DefaultValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_columnDefaultValue; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterColumnDefaultValue) {
			listener.enterColumnDefaultValue(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitColumnDefaultValue) {
			listener.exitColumnDefaultValue(this);
		}
	}
}


export class ColumnNullContext extends ParserRuleContext {
	public K_NULL(): TerminalNode { return this.getToken(SQLParser.K_NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_columnNull; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterColumnNull) {
			listener.enterColumnNull(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitColumnNull) {
			listener.exitColumnNull(this);
		}
	}
}


export class ColumnNotNullContext extends ParserRuleContext {
	public K_NOT(): TerminalNode { return this.getToken(SQLParser.K_NOT, 0); }
	public K_NULL(): TerminalNode { return this.getToken(SQLParser.K_NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_columnNotNull; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterColumnNotNull) {
			listener.enterColumnNotNull(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitColumnNotNull) {
			listener.exitColumnNotNull(this);
		}
	}
}


export class FieldCommentContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(SQLParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_fieldComment; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterFieldComment) {
			listener.enterFieldComment(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitFieldComment) {
			listener.exitFieldComment(this);
		}
	}
}


export class AutoIncrementValueContext extends ParserRuleContext {
	public INT(): TerminalNode { return this.getToken(SQLParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_autoIncrementValue; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterAutoIncrementValue) {
			listener.enterAutoIncrementValue(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitAutoIncrementValue) {
			listener.exitAutoIncrementValue(this);
		}
	}
}


export class ReferenceDefinitionContext extends ParserRuleContext {
	public K_REFERENCES(): TerminalNode { return this.getToken(SQLParser.K_REFERENCES, 0); }
	public referenceTable(): ReferenceTableContext {
		return this.getRuleContext(0, ReferenceTableContext);
	}
	public LPAR(): TerminalNode { return this.getToken(SQLParser.LPAR, 0); }
	public indexColName(): IndexColNameContext[];
	public indexColName(i: number): IndexColNameContext;
	public indexColName(i?: number): IndexColNameContext | IndexColNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IndexColNameContext);
		} else {
			return this.getRuleContext(i, IndexColNameContext);
		}
	}
	public RPAR(): TerminalNode { return this.getToken(SQLParser.RPAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.COMMA);
		} else {
			return this.getToken(SQLParser.COMMA, i);
		}
	}
	public K_ON(): TerminalNode[];
	public K_ON(i: number): TerminalNode;
	public K_ON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.K_ON);
		} else {
			return this.getToken(SQLParser.K_ON, i);
		}
	}
	public K_DELETE(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_DELETE, 0); }
	public referenceDeleteOption(): ReferenceDeleteOptionContext | undefined {
		return this.tryGetRuleContext(0, ReferenceDeleteOptionContext);
	}
	public K_UPDATE(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_UPDATE, 0); }
	public referenceUpdateOption(): ReferenceUpdateOptionContext | undefined {
		return this.tryGetRuleContext(0, ReferenceUpdateOptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_referenceDefinition; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterReferenceDefinition) {
			listener.enterReferenceDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitReferenceDefinition) {
			listener.exitReferenceDefinition(this);
		}
	}
}


export class ReferenceDeleteOptionContext extends ParserRuleContext {
	public referenceOption(): ReferenceOptionContext {
		return this.getRuleContext(0, ReferenceOptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_referenceDeleteOption; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterReferenceDeleteOption) {
			listener.enterReferenceDeleteOption(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitReferenceDeleteOption) {
			listener.exitReferenceDeleteOption(this);
		}
	}
}


export class ReferenceUpdateOptionContext extends ParserRuleContext {
	public referenceOption(): ReferenceOptionContext {
		return this.getRuleContext(0, ReferenceOptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_referenceUpdateOption; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterReferenceUpdateOption) {
			listener.enterReferenceUpdateOption(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitReferenceUpdateOption) {
			listener.exitReferenceUpdateOption(this);
		}
	}
}


export class ReferenceTableContext extends ParserRuleContext {
	public idName(): IdNameContext {
		return this.getRuleContext(0, IdNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_referenceTable; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterReferenceTable) {
			listener.enterReferenceTable(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitReferenceTable) {
			listener.exitReferenceTable(this);
		}
	}
}


export class IndexColNameContext extends ParserRuleContext {
	public _Type!: Token;
	public idName(): IdNameContext {
		return this.getRuleContext(0, IdNameContext);
	}
	public K_ASC(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_ASC, 0); }
	public K_DESC(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_DESC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_indexColName; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterIndexColName) {
			listener.enterIndexColName(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitIndexColName) {
			listener.exitIndexColName(this);
		}
	}
}


export class DataTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_dataType; }
	public copyFrom(ctx: DataTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class TypeBitStmtContext extends DataTypeContext {
	public K_BIT(): TerminalNode { return this.getToken(SQLParser.K_BIT, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.LPAR, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.INT, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.RPAR, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeBitStmt) {
			listener.enterTypeBitStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeBitStmt) {
			listener.exitTypeBitStmt(this);
		}
	}
}
export class TypeTinyIntStmtContext extends DataTypeContext {
	public K_TINYINT(): TerminalNode { return this.getToken(SQLParser.K_TINYINT, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.LPAR, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.INT, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.RPAR, 0); }
	public K_UNSIGNED(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_UNSIGNED, 0); }
	public K_ZEROFILL(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_ZEROFILL, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeTinyIntStmt) {
			listener.enterTypeTinyIntStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeTinyIntStmt) {
			listener.exitTypeTinyIntStmt(this);
		}
	}
}
export class TypeSmallIntStmtContext extends DataTypeContext {
	public K_SMALLINT(): TerminalNode { return this.getToken(SQLParser.K_SMALLINT, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.LPAR, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.INT, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.RPAR, 0); }
	public K_UNSIGNED(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_UNSIGNED, 0); }
	public K_ZEROFILL(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_ZEROFILL, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeSmallIntStmt) {
			listener.enterTypeSmallIntStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeSmallIntStmt) {
			listener.exitTypeSmallIntStmt(this);
		}
	}
}
export class TypeMediumIntStmtContext extends DataTypeContext {
	public K_MEDIUMINT(): TerminalNode { return this.getToken(SQLParser.K_MEDIUMINT, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.LPAR, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.INT, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.RPAR, 0); }
	public K_UNSIGNED(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_UNSIGNED, 0); }
	public K_ZEROFILL(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_ZEROFILL, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeMediumIntStmt) {
			listener.enterTypeMediumIntStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeMediumIntStmt) {
			listener.exitTypeMediumIntStmt(this);
		}
	}
}
export class TypeIntStmtContext extends DataTypeContext {
	public K_INT(): TerminalNode { return this.getToken(SQLParser.K_INT, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.LPAR, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.INT, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.RPAR, 0); }
	public K_UNSIGNED(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_UNSIGNED, 0); }
	public K_ZEROFILL(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_ZEROFILL, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeIntStmt) {
			listener.enterTypeIntStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeIntStmt) {
			listener.exitTypeIntStmt(this);
		}
	}
}
export class TypeIntegerStmtContext extends DataTypeContext {
	public K_INTEGER(): TerminalNode { return this.getToken(SQLParser.K_INTEGER, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.LPAR, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.INT, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.RPAR, 0); }
	public K_UNSIGNED(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_UNSIGNED, 0); }
	public K_ZEROFILL(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_ZEROFILL, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeIntegerStmt) {
			listener.enterTypeIntegerStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeIntegerStmt) {
			listener.exitTypeIntegerStmt(this);
		}
	}
}
export class TypeBigIntStmtContext extends DataTypeContext {
	public K_BIGINT(): TerminalNode { return this.getToken(SQLParser.K_BIGINT, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.LPAR, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.INT, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.RPAR, 0); }
	public K_UNSIGNED(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_UNSIGNED, 0); }
	public K_ZEROFILL(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_ZEROFILL, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeBigIntStmt) {
			listener.enterTypeBigIntStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeBigIntStmt) {
			listener.exitTypeBigIntStmt(this);
		}
	}
}
export class TypeRealStmtContext extends DataTypeContext {
	public K_REAL(): TerminalNode { return this.getToken(SQLParser.K_REAL, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.LPAR, 0); }
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.INT);
		} else {
			return this.getToken(SQLParser.INT, i);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SQLParser.COMMA, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.RPAR, 0); }
	public K_UNSIGNED(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_UNSIGNED, 0); }
	public K_ZEROFILL(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_ZEROFILL, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeRealStmt) {
			listener.enterTypeRealStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeRealStmt) {
			listener.exitTypeRealStmt(this);
		}
	}
}
export class TypeDoubleStmtContext extends DataTypeContext {
	public K_DOUBLE(): TerminalNode { return this.getToken(SQLParser.K_DOUBLE, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.LPAR, 0); }
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.INT);
		} else {
			return this.getToken(SQLParser.INT, i);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SQLParser.COMMA, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.RPAR, 0); }
	public K_UNSIGNED(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_UNSIGNED, 0); }
	public K_ZEROFILL(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_ZEROFILL, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeDoubleStmt) {
			listener.enterTypeDoubleStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeDoubleStmt) {
			listener.exitTypeDoubleStmt(this);
		}
	}
}
export class TypeFloatStmtContext extends DataTypeContext {
	public K_FLOAT(): TerminalNode { return this.getToken(SQLParser.K_FLOAT, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.LPAR, 0); }
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.INT);
		} else {
			return this.getToken(SQLParser.INT, i);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SQLParser.COMMA, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.RPAR, 0); }
	public K_UNSIGNED(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_UNSIGNED, 0); }
	public K_ZEROFILL(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_ZEROFILL, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeFloatStmt) {
			listener.enterTypeFloatStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeFloatStmt) {
			listener.exitTypeFloatStmt(this);
		}
	}
}
export class TypeDecimalStmtContext extends DataTypeContext {
	public K_DECIMAL(): TerminalNode { return this.getToken(SQLParser.K_DECIMAL, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.LPAR, 0); }
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.INT);
		} else {
			return this.getToken(SQLParser.INT, i);
		}
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.RPAR, 0); }
	public K_UNSIGNED(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_UNSIGNED, 0); }
	public K_ZEROFILL(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_ZEROFILL, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SQLParser.COMMA, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeDecimalStmt) {
			listener.enterTypeDecimalStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeDecimalStmt) {
			listener.exitTypeDecimalStmt(this);
		}
	}
}
export class TypeNumericStmtContext extends DataTypeContext {
	public K_NUMERIC(): TerminalNode { return this.getToken(SQLParser.K_NUMERIC, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.LPAR, 0); }
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.INT);
		} else {
			return this.getToken(SQLParser.INT, i);
		}
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.RPAR, 0); }
	public K_UNSIGNED(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_UNSIGNED, 0); }
	public K_ZEROFILL(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_ZEROFILL, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SQLParser.COMMA, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeNumericStmt) {
			listener.enterTypeNumericStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeNumericStmt) {
			listener.exitTypeNumericStmt(this);
		}
	}
}
export class TypeBooleanStmtContext extends DataTypeContext {
	public K_BOOL(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_BOOL, 0); }
	public K_BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_BOOLEAN, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeBooleanStmt) {
			listener.enterTypeBooleanStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeBooleanStmt) {
			listener.exitTypeBooleanStmt(this);
		}
	}
}
export class TypeDateStmtContext extends DataTypeContext {
	public K_DATE(): TerminalNode { return this.getToken(SQLParser.K_DATE, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeDateStmt) {
			listener.enterTypeDateStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeDateStmt) {
			listener.exitTypeDateStmt(this);
		}
	}
}
export class TypeTimeStmtContext extends DataTypeContext {
	public K_TIME(): TerminalNode { return this.getToken(SQLParser.K_TIME, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeTimeStmt) {
			listener.enterTypeTimeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeTimeStmt) {
			listener.exitTypeTimeStmt(this);
		}
	}
}
export class TypeTimeStampStmtContext extends DataTypeContext {
	public K_TIMESTAMP(): TerminalNode { return this.getToken(SQLParser.K_TIMESTAMP, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeTimeStampStmt) {
			listener.enterTypeTimeStampStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeTimeStampStmt) {
			listener.exitTypeTimeStampStmt(this);
		}
	}
}
export class TypeDateTimeStmtContext extends DataTypeContext {
	public K_DATETIME(): TerminalNode { return this.getToken(SQLParser.K_DATETIME, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeDateTimeStmt) {
			listener.enterTypeDateTimeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeDateTimeStmt) {
			listener.exitTypeDateTimeStmt(this);
		}
	}
}
export class TypeYearStmtContext extends DataTypeContext {
	public K_YEAR(): TerminalNode { return this.getToken(SQLParser.K_YEAR, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeYearStmt) {
			listener.enterTypeYearStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeYearStmt) {
			listener.exitTypeYearStmt(this);
		}
	}
}
export class TypeCharStmtContext extends DataTypeContext {
	public K_CHAR(): TerminalNode { return this.getToken(SQLParser.K_CHAR, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.LPAR, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.INT, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.RPAR, 0); }
	public K_CHARACTER(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_CHARACTER, 0); }
	public K_SET(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_SET, 0); }
	public charsetName(): CharsetNameContext | undefined {
		return this.tryGetRuleContext(0, CharsetNameContext);
	}
	public K_COLLATE(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_COLLATE, 0); }
	public collateName(): CollateNameContext | undefined {
		return this.tryGetRuleContext(0, CollateNameContext);
	}
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeCharStmt) {
			listener.enterTypeCharStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeCharStmt) {
			listener.exitTypeCharStmt(this);
		}
	}
}
export class TypeVarCharStmtContext extends DataTypeContext {
	public K_VARCHAR(): TerminalNode { return this.getToken(SQLParser.K_VARCHAR, 0); }
	public LPAR(): TerminalNode { return this.getToken(SQLParser.LPAR, 0); }
	public INT(): TerminalNode { return this.getToken(SQLParser.INT, 0); }
	public RPAR(): TerminalNode { return this.getToken(SQLParser.RPAR, 0); }
	public K_CHARACTER(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_CHARACTER, 0); }
	public K_SET(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_SET, 0); }
	public charsetName(): CharsetNameContext | undefined {
		return this.tryGetRuleContext(0, CharsetNameContext);
	}
	public K_COLLATE(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_COLLATE, 0); }
	public collateName(): CollateNameContext | undefined {
		return this.tryGetRuleContext(0, CollateNameContext);
	}
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeVarCharStmt) {
			listener.enterTypeVarCharStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeVarCharStmt) {
			listener.exitTypeVarCharStmt(this);
		}
	}
}
export class TypeBinaryStmtContext extends DataTypeContext {
	public K_BINARY(): TerminalNode { return this.getToken(SQLParser.K_BINARY, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.LPAR, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.INT, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(SQLParser.RPAR, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeBinaryStmt) {
			listener.enterTypeBinaryStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeBinaryStmt) {
			listener.exitTypeBinaryStmt(this);
		}
	}
}
export class TypeVarBinaryStmtContext extends DataTypeContext {
	public K_VARBINARY(): TerminalNode { return this.getToken(SQLParser.K_VARBINARY, 0); }
	public LPAR(): TerminalNode { return this.getToken(SQLParser.LPAR, 0); }
	public INT(): TerminalNode { return this.getToken(SQLParser.INT, 0); }
	public RPAR(): TerminalNode { return this.getToken(SQLParser.RPAR, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeVarBinaryStmt) {
			listener.enterTypeVarBinaryStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeVarBinaryStmt) {
			listener.exitTypeVarBinaryStmt(this);
		}
	}
}
export class TypeTinyBlobStmtContext extends DataTypeContext {
	public K_TINYBLOB(): TerminalNode { return this.getToken(SQLParser.K_TINYBLOB, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeTinyBlobStmt) {
			listener.enterTypeTinyBlobStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeTinyBlobStmt) {
			listener.exitTypeTinyBlobStmt(this);
		}
	}
}
export class TypeBlobStmtContext extends DataTypeContext {
	public K_BLOB(): TerminalNode { return this.getToken(SQLParser.K_BLOB, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeBlobStmt) {
			listener.enterTypeBlobStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeBlobStmt) {
			listener.exitTypeBlobStmt(this);
		}
	}
}
export class TypeMediumBlobStmtContext extends DataTypeContext {
	public K_MEDIUMBLOB(): TerminalNode { return this.getToken(SQLParser.K_MEDIUMBLOB, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeMediumBlobStmt) {
			listener.enterTypeMediumBlobStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeMediumBlobStmt) {
			listener.exitTypeMediumBlobStmt(this);
		}
	}
}
export class TypeLongBlobStmtContext extends DataTypeContext {
	public K_LONGBLOB(): TerminalNode { return this.getToken(SQLParser.K_LONGBLOB, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeLongBlobStmt) {
			listener.enterTypeLongBlobStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeLongBlobStmt) {
			listener.exitTypeLongBlobStmt(this);
		}
	}
}
export class TypeJsonStmtContext extends DataTypeContext {
	public K_JSON(): TerminalNode { return this.getToken(SQLParser.K_JSON, 0); }
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeJsonStmt) {
			listener.enterTypeJsonStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeJsonStmt) {
			listener.exitTypeJsonStmt(this);
		}
	}
}
export class TypeTinyTextStmtContext extends DataTypeContext {
	public K_TINYTEXT(): TerminalNode { return this.getToken(SQLParser.K_TINYTEXT, 0); }
	public K_BINARY(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_BINARY, 0); }
	public K_CHARACTER(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_CHARACTER, 0); }
	public K_SET(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_SET, 0); }
	public charsetName(): CharsetNameContext | undefined {
		return this.tryGetRuleContext(0, CharsetNameContext);
	}
	public K_COLLATE(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_COLLATE, 0); }
	public collateName(): CollateNameContext | undefined {
		return this.tryGetRuleContext(0, CollateNameContext);
	}
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeTinyTextStmt) {
			listener.enterTypeTinyTextStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeTinyTextStmt) {
			listener.exitTypeTinyTextStmt(this);
		}
	}
}
export class TypeTextStmtContext extends DataTypeContext {
	public K_TEXT(): TerminalNode { return this.getToken(SQLParser.K_TEXT, 0); }
	public K_BINARY(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_BINARY, 0); }
	public K_CHARACTER(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_CHARACTER, 0); }
	public K_SET(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_SET, 0); }
	public charsetName(): CharsetNameContext | undefined {
		return this.tryGetRuleContext(0, CharsetNameContext);
	}
	public K_COLLATE(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_COLLATE, 0); }
	public collateName(): CollateNameContext | undefined {
		return this.tryGetRuleContext(0, CollateNameContext);
	}
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeTextStmt) {
			listener.enterTypeTextStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeTextStmt) {
			listener.exitTypeTextStmt(this);
		}
	}
}
export class TypeMediumTextStmtContext extends DataTypeContext {
	public K_MEDIUMTEXT(): TerminalNode { return this.getToken(SQLParser.K_MEDIUMTEXT, 0); }
	public K_BINARY(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_BINARY, 0); }
	public K_CHARACTER(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_CHARACTER, 0); }
	public K_SET(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_SET, 0); }
	public charsetName(): CharsetNameContext | undefined {
		return this.tryGetRuleContext(0, CharsetNameContext);
	}
	public K_COLLATE(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_COLLATE, 0); }
	public collateName(): CollateNameContext | undefined {
		return this.tryGetRuleContext(0, CollateNameContext);
	}
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeMediumTextStmt) {
			listener.enterTypeMediumTextStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeMediumTextStmt) {
			listener.exitTypeMediumTextStmt(this);
		}
	}
}
export class TypeLongTextStmtContext extends DataTypeContext {
	public K_LONGTEXT(): TerminalNode { return this.getToken(SQLParser.K_LONGTEXT, 0); }
	public K_BINARY(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_BINARY, 0); }
	public K_CHARACTER(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_CHARACTER, 0); }
	public K_SET(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_SET, 0); }
	public charsetName(): CharsetNameContext | undefined {
		return this.tryGetRuleContext(0, CharsetNameContext);
	}
	public K_COLLATE(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_COLLATE, 0); }
	public collateName(): CollateNameContext | undefined {
		return this.tryGetRuleContext(0, CollateNameContext);
	}
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeLongTextStmt) {
			listener.enterTypeLongTextStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeLongTextStmt) {
			listener.exitTypeLongTextStmt(this);
		}
	}
}
export class TypeEnumStmtContext extends DataTypeContext {
	public K_ENUM(): TerminalNode { return this.getToken(SQLParser.K_ENUM, 0); }
	public LPAR(): TerminalNode { return this.getToken(SQLParser.LPAR, 0); }
	public stringItem(): StringItemContext[];
	public stringItem(i: number): StringItemContext;
	public stringItem(i?: number): StringItemContext | StringItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringItemContext);
		} else {
			return this.getRuleContext(i, StringItemContext);
		}
	}
	public RPAR(): TerminalNode { return this.getToken(SQLParser.RPAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.COMMA);
		} else {
			return this.getToken(SQLParser.COMMA, i);
		}
	}
	public K_CHARACTER(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_CHARACTER, 0); }
	public K_SET(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_SET, 0); }
	public charsetName(): CharsetNameContext | undefined {
		return this.tryGetRuleContext(0, CharsetNameContext);
	}
	public K_COLLATE(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_COLLATE, 0); }
	public collateName(): CollateNameContext | undefined {
		return this.tryGetRuleContext(0, CollateNameContext);
	}
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeEnumStmt) {
			listener.enterTypeEnumStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeEnumStmt) {
			listener.exitTypeEnumStmt(this);
		}
	}
}
export class TypeSetStmtContext extends DataTypeContext {
	public K_SET(): TerminalNode[];
	public K_SET(i: number): TerminalNode;
	public K_SET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.K_SET);
		} else {
			return this.getToken(SQLParser.K_SET, i);
		}
	}
	public LPAR(): TerminalNode { return this.getToken(SQLParser.LPAR, 0); }
	public stringItem(): StringItemContext[];
	public stringItem(i: number): StringItemContext;
	public stringItem(i?: number): StringItemContext | StringItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringItemContext);
		} else {
			return this.getRuleContext(i, StringItemContext);
		}
	}
	public RPAR(): TerminalNode { return this.getToken(SQLParser.RPAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.COMMA);
		} else {
			return this.getToken(SQLParser.COMMA, i);
		}
	}
	public K_CHARACTER(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_CHARACTER, 0); }
	public charsetName(): CharsetNameContext | undefined {
		return this.tryGetRuleContext(0, CharsetNameContext);
	}
	public K_COLLATE(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_COLLATE, 0); }
	public collateName(): CollateNameContext | undefined {
		return this.tryGetRuleContext(0, CollateNameContext);
	}
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTypeSetStmt) {
			listener.enterTypeSetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTypeSetStmt) {
			listener.exitTypeSetStmt(this);
		}
	}
}


export class StringItemContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(SQLParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_stringItem; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterStringItem) {
			listener.enterStringItem(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitStringItem) {
			listener.exitStringItem(this);
		}
	}
}


export class CharsetNameContext extends ParserRuleContext {
	public idName(): IdNameContext {
		return this.getRuleContext(0, IdNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_charsetName; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterCharsetName) {
			listener.enterCharsetName(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitCharsetName) {
			listener.exitCharsetName(this);
		}
	}
}


export class CollateNameContext extends ParserRuleContext {
	public idName(): IdNameContext {
		return this.getRuleContext(0, IdNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_collateName; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterCollateName) {
			listener.enterCollateName(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitCollateName) {
			listener.exitCollateName(this);
		}
	}
}


export class ReferenceOptionContext extends ParserRuleContext {
	public K_RESTRICT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_RESTRICT, 0); }
	public K_CASCADE(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_CASCADE, 0); }
	public K_SET(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_SET, 0); }
	public K_NULL(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_NULL, 0); }
	public K_NO(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_NO, 0); }
	public K_ACTION(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_ACTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_referenceOption; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterReferenceOption) {
			listener.enterReferenceOption(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitReferenceOption) {
			listener.exitReferenceOption(this);
		}
	}
}


export class DefaultValueContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.INT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SQLParser.STRING, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(SQLParser.FLOAT, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(SQLParser.BOOL, 0); }
	public K_NULL(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_NULL, 0); }
	public K_CURRENT_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(SQLParser.K_CURRENT_TIMESTAMP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_defaultValue; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterDefaultValue) {
			listener.enterDefaultValue(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitDefaultValue) {
			listener.exitDefaultValue(this);
		}
	}
}


export class TableOptionsContext extends ParserRuleContext {
	public option(): OptionContext[];
	public option(i: number): OptionContext;
	public option(i?: number): OptionContext | OptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionContext);
		} else {
			return this.getRuleContext(i, OptionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_tableOptions; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterTableOptions) {
			listener.enterTableOptions(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitTableOptions) {
			listener.exitTableOptions(this);
		}
	}
}


export class OptionContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.NAME);
		} else {
			return this.getToken(SQLParser.NAME, i);
		}
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(SQLParser.EQ, 0); }
	public createSpecification(): CreateSpecificationContext | undefined {
		return this.tryGetRuleContext(0, CreateSpecificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_option; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterOption) {
			listener.enterOption(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitOption) {
			listener.exitOption(this);
		}
	}
}


export class IdNameContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(SQLParser.ID, 0); }
	public SINGLE_QUOTE(): TerminalNode[];
	public SINGLE_QUOTE(i: number): TerminalNode;
	public SINGLE_QUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.SINGLE_QUOTE);
		} else {
			return this.getToken(SQLParser.SINGLE_QUOTE, i);
		}
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(SQLParser.NAME, 0); }
	public DOUBLE_QUOTE(): TerminalNode[];
	public DOUBLE_QUOTE(i: number): TerminalNode;
	public DOUBLE_QUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SQLParser.DOUBLE_QUOTE);
		} else {
			return this.getToken(SQLParser.DOUBLE_QUOTE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SQLParser.RULE_idName; }
	// @Override
	public enterRule(listener: SQLParserListener): void {
		if (listener.enterIdName) {
			listener.enterIdName(this);
		}
	}
	// @Override
	public exitRule(listener: SQLParserListener): void {
		if (listener.exitIdName) {
			listener.exitIdName(this);
		}
	}
}


