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
	public static readonly K_FOREIGN = 22;
	public static readonly K_COMMENT = 23;
	public static readonly K_AUTO_INCREMENT = 24;
	public static readonly K_NULL = 25;
	public static readonly K_REFERENCES = 26;
	public static readonly K_ON = 27;
	public static readonly K_DELETE = 28;
	public static readonly K_UPDATE = 29;
	public static readonly K_ASC = 30;
	public static readonly K_DESC = 31;
	public static readonly K_BIT = 32;
	public static readonly K_TINYINT = 33;
	public static readonly K_UNSIGNED = 34;
	public static readonly K_BINARY = 35;
	public static readonly K_ZEROFILL = 36;
	public static readonly K_SMALLINT = 37;
	public static readonly K_MEDIUMINT = 38;
	public static readonly K_INT = 39;
	public static readonly K_INTEGER = 40;
	public static readonly K_BIGINT = 41;
	public static readonly K_REAL = 42;
	public static readonly K_DOUBLE = 43;
	public static readonly K_FLOAT = 44;
	public static readonly K_DECIMAL = 45;
	public static readonly K_NUMERIC = 46;
	public static readonly K_BOOL = 47;
	public static readonly K_BOOLEAN = 48;
	public static readonly K_DATE = 49;
	public static readonly K_TIME = 50;
	public static readonly K_TIMESTAMP = 51;
	public static readonly K_DATETIME = 52;
	public static readonly K_YEAR = 53;
	public static readonly K_CHAR = 54;
	public static readonly K_VARCHAR = 55;
	public static readonly K_VARBINARY = 56;
	public static readonly K_TINYBLOB = 57;
	public static readonly K_BLOB = 58;
	public static readonly K_MEDIUMBLOB = 59;
	public static readonly K_LONGBLOB = 60;
	public static readonly K_JSON = 61;
	public static readonly K_TINYTEXT = 62;
	public static readonly K_TEXT = 63;
	public static readonly K_MEDIUMTEXT = 64;
	public static readonly K_LONGTEXT = 65;
	public static readonly K_ENUM = 66;
	public static readonly K_NO = 67;
	public static readonly K_ACTION = 68;
	public static readonly K_CREATE = 69;
	public static readonly K_FALSE = 70;
	public static readonly K_TRUE = 71;
	public static readonly DOT = 72;
	public static readonly EQ = 73;
	public static readonly SINGLE_QUOTE = 74;
	public static readonly DOUBLE_QUOTE = 75;
	public static readonly BACK_QUOTE = 76;
	public static readonly AT = 77;
	public static readonly COMMA = 78;
	public static readonly SEMICOLON = 79;
	public static readonly LPAR = 80;
	public static readonly RPAR = 81;
	public static readonly ID = 82;
	public static readonly NAME = 83;
	public static readonly INT = 84;
	public static readonly FLOAT = 85;
	public static readonly STRING = 86;
	public static readonly COMMENT = 87;
	public static readonly SINGLE_COMMENT = 88;
	public static readonly WS = 89;
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
	public static readonly RULE_referenceDefinition = 25;
	public static readonly RULE_referenceDeleteOption = 26;
	public static readonly RULE_referenceUpdateOption = 27;
	public static readonly RULE_referenceTable = 28;
	public static readonly RULE_indexColName = 29;
	public static readonly RULE_dataType = 30;
	public static readonly RULE_stringItem = 31;
	public static readonly RULE_charsetName = 32;
	public static readonly RULE_collateName = 33;
	public static readonly RULE_referenceOption = 34;
	public static readonly RULE_defaultValue = 35;
	public static readonly RULE_tableOptions = 36;
	public static readonly RULE_option = 37;
	public static readonly RULE_idName = 38;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"script", "stmt", "dropSchema", "createSchema", "createSpecification", 
		"tableComment", "setStmt", "setOption", "setDefaultValue", "useStmt", 
		"dropTable", "dropTableName", "createTable", "tableName", "fieldList", 
		"createDefinition", "columnName", "constraintName", "constraintTable", 
		"columnDefinition", "autoIncrement", "columnDefaultValue", "columnNull", 
		"columnNotNull", "fieldComment", "referenceDefinition", "referenceDeleteOption", 
		"referenceUpdateOption", "referenceTable", "indexColName", "dataType", 
		"stringItem", "charsetName", "collateName", "referenceOption", "defaultValue", 
		"tableOptions", "option", "idName",
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
		undefined, undefined, "'.'", "'='", "'''", "'\"'", "'`'", "'@'", "','", 
		"';'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "BOOL", "K_DROP", "K_DATABASE", "K_SCHEMA", "K_IF", "K_EXISTS", 
		"K_NOT", "K_DEFAULT", "K_CHARACTER", "K_SET", "K_COLLATE", "K_USE", "K_TEMPORARY", 
		"K_TABLE", "K_RESTRICT", "K_CASCADE", "K_CONSTRAINT", "K_PRIMARY", "K_KEY", 
		"K_INDEX", "K_UNIQUE", "K_FOREIGN", "K_COMMENT", "K_AUTO_INCREMENT", "K_NULL", 
		"K_REFERENCES", "K_ON", "K_DELETE", "K_UPDATE", "K_ASC", "K_DESC", "K_BIT", 
		"K_TINYINT", "K_UNSIGNED", "K_BINARY", "K_ZEROFILL", "K_SMALLINT", "K_MEDIUMINT", 
		"K_INT", "K_INTEGER", "K_BIGINT", "K_REAL", "K_DOUBLE", "K_FLOAT", "K_DECIMAL", 
		"K_NUMERIC", "K_BOOL", "K_BOOLEAN", "K_DATE", "K_TIME", "K_TIMESTAMP", 
		"K_DATETIME", "K_YEAR", "K_CHAR", "K_VARCHAR", "K_VARBINARY", "K_TINYBLOB", 
		"K_BLOB", "K_MEDIUMBLOB", "K_LONGBLOB", "K_JSON", "K_TINYTEXT", "K_TEXT", 
		"K_MEDIUMTEXT", "K_LONGTEXT", "K_ENUM", "K_NO", "K_ACTION", "K_CREATE", 
		"K_FALSE", "K_TRUE", "DOT", "EQ", "SINGLE_QUOTE", "DOUBLE_QUOTE", "BACK_QUOTE", 
		"AT", "COMMA", "SEMICOLON", "LPAR", "RPAR", "ID", "NAME", "INT", "FLOAT", 
		"STRING", "COMMENT", "SINGLE_COMMENT", "WS",
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
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLParser.K_DROP) | (1 << SQLParser.K_SET) | (1 << SQLParser.K_USE))) !== 0) || _la === SQLParser.K_CREATE || _la === SQLParser.SEMICOLON) {
				{
				{
				this.state = 78;
				this.stmt();
				}
				}
				this.state = 83;
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
			this.state = 103;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 84;
				this.createSchema();
				this.state = 85;
				this.match(SQLParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 87;
				this.dropSchema();
				this.state = 88;
				this.match(SQLParser.SEMICOLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 90;
				this.createTable();
				this.state = 91;
				this.match(SQLParser.SEMICOLON);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 93;
				this.dropTable();
				this.state = 94;
				this.match(SQLParser.SEMICOLON);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 96;
				this.useStmt();
				this.state = 97;
				this.match(SQLParser.SEMICOLON);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 99;
				this.setStmt();
				this.state = 100;
				this.match(SQLParser.SEMICOLON);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 102;
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
			this.state = 105;
			this.match(SQLParser.K_DROP);
			this.state = 106;
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
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_IF) {
				{
				this.state = 107;
				this.match(SQLParser.K_IF);
				this.state = 108;
				this.match(SQLParser.K_EXISTS);
				}
			}

			this.state = 111;
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
			this.state = 113;
			this.match(SQLParser.K_CREATE);
			this.state = 114;
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
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_IF) {
				{
				this.state = 115;
				this.match(SQLParser.K_IF);
				this.state = 116;
				this.match(SQLParser.K_NOT);
				this.state = 117;
				this.match(SQLParser.K_EXISTS);
				}
			}

			this.state = 120;
			this.idName();
			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLParser.K_DEFAULT) | (1 << SQLParser.K_CHARACTER) | (1 << SQLParser.K_COLLATE) | (1 << SQLParser.K_COMMENT))) !== 0)) {
				{
				{
				this.state = 121;
				this.createSpecification();
				}
				}
				this.state = 126;
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
			this.state = 147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_DEFAULT) {
					{
					this.state = 127;
					this.match(SQLParser.K_DEFAULT);
					}
				}

				this.state = 130;
				this.match(SQLParser.K_CHARACTER);
				this.state = 131;
				this.match(SQLParser.K_SET);
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.EQ) {
					{
					this.state = 132;
					this.match(SQLParser.EQ);
					}
				}

				this.state = 135;
				this.charsetName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_DEFAULT) {
					{
					this.state = 136;
					this.match(SQLParser.K_DEFAULT);
					}
				}

				this.state = 139;
				this.match(SQLParser.K_COLLATE);
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.EQ) {
					{
					this.state = 140;
					this.match(SQLParser.EQ);
					}
				}

				this.state = 143;
				this.collateName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 144;
				this.match(SQLParser.K_COMMENT);
				this.state = 145;
				this.match(SQLParser.EQ);
				this.state = 146;
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
			this.state = 149;
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
			this.state = 151;
			this.match(SQLParser.K_SET);
			this.state = 157;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 152;
					this.setOption();
					this.state = 153;
					this.match(SQLParser.COMMA);
					}
					}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 160;
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
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLParser.AT) {
				{
				{
				this.state = 162;
				this.match(SQLParser.AT);
				}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 168;
			this.match(SQLParser.NAME);
			this.state = 169;
			this.match(SQLParser.EQ);
			this.state = 178;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLParser.BOOL:
			case SQLParser.K_NULL:
			case SQLParser.INT:
			case SQLParser.FLOAT:
			case SQLParser.STRING:
				{
				this.state = 170;
				this.setDefaultValue();
				}
				break;
			case SQLParser.AT:
			case SQLParser.NAME:
				{
				{
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SQLParser.AT) {
					{
					{
					this.state = 171;
					this.match(SQLParser.AT);
					}
					}
					this.state = 176;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 177;
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
			this.state = 180;
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
			this.state = 182;
			this.match(SQLParser.K_USE);
			this.state = 183;
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
			this.state = 185;
			this.match(SQLParser.K_DROP);
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_TEMPORARY) {
				{
				this.state = 186;
				this.match(SQLParser.K_TEMPORARY);
				}
			}

			this.state = 189;
			this.match(SQLParser.K_TABLE);
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_IF) {
				{
				this.state = 190;
				this.match(SQLParser.K_IF);
				this.state = 191;
				this.match(SQLParser.K_EXISTS);
				}
			}

			this.state = 194;
			this.dropTableName();
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SQLParser.COMMA) {
				{
				{
				this.state = 195;
				this.match(SQLParser.COMMA);
				this.state = 196;
				this.dropTableName();
				}
				}
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_RESTRICT || _la === SQLParser.K_CASCADE) {
				{
				this.state = 202;
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
			this.state = 205;
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
			this.state = 207;
			this.match(SQLParser.K_CREATE);
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_TEMPORARY) {
				{
				this.state = 208;
				this.match(SQLParser.K_TEMPORARY);
				}
			}

			this.state = 211;
			this.match(SQLParser.K_TABLE);
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_IF) {
				{
				this.state = 212;
				this.match(SQLParser.K_IF);
				this.state = 213;
				this.match(SQLParser.K_NOT);
				this.state = 214;
				this.match(SQLParser.K_EXISTS);
				}
			}

			this.state = 217;
			this.tableName();
			this.state = 218;
			this.match(SQLParser.LPAR);
			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLParser.K_CONSTRAINT) | (1 << SQLParser.K_PRIMARY) | (1 << SQLParser.K_KEY) | (1 << SQLParser.K_INDEX) | (1 << SQLParser.K_UNIQUE) | (1 << SQLParser.K_FOREIGN))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (SQLParser.SINGLE_QUOTE - 74)) | (1 << (SQLParser.DOUBLE_QUOTE - 74)) | (1 << (SQLParser.ID - 74)) | (1 << (SQLParser.NAME - 74)))) !== 0)) {
				{
				this.state = 219;
				this.fieldList();
				}
			}

			this.state = 222;
			this.match(SQLParser.RPAR);
			this.state = 223;
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
			this.state = 225;
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
			this.state = 232;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 227;
					this.createDefinition();
					this.state = 228;
					this.match(SQLParser.COMMA);
					}
					}
				}
				this.state = 234;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 235;
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
			this.state = 325;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				_localctx = new FieldStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 237;
				this.columnName();
				this.state = 238;
				this.columnDefinition();
				}
				break;

			case 2:
				_localctx = new PrimaryKeyStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CONSTRAINT) {
					{
					this.state = 240;
					this.match(SQLParser.K_CONSTRAINT);
					this.state = 242;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (SQLParser.SINGLE_QUOTE - 74)) | (1 << (SQLParser.DOUBLE_QUOTE - 74)) | (1 << (SQLParser.ID - 74)) | (1 << (SQLParser.NAME - 74)))) !== 0)) {
						{
						this.state = 241;
						this.constraintName();
						}
					}

					}
				}

				this.state = 246;
				this.match(SQLParser.K_PRIMARY);
				this.state = 247;
				this.match(SQLParser.K_KEY);
				this.state = 248;
				this.match(SQLParser.LPAR);
				this.state = 254;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 249;
						this.indexColName();
						this.state = 250;
						this.match(SQLParser.COMMA);
						}
						}
					}
					this.state = 256;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
				}
				this.state = 257;
				this.indexColName();
				this.state = 258;
				this.match(SQLParser.RPAR);
				}
				break;

			case 3:
				_localctx = new IndexStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 260;
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
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (SQLParser.SINGLE_QUOTE - 74)) | (1 << (SQLParser.DOUBLE_QUOTE - 74)) | (1 << (SQLParser.ID - 74)) | (1 << (SQLParser.NAME - 74)))) !== 0)) {
					{
					this.state = 261;
					this.constraintName();
					}
				}

				this.state = 264;
				this.match(SQLParser.LPAR);
				this.state = 270;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 265;
						this.indexColName();
						this.state = 266;
						this.match(SQLParser.COMMA);
						}
						}
					}
					this.state = 272;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				}
				this.state = 273;
				this.indexColName();
				this.state = 274;
				this.match(SQLParser.RPAR);
				}
				break;

			case 4:
				_localctx = new UniqueStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CONSTRAINT) {
					{
					this.state = 276;
					this.match(SQLParser.K_CONSTRAINT);
					this.state = 278;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (SQLParser.SINGLE_QUOTE - 74)) | (1 << (SQLParser.DOUBLE_QUOTE - 74)) | (1 << (SQLParser.ID - 74)) | (1 << (SQLParser.NAME - 74)))) !== 0)) {
						{
						this.state = 277;
						this.constraintName();
						}
					}

					}
				}

				this.state = 282;
				this.match(SQLParser.K_UNIQUE);
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_KEY || _la === SQLParser.K_INDEX) {
					{
					this.state = 283;
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

				this.state = 287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (SQLParser.SINGLE_QUOTE - 74)) | (1 << (SQLParser.DOUBLE_QUOTE - 74)) | (1 << (SQLParser.ID - 74)) | (1 << (SQLParser.NAME - 74)))) !== 0)) {
					{
					this.state = 286;
					this.constraintTable();
					}
				}

				this.state = 289;
				this.match(SQLParser.LPAR);
				this.state = 295;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 290;
						this.indexColName();
						this.state = 291;
						this.match(SQLParser.COMMA);
						}
						}
					}
					this.state = 297;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				}
				this.state = 298;
				this.indexColName();
				this.state = 299;
				this.match(SQLParser.RPAR);
				}
				break;

			case 5:
				_localctx = new ForeignStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CONSTRAINT) {
					{
					this.state = 301;
					this.match(SQLParser.K_CONSTRAINT);
					this.state = 303;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (SQLParser.SINGLE_QUOTE - 74)) | (1 << (SQLParser.DOUBLE_QUOTE - 74)) | (1 << (SQLParser.ID - 74)) | (1 << (SQLParser.NAME - 74)))) !== 0)) {
						{
						this.state = 302;
						this.constraintName();
						}
					}

					}
				}

				this.state = 307;
				this.match(SQLParser.K_FOREIGN);
				this.state = 308;
				this.match(SQLParser.K_KEY);
				this.state = 310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (SQLParser.SINGLE_QUOTE - 74)) | (1 << (SQLParser.DOUBLE_QUOTE - 74)) | (1 << (SQLParser.ID - 74)) | (1 << (SQLParser.NAME - 74)))) !== 0)) {
					{
					this.state = 309;
					this.constraintTable();
					}
				}

				this.state = 312;
				this.match(SQLParser.LPAR);
				this.state = 318;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 313;
						this.indexColName();
						this.state = 314;
						this.match(SQLParser.COMMA);
						}
						}
					}
					this.state = 320;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				}
				this.state = 321;
				this.indexColName();
				this.state = 322;
				this.match(SQLParser.RPAR);
				this.state = 323;
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
			this.state = 327;
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
			this.state = 329;
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
			this.state = 331;
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
			this.state = 333;
			this.dataType();
			this.state = 336;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLParser.K_NULL:
				{
				this.state = 334;
				this.columnNull();
				}
				break;
			case SQLParser.K_NOT:
				{
				this.state = 335;
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
			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_DEFAULT) {
				{
				this.state = 338;
				this.match(SQLParser.K_DEFAULT);
				this.state = 339;
				this.columnDefaultValue();
				}
			}

			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_AUTO_INCREMENT) {
				{
				this.state = 342;
				this.autoIncrement();
				}
			}

			this.state = 353;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLParser.K_UNIQUE:
				{
				{
				this.state = 345;
				this.match(SQLParser.K_UNIQUE);
				this.state = 347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_KEY) {
					{
					this.state = 346;
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
				this.state = 350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_PRIMARY) {
					{
					this.state = 349;
					this.match(SQLParser.K_PRIMARY);
					}
				}

				this.state = 352;
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
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_COMMENT) {
				{
				this.state = 355;
				this.match(SQLParser.K_COMMENT);
				this.state = 356;
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
			this.state = 359;
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
			this.state = 361;
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
			this.state = 363;
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
			this.state = 365;
			this.match(SQLParser.K_NOT);
			this.state = 366;
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
			this.state = 368;
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
	public referenceDefinition(): ReferenceDefinitionContext {
		let _localctx: ReferenceDefinitionContext = new ReferenceDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SQLParser.RULE_referenceDefinition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			this.match(SQLParser.K_REFERENCES);
			this.state = 371;
			this.referenceTable();
			this.state = 372;
			this.match(SQLParser.LPAR);
			this.state = 378;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 373;
					this.indexColName();
					this.state = 374;
					this.match(SQLParser.COMMA);
					}
					}
				}
				this.state = 380;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			}
			this.state = 381;
			this.indexColName();
			this.state = 382;
			this.match(SQLParser.RPAR);
			this.state = 386;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 383;
				this.match(SQLParser.K_ON);
				this.state = 384;
				this.match(SQLParser.K_DELETE);
				this.state = 385;
				this.referenceDeleteOption();
				}
				break;
			}
			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_ON) {
				{
				this.state = 388;
				this.match(SQLParser.K_ON);
				this.state = 389;
				this.match(SQLParser.K_UPDATE);
				this.state = 390;
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
		this.enterRule(_localctx, 52, SQLParser.RULE_referenceDeleteOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
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
		this.enterRule(_localctx, 54, SQLParser.RULE_referenceUpdateOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
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
		this.enterRule(_localctx, 56, SQLParser.RULE_referenceTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
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
		this.enterRule(_localctx, 58, SQLParser.RULE_indexColName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			this.idName();
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SQLParser.K_ASC || _la === SQLParser.K_DESC) {
				{
				this.state = 400;
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
		this.enterRule(_localctx, 60, SQLParser.RULE_dataType);
		let _la: number;
		try {
			let _alt: number;
			this.state = 698;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLParser.K_BIT:
				_localctx = new TypeBitStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 403;
				this.match(SQLParser.K_BIT);
				this.state = 407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 404;
					this.match(SQLParser.LPAR);
					this.state = 405;
					this.match(SQLParser.INT);
					this.state = 406;
					this.match(SQLParser.RPAR);
					}
				}

				}
				break;
			case SQLParser.K_TINYINT:
				_localctx = new TypeTinyIntStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 409;
				this.match(SQLParser.K_TINYINT);
				this.state = 413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 410;
					this.match(SQLParser.LPAR);
					this.state = 411;
					this.match(SQLParser.INT);
					this.state = 412;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 416;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_UNSIGNED) {
					{
					this.state = 415;
					this.match(SQLParser.K_UNSIGNED);
					}
				}

				this.state = 419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_ZEROFILL) {
					{
					this.state = 418;
					this.match(SQLParser.K_ZEROFILL);
					}
				}

				}
				break;
			case SQLParser.K_SMALLINT:
				_localctx = new TypeSmallIntStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 421;
				this.match(SQLParser.K_SMALLINT);
				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 422;
					this.match(SQLParser.LPAR);
					this.state = 423;
					this.match(SQLParser.INT);
					this.state = 424;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_UNSIGNED) {
					{
					this.state = 427;
					this.match(SQLParser.K_UNSIGNED);
					}
				}

				this.state = 431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_ZEROFILL) {
					{
					this.state = 430;
					this.match(SQLParser.K_ZEROFILL);
					}
				}

				}
				break;
			case SQLParser.K_MEDIUMINT:
				_localctx = new TypeMediumIntStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 433;
				this.match(SQLParser.K_MEDIUMINT);
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
			case SQLParser.K_INT:
				_localctx = new TypeIntStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 445;
				this.match(SQLParser.K_INT);
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
			case SQLParser.K_INTEGER:
				_localctx = new TypeIntegerStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 457;
				this.match(SQLParser.K_INTEGER);
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
			case SQLParser.K_BIGINT:
				_localctx = new TypeBigIntStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 469;
				this.match(SQLParser.K_BIGINT);
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
			case SQLParser.K_REAL:
				_localctx = new TypeRealStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 481;
				this.match(SQLParser.K_REAL);
				this.state = 487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 482;
					this.match(SQLParser.LPAR);
					this.state = 483;
					this.match(SQLParser.INT);
					this.state = 484;
					this.match(SQLParser.COMMA);
					this.state = 485;
					this.match(SQLParser.INT);
					this.state = 486;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_UNSIGNED) {
					{
					this.state = 489;
					this.match(SQLParser.K_UNSIGNED);
					}
				}

				this.state = 493;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_ZEROFILL) {
					{
					this.state = 492;
					this.match(SQLParser.K_ZEROFILL);
					}
				}

				}
				break;
			case SQLParser.K_DOUBLE:
				_localctx = new TypeDoubleStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 495;
				this.match(SQLParser.K_DOUBLE);
				this.state = 501;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 496;
					this.match(SQLParser.LPAR);
					this.state = 497;
					this.match(SQLParser.INT);
					this.state = 498;
					this.match(SQLParser.COMMA);
					this.state = 499;
					this.match(SQLParser.INT);
					this.state = 500;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 504;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_UNSIGNED) {
					{
					this.state = 503;
					this.match(SQLParser.K_UNSIGNED);
					}
				}

				this.state = 507;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_ZEROFILL) {
					{
					this.state = 506;
					this.match(SQLParser.K_ZEROFILL);
					}
				}

				}
				break;
			case SQLParser.K_FLOAT:
				_localctx = new TypeFloatStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 509;
				this.match(SQLParser.K_FLOAT);
				this.state = 515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 510;
					this.match(SQLParser.LPAR);
					this.state = 511;
					this.match(SQLParser.INT);
					this.state = 512;
					this.match(SQLParser.COMMA);
					this.state = 513;
					this.match(SQLParser.INT);
					this.state = 514;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_UNSIGNED) {
					{
					this.state = 517;
					this.match(SQLParser.K_UNSIGNED);
					}
				}

				this.state = 521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_ZEROFILL) {
					{
					this.state = 520;
					this.match(SQLParser.K_ZEROFILL);
					}
				}

				}
				break;
			case SQLParser.K_DECIMAL:
				_localctx = new TypeDecimalStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 523;
				this.match(SQLParser.K_DECIMAL);
				this.state = 531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 524;
					this.match(SQLParser.LPAR);
					this.state = 525;
					this.match(SQLParser.INT);
					this.state = 528;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SQLParser.COMMA) {
						{
						this.state = 526;
						this.match(SQLParser.COMMA);
						this.state = 527;
						this.match(SQLParser.INT);
						}
					}

					this.state = 530;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_UNSIGNED) {
					{
					this.state = 533;
					this.match(SQLParser.K_UNSIGNED);
					}
				}

				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_ZEROFILL) {
					{
					this.state = 536;
					this.match(SQLParser.K_ZEROFILL);
					}
				}

				}
				break;
			case SQLParser.K_NUMERIC:
				_localctx = new TypeNumericStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 539;
				this.match(SQLParser.K_NUMERIC);
				this.state = 547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 540;
					this.match(SQLParser.LPAR);
					this.state = 541;
					this.match(SQLParser.INT);
					this.state = 544;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SQLParser.COMMA) {
						{
						this.state = 542;
						this.match(SQLParser.COMMA);
						this.state = 543;
						this.match(SQLParser.INT);
						}
					}

					this.state = 546;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 550;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_UNSIGNED) {
					{
					this.state = 549;
					this.match(SQLParser.K_UNSIGNED);
					}
				}

				this.state = 553;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_ZEROFILL) {
					{
					this.state = 552;
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
				this.state = 555;
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
				this.state = 556;
				this.match(SQLParser.K_DATE);
				}
				break;
			case SQLParser.K_TIME:
				_localctx = new TypeTimeStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 557;
				this.match(SQLParser.K_TIME);
				}
				break;
			case SQLParser.K_TIMESTAMP:
				_localctx = new TypeTimeStampStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 558;
				this.match(SQLParser.K_TIMESTAMP);
				}
				break;
			case SQLParser.K_DATETIME:
				_localctx = new TypeDateTimeStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 559;
				this.match(SQLParser.K_DATETIME);
				}
				break;
			case SQLParser.K_YEAR:
				_localctx = new TypeYearStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 560;
				this.match(SQLParser.K_YEAR);
				}
				break;
			case SQLParser.K_CHAR:
				_localctx = new TypeCharStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 561;
				this.match(SQLParser.K_CHAR);
				this.state = 565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 562;
					this.match(SQLParser.LPAR);
					this.state = 563;
					this.match(SQLParser.INT);
					this.state = 564;
					this.match(SQLParser.RPAR);
					}
				}

				this.state = 570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CHARACTER) {
					{
					this.state = 567;
					this.match(SQLParser.K_CHARACTER);
					this.state = 568;
					this.match(SQLParser.K_SET);
					this.state = 569;
					this.charsetName();
					}
				}

				this.state = 574;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_COLLATE) {
					{
					this.state = 572;
					this.match(SQLParser.K_COLLATE);
					this.state = 573;
					this.collateName();
					}
				}

				}
				break;
			case SQLParser.K_VARCHAR:
				_localctx = new TypeVarCharStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 576;
				this.match(SQLParser.K_VARCHAR);
				this.state = 577;
				this.match(SQLParser.LPAR);
				this.state = 578;
				this.match(SQLParser.INT);
				this.state = 579;
				this.match(SQLParser.RPAR);
				this.state = 583;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CHARACTER) {
					{
					this.state = 580;
					this.match(SQLParser.K_CHARACTER);
					this.state = 581;
					this.match(SQLParser.K_SET);
					this.state = 582;
					this.charsetName();
					}
				}

				this.state = 587;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_COLLATE) {
					{
					this.state = 585;
					this.match(SQLParser.K_COLLATE);
					this.state = 586;
					this.collateName();
					}
				}

				}
				break;
			case SQLParser.K_BINARY:
				_localctx = new TypeBinaryStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 589;
				this.match(SQLParser.K_BINARY);
				this.state = 593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.LPAR) {
					{
					this.state = 590;
					this.match(SQLParser.LPAR);
					this.state = 591;
					this.match(SQLParser.INT);
					this.state = 592;
					this.match(SQLParser.RPAR);
					}
				}

				}
				break;
			case SQLParser.K_VARBINARY:
				_localctx = new TypeVarBinaryStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 595;
				this.match(SQLParser.K_VARBINARY);
				this.state = 596;
				this.match(SQLParser.LPAR);
				this.state = 597;
				this.match(SQLParser.INT);
				this.state = 598;
				this.match(SQLParser.RPAR);
				}
				break;
			case SQLParser.K_TINYBLOB:
				_localctx = new TypeTinyBlobStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 599;
				this.match(SQLParser.K_TINYBLOB);
				}
				break;
			case SQLParser.K_BLOB:
				_localctx = new TypeBlobStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 600;
				this.match(SQLParser.K_BLOB);
				}
				break;
			case SQLParser.K_MEDIUMBLOB:
				_localctx = new TypeMediumBlobStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 601;
				this.match(SQLParser.K_MEDIUMBLOB);
				}
				break;
			case SQLParser.K_LONGBLOB:
				_localctx = new TypeLongBlobStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 602;
				this.match(SQLParser.K_LONGBLOB);
				}
				break;
			case SQLParser.K_JSON:
				_localctx = new TypeJsonStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 603;
				this.match(SQLParser.K_JSON);
				}
				break;
			case SQLParser.K_TINYTEXT:
				_localctx = new TypeTinyTextStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 604;
				this.match(SQLParser.K_TINYTEXT);
				this.state = 606;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_BINARY) {
					{
					this.state = 605;
					this.match(SQLParser.K_BINARY);
					}
				}

				this.state = 611;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CHARACTER) {
					{
					this.state = 608;
					this.match(SQLParser.K_CHARACTER);
					this.state = 609;
					this.match(SQLParser.K_SET);
					this.state = 610;
					this.charsetName();
					}
				}

				this.state = 615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_COLLATE) {
					{
					this.state = 613;
					this.match(SQLParser.K_COLLATE);
					this.state = 614;
					this.collateName();
					}
				}

				}
				break;
			case SQLParser.K_TEXT:
				_localctx = new TypeTextStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 617;
				this.match(SQLParser.K_TEXT);
				this.state = 619;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_BINARY) {
					{
					this.state = 618;
					this.match(SQLParser.K_BINARY);
					}
				}

				this.state = 624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CHARACTER) {
					{
					this.state = 621;
					this.match(SQLParser.K_CHARACTER);
					this.state = 622;
					this.match(SQLParser.K_SET);
					this.state = 623;
					this.charsetName();
					}
				}

				this.state = 628;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_COLLATE) {
					{
					this.state = 626;
					this.match(SQLParser.K_COLLATE);
					this.state = 627;
					this.collateName();
					}
				}

				}
				break;
			case SQLParser.K_MEDIUMTEXT:
				_localctx = new TypeMediumTextStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 630;
				this.match(SQLParser.K_MEDIUMTEXT);
				this.state = 632;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_BINARY) {
					{
					this.state = 631;
					this.match(SQLParser.K_BINARY);
					}
				}

				this.state = 637;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CHARACTER) {
					{
					this.state = 634;
					this.match(SQLParser.K_CHARACTER);
					this.state = 635;
					this.match(SQLParser.K_SET);
					this.state = 636;
					this.charsetName();
					}
				}

				this.state = 641;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_COLLATE) {
					{
					this.state = 639;
					this.match(SQLParser.K_COLLATE);
					this.state = 640;
					this.collateName();
					}
				}

				}
				break;
			case SQLParser.K_LONGTEXT:
				_localctx = new TypeLongTextStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 643;
				this.match(SQLParser.K_LONGTEXT);
				this.state = 645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_BINARY) {
					{
					this.state = 644;
					this.match(SQLParser.K_BINARY);
					}
				}

				this.state = 650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CHARACTER) {
					{
					this.state = 647;
					this.match(SQLParser.K_CHARACTER);
					this.state = 648;
					this.match(SQLParser.K_SET);
					this.state = 649;
					this.charsetName();
					}
				}

				this.state = 654;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_COLLATE) {
					{
					this.state = 652;
					this.match(SQLParser.K_COLLATE);
					this.state = 653;
					this.collateName();
					}
				}

				}
				break;
			case SQLParser.K_ENUM:
				_localctx = new TypeEnumStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 656;
				this.match(SQLParser.K_ENUM);
				this.state = 657;
				this.match(SQLParser.LPAR);
				this.state = 663;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 658;
						this.stringItem();
						this.state = 659;
						this.match(SQLParser.COMMA);
						}
						}
					}
					this.state = 665;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
				}
				this.state = 666;
				this.stringItem();
				this.state = 667;
				this.match(SQLParser.RPAR);
				this.state = 671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CHARACTER) {
					{
					this.state = 668;
					this.match(SQLParser.K_CHARACTER);
					this.state = 669;
					this.match(SQLParser.K_SET);
					this.state = 670;
					this.charsetName();
					}
				}

				this.state = 675;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_COLLATE) {
					{
					this.state = 673;
					this.match(SQLParser.K_COLLATE);
					this.state = 674;
					this.collateName();
					}
				}

				}
				break;
			case SQLParser.K_SET:
				_localctx = new TypeSetStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 677;
				this.match(SQLParser.K_SET);
				this.state = 678;
				this.match(SQLParser.LPAR);
				this.state = 684;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 679;
						this.stringItem();
						this.state = 680;
						this.match(SQLParser.COMMA);
						}
						}
					}
					this.state = 686;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
				}
				this.state = 687;
				this.stringItem();
				this.state = 688;
				this.match(SQLParser.RPAR);
				this.state = 692;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_CHARACTER) {
					{
					this.state = 689;
					this.match(SQLParser.K_CHARACTER);
					this.state = 690;
					this.match(SQLParser.K_SET);
					this.state = 691;
					this.charsetName();
					}
				}

				this.state = 696;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SQLParser.K_COLLATE) {
					{
					this.state = 694;
					this.match(SQLParser.K_COLLATE);
					this.state = 695;
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
		this.enterRule(_localctx, 62, SQLParser.RULE_stringItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 700;
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
		this.enterRule(_localctx, 64, SQLParser.RULE_charsetName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 702;
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
		this.enterRule(_localctx, 66, SQLParser.RULE_collateName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 704;
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
		this.enterRule(_localctx, 68, SQLParser.RULE_referenceOption);
		try {
			this.state = 712;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLParser.K_RESTRICT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 706;
				this.match(SQLParser.K_RESTRICT);
				}
				break;
			case SQLParser.K_CASCADE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 707;
				this.match(SQLParser.K_CASCADE);
				}
				break;
			case SQLParser.K_SET:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 708;
				this.match(SQLParser.K_SET);
				this.state = 709;
				this.match(SQLParser.K_NULL);
				}
				}
				break;
			case SQLParser.K_NO:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 710;
				this.match(SQLParser.K_NO);
				this.state = 711;
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
		this.enterRule(_localctx, 70, SQLParser.RULE_defaultValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
			_la = this._input.LA(1);
			if (!(_la === SQLParser.BOOL || _la === SQLParser.K_NULL || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (SQLParser.INT - 84)) | (1 << (SQLParser.FLOAT - 84)) | (1 << (SQLParser.STRING - 84)))) !== 0))) {
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
		this.enterRule(_localctx, 72, SQLParser.RULE_tableOptions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLParser.K_DEFAULT) | (1 << SQLParser.K_CHARACTER) | (1 << SQLParser.K_COLLATE) | (1 << SQLParser.K_COMMENT))) !== 0) || _la === SQLParser.NAME) {
				{
				{
				this.state = 716;
				this.option();
				}
				}
				this.state = 721;
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
		this.enterRule(_localctx, 74, SQLParser.RULE_option);
		try {
			this.state = 726;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 722;
				this.match(SQLParser.NAME);
				this.state = 723;
				this.match(SQLParser.EQ);
				this.state = 724;
				this.match(SQLParser.NAME);
				}
				break;
			case SQLParser.K_DEFAULT:
			case SQLParser.K_CHARACTER:
			case SQLParser.K_COLLATE:
			case SQLParser.K_COMMENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 725;
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
		this.enterRule(_localctx, 76, SQLParser.RULE_idName);
		try {
			this.state = 736;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SQLParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 728;
				this.match(SQLParser.ID);
				}
				break;
			case SQLParser.SINGLE_QUOTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 729;
				this.match(SQLParser.SINGLE_QUOTE);
				this.state = 730;
				this.match(SQLParser.NAME);
				this.state = 731;
				this.match(SQLParser.SINGLE_QUOTE);
				}
				break;
			case SQLParser.DOUBLE_QUOTE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 732;
				this.match(SQLParser.DOUBLE_QUOTE);
				this.state = 733;
				this.match(SQLParser.NAME);
				this.state = 734;
				this.match(SQLParser.DOUBLE_QUOTE);
				}
				break;
			case SQLParser.NAME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 735;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03[\u02E5\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x07\x02R\n\x02\f" +
		"\x02\x0E\x02U\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03j\n\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04p\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05y\n\x05\x03\x05\x03\x05\x07\x05}\n\x05\f\x05\x0E\x05\x80\v" +
		"\x05\x03\x06\x05\x06\x83\n\x06\x03\x06\x03\x06\x03\x06\x05\x06\x88\n\x06" +
		"\x03\x06\x03\x06\x05\x06\x8C\n\x06\x03\x06\x03\x06\x05\x06\x90\n\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06\x96\n\x06\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x07\b\x9E\n\b\f\b\x0E\b\xA1\v\b\x03\b\x03\b\x03\t\x07\t" +
		"\xA6\n\t\f\t\x0E\t\xA9\v\t\x03\t\x03\t\x03\t\x03\t\x07\t\xAF\n\t\f\t\x0E" +
		"\t\xB2\v\t\x03\t\x05\t\xB5\n\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03" +
		"\f\x05\f\xBE\n\f\x03\f\x03\f\x03\f\x05\f\xC3\n\f\x03\f\x03\f\x03\f\x07" +
		"\f\xC8\n\f\f\f\x0E\f\xCB\v\f\x03\f\x05\f\xCE\n\f\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x05\x0E\xD4\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xDA\n\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xDF\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x07\x10\xE9\n\x10\f\x10\x0E\x10\xEC" +
		"\v\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11" +
		"\xF5\n\x11\x05\x11\xF7\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x07\x11\xFF\n\x11\f\x11\x0E\x11\u0102\v\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x05\x11\u0109\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07" +
		"\x11\u010F\n\x11\f\x11\x0E\x11\u0112\v\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x05\x11\u0119\n\x11\x05\x11\u011B\n\x11\x03\x11\x03\x11\x05" +
		"\x11\u011F\n\x11\x03\x11\x05\x11\u0122\n\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x07\x11\u0128\n\x11\f\x11\x0E\x11\u012B\v\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x05\x11\u0132\n\x11\x05\x11\u0134\n\x11\x03\x11\x03" +
		"\x11\x03\x11\x05\x11\u0139\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11" +
		"\u013F\n\x11\f\x11\x0E\x11\u0142\v\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x05\x11\u0148\n\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x15\x05\x15\u0153\n\x15\x03\x15\x03\x15\x05\x15\u0157" +
		"\n\x15\x03\x15\x05\x15\u015A\n\x15\x03\x15\x03\x15\x05\x15\u015E\n\x15" +
		"\x03\x15\x05\x15\u0161\n\x15\x03\x15\x05\x15\u0164\n\x15\x03\x15\x03\x15" +
		"\x05\x15\u0168\n\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03" +
		"\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x07\x1B\u017B\n\x1B\f\x1B\x0E\x1B\u017E\v\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0185\n\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x05\x1B\u018A\n\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03" +
		"\x1F\x03\x1F\x05\x1F\u0194\n\x1F\x03 \x03 \x03 \x03 \x05 \u019A\n \x03" +
		" \x03 \x03 \x03 \x05 \u01A0\n \x03 \x05 \u01A3\n \x03 \x05 \u01A6\n \x03" +
		" \x03 \x03 \x03 \x05 \u01AC\n \x03 \x05 \u01AF\n \x03 \x05 \u01B2\n \x03" +
		" \x03 \x03 \x03 \x05 \u01B8\n \x03 \x05 \u01BB\n \x03 \x05 \u01BE\n \x03" +
		" \x03 \x03 \x03 \x05 \u01C4\n \x03 \x05 \u01C7\n \x03 \x05 \u01CA\n \x03" +
		" \x03 \x03 \x03 \x05 \u01D0\n \x03 \x05 \u01D3\n \x03 \x05 \u01D6\n \x03" +
		" \x03 \x03 \x03 \x05 \u01DC\n \x03 \x05 \u01DF\n \x03 \x05 \u01E2\n \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x05 \u01EA\n \x03 \x05 \u01ED\n \x03 \x05 " +
		"\u01F0\n \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u01F8\n \x03 \x05 \u01FB" +
		"\n \x03 \x05 \u01FE\n \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u0206\n \x03" +
		" \x05 \u0209\n \x03 \x05 \u020C\n \x03 \x03 \x03 \x03 \x03 \x05 \u0213" +
		"\n \x03 \x05 \u0216\n \x03 \x05 \u0219\n \x03 \x05 \u021C\n \x03 \x03" +
		" \x03 \x03 \x03 \x05 \u0223\n \x03 \x05 \u0226\n \x03 \x05 \u0229\n \x03" +
		" \x05 \u022C\n \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05" +
		" \u0238\n \x03 \x03 \x03 \x05 \u023D\n \x03 \x03 \x05 \u0241\n \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x05 \u024A\n \x03 \x03 \x05 \u024E\n \x03 " +
		"\x03 \x03 \x03 \x05 \u0254\n \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 " +
		"\x03 \x03 \x03 \x05 \u0261\n \x03 \x03 \x03 \x05 \u0266\n \x03 \x03 \x05" +
		" \u026A\n \x03 \x03 \x05 \u026E\n \x03 \x03 \x03 \x05 \u0273\n \x03 \x03" +
		" \x05 \u0277\n \x03 \x03 \x05 \u027B\n \x03 \x03 \x03 \x05 \u0280\n \x03" +
		" \x03 \x05 \u0284\n \x03 \x03 \x05 \u0288\n \x03 \x03 \x03 \x05 \u028D" +
		"\n \x03 \x03 \x05 \u0291\n \x03 \x03 \x03 \x03 \x03 \x07 \u0298\n \f " +
		"\x0E \u029B\v \x03 \x03 \x03 \x03 \x03 \x05 \u02A2\n \x03 \x03 \x05 \u02A6" +
		"\n \x03 \x03 \x03 \x03 \x03 \x07 \u02AD\n \f \x0E \u02B0\v \x03 \x03 " +
		"\x03 \x03 \x03 \x05 \u02B7\n \x03 \x03 \x05 \u02BB\n \x05 \u02BD\n \x03" +
		"!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u02CB" +
		"\n$\x03%\x03%\x03&\x07&\u02D0\n&\f&\x0E&\u02D3\v&\x03\'\x03\'\x03\'\x03" +
		"\'\x05\'\u02D9\n\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u02E3" +
		"\n(\x03(\x02\x02\x02)\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02\x02\b\x03\x02\x05\x06\x03" +
		"\x02\x11\x12\x03\x02\x15\x16\x03\x02 !\x03\x0212\x05\x02\x03\x03\x1B\x1B" +
		"VX\x02\u035C\x02S\x03\x02\x02\x02\x04i\x03\x02\x02\x02\x06k\x03\x02\x02" +
		"\x02\bs\x03\x02\x02\x02\n\x95\x03\x02\x02\x02\f\x97\x03\x02\x02\x02\x0E" +
		"\x99\x03\x02\x02\x02\x10\xA7\x03\x02\x02\x02\x12\xB6\x03\x02\x02\x02\x14" +
		"\xB8\x03\x02\x02\x02\x16\xBB\x03\x02\x02\x02\x18\xCF\x03\x02\x02\x02\x1A" +
		"\xD1\x03\x02\x02\x02\x1C\xE3\x03\x02\x02\x02\x1E\xEA\x03\x02\x02\x02 " +
		"\u0147\x03\x02\x02\x02\"\u0149\x03\x02\x02\x02$\u014B\x03\x02\x02\x02" +
		"&\u014D\x03\x02\x02\x02(\u014F\x03\x02\x02\x02*\u0169\x03\x02\x02\x02" +
		",\u016B\x03\x02\x02\x02.\u016D\x03\x02\x02\x020\u016F\x03\x02\x02\x02" +
		"2\u0172\x03\x02\x02\x024\u0174\x03\x02\x02\x026\u018B\x03\x02\x02\x02" +
		"8\u018D\x03\x02\x02\x02:\u018F\x03\x02\x02\x02<\u0191\x03\x02\x02\x02" +
		">\u02BC\x03\x02\x02\x02@\u02BE\x03\x02\x02\x02B\u02C0\x03\x02\x02\x02" +
		"D\u02C2\x03\x02\x02\x02F\u02CA\x03\x02\x02\x02H\u02CC\x03\x02\x02\x02" +
		"J\u02D1\x03\x02\x02\x02L\u02D8\x03\x02\x02\x02N\u02E2\x03\x02\x02\x02" +
		"PR\x05\x04\x03\x02QP\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02\x02\x02" +
		"ST\x03\x02\x02\x02T\x03\x03\x02\x02\x02US\x03\x02\x02\x02VW\x05\b\x05" +
		"\x02WX\x07Q\x02\x02Xj\x03\x02\x02\x02YZ\x05\x06\x04\x02Z[\x07Q\x02\x02" +
		"[j\x03\x02\x02\x02\\]\x05\x1A\x0E\x02]^\x07Q\x02\x02^j\x03\x02\x02\x02" +
		"_`\x05\x16\f\x02`a\x07Q\x02\x02aj\x03\x02\x02\x02bc\x05\x14\v\x02cd\x07" +
		"Q\x02\x02dj\x03\x02\x02\x02ef\x05\x0E\b\x02fg\x07Q\x02\x02gj\x03\x02\x02" +
		"\x02hj\x07Q\x02\x02iV\x03\x02\x02\x02iY\x03\x02\x02\x02i\\\x03\x02\x02" +
		"\x02i_\x03\x02\x02\x02ib\x03\x02\x02\x02ie\x03\x02\x02\x02ih\x03\x02\x02" +
		"\x02j\x05\x03\x02\x02\x02kl\x07\x04\x02\x02lo\t\x02\x02\x02mn\x07\x07" +
		"\x02\x02np\x07\b\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02pq\x03\x02" +
		"\x02\x02qr\x05N(\x02r\x07\x03\x02\x02\x02st\x07G\x02\x02tx\t\x02\x02\x02" +
		"uv\x07\x07\x02\x02vw\x07\t\x02\x02wy\x07\b\x02\x02xu\x03\x02\x02\x02x" +
		"y\x03\x02\x02\x02yz\x03\x02\x02\x02z~\x05N(\x02{}\x05\n\x06\x02|{\x03" +
		"\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02" +
		"\x7F\t\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x81\x83\x07\n\x02\x02\x82" +
		"\x81\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84" +
		"\x85\x07\v\x02\x02\x85\x87\x07\f\x02\x02\x86\x88\x07K\x02\x02\x87\x86" +
		"\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x96" +
		"\x05B\"\x02\x8A\x8C\x07\n\x02\x02\x8B\x8A\x03\x02\x02\x02\x8B\x8C\x03" +
		"\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8F\x07\r\x02\x02\x8E\x90\x07" +
		"K\x02\x02\x8F\x8E\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91\x03" +
		"\x02\x02\x02\x91\x96\x05D#\x02\x92\x93\x07\x19\x02\x02\x93\x94\x07K\x02" +
		"\x02\x94\x96\x05\f\x07\x02\x95\x82\x03\x02\x02\x02\x95\x8B\x03\x02\x02" +
		"\x02\x95\x92\x03\x02\x02\x02\x96\v\x03\x02\x02\x02\x97\x98\x07X\x02\x02" +
		"\x98\r\x03\x02\x02\x02\x99\x9F\x07\f\x02\x02\x9A\x9B\x05\x10\t\x02\x9B" +
		"\x9C\x07P\x02\x02\x9C\x9E\x03\x02\x02\x02\x9D\x9A\x03\x02\x02\x02\x9E" +
		"\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0" +
		"\xA2\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA3\x05\x10\t\x02\xA3" +
		"\x0F\x03\x02\x02\x02\xA4\xA6\x07O\x02\x02\xA5\xA4\x03\x02\x02\x02\xA6" +
		"\xA9\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8" +
		"\xAA\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAB\x07U\x02\x02\xAB" +
		"\xB4\x07K\x02\x02\xAC\xB5\x05\x12\n\x02\xAD\xAF\x07O\x02\x02\xAE\xAD\x03" +
		"\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03" +
		"\x02\x02\x02\xB1\xB3\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB5\x07" +
		"U\x02\x02\xB4\xAC\x03\x02\x02\x02\xB4\xB0\x03\x02\x02\x02\xB5\x11\x03" +
		"\x02\x02\x02\xB6\xB7\x05H%\x02\xB7\x13\x03\x02\x02\x02\xB8\xB9\x07\x0E" +
		"\x02\x02\xB9\xBA\x05N(\x02\xBA\x15\x03\x02\x02\x02\xBB\xBD\x07\x04\x02" +
		"\x02\xBC\xBE\x07\x0F\x02\x02\xBD\xBC\x03\x02\x02\x02\xBD\xBE\x03\x02\x02" +
		"\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC2\x07\x10\x02\x02\xC0\xC1\x07\x07\x02" +
		"\x02\xC1\xC3\x07\b\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02" +
		"\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC9\x05\x18\r\x02\xC5\xC6\x07P\x02\x02" +
		"\xC6\xC8\x05\x18\r\x02\xC7\xC5\x03\x02\x02\x02\xC8\xCB\x03\x02\x02\x02" +
		"\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCD\x03\x02\x02\x02" +
		"\xCB\xC9\x03\x02\x02\x02\xCC\xCE\t\x03\x02\x02\xCD\xCC\x03\x02\x02\x02" +
		"\xCD\xCE\x03\x02\x02\x02\xCE\x17\x03\x02\x02\x02\xCF\xD0\x05N(\x02\xD0" +
		"\x19\x03\x02\x02\x02\xD1\xD3\x07G\x02\x02\xD2\xD4\x07\x0F\x02\x02\xD3" +
		"\xD2\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5" +
		"\xD9\x07\x10\x02\x02\xD6\xD7\x07\x07\x02\x02\xD7\xD8\x07\t\x02\x02\xD8" +
		"\xDA\x07\b\x02\x02\xD9\xD6\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA" +
		"\xDB\x03\x02\x02\x02\xDB\xDC\x05\x1C\x0F\x02\xDC\xDE\x07R\x02\x02\xDD" +
		"\xDF\x05\x1E\x10\x02\xDE\xDD\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF" +
		"\xE0\x03\x02\x02\x02\xE0\xE1\x07S\x02\x02\xE1\xE2\x05J&\x02\xE2\x1B\x03" +
		"\x02\x02\x02\xE3\xE4\x05N(\x02\xE4\x1D\x03\x02\x02\x02\xE5\xE6\x05 \x11" +
		"\x02\xE6\xE7\x07P\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8\xE5\x03\x02\x02" +
		"\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02" +
		"\x02\xEB\xED\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xED\xEE\x05 \x11" +
		"\x02\xEE\x1F\x03\x02\x02\x02\xEF\xF0\x05\"\x12\x02\xF0\xF1\x05(\x15\x02" +
		"\xF1\u0148\x03\x02\x02\x02\xF2\xF4\x07\x13\x02\x02\xF3\xF5\x05$\x13\x02" +
		"\xF4\xF3\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF7\x03\x02\x02\x02" +
		"\xF6\xF2\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02" +
		"\xF8\xF9\x07\x14\x02\x02\xF9\xFA\x07\x15\x02\x02\xFA\u0100\x07R\x02\x02" +
		"\xFB\xFC\x05<\x1F\x02\xFC\xFD\x07P\x02\x02\xFD\xFF\x03\x02\x02\x02\xFE" +
		"\xFB\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02" +
		"\u0100\u0101\x03\x02\x02\x02\u0101\u0103\x03\x02\x02\x02\u0102\u0100\x03" +
		"\x02\x02\x02\u0103\u0104\x05<\x1F\x02\u0104\u0105\x07S\x02\x02\u0105\u0148" +
		"\x03\x02\x02\x02\u0106\u0108\t\x04\x02\x02\u0107\u0109\x05$\x13\x02\u0108" +
		"\u0107\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A\x03\x02" +
		"\x02\x02\u010A\u0110\x07R\x02\x02\u010B\u010C\x05<\x1F\x02\u010C\u010D" +
		"\x07P\x02\x02\u010D\u010F\x03\x02\x02\x02\u010E\u010B\x03\x02\x02\x02" +
		"\u010F\u0112\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u0111\x03" +
		"\x02\x02\x02\u0111\u0113\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0113" +
		"\u0114\x05<\x1F\x02\u0114\u0115\x07S\x02\x02\u0115\u0148\x03\x02\x02\x02" +
		"\u0116\u0118\x07\x13\x02\x02\u0117\u0119\x05$\x13\x02\u0118\u0117\x03" +
		"\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011B\x03\x02\x02\x02\u011A" +
		"\u0116\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x03\x02" +
		"\x02\x02\u011C\u011E\x07\x17\x02\x02\u011D\u011F\t\x04\x02\x02\u011E\u011D" +
		"\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0121\x03\x02\x02\x02" +
		"\u0120\u0122\x05&\x14\x02\u0121\u0120\x03\x02\x02\x02\u0121\u0122\x03" +
		"\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0129\x07R\x02\x02\u0124" +
		"\u0125\x05<\x1F\x02\u0125\u0126\x07P\x02\x02\u0126\u0128\x03\x02\x02\x02" +
		"\u0127\u0124\x03\x02\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129\u0127\x03" +
		"\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012C\x03\x02\x02\x02\u012B" +
		"\u0129\x03\x02\x02\x02\u012C\u012D\x05<\x1F\x02\u012D\u012E\x07S\x02\x02" +
		"\u012E\u0148\x03\x02\x02\x02\u012F\u0131\x07\x13\x02\x02\u0130\u0132\x05" +
		"$\x13\x02\u0131\u0130\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132" +
		"\u0134\x03\x02\x02\x02\u0133\u012F\x03\x02\x02\x02\u0133\u0134\x03\x02" +
		"\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0136\x07\x18\x02\x02\u0136" +
		"\u0138\x07\x15\x02\x02\u0137\u0139\x05&\x14\x02\u0138\u0137\x03\x02\x02" +
		"\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u0140" +
		"\x07R\x02\x02\u013B\u013C\x05<\x1F\x02\u013C\u013D\x07P\x02\x02\u013D" +
		"\u013F\x03\x02\x02\x02\u013E\u013B\x03\x02\x02\x02\u013F\u0142\x03\x02" +
		"\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141" +
		"\u0143\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0143\u0144\x05<\x1F" +
		"\x02\u0144\u0145\x07S\x02\x02\u0145\u0146\x054\x1B\x02\u0146\u0148\x03" +
		"\x02\x02\x02\u0147\xEF\x03\x02\x02\x02\u0147\xF6\x03\x02\x02\x02\u0147" +
		"\u0106\x03\x02\x02\x02\u0147\u011A\x03\x02\x02\x02\u0147\u0133\x03\x02" +
		"\x02\x02\u0148!\x03\x02\x02\x02\u0149\u014A\x05N(\x02\u014A#\x03\x02\x02" +
		"\x02\u014B\u014C\x05N(\x02\u014C%\x03\x02\x02\x02\u014D\u014E\x05N(\x02" +
		"\u014E\'\x03\x02\x02\x02\u014F\u0152\x05> \x02\u0150\u0153\x05.\x18\x02" +
		"\u0151\u0153\x050\x19\x02\u0152\u0150\x03\x02\x02\x02\u0152\u0151\x03" +
		"\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154" +
		"\u0155\x07\n\x02\x02\u0155\u0157\x05,\x17\x02\u0156\u0154\x03\x02\x02" +
		"\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0159\x03\x02\x02\x02\u0158\u015A" +
		"\x05*\x16\x02\u0159\u0158\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02" +
		"\u015A\u0163\x03\x02\x02\x02\u015B\u015D\x07\x17\x02\x02\u015C\u015E\x07" +
		"\x15\x02\x02\u015D\u015C\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E" +
		"\u0164\x03\x02\x02\x02\u015F\u0161\x07\x14\x02\x02\u0160\u015F\x03\x02" +
		"\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162" +
		"\u0164\x07\x15\x02\x02\u0163\u015B\x03\x02\x02\x02\u0163\u0160\x03\x02" +
		"\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0167\x03\x02\x02\x02\u0165" +
		"\u0166\x07\x19\x02\x02\u0166\u0168\x052\x1A\x02\u0167\u0165\x03\x02\x02" +
		"\x02\u0167\u0168\x03\x02\x02\x02\u0168)\x03\x02\x02\x02\u0169\u016A\x07" +
		"\x1A\x02\x02\u016A+\x03\x02\x02\x02\u016B\u016C\x05H%\x02\u016C-\x03\x02" +
		"\x02\x02\u016D\u016E\x07\x1B\x02\x02\u016E/\x03\x02\x02\x02\u016F\u0170" +
		"\x07\t\x02\x02\u0170\u0171\x07\x1B\x02\x02\u01711\x03\x02\x02\x02\u0172" +
		"\u0173\x07X\x02\x02\u01733\x03\x02\x02\x02\u0174\u0175\x07\x1C\x02\x02" +
		"\u0175\u0176\x05:\x1E\x02\u0176\u017C\x07R\x02\x02\u0177\u0178\x05<\x1F" +
		"\x02\u0178\u0179\x07P\x02\x02\u0179\u017B\x03\x02\x02\x02\u017A\u0177" +
		"\x03\x02\x02\x02\u017B\u017E\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02" +
		"\u017C\u017D\x03\x02\x02\x02\u017D\u017F\x03\x02\x02\x02\u017E\u017C\x03" +
		"\x02\x02\x02\u017F\u0180\x05<\x1F\x02\u0180\u0184\x07S\x02\x02\u0181\u0182" +
		"\x07\x1D\x02\x02\u0182\u0183\x07\x1E\x02\x02\u0183\u0185\x056\x1C\x02" +
		"\u0184\u0181\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0189\x03" +
		"\x02\x02\x02\u0186\u0187\x07\x1D\x02\x02\u0187\u0188\x07\x1F\x02\x02\u0188" +
		"\u018A\x058\x1D\x02\u0189\u0186\x03\x02\x02\x02\u0189\u018A\x03\x02\x02" +
		"\x02\u018A5\x03\x02\x02\x02\u018B\u018C\x05F$\x02\u018C7\x03\x02\x02\x02" +
		"\u018D\u018E\x05F$\x02\u018E9\x03\x02\x02\x02\u018F\u0190\x05N(\x02\u0190" +
		";\x03\x02\x02\x02\u0191\u0193\x05N(\x02\u0192\u0194\t\x05\x02\x02\u0193" +
		"\u0192\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194=\x03\x02\x02" +
		"\x02\u0195\u0199\x07\"\x02\x02\u0196\u0197\x07R\x02\x02\u0197\u0198\x07" +
		"V\x02\x02\u0198\u019A\x07S\x02\x02\u0199\u0196\x03\x02\x02\x02\u0199\u019A" +
		"\x03\x02\x02\x02\u019A\u02BD\x03\x02\x02\x02\u019B\u019F\x07#\x02\x02" +
		"\u019C\u019D\x07R\x02\x02\u019D\u019E\x07V\x02\x02\u019E\u01A0\x07S\x02" +
		"\x02\u019F\u019C\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A2" +
		"\x03\x02\x02\x02\u01A1\u01A3\x07$\x02\x02\u01A2\u01A1\x03\x02\x02\x02" +
		"\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A5\x03\x02\x02\x02\u01A4\u01A6\x07" +
		"&\x02\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6" +
		"\u02BD\x03\x02\x02\x02\u01A7\u01AB\x07\'\x02\x02\u01A8\u01A9\x07R\x02" +
		"\x02\u01A9\u01AA\x07V\x02\x02\u01AA\u01AC\x07S\x02\x02\u01AB\u01A8\x03" +
		"\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AE\x03\x02\x02\x02\u01AD" +
		"\u01AF\x07$\x02\x02\u01AE\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02" +
		"\x02\u01AF\u01B1\x03\x02\x02\x02\u01B0\u01B2\x07&\x02\x02\u01B1\u01B0" +
		"\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u02BD\x03\x02\x02\x02" +
		"\u01B3\u01B7\x07(\x02\x02\u01B4\u01B5\x07R\x02\x02\u01B5\u01B6\x07V\x02" +
		"\x02\u01B6\u01B8\x07S\x02\x02\u01B7\u01B4\x03\x02\x02\x02\u01B7\u01B8" +
		"\x03\x02\x02\x02\u01B8\u01BA\x03\x02\x02\x02\u01B9\u01BB\x07$\x02\x02" +
		"\u01BA\u01B9\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BD\x03" +
		"\x02\x02\x02\u01BC\u01BE\x07&\x02\x02\u01BD\u01BC\x03\x02\x02\x02\u01BD" +
		"\u01BE\x03\x02\x02\x02\u01BE\u02BD\x03\x02\x02\x02\u01BF\u01C3\x07)\x02" +
		"\x02\u01C0\u01C1\x07R\x02\x02\u01C1\u01C2\x07V\x02\x02\u01C2\u01C4\x07" +
		"S\x02\x02\u01C3\u01C0\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4" +
		"\u01C6\x03\x02\x02\x02\u01C5\u01C7\x07$\x02\x02\u01C6\u01C5\x03\x02\x02" +
		"\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C9\x03\x02\x02\x02\u01C8\u01CA" +
		"\x07&\x02\x02\u01C9\u01C8\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02" +
		"\u01CA\u02BD\x03\x02\x02\x02\u01CB\u01CF\x07*\x02\x02\u01CC\u01CD\x07" +
		"R\x02\x02\u01CD\u01CE\x07V\x02\x02\u01CE\u01D0\x07S\x02\x02\u01CF\u01CC" +
		"\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D2\x03\x02\x02\x02" +
		"\u01D1\u01D3\x07$\x02\x02\u01D2\u01D1\x03\x02\x02\x02\u01D2\u01D3\x03" +
		"\x02\x02\x02\u01D3\u01D5\x03\x02\x02\x02\u01D4\u01D6\x07&\x02\x02\u01D5" +
		"\u01D4\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u02BD\x03\x02" +
		"\x02\x02\u01D7\u01DB\x07+\x02\x02\u01D8\u01D9\x07R\x02\x02\u01D9\u01DA" +
		"\x07V\x02\x02\u01DA\u01DC\x07S\x02\x02\u01DB\u01D8\x03\x02\x02\x02\u01DB" +
		"\u01DC\x03\x02\x02\x02\u01DC\u01DE\x03\x02\x02\x02\u01DD\u01DF\x07$\x02" +
		"\x02\u01DE\u01DD\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E1" +
		"\x03\x02\x02\x02\u01E0\u01E2\x07&\x02\x02\u01E1\u01E0\x03\x02\x02\x02" +
		"\u01E1\u01E2\x03\x02\x02\x02\u01E2\u02BD\x03\x02\x02\x02\u01E3\u01E9\x07" +
		",\x02\x02\u01E4\u01E5\x07R\x02\x02\u01E5\u01E6\x07V\x02\x02\u01E6\u01E7" +
		"\x07P\x02\x02\u01E7\u01E8\x07V\x02\x02\u01E8\u01EA\x07S\x02\x02\u01E9" +
		"\u01E4\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EC\x03\x02" +
		"\x02\x02\u01EB\u01ED\x07$\x02\x02\u01EC\u01EB\x03\x02\x02\x02\u01EC\u01ED" +
		"\x03\x02\x02\x02\u01ED\u01EF\x03\x02\x02\x02\u01EE\u01F0\x07&\x02\x02" +
		"\u01EF\u01EE\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u02BD\x03" +
		"\x02\x02\x02\u01F1\u01F7\x07-\x02\x02\u01F2\u01F3\x07R\x02\x02\u01F3\u01F4" +
		"\x07V\x02\x02\u01F4\u01F5\x07P\x02\x02\u01F5\u01F6\x07V\x02\x02\u01F6" +
		"\u01F8\x07S\x02\x02\u01F7\u01F2\x03\x02\x02\x02\u01F7\u01F8\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u01F8\u01FA\x03\x02\x02\x02\u01F9\u01FB\x07$\x02\x02\u01FA\u01F9" +
		"\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FD\x03\x02\x02\x02" +
		"\u01FC\u01FE\x07&\x02\x02\u01FD\u01FC\x03\x02\x02\x02\u01FD\u01FE\x03" +
		"\x02\x02\x02\u01FE\u02BD\x03\x02\x02\x02\u01FF\u0205\x07.\x02\x02\u0200" +
		"\u0201\x07R\x02\x02\u0201\u0202\x07V\x02\x02\u0202\u0203\x07P\x02\x02" +
		"\u0203\u0204\x07V\x02\x02\u0204\u0206\x07S\x02\x02\u0205\u0200\x03\x02" +
		"\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0208\x03\x02\x02\x02\u0207" +
		"\u0209\x07$\x02\x02\u0208\u0207\x03\x02\x02\x02\u0208\u0209\x03\x02\x02" +
		"\x02\u0209\u020B\x03\x02\x02\x02\u020A\u020C\x07&\x02\x02\u020B\u020A" +
		"\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u02BD\x03\x02\x02\x02" +
		"\u020D\u0215\x07/\x02\x02\u020E\u020F\x07R\x02\x02\u020F\u0212\x07V\x02" +
		"\x02\u0210\u0211\x07P\x02\x02\u0211\u0213\x07V\x02\x02\u0212\u0210\x03" +
		"\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214" +
		"\u0216\x07S\x02\x02\u0215\u020E\x03\x02\x02\x02\u0215\u0216\x03\x02\x02" +
		"\x02\u0216\u0218\x03\x02\x02\x02\u0217\u0219\x07$\x02\x02\u0218\u0217" +
		"\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u021B\x03\x02\x02\x02" +
		"\u021A\u021C\x07&\x02\x02\u021B\u021A\x03\x02\x02\x02\u021B\u021C\x03" +
		"\x02\x02\x02\u021C\u02BD\x03\x02\x02\x02\u021D\u0225\x070\x02\x02\u021E" +
		"\u021F\x07R\x02\x02\u021F\u0222\x07V\x02\x02\u0220\u0221\x07P\x02\x02" +
		"\u0221\u0223\x07V\x02\x02\u0222\u0220\x03\x02\x02\x02\u0222\u0223\x03" +
		"\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0226\x07S\x02\x02\u0225" +
		"\u021E\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0228\x03\x02" +
		"\x02\x02\u0227\u0229\x07$\x02\x02\u0228\u0227\x03\x02\x02\x02\u0228\u0229" +
		"\x03\x02\x02\x02\u0229\u022B\x03\x02\x02\x02\u022A\u022C\x07&\x02\x02" +
		"\u022B\u022A\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u02BD\x03" +
		"\x02\x02\x02\u022D\u02BD\t\x06\x02\x02\u022E\u02BD\x073\x02\x02\u022F" +
		"\u02BD\x074\x02\x02\u0230\u02BD\x075\x02\x02\u0231\u02BD\x076\x02\x02" +
		"\u0232\u02BD\x077\x02\x02\u0233\u0237\x078\x02\x02\u0234\u0235\x07R\x02" +
		"\x02\u0235\u0236\x07V\x02\x02\u0236\u0238\x07S\x02\x02\u0237\u0234\x03" +
		"\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238\u023C\x03\x02\x02\x02\u0239" +
		"\u023A\x07\v\x02\x02\u023A\u023B\x07\f\x02\x02\u023B\u023D\x05B\"\x02" +
		"\u023C\u0239\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u0240\x03" +
		"\x02\x02\x02\u023E\u023F\x07\r\x02\x02\u023F\u0241\x05D#\x02\u0240\u023E" +
		"\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241\u02BD\x03\x02\x02\x02" +
		"\u0242\u0243\x079\x02\x02\u0243\u0244\x07R\x02\x02\u0244\u0245\x07V\x02" +
		"\x02\u0245\u0249\x07S\x02\x02\u0246\u0247\x07\v\x02\x02\u0247\u0248\x07" +
		"\f\x02\x02\u0248\u024A\x05B\"\x02\u0249\u0246\x03\x02\x02\x02\u0249\u024A" +
		"\x03\x02\x02\x02\u024A\u024D\x03\x02\x02\x02\u024B\u024C\x07\r\x02\x02" +
		"\u024C\u024E\x05D#\x02\u024D\u024B\x03\x02\x02\x02\u024D\u024E\x03\x02" +
		"\x02\x02\u024E\u02BD\x03\x02\x02\x02\u024F\u0253\x07%\x02\x02\u0250\u0251" +
		"\x07R\x02\x02\u0251\u0252\x07V\x02\x02\u0252\u0254\x07S\x02\x02\u0253" +
		"\u0250\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u02BD\x03\x02" +
		"\x02\x02\u0255\u0256\x07:\x02\x02\u0256\u0257\x07R\x02\x02\u0257\u0258" +
		"\x07V\x02\x02\u0258\u02BD\x07S\x02\x02\u0259\u02BD\x07;\x02\x02\u025A" +
		"\u02BD\x07<\x02\x02\u025B\u02BD\x07=\x02\x02\u025C\u02BD\x07>\x02\x02" +
		"\u025D\u02BD\x07?\x02\x02\u025E\u0260\x07@\x02\x02\u025F\u0261\x07%\x02" +
		"\x02\u0260\u025F\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0265" +
		"\x03\x02\x02\x02\u0262\u0263\x07\v\x02\x02\u0263\u0264\x07\f\x02\x02\u0264" +
		"\u0266\x05B\"\x02\u0265\u0262\x03\x02\x02\x02\u0265\u0266\x03\x02\x02" +
		"\x02\u0266\u0269\x03\x02\x02\x02\u0267\u0268\x07\r\x02\x02\u0268\u026A" +
		"\x05D#\x02\u0269\u0267\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A" +
		"\u02BD\x03\x02\x02\x02\u026B\u026D\x07A\x02\x02\u026C\u026E\x07%\x02\x02" +
		"\u026D\u026C\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u0272\x03" +
		"\x02\x02\x02\u026F\u0270\x07\v\x02\x02\u0270\u0271\x07\f\x02\x02\u0271" +
		"\u0273\x05B\"\x02\u0272\u026F\x03\x02\x02\x02\u0272\u0273\x03\x02\x02" +
		"\x02\u0273\u0276\x03\x02\x02\x02\u0274\u0275\x07\r\x02\x02\u0275\u0277" +
		"\x05D#\x02\u0276\u0274\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277" +
		"\u02BD\x03\x02\x02\x02\u0278\u027A\x07B\x02\x02\u0279\u027B\x07%\x02\x02" +
		"\u027A\u0279\x03\x02\x02\x02\u027A\u027B\x03\x02\x02\x02\u027B\u027F\x03" +
		"\x02\x02\x02\u027C\u027D\x07\v\x02\x02\u027D\u027E\x07\f\x02\x02\u027E" +
		"\u0280\x05B\"\x02\u027F\u027C\x03\x02\x02\x02\u027F\u0280\x03\x02\x02" +
		"\x02\u0280\u0283\x03\x02\x02\x02\u0281\u0282\x07\r\x02\x02\u0282\u0284" +
		"\x05D#\x02\u0283\u0281\x03\x02\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284" +
		"\u02BD\x03\x02\x02\x02\u0285\u0287\x07C\x02\x02\u0286\u0288\x07%\x02\x02" +
		"\u0287\u0286\x03\x02\x02\x02\u0287\u0288\x03\x02\x02\x02\u0288\u028C\x03" +
		"\x02\x02\x02\u0289\u028A\x07\v\x02\x02\u028A\u028B\x07\f\x02\x02\u028B" +
		"\u028D\x05B\"\x02\u028C\u0289\x03\x02\x02\x02\u028C\u028D\x03\x02\x02" +
		"\x02\u028D\u0290\x03\x02\x02\x02\u028E\u028F\x07\r\x02\x02\u028F\u0291" +
		"\x05D#\x02\u0290\u028E\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291" +
		"\u02BD\x03\x02\x02\x02\u0292\u0293\x07D\x02\x02\u0293\u0299\x07R\x02\x02" +
		"\u0294\u0295\x05@!\x02\u0295\u0296\x07P\x02\x02\u0296\u0298\x03\x02\x02" +
		"\x02\u0297\u0294\x03\x02\x02\x02\u0298\u029B\x03\x02\x02\x02\u0299\u0297" +
		"\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029C\x03\x02\x02\x02" +
		"\u029B\u0299\x03\x02\x02\x02\u029C\u029D\x05@!\x02\u029D\u02A1\x07S\x02" +
		"\x02\u029E\u029F\x07\v\x02\x02\u029F\u02A0\x07\f\x02\x02\u02A0\u02A2\x05" +
		"B\"\x02\u02A1\u029E\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2" +
		"\u02A5\x03\x02\x02\x02\u02A3\u02A4\x07\r\x02\x02\u02A4\u02A6\x05D#\x02" +
		"\u02A5\u02A3\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02BD\x03" +
		"\x02\x02\x02\u02A7\u02A8\x07\f\x02\x02\u02A8\u02AE\x07R\x02\x02\u02A9" +
		"\u02AA\x05@!\x02\u02AA\u02AB\x07P\x02\x02\u02AB\u02AD\x03\x02\x02\x02" +
		"\u02AC\u02A9\x03\x02\x02\x02\u02AD\u02B0\x03\x02\x02\x02\u02AE\u02AC\x03" +
		"\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B1\x03\x02\x02\x02\u02B0" +
		"\u02AE\x03\x02\x02\x02\u02B1\u02B2\x05@!\x02\u02B2\u02B6\x07S\x02\x02" +
		"\u02B3\u02B4\x07\v\x02\x02\u02B4\u02B5\x07\f\x02\x02\u02B5\u02B7\x05B" +
		"\"\x02\u02B6\u02B3\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7\u02BA" +
		"\x03\x02\x02\x02\u02B8\u02B9\x07\r\x02\x02\u02B9\u02BB\x05D#\x02\u02BA" +
		"\u02B8\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02BD\x03\x02" +
		"\x02\x02\u02BC\u0195\x03\x02\x02\x02\u02BC\u019B\x03\x02\x02\x02\u02BC" +
		"\u01A7\x03\x02\x02\x02\u02BC\u01B3\x03\x02\x02\x02\u02BC\u01BF\x03\x02" +
		"\x02\x02\u02BC\u01CB\x03\x02\x02\x02\u02BC\u01D7\x03\x02\x02\x02\u02BC" +
		"\u01E3\x03\x02\x02\x02\u02BC\u01F1\x03\x02\x02\x02\u02BC\u01FF\x03\x02" +
		"\x02\x02\u02BC\u020D\x03\x02\x02\x02\u02BC\u021D\x03\x02\x02\x02\u02BC" +
		"\u022D\x03\x02\x02\x02\u02BC\u022E\x03\x02\x02\x02\u02BC\u022F\x03\x02" +
		"\x02\x02\u02BC\u0230\x03\x02\x02\x02\u02BC\u0231\x03\x02\x02\x02\u02BC" +
		"\u0232\x03\x02\x02\x02\u02BC\u0233\x03\x02\x02\x02\u02BC\u0242\x03\x02" +
		"\x02\x02\u02BC\u024F\x03\x02\x02\x02\u02BC\u0255\x03\x02\x02\x02\u02BC" +
		"\u0259\x03\x02\x02\x02\u02BC\u025A\x03\x02\x02\x02\u02BC\u025B\x03\x02" +
		"\x02\x02\u02BC\u025C\x03\x02\x02\x02\u02BC\u025D\x03\x02\x02\x02\u02BC" +
		"\u025E\x03\x02\x02\x02\u02BC\u026B\x03\x02\x02\x02\u02BC\u0278\x03\x02" +
		"\x02\x02\u02BC\u0285\x03\x02\x02\x02\u02BC\u0292\x03\x02\x02\x02\u02BC" +
		"\u02A7\x03\x02\x02\x02\u02BD?\x03\x02\x02\x02\u02BE\u02BF\x07X\x02\x02" +
		"\u02BFA\x03\x02\x02\x02\u02C0\u02C1\x05N(\x02\u02C1C\x03\x02\x02\x02\u02C2" +
		"\u02C3\x05N(\x02\u02C3E\x03\x02\x02\x02\u02C4\u02CB\x07\x11\x02\x02\u02C5" +
		"\u02CB\x07\x12\x02\x02\u02C6\u02C7\x07\f\x02\x02\u02C7\u02CB\x07\x1B\x02" +
		"\x02\u02C8\u02C9\x07E\x02\x02\u02C9\u02CB\x07F\x02\x02\u02CA\u02C4\x03" +
		"\x02\x02\x02\u02CA\u02C5\x03\x02\x02\x02\u02CA\u02C6\x03\x02\x02\x02\u02CA" +
		"\u02C8\x03\x02\x02\x02\u02CBG\x03\x02\x02\x02\u02CC\u02CD\t\x07\x02\x02" +
		"\u02CDI\x03\x02\x02\x02\u02CE\u02D0\x05L\'\x02\u02CF\u02CE\x03\x02\x02" +
		"\x02\u02D0\u02D3\x03\x02\x02\x02\u02D1\u02CF\x03\x02\x02\x02\u02D1\u02D2" +
		"\x03\x02\x02\x02\u02D2K\x03\x02\x02\x02\u02D3\u02D1\x03\x02\x02\x02\u02D4" +
		"\u02D5\x07U\x02\x02\u02D5\u02D6\x07K\x02\x02\u02D6\u02D9\x07U\x02\x02" +
		"\u02D7\u02D9\x05\n\x06\x02\u02D8\u02D4\x03\x02\x02\x02\u02D8\u02D7\x03" +
		"\x02\x02\x02\u02D9M\x03\x02\x02\x02\u02DA\u02E3\x07T\x02\x02\u02DB\u02DC" +
		"\x07L\x02\x02\u02DC\u02DD\x07U\x02\x02\u02DD\u02E3\x07L\x02\x02\u02DE" +
		"\u02DF\x07M\x02\x02\u02DF\u02E0\x07U\x02\x02\u02E0\u02E3\x07M\x02\x02" +
		"\u02E1\u02E3\x07U\x02\x02\u02E2\u02DA\x03\x02\x02\x02\u02E2\u02DB\x03" +
		"\x02\x02\x02\u02E2\u02DE\x03\x02\x02\x02\u02E2\u02E1\x03\x02\x02\x02\u02E3" +
		"O\x03\x02\x02\x02sSiox~\x82\x87\x8B\x8F\x95\x9F\xA7\xB0\xB4\xBD\xC2\xC9" +
		"\xCD\xD3\xD9\xDE\xEA\xF4\xF6\u0100\u0108\u0110\u0118\u011A\u011E\u0121" +
		"\u0129\u0131\u0133\u0138\u0140\u0147\u0152\u0156\u0159\u015D\u0160\u0163" +
		"\u0167\u017C\u0184\u0189\u0193\u0199\u019F\u01A2\u01A5\u01AB\u01AE\u01B1" +
		"\u01B7\u01BA\u01BD\u01C3\u01C6\u01C9\u01CF\u01D2\u01D5\u01DB\u01DE\u01E1" +
		"\u01E9\u01EC\u01EF\u01F7\u01FA\u01FD\u0205\u0208\u020B\u0212\u0215\u0218" +
		"\u021B\u0222\u0225\u0228\u022B\u0237\u023C\u0240\u0249\u024D\u0253\u0260" +
		"\u0265\u0269\u026D\u0272\u0276\u027A\u027F\u0283\u0287\u028C\u0290\u0299" +
		"\u02A1\u02A5\u02AE\u02B6\u02BA\u02BC\u02CA\u02D1\u02D8\u02E2";
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


