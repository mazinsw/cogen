// Generated from src/grammar/TemplateParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { TemplateParserListener } from './TemplateParserListener';

export class TemplateParser extends Parser {
  public static readonly TEXT = 1;
  public static readonly OPEN = 2;
  public static readonly CLOSE = 3;
  public static readonly K_ALL = 4;
  public static readonly K_ARRAY = 5;
  public static readonly K_BIGINT = 6;
  public static readonly K_BLOB = 7;
  public static readonly K_BOOLEAN = 8;
  public static readonly K_CHAR = 9;
  public static readonly K_CHARS = 10;
  public static readonly K_COMMENT = 11;
  public static readonly K_CONSTRAINT = 12;
  public static readonly K_CONTAINS = 13;
  public static readonly K_COUNT = 14;
  public static readonly K_CURRENCY = 15;
  public static readonly K_DATE = 16;
  public static readonly K_DATETIME = 17;
  public static readonly K_DEFAULT = 18;
  public static readonly K_DELETE = 19;
  public static readonly K_DEPENDS = 20;
  public static readonly K_DESCRIPTION = 21;
  public static readonly K_DESCRIPTOR = 22;
  public static readonly K_DOUBLE = 23;
  public static readonly K_EACH = 24;
  public static readonly K_ELSE = 25;
  public static readonly K_END = 26;
  public static readonly K_ENUM = 27;
  public static readonly K_EXISTS = 28;
  public static readonly K_EXTRA = 29;
  public static readonly K_FEMININE = 30;
  public static readonly K_FEW_FIELDS = 31;
  public static readonly K_FIELD = 32;
  public static readonly K_FINDS = 33;
  public static readonly K_FIRST = 34;
  public static readonly K_FLOAT = 35;
  public static readonly K_FOLDER = 36;
  public static readonly K_FOREIGN = 37;
  public static readonly K_FULLTEXT = 38;
  public static readonly K_GENDER = 39;
  public static readonly K_HEIGHT = 40;
  public static readonly K_HIGH = 41;
  public static readonly K_IF = 42;
  public static readonly K_IGNORED = 43;
  public static readonly K_IMAGE = 44;
  public static readonly K_INDEX = 45;
  public static readonly K_INFO = 46;
  public static readonly K_INHERITED = 47;
  public static readonly K_INSERT = 48;
  public static readonly K_INT = 49;
  public static readonly K_INTEGER = 50;
  public static readonly K_JSON = 51;
  public static readonly K_LENGTH = 52;
  public static readonly K_LETTER = 53;
  public static readonly K_LOW = 54;
  public static readonly K_MANY = 55;
  public static readonly K_MASCULINE = 56;
  public static readonly K_MASK = 57;
  public static readonly K_MASKED = 58;
  public static readonly K_MATCH = 59;
  public static readonly K_NAME = 60;
  public static readonly K_NOID = 61;
  public static readonly K_NON_FIRST = 62;
  public static readonly K_NON_NULL = 63;
  public static readonly K_NORM = 64;
  public static readonly K_NOT_NULL = 65;
  public static readonly K_NULL = 66;
  public static readonly K_NUMBER = 67;
  public static readonly K_ON = 68;
  public static readonly K_OPTION = 69;
  public static readonly K_OPTIONAL = 70;
  public static readonly K_ORDER = 71;
  public static readonly K_PACKAGE = 72;
  public static readonly K_PASSWORD = 73;
  public static readonly K_PATH = 74;
  public static readonly K_PLURAL = 75;
  public static readonly K_PLURALIZABLE = 76;
  public static readonly K_PRIMARY_KEY = 77;
  public static readonly K_PRIMARY = 78;
  public static readonly K_RADIO = 79;
  public static readonly K_REFERENCE = 80;
  public static readonly K_REPEATED = 81;
  public static readonly K_REPLACE = 82;
  public static readonly K_REQUIRED = 83;
  public static readonly K_REVERSE_EACH = 84;
  public static readonly K_SEARCHABLE = 85;
  public static readonly K_SELF_REFERENCE = 86;
  public static readonly K_SINGLE = 87;
  public static readonly K_SINGULAR = 88;
  public static readonly K_SIZE = 89;
  public static readonly K_STRING = 90;
  public static readonly K_STYLE = 91;
  public static readonly K_TABLE = 92;
  public static readonly K_TEXT = 93;
  public static readonly K_TIME = 94;
  public static readonly K_TIMESTAMP = 95;
  public static readonly K_TINYINT = 96;
  public static readonly K_UNIQUE = 97;
  public static readonly K_UNIX = 98;
  public static readonly K_UNPLURALIZABLE = 99;
  public static readonly K_UNSIGNED = 100;
  public static readonly K_UPDATE = 101;
  public static readonly K_WIDTH = 102;
  public static readonly DOT = 103;
  public static readonly LPAR = 104;
  public static readonly RPAR = 105;
  public static readonly OR = 106;
  public static readonly AND = 107;
  public static readonly NOT = 108;
  public static readonly WORD = 109;
  public static readonly MATCH_OPEN = 110;
  public static readonly FINDS_OPEN = 111;
  public static readonly REPLACE_OPEN = 112;
  public static readonly REGEX_CLOSE = 113;
  public static readonly REGEX = 114;
  public static readonly REGEX_OPEN = 115;
  public static readonly PATTERN_CLOSE = 116;
  public static readonly PATTERN = 117;
  public static readonly PATTERN_OPEN = 118;
  public static readonly REPLACEMENT_OPEN = 119;
  public static readonly REPLACEMENT_CLOSE = 120;
  public static readonly REPLACEMENT = 121;
  public static readonly FLAGS_OPEN = 122;
  public static readonly FLAGS_CLOSE = 123;
  public static readonly REGEX_FLAGS = 124;
  public static readonly RULE_template = 0;
  public static readonly RULE_statement = 1;
  public static readonly RULE_block = 2;
  public static readonly RULE_tableIfStmt = 3;
  public static readonly RULE_tableExistsStmt = 4;
  public static readonly RULE_tableFindsStmt = 5;
  public static readonly RULE_tableMatchStmt = 6;
  public static readonly RULE_tableContainsStmt = 7;
  public static readonly RULE_tableEachStmt = 8;
  public static readonly RULE_tableElseIfStmt = 9;
  public static readonly RULE_tableElseExistsStmt = 10;
  public static readonly RULE_tableElseFindsStmt = 11;
  public static readonly RULE_tableElseMatchStmt = 12;
  public static readonly RULE_tableElseContainsStmt = 13;
  public static readonly RULE_tableElseEachStmt = 14;
  public static readonly RULE_tableElseEndStmt = 15;
  public static readonly RULE_tableElseStmt = 16;
  public static readonly RULE_tableElseCondEndStmt = 17;
  public static readonly RULE_tableElseCondStmt = 18;
  public static readonly RULE_inheritedIfStmt = 19;
  public static readonly RULE_inheritedExistsStmt = 20;
  public static readonly RULE_inheritedFindsStmt = 21;
  public static readonly RULE_inheritedMatchStmt = 22;
  public static readonly RULE_inheritedContainsStmt = 23;
  public static readonly RULE_inheritedEachStmt = 24;
  public static readonly RULE_inheritedElseIfStmt = 25;
  public static readonly RULE_inheritedElseExistsStmt = 26;
  public static readonly RULE_inheritedElseFindsStmt = 27;
  public static readonly RULE_inheritedElseMatchStmt = 28;
  public static readonly RULE_inheritedElseContainsStmt = 29;
  public static readonly RULE_inheritedElseEachStmt = 30;
  public static readonly RULE_inheritedElseEndStmt = 31;
  public static readonly RULE_inheritedElseStmt = 32;
  public static readonly RULE_inheritedElseCondEndStmt = 33;
  public static readonly RULE_inheritedElseCondStmt = 34;
  public static readonly RULE_referenceIfStmt = 35;
  public static readonly RULE_referenceExistsStmt = 36;
  public static readonly RULE_referenceFindsStmt = 37;
  public static readonly RULE_referenceMatchStmt = 38;
  public static readonly RULE_referenceContainsStmt = 39;
  public static readonly RULE_referenceEachStmt = 40;
  public static readonly RULE_referenceReverseEachStmt = 41;
  public static readonly RULE_referenceElseIfStmt = 42;
  public static readonly RULE_referenceElseExistsStmt = 43;
  public static readonly RULE_referenceElseFindsStmt = 44;
  public static readonly RULE_referenceElseMatchStmt = 45;
  public static readonly RULE_referenceElseContainsStmt = 46;
  public static readonly RULE_referenceElseEachStmt = 47;
  public static readonly RULE_referenceElseReverseEachStmt = 48;
  public static readonly RULE_referenceElseEndStmt = 49;
  public static readonly RULE_referenceElseStmt = 50;
  public static readonly RULE_referenceElseCondEndStmt = 51;
  public static readonly RULE_referenceElseCondStmt = 52;
  public static readonly RULE_fieldIfStmt = 53;
  public static readonly RULE_fieldExistsStmt = 54;
  public static readonly RULE_fieldMatchStmt = 55;
  public static readonly RULE_fieldContainsStmt = 56;
  public static readonly RULE_fieldEachStmt = 57;
  public static readonly RULE_fieldReverseEachStmt = 58;
  public static readonly RULE_fieldElseIfStmt = 59;
  public static readonly RULE_fieldElseExistsStmt = 60;
  public static readonly RULE_fieldElseMatchStmt = 61;
  public static readonly RULE_fieldElseContainsStmt = 62;
  public static readonly RULE_fieldElseEachStmt = 63;
  public static readonly RULE_fieldElseReverseEachStmt = 64;
  public static readonly RULE_fieldElseEndStmt = 65;
  public static readonly RULE_fieldElseStmt = 66;
  public static readonly RULE_fieldElseCondEndStmt = 67;
  public static readonly RULE_fieldElseCondStmt = 68;
  public static readonly RULE_descriptorIfStmt = 69;
  public static readonly RULE_descriptorMatchStmt = 70;
  public static readonly RULE_descriptorContainsStmt = 71;
  public static readonly RULE_descriptorElseIfStmt = 72;
  public static readonly RULE_descriptorElseMatchStmt = 73;
  public static readonly RULE_descriptorElseContainsStmt = 74;
  public static readonly RULE_descriptorElseEndStmt = 75;
  public static readonly RULE_descriptorElseStmt = 76;
  public static readonly RULE_descriptorElseCondEndStmt = 77;
  public static readonly RULE_descriptorElseCondStmt = 78;
  public static readonly RULE_indexIfStmt = 79;
  public static readonly RULE_indexEachStmt = 80;
  public static readonly RULE_indexElseIfStmt = 81;
  public static readonly RULE_indexElseEachStmt = 82;
  public static readonly RULE_indexElseEndStmt = 83;
  public static readonly RULE_indexElseStmt = 84;
  public static readonly RULE_indexElseCondEndStmt = 85;
  public static readonly RULE_uniqueIfStmt = 86;
  public static readonly RULE_uniqueEachStmt = 87;
  public static readonly RULE_uniqueElseIfStmt = 88;
  public static readonly RULE_uniqueElseEachStmt = 89;
  public static readonly RULE_uniqueElseEndStmt = 90;
  public static readonly RULE_uniqueElseStmt = 91;
  public static readonly RULE_uniqueElseCondEndStmt = 92;
  public static readonly RULE_primaryIfStmt = 93;
  public static readonly RULE_primaryEachStmt = 94;
  public static readonly RULE_primaryElseIfStmt = 95;
  public static readonly RULE_primaryElseEachStmt = 96;
  public static readonly RULE_primaryElseEndStmt = 97;
  public static readonly RULE_primaryElseStmt = 98;
  public static readonly RULE_primaryElseCondEndStmt = 99;
  public static readonly RULE_constraintIfStmt = 100;
  public static readonly RULE_constraintEachStmt = 101;
  public static readonly RULE_constraintElseIfStmt = 102;
  public static readonly RULE_constraintElseEachStmt = 103;
  public static readonly RULE_constraintElseEndStmt = 104;
  public static readonly RULE_constraintElseStmt = 105;
  public static readonly RULE_constraintElseCondEndStmt = 106;
  public static readonly RULE_foreignIfStmt = 107;
  public static readonly RULE_foreignEachStmt = 108;
  public static readonly RULE_foreignElseIfStmt = 109;
  public static readonly RULE_foreignElseEachStmt = 110;
  public static readonly RULE_foreignElseEndStmt = 111;
  public static readonly RULE_foreignElseStmt = 112;
  public static readonly RULE_foreignElseCondEndStmt = 113;
  public static readonly RULE_commentEachStmt = 114;
  public static readonly RULE_descriptionEachStmt = 115;
  public static readonly RULE_optionEachStmt = 116;
  public static readonly RULE_constant = 117;
  public static readonly RULE_tableStmt = 118;
  public static readonly RULE_tableProps = 119;
  public static readonly RULE_fieldStmt = 120;
  public static readonly RULE_fieldProps = 121;
  public static readonly RULE_constraintStmt = 122;
  public static readonly RULE_replaceProp = 123;
  public static readonly RULE_allLevels = 124;
  public static readonly RULE_eachCondition = 125;
  public static readonly RULE_testCondition = 126;
  public static readonly RULE_condition = 127;
  public static readonly RULE_anyCondition = 128;
  public static readonly RULE_anyPriorityCondition = 129;
  public static readonly RULE_negativePriorityCondition = 130;
  public static readonly RULE_priorityCondition = 131;
  public static readonly RULE_orCondition = 132;
  public static readonly RULE_andCondition = 133;
  public static readonly RULE_anyExpression = 134;
  public static readonly RULE_negativeExpression = 135;
  public static readonly RULE_expression = 136;
  public static readonly RULE_textContent = 137;
  public static readonly RULE_tableLevel = 138;
  public static readonly RULE_fieldLevel = 139;
  public static readonly RULE_constraintLevel = 140;
  public static readonly RULE_pattern = 141;
  public static readonly RULE_replacement = 142;
  public static readonly RULE_flags = 143;
  public static readonly RULE_regex = 144;
  public static readonly RULE_word = 145;
  public static readonly RULE_tableProp = 146;
  public static readonly RULE_fieldProp = 147;
  public static readonly RULE_attribute = 148;
  public static readonly RULE_property = 149;
  public static readonly RULE_type = 150;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'template',
    'statement',
    'block',
    'tableIfStmt',
    'tableExistsStmt',
    'tableFindsStmt',
    'tableMatchStmt',
    'tableContainsStmt',
    'tableEachStmt',
    'tableElseIfStmt',
    'tableElseExistsStmt',
    'tableElseFindsStmt',
    'tableElseMatchStmt',
    'tableElseContainsStmt',
    'tableElseEachStmt',
    'tableElseEndStmt',
    'tableElseStmt',
    'tableElseCondEndStmt',
    'tableElseCondStmt',
    'inheritedIfStmt',
    'inheritedExistsStmt',
    'inheritedFindsStmt',
    'inheritedMatchStmt',
    'inheritedContainsStmt',
    'inheritedEachStmt',
    'inheritedElseIfStmt',
    'inheritedElseExistsStmt',
    'inheritedElseFindsStmt',
    'inheritedElseMatchStmt',
    'inheritedElseContainsStmt',
    'inheritedElseEachStmt',
    'inheritedElseEndStmt',
    'inheritedElseStmt',
    'inheritedElseCondEndStmt',
    'inheritedElseCondStmt',
    'referenceIfStmt',
    'referenceExistsStmt',
    'referenceFindsStmt',
    'referenceMatchStmt',
    'referenceContainsStmt',
    'referenceEachStmt',
    'referenceReverseEachStmt',
    'referenceElseIfStmt',
    'referenceElseExistsStmt',
    'referenceElseFindsStmt',
    'referenceElseMatchStmt',
    'referenceElseContainsStmt',
    'referenceElseEachStmt',
    'referenceElseReverseEachStmt',
    'referenceElseEndStmt',
    'referenceElseStmt',
    'referenceElseCondEndStmt',
    'referenceElseCondStmt',
    'fieldIfStmt',
    'fieldExistsStmt',
    'fieldMatchStmt',
    'fieldContainsStmt',
    'fieldEachStmt',
    'fieldReverseEachStmt',
    'fieldElseIfStmt',
    'fieldElseExistsStmt',
    'fieldElseMatchStmt',
    'fieldElseContainsStmt',
    'fieldElseEachStmt',
    'fieldElseReverseEachStmt',
    'fieldElseEndStmt',
    'fieldElseStmt',
    'fieldElseCondEndStmt',
    'fieldElseCondStmt',
    'descriptorIfStmt',
    'descriptorMatchStmt',
    'descriptorContainsStmt',
    'descriptorElseIfStmt',
    'descriptorElseMatchStmt',
    'descriptorElseContainsStmt',
    'descriptorElseEndStmt',
    'descriptorElseStmt',
    'descriptorElseCondEndStmt',
    'descriptorElseCondStmt',
    'indexIfStmt',
    'indexEachStmt',
    'indexElseIfStmt',
    'indexElseEachStmt',
    'indexElseEndStmt',
    'indexElseStmt',
    'indexElseCondEndStmt',
    'uniqueIfStmt',
    'uniqueEachStmt',
    'uniqueElseIfStmt',
    'uniqueElseEachStmt',
    'uniqueElseEndStmt',
    'uniqueElseStmt',
    'uniqueElseCondEndStmt',
    'primaryIfStmt',
    'primaryEachStmt',
    'primaryElseIfStmt',
    'primaryElseEachStmt',
    'primaryElseEndStmt',
    'primaryElseStmt',
    'primaryElseCondEndStmt',
    'constraintIfStmt',
    'constraintEachStmt',
    'constraintElseIfStmt',
    'constraintElseEachStmt',
    'constraintElseEndStmt',
    'constraintElseStmt',
    'constraintElseCondEndStmt',
    'foreignIfStmt',
    'foreignEachStmt',
    'foreignElseIfStmt',
    'foreignElseEachStmt',
    'foreignElseEndStmt',
    'foreignElseStmt',
    'foreignElseCondEndStmt',
    'commentEachStmt',
    'descriptionEachStmt',
    'optionEachStmt',
    'constant',
    'tableStmt',
    'tableProps',
    'fieldStmt',
    'fieldProps',
    'constraintStmt',
    'replaceProp',
    'allLevels',
    'eachCondition',
    'testCondition',
    'condition',
    'anyCondition',
    'anyPriorityCondition',
    'negativePriorityCondition',
    'priorityCondition',
    'orCondition',
    'andCondition',
    'anyExpression',
    'negativeExpression',
    'expression',
    'textContent',
    'tableLevel',
    'fieldLevel',
    'constraintLevel',
    'pattern',
    'replacement',
    'flags',
    'regex',
    'word',
    'tableProp',
    'fieldProp',
    'attribute',
    'property',
    'type',
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    "'$['",
    "']'",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "'.'",
    undefined,
    undefined,
    "'|'",
    "'&'",
    "'~'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'TEXT',
    'OPEN',
    'CLOSE',
    'K_ALL',
    'K_ARRAY',
    'K_BIGINT',
    'K_BLOB',
    'K_BOOLEAN',
    'K_CHAR',
    'K_CHARS',
    'K_COMMENT',
    'K_CONSTRAINT',
    'K_CONTAINS',
    'K_COUNT',
    'K_CURRENCY',
    'K_DATE',
    'K_DATETIME',
    'K_DEFAULT',
    'K_DELETE',
    'K_DEPENDS',
    'K_DESCRIPTION',
    'K_DESCRIPTOR',
    'K_DOUBLE',
    'K_EACH',
    'K_ELSE',
    'K_END',
    'K_ENUM',
    'K_EXISTS',
    'K_EXTRA',
    'K_FEMININE',
    'K_FEW_FIELDS',
    'K_FIELD',
    'K_FINDS',
    'K_FIRST',
    'K_FLOAT',
    'K_FOLDER',
    'K_FOREIGN',
    'K_FULLTEXT',
    'K_GENDER',
    'K_HEIGHT',
    'K_HIGH',
    'K_IF',
    'K_IGNORED',
    'K_IMAGE',
    'K_INDEX',
    'K_INFO',
    'K_INHERITED',
    'K_INSERT',
    'K_INT',
    'K_INTEGER',
    'K_JSON',
    'K_LENGTH',
    'K_LETTER',
    'K_LOW',
    'K_MANY',
    'K_MASCULINE',
    'K_MASK',
    'K_MASKED',
    'K_MATCH',
    'K_NAME',
    'K_NOID',
    'K_NON_FIRST',
    'K_NON_NULL',
    'K_NORM',
    'K_NOT_NULL',
    'K_NULL',
    'K_NUMBER',
    'K_ON',
    'K_OPTION',
    'K_OPTIONAL',
    'K_ORDER',
    'K_PACKAGE',
    'K_PASSWORD',
    'K_PATH',
    'K_PLURAL',
    'K_PLURALIZABLE',
    'K_PRIMARY_KEY',
    'K_PRIMARY',
    'K_RADIO',
    'K_REFERENCE',
    'K_REPEATED',
    'K_REPLACE',
    'K_REQUIRED',
    'K_REVERSE_EACH',
    'K_SEARCHABLE',
    'K_SELF_REFERENCE',
    'K_SINGLE',
    'K_SINGULAR',
    'K_SIZE',
    'K_STRING',
    'K_STYLE',
    'K_TABLE',
    'K_TEXT',
    'K_TIME',
    'K_TIMESTAMP',
    'K_TINYINT',
    'K_UNIQUE',
    'K_UNIX',
    'K_UNPLURALIZABLE',
    'K_UNSIGNED',
    'K_UPDATE',
    'K_WIDTH',
    'DOT',
    'LPAR',
    'RPAR',
    'OR',
    'AND',
    'NOT',
    'WORD',
    'MATCH_OPEN',
    'FINDS_OPEN',
    'REPLACE_OPEN',
    'REGEX_CLOSE',
    'REGEX',
    'REGEX_OPEN',
    'PATTERN_CLOSE',
    'PATTERN',
    'PATTERN_OPEN',
    'REPLACEMENT_OPEN',
    'REPLACEMENT_CLOSE',
    'REPLACEMENT',
    'FLAGS_OPEN',
    'FLAGS_CLOSE',
    'REGEX_FLAGS',
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    TemplateParser._LITERAL_NAMES,
    TemplateParser._SYMBOLIC_NAMES,
    [],
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return TemplateParser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'TemplateParser.g4';
  }

  // @Override
  public get ruleNames(): string[] {
    return TemplateParser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return TemplateParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string,
  ): FailedPredicateException {
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
        this.state = 305;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === TemplateParser.TEXT || _la === TemplateParser.OPEN) {
          {
            {
              this.state = 302;
              this.statement();
            }
          }
          this.state = 307;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 308;
        this.match(TemplateParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public statement(): StatementContext {
    let _localctx: StatementContext = new StatementContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 2, TemplateParser.RULE_statement);
    try {
      this.state = 313;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 310;
            this.block();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 311;
            this.constant();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 312;
            this.textContent();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public block(): BlockContext {
    let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, TemplateParser.RULE_block);
    try {
      this.state = 356;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 315;
            this.tableIfStmt();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 316;
            this.tableExistsStmt();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 317;
            this.tableFindsStmt();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 318;
            this.tableMatchStmt();
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 319;
            this.tableContainsStmt();
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 320;
            this.tableEachStmt();
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 321;
            this.inheritedIfStmt();
          }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 322;
            this.inheritedExistsStmt();
          }
          break;

        case 9:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 323;
            this.inheritedFindsStmt();
          }
          break;

        case 10:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 324;
            this.inheritedMatchStmt();
          }
          break;

        case 11:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 325;
            this.inheritedContainsStmt();
          }
          break;

        case 12:
          this.enterOuterAlt(_localctx, 12);
          {
            this.state = 326;
            this.inheritedEachStmt();
          }
          break;

        case 13:
          this.enterOuterAlt(_localctx, 13);
          {
            this.state = 327;
            this.referenceIfStmt();
          }
          break;

        case 14:
          this.enterOuterAlt(_localctx, 14);
          {
            this.state = 328;
            this.referenceExistsStmt();
          }
          break;

        case 15:
          this.enterOuterAlt(_localctx, 15);
          {
            this.state = 329;
            this.referenceFindsStmt();
          }
          break;

        case 16:
          this.enterOuterAlt(_localctx, 16);
          {
            this.state = 330;
            this.referenceMatchStmt();
          }
          break;

        case 17:
          this.enterOuterAlt(_localctx, 17);
          {
            this.state = 331;
            this.referenceContainsStmt();
          }
          break;

        case 18:
          this.enterOuterAlt(_localctx, 18);
          {
            this.state = 332;
            this.referenceEachStmt();
          }
          break;

        case 19:
          this.enterOuterAlt(_localctx, 19);
          {
            this.state = 333;
            this.referenceReverseEachStmt();
          }
          break;

        case 20:
          this.enterOuterAlt(_localctx, 20);
          {
            this.state = 334;
            this.fieldIfStmt();
          }
          break;

        case 21:
          this.enterOuterAlt(_localctx, 21);
          {
            this.state = 335;
            this.fieldExistsStmt();
          }
          break;

        case 22:
          this.enterOuterAlt(_localctx, 22);
          {
            this.state = 336;
            this.fieldMatchStmt();
          }
          break;

        case 23:
          this.enterOuterAlt(_localctx, 23);
          {
            this.state = 337;
            this.fieldContainsStmt();
          }
          break;

        case 24:
          this.enterOuterAlt(_localctx, 24);
          {
            this.state = 338;
            this.fieldEachStmt();
          }
          break;

        case 25:
          this.enterOuterAlt(_localctx, 25);
          {
            this.state = 339;
            this.fieldReverseEachStmt();
          }
          break;

        case 26:
          this.enterOuterAlt(_localctx, 26);
          {
            this.state = 340;
            this.descriptorIfStmt();
          }
          break;

        case 27:
          this.enterOuterAlt(_localctx, 27);
          {
            this.state = 341;
            this.descriptorMatchStmt();
          }
          break;

        case 28:
          this.enterOuterAlt(_localctx, 28);
          {
            this.state = 342;
            this.descriptorContainsStmt();
          }
          break;

        case 29:
          this.enterOuterAlt(_localctx, 29);
          {
            this.state = 343;
            this.indexIfStmt();
          }
          break;

        case 30:
          this.enterOuterAlt(_localctx, 30);
          {
            this.state = 344;
            this.indexEachStmt();
          }
          break;

        case 31:
          this.enterOuterAlt(_localctx, 31);
          {
            this.state = 345;
            this.uniqueIfStmt();
          }
          break;

        case 32:
          this.enterOuterAlt(_localctx, 32);
          {
            this.state = 346;
            this.uniqueEachStmt();
          }
          break;

        case 33:
          this.enterOuterAlt(_localctx, 33);
          {
            this.state = 347;
            this.primaryIfStmt();
          }
          break;

        case 34:
          this.enterOuterAlt(_localctx, 34);
          {
            this.state = 348;
            this.primaryEachStmt();
          }
          break;

        case 35:
          this.enterOuterAlt(_localctx, 35);
          {
            this.state = 349;
            this.constraintIfStmt();
          }
          break;

        case 36:
          this.enterOuterAlt(_localctx, 36);
          {
            this.state = 350;
            this.constraintEachStmt();
          }
          break;

        case 37:
          this.enterOuterAlt(_localctx, 37);
          {
            this.state = 351;
            this.foreignIfStmt();
          }
          break;

        case 38:
          this.enterOuterAlt(_localctx, 38);
          {
            this.state = 352;
            this.foreignEachStmt();
          }
          break;

        case 39:
          this.enterOuterAlt(_localctx, 39);
          {
            this.state = 353;
            this.optionEachStmt();
          }
          break;

        case 40:
          this.enterOuterAlt(_localctx, 40);
          {
            this.state = 354;
            this.commentEachStmt();
          }
          break;

        case 41:
          this.enterOuterAlt(_localctx, 41);
          {
            this.state = 355;
            this.descriptionEachStmt();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableIfStmt(): TableIfStmtContext {
    let _localctx: TableIfStmtContext = new TableIfStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 6, TemplateParser.RULE_tableIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 358;
        this.match(TemplateParser.OPEN);
        this.state = 359;
        this.match(TemplateParser.K_TABLE);
        this.state = 361;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 360;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 363;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 366;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 365;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 368;
        this.match(TemplateParser.K_IF);
        this.state = 369;
        this.match(TemplateParser.LPAR);
        this.state = 370;
        this.testCondition();
        this.state = 371;
        this.match(TemplateParser.RPAR);
        this.state = 372;
        this.match(TemplateParser.CLOSE);
        this.state = 376;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 373;
                this.statement();
              }
            }
          }
          this.state = 378;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
        }
        this.state = 380;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
          case 1:
            {
              this.state = 379;
              this.tableElseStmt();
            }
            break;
        }
        this.state = 382;
        this.match(TemplateParser.OPEN);
        this.state = 383;
        this.match(TemplateParser.K_TABLE);
        this.state = 384;
        this.match(TemplateParser.DOT);
        this.state = 385;
        this.match(TemplateParser.K_END);
        this.state = 386;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableExistsStmt(): TableExistsStmtContext {
    let _localctx: TableExistsStmtContext = new TableExistsStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 8, TemplateParser.RULE_tableExistsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 388;
        this.match(TemplateParser.OPEN);
        this.state = 389;
        this.match(TemplateParser.K_TABLE);
        this.state = 391;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 390;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 393;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 396;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 395;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 398;
        this.match(TemplateParser.K_EXISTS);
        this.state = 399;
        this.match(TemplateParser.LPAR);
        this.state = 400;
        this.testCondition();
        this.state = 401;
        this.match(TemplateParser.RPAR);
        this.state = 402;
        this.match(TemplateParser.CLOSE);
        this.state = 406;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 403;
                this.statement();
              }
            }
          }
          this.state = 408;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
        }
        this.state = 410;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
          case 1:
            {
              this.state = 409;
              this.tableElseStmt();
            }
            break;
        }
        this.state = 412;
        this.match(TemplateParser.OPEN);
        this.state = 413;
        this.match(TemplateParser.K_TABLE);
        this.state = 414;
        this.match(TemplateParser.DOT);
        this.state = 415;
        this.match(TemplateParser.K_END);
        this.state = 416;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableFindsStmt(): TableFindsStmtContext {
    let _localctx: TableFindsStmtContext = new TableFindsStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 10, TemplateParser.RULE_tableFindsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 418;
        this.match(TemplateParser.OPEN);
        this.state = 419;
        this.match(TemplateParser.K_TABLE);
        this.state = 421;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 420;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 423;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 426;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 425;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 428;
        this.match(TemplateParser.FINDS_OPEN);
        this.state = 429;
        this.regex();
        this.state = 430;
        this.match(TemplateParser.REGEX_CLOSE);
        this.state = 431;
        this.match(TemplateParser.CLOSE);
        this.state = 435;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 432;
                this.statement();
              }
            }
          }
          this.state = 437;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
        }
        this.state = 439;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
          case 1:
            {
              this.state = 438;
              this.tableElseStmt();
            }
            break;
        }
        this.state = 441;
        this.match(TemplateParser.OPEN);
        this.state = 442;
        this.match(TemplateParser.K_TABLE);
        this.state = 443;
        this.match(TemplateParser.DOT);
        this.state = 444;
        this.match(TemplateParser.K_END);
        this.state = 445;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableMatchStmt(): TableMatchStmtContext {
    let _localctx: TableMatchStmtContext = new TableMatchStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 12, TemplateParser.RULE_tableMatchStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 447;
        this.match(TemplateParser.OPEN);
        this.state = 448;
        this.match(TemplateParser.K_TABLE);
        this.state = 450;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 449;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 452;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 455;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 454;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 457;
        this.match(TemplateParser.MATCH_OPEN);
        this.state = 458;
        this.regex();
        this.state = 459;
        this.match(TemplateParser.REGEX_CLOSE);
        this.state = 460;
        this.match(TemplateParser.CLOSE);
        this.state = 464;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 461;
                this.statement();
              }
            }
          }
          this.state = 466;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
        }
        this.state = 468;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
          case 1:
            {
              this.state = 467;
              this.tableElseStmt();
            }
            break;
        }
        this.state = 470;
        this.match(TemplateParser.OPEN);
        this.state = 471;
        this.match(TemplateParser.K_TABLE);
        this.state = 472;
        this.match(TemplateParser.DOT);
        this.state = 473;
        this.match(TemplateParser.K_END);
        this.state = 474;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableContainsStmt(): TableContainsStmtContext {
    let _localctx: TableContainsStmtContext = new TableContainsStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 14, TemplateParser.RULE_tableContainsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 476;
        this.match(TemplateParser.OPEN);
        this.state = 477;
        this.match(TemplateParser.K_TABLE);
        this.state = 479;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 478;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 481;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 484;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 483;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 486;
        this.match(TemplateParser.K_CONTAINS);
        this.state = 487;
        this.match(TemplateParser.LPAR);
        this.state = 488;
        this.word();
        this.state = 489;
        this.match(TemplateParser.RPAR);
        this.state = 490;
        this.match(TemplateParser.CLOSE);
        this.state = 494;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 491;
                this.statement();
              }
            }
          }
          this.state = 496;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
        }
        this.state = 498;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
          case 1:
            {
              this.state = 497;
              this.tableElseStmt();
            }
            break;
        }
        this.state = 500;
        this.match(TemplateParser.OPEN);
        this.state = 501;
        this.match(TemplateParser.K_TABLE);
        this.state = 502;
        this.match(TemplateParser.DOT);
        this.state = 503;
        this.match(TemplateParser.K_END);
        this.state = 504;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableEachStmt(): TableEachStmtContext {
    let _localctx: TableEachStmtContext = new TableEachStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 16, TemplateParser.RULE_tableEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 506;
        this.match(TemplateParser.OPEN);
        this.state = 507;
        this.match(TemplateParser.K_TABLE);
        this.state = 509;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 508;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 511;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 513;
        this.match(TemplateParser.K_EACH);
        this.state = 518;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 514;
            this.match(TemplateParser.LPAR);
            this.state = 515;
            this.eachCondition();
            this.state = 516;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 520;
        this.match(TemplateParser.CLOSE);
        this.state = 524;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 521;
                this.statement();
              }
            }
          }
          this.state = 526;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
        }
        this.state = 527;
        this.match(TemplateParser.OPEN);
        this.state = 528;
        this.match(TemplateParser.K_TABLE);
        this.state = 529;
        this.match(TemplateParser.DOT);
        this.state = 530;
        this.match(TemplateParser.K_END);
        this.state = 531;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableElseIfStmt(): TableElseIfStmtContext {
    let _localctx: TableElseIfStmtContext = new TableElseIfStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 18, TemplateParser.RULE_tableElseIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 533;
        this.match(TemplateParser.OPEN);
        this.state = 534;
        this.match(TemplateParser.K_TABLE);
        this.state = 536;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 535;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 538;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 540;
        this.match(TemplateParser.K_ELSE);
        this.state = 541;
        this.match(TemplateParser.DOT);
        this.state = 543;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 542;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 545;
        this.match(TemplateParser.K_IF);
        this.state = 546;
        this.match(TemplateParser.LPAR);
        this.state = 547;
        this.testCondition();
        this.state = 548;
        this.match(TemplateParser.RPAR);
        this.state = 549;
        this.match(TemplateParser.CLOSE);
        this.state = 553;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 550;
                this.statement();
              }
            }
          }
          this.state = 555;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableElseExistsStmt(): TableElseExistsStmtContext {
    let _localctx: TableElseExistsStmtContext = new TableElseExistsStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 20, TemplateParser.RULE_tableElseExistsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 556;
        this.match(TemplateParser.OPEN);
        this.state = 557;
        this.match(TemplateParser.K_TABLE);
        this.state = 559;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 558;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 561;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 563;
        this.match(TemplateParser.K_ELSE);
        this.state = 564;
        this.match(TemplateParser.DOT);
        this.state = 566;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 565;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 568;
        this.match(TemplateParser.K_EXISTS);
        this.state = 569;
        this.match(TemplateParser.LPAR);
        this.state = 570;
        this.testCondition();
        this.state = 571;
        this.match(TemplateParser.RPAR);
        this.state = 572;
        this.match(TemplateParser.CLOSE);
        this.state = 576;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 573;
                this.statement();
              }
            }
          }
          this.state = 578;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableElseFindsStmt(): TableElseFindsStmtContext {
    let _localctx: TableElseFindsStmtContext = new TableElseFindsStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 22, TemplateParser.RULE_tableElseFindsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 579;
        this.match(TemplateParser.OPEN);
        this.state = 580;
        this.match(TemplateParser.K_TABLE);
        this.state = 582;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 581;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 584;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 586;
        this.match(TemplateParser.K_ELSE);
        this.state = 587;
        this.match(TemplateParser.DOT);
        this.state = 589;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 588;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 591;
        this.match(TemplateParser.FINDS_OPEN);
        this.state = 592;
        this.regex();
        this.state = 593;
        this.match(TemplateParser.REGEX_CLOSE);
        this.state = 594;
        this.match(TemplateParser.CLOSE);
        this.state = 598;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 595;
                this.statement();
              }
            }
          }
          this.state = 600;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableElseMatchStmt(): TableElseMatchStmtContext {
    let _localctx: TableElseMatchStmtContext = new TableElseMatchStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 24, TemplateParser.RULE_tableElseMatchStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 601;
        this.match(TemplateParser.OPEN);
        this.state = 602;
        this.match(TemplateParser.K_TABLE);
        this.state = 604;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 603;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 606;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 608;
        this.match(TemplateParser.K_ELSE);
        this.state = 609;
        this.match(TemplateParser.DOT);
        this.state = 611;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 610;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 613;
        this.match(TemplateParser.MATCH_OPEN);
        this.state = 614;
        this.regex();
        this.state = 615;
        this.match(TemplateParser.REGEX_CLOSE);
        this.state = 616;
        this.match(TemplateParser.CLOSE);
        this.state = 620;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 617;
                this.statement();
              }
            }
          }
          this.state = 622;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableElseContainsStmt(): TableElseContainsStmtContext {
    let _localctx: TableElseContainsStmtContext =
      new TableElseContainsStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 26, TemplateParser.RULE_tableElseContainsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 623;
        this.match(TemplateParser.OPEN);
        this.state = 624;
        this.match(TemplateParser.K_TABLE);
        this.state = 626;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 625;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 628;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 630;
        this.match(TemplateParser.K_ELSE);
        this.state = 631;
        this.match(TemplateParser.DOT);
        this.state = 633;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 632;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 635;
        this.match(TemplateParser.K_CONTAINS);
        this.state = 636;
        this.match(TemplateParser.LPAR);
        this.state = 637;
        this.word();
        this.state = 638;
        this.match(TemplateParser.RPAR);
        this.state = 639;
        this.match(TemplateParser.CLOSE);
        this.state = 643;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 640;
                this.statement();
              }
            }
          }
          this.state = 645;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableElseEachStmt(): TableElseEachStmtContext {
    let _localctx: TableElseEachStmtContext = new TableElseEachStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 28, TemplateParser.RULE_tableElseEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 646;
        this.match(TemplateParser.OPEN);
        this.state = 647;
        this.match(TemplateParser.K_TABLE);
        this.state = 649;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 648;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 651;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 653;
        this.match(TemplateParser.K_ELSE);
        this.state = 654;
        this.match(TemplateParser.DOT);
        this.state = 655;
        this.match(TemplateParser.K_EACH);
        this.state = 660;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 656;
            this.match(TemplateParser.LPAR);
            this.state = 657;
            this.eachCondition();
            this.state = 658;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 662;
        this.match(TemplateParser.CLOSE);
        this.state = 666;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 663;
                this.statement();
              }
            }
          }
          this.state = 668;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableElseEndStmt(): TableElseEndStmtContext {
    let _localctx: TableElseEndStmtContext = new TableElseEndStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 30, TemplateParser.RULE_tableElseEndStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 669;
        this.match(TemplateParser.OPEN);
        this.state = 670;
        this.match(TemplateParser.K_TABLE);
        this.state = 672;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 671;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 674;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 676;
        this.match(TemplateParser.K_ELSE);
        this.state = 677;
        this.match(TemplateParser.CLOSE);
        this.state = 681;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 678;
                this.statement();
              }
            }
          }
          this.state = 683;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableElseStmt(): TableElseStmtContext {
    let _localctx: TableElseStmtContext = new TableElseStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 32, TemplateParser.RULE_tableElseStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 687;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
          case 1:
            {
              this.state = 684;
              this.tableElseCondEndStmt();
            }
            break;

          case 2:
            {
              this.state = 685;
              this.tableElseEachStmt();
            }
            break;

          case 3:
            {
              this.state = 686;
              this.tableElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableElseCondEndStmt(): TableElseCondEndStmtContext {
    let _localctx: TableElseCondEndStmtContext =
      new TableElseCondEndStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 34, TemplateParser.RULE_tableElseCondEndStmt);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 690;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 689;
                  this.tableElseCondStmt();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 692;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
        this.state = 696;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
          case 1:
            {
              this.state = 694;
              this.tableElseEachStmt();
            }
            break;

          case 2:
            {
              this.state = 695;
              this.tableElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableElseCondStmt(): TableElseCondStmtContext {
    let _localctx: TableElseCondStmtContext = new TableElseCondStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 36, TemplateParser.RULE_tableElseCondStmt);
    try {
      this.state = 703;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 49, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 698;
            this.tableElseIfStmt();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 699;
            this.tableElseExistsStmt();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 700;
            this.tableElseFindsStmt();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 701;
            this.tableElseMatchStmt();
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 702;
            this.tableElseContainsStmt();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public inheritedIfStmt(): InheritedIfStmtContext {
    let _localctx: InheritedIfStmtContext = new InheritedIfStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 38, TemplateParser.RULE_inheritedIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 705;
        this.match(TemplateParser.OPEN);
        this.state = 706;
        this.match(TemplateParser.K_INHERITED);
        this.state = 708;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 707;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 710;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 713;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 712;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 715;
        this.match(TemplateParser.K_IF);
        this.state = 716;
        this.match(TemplateParser.LPAR);
        this.state = 717;
        this.testCondition();
        this.state = 718;
        this.match(TemplateParser.RPAR);
        this.state = 719;
        this.match(TemplateParser.CLOSE);
        this.state = 723;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 720;
                this.statement();
              }
            }
          }
          this.state = 725;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
        }
        this.state = 727;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
          case 1:
            {
              this.state = 726;
              this.inheritedElseStmt();
            }
            break;
        }
        this.state = 729;
        this.match(TemplateParser.OPEN);
        this.state = 730;
        this.match(TemplateParser.K_INHERITED);
        this.state = 731;
        this.match(TemplateParser.DOT);
        this.state = 732;
        this.match(TemplateParser.K_END);
        this.state = 733;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public inheritedExistsStmt(): InheritedExistsStmtContext {
    let _localctx: InheritedExistsStmtContext = new InheritedExistsStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 40, TemplateParser.RULE_inheritedExistsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 735;
        this.match(TemplateParser.OPEN);
        this.state = 736;
        this.match(TemplateParser.K_INHERITED);
        this.state = 738;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 737;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 740;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 743;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 742;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 745;
        this.match(TemplateParser.K_EXISTS);
        this.state = 746;
        this.match(TemplateParser.LPAR);
        this.state = 747;
        this.testCondition();
        this.state = 748;
        this.match(TemplateParser.RPAR);
        this.state = 749;
        this.match(TemplateParser.CLOSE);
        this.state = 753;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 750;
                this.statement();
              }
            }
          }
          this.state = 755;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
        }
        this.state = 757;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
          case 1:
            {
              this.state = 756;
              this.inheritedElseStmt();
            }
            break;
        }
        this.state = 759;
        this.match(TemplateParser.OPEN);
        this.state = 760;
        this.match(TemplateParser.K_INHERITED);
        this.state = 761;
        this.match(TemplateParser.DOT);
        this.state = 762;
        this.match(TemplateParser.K_END);
        this.state = 763;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public inheritedFindsStmt(): InheritedFindsStmtContext {
    let _localctx: InheritedFindsStmtContext = new InheritedFindsStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 42, TemplateParser.RULE_inheritedFindsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 765;
        this.match(TemplateParser.OPEN);
        this.state = 766;
        this.match(TemplateParser.K_INHERITED);
        this.state = 768;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 767;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 770;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 773;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 772;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 775;
        this.match(TemplateParser.FINDS_OPEN);
        this.state = 776;
        this.regex();
        this.state = 777;
        this.match(TemplateParser.REGEX_CLOSE);
        this.state = 778;
        this.match(TemplateParser.CLOSE);
        this.state = 782;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 779;
                this.statement();
              }
            }
          }
          this.state = 784;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
        }
        this.state = 786;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 61, this._ctx)) {
          case 1:
            {
              this.state = 785;
              this.inheritedElseStmt();
            }
            break;
        }
        this.state = 788;
        this.match(TemplateParser.OPEN);
        this.state = 789;
        this.match(TemplateParser.K_INHERITED);
        this.state = 790;
        this.match(TemplateParser.DOT);
        this.state = 791;
        this.match(TemplateParser.K_END);
        this.state = 792;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public inheritedMatchStmt(): InheritedMatchStmtContext {
    let _localctx: InheritedMatchStmtContext = new InheritedMatchStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 44, TemplateParser.RULE_inheritedMatchStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 794;
        this.match(TemplateParser.OPEN);
        this.state = 795;
        this.match(TemplateParser.K_INHERITED);
        this.state = 797;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 796;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 799;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 802;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 801;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 804;
        this.match(TemplateParser.MATCH_OPEN);
        this.state = 805;
        this.regex();
        this.state = 806;
        this.match(TemplateParser.REGEX_CLOSE);
        this.state = 807;
        this.match(TemplateParser.CLOSE);
        this.state = 811;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 808;
                this.statement();
              }
            }
          }
          this.state = 813;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
        }
        this.state = 815;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
          case 1:
            {
              this.state = 814;
              this.inheritedElseStmt();
            }
            break;
        }
        this.state = 817;
        this.match(TemplateParser.OPEN);
        this.state = 818;
        this.match(TemplateParser.K_INHERITED);
        this.state = 819;
        this.match(TemplateParser.DOT);
        this.state = 820;
        this.match(TemplateParser.K_END);
        this.state = 821;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public inheritedContainsStmt(): InheritedContainsStmtContext {
    let _localctx: InheritedContainsStmtContext =
      new InheritedContainsStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 46, TemplateParser.RULE_inheritedContainsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 823;
        this.match(TemplateParser.OPEN);
        this.state = 824;
        this.match(TemplateParser.K_INHERITED);
        this.state = 826;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 825;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 828;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 831;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 830;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 833;
        this.match(TemplateParser.K_CONTAINS);
        this.state = 834;
        this.match(TemplateParser.LPAR);
        this.state = 835;
        this.word();
        this.state = 836;
        this.match(TemplateParser.RPAR);
        this.state = 837;
        this.match(TemplateParser.CLOSE);
        this.state = 841;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 838;
                this.statement();
              }
            }
          }
          this.state = 843;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
        }
        this.state = 845;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
          case 1:
            {
              this.state = 844;
              this.inheritedElseStmt();
            }
            break;
        }
        this.state = 847;
        this.match(TemplateParser.OPEN);
        this.state = 848;
        this.match(TemplateParser.K_INHERITED);
        this.state = 849;
        this.match(TemplateParser.DOT);
        this.state = 850;
        this.match(TemplateParser.K_END);
        this.state = 851;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public inheritedEachStmt(): InheritedEachStmtContext {
    let _localctx: InheritedEachStmtContext = new InheritedEachStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 48, TemplateParser.RULE_inheritedEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 853;
        this.match(TemplateParser.OPEN);
        this.state = 854;
        this.match(TemplateParser.K_INHERITED);
        this.state = 856;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 855;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 858;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 860;
        this.match(TemplateParser.K_EACH);
        this.state = 865;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 861;
            this.match(TemplateParser.LPAR);
            this.state = 862;
            this.eachCondition();
            this.state = 863;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 867;
        this.match(TemplateParser.CLOSE);
        this.state = 871;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 868;
                this.statement();
              }
            }
          }
          this.state = 873;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
        }
        this.state = 874;
        this.match(TemplateParser.OPEN);
        this.state = 875;
        this.match(TemplateParser.K_INHERITED);
        this.state = 876;
        this.match(TemplateParser.DOT);
        this.state = 877;
        this.match(TemplateParser.K_END);
        this.state = 878;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public inheritedElseIfStmt(): InheritedElseIfStmtContext {
    let _localctx: InheritedElseIfStmtContext = new InheritedElseIfStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 50, TemplateParser.RULE_inheritedElseIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 880;
        this.match(TemplateParser.OPEN);
        this.state = 881;
        this.match(TemplateParser.K_INHERITED);
        this.state = 883;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 882;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 885;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 887;
        this.match(TemplateParser.K_ELSE);
        this.state = 888;
        this.match(TemplateParser.DOT);
        this.state = 890;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 889;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 892;
        this.match(TemplateParser.K_IF);
        this.state = 893;
        this.match(TemplateParser.LPAR);
        this.state = 894;
        this.testCondition();
        this.state = 895;
        this.match(TemplateParser.RPAR);
        this.state = 896;
        this.match(TemplateParser.CLOSE);
        this.state = 900;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 897;
                this.statement();
              }
            }
          }
          this.state = 902;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public inheritedElseExistsStmt(): InheritedElseExistsStmtContext {
    let _localctx: InheritedElseExistsStmtContext =
      new InheritedElseExistsStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 52, TemplateParser.RULE_inheritedElseExistsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 903;
        this.match(TemplateParser.OPEN);
        this.state = 904;
        this.match(TemplateParser.K_INHERITED);
        this.state = 906;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 905;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 908;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 910;
        this.match(TemplateParser.K_ELSE);
        this.state = 911;
        this.match(TemplateParser.DOT);
        this.state = 913;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 912;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 915;
        this.match(TemplateParser.K_EXISTS);
        this.state = 916;
        this.match(TemplateParser.LPAR);
        this.state = 917;
        this.testCondition();
        this.state = 918;
        this.match(TemplateParser.RPAR);
        this.state = 919;
        this.match(TemplateParser.CLOSE);
        this.state = 923;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 920;
                this.statement();
              }
            }
          }
          this.state = 925;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public inheritedElseFindsStmt(): InheritedElseFindsStmtContext {
    let _localctx: InheritedElseFindsStmtContext =
      new InheritedElseFindsStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 54, TemplateParser.RULE_inheritedElseFindsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 926;
        this.match(TemplateParser.OPEN);
        this.state = 927;
        this.match(TemplateParser.K_INHERITED);
        this.state = 929;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 928;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 931;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 933;
        this.match(TemplateParser.K_ELSE);
        this.state = 934;
        this.match(TemplateParser.DOT);
        this.state = 936;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 935;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 938;
        this.match(TemplateParser.FINDS_OPEN);
        this.state = 939;
        this.regex();
        this.state = 940;
        this.match(TemplateParser.REGEX_CLOSE);
        this.state = 941;
        this.match(TemplateParser.CLOSE);
        this.state = 945;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 942;
                this.statement();
              }
            }
          }
          this.state = 947;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public inheritedElseMatchStmt(): InheritedElseMatchStmtContext {
    let _localctx: InheritedElseMatchStmtContext =
      new InheritedElseMatchStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 56, TemplateParser.RULE_inheritedElseMatchStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 948;
        this.match(TemplateParser.OPEN);
        this.state = 949;
        this.match(TemplateParser.K_INHERITED);
        this.state = 951;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 950;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 953;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 955;
        this.match(TemplateParser.K_ELSE);
        this.state = 956;
        this.match(TemplateParser.DOT);
        this.state = 958;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 957;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 960;
        this.match(TemplateParser.MATCH_OPEN);
        this.state = 961;
        this.regex();
        this.state = 962;
        this.match(TemplateParser.REGEX_CLOSE);
        this.state = 963;
        this.match(TemplateParser.CLOSE);
        this.state = 967;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 964;
                this.statement();
              }
            }
          }
          this.state = 969;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public inheritedElseContainsStmt(): InheritedElseContainsStmtContext {
    let _localctx: InheritedElseContainsStmtContext =
      new InheritedElseContainsStmtContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      58,
      TemplateParser.RULE_inheritedElseContainsStmt,
    );
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 970;
        this.match(TemplateParser.OPEN);
        this.state = 971;
        this.match(TemplateParser.K_INHERITED);
        this.state = 973;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 972;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 975;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 977;
        this.match(TemplateParser.K_ELSE);
        this.state = 978;
        this.match(TemplateParser.DOT);
        this.state = 980;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 979;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 982;
        this.match(TemplateParser.K_CONTAINS);
        this.state = 983;
        this.match(TemplateParser.LPAR);
        this.state = 984;
        this.word();
        this.state = 985;
        this.match(TemplateParser.RPAR);
        this.state = 986;
        this.match(TemplateParser.CLOSE);
        this.state = 990;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 987;
                this.statement();
              }
            }
          }
          this.state = 992;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public inheritedElseEachStmt(): InheritedElseEachStmtContext {
    let _localctx: InheritedElseEachStmtContext =
      new InheritedElseEachStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 60, TemplateParser.RULE_inheritedElseEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 993;
        this.match(TemplateParser.OPEN);
        this.state = 994;
        this.match(TemplateParser.K_INHERITED);
        this.state = 996;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 995;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 998;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1000;
        this.match(TemplateParser.K_ELSE);
        this.state = 1001;
        this.match(TemplateParser.DOT);
        this.state = 1002;
        this.match(TemplateParser.K_EACH);
        this.state = 1007;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 1003;
            this.match(TemplateParser.LPAR);
            this.state = 1004;
            this.eachCondition();
            this.state = 1005;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 1009;
        this.match(TemplateParser.CLOSE);
        this.state = 1013;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1010;
                this.statement();
              }
            }
          }
          this.state = 1015;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public inheritedElseEndStmt(): InheritedElseEndStmtContext {
    let _localctx: InheritedElseEndStmtContext =
      new InheritedElseEndStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 62, TemplateParser.RULE_inheritedElseEndStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1016;
        this.match(TemplateParser.OPEN);
        this.state = 1017;
        this.match(TemplateParser.K_INHERITED);
        this.state = 1019;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1018;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1021;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1023;
        this.match(TemplateParser.K_ELSE);
        this.state = 1024;
        this.match(TemplateParser.CLOSE);
        this.state = 1028;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1025;
                this.statement();
              }
            }
          }
          this.state = 1030;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public inheritedElseStmt(): InheritedElseStmtContext {
    let _localctx: InheritedElseStmtContext = new InheritedElseStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 64, TemplateParser.RULE_inheritedElseStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1034;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
          case 1:
            {
              this.state = 1031;
              this.inheritedElseCondEndStmt();
            }
            break;

          case 2:
            {
              this.state = 1032;
              this.inheritedElseEachStmt();
            }
            break;

          case 3:
            {
              this.state = 1033;
              this.inheritedElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public inheritedElseCondEndStmt(): InheritedElseCondEndStmtContext {
    let _localctx: InheritedElseCondEndStmtContext =
      new InheritedElseCondEndStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 66, TemplateParser.RULE_inheritedElseCondEndStmt);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1037;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 1036;
                  this.inheritedElseCondStmt();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 1039;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
        this.state = 1043;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 95, this._ctx)) {
          case 1:
            {
              this.state = 1041;
              this.inheritedElseEachStmt();
            }
            break;

          case 2:
            {
              this.state = 1042;
              this.inheritedElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public inheritedElseCondStmt(): InheritedElseCondStmtContext {
    let _localctx: InheritedElseCondStmtContext =
      new InheritedElseCondStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 68, TemplateParser.RULE_inheritedElseCondStmt);
    try {
      this.state = 1050;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1045;
            this.inheritedElseIfStmt();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1046;
            this.inheritedElseExistsStmt();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1047;
            this.inheritedElseFindsStmt();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1048;
            this.inheritedElseMatchStmt();
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 1049;
            this.inheritedElseContainsStmt();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public referenceIfStmt(): ReferenceIfStmtContext {
    let _localctx: ReferenceIfStmtContext = new ReferenceIfStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 70, TemplateParser.RULE_referenceIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1052;
        this.match(TemplateParser.OPEN);
        this.state = 1053;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1055;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1054;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1057;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1060;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1059;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1062;
        this.match(TemplateParser.K_IF);
        this.state = 1063;
        this.match(TemplateParser.LPAR);
        this.state = 1064;
        this.testCondition();
        this.state = 1065;
        this.match(TemplateParser.RPAR);
        this.state = 1066;
        this.match(TemplateParser.CLOSE);
        this.state = 1070;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1067;
                this.statement();
              }
            }
          }
          this.state = 1072;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
        }
        this.state = 1074;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
          case 1:
            {
              this.state = 1073;
              this.referenceElseStmt();
            }
            break;
        }
        this.state = 1076;
        this.match(TemplateParser.OPEN);
        this.state = 1077;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1078;
        this.match(TemplateParser.DOT);
        this.state = 1079;
        this.match(TemplateParser.K_END);
        this.state = 1080;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public referenceExistsStmt(): ReferenceExistsStmtContext {
    let _localctx: ReferenceExistsStmtContext = new ReferenceExistsStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 72, TemplateParser.RULE_referenceExistsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1082;
        this.match(TemplateParser.OPEN);
        this.state = 1083;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1085;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1084;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1087;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1090;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1089;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1092;
        this.match(TemplateParser.K_EXISTS);
        this.state = 1093;
        this.match(TemplateParser.LPAR);
        this.state = 1094;
        this.testCondition();
        this.state = 1095;
        this.match(TemplateParser.RPAR);
        this.state = 1096;
        this.match(TemplateParser.CLOSE);
        this.state = 1100;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
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
          _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
        }
        this.state = 1104;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 104, this._ctx)) {
          case 1:
            {
              this.state = 1103;
              this.referenceElseStmt();
            }
            break;
        }
        this.state = 1106;
        this.match(TemplateParser.OPEN);
        this.state = 1107;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1108;
        this.match(TemplateParser.DOT);
        this.state = 1109;
        this.match(TemplateParser.K_END);
        this.state = 1110;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public referenceFindsStmt(): ReferenceFindsStmtContext {
    let _localctx: ReferenceFindsStmtContext = new ReferenceFindsStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 74, TemplateParser.RULE_referenceFindsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1112;
        this.match(TemplateParser.OPEN);
        this.state = 1113;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1115;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1114;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1117;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1120;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1119;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1122;
        this.match(TemplateParser.FINDS_OPEN);
        this.state = 1123;
        this.regex();
        this.state = 1124;
        this.match(TemplateParser.REGEX_CLOSE);
        this.state = 1125;
        this.match(TemplateParser.CLOSE);
        this.state = 1129;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1126;
                this.statement();
              }
            }
          }
          this.state = 1131;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
        }
        this.state = 1133;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
          case 1:
            {
              this.state = 1132;
              this.referenceElseStmt();
            }
            break;
        }
        this.state = 1135;
        this.match(TemplateParser.OPEN);
        this.state = 1136;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1137;
        this.match(TemplateParser.DOT);
        this.state = 1138;
        this.match(TemplateParser.K_END);
        this.state = 1139;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public referenceMatchStmt(): ReferenceMatchStmtContext {
    let _localctx: ReferenceMatchStmtContext = new ReferenceMatchStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 76, TemplateParser.RULE_referenceMatchStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1141;
        this.match(TemplateParser.OPEN);
        this.state = 1142;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1144;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1143;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1146;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1149;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1148;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1151;
        this.match(TemplateParser.MATCH_OPEN);
        this.state = 1152;
        this.regex();
        this.state = 1153;
        this.match(TemplateParser.REGEX_CLOSE);
        this.state = 1154;
        this.match(TemplateParser.CLOSE);
        this.state = 1158;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1155;
                this.statement();
              }
            }
          }
          this.state = 1160;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
        }
        this.state = 1162;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 112, this._ctx)) {
          case 1:
            {
              this.state = 1161;
              this.referenceElseStmt();
            }
            break;
        }
        this.state = 1164;
        this.match(TemplateParser.OPEN);
        this.state = 1165;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1166;
        this.match(TemplateParser.DOT);
        this.state = 1167;
        this.match(TemplateParser.K_END);
        this.state = 1168;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public referenceContainsStmt(): ReferenceContainsStmtContext {
    let _localctx: ReferenceContainsStmtContext =
      new ReferenceContainsStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 78, TemplateParser.RULE_referenceContainsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1170;
        this.match(TemplateParser.OPEN);
        this.state = 1171;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1173;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1172;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1175;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1178;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1177;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1180;
        this.match(TemplateParser.K_CONTAINS);
        this.state = 1181;
        this.match(TemplateParser.LPAR);
        this.state = 1182;
        this.word();
        this.state = 1183;
        this.match(TemplateParser.RPAR);
        this.state = 1184;
        this.match(TemplateParser.CLOSE);
        this.state = 1188;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1185;
                this.statement();
              }
            }
          }
          this.state = 1190;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
        }
        this.state = 1192;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
          case 1:
            {
              this.state = 1191;
              this.referenceElseStmt();
            }
            break;
        }
        this.state = 1194;
        this.match(TemplateParser.OPEN);
        this.state = 1195;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1196;
        this.match(TemplateParser.DOT);
        this.state = 1197;
        this.match(TemplateParser.K_END);
        this.state = 1198;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public referenceEachStmt(): ReferenceEachStmtContext {
    let _localctx: ReferenceEachStmtContext = new ReferenceEachStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 80, TemplateParser.RULE_referenceEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1200;
        this.match(TemplateParser.OPEN);
        this.state = 1201;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1203;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1202;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1205;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1207;
        this.match(TemplateParser.K_EACH);
        this.state = 1212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 1208;
            this.match(TemplateParser.LPAR);
            this.state = 1209;
            this.eachCondition();
            this.state = 1210;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 1214;
        this.match(TemplateParser.CLOSE);
        this.state = 1218;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1215;
                this.statement();
              }
            }
          }
          this.state = 1220;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
        }
        this.state = 1221;
        this.match(TemplateParser.OPEN);
        this.state = 1222;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1223;
        this.match(TemplateParser.DOT);
        this.state = 1224;
        this.match(TemplateParser.K_END);
        this.state = 1225;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public referenceReverseEachStmt(): ReferenceReverseEachStmtContext {
    let _localctx: ReferenceReverseEachStmtContext =
      new ReferenceReverseEachStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 82, TemplateParser.RULE_referenceReverseEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1227;
        this.match(TemplateParser.OPEN);
        this.state = 1228;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1230;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1229;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1232;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1234;
        this.match(TemplateParser.K_REVERSE_EACH);
        this.state = 1239;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 1235;
            this.match(TemplateParser.LPAR);
            this.state = 1236;
            this.eachCondition();
            this.state = 1237;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 1241;
        this.match(TemplateParser.CLOSE);
        this.state = 1245;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1242;
                this.statement();
              }
            }
          }
          this.state = 1247;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
        }
        this.state = 1248;
        this.match(TemplateParser.OPEN);
        this.state = 1249;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1250;
        this.match(TemplateParser.DOT);
        this.state = 1251;
        this.match(TemplateParser.K_END);
        this.state = 1252;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public referenceElseIfStmt(): ReferenceElseIfStmtContext {
    let _localctx: ReferenceElseIfStmtContext = new ReferenceElseIfStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 84, TemplateParser.RULE_referenceElseIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1254;
        this.match(TemplateParser.OPEN);
        this.state = 1255;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1257;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1256;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1259;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1261;
        this.match(TemplateParser.K_ELSE);
        this.state = 1262;
        this.match(TemplateParser.DOT);
        this.state = 1264;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1263;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1266;
        this.match(TemplateParser.K_IF);
        this.state = 1267;
        this.match(TemplateParser.LPAR);
        this.state = 1268;
        this.testCondition();
        this.state = 1269;
        this.match(TemplateParser.RPAR);
        this.state = 1270;
        this.match(TemplateParser.CLOSE);
        this.state = 1274;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1271;
                this.statement();
              }
            }
          }
          this.state = 1276;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public referenceElseExistsStmt(): ReferenceElseExistsStmtContext {
    let _localctx: ReferenceElseExistsStmtContext =
      new ReferenceElseExistsStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 86, TemplateParser.RULE_referenceElseExistsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1277;
        this.match(TemplateParser.OPEN);
        this.state = 1278;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1280;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1279;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1282;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1284;
        this.match(TemplateParser.K_ELSE);
        this.state = 1285;
        this.match(TemplateParser.DOT);
        this.state = 1287;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1286;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1289;
        this.match(TemplateParser.K_EXISTS);
        this.state = 1290;
        this.match(TemplateParser.LPAR);
        this.state = 1291;
        this.testCondition();
        this.state = 1292;
        this.match(TemplateParser.RPAR);
        this.state = 1293;
        this.match(TemplateParser.CLOSE);
        this.state = 1297;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1294;
                this.statement();
              }
            }
          }
          this.state = 1299;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public referenceElseFindsStmt(): ReferenceElseFindsStmtContext {
    let _localctx: ReferenceElseFindsStmtContext =
      new ReferenceElseFindsStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 88, TemplateParser.RULE_referenceElseFindsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1300;
        this.match(TemplateParser.OPEN);
        this.state = 1301;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1303;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1302;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1305;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1307;
        this.match(TemplateParser.K_ELSE);
        this.state = 1308;
        this.match(TemplateParser.DOT);
        this.state = 1310;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1309;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1312;
        this.match(TemplateParser.FINDS_OPEN);
        this.state = 1313;
        this.regex();
        this.state = 1314;
        this.match(TemplateParser.REGEX_CLOSE);
        this.state = 1315;
        this.match(TemplateParser.CLOSE);
        this.state = 1319;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1316;
                this.statement();
              }
            }
          }
          this.state = 1321;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public referenceElseMatchStmt(): ReferenceElseMatchStmtContext {
    let _localctx: ReferenceElseMatchStmtContext =
      new ReferenceElseMatchStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 90, TemplateParser.RULE_referenceElseMatchStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1322;
        this.match(TemplateParser.OPEN);
        this.state = 1323;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1325;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1324;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1327;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1329;
        this.match(TemplateParser.K_ELSE);
        this.state = 1330;
        this.match(TemplateParser.DOT);
        this.state = 1332;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1331;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1334;
        this.match(TemplateParser.MATCH_OPEN);
        this.state = 1335;
        this.regex();
        this.state = 1336;
        this.match(TemplateParser.REGEX_CLOSE);
        this.state = 1337;
        this.match(TemplateParser.CLOSE);
        this.state = 1341;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1338;
                this.statement();
              }
            }
          }
          this.state = 1343;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public referenceElseContainsStmt(): ReferenceElseContainsStmtContext {
    let _localctx: ReferenceElseContainsStmtContext =
      new ReferenceElseContainsStmtContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      92,
      TemplateParser.RULE_referenceElseContainsStmt,
    );
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1344;
        this.match(TemplateParser.OPEN);
        this.state = 1345;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1347;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1346;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1349;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1351;
        this.match(TemplateParser.K_ELSE);
        this.state = 1352;
        this.match(TemplateParser.DOT);
        this.state = 1354;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1353;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1356;
        this.match(TemplateParser.K_CONTAINS);
        this.state = 1357;
        this.match(TemplateParser.LPAR);
        this.state = 1358;
        this.word();
        this.state = 1359;
        this.match(TemplateParser.RPAR);
        this.state = 1360;
        this.match(TemplateParser.CLOSE);
        this.state = 1364;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1361;
                this.statement();
              }
            }
          }
          this.state = 1366;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public referenceElseEachStmt(): ReferenceElseEachStmtContext {
    let _localctx: ReferenceElseEachStmtContext =
      new ReferenceElseEachStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 94, TemplateParser.RULE_referenceElseEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1367;
        this.match(TemplateParser.OPEN);
        this.state = 1368;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1370;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1369;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1372;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1374;
        this.match(TemplateParser.K_ELSE);
        this.state = 1375;
        this.match(TemplateParser.DOT);
        this.state = 1376;
        this.match(TemplateParser.K_EACH);
        this.state = 1381;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 1377;
            this.match(TemplateParser.LPAR);
            this.state = 1378;
            this.eachCondition();
            this.state = 1379;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 1383;
        this.match(TemplateParser.CLOSE);
        this.state = 1387;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1384;
                this.statement();
              }
            }
          }
          this.state = 1389;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public referenceElseReverseEachStmt(): ReferenceElseReverseEachStmtContext {
    let _localctx: ReferenceElseReverseEachStmtContext =
      new ReferenceElseReverseEachStmtContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      96,
      TemplateParser.RULE_referenceElseReverseEachStmt,
    );
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1390;
        this.match(TemplateParser.OPEN);
        this.state = 1391;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1393;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1392;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1395;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1397;
        this.match(TemplateParser.K_ELSE);
        this.state = 1398;
        this.match(TemplateParser.DOT);
        this.state = 1399;
        this.match(TemplateParser.K_REVERSE_EACH);
        this.state = 1404;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 1400;
            this.match(TemplateParser.LPAR);
            this.state = 1401;
            this.eachCondition();
            this.state = 1402;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 1406;
        this.match(TemplateParser.CLOSE);
        this.state = 1410;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1407;
                this.statement();
              }
            }
          }
          this.state = 1412;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public referenceElseEndStmt(): ReferenceElseEndStmtContext {
    let _localctx: ReferenceElseEndStmtContext =
      new ReferenceElseEndStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 98, TemplateParser.RULE_referenceElseEndStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1413;
        this.match(TemplateParser.OPEN);
        this.state = 1414;
        this.match(TemplateParser.K_REFERENCE);
        this.state = 1416;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1415;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1418;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1420;
        this.match(TemplateParser.K_ELSE);
        this.state = 1421;
        this.match(TemplateParser.CLOSE);
        this.state = 1425;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1422;
                this.statement();
              }
            }
          }
          this.state = 1427;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public referenceElseStmt(): ReferenceElseStmtContext {
    let _localctx: ReferenceElseStmtContext = new ReferenceElseStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 100, TemplateParser.RULE_referenceElseStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1432;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
          case 1:
            {
              this.state = 1428;
              this.referenceElseCondEndStmt();
            }
            break;

          case 2:
            {
              this.state = 1429;
              this.referenceElseEachStmt();
            }
            break;

          case 3:
            {
              this.state = 1430;
              this.referenceElseReverseEachStmt();
            }
            break;

          case 4:
            {
              this.state = 1431;
              this.referenceElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public referenceElseCondEndStmt(): ReferenceElseCondEndStmtContext {
    let _localctx: ReferenceElseCondEndStmtContext =
      new ReferenceElseCondEndStmtContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      102,
      TemplateParser.RULE_referenceElseCondEndStmt,
    );
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1435;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 1434;
                  this.referenceElseCondStmt();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 1437;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
        this.state = 1442;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
          case 1:
            {
              this.state = 1439;
              this.referenceElseEachStmt();
            }
            break;

          case 2:
            {
              this.state = 1440;
              this.referenceElseReverseEachStmt();
            }
            break;

          case 3:
            {
              this.state = 1441;
              this.referenceElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public referenceElseCondStmt(): ReferenceElseCondStmtContext {
    let _localctx: ReferenceElseCondStmtContext =
      new ReferenceElseCondStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 104, TemplateParser.RULE_referenceElseCondStmt);
    try {
      this.state = 1449;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 149, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1444;
            this.referenceElseIfStmt();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1445;
            this.referenceElseExistsStmt();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1446;
            this.referenceElseFindsStmt();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1447;
            this.referenceElseMatchStmt();
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 1448;
            this.referenceElseContainsStmt();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldIfStmt(): FieldIfStmtContext {
    let _localctx: FieldIfStmtContext = new FieldIfStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 106, TemplateParser.RULE_fieldIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1451;
        this.match(TemplateParser.OPEN);
        this.state = 1452;
        this.match(TemplateParser.K_FIELD);
        this.state = 1454;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1453;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1456;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1459;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1458;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1461;
        this.match(TemplateParser.K_IF);
        this.state = 1462;
        this.match(TemplateParser.LPAR);
        this.state = 1463;
        this.testCondition();
        this.state = 1464;
        this.match(TemplateParser.RPAR);
        this.state = 1465;
        this.match(TemplateParser.CLOSE);
        this.state = 1469;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1466;
                this.statement();
              }
            }
          }
          this.state = 1471;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
        }
        this.state = 1473;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 153, this._ctx)) {
          case 1:
            {
              this.state = 1472;
              this.fieldElseStmt();
            }
            break;
        }
        this.state = 1475;
        this.match(TemplateParser.OPEN);
        this.state = 1476;
        this.match(TemplateParser.K_FIELD);
        this.state = 1477;
        this.match(TemplateParser.DOT);
        this.state = 1478;
        this.match(TemplateParser.K_END);
        this.state = 1479;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldExistsStmt(): FieldExistsStmtContext {
    let _localctx: FieldExistsStmtContext = new FieldExistsStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 108, TemplateParser.RULE_fieldExistsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1481;
        this.match(TemplateParser.OPEN);
        this.state = 1482;
        this.match(TemplateParser.K_FIELD);
        this.state = 1484;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1483;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1486;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1489;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1488;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1491;
        this.match(TemplateParser.K_EXISTS);
        this.state = 1492;
        this.match(TemplateParser.LPAR);
        this.state = 1493;
        this.testCondition();
        this.state = 1494;
        this.match(TemplateParser.RPAR);
        this.state = 1495;
        this.match(TemplateParser.CLOSE);
        this.state = 1499;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1496;
                this.statement();
              }
            }
          }
          this.state = 1501;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
        }
        this.state = 1503;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 157, this._ctx)) {
          case 1:
            {
              this.state = 1502;
              this.fieldElseStmt();
            }
            break;
        }
        this.state = 1505;
        this.match(TemplateParser.OPEN);
        this.state = 1506;
        this.match(TemplateParser.K_FIELD);
        this.state = 1507;
        this.match(TemplateParser.DOT);
        this.state = 1508;
        this.match(TemplateParser.K_END);
        this.state = 1509;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldMatchStmt(): FieldMatchStmtContext {
    let _localctx: FieldMatchStmtContext = new FieldMatchStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 110, TemplateParser.RULE_fieldMatchStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1511;
        this.match(TemplateParser.OPEN);
        this.state = 1512;
        this.match(TemplateParser.K_FIELD);
        this.state = 1514;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1513;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1516;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1519;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1518;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1521;
        this.match(TemplateParser.MATCH_OPEN);
        this.state = 1522;
        this.regex();
        this.state = 1523;
        this.match(TemplateParser.REGEX_CLOSE);
        this.state = 1524;
        this.match(TemplateParser.CLOSE);
        this.state = 1528;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1525;
                this.statement();
              }
            }
          }
          this.state = 1530;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
        }
        this.state = 1532;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 161, this._ctx)) {
          case 1:
            {
              this.state = 1531;
              this.fieldElseStmt();
            }
            break;
        }
        this.state = 1534;
        this.match(TemplateParser.OPEN);
        this.state = 1535;
        this.match(TemplateParser.K_FIELD);
        this.state = 1536;
        this.match(TemplateParser.DOT);
        this.state = 1537;
        this.match(TemplateParser.K_END);
        this.state = 1538;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldContainsStmt(): FieldContainsStmtContext {
    let _localctx: FieldContainsStmtContext = new FieldContainsStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 112, TemplateParser.RULE_fieldContainsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1540;
        this.match(TemplateParser.OPEN);
        this.state = 1541;
        this.match(TemplateParser.K_FIELD);
        this.state = 1543;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1542;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1545;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1548;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1547;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1550;
        this.match(TemplateParser.K_CONTAINS);
        this.state = 1551;
        this.match(TemplateParser.LPAR);
        this.state = 1552;
        this.word();
        this.state = 1553;
        this.match(TemplateParser.RPAR);
        this.state = 1554;
        this.match(TemplateParser.CLOSE);
        this.state = 1558;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1555;
                this.statement();
              }
            }
          }
          this.state = 1560;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
        }
        this.state = 1562;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 165, this._ctx)) {
          case 1:
            {
              this.state = 1561;
              this.fieldElseStmt();
            }
            break;
        }
        this.state = 1564;
        this.match(TemplateParser.OPEN);
        this.state = 1565;
        this.match(TemplateParser.K_FIELD);
        this.state = 1566;
        this.match(TemplateParser.DOT);
        this.state = 1567;
        this.match(TemplateParser.K_END);
        this.state = 1568;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldEachStmt(): FieldEachStmtContext {
    let _localctx: FieldEachStmtContext = new FieldEachStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 114, TemplateParser.RULE_fieldEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1570;
        this.match(TemplateParser.OPEN);
        this.state = 1571;
        this.match(TemplateParser.K_FIELD);
        this.state = 1573;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1572;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1575;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1577;
        this.match(TemplateParser.K_EACH);
        this.state = 1582;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 1578;
            this.match(TemplateParser.LPAR);
            this.state = 1579;
            this.eachCondition();
            this.state = 1580;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 1584;
        this.match(TemplateParser.CLOSE);
        this.state = 1588;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1585;
                this.statement();
              }
            }
          }
          this.state = 1590;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
        }
        this.state = 1591;
        this.match(TemplateParser.OPEN);
        this.state = 1592;
        this.match(TemplateParser.K_FIELD);
        this.state = 1593;
        this.match(TemplateParser.DOT);
        this.state = 1594;
        this.match(TemplateParser.K_END);
        this.state = 1595;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldReverseEachStmt(): FieldReverseEachStmtContext {
    let _localctx: FieldReverseEachStmtContext =
      new FieldReverseEachStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 116, TemplateParser.RULE_fieldReverseEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1597;
        this.match(TemplateParser.OPEN);
        this.state = 1598;
        this.match(TemplateParser.K_FIELD);
        this.state = 1600;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1599;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1602;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1604;
        this.match(TemplateParser.K_REVERSE_EACH);
        this.state = 1609;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 1605;
            this.match(TemplateParser.LPAR);
            this.state = 1606;
            this.eachCondition();
            this.state = 1607;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 1611;
        this.match(TemplateParser.CLOSE);
        this.state = 1615;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1612;
                this.statement();
              }
            }
          }
          this.state = 1617;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
        }
        this.state = 1618;
        this.match(TemplateParser.OPEN);
        this.state = 1619;
        this.match(TemplateParser.K_FIELD);
        this.state = 1620;
        this.match(TemplateParser.DOT);
        this.state = 1621;
        this.match(TemplateParser.K_END);
        this.state = 1622;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldElseIfStmt(): FieldElseIfStmtContext {
    let _localctx: FieldElseIfStmtContext = new FieldElseIfStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 118, TemplateParser.RULE_fieldElseIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1624;
        this.match(TemplateParser.OPEN);
        this.state = 1625;
        this.match(TemplateParser.K_FIELD);
        this.state = 1627;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1626;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1629;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1631;
        this.match(TemplateParser.K_ELSE);
        this.state = 1632;
        this.match(TemplateParser.DOT);
        this.state = 1634;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1633;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1636;
        this.match(TemplateParser.K_IF);
        this.state = 1637;
        this.match(TemplateParser.LPAR);
        this.state = 1638;
        this.testCondition();
        this.state = 1639;
        this.match(TemplateParser.RPAR);
        this.state = 1640;
        this.match(TemplateParser.CLOSE);
        this.state = 1644;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1641;
                this.statement();
              }
            }
          }
          this.state = 1646;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldElseExistsStmt(): FieldElseExistsStmtContext {
    let _localctx: FieldElseExistsStmtContext = new FieldElseExistsStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 120, TemplateParser.RULE_fieldElseExistsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1647;
        this.match(TemplateParser.OPEN);
        this.state = 1648;
        this.match(TemplateParser.K_FIELD);
        this.state = 1650;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1649;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1652;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1654;
        this.match(TemplateParser.K_ELSE);
        this.state = 1655;
        this.match(TemplateParser.DOT);
        this.state = 1657;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1656;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1659;
        this.match(TemplateParser.K_EXISTS);
        this.state = 1660;
        this.match(TemplateParser.LPAR);
        this.state = 1661;
        this.testCondition();
        this.state = 1662;
        this.match(TemplateParser.RPAR);
        this.state = 1663;
        this.match(TemplateParser.CLOSE);
        this.state = 1667;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1664;
                this.statement();
              }
            }
          }
          this.state = 1669;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldElseMatchStmt(): FieldElseMatchStmtContext {
    let _localctx: FieldElseMatchStmtContext = new FieldElseMatchStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 122, TemplateParser.RULE_fieldElseMatchStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1670;
        this.match(TemplateParser.OPEN);
        this.state = 1671;
        this.match(TemplateParser.K_FIELD);
        this.state = 1673;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1672;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1675;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1677;
        this.match(TemplateParser.K_ELSE);
        this.state = 1678;
        this.match(TemplateParser.DOT);
        this.state = 1680;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1679;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1682;
        this.match(TemplateParser.MATCH_OPEN);
        this.state = 1683;
        this.regex();
        this.state = 1684;
        this.match(TemplateParser.REGEX_CLOSE);
        this.state = 1685;
        this.match(TemplateParser.CLOSE);
        this.state = 1689;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1686;
                this.statement();
              }
            }
          }
          this.state = 1691;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldElseContainsStmt(): FieldElseContainsStmtContext {
    let _localctx: FieldElseContainsStmtContext =
      new FieldElseContainsStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 124, TemplateParser.RULE_fieldElseContainsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1692;
        this.match(TemplateParser.OPEN);
        this.state = 1693;
        this.match(TemplateParser.K_FIELD);
        this.state = 1695;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1694;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1697;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1699;
        this.match(TemplateParser.K_ELSE);
        this.state = 1700;
        this.match(TemplateParser.DOT);
        this.state = 1702;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1701;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1704;
        this.match(TemplateParser.K_CONTAINS);
        this.state = 1705;
        this.match(TemplateParser.LPAR);
        this.state = 1706;
        this.word();
        this.state = 1707;
        this.match(TemplateParser.RPAR);
        this.state = 1708;
        this.match(TemplateParser.CLOSE);
        this.state = 1712;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1709;
                this.statement();
              }
            }
          }
          this.state = 1714;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldElseEachStmt(): FieldElseEachStmtContext {
    let _localctx: FieldElseEachStmtContext = new FieldElseEachStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 126, TemplateParser.RULE_fieldElseEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1715;
        this.match(TemplateParser.OPEN);
        this.state = 1716;
        this.match(TemplateParser.K_FIELD);
        this.state = 1718;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1717;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1720;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1722;
        this.match(TemplateParser.K_ELSE);
        this.state = 1723;
        this.match(TemplateParser.DOT);
        this.state = 1724;
        this.match(TemplateParser.K_EACH);
        this.state = 1729;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 1725;
            this.match(TemplateParser.LPAR);
            this.state = 1726;
            this.eachCondition();
            this.state = 1727;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 1731;
        this.match(TemplateParser.CLOSE);
        this.state = 1735;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1732;
                this.statement();
              }
            }
          }
          this.state = 1737;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldElseReverseEachStmt(): FieldElseReverseEachStmtContext {
    let _localctx: FieldElseReverseEachStmtContext =
      new FieldElseReverseEachStmtContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      128,
      TemplateParser.RULE_fieldElseReverseEachStmt,
    );
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1738;
        this.match(TemplateParser.OPEN);
        this.state = 1739;
        this.match(TemplateParser.K_FIELD);
        this.state = 1741;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1740;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1743;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1745;
        this.match(TemplateParser.K_ELSE);
        this.state = 1746;
        this.match(TemplateParser.DOT);
        this.state = 1747;
        this.match(TemplateParser.K_REVERSE_EACH);
        this.state = 1752;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 1748;
            this.match(TemplateParser.LPAR);
            this.state = 1749;
            this.eachCondition();
            this.state = 1750;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 1754;
        this.match(TemplateParser.CLOSE);
        this.state = 1758;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1755;
                this.statement();
              }
            }
          }
          this.state = 1760;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldElseEndStmt(): FieldElseEndStmtContext {
    let _localctx: FieldElseEndStmtContext = new FieldElseEndStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 130, TemplateParser.RULE_fieldElseEndStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1761;
        this.match(TemplateParser.OPEN);
        this.state = 1762;
        this.match(TemplateParser.K_FIELD);
        this.state = 1764;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1763;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1766;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1768;
        this.match(TemplateParser.K_ELSE);
        this.state = 1769;
        this.match(TemplateParser.CLOSE);
        this.state = 1773;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 191, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1770;
                this.statement();
              }
            }
          }
          this.state = 1775;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 191, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldElseStmt(): FieldElseStmtContext {
    let _localctx: FieldElseStmtContext = new FieldElseStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 132, TemplateParser.RULE_fieldElseStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1780;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 192, this._ctx)) {
          case 1:
            {
              this.state = 1776;
              this.fieldElseEachStmt();
            }
            break;

          case 2:
            {
              this.state = 1777;
              this.fieldElseReverseEachStmt();
            }
            break;

          case 3:
            {
              this.state = 1778;
              this.fieldElseEndStmt();
            }
            break;

          case 4:
            {
              this.state = 1779;
              this.fieldElseCondEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldElseCondEndStmt(): FieldElseCondEndStmtContext {
    let _localctx: FieldElseCondEndStmtContext =
      new FieldElseCondEndStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 134, TemplateParser.RULE_fieldElseCondEndStmt);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1783;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 1782;
                  this.fieldElseCondStmt();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 1785;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
        this.state = 1790;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 194, this._ctx)) {
          case 1:
            {
              this.state = 1787;
              this.fieldElseEachStmt();
            }
            break;

          case 2:
            {
              this.state = 1788;
              this.fieldElseReverseEachStmt();
            }
            break;

          case 3:
            {
              this.state = 1789;
              this.fieldElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldElseCondStmt(): FieldElseCondStmtContext {
    let _localctx: FieldElseCondStmtContext = new FieldElseCondStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 136, TemplateParser.RULE_fieldElseCondStmt);
    try {
      this.state = 1796;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 195, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1792;
            this.fieldElseIfStmt();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1793;
            this.fieldElseExistsStmt();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1794;
            this.fieldElseMatchStmt();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1795;
            this.fieldElseContainsStmt();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public descriptorIfStmt(): DescriptorIfStmtContext {
    let _localctx: DescriptorIfStmtContext = new DescriptorIfStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 138, TemplateParser.RULE_descriptorIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1798;
        this.match(TemplateParser.OPEN);
        this.state = 1799;
        this.match(TemplateParser.K_DESCRIPTOR);
        this.state = 1801;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1800;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1803;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1806;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1805;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1808;
        this.match(TemplateParser.K_IF);
        this.state = 1809;
        this.match(TemplateParser.LPAR);
        this.state = 1810;
        this.testCondition();
        this.state = 1811;
        this.match(TemplateParser.RPAR);
        this.state = 1812;
        this.match(TemplateParser.CLOSE);
        this.state = 1816;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1813;
                this.statement();
              }
            }
          }
          this.state = 1818;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
        }
        this.state = 1820;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 199, this._ctx)) {
          case 1:
            {
              this.state = 1819;
              this.descriptorElseStmt();
            }
            break;
        }
        this.state = 1822;
        this.match(TemplateParser.OPEN);
        this.state = 1823;
        this.match(TemplateParser.K_DESCRIPTOR);
        this.state = 1824;
        this.match(TemplateParser.DOT);
        this.state = 1825;
        this.match(TemplateParser.K_END);
        this.state = 1826;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public descriptorMatchStmt(): DescriptorMatchStmtContext {
    let _localctx: DescriptorMatchStmtContext = new DescriptorMatchStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 140, TemplateParser.RULE_descriptorMatchStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1828;
        this.match(TemplateParser.OPEN);
        this.state = 1829;
        this.match(TemplateParser.K_DESCRIPTOR);
        this.state = 1831;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1830;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1833;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1836;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1835;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1838;
        this.match(TemplateParser.MATCH_OPEN);
        this.state = 1839;
        this.regex();
        this.state = 1840;
        this.match(TemplateParser.REGEX_CLOSE);
        this.state = 1841;
        this.match(TemplateParser.CLOSE);
        this.state = 1845;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1842;
                this.statement();
              }
            }
          }
          this.state = 1847;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
        }
        this.state = 1849;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 203, this._ctx)) {
          case 1:
            {
              this.state = 1848;
              this.descriptorElseStmt();
            }
            break;
        }
        this.state = 1851;
        this.match(TemplateParser.OPEN);
        this.state = 1852;
        this.match(TemplateParser.K_DESCRIPTOR);
        this.state = 1853;
        this.match(TemplateParser.DOT);
        this.state = 1854;
        this.match(TemplateParser.K_END);
        this.state = 1855;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public descriptorContainsStmt(): DescriptorContainsStmtContext {
    let _localctx: DescriptorContainsStmtContext =
      new DescriptorContainsStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 142, TemplateParser.RULE_descriptorContainsStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1857;
        this.match(TemplateParser.OPEN);
        this.state = 1858;
        this.match(TemplateParser.K_DESCRIPTOR);
        this.state = 1860;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1859;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1862;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1865;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1864;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1867;
        this.match(TemplateParser.K_CONTAINS);
        this.state = 1868;
        this.match(TemplateParser.LPAR);
        this.state = 1869;
        this.word();
        this.state = 1870;
        this.match(TemplateParser.RPAR);
        this.state = 1871;
        this.match(TemplateParser.CLOSE);
        this.state = 1875;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1872;
                this.statement();
              }
            }
          }
          this.state = 1877;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
        }
        this.state = 1879;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 207, this._ctx)) {
          case 1:
            {
              this.state = 1878;
              this.descriptorElseStmt();
            }
            break;
        }
        this.state = 1881;
        this.match(TemplateParser.OPEN);
        this.state = 1882;
        this.match(TemplateParser.K_DESCRIPTOR);
        this.state = 1883;
        this.match(TemplateParser.DOT);
        this.state = 1884;
        this.match(TemplateParser.K_END);
        this.state = 1885;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public descriptorElseIfStmt(): DescriptorElseIfStmtContext {
    let _localctx: DescriptorElseIfStmtContext =
      new DescriptorElseIfStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 144, TemplateParser.RULE_descriptorElseIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1887;
        this.match(TemplateParser.OPEN);
        this.state = 1888;
        this.match(TemplateParser.K_DESCRIPTOR);
        this.state = 1890;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1889;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1892;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1894;
        this.match(TemplateParser.K_ELSE);
        this.state = 1895;
        this.match(TemplateParser.DOT);
        this.state = 1897;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1896;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1899;
        this.match(TemplateParser.K_IF);
        this.state = 1900;
        this.match(TemplateParser.LPAR);
        this.state = 1901;
        this.testCondition();
        this.state = 1902;
        this.match(TemplateParser.RPAR);
        this.state = 1903;
        this.match(TemplateParser.CLOSE);
        this.state = 1907;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1904;
                this.statement();
              }
            }
          }
          this.state = 1909;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public descriptorElseMatchStmt(): DescriptorElseMatchStmtContext {
    let _localctx: DescriptorElseMatchStmtContext =
      new DescriptorElseMatchStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 146, TemplateParser.RULE_descriptorElseMatchStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1910;
        this.match(TemplateParser.OPEN);
        this.state = 1911;
        this.match(TemplateParser.K_DESCRIPTOR);
        this.state = 1913;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1912;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1915;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1917;
        this.match(TemplateParser.K_ELSE);
        this.state = 1918;
        this.match(TemplateParser.DOT);
        this.state = 1920;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1919;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1922;
        this.match(TemplateParser.MATCH_OPEN);
        this.state = 1923;
        this.regex();
        this.state = 1924;
        this.match(TemplateParser.REGEX_CLOSE);
        this.state = 1925;
        this.match(TemplateParser.CLOSE);
        this.state = 1929;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1926;
                this.statement();
              }
            }
          }
          this.state = 1931;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public descriptorElseContainsStmt(): DescriptorElseContainsStmtContext {
    let _localctx: DescriptorElseContainsStmtContext =
      new DescriptorElseContainsStmtContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      148,
      TemplateParser.RULE_descriptorElseContainsStmt,
    );
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1932;
        this.match(TemplateParser.OPEN);
        this.state = 1933;
        this.match(TemplateParser.K_DESCRIPTOR);
        this.state = 1935;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1934;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1937;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1939;
        this.match(TemplateParser.K_ELSE);
        this.state = 1940;
        this.match(TemplateParser.DOT);
        this.state = 1942;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1941;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1944;
        this.match(TemplateParser.K_CONTAINS);
        this.state = 1945;
        this.match(TemplateParser.LPAR);
        this.state = 1946;
        this.word();
        this.state = 1947;
        this.match(TemplateParser.RPAR);
        this.state = 1948;
        this.match(TemplateParser.CLOSE);
        this.state = 1952;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1949;
                this.statement();
              }
            }
          }
          this.state = 1954;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public descriptorElseEndStmt(): DescriptorElseEndStmtContext {
    let _localctx: DescriptorElseEndStmtContext =
      new DescriptorElseEndStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 150, TemplateParser.RULE_descriptorElseEndStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1955;
        this.match(TemplateParser.OPEN);
        this.state = 1956;
        this.match(TemplateParser.K_DESCRIPTOR);
        this.state = 1958;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1957;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1960;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1962;
        this.match(TemplateParser.K_ELSE);
        this.state = 1963;
        this.match(TemplateParser.CLOSE);
        this.state = 1967;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 218, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1964;
                this.statement();
              }
            }
          }
          this.state = 1969;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 218, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public descriptorElseStmt(): DescriptorElseStmtContext {
    let _localctx: DescriptorElseStmtContext = new DescriptorElseStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 152, TemplateParser.RULE_descriptorElseStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1972;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 219, this._ctx)) {
          case 1:
            {
              this.state = 1970;
              this.descriptorElseCondEndStmt();
            }
            break;

          case 2:
            {
              this.state = 1971;
              this.descriptorElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public descriptorElseCondEndStmt(): DescriptorElseCondEndStmtContext {
    let _localctx: DescriptorElseCondEndStmtContext =
      new DescriptorElseCondEndStmtContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      154,
      TemplateParser.RULE_descriptorElseCondEndStmt,
    );
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1975;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 1974;
                  this.descriptorElseCondStmt();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 1977;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
        this.state = 1980;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 221, this._ctx)) {
          case 1:
            {
              this.state = 1979;
              this.descriptorElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public descriptorElseCondStmt(): DescriptorElseCondStmtContext {
    let _localctx: DescriptorElseCondStmtContext =
      new DescriptorElseCondStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 156, TemplateParser.RULE_descriptorElseCondStmt);
    try {
      this.state = 1985;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 222, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1982;
            this.descriptorElseIfStmt();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1983;
            this.descriptorElseMatchStmt();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1984;
            this.descriptorElseContainsStmt();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public indexIfStmt(): IndexIfStmtContext {
    let _localctx: IndexIfStmtContext = new IndexIfStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 158, TemplateParser.RULE_indexIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1987;
        this.match(TemplateParser.OPEN);
        this.state = 1988;
        this.match(TemplateParser.K_INDEX);
        this.state = 1990;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1989;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 1992;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 1995;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 1994;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 1997;
        this.match(TemplateParser.K_IF);
        this.state = 1998;
        this.match(TemplateParser.LPAR);
        this.state = 1999;
        this.testCondition();
        this.state = 2000;
        this.match(TemplateParser.RPAR);
        this.state = 2001;
        this.match(TemplateParser.CLOSE);
        this.state = 2005;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2002;
                this.statement();
              }
            }
          }
          this.state = 2007;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
        }
        this.state = 2009;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 226, this._ctx)) {
          case 1:
            {
              this.state = 2008;
              this.indexElseStmt();
            }
            break;
        }
        this.state = 2011;
        this.match(TemplateParser.OPEN);
        this.state = 2012;
        this.match(TemplateParser.K_INDEX);
        this.state = 2013;
        this.match(TemplateParser.DOT);
        this.state = 2014;
        this.match(TemplateParser.K_END);
        this.state = 2015;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public indexEachStmt(): IndexEachStmtContext {
    let _localctx: IndexEachStmtContext = new IndexEachStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 160, TemplateParser.RULE_indexEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2017;
        this.match(TemplateParser.OPEN);
        this.state = 2018;
        this.match(TemplateParser.K_INDEX);
        this.state = 2020;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2019;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2022;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2024;
        this.match(TemplateParser.K_EACH);
        this.state = 2029;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 2025;
            this.match(TemplateParser.LPAR);
            this.state = 2026;
            this.eachCondition();
            this.state = 2027;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 2031;
        this.match(TemplateParser.CLOSE);
        this.state = 2035;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 229, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2032;
                this.statement();
              }
            }
          }
          this.state = 2037;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 229, this._ctx);
        }
        this.state = 2038;
        this.match(TemplateParser.OPEN);
        this.state = 2039;
        this.match(TemplateParser.K_INDEX);
        this.state = 2040;
        this.match(TemplateParser.DOT);
        this.state = 2041;
        this.match(TemplateParser.K_END);
        this.state = 2042;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public indexElseIfStmt(): IndexElseIfStmtContext {
    let _localctx: IndexElseIfStmtContext = new IndexElseIfStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 162, TemplateParser.RULE_indexElseIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2044;
        this.match(TemplateParser.OPEN);
        this.state = 2045;
        this.match(TemplateParser.K_INDEX);
        this.state = 2047;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2046;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2049;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2051;
        this.match(TemplateParser.K_ELSE);
        this.state = 2052;
        this.match(TemplateParser.DOT);
        this.state = 2054;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 2053;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 2056;
        this.match(TemplateParser.K_IF);
        this.state = 2057;
        this.match(TemplateParser.LPAR);
        this.state = 2058;
        this.testCondition();
        this.state = 2059;
        this.match(TemplateParser.RPAR);
        this.state = 2060;
        this.match(TemplateParser.CLOSE);
        this.state = 2064;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 232, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2061;
                this.statement();
              }
            }
          }
          this.state = 2066;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 232, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public indexElseEachStmt(): IndexElseEachStmtContext {
    let _localctx: IndexElseEachStmtContext = new IndexElseEachStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 164, TemplateParser.RULE_indexElseEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2067;
        this.match(TemplateParser.OPEN);
        this.state = 2068;
        this.match(TemplateParser.K_INDEX);
        this.state = 2070;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2069;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2072;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2074;
        this.match(TemplateParser.K_ELSE);
        this.state = 2075;
        this.match(TemplateParser.DOT);
        this.state = 2076;
        this.match(TemplateParser.K_EACH);
        this.state = 2081;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 2077;
            this.match(TemplateParser.LPAR);
            this.state = 2078;
            this.eachCondition();
            this.state = 2079;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 2083;
        this.match(TemplateParser.CLOSE);
        this.state = 2087;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 235, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2084;
                this.statement();
              }
            }
          }
          this.state = 2089;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 235, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public indexElseEndStmt(): IndexElseEndStmtContext {
    let _localctx: IndexElseEndStmtContext = new IndexElseEndStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 166, TemplateParser.RULE_indexElseEndStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2090;
        this.match(TemplateParser.OPEN);
        this.state = 2091;
        this.match(TemplateParser.K_INDEX);
        this.state = 2093;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2092;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2095;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2097;
        this.match(TemplateParser.K_ELSE);
        this.state = 2098;
        this.match(TemplateParser.CLOSE);
        this.state = 2102;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 237, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2099;
                this.statement();
              }
            }
          }
          this.state = 2104;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 237, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public indexElseStmt(): IndexElseStmtContext {
    let _localctx: IndexElseStmtContext = new IndexElseStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 168, TemplateParser.RULE_indexElseStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2108;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 238, this._ctx)) {
          case 1:
            {
              this.state = 2105;
              this.indexElseCondEndStmt();
            }
            break;

          case 2:
            {
              this.state = 2106;
              this.indexElseEachStmt();
            }
            break;

          case 3:
            {
              this.state = 2107;
              this.indexElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public indexElseCondEndStmt(): IndexElseCondEndStmtContext {
    let _localctx: IndexElseCondEndStmtContext =
      new IndexElseCondEndStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 170, TemplateParser.RULE_indexElseCondEndStmt);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2111;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 2110;
                  this.indexElseIfStmt();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 2113;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 239, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
        this.state = 2117;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 240, this._ctx)) {
          case 1:
            {
              this.state = 2115;
              this.indexElseEachStmt();
            }
            break;

          case 2:
            {
              this.state = 2116;
              this.indexElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public uniqueIfStmt(): UniqueIfStmtContext {
    let _localctx: UniqueIfStmtContext = new UniqueIfStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 172, TemplateParser.RULE_uniqueIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2119;
        this.match(TemplateParser.OPEN);
        this.state = 2120;
        this.match(TemplateParser.K_UNIQUE);
        this.state = 2122;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2121;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2124;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2127;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 2126;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 2129;
        this.match(TemplateParser.K_IF);
        this.state = 2130;
        this.match(TemplateParser.LPAR);
        this.state = 2131;
        this.testCondition();
        this.state = 2132;
        this.match(TemplateParser.RPAR);
        this.state = 2133;
        this.match(TemplateParser.CLOSE);
        this.state = 2137;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 243, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2134;
                this.statement();
              }
            }
          }
          this.state = 2139;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 243, this._ctx);
        }
        this.state = 2141;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 244, this._ctx)) {
          case 1:
            {
              this.state = 2140;
              this.uniqueElseStmt();
            }
            break;
        }
        this.state = 2143;
        this.match(TemplateParser.OPEN);
        this.state = 2144;
        this.match(TemplateParser.K_UNIQUE);
        this.state = 2145;
        this.match(TemplateParser.DOT);
        this.state = 2146;
        this.match(TemplateParser.K_END);
        this.state = 2147;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public uniqueEachStmt(): UniqueEachStmtContext {
    let _localctx: UniqueEachStmtContext = new UniqueEachStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 174, TemplateParser.RULE_uniqueEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2149;
        this.match(TemplateParser.OPEN);
        this.state = 2150;
        this.match(TemplateParser.K_UNIQUE);
        this.state = 2152;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2151;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2154;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2156;
        this.match(TemplateParser.K_EACH);
        this.state = 2161;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 2157;
            this.match(TemplateParser.LPAR);
            this.state = 2158;
            this.eachCondition();
            this.state = 2159;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 2163;
        this.match(TemplateParser.CLOSE);
        this.state = 2167;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 247, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2164;
                this.statement();
              }
            }
          }
          this.state = 2169;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 247, this._ctx);
        }
        this.state = 2170;
        this.match(TemplateParser.OPEN);
        this.state = 2171;
        this.match(TemplateParser.K_UNIQUE);
        this.state = 2172;
        this.match(TemplateParser.DOT);
        this.state = 2173;
        this.match(TemplateParser.K_END);
        this.state = 2174;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public uniqueElseIfStmt(): UniqueElseIfStmtContext {
    let _localctx: UniqueElseIfStmtContext = new UniqueElseIfStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 176, TemplateParser.RULE_uniqueElseIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2176;
        this.match(TemplateParser.OPEN);
        this.state = 2177;
        this.match(TemplateParser.K_UNIQUE);
        this.state = 2179;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2178;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2181;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2183;
        this.match(TemplateParser.K_ELSE);
        this.state = 2184;
        this.match(TemplateParser.DOT);
        this.state = 2186;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 2185;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 2188;
        this.match(TemplateParser.K_IF);
        this.state = 2189;
        this.match(TemplateParser.LPAR);
        this.state = 2190;
        this.testCondition();
        this.state = 2191;
        this.match(TemplateParser.RPAR);
        this.state = 2192;
        this.match(TemplateParser.CLOSE);
        this.state = 2196;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 250, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2193;
                this.statement();
              }
            }
          }
          this.state = 2198;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 250, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public uniqueElseEachStmt(): UniqueElseEachStmtContext {
    let _localctx: UniqueElseEachStmtContext = new UniqueElseEachStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 178, TemplateParser.RULE_uniqueElseEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2199;
        this.match(TemplateParser.OPEN);
        this.state = 2200;
        this.match(TemplateParser.K_UNIQUE);
        this.state = 2202;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2201;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2204;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2206;
        this.match(TemplateParser.K_ELSE);
        this.state = 2207;
        this.match(TemplateParser.DOT);
        this.state = 2208;
        this.match(TemplateParser.K_EACH);
        this.state = 2213;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 2209;
            this.match(TemplateParser.LPAR);
            this.state = 2210;
            this.eachCondition();
            this.state = 2211;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 2215;
        this.match(TemplateParser.CLOSE);
        this.state = 2219;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 253, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2216;
                this.statement();
              }
            }
          }
          this.state = 2221;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 253, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public uniqueElseEndStmt(): UniqueElseEndStmtContext {
    let _localctx: UniqueElseEndStmtContext = new UniqueElseEndStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 180, TemplateParser.RULE_uniqueElseEndStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2222;
        this.match(TemplateParser.OPEN);
        this.state = 2223;
        this.match(TemplateParser.K_UNIQUE);
        this.state = 2225;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2224;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2227;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2229;
        this.match(TemplateParser.K_ELSE);
        this.state = 2230;
        this.match(TemplateParser.CLOSE);
        this.state = 2234;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 255, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2231;
                this.statement();
              }
            }
          }
          this.state = 2236;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 255, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public uniqueElseStmt(): UniqueElseStmtContext {
    let _localctx: UniqueElseStmtContext = new UniqueElseStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 182, TemplateParser.RULE_uniqueElseStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2240;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 256, this._ctx)) {
          case 1:
            {
              this.state = 2237;
              this.uniqueElseCondEndStmt();
            }
            break;

          case 2:
            {
              this.state = 2238;
              this.uniqueElseEachStmt();
            }
            break;

          case 3:
            {
              this.state = 2239;
              this.uniqueElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public uniqueElseCondEndStmt(): UniqueElseCondEndStmtContext {
    let _localctx: UniqueElseCondEndStmtContext =
      new UniqueElseCondEndStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 184, TemplateParser.RULE_uniqueElseCondEndStmt);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2243;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 2242;
                  this.uniqueElseIfStmt();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 2245;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 257, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
        this.state = 2249;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 258, this._ctx)) {
          case 1:
            {
              this.state = 2247;
              this.uniqueElseEachStmt();
            }
            break;

          case 2:
            {
              this.state = 2248;
              this.uniqueElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public primaryIfStmt(): PrimaryIfStmtContext {
    let _localctx: PrimaryIfStmtContext = new PrimaryIfStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 186, TemplateParser.RULE_primaryIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2251;
        this.match(TemplateParser.OPEN);
        this.state = 2252;
        this.match(TemplateParser.K_PRIMARY);
        this.state = 2254;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2253;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2256;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2259;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 2258;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 2261;
        this.match(TemplateParser.K_IF);
        this.state = 2262;
        this.match(TemplateParser.LPAR);
        this.state = 2263;
        this.testCondition();
        this.state = 2264;
        this.match(TemplateParser.RPAR);
        this.state = 2265;
        this.match(TemplateParser.CLOSE);
        this.state = 2269;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 261, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2266;
                this.statement();
              }
            }
          }
          this.state = 2271;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 261, this._ctx);
        }
        this.state = 2273;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 262, this._ctx)) {
          case 1:
            {
              this.state = 2272;
              this.primaryElseStmt();
            }
            break;
        }
        this.state = 2275;
        this.match(TemplateParser.OPEN);
        this.state = 2276;
        this.match(TemplateParser.K_PRIMARY);
        this.state = 2277;
        this.match(TemplateParser.DOT);
        this.state = 2278;
        this.match(TemplateParser.K_END);
        this.state = 2279;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public primaryEachStmt(): PrimaryEachStmtContext {
    let _localctx: PrimaryEachStmtContext = new PrimaryEachStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 188, TemplateParser.RULE_primaryEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2281;
        this.match(TemplateParser.OPEN);
        this.state = 2282;
        this.match(TemplateParser.K_PRIMARY);
        this.state = 2284;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2283;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2286;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2288;
        this.match(TemplateParser.K_EACH);
        this.state = 2293;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 2289;
            this.match(TemplateParser.LPAR);
            this.state = 2290;
            this.eachCondition();
            this.state = 2291;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 2295;
        this.match(TemplateParser.CLOSE);
        this.state = 2299;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 265, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2296;
                this.statement();
              }
            }
          }
          this.state = 2301;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 265, this._ctx);
        }
        this.state = 2302;
        this.match(TemplateParser.OPEN);
        this.state = 2303;
        this.match(TemplateParser.K_PRIMARY);
        this.state = 2304;
        this.match(TemplateParser.DOT);
        this.state = 2305;
        this.match(TemplateParser.K_END);
        this.state = 2306;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public primaryElseIfStmt(): PrimaryElseIfStmtContext {
    let _localctx: PrimaryElseIfStmtContext = new PrimaryElseIfStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 190, TemplateParser.RULE_primaryElseIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2308;
        this.match(TemplateParser.OPEN);
        this.state = 2309;
        this.match(TemplateParser.K_PRIMARY);
        this.state = 2311;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2310;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2313;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2315;
        this.match(TemplateParser.K_ELSE);
        this.state = 2316;
        this.match(TemplateParser.DOT);
        this.state = 2318;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 2317;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 2320;
        this.match(TemplateParser.K_IF);
        this.state = 2321;
        this.match(TemplateParser.LPAR);
        this.state = 2322;
        this.testCondition();
        this.state = 2323;
        this.match(TemplateParser.RPAR);
        this.state = 2324;
        this.match(TemplateParser.CLOSE);
        this.state = 2328;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 268, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2325;
                this.statement();
              }
            }
          }
          this.state = 2330;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 268, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public primaryElseEachStmt(): PrimaryElseEachStmtContext {
    let _localctx: PrimaryElseEachStmtContext = new PrimaryElseEachStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 192, TemplateParser.RULE_primaryElseEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2331;
        this.match(TemplateParser.OPEN);
        this.state = 2332;
        this.match(TemplateParser.K_PRIMARY);
        this.state = 2334;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2333;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2336;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2338;
        this.match(TemplateParser.K_ELSE);
        this.state = 2339;
        this.match(TemplateParser.DOT);
        this.state = 2340;
        this.match(TemplateParser.K_EACH);
        this.state = 2345;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 2341;
            this.match(TemplateParser.LPAR);
            this.state = 2342;
            this.eachCondition();
            this.state = 2343;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 2347;
        this.match(TemplateParser.CLOSE);
        this.state = 2351;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 271, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2348;
                this.statement();
              }
            }
          }
          this.state = 2353;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 271, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public primaryElseEndStmt(): PrimaryElseEndStmtContext {
    let _localctx: PrimaryElseEndStmtContext = new PrimaryElseEndStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 194, TemplateParser.RULE_primaryElseEndStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2354;
        this.match(TemplateParser.OPEN);
        this.state = 2355;
        this.match(TemplateParser.K_PRIMARY);
        this.state = 2357;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2356;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2359;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2361;
        this.match(TemplateParser.K_ELSE);
        this.state = 2362;
        this.match(TemplateParser.CLOSE);
        this.state = 2366;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2363;
                this.statement();
              }
            }
          }
          this.state = 2368;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public primaryElseStmt(): PrimaryElseStmtContext {
    let _localctx: PrimaryElseStmtContext = new PrimaryElseStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 196, TemplateParser.RULE_primaryElseStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2372;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 274, this._ctx)) {
          case 1:
            {
              this.state = 2369;
              this.primaryElseCondEndStmt();
            }
            break;

          case 2:
            {
              this.state = 2370;
              this.primaryElseEachStmt();
            }
            break;

          case 3:
            {
              this.state = 2371;
              this.primaryElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public primaryElseCondEndStmt(): PrimaryElseCondEndStmtContext {
    let _localctx: PrimaryElseCondEndStmtContext =
      new PrimaryElseCondEndStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 198, TemplateParser.RULE_primaryElseCondEndStmt);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2375;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 2374;
                  this.primaryElseIfStmt();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 2377;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 275, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
        this.state = 2381;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 276, this._ctx)) {
          case 1:
            {
              this.state = 2379;
              this.primaryElseEachStmt();
            }
            break;

          case 2:
            {
              this.state = 2380;
              this.primaryElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public constraintIfStmt(): ConstraintIfStmtContext {
    let _localctx: ConstraintIfStmtContext = new ConstraintIfStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 200, TemplateParser.RULE_constraintIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2383;
        this.match(TemplateParser.OPEN);
        this.state = 2384;
        this.match(TemplateParser.K_CONSTRAINT);
        this.state = 2386;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2385;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2388;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2391;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 2390;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 2393;
        this.match(TemplateParser.K_IF);
        this.state = 2394;
        this.match(TemplateParser.LPAR);
        this.state = 2395;
        this.testCondition();
        this.state = 2396;
        this.match(TemplateParser.RPAR);
        this.state = 2397;
        this.match(TemplateParser.CLOSE);
        this.state = 2401;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 279, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2398;
                this.statement();
              }
            }
          }
          this.state = 2403;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 279, this._ctx);
        }
        this.state = 2405;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 280, this._ctx)) {
          case 1:
            {
              this.state = 2404;
              this.constraintElseStmt();
            }
            break;
        }
        this.state = 2407;
        this.match(TemplateParser.OPEN);
        this.state = 2408;
        this.match(TemplateParser.K_CONSTRAINT);
        this.state = 2409;
        this.match(TemplateParser.DOT);
        this.state = 2410;
        this.match(TemplateParser.K_END);
        this.state = 2411;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public constraintEachStmt(): ConstraintEachStmtContext {
    let _localctx: ConstraintEachStmtContext = new ConstraintEachStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 202, TemplateParser.RULE_constraintEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2413;
        this.match(TemplateParser.OPEN);
        this.state = 2414;
        this.match(TemplateParser.K_CONSTRAINT);
        this.state = 2416;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2415;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2418;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2420;
        this.match(TemplateParser.K_EACH);
        this.state = 2425;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 2421;
            this.match(TemplateParser.LPAR);
            this.state = 2422;
            this.eachCondition();
            this.state = 2423;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 2427;
        this.match(TemplateParser.CLOSE);
        this.state = 2431;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 283, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2428;
                this.statement();
              }
            }
          }
          this.state = 2433;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 283, this._ctx);
        }
        this.state = 2434;
        this.match(TemplateParser.OPEN);
        this.state = 2435;
        this.match(TemplateParser.K_CONSTRAINT);
        this.state = 2436;
        this.match(TemplateParser.DOT);
        this.state = 2437;
        this.match(TemplateParser.K_END);
        this.state = 2438;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public constraintElseIfStmt(): ConstraintElseIfStmtContext {
    let _localctx: ConstraintElseIfStmtContext =
      new ConstraintElseIfStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 204, TemplateParser.RULE_constraintElseIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2440;
        this.match(TemplateParser.OPEN);
        this.state = 2441;
        this.match(TemplateParser.K_CONSTRAINT);
        this.state = 2443;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2442;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2445;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2447;
        this.match(TemplateParser.K_ELSE);
        this.state = 2448;
        this.match(TemplateParser.DOT);
        this.state = 2450;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 2449;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 2452;
        this.match(TemplateParser.K_IF);
        this.state = 2453;
        this.match(TemplateParser.LPAR);
        this.state = 2454;
        this.testCondition();
        this.state = 2455;
        this.match(TemplateParser.RPAR);
        this.state = 2456;
        this.match(TemplateParser.CLOSE);
        this.state = 2460;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 286, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2457;
                this.statement();
              }
            }
          }
          this.state = 2462;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 286, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public constraintElseEachStmt(): ConstraintElseEachStmtContext {
    let _localctx: ConstraintElseEachStmtContext =
      new ConstraintElseEachStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 206, TemplateParser.RULE_constraintElseEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2463;
        this.match(TemplateParser.OPEN);
        this.state = 2464;
        this.match(TemplateParser.K_CONSTRAINT);
        this.state = 2466;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2465;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2468;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2470;
        this.match(TemplateParser.K_ELSE);
        this.state = 2471;
        this.match(TemplateParser.DOT);
        this.state = 2472;
        this.match(TemplateParser.K_EACH);
        this.state = 2477;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 2473;
            this.match(TemplateParser.LPAR);
            this.state = 2474;
            this.eachCondition();
            this.state = 2475;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 2479;
        this.match(TemplateParser.CLOSE);
        this.state = 2483;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 289, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2480;
                this.statement();
              }
            }
          }
          this.state = 2485;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 289, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public constraintElseEndStmt(): ConstraintElseEndStmtContext {
    let _localctx: ConstraintElseEndStmtContext =
      new ConstraintElseEndStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 208, TemplateParser.RULE_constraintElseEndStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2486;
        this.match(TemplateParser.OPEN);
        this.state = 2487;
        this.match(TemplateParser.K_CONSTRAINT);
        this.state = 2489;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2488;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2491;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2493;
        this.match(TemplateParser.K_ELSE);
        this.state = 2494;
        this.match(TemplateParser.CLOSE);
        this.state = 2498;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 291, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2495;
                this.statement();
              }
            }
          }
          this.state = 2500;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 291, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public constraintElseStmt(): ConstraintElseStmtContext {
    let _localctx: ConstraintElseStmtContext = new ConstraintElseStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 210, TemplateParser.RULE_constraintElseStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2504;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 292, this._ctx)) {
          case 1:
            {
              this.state = 2501;
              this.constraintElseCondEndStmt();
            }
            break;

          case 2:
            {
              this.state = 2502;
              this.constraintElseEachStmt();
            }
            break;

          case 3:
            {
              this.state = 2503;
              this.constraintElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public constraintElseCondEndStmt(): ConstraintElseCondEndStmtContext {
    let _localctx: ConstraintElseCondEndStmtContext =
      new ConstraintElseCondEndStmtContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      212,
      TemplateParser.RULE_constraintElseCondEndStmt,
    );
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2507;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 2506;
                  this.constraintElseIfStmt();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 2509;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 293, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
        this.state = 2513;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 294, this._ctx)) {
          case 1:
            {
              this.state = 2511;
              this.constraintElseEachStmt();
            }
            break;

          case 2:
            {
              this.state = 2512;
              this.constraintElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public foreignIfStmt(): ForeignIfStmtContext {
    let _localctx: ForeignIfStmtContext = new ForeignIfStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 214, TemplateParser.RULE_foreignIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2515;
        this.match(TemplateParser.OPEN);
        this.state = 2516;
        this.match(TemplateParser.K_FOREIGN);
        this.state = 2518;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2517;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2520;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2523;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 2522;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 2525;
        this.match(TemplateParser.K_IF);
        this.state = 2526;
        this.match(TemplateParser.LPAR);
        this.state = 2527;
        this.testCondition();
        this.state = 2528;
        this.match(TemplateParser.RPAR);
        this.state = 2529;
        this.match(TemplateParser.CLOSE);
        this.state = 2533;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 297, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2530;
                this.statement();
              }
            }
          }
          this.state = 2535;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 297, this._ctx);
        }
        this.state = 2537;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 298, this._ctx)) {
          case 1:
            {
              this.state = 2536;
              this.foreignElseStmt();
            }
            break;
        }
        this.state = 2539;
        this.match(TemplateParser.OPEN);
        this.state = 2540;
        this.match(TemplateParser.K_FOREIGN);
        this.state = 2541;
        this.match(TemplateParser.DOT);
        this.state = 2542;
        this.match(TemplateParser.K_END);
        this.state = 2543;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public foreignEachStmt(): ForeignEachStmtContext {
    let _localctx: ForeignEachStmtContext = new ForeignEachStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 216, TemplateParser.RULE_foreignEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2545;
        this.match(TemplateParser.OPEN);
        this.state = 2546;
        this.match(TemplateParser.K_FOREIGN);
        this.state = 2548;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2547;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2550;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2552;
        this.match(TemplateParser.K_EACH);
        this.state = 2557;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 2553;
            this.match(TemplateParser.LPAR);
            this.state = 2554;
            this.eachCondition();
            this.state = 2555;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 2559;
        this.match(TemplateParser.CLOSE);
        this.state = 2563;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 301, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2560;
                this.statement();
              }
            }
          }
          this.state = 2565;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 301, this._ctx);
        }
        this.state = 2566;
        this.match(TemplateParser.OPEN);
        this.state = 2567;
        this.match(TemplateParser.K_FOREIGN);
        this.state = 2568;
        this.match(TemplateParser.DOT);
        this.state = 2569;
        this.match(TemplateParser.K_END);
        this.state = 2570;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public foreignElseIfStmt(): ForeignElseIfStmtContext {
    let _localctx: ForeignElseIfStmtContext = new ForeignElseIfStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 218, TemplateParser.RULE_foreignElseIfStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2572;
        this.match(TemplateParser.OPEN);
        this.state = 2573;
        this.match(TemplateParser.K_FOREIGN);
        this.state = 2575;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2574;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2577;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2579;
        this.match(TemplateParser.K_ELSE);
        this.state = 2580;
        this.match(TemplateParser.DOT);
        this.state = 2582;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.NOT) {
          {
            this.state = 2581;
            this.match(TemplateParser.NOT);
          }
        }

        this.state = 2584;
        this.match(TemplateParser.K_IF);
        this.state = 2585;
        this.match(TemplateParser.LPAR);
        this.state = 2586;
        this.testCondition();
        this.state = 2587;
        this.match(TemplateParser.RPAR);
        this.state = 2588;
        this.match(TemplateParser.CLOSE);
        this.state = 2592;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2589;
                this.statement();
              }
            }
          }
          this.state = 2594;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public foreignElseEachStmt(): ForeignElseEachStmtContext {
    let _localctx: ForeignElseEachStmtContext = new ForeignElseEachStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 220, TemplateParser.RULE_foreignElseEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2595;
        this.match(TemplateParser.OPEN);
        this.state = 2596;
        this.match(TemplateParser.K_FOREIGN);
        this.state = 2598;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2597;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2600;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2602;
        this.match(TemplateParser.K_ELSE);
        this.state = 2603;
        this.match(TemplateParser.DOT);
        this.state = 2604;
        this.match(TemplateParser.K_EACH);
        this.state = 2609;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 2605;
            this.match(TemplateParser.LPAR);
            this.state = 2606;
            this.eachCondition();
            this.state = 2607;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 2611;
        this.match(TemplateParser.CLOSE);
        this.state = 2615;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 307, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2612;
                this.statement();
              }
            }
          }
          this.state = 2617;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 307, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public foreignElseEndStmt(): ForeignElseEndStmtContext {
    let _localctx: ForeignElseEndStmtContext = new ForeignElseEndStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 222, TemplateParser.RULE_foreignElseEndStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2618;
        this.match(TemplateParser.OPEN);
        this.state = 2619;
        this.match(TemplateParser.K_FOREIGN);
        this.state = 2621;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2620;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2623;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2625;
        this.match(TemplateParser.K_ELSE);
        this.state = 2626;
        this.match(TemplateParser.CLOSE);
        this.state = 2630;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 309, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2627;
                this.statement();
              }
            }
          }
          this.state = 2632;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 309, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public foreignElseStmt(): ForeignElseStmtContext {
    let _localctx: ForeignElseStmtContext = new ForeignElseStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 224, TemplateParser.RULE_foreignElseStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2636;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 310, this._ctx)) {
          case 1:
            {
              this.state = 2633;
              this.foreignElseCondEndStmt();
            }
            break;

          case 2:
            {
              this.state = 2634;
              this.foreignElseEachStmt();
            }
            break;

          case 3:
            {
              this.state = 2635;
              this.foreignElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public foreignElseCondEndStmt(): ForeignElseCondEndStmtContext {
    let _localctx: ForeignElseCondEndStmtContext =
      new ForeignElseCondEndStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 226, TemplateParser.RULE_foreignElseCondEndStmt);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2639;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 2638;
                  this.foreignElseIfStmt();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 2641;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 311, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
        this.state = 2645;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 312, this._ctx)) {
          case 1:
            {
              this.state = 2643;
              this.foreignElseEachStmt();
            }
            break;

          case 2:
            {
              this.state = 2644;
              this.foreignElseEndStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public commentEachStmt(): CommentEachStmtContext {
    let _localctx: CommentEachStmtContext = new CommentEachStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 228, TemplateParser.RULE_commentEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2647;
        this.match(TemplateParser.OPEN);
        this.state = 2648;
        this.match(TemplateParser.K_COMMENT);
        this.state = 2650;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2649;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2652;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2654;
        this.match(TemplateParser.K_EACH);
        this.state = 2659;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 2655;
            this.match(TemplateParser.LPAR);
            this.state = 2656;
            this.eachCondition();
            this.state = 2657;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 2661;
        this.match(TemplateParser.CLOSE);
        this.state = 2665;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 315, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2662;
                this.statement();
              }
            }
          }
          this.state = 2667;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 315, this._ctx);
        }
        this.state = 2668;
        this.match(TemplateParser.OPEN);
        this.state = 2669;
        this.match(TemplateParser.K_COMMENT);
        this.state = 2670;
        this.match(TemplateParser.DOT);
        this.state = 2671;
        this.match(TemplateParser.K_END);
        this.state = 2672;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public descriptionEachStmt(): DescriptionEachStmtContext {
    let _localctx: DescriptionEachStmtContext = new DescriptionEachStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 230, TemplateParser.RULE_descriptionEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2674;
        this.match(TemplateParser.OPEN);
        this.state = 2675;
        this.match(TemplateParser.K_DESCRIPTION);
        this.state = 2677;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2676;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2679;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2681;
        this.match(TemplateParser.K_EACH);
        this.state = 2686;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 2682;
            this.match(TemplateParser.LPAR);
            this.state = 2683;
            this.eachCondition();
            this.state = 2684;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 2688;
        this.match(TemplateParser.CLOSE);
        this.state = 2692;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 318, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2689;
                this.statement();
              }
            }
          }
          this.state = 2694;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 318, this._ctx);
        }
        this.state = 2695;
        this.match(TemplateParser.OPEN);
        this.state = 2696;
        this.match(TemplateParser.K_DESCRIPTION);
        this.state = 2697;
        this.match(TemplateParser.DOT);
        this.state = 2698;
        this.match(TemplateParser.K_END);
        this.state = 2699;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public optionEachStmt(): OptionEachStmtContext {
    let _localctx: OptionEachStmtContext = new OptionEachStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 232, TemplateParser.RULE_optionEachStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2701;
        this.match(TemplateParser.OPEN);
        this.state = 2702;
        this.match(TemplateParser.K_OPTION);
        this.state = 2704;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2703;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2706;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2708;
        this.match(TemplateParser.K_EACH);
        this.state = 2713;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.LPAR) {
          {
            this.state = 2709;
            this.match(TemplateParser.LPAR);
            this.state = 2710;
            this.eachCondition();
            this.state = 2711;
            this.match(TemplateParser.RPAR);
          }
        }

        this.state = 2715;
        this.match(TemplateParser.CLOSE);
        this.state = 2719;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 321, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2716;
                this.statement();
              }
            }
          }
          this.state = 2721;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 321, this._ctx);
        }
        this.state = 2722;
        this.match(TemplateParser.OPEN);
        this.state = 2723;
        this.match(TemplateParser.K_OPTION);
        this.state = 2724;
        this.match(TemplateParser.DOT);
        this.state = 2725;
        this.match(TemplateParser.K_END);
        this.state = 2726;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public constant(): ConstantContext {
    let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
    this.enterRule(_localctx, 234, TemplateParser.RULE_constant);
    try {
      this.state = 2731;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 322, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2728;
            this.tableStmt();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2729;
            this.fieldStmt();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 2730;
            this.constraintStmt();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableStmt(): TableStmtContext {
    let _localctx: TableStmtContext = new TableStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 236, TemplateParser.RULE_tableStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2733;
        this.match(TemplateParser.OPEN);
        this.state = 2734;
        this.tableLevel();
        this.state = 2738;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 323, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2735;
                this.match(TemplateParser.DOT);
              }
            }
          }
          this.state = 2740;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 323, this._ctx);
        }
        this.state = 2744;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 324, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2741;
                this.tableProps();
              }
            }
          }
          this.state = 2746;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 324, this._ctx);
        }
        this.state = 2748;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.DOT) {
          {
            this.state = 2747;
            this.replaceProp();
          }
        }

        this.state = 2750;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableProps(): TablePropsContext {
    let _localctx: TablePropsContext = new TablePropsContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 238, TemplateParser.RULE_tableProps);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2752;
        this.match(TemplateParser.DOT);
        this.state = 2753;
        this.tableProp();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldStmt(): FieldStmtContext {
    let _localctx: FieldStmtContext = new FieldStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 240, TemplateParser.RULE_fieldStmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2755;
        this.match(TemplateParser.OPEN);
        this.state = 2756;
        this.fieldLevel();
        this.state = 2760;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 326, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2757;
                this.match(TemplateParser.DOT);
              }
            }
          }
          this.state = 2762;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 326, this._ctx);
        }
        this.state = 2766;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 327, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2763;
                this.fieldProps();
              }
            }
          }
          this.state = 2768;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 327, this._ctx);
        }
        this.state = 2770;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.DOT) {
          {
            this.state = 2769;
            this.replaceProp();
          }
        }

        this.state = 2772;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldProps(): FieldPropsContext {
    let _localctx: FieldPropsContext = new FieldPropsContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 242, TemplateParser.RULE_fieldProps);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2774;
        this.match(TemplateParser.DOT);
        this.state = 2775;
        this.fieldProp();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public constraintStmt(): ConstraintStmtContext {
    let _localctx: ConstraintStmtContext = new ConstraintStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 244, TemplateParser.RULE_constraintStmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2777;
        this.match(TemplateParser.OPEN);
        this.state = 2778;
        this.constraintLevel();
        this.state = 2780;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 2779;
              this.match(TemplateParser.DOT);
            }
          }
          this.state = 2782;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === TemplateParser.DOT);
        this.state = 2784;
        this.match(TemplateParser.K_NAME);
        this.state = 2786;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.DOT) {
          {
            this.state = 2785;
            this.replaceProp();
          }
        }

        this.state = 2788;
        this.match(TemplateParser.CLOSE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public replaceProp(): ReplacePropContext {
    let _localctx: ReplacePropContext = new ReplacePropContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 246, TemplateParser.RULE_replaceProp);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2790;
        this.match(TemplateParser.DOT);
        this.state = 2791;
        this.match(TemplateParser.REPLACE_OPEN);
        this.state = 2792;
        this.pattern();
        this.state = 2801;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.REPLACEMENT_OPEN) {
          {
            this.state = 2793;
            this.match(TemplateParser.REPLACEMENT_OPEN);
            this.state = 2795;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === TemplateParser.REPLACEMENT) {
              {
                this.state = 2794;
                this.replacement();
              }
            }

            this.state = 2799;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === TemplateParser.FLAGS_OPEN) {
              {
                this.state = 2797;
                this.match(TemplateParser.FLAGS_OPEN);
                this.state = 2798;
                this.flags();
              }
            }
          }
        }

        this.state = 2803;
        _la = this._input.LA(1);
        if (
          !(
            ((_la - 116) & ~0x1f) === 0 &&
            ((1 << (_la - 116)) &
              ((1 << (TemplateParser.PATTERN_CLOSE - 116)) |
                (1 << (TemplateParser.REPLACEMENT_CLOSE - 116)) |
                (1 << (TemplateParser.FLAGS_CLOSE - 116)))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public allLevels(): AllLevelsContext {
    let _localctx: AllLevelsContext = new AllLevelsContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 248, TemplateParser.RULE_allLevels);
    try {
      this.state = 2808;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case TemplateParser.K_INHERITED:
        case TemplateParser.K_REFERENCE:
        case TemplateParser.K_TABLE:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2805;
            this.tableLevel();
          }
          break;
        case TemplateParser.K_DESCRIPTOR:
        case TemplateParser.K_FIELD:
        case TemplateParser.K_IMAGE:
        case TemplateParser.K_OPTION:
        case TemplateParser.K_PRIMARY:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2806;
            this.fieldLevel();
          }
          break;
        case TemplateParser.K_CONSTRAINT:
        case TemplateParser.K_FOREIGN:
        case TemplateParser.K_INDEX:
        case TemplateParser.K_PRIMARY_KEY:
        case TemplateParser.K_UNIQUE:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 2807;
            this.constraintLevel();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public eachCondition(): EachConditionContext {
    let _localctx: EachConditionContext = new EachConditionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 250, TemplateParser.RULE_eachCondition);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2810;
        this.condition();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public testCondition(): TestConditionContext {
    let _localctx: TestConditionContext = new TestConditionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 252, TemplateParser.RULE_testCondition);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2812;
        this.condition();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public condition(): ConditionContext {
    let _localctx: ConditionContext = new ConditionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 254, TemplateParser.RULE_condition);
    try {
      this.state = 2822;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 335, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2814;
            this.anyExpression();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2815;
            this.anyPriorityCondition();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 2816;
            this.anyCondition();
            this.state = 2817;
            this.orCondition();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 2819;
            this.anyCondition();
            this.state = 2820;
            this.andCondition();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public anyCondition(): AnyConditionContext {
    let _localctx: AnyConditionContext = new AnyConditionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 256, TemplateParser.RULE_anyCondition);
    try {
      this.state = 2826;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 336, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2824;
            this.anyExpression();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2825;
            this.anyPriorityCondition();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public anyPriorityCondition(): AnyPriorityConditionContext {
    let _localctx: AnyPriorityConditionContext =
      new AnyPriorityConditionContext(this._ctx, this.state);
    this.enterRule(_localctx, 258, TemplateParser.RULE_anyPriorityCondition);
    try {
      this.state = 2830;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case TemplateParser.NOT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2828;
            this.negativePriorityCondition();
          }
          break;
        case TemplateParser.LPAR:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2829;
            this.priorityCondition();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public negativePriorityCondition(): NegativePriorityConditionContext {
    let _localctx: NegativePriorityConditionContext =
      new NegativePriorityConditionContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      260,
      TemplateParser.RULE_negativePriorityCondition,
    );
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2832;
        this.match(TemplateParser.NOT);
        this.state = 2833;
        this.match(TemplateParser.LPAR);
        this.state = 2834;
        this.condition();
        this.state = 2835;
        this.match(TemplateParser.RPAR);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public priorityCondition(): PriorityConditionContext {
    let _localctx: PriorityConditionContext = new PriorityConditionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 262, TemplateParser.RULE_priorityCondition);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2837;
        this.match(TemplateParser.LPAR);
        this.state = 2838;
        this.condition();
        this.state = 2839;
        this.match(TemplateParser.RPAR);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public orCondition(): OrConditionContext {
    let _localctx: OrConditionContext = new OrConditionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 264, TemplateParser.RULE_orCondition);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2841;
        this.match(TemplateParser.OR);
        this.state = 2842;
        this.condition();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public andCondition(): AndConditionContext {
    let _localctx: AndConditionContext = new AndConditionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 266, TemplateParser.RULE_andCondition);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2844;
        this.match(TemplateParser.AND);
        this.state = 2845;
        this.condition();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public anyExpression(): AnyExpressionContext {
    let _localctx: AnyExpressionContext = new AnyExpressionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 268, TemplateParser.RULE_anyExpression);
    try {
      this.state = 2849;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case TemplateParser.NOT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2847;
            this.negativeExpression();
          }
          break;
        case TemplateParser.K_ALL:
        case TemplateParser.K_ARRAY:
        case TemplateParser.K_BIGINT:
        case TemplateParser.K_BLOB:
        case TemplateParser.K_BOOLEAN:
        case TemplateParser.K_CHAR:
        case TemplateParser.K_COMMENT:
        case TemplateParser.K_CONSTRAINT:
        case TemplateParser.K_CURRENCY:
        case TemplateParser.K_DATE:
        case TemplateParser.K_DATETIME:
        case TemplateParser.K_DEFAULT:
        case TemplateParser.K_DEPENDS:
        case TemplateParser.K_DESCRIPTION:
        case TemplateParser.K_DESCRIPTOR:
        case TemplateParser.K_DOUBLE:
        case TemplateParser.K_ENUM:
        case TemplateParser.K_FEMININE:
        case TemplateParser.K_FEW_FIELDS:
        case TemplateParser.K_FIRST:
        case TemplateParser.K_FLOAT:
        case TemplateParser.K_FOREIGN:
        case TemplateParser.K_FULLTEXT:
        case TemplateParser.K_IGNORED:
        case TemplateParser.K_IMAGE:
        case TemplateParser.K_INDEX:
        case TemplateParser.K_INFO:
        case TemplateParser.K_INHERITED:
        case TemplateParser.K_INT:
        case TemplateParser.K_INTEGER:
        case TemplateParser.K_JSON:
        case TemplateParser.K_MANY:
        case TemplateParser.K_MASCULINE:
        case TemplateParser.K_MASKED:
        case TemplateParser.K_NON_FIRST:
        case TemplateParser.K_NON_NULL:
        case TemplateParser.K_NOT_NULL:
        case TemplateParser.K_NULL:
        case TemplateParser.K_NUMBER:
        case TemplateParser.K_OPTION:
        case TemplateParser.K_OPTIONAL:
        case TemplateParser.K_PACKAGE:
        case TemplateParser.K_PASSWORD:
        case TemplateParser.K_PATH:
        case TemplateParser.K_PLURALIZABLE:
        case TemplateParser.K_PRIMARY:
        case TemplateParser.K_RADIO:
        case TemplateParser.K_REFERENCE:
        case TemplateParser.K_REPEATED:
        case TemplateParser.K_REQUIRED:
        case TemplateParser.K_SEARCHABLE:
        case TemplateParser.K_SELF_REFERENCE:
        case TemplateParser.K_SINGLE:
        case TemplateParser.K_STRING:
        case TemplateParser.K_TEXT:
        case TemplateParser.K_TIME:
        case TemplateParser.K_TIMESTAMP:
        case TemplateParser.K_TINYINT:
        case TemplateParser.K_UNIQUE:
        case TemplateParser.K_UNPLURALIZABLE:
        case TemplateParser.K_UNSIGNED:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2848;
            this.expression();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public negativeExpression(): NegativeExpressionContext {
    let _localctx: NegativeExpressionContext = new NegativeExpressionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 270, TemplateParser.RULE_negativeExpression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2851;
        this.match(TemplateParser.NOT);
        this.state = 2852;
        this.expression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public expression(): ExpressionContext {
    let _localctx: ExpressionContext = new ExpressionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 272, TemplateParser.RULE_expression);
    try {
      this.state = 2857;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case TemplateParser.K_COMMENT:
        case TemplateParser.K_DESCRIPTION:
        case TemplateParser.K_INHERITED:
        case TemplateParser.K_PACKAGE:
        case TemplateParser.K_PATH:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2854;
            this.attribute();
          }
          break;
        case TemplateParser.K_ALL:
        case TemplateParser.K_ARRAY:
        case TemplateParser.K_CONSTRAINT:
        case TemplateParser.K_DEFAULT:
        case TemplateParser.K_DEPENDS:
        case TemplateParser.K_DESCRIPTOR:
        case TemplateParser.K_FEMININE:
        case TemplateParser.K_FEW_FIELDS:
        case TemplateParser.K_FIRST:
        case TemplateParser.K_FOREIGN:
        case TemplateParser.K_FULLTEXT:
        case TemplateParser.K_IGNORED:
        case TemplateParser.K_IMAGE:
        case TemplateParser.K_INDEX:
        case TemplateParser.K_INFO:
        case TemplateParser.K_MANY:
        case TemplateParser.K_MASCULINE:
        case TemplateParser.K_MASKED:
        case TemplateParser.K_NON_FIRST:
        case TemplateParser.K_NON_NULL:
        case TemplateParser.K_NOT_NULL:
        case TemplateParser.K_NULL:
        case TemplateParser.K_NUMBER:
        case TemplateParser.K_OPTION:
        case TemplateParser.K_OPTIONAL:
        case TemplateParser.K_PASSWORD:
        case TemplateParser.K_PLURALIZABLE:
        case TemplateParser.K_PRIMARY:
        case TemplateParser.K_RADIO:
        case TemplateParser.K_REFERENCE:
        case TemplateParser.K_REPEATED:
        case TemplateParser.K_REQUIRED:
        case TemplateParser.K_SEARCHABLE:
        case TemplateParser.K_SELF_REFERENCE:
        case TemplateParser.K_SINGLE:
        case TemplateParser.K_UNIQUE:
        case TemplateParser.K_UNPLURALIZABLE:
        case TemplateParser.K_UNSIGNED:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2855;
            this.property();
          }
          break;
        case TemplateParser.K_BIGINT:
        case TemplateParser.K_BLOB:
        case TemplateParser.K_BOOLEAN:
        case TemplateParser.K_CHAR:
        case TemplateParser.K_CURRENCY:
        case TemplateParser.K_DATE:
        case TemplateParser.K_DATETIME:
        case TemplateParser.K_DOUBLE:
        case TemplateParser.K_ENUM:
        case TemplateParser.K_FLOAT:
        case TemplateParser.K_INT:
        case TemplateParser.K_INTEGER:
        case TemplateParser.K_JSON:
        case TemplateParser.K_STRING:
        case TemplateParser.K_TEXT:
        case TemplateParser.K_TIME:
        case TemplateParser.K_TIMESTAMP:
        case TemplateParser.K_TINYINT:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 2856;
            this.type();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public textContent(): TextContentContext {
    let _localctx: TextContentContext = new TextContentContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 274, TemplateParser.RULE_textContent);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2859;
        this.match(TemplateParser.TEXT);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableLevel(): TableLevelContext {
    let _localctx: TableLevelContext = new TableLevelContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 276, TemplateParser.RULE_tableLevel);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2861;
        _la = this._input.LA(1);
        if (
          !(
            _la === TemplateParser.K_INHERITED ||
            _la === TemplateParser.K_REFERENCE ||
            _la === TemplateParser.K_TABLE
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldLevel(): FieldLevelContext {
    let _localctx: FieldLevelContext = new FieldLevelContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 278, TemplateParser.RULE_fieldLevel);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2863;
        _la = this._input.LA(1);
        if (
          !(
            (((_la - 22) & ~0x1f) === 0 &&
              ((1 << (_la - 22)) &
                ((1 << (TemplateParser.K_DESCRIPTOR - 22)) |
                  (1 << (TemplateParser.K_FIELD - 22)) |
                  (1 << (TemplateParser.K_IMAGE - 22)))) !==
                0) ||
            _la === TemplateParser.K_OPTION ||
            _la === TemplateParser.K_PRIMARY
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public constraintLevel(): ConstraintLevelContext {
    let _localctx: ConstraintLevelContext = new ConstraintLevelContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 280, TemplateParser.RULE_constraintLevel);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2865;
        _la = this._input.LA(1);
        if (
          !(
            _la === TemplateParser.K_CONSTRAINT ||
            _la === TemplateParser.K_FOREIGN ||
            _la === TemplateParser.K_INDEX ||
            _la === TemplateParser.K_PRIMARY_KEY ||
            _la === TemplateParser.K_UNIQUE
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public pattern(): PatternContext {
    let _localctx: PatternContext = new PatternContext(this._ctx, this.state);
    this.enterRule(_localctx, 282, TemplateParser.RULE_pattern);
    let _la: number;
    try {
      this.state = 2876;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 341, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2867;
            this.match(TemplateParser.PATTERN);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2868;
            this.match(TemplateParser.PATTERN);
            this.state = 2869;
            this.pattern();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 2870;
            this.match(TemplateParser.PATTERN_OPEN);
            this.state = 2871;
            this.pattern();
            this.state = 2872;
            this.match(TemplateParser.PATTERN_CLOSE);
            this.state = 2874;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              _la === TemplateParser.PATTERN ||
              _la === TemplateParser.PATTERN_OPEN
            ) {
              {
                this.state = 2873;
                this.pattern();
              }
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public replacement(): ReplacementContext {
    let _localctx: ReplacementContext = new ReplacementContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 284, TemplateParser.RULE_replacement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2878;
        this.match(TemplateParser.REPLACEMENT);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public flags(): FlagsContext {
    let _localctx: FlagsContext = new FlagsContext(this._ctx, this.state);
    this.enterRule(_localctx, 286, TemplateParser.RULE_flags);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2881;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === TemplateParser.REGEX_FLAGS) {
          {
            this.state = 2880;
            this.match(TemplateParser.REGEX_FLAGS);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public regex(): RegexContext {
    let _localctx: RegexContext = new RegexContext(this._ctx, this.state);
    this.enterRule(_localctx, 288, TemplateParser.RULE_regex);
    let _la: number;
    try {
      this.state = 2892;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 344, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2883;
            this.match(TemplateParser.REGEX);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2884;
            this.match(TemplateParser.REGEX);
            this.state = 2885;
            this.regex();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 2886;
            this.match(TemplateParser.REGEX_OPEN);
            this.state = 2887;
            this.regex();
            this.state = 2888;
            this.match(TemplateParser.REGEX_CLOSE);
            this.state = 2890;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              _la === TemplateParser.REGEX ||
              _la === TemplateParser.REGEX_OPEN
            ) {
              {
                this.state = 2889;
                this.regex();
              }
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public word(): WordContext {
    let _localctx: WordContext = new WordContext(this._ctx, this.state);
    this.enterRule(_localctx, 290, TemplateParser.RULE_word);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2894;
        this.match(TemplateParser.WORD);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tableProp(): TablePropContext {
    let _localctx: TablePropContext = new TablePropContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 292, TemplateParser.RULE_tableProp);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2896;
        _la = this._input.LA(1);
        if (
          !(
            ((_la & ~0x1f) === 0 &&
              ((1 << _la) &
                ((1 << TemplateParser.K_CHARS) |
                  (1 << TemplateParser.K_COMMENT) |
                  (1 << TemplateParser.K_DEFAULT) |
                  (1 << TemplateParser.K_EXTRA))) !==
                0) ||
            (((_la - 39) & ~0x1f) === 0 &&
              ((1 << (_la - 39)) &
                ((1 << (TemplateParser.K_GENDER - 39)) |
                  (1 << (TemplateParser.K_INHERITED - 39)) |
                  (1 << (TemplateParser.K_LETTER - 39)) |
                  (1 << (TemplateParser.K_NAME - 39)) |
                  (1 << (TemplateParser.K_NORM - 39)))) !==
                0) ||
            (((_la - 71) & ~0x1f) === 0 &&
              ((1 << (_la - 71)) &
                ((1 << (TemplateParser.K_ORDER - 71)) |
                  (1 << (TemplateParser.K_PACKAGE - 71)) |
                  (1 << (TemplateParser.K_PATH - 71)) |
                  (1 << (TemplateParser.K_PLURAL - 71)) |
                  (1 << (TemplateParser.K_STYLE - 71)) |
                  (1 << (TemplateParser.K_UNIX - 71)))) !==
                0)
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fieldProp(): FieldPropContext {
    let _localctx: FieldPropContext = new FieldPropContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 294, TemplateParser.RULE_fieldProp);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2898;
        _la = this._input.LA(1);
        if (
          !(
            (((_la - 5) & ~0x1f) === 0 &&
              ((1 << (_la - 5)) &
                ((1 << (TemplateParser.K_ARRAY - 5)) |
                  (1 << (TemplateParser.K_CHARS - 5)) |
                  (1 << (TemplateParser.K_COMMENT - 5)) |
                  (1 << (TemplateParser.K_COUNT - 5)) |
                  (1 << (TemplateParser.K_DEFAULT - 5)) |
                  (1 << (TemplateParser.K_DELETE - 5)) |
                  (1 << (TemplateParser.K_FOLDER - 5)))) !==
                0) ||
            (((_la - 39) & ~0x1f) === 0 &&
              ((1 << (_la - 39)) &
                ((1 << (TemplateParser.K_GENDER - 39)) |
                  (1 << (TemplateParser.K_HEIGHT - 39)) |
                  (1 << (TemplateParser.K_HIGH - 39)) |
                  (1 << (TemplateParser.K_IMAGE - 39)) |
                  (1 << (TemplateParser.K_INDEX - 39)) |
                  (1 << (TemplateParser.K_INFO - 39)) |
                  (1 << (TemplateParser.K_INSERT - 39)) |
                  (1 << (TemplateParser.K_LENGTH - 39)) |
                  (1 << (TemplateParser.K_LETTER - 39)) |
                  (1 << (TemplateParser.K_LOW - 39)) |
                  (1 << (TemplateParser.K_MASK - 39)) |
                  (1 << (TemplateParser.K_NAME - 39)) |
                  (1 << (TemplateParser.K_NOID - 39)) |
                  (1 << (TemplateParser.K_NORM - 39)) |
                  (1 << (TemplateParser.K_NUMBER - 39)) |
                  (1 << (TemplateParser.K_ON - 39)) |
                  (1 << (TemplateParser.K_OPTION - 39)))) !==
                0) ||
            (((_la - 88) & ~0x1f) === 0 &&
              ((1 << (_la - 88)) &
                ((1 << (TemplateParser.K_SINGULAR - 88)) |
                  (1 << (TemplateParser.K_SIZE - 88)) |
                  (1 << (TemplateParser.K_STYLE - 88)) |
                  (1 << (TemplateParser.K_UNIX - 88)) |
                  (1 << (TemplateParser.K_UPDATE - 88)) |
                  (1 << (TemplateParser.K_WIDTH - 88)))) !==
                0)
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public attribute(): AttributeContext {
    let _localctx: AttributeContext = new AttributeContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 296, TemplateParser.RULE_attribute);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2900;
        _la = this._input.LA(1);
        if (
          !(
            _la === TemplateParser.K_COMMENT ||
            _la === TemplateParser.K_DESCRIPTION ||
            (((_la - 47) & ~0x1f) === 0 &&
              ((1 << (_la - 47)) &
                ((1 << (TemplateParser.K_INHERITED - 47)) |
                  (1 << (TemplateParser.K_PACKAGE - 47)) |
                  (1 << (TemplateParser.K_PATH - 47)))) !==
                0)
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public property(): PropertyContext {
    let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
    this.enterRule(_localctx, 298, TemplateParser.RULE_property);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2902;
        _la = this._input.LA(1);
        if (
          !(
            (((_la - 4) & ~0x1f) === 0 &&
              ((1 << (_la - 4)) &
                ((1 << (TemplateParser.K_ALL - 4)) |
                  (1 << (TemplateParser.K_ARRAY - 4)) |
                  (1 << (TemplateParser.K_CONSTRAINT - 4)) |
                  (1 << (TemplateParser.K_DEFAULT - 4)) |
                  (1 << (TemplateParser.K_DEPENDS - 4)) |
                  (1 << (TemplateParser.K_DESCRIPTOR - 4)) |
                  (1 << (TemplateParser.K_FEMININE - 4)) |
                  (1 << (TemplateParser.K_FEW_FIELDS - 4)) |
                  (1 << (TemplateParser.K_FIRST - 4)))) !==
                0) ||
            (((_la - 37) & ~0x1f) === 0 &&
              ((1 << (_la - 37)) &
                ((1 << (TemplateParser.K_FOREIGN - 37)) |
                  (1 << (TemplateParser.K_FULLTEXT - 37)) |
                  (1 << (TemplateParser.K_IGNORED - 37)) |
                  (1 << (TemplateParser.K_IMAGE - 37)) |
                  (1 << (TemplateParser.K_INDEX - 37)) |
                  (1 << (TemplateParser.K_INFO - 37)) |
                  (1 << (TemplateParser.K_MANY - 37)) |
                  (1 << (TemplateParser.K_MASCULINE - 37)) |
                  (1 << (TemplateParser.K_MASKED - 37)) |
                  (1 << (TemplateParser.K_NON_FIRST - 37)) |
                  (1 << (TemplateParser.K_NON_NULL - 37)) |
                  (1 << (TemplateParser.K_NOT_NULL - 37)) |
                  (1 << (TemplateParser.K_NULL - 37)) |
                  (1 << (TemplateParser.K_NUMBER - 37)))) !==
                0) ||
            (((_la - 69) & ~0x1f) === 0 &&
              ((1 << (_la - 69)) &
                ((1 << (TemplateParser.K_OPTION - 69)) |
                  (1 << (TemplateParser.K_OPTIONAL - 69)) |
                  (1 << (TemplateParser.K_PASSWORD - 69)) |
                  (1 << (TemplateParser.K_PLURALIZABLE - 69)) |
                  (1 << (TemplateParser.K_PRIMARY - 69)) |
                  (1 << (TemplateParser.K_RADIO - 69)) |
                  (1 << (TemplateParser.K_REFERENCE - 69)) |
                  (1 << (TemplateParser.K_REPEATED - 69)) |
                  (1 << (TemplateParser.K_REQUIRED - 69)) |
                  (1 << (TemplateParser.K_SEARCHABLE - 69)) |
                  (1 << (TemplateParser.K_SELF_REFERENCE - 69)) |
                  (1 << (TemplateParser.K_SINGLE - 69)) |
                  (1 << (TemplateParser.K_UNIQUE - 69)) |
                  (1 << (TemplateParser.K_UNPLURALIZABLE - 69)) |
                  (1 << (TemplateParser.K_UNSIGNED - 69)))) !==
                0)
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public type(): TypeContext {
    let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
    this.enterRule(_localctx, 300, TemplateParser.RULE_type);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2904;
        _la = this._input.LA(1);
        if (
          !(
            ((_la & ~0x1f) === 0 &&
              ((1 << _la) &
                ((1 << TemplateParser.K_BIGINT) |
                  (1 << TemplateParser.K_BLOB) |
                  (1 << TemplateParser.K_BOOLEAN) |
                  (1 << TemplateParser.K_CHAR) |
                  (1 << TemplateParser.K_CURRENCY) |
                  (1 << TemplateParser.K_DATE) |
                  (1 << TemplateParser.K_DATETIME) |
                  (1 << TemplateParser.K_DOUBLE) |
                  (1 << TemplateParser.K_ENUM))) !==
                0) ||
            (((_la - 35) & ~0x1f) === 0 &&
              ((1 << (_la - 35)) &
                ((1 << (TemplateParser.K_FLOAT - 35)) |
                  (1 << (TemplateParser.K_INT - 35)) |
                  (1 << (TemplateParser.K_INTEGER - 35)) |
                  (1 << (TemplateParser.K_JSON - 35)))) !==
                0) ||
            (((_la - 90) & ~0x1f) === 0 &&
              ((1 << (_la - 90)) &
                ((1 << (TemplateParser.K_STRING - 90)) |
                  (1 << (TemplateParser.K_TEXT - 90)) |
                  (1 << (TemplateParser.K_TIME - 90)) |
                  (1 << (TemplateParser.K_TIMESTAMP - 90)) |
                  (1 << (TemplateParser.K_TINYINT - 90)))) !==
                0)
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  private static readonly _serializedATNSegments: number = 6;
  private static readonly _serializedATNSegment0: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03~\u0B5D\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04' +
    '\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04' +
    '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    '\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044' +
    '\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04' +
    '=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04' +
    'F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04' +
    'O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04' +
    'X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t' +
    '`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04' +
    'i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04' +
    'r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04' +
    '{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81' +
    '\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86' +
    '\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B' +
    '\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90' +
    '\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95' +
    '\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x03\x02\x07\x02\u0132\n\x02' +
    '\f\x02\x0E\x02\u0135\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05' +
    '\x03\u013C\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\u0167' +
    '\n\x04\x03\x05\x03\x05\x03\x05\x06\x05\u016C\n\x05\r\x05\x0E\x05\u016D' +
    '\x03\x05\x05\x05\u0171\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03' +
    '\x05\x07\x05\u0179\n\x05\f\x05\x0E\x05\u017C\v\x05\x03\x05\x05\x05\u017F' +
    '\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06' +
    '\x03\x06\x06\x06\u018A\n\x06\r\x06\x0E\x06\u018B\x03\x06\x05\x06\u018F' +
    '\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\u0197\n' +
    '\x06\f\x06\x0E\x06\u019A\v\x06\x03\x06\x05\x06\u019D\n\x06\x03\x06\x03' +
    '\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x06\x07\u01A8' +
    '\n\x07\r\x07\x0E\x07\u01A9\x03\x07\x05\x07\u01AD\n\x07\x03\x07\x03\x07' +
    '\x03\x07\x03\x07\x03\x07\x07\x07\u01B4\n\x07\f\x07\x0E\x07\u01B7\v\x07' +
    '\x03\x07\x05\x07\u01BA\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03' +
    '\x07\x03\b\x03\b\x03\b\x06\b\u01C5\n\b\r\b\x0E\b\u01C6\x03\b\x05\b\u01CA' +
    '\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\u01D1\n\b\f\b\x0E\b\u01D4\v\b' +
    '\x03\b\x05\b\u01D7\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t' +
    '\x03\t\x06\t\u01E2\n\t\r\t\x0E\t\u01E3\x03\t\x05\t\u01E7\n\t\x03\t\x03' +
    '\t\x03\t\x03\t\x03\t\x03\t\x07\t\u01EF\n\t\f\t\x0E\t\u01F2\v\t\x03\t\x05' +
    '\t\u01F5\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x06' +
    '\n\u0200\n\n\r\n\x0E\n\u0201\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0209' +
    '\n\n\x03\n\x03\n\x07\n\u020D\n\n\f\n\x0E\n\u0210\v\n\x03\n\x03\n\x03\n' +
    '\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x06\v\u021B\n\v\r\v\x0E\v\u021C\x03' +
    '\v\x03\v\x03\v\x05\v\u0222\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07' +
    '\v\u022A\n\v\f\v\x0E\v\u022D\v\v\x03\f\x03\f\x03\f\x06\f\u0232\n\f\r\f' +
    '\x0E\f\u0233\x03\f\x03\f\x03\f\x05\f\u0239\n\f\x03\f\x03\f\x03\f\x03\f' +
    '\x03\f\x03\f\x07\f\u0241\n\f\f\f\x0E\f\u0244\v\f\x03\r\x03\r\x03\r\x06' +
    '\r\u0249\n\r\r\r\x0E\r\u024A\x03\r\x03\r\x03\r\x05\r\u0250\n\r\x03\r\x03' +
    '\r\x03\r\x03\r\x03\r\x07\r\u0257\n\r\f\r\x0E\r\u025A\v\r\x03\x0E\x03\x0E' +
    '\x03\x0E\x06\x0E\u025F\n\x0E\r\x0E\x0E\x0E\u0260\x03\x0E\x03\x0E\x03\x0E' +
    '\x05\x0E\u0266\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u026D' +
    '\n\x0E\f\x0E\x0E\x0E\u0270\v\x0E\x03\x0F\x03\x0F\x03\x0F\x06\x0F\u0275' +
    '\n\x0F\r\x0F\x0E\x0F\u0276\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u027C\n\x0F' +
    '\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0284\n\x0F\f' +
    '\x0F\x0E\x0F\u0287\v\x0F\x03\x10\x03\x10\x03\x10\x06\x10\u028C\n\x10\r' +
    '\x10\x0E\x10\u028D\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03' +
    '\x10\x05\x10\u0297\n\x10\x03\x10\x03\x10\x07\x10\u029B\n\x10\f\x10\x0E' +
    '\x10\u029E\v\x10\x03\x11\x03\x11\x03\x11\x06\x11\u02A3\n\x11\r\x11\x0E' +
    '\x11\u02A4\x03\x11\x03\x11\x03\x11\x07\x11\u02AA\n\x11\f\x11\x0E\x11\u02AD' +
    '\v\x11\x03\x12\x03\x12\x03\x12\x05\x12\u02B2\n\x12\x03\x13\x06\x13\u02B5' +
    '\n\x13\r\x13\x0E\x13\u02B6\x03\x13\x03\x13\x05\x13\u02BB\n\x13\x03\x14' +
    '\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u02C2\n\x14\x03\x15\x03\x15\x03' +
    '\x15\x06\x15\u02C7\n\x15\r\x15\x0E\x15\u02C8\x03\x15\x05\x15\u02CC\n\x15' +
    '\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u02D4\n\x15\f' +
    '\x15\x0E\x15\u02D7\v\x15\x03\x15\x05\x15\u02DA\n\x15\x03\x15\x03\x15\x03' +
    '\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x06\x16\u02E5\n\x16' +
    '\r\x16\x0E\x16\u02E6\x03\x16\x05\x16\u02EA\n\x16\x03\x16\x03\x16\x03\x16' +
    '\x03\x16\x03\x16\x03\x16\x07\x16\u02F2\n\x16\f\x16\x0E\x16\u02F5\v\x16' +
    '\x03\x16\x05\x16\u02F8\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03' +
    '\x16\x03\x17\x03\x17\x03\x17\x06\x17\u0303\n\x17\r\x17\x0E\x17\u0304\x03' +
    '\x17\x05\x17\u0308\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17' +
    '\u030F\n\x17\f\x17\x0E\x17\u0312\v\x17\x03\x17\x05\x17\u0315\n\x17\x03' +
    '\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x06' +
    '\x18\u0320\n\x18\r\x18\x0E\x18\u0321\x03\x18\x05\x18\u0325\n\x18\x03\x18' +
    '\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u032C\n\x18\f\x18\x0E\x18\u032F' +
    '\v\x18\x03\x18\x05\x18\u0332\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03' +
    '\x18\x03\x18\x03\x19\x03\x19\x03\x19\x06\x19\u033D\n\x19\r\x19\x0E\x19' +
    '\u033E\x03\x19\x05\x19\u0342\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03' +
    '\x19\x03\x19\x07\x19\u034A\n\x19\f\x19\x0E\x19\u034D\v\x19\x03\x19\x05' +
    '\x19\u0350\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A' +
    '\x03\x1A\x03\x1A\x06\x1A\u035B\n\x1A\r\x1A\x0E\x1A\u035C\x03\x1A\x03\x1A' +
    '\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0364\n\x1A\x03\x1A\x03\x1A\x07\x1A\u0368' +
    '\n\x1A\f\x1A\x0E\x1A\u036B\v\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A' +
    '\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x06\x1B\u0376\n\x1B\r\x1B\x0E\x1B\u0377' +
    '\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u037D\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03' +
    '\x1B\x03\x1B\x03\x1B\x07\x1B\u0385\n\x1B\f\x1B\x0E\x1B\u0388\v\x1B\x03' +
    '\x1C\x03\x1C\x03\x1C\x06\x1C\u038D\n\x1C\r\x1C\x0E\x1C\u038E\x03\x1C\x03' +
    '\x1C\x03\x1C\x05\x1C\u0394\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C' +
    '\x03\x1C\x07\x1C\u039C\n\x1C\f\x1C\x0E\x1C\u039F\v\x1C\x03\x1D\x03\x1D' +
    '\x03\x1D\x06\x1D\u03A4\n\x1D\r\x1D\x0E\x1D\u03A5\x03\x1D\x03\x1D\x03\x1D' +
    '\x05\x1D\u03AB\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u03B2' +
    '\n\x1D\f\x1D\x0E\x1D\u03B5\v\x1D\x03\x1E\x03\x1E\x03\x1E\x06\x1E\u03BA' +
    '\n\x1E\r\x1E\x0E\x1E\u03BB\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u03C1\n\x1E' +
    '\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u03C8\n\x1E\f\x1E\x0E' +
    '\x1E\u03CB\v\x1E\x03\x1F\x03\x1F\x03\x1F\x06\x1F\u03D0\n\x1F\r\x1F\x0E' +
    '\x1F\u03D1\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u03D7\n\x1F\x03\x1F\x03\x1F' +
    '\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u03DF\n\x1F\f\x1F\x0E\x1F\u03E2' +
    '\v\x1F\x03 \x03 \x03 \x06 \u03E7\n \r \x0E \u03E8\x03 \x03 \x03 \x03 ' +
    '\x03 \x03 \x03 \x05 \u03F2\n \x03 \x03 \x07 \u03F6\n \f \x0E \u03F9\v' +
    ' \x03!\x03!\x03!\x06!\u03FE\n!\r!\x0E!\u03FF\x03!\x03!\x03!\x07!\u0405' +
    '\n!\f!\x0E!\u0408\v!\x03"\x03"\x03"\x05"\u040D\n"\x03#\x06#\u0410' +
    '\n#\r#\x0E#\u0411\x03#\x03#\x05#\u0416\n#\x03$\x03$\x03$\x03$\x03$\x05' +
    '$\u041D\n$\x03%\x03%\x03%\x06%\u0422\n%\r%\x0E%\u0423\x03%\x05%\u0427' +
    '\n%\x03%\x03%\x03%\x03%\x03%\x03%\x07%\u042F\n%\f%\x0E%\u0432\v%\x03%' +
    '\x05%\u0435\n%\x03%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x06&\u0440' +
    '\n&\r&\x0E&\u0441\x03&\x05&\u0445\n&\x03&\x03&\x03&\x03&\x03&\x03&\x07' +
    '&\u044D\n&\f&\x0E&\u0450\v&\x03&\x05&\u0453\n&\x03&\x03&\x03&\x03&\x03' +
    "&\x03&\x03\'\x03\'\x03\'\x06\'\u045E\n\'\r\'\x0E\'\u045F\x03\'\x05\'\u0463" +
    "\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u046A\n\'\f\'\x0E\'\u046D\v\'" +
    "\x03\'\x05\'\u0470\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03" +
    '(\x06(\u047B\n(\r(\x0E(\u047C\x03(\x05(\u0480\n(\x03(\x03(\x03(\x03(\x03' +
    '(\x07(\u0487\n(\f(\x0E(\u048A\v(\x03(\x05(\u048D\n(\x03(\x03(\x03(\x03' +
    '(\x03(\x03(\x03)\x03)\x03)\x06)\u0498\n)\r)\x0E)\u0499\x03)\x05)\u049D' +
    '\n)\x03)\x03)\x03)\x03)\x03)\x03)\x07)\u04A5\n)\f)\x0E)\u04A8\v)\x03)' +
    '\x05)\u04AB\n)\x03)\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x06*\u04B6' +
    '\n*\r*\x0E*\u04B7\x03*\x03*\x03*\x03*\x03*\x05*\u04BF\n*\x03*\x03*\x07' +
    '*\u04C3\n*\f*\x0E*\u04C6\v*\x03*\x03*\x03*\x03*\x03*\x03*\x03+\x03+\x03' +
    '+\x06+\u04D1\n+\r+\x0E+\u04D2\x03+\x03+\x03+\x03+\x03+\x05+\u04DA\n+\x03' +
    '+\x03+\x07+\u04DE\n+\f+\x0E+\u04E1\v+\x03+\x03+\x03+\x03+\x03+\x03+\x03' +
    ',\x03,\x03,\x06,\u04EC\n,\r,\x0E,\u04ED\x03,\x03,\x03,\x05,\u04F3\n,\x03' +
    ',\x03,\x03,\x03,\x03,\x03,\x07,\u04FB\n,\f,\x0E,\u04FE\v,\x03-\x03-\x03' +
    '-\x06-\u0503\n-\r-\x0E-\u0504\x03-\x03-\x03-\x05-\u050A\n-\x03-\x03-\x03' +
    '-\x03-\x03-\x03-\x07-\u0512\n-\f-\x0E-\u0515\v-\x03.\x03.\x03.\x06.\u051A' +
    '\n.\r.\x0E.\u051B\x03.\x03.\x03.\x05.\u0521\n.\x03.\x03.\x03.\x03.\x03' +
    '.\x07.\u0528\n.\f.\x0E.\u052B\v.\x03/\x03/\x03/\x06/\u0530\n/\r/\x0E/' +
    '\u0531\x03/\x03/\x03/\x05/\u0537\n/\x03/\x03/\x03/\x03/\x03/\x07/\u053E' +
    '\n/\f/\x0E/\u0541\v/\x030\x030\x030\x060\u0546\n0\r0\x0E0\u0547\x030\x03' +
    '0\x030\x050\u054D\n0\x030\x030\x030\x030\x030\x030\x070\u0555\n0\f0\x0E' +
    '0\u0558\v0\x031\x031\x031\x061\u055D\n1\r1\x0E1\u055E\x031\x031\x031\x03' +
    '1\x031\x031\x031\x051\u0568\n1\x031\x031\x071\u056C\n1\f1\x0E1\u056F\v' +
    '1\x032\x032\x032\x062\u0574\n2\r2\x0E2\u0575\x032\x032\x032\x032\x032' +
    '\x032\x032\x052\u057F\n2\x032\x032\x072\u0583\n2\f2\x0E2\u0586\v2\x03' +
    '3\x033\x033\x063\u058B\n3\r3\x0E3\u058C\x033\x033\x033\x073\u0592\n3\f' +
    '3\x0E3\u0595\v3\x034\x034\x034\x034\x054\u059B\n4\x035\x065\u059E\n5\r' +
    '5\x0E5\u059F\x035\x035\x035\x055\u05A5\n5\x036\x036\x036\x036\x036\x05' +
    '6\u05AC\n6\x037\x037\x037\x067\u05B1\n7\r7\x0E7\u05B2\x037\x057\u05B6' +
    '\n7\x037\x037\x037\x037\x037\x037\x077\u05BE\n7\f7\x0E7\u05C1\v7\x037' +
    '\x057\u05C4\n7\x037\x037\x037\x037\x037\x037\x038\x038\x038\x068\u05CF' +
    '\n8\r8\x0E8\u05D0\x038\x058\u05D4\n8\x038\x038\x038\x038\x038\x038\x07' +
    '8\u05DC\n8\f8\x0E8\u05DF\v8\x038\x058\u05E2\n8\x038\x038\x038\x038\x03' +
    '8\x038\x039\x039\x039\x069\u05ED\n9\r9\x0E9\u05EE\x039\x059\u05F2\n9\x03' +
    '9\x039\x039\x039\x039\x079\u05F9\n9\f9\x0E9\u05FC\v9\x039\x059\u05FF\n' +
    '9\x039\x039\x039\x039\x039\x039\x03:\x03:\x03:\x06:\u060A\n:\r:\x0E:\u060B' +
    '\x03:\x05:\u060F\n:\x03:\x03:\x03:\x03:\x03:\x03:\x07:\u0617\n:\f:\x0E' +
    ':\u061A\v:\x03:\x05:\u061D\n:\x03:\x03:\x03:\x03:\x03:\x03:\x03;\x03;' +
    '\x03;\x06;\u0628\n;\r;\x0E;\u0629\x03;\x03;\x03;\x03;\x03;\x05;\u0631' +
    '\n;\x03;\x03;\x07;\u0635\n;\f;\x0E;\u0638\v;\x03;\x03;\x03;\x03;\x03;' +
    '\x03;\x03<\x03<\x03<\x06<\u0643\n<\r<\x0E<\u0644\x03<\x03<\x03<\x03<\x03' +
    '<\x05<\u064C\n<\x03<\x03<\x07<\u0650\n<\f<\x0E<\u0653\v<\x03<\x03<\x03' +
    '<\x03<\x03<\x03<\x03=\x03=\x03=\x06=\u065E\n=\r=\x0E=\u065F\x03=\x03=' +
    '\x03=\x05=\u0665\n=\x03=\x03=\x03=\x03=\x03=\x03=\x07=\u066D\n=\f=\x0E' +
    '=\u0670\v=\x03>\x03>\x03>\x06>\u0675\n>\r>\x0E>\u0676\x03>\x03>\x03>\x05' +
    '>\u067C\n>\x03>\x03>\x03>\x03>\x03>\x03>\x07>\u0684\n>\f>\x0E>\u0687\v' +
    '>\x03?\x03?\x03?\x06?\u068C\n?\r?\x0E?\u068D\x03?\x03?\x03?\x05?\u0693' +
    '\n?\x03?\x03?\x03?\x03?\x03?\x07?\u069A\n?\f?\x0E?\u069D\v?\x03@\x03@' +
    '\x03@\x06@\u06A2\n@\r@\x0E@\u06A3\x03@\x03@\x03@\x05@\u06A9\n@\x03@\x03' +
    '@\x03@\x03@\x03@\x03@\x07@\u06B1\n@\f@\x0E@\u06B4\v@\x03A\x03A\x03A\x06' +
    'A\u06B9\nA\rA\x0EA\u06BA\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u06C4' +
    '\nA\x03A\x03A\x07A\u06C8\nA\fA\x0EA\u06CB\vA\x03B\x03B\x03B\x06B\u06D0' +
    '\nB\rB\x0EB\u06D1\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u06DB\nB\x03' +
    'B\x03B\x07B\u06DF\nB\fB\x0EB\u06E2\vB\x03C\x03C\x03C\x06C\u06E7\nC\rC' +
    '\x0EC\u06E8\x03C\x03C\x03C\x07C\u06EE\nC\fC\x0EC\u06F1\vC\x03D\x03D\x03' +
    'D\x03D\x05D\u06F7\nD\x03E\x06E\u06FA\nE\rE\x0EE\u06FB\x03E\x03E\x03E\x05' +
    'E\u0701\nE\x03F\x03F\x03F\x03F\x05F\u0707\nF\x03G\x03G\x03G\x06G\u070C' +
    '\nG\rG\x0EG\u070D\x03G\x05G\u0711\nG\x03G\x03G\x03G\x03G\x03G\x03G\x07' +
    'G\u0719\nG\fG\x0EG\u071C\vG\x03G\x05G\u071F\nG\x03G\x03G\x03G\x03G\x03' +
    'G\x03G\x03H\x03H\x03H\x06H\u072A\nH\rH\x0EH\u072B\x03H\x05H\u072F\nH\x03' +
    'H\x03H\x03H\x03H\x03H\x07H\u0736\nH\fH\x0EH\u0739\vH\x03H\x05H\u073C\n' +
    'H\x03H\x03H\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x06I\u0747\nI\rI\x0EI\u0748' +
    '\x03I\x05I\u074C\nI\x03I\x03I\x03I\x03I\x03I\x03I\x07I\u0754\nI\fI\x0E' +
    'I\u0757\vI\x03I\x05I\u075A\nI\x03I\x03I\x03I\x03I\x03I\x03I\x03J\x03J' +
    '\x03J\x06J\u0765\nJ\rJ\x0EJ\u0766\x03J\x03J\x03J\x05J\u076C\nJ\x03J\x03' +
    'J\x03J\x03J\x03J\x03J\x07J\u0774\nJ\fJ\x0EJ\u0777\vJ\x03K\x03K\x03K\x06' +
    'K\u077C\nK\rK\x0EK\u077D\x03K\x03K\x03K\x05K\u0783\nK\x03K\x03K\x03K\x03' +
    'K\x03K\x07K\u078A\nK\fK\x0EK\u078D\vK\x03L\x03L\x03L\x06L\u0792\nL\rL' +
    '\x0EL\u0793\x03L\x03L\x03L\x05L\u0799\nL\x03L\x03L\x03L\x03L\x03L\x03' +
    'L\x07L\u07A1\nL\fL\x0EL\u07A4\vL\x03M\x03M\x03M\x06M\u07A9\nM\rM\x0EM' +
    '\u07AA\x03M\x03M\x03M\x07M\u07B0\nM\fM\x0EM\u07B3\vM\x03N\x03N\x05N\u07B7' +
    '\nN\x03O\x06O\u07BA\nO\rO\x0EO\u07BB\x03O\x05O\u07BF\nO\x03P\x03P\x03' +
    'P\x05P\u07C4\nP\x03Q\x03Q\x03Q\x06Q\u07C9\nQ\rQ\x0EQ\u07CA\x03Q\x05Q\u07CE' +
    '\nQ\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x07Q\u07D6\nQ\fQ\x0EQ\u07D9\vQ\x03Q' +
    '\x05Q\u07DC\nQ\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x06R\u07E7' +
    '\nR\rR\x0ER\u07E8\x03R\x03R\x03R\x03R\x03R\x05R\u07F0\nR\x03R\x03R\x07' +
    'R\u07F4\nR\fR\x0ER\u07F7\vR\x03R\x03R\x03R\x03R\x03R\x03R\x03S\x03S\x03' +
    'S\x06S\u0802\nS\rS\x0ES\u0803\x03S\x03S\x03S\x05S\u0809\nS\x03S\x03S\x03' +
    'S\x03S\x03S\x03S\x07S\u0811\nS\fS\x0ES\u0814\vS\x03T\x03T\x03T\x06T\u0819' +
    '\nT\rT\x0ET\u081A\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u0824\nT\x03' +
    'T\x03T\x07T\u0828\nT\fT\x0ET\u082B\vT\x03U\x03U\x03U\x06U\u0830\nU\rU' +
    '\x0EU\u0831\x03U\x03U\x03U\x07U\u0837\nU\fU\x0EU\u083A\vU\x03V\x03V\x03' +
    'V\x05V\u083F\nV\x03W\x06W\u0842\nW\rW\x0EW\u0843\x03W\x03W\x05W\u0848' +
    '\nW\x03X\x03X\x03X\x06X\u084D\nX\rX\x0EX\u084E\x03X\x05X\u0852\nX\x03' +
    'X\x03X\x03X\x03X\x03X\x03X\x07X\u085A\nX\fX\x0EX\u085D\vX\x03X\x05X\u0860' +
    '\nX\x03X\x03X\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x06Y\u086B\nY\rY\x0E' +
    'Y\u086C\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u0874\nY\x03Y\x03Y\x07Y\u0878\n' +
    'Y\fY\x0EY\u087B\vY\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x06Z\u0886' +
    '\nZ\rZ\x0EZ\u0887\x03Z\x03Z\x03Z\x05Z\u088D\nZ\x03Z\x03Z\x03Z\x03Z\x03' +
    'Z\x03Z\x07Z\u0895\nZ\fZ\x0EZ\u0898\vZ\x03[\x03[\x03[\x06[\u089D\n[\r[' +
    '\x0E[\u089E\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x05[\u08A8\n[\x03[\x03' +
    '[\x07[\u08AC\n[\f[\x0E[\u08AF\v[\x03\\\x03\\\x03\\\x06\\\u08B4\n\\\r\\' +
    '\x0E\\\u08B5\x03\\\x03\\\x03\\\x07\\\u08BB\n\\\f\\\x0E\\\u08BE\v\\\x03' +
    ']\x03]\x03]\x05]\u08C3\n]\x03^\x06^\u08C6\n^\r^\x0E^\u08C7\x03^\x03^\x05' +
    '^\u08CC\n^\x03_\x03_\x03_\x06_\u08D1\n_\r_\x0E_\u08D2\x03_\x05_\u08D6' +
    '\n_\x03_\x03_\x03_\x03_\x03_\x03_\x07_\u08DE\n_\f_\x0E_\u08E1\v_\x03_' +
    '\x05_\u08E4\n_\x03_\x03_\x03_\x03_\x03_\x03_\x03`\x03`\x03`\x06`\u08EF' +
    '\n`';
  private static readonly _serializedATNSegment1: string =
    '\r`\x0E`\u08F0\x03`\x03`\x03`\x03`\x03`\x05`\u08F8\n`\x03`\x03`\x07`\u08FC' +
    '\n`\f`\x0E`\u08FF\v`\x03`\x03`\x03`\x03`\x03`\x03`\x03a\x03a\x03a\x06' +
    'a\u090A\na\ra\x0Ea\u090B\x03a\x03a\x03a\x05a\u0911\na\x03a\x03a\x03a\x03' +
    'a\x03a\x03a\x07a\u0919\na\fa\x0Ea\u091C\va\x03b\x03b\x03b\x06b\u0921\n' +
    'b\rb\x0Eb\u0922\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x05b\u092C\nb\x03b' +
    '\x03b\x07b\u0930\nb\fb\x0Eb\u0933\vb\x03c\x03c\x03c\x06c\u0938\nc\rc\x0E' +
    'c\u0939\x03c\x03c\x03c\x07c\u093F\nc\fc\x0Ec\u0942\vc\x03d\x03d\x03d\x05' +
    'd\u0947\nd\x03e\x06e\u094A\ne\re\x0Ee\u094B\x03e\x03e\x05e\u0950\ne\x03' +
    'f\x03f\x03f\x06f\u0955\nf\rf\x0Ef\u0956\x03f\x05f\u095A\nf\x03f\x03f\x03' +
    'f\x03f\x03f\x03f\x07f\u0962\nf\ff\x0Ef\u0965\vf\x03f\x05f\u0968\nf\x03' +
    'f\x03f\x03f\x03f\x03f\x03f\x03g\x03g\x03g\x06g\u0973\ng\rg\x0Eg\u0974' +
    '\x03g\x03g\x03g\x03g\x03g\x05g\u097C\ng\x03g\x03g\x07g\u0980\ng\fg\x0E' +
    'g\u0983\vg\x03g\x03g\x03g\x03g\x03g\x03g\x03h\x03h\x03h\x06h\u098E\nh' +
    '\rh\x0Eh\u098F\x03h\x03h\x03h\x05h\u0995\nh\x03h\x03h\x03h\x03h\x03h\x03' +
    'h\x07h\u099D\nh\fh\x0Eh\u09A0\vh\x03i\x03i\x03i\x06i\u09A5\ni\ri\x0Ei' +
    '\u09A6\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x05i\u09B0\ni\x03i\x03i\x07' +
    'i\u09B4\ni\fi\x0Ei\u09B7\vi\x03j\x03j\x03j\x06j\u09BC\nj\rj\x0Ej\u09BD' +
    '\x03j\x03j\x03j\x07j\u09C3\nj\fj\x0Ej\u09C6\vj\x03k\x03k\x03k\x05k\u09CB' +
    '\nk\x03l\x06l\u09CE\nl\rl\x0El\u09CF\x03l\x03l\x05l\u09D4\nl\x03m\x03' +
    'm\x03m\x06m\u09D9\nm\rm\x0Em\u09DA\x03m\x05m\u09DE\nm\x03m\x03m\x03m\x03' +
    'm\x03m\x03m\x07m\u09E6\nm\fm\x0Em\u09E9\vm\x03m\x05m\u09EC\nm\x03m\x03' +
    'm\x03m\x03m\x03m\x03m\x03n\x03n\x03n\x06n\u09F7\nn\rn\x0En\u09F8\x03n' +
    '\x03n\x03n\x03n\x03n\x05n\u0A00\nn\x03n\x03n\x07n\u0A04\nn\fn\x0En\u0A07' +
    '\vn\x03n\x03n\x03n\x03n\x03n\x03n\x03o\x03o\x03o\x06o\u0A12\no\ro\x0E' +
    'o\u0A13\x03o\x03o\x03o\x05o\u0A19\no\x03o\x03o\x03o\x03o\x03o\x03o\x07' +
    'o\u0A21\no\fo\x0Eo\u0A24\vo\x03p\x03p\x03p\x06p\u0A29\np\rp\x0Ep\u0A2A' +
    '\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x05p\u0A34\np\x03p\x03p\x07p\u0A38' +
    '\np\fp\x0Ep\u0A3B\vp\x03q\x03q\x03q\x06q\u0A40\nq\rq\x0Eq\u0A41\x03q\x03' +
    'q\x03q\x07q\u0A47\nq\fq\x0Eq\u0A4A\vq\x03r\x03r\x03r\x05r\u0A4F\nr\x03' +
    's\x06s\u0A52\ns\rs\x0Es\u0A53\x03s\x03s\x05s\u0A58\ns\x03t\x03t\x03t\x06' +
    't\u0A5D\nt\rt\x0Et\u0A5E\x03t\x03t\x03t\x03t\x03t\x05t\u0A66\nt\x03t\x03' +
    't\x07t\u0A6A\nt\ft\x0Et\u0A6D\vt\x03t\x03t\x03t\x03t\x03t\x03t\x03u\x03' +
    'u\x03u\x06u\u0A78\nu\ru\x0Eu\u0A79\x03u\x03u\x03u\x03u\x03u\x05u\u0A81' +
    '\nu\x03u\x03u\x07u\u0A85\nu\fu\x0Eu\u0A88\vu\x03u\x03u\x03u\x03u\x03u' +
    '\x03u\x03v\x03v\x03v\x06v\u0A93\nv\rv\x0Ev\u0A94\x03v\x03v\x03v\x03v\x03' +
    'v\x05v\u0A9C\nv\x03v\x03v\x07v\u0AA0\nv\fv\x0Ev\u0AA3\vv\x03v\x03v\x03' +
    'v\x03v\x03v\x03v\x03w\x03w\x03w\x05w\u0AAE\nw\x03x\x03x\x03x\x07x\u0AB3' +
    '\nx\fx\x0Ex\u0AB6\vx\x03x\x07x\u0AB9\nx\fx\x0Ex\u0ABC\vx\x03x\x05x\u0ABF' +
    '\nx\x03x\x03x\x03y\x03y\x03y\x03z\x03z\x03z\x07z\u0AC9\nz\fz\x0Ez\u0ACC' +
    '\vz\x03z\x07z\u0ACF\nz\fz\x0Ez\u0AD2\vz\x03z\x05z\u0AD5\nz\x03z\x03z\x03' +
    '{\x03{\x03{\x03|\x03|\x03|\x06|\u0ADF\n|\r|\x0E|\u0AE0\x03|\x03|\x05|' +
    '\u0AE5\n|\x03|\x03|\x03}\x03}\x03}\x03}\x03}\x05}\u0AEE\n}\x03}\x03}\x05' +
    '}\u0AF2\n}\x05}\u0AF4\n}\x03}\x03}\x03~\x03~\x03~\x05~\u0AFB\n~\x03\x7F' +
    '\x03\x7F\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81' +
    '\x03\x81\x03\x81\x05\x81\u0B09\n\x81\x03\x82\x03\x82\x05\x82\u0B0D\n\x82' +
    '\x03\x83\x03\x83\x05\x83\u0B11\n\x83\x03\x84\x03\x84\x03\x84\x03\x84\x03' +
    '\x84\x03\x85\x03\x85\x03\x85\x03\x85\x03\x86\x03\x86\x03\x86\x03\x87\x03' +
    '\x87\x03\x87\x03\x88\x03\x88\x05\x88\u0B24\n\x88\x03\x89\x03\x89\x03\x89' +
    '\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u0B2C\n\x8A\x03\x8B\x03\x8B\x03\x8C\x03' +
    '\x8C\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03' +
    '\x8F\x03\x8F\x03\x8F\x05\x8F\u0B3D\n\x8F\x05\x8F\u0B3F\n\x8F\x03\x90\x03' +
    '\x90\x03\x91\x05\x91\u0B44\n\x91\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92' +
    '\x03\x92\x03\x92\x05\x92\u0B4D\n\x92\x05\x92\u0B4F\n\x92\x03\x93\x03\x93' +
    '\x03\x94\x03\x94\x03\x95\x03\x95\x03\x96\x03\x96\x03\x97\x03\x97\x03\x98' +
    '\x03\x98\x03\x98\x02\x02\x02\x99\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f' +
    '\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E' +
    '\x02 \x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02' +
    ':\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02' +
    'V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02' +
    'r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88' +
    '\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A' +
    '\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC' +
    '\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE' +
    '\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0' +
    '\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2' +
    '\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4' +
    '\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104' +
    '\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112' +
    '\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120' +
    '\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E' +
    '\x02\x02\v\x05\x02vvzz}}\x05\x0211RR^^\x07\x02\x18\x18""..GGPP\x07\x02' +
    "\x0E\x0E\'\'//OOcc\x0E\x02\f\r\x14\x14\x1F\x1F))1177>>BBIJLM]]dd\x13\x02" +
    '\x07\x07\f\r\x10\x10\x14\x15&&)+.02268;;>?BBEGZ[]]ddgh\x07\x02\r\r\x17' +
    "\x1711JJLL\x17\x02\x06\x07\x0E\x0E\x14\x14\x16\x16\x18\x18 !$$\'(-09:" +
    '<<@ACEGHKKNNPSUUWYccef\n\x02\b\v\x11\x13\x19\x19\x1D\x1D%%35\\\\_b\x02' +
    '\u0C6F\x02\u0133\x03\x02\x02\x02\x04\u013B\x03\x02\x02\x02\x06\u0166\x03' +
    '\x02\x02\x02\b\u0168\x03\x02\x02\x02\n\u0186\x03\x02\x02\x02\f\u01A4\x03' +
    '\x02\x02\x02\x0E\u01C1\x03\x02\x02\x02\x10\u01DE\x03\x02\x02\x02\x12\u01FC' +
    '\x03\x02\x02\x02\x14\u0217\x03\x02\x02\x02\x16\u022E\x03\x02\x02\x02\x18' +
    '\u0245\x03\x02\x02\x02\x1A\u025B\x03\x02\x02\x02\x1C\u0271\x03\x02\x02' +
    '\x02\x1E\u0288\x03\x02\x02\x02 \u029F\x03\x02\x02\x02"\u02B1\x03\x02' +
    '\x02\x02$\u02B4\x03\x02\x02\x02&\u02C1\x03\x02\x02\x02(\u02C3\x03\x02' +
    '\x02\x02*\u02E1\x03\x02\x02\x02,\u02FF\x03\x02\x02\x02.\u031C\x03\x02' +
    '\x02\x020\u0339\x03\x02\x02\x022\u0357\x03\x02\x02\x024\u0372\x03\x02' +
    '\x02\x026\u0389\x03\x02\x02\x028\u03A0\x03\x02\x02\x02:\u03B6\x03\x02' +
    '\x02\x02<\u03CC\x03\x02\x02\x02>\u03E3\x03\x02\x02\x02@\u03FA\x03\x02' +
    '\x02\x02B\u040C\x03\x02\x02\x02D\u040F\x03\x02\x02\x02F\u041C\x03\x02' +
    '\x02\x02H\u041E\x03\x02\x02\x02J\u043C\x03\x02\x02\x02L\u045A\x03\x02' +
    '\x02\x02N\u0477\x03\x02\x02\x02P\u0494\x03\x02\x02\x02R\u04B2\x03\x02' +
    '\x02\x02T\u04CD\x03\x02\x02\x02V\u04E8\x03\x02\x02\x02X\u04FF\x03\x02' +
    '\x02\x02Z\u0516\x03\x02\x02\x02\\\u052C\x03\x02\x02\x02^\u0542\x03\x02' +
    '\x02\x02`\u0559\x03\x02\x02\x02b\u0570\x03\x02\x02\x02d\u0587\x03\x02' +
    '\x02\x02f\u059A\x03\x02\x02\x02h\u059D\x03\x02\x02\x02j\u05AB\x03\x02' +
    '\x02\x02l\u05AD\x03\x02\x02\x02n\u05CB\x03\x02\x02\x02p\u05E9\x03\x02' +
    '\x02\x02r\u0606\x03\x02\x02\x02t\u0624\x03\x02\x02\x02v\u063F\x03\x02' +
    '\x02\x02x\u065A\x03\x02\x02\x02z\u0671\x03\x02\x02\x02|\u0688\x03\x02' +
    '\x02\x02~\u069E\x03\x02\x02\x02\x80\u06B5\x03\x02\x02\x02\x82\u06CC\x03' +
    '\x02\x02\x02\x84\u06E3\x03\x02\x02\x02\x86\u06F6\x03\x02\x02\x02\x88\u06F9' +
    '\x03\x02\x02\x02\x8A\u0706\x03\x02\x02\x02\x8C\u0708\x03\x02\x02\x02\x8E' +
    '\u0726\x03\x02\x02\x02\x90\u0743\x03\x02\x02\x02\x92\u0761\x03\x02\x02' +
    '\x02\x94\u0778\x03\x02\x02\x02\x96\u078E\x03\x02\x02\x02\x98\u07A5\x03' +
    '\x02\x02\x02\x9A\u07B6\x03\x02\x02\x02\x9C\u07B9\x03\x02\x02\x02\x9E\u07C3' +
    '\x03\x02\x02\x02\xA0\u07C5\x03\x02\x02\x02\xA2\u07E3\x03\x02\x02\x02\xA4' +
    '\u07FE\x03\x02\x02\x02\xA6\u0815\x03\x02\x02\x02\xA8\u082C\x03\x02\x02' +
    '\x02\xAA\u083E\x03\x02\x02\x02\xAC\u0841\x03\x02\x02\x02\xAE\u0849\x03' +
    '\x02\x02\x02\xB0\u0867\x03\x02\x02\x02\xB2\u0882\x03\x02\x02\x02\xB4\u0899' +
    '\x03\x02\x02\x02\xB6\u08B0\x03\x02\x02\x02\xB8\u08C2\x03\x02\x02\x02\xBA' +
    '\u08C5\x03\x02\x02\x02\xBC\u08CD\x03\x02\x02\x02\xBE\u08EB\x03\x02\x02' +
    '\x02\xC0\u0906\x03\x02\x02\x02\xC2\u091D\x03\x02\x02\x02\xC4\u0934\x03' +
    '\x02\x02\x02\xC6\u0946\x03\x02\x02\x02\xC8\u0949\x03\x02\x02\x02\xCA\u0951' +
    '\x03\x02\x02\x02\xCC\u096F\x03\x02\x02\x02\xCE\u098A\x03\x02\x02\x02\xD0' +
    '\u09A1\x03\x02\x02\x02\xD2\u09B8\x03\x02\x02\x02\xD4\u09CA\x03\x02\x02' +
    '\x02\xD6\u09CD\x03\x02\x02\x02\xD8\u09D5\x03\x02\x02\x02\xDA\u09F3\x03' +
    '\x02\x02\x02\xDC\u0A0E\x03\x02\x02\x02\xDE\u0A25\x03\x02\x02\x02\xE0\u0A3C' +
    '\x03\x02\x02\x02\xE2\u0A4E\x03\x02\x02\x02\xE4\u0A51\x03\x02\x02\x02\xE6' +
    '\u0A59\x03\x02\x02\x02\xE8\u0A74\x03\x02\x02\x02\xEA\u0A8F\x03\x02\x02' +
    '\x02\xEC\u0AAD\x03\x02\x02\x02\xEE\u0AAF\x03\x02\x02\x02\xF0\u0AC2\x03' +
    '\x02\x02\x02\xF2\u0AC5\x03\x02\x02\x02\xF4\u0AD8\x03\x02\x02\x02\xF6\u0ADB' +
    '\x03\x02\x02\x02\xF8\u0AE8\x03\x02\x02\x02\xFA\u0AFA\x03\x02\x02\x02\xFC' +
    '\u0AFC\x03\x02\x02\x02\xFE\u0AFE\x03\x02\x02\x02\u0100\u0B08\x03\x02\x02' +
    '\x02\u0102\u0B0C\x03\x02\x02\x02\u0104\u0B10\x03\x02\x02\x02\u0106\u0B12' +
    '\x03\x02\x02\x02\u0108\u0B17\x03\x02\x02\x02\u010A\u0B1B\x03\x02\x02\x02' +
    '\u010C\u0B1E\x03\x02\x02\x02\u010E\u0B23\x03\x02\x02\x02\u0110\u0B25\x03' +
    '\x02\x02\x02\u0112\u0B2B\x03\x02\x02\x02\u0114\u0B2D\x03\x02\x02\x02\u0116' +
    '\u0B2F\x03\x02\x02\x02\u0118\u0B31\x03\x02\x02\x02\u011A\u0B33\x03\x02' +
    '\x02\x02\u011C\u0B3E\x03\x02\x02\x02\u011E\u0B40\x03\x02\x02\x02\u0120' +
    '\u0B43\x03\x02\x02\x02\u0122\u0B4E\x03\x02\x02\x02\u0124\u0B50\x03\x02' +
    '\x02\x02\u0126\u0B52\x03\x02\x02\x02\u0128\u0B54\x03\x02\x02\x02\u012A' +
    '\u0B56\x03\x02\x02\x02\u012C\u0B58\x03\x02\x02\x02\u012E\u0B5A\x03\x02' +
    '\x02\x02\u0130\u0132\x05\x04\x03\x02\u0131\u0130\x03\x02\x02\x02\u0132' +
    '\u0135\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02' +
    '\x02\x02\u0134\u0136\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0136' +
    '\u0137\x07\x02\x02\x03\u0137\x03\x03\x02\x02\x02\u0138\u013C\x05\x06\x04' +
    '\x02\u0139\u013C\x05\xECw\x02\u013A\u013C\x05\u0114\x8B\x02\u013B\u0138' +
    '\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013A\x03\x02\x02\x02' +
    '\u013C\x05\x03\x02\x02\x02\u013D\u0167\x05\b\x05\x02\u013E\u0167\x05\n' +
    '\x06\x02\u013F\u0167\x05\f\x07\x02\u0140\u0167\x05\x0E\b\x02\u0141\u0167' +
    '\x05\x10\t\x02\u0142\u0167\x05\x12\n\x02\u0143\u0167\x05(\x15\x02\u0144' +
    '\u0167\x05*\x16\x02\u0145\u0167\x05,\x17\x02\u0146\u0167\x05.\x18\x02' +
    '\u0147\u0167\x050\x19\x02\u0148\u0167\x052\x1A\x02\u0149\u0167\x05H%\x02' +
    "\u014A\u0167\x05J&\x02\u014B\u0167\x05L\'\x02\u014C\u0167\x05N(\x02\u014D" +
    '\u0167\x05P)\x02\u014E\u0167\x05R*\x02\u014F\u0167\x05T+\x02\u0150\u0167' +
    '\x05l7\x02\u0151\u0167\x05n8\x02\u0152\u0167\x05p9\x02\u0153\u0167\x05' +
    'r:\x02\u0154\u0167\x05t;\x02\u0155\u0167\x05v<\x02\u0156\u0167\x05\x8C' +
    'G\x02\u0157\u0167\x05\x8EH\x02\u0158\u0167\x05\x90I\x02\u0159\u0167\x05' +
    '\xA0Q\x02\u015A\u0167\x05\xA2R\x02\u015B\u0167\x05\xAEX\x02\u015C\u0167' +
    '\x05\xB0Y\x02\u015D\u0167\x05\xBC_\x02\u015E\u0167\x05\xBE`\x02\u015F' +
    '\u0167\x05\xCAf\x02\u0160\u0167\x05\xCCg\x02\u0161\u0167\x05\xD8m\x02' +
    '\u0162\u0167\x05\xDAn\x02\u0163\u0167\x05\xEAv\x02\u0164\u0167\x05\xE6' +
    't\x02\u0165\u0167\x05\xE8u\x02\u0166\u013D\x03\x02\x02\x02\u0166\u013E' +
    '\x03\x02\x02\x02\u0166\u013F\x03\x02\x02\x02\u0166\u0140\x03\x02\x02\x02' +
    '\u0166\u0141\x03\x02\x02\x02\u0166\u0142\x03\x02\x02\x02\u0166\u0143\x03' +
    '\x02\x02\x02\u0166\u0144\x03\x02\x02\x02\u0166\u0145\x03\x02\x02\x02\u0166' +
    '\u0146\x03\x02\x02\x02\u0166\u0147\x03\x02\x02\x02\u0166\u0148\x03\x02' +
    '\x02\x02\u0166\u0149\x03\x02\x02\x02\u0166\u014A\x03\x02\x02\x02\u0166' +
    '\u014B\x03\x02\x02\x02\u0166\u014C\x03\x02\x02\x02\u0166\u014D\x03\x02' +
    '\x02\x02\u0166\u014E\x03\x02\x02\x02\u0166\u014F\x03\x02\x02\x02\u0166' +
    '\u0150\x03\x02\x02\x02\u0166\u0151\x03\x02\x02\x02\u0166\u0152\x03\x02' +
    '\x02\x02\u0166\u0153\x03\x02\x02\x02\u0166\u0154\x03\x02\x02\x02\u0166' +
    '\u0155\x03\x02\x02\x02\u0166\u0156\x03\x02\x02\x02\u0166\u0157\x03\x02' +
    '\x02\x02\u0166\u0158\x03\x02\x02\x02\u0166\u0159\x03\x02\x02\x02\u0166' +
    '\u015A\x03\x02\x02\x02\u0166\u015B\x03\x02\x02\x02\u0166\u015C\x03\x02' +
    '\x02\x02\u0166\u015D\x03\x02\x02\x02\u0166\u015E\x03\x02\x02\x02\u0166' +
    '\u015F\x03\x02\x02\x02\u0166\u0160\x03\x02\x02\x02\u0166\u0161\x03\x02' +
    '\x02\x02\u0166\u0162\x03\x02\x02\x02\u0166\u0163\x03\x02\x02\x02\u0166' +
    '\u0164\x03\x02\x02\x02\u0166\u0165\x03\x02\x02\x02\u0167\x07\x03\x02\x02' +
    '\x02\u0168\u0169\x07\x04\x02\x02\u0169\u016B\x07^\x02\x02\u016A\u016C' +
    '\x07i\x02\x02\u016B\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02' +
    '\u016D\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u0170\x03' +
    '\x02\x02\x02\u016F\u0171\x07n\x02\x02\u0170\u016F\x03\x02\x02\x02\u0170' +
    '\u0171\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u0173\x07,\x02' +
    '\x02\u0173\u0174\x07j\x02\x02\u0174\u0175\x05\xFE\x80\x02\u0175\u0176' +
    '\x07k\x02\x02\u0176\u017A\x07\x05\x02\x02\u0177\u0179\x05\x04\x03\x02' +
    '\u0178\u0177\x03\x02\x02\x02\u0179\u017C\x03\x02\x02\x02\u017A\u0178\x03' +
    '\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017E\x03\x02\x02\x02\u017C' +
    '\u017A\x03\x02\x02\x02\u017D\u017F\x05"\x12\x02\u017E\u017D\x03\x02\x02' +
    '\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0181' +
    '\x07\x04\x02\x02\u0181\u0182\x07^\x02\x02\u0182\u0183\x07i\x02\x02\u0183' +
    '\u0184\x07\x1C\x02\x02\u0184\u0185\x07\x05\x02\x02\u0185\t\x03\x02\x02' +
    '\x02\u0186\u0187\x07\x04\x02\x02\u0187\u0189\x07^\x02\x02\u0188\u018A' +
    '\x07i\x02\x02\u0189\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02' +
    '\u018B\u0189\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018E\x03' +
    '\x02\x02\x02\u018D\u018F\x07n\x02\x02\u018E\u018D\x03\x02\x02\x02\u018E' +
    '\u018F\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0191\x07\x1E' +
    '\x02\x02\u0191\u0192\x07j\x02\x02\u0192\u0193\x05\xFE\x80\x02\u0193\u0194' +
    '\x07k\x02\x02\u0194\u0198\x07\x05\x02\x02\u0195\u0197\x05\x04\x03\x02' +
    '\u0196\u0195\x03\x02\x02\x02\u0197\u019A\x03\x02\x02\x02\u0198\u0196\x03' +
    '\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A' +
    '\u0198\x03\x02\x02\x02\u019B\u019D\x05"\x12\x02\u019C\u019B\x03\x02\x02' +
    '\x02\u019C\u019D\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u019F' +
    '\x07\x04\x02\x02\u019F\u01A0\x07^\x02\x02\u01A0\u01A1\x07i\x02\x02\u01A1' +
    '\u01A2\x07\x1C\x02\x02\u01A2\u01A3\x07\x05\x02\x02\u01A3\v\x03\x02\x02' +
    '\x02\u01A4\u01A5\x07\x04\x02\x02\u01A5\u01A7\x07^\x02\x02\u01A6\u01A8' +
    '\x07i\x02\x02\u01A7\u01A6\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02' +
    '\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AC\x03' +
    '\x02\x02\x02\u01AB\u01AD\x07n\x02\x02\u01AC\u01AB\x03\x02\x02\x02\u01AC' +
    '\u01AD\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01AF\x07q\x02' +
    '\x02\u01AF\u01B0\x05\u0122\x92\x02\u01B0\u01B1\x07s\x02\x02\u01B1\u01B5' +
    '\x07\x05\x02\x02\u01B2\u01B4\x05\x04\x03\x02\u01B3\u01B2\x03\x02\x02\x02' +
    '\u01B4\u01B7\x03\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B5\u01B6\x03' +
    '\x02\x02\x02\u01B6\u01B9\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02\u01B8' +
    '\u01BA\x05"\x12\x02\u01B9\u01B8\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02' +
    '\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BC\x07\x04\x02\x02\u01BC\u01BD' +
    '\x07^\x02\x02\u01BD\u01BE\x07i\x02\x02\u01BE\u01BF\x07\x1C\x02\x02\u01BF' +
    '\u01C0\x07\x05\x02\x02\u01C0\r\x03\x02\x02\x02\u01C1\u01C2\x07\x04\x02' +
    '\x02\u01C2\u01C4\x07^\x02\x02\u01C3\u01C5\x07i\x02\x02\u01C4\u01C3\x03' +
    '\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C6' +
    '\u01C7\x03\x02\x02\x02\u01C7\u01C9\x03\x02\x02\x02\u01C8\u01CA\x07n\x02' +
    '\x02\u01C9\u01C8\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CB' +
    '\x03\x02\x02\x02\u01CB\u01CC\x07p\x02\x02\u01CC\u01CD\x05\u0122\x92\x02' +
    '\u01CD\u01CE\x07s\x02\x02\u01CE\u01D2\x07\x05\x02\x02\u01CF\u01D1\x05' +
    '\x04\x03\x02\u01D0\u01CF\x03\x02\x02\x02\u01D1\u01D4\x03\x02\x02\x02\u01D2' +
    '\u01D0\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D6\x03\x02' +
    '\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D5\u01D7\x05"\x12\x02\u01D6\u01D5' +
    '\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02' +
    '\u01D8\u01D9\x07\x04\x02\x02\u01D9\u01DA\x07^\x02\x02\u01DA\u01DB\x07' +
    'i\x02\x02\u01DB\u01DC\x07\x1C\x02\x02\u01DC\u01DD\x07\x05\x02\x02\u01DD' +
    '\x0F\x03\x02\x02\x02\u01DE\u01DF\x07\x04\x02\x02\u01DF\u01E1\x07^\x02' +
    '\x02\u01E0\u01E2\x07i\x02\x02\u01E1\u01E0\x03\x02\x02\x02\u01E2\u01E3' +
    '\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02' +
    '\u01E4\u01E6\x03\x02\x02\x02\u01E5\u01E7\x07n\x02\x02\u01E6\u01E5\x03' +
    '\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8' +
    '\u01E9\x07\x0F\x02\x02\u01E9\u01EA\x07j\x02\x02\u01EA\u01EB\x05\u0124' +
    '\x93\x02\u01EB\u01EC\x07k\x02\x02\u01EC\u01F0\x07\x05\x02\x02\u01ED\u01EF' +
    '\x05\x04\x03\x02\u01EE\u01ED\x03\x02\x02\x02\u01EF\u01F2\x03\x02\x02\x02' +
    '\u01F0\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F4\x03' +
    '\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F3\u01F5\x05"\x12\x02\u01F4' +
    '\u01F3\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F6\x03\x02' +
    '\x02\x02\u01F6\u01F7\x07\x04\x02\x02\u01F7\u01F8\x07^\x02\x02\u01F8\u01F9' +
    '\x07i\x02\x02\u01F9\u01FA\x07\x1C\x02\x02\u01FA\u01FB\x07\x05\x02\x02' +
    '\u01FB\x11\x03\x02\x02\x02\u01FC\u01FD\x07\x04\x02\x02\u01FD\u01FF\x07' +
    '^\x02\x02\u01FE\u0200\x07i\x02\x02\u01FF\u01FE\x03\x02\x02\x02\u0200\u0201' +
    '\x03\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02' +
    '\u0202\u0203\x03\x02\x02\x02\u0203\u0208\x07\x1A\x02\x02\u0204\u0205\x07' +
    'j\x02\x02\u0205\u0206\x05\xFC\x7F\x02\u0206\u0207\x07k\x02\x02\u0207\u0209' +
    '\x03\x02\x02\x02\u0208\u0204\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02' +
    '\u0209\u020A\x03\x02\x02\x02\u020A\u020E\x07\x05\x02\x02\u020B\u020D\x05' +
    '\x04\x03\x02\u020C\u020B\x03\x02\x02\x02\u020D\u0210\x03\x02\x02\x02\u020E' +
    '\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F\u0211\x03\x02' +
    '\x02\x02\u0210\u020E\x03\x02\x02\x02\u0211\u0212\x07\x04\x02\x02\u0212' +
    '\u0213\x07^\x02\x02\u0213\u0214\x07i\x02\x02\u0214\u0215\x07\x1C\x02\x02' +
    '\u0215\u0216\x07\x05\x02\x02\u0216\x13\x03\x02\x02\x02\u0217\u0218\x07' +
    '\x04\x02\x02\u0218\u021A\x07^\x02\x02\u0219\u021B\x07i\x02\x02\u021A\u0219' +
    '\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02' +
    '\u021C\u021D\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E\u021F\x07' +
    '\x1B\x02\x02\u021F\u0221\x07i\x02\x02\u0220\u0222\x07n\x02\x02\u0221\u0220' +
    '\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0223\x03\x02\x02\x02' +
    '\u0223\u0224\x07,\x02\x02\u0224\u0225\x07j\x02\x02\u0225\u0226\x05\xFE' +
    '\x80\x02\u0226\u0227\x07k\x02\x02\u0227\u022B\x07\x05\x02\x02\u0228\u022A' +
    '\x05\x04\x03\x02\u0229\u0228\x03\x02\x02\x02\u022A\u022D\x03\x02\x02\x02' +
    '\u022B\u0229\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\x15\x03' +
    '\x02\x02\x02\u022D\u022B\x03\x02\x02\x02\u022E\u022F\x07\x04\x02\x02\u022F' +
    '\u0231\x07^\x02\x02\u0230\u0232\x07i\x02\x02\u0231\u0230\x03\x02\x02\x02' +
    '\u0232\u0233\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02\u0233\u0234\x03' +
    '\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0236\x07\x1B\x02\x02\u0236' +
    '\u0238\x07i\x02\x02\u0237\u0239\x07n\x02\x02\u0238\u0237\x03\x02\x02\x02' +
    '\u0238\u0239\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A\u023B\x07' +
    '\x1E\x02\x02\u023B\u023C\x07j\x02\x02\u023C\u023D\x05\xFE\x80\x02\u023D' +
    '\u023E\x07k\x02\x02\u023E\u0242\x07\x05\x02\x02\u023F\u0241\x05\x04\x03' +
    '\x02\u0240\u023F\x03\x02\x02\x02\u0241\u0244\x03\x02\x02\x02\u0242\u0240' +
    '\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243\x17\x03\x02\x02\x02' +
    '\u0244\u0242\x03\x02\x02\x02\u0245\u0246\x07\x04\x02\x02\u0246\u0248\x07' +
    '^\x02\x02\u0247\u0249\x07i\x02\x02\u0248\u0247\x03\x02\x02\x02\u0249\u024A' +
    '\x03\x02\x02\x02\u024A\u0248\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02' +
    '\u024B\u024C\x03\x02\x02\x02\u024C\u024D\x07\x1B\x02\x02\u024D\u024F\x07' +
    'i\x02\x02\u024E\u0250\x07n\x02\x02\u024F\u024E\x03\x02\x02\x02\u024F\u0250' +
    '\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251\u0252\x07q\x02\x02' +
    '\u0252\u0253\x05\u0122\x92\x02\u0253\u0254\x07s\x02\x02\u0254\u0258\x07' +
    '\x05\x02\x02\u0255\u0257\x05\x04\x03\x02\u0256\u0255\x03\x02\x02\x02\u0257' +
    '\u025A\x03\x02\x02\x02\u0258\u0256\x03\x02\x02\x02\u0258\u0259\x03\x02' +
    '\x02\x02\u0259\x19\x03\x02\x02\x02\u025A\u0258\x03\x02\x02';
  private static readonly _serializedATNSegment2: string =
    '\x02\u025B\u025C\x07\x04\x02\x02\u025C\u025E\x07^\x02\x02\u025D\u025F' +
    '\x07i\x02\x02\u025E\u025D\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02' +
    '\u0260\u025E\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0262\x03' +
    '\x02\x02\x02\u0262\u0263\x07\x1B\x02\x02\u0263\u0265\x07i\x02\x02\u0264' +
    '\u0266\x07n\x02\x02\u0265\u0264\x03\x02\x02\x02\u0265\u0266\x03\x02\x02' +
    '\x02\u0266\u0267\x03\x02\x02\x02\u0267\u0268\x07p\x02\x02\u0268\u0269' +
    '\x05\u0122\x92\x02\u0269\u026A\x07s\x02\x02\u026A\u026E\x07\x05\x02\x02' +
    '\u026B\u026D\x05\x04\x03\x02\u026C\u026B\x03\x02\x02\x02\u026D\u0270\x03' +
    '\x02\x02\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F' +
    '\x1B\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0271\u0272\x07\x04\x02' +
    '\x02\u0272\u0274\x07^\x02\x02\u0273\u0275\x07i\x02\x02\u0274\u0273\x03' +
    '\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0274\x03\x02\x02\x02\u0276' +
    '\u0277\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u0279\x07\x1B' +
    '\x02\x02\u0279\u027B\x07i\x02\x02\u027A\u027C\x07n\x02\x02\u027B\u027A' +
    '\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02' +
    '\u027D\u027E\x07\x0F\x02\x02\u027E\u027F\x07j\x02\x02\u027F\u0280\x05' +
    '\u0124\x93\x02\u0280\u0281\x07k\x02\x02\u0281\u0285\x07\x05\x02\x02\u0282' +
    '\u0284\x05\x04\x03\x02\u0283\u0282\x03\x02\x02\x02\u0284\u0287\x03\x02' +
    '\x02\x02\u0285\u0283\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286' +
    '\x1D\x03\x02\x02\x02\u0287\u0285\x03\x02\x02\x02\u0288\u0289\x07\x04\x02' +
    '\x02\u0289\u028B\x07^\x02\x02\u028A\u028C\x07i\x02\x02\u028B\u028A\x03' +
    '\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028D' +
    '\u028E\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\u0290\x07\x1B' +
    '\x02\x02\u0290\u0291\x07i\x02\x02\u0291\u0296\x07\x1A\x02\x02\u0292\u0293' +
    '\x07j\x02\x02\u0293\u0294\x05\xFC\x7F\x02\u0294\u0295\x07k\x02\x02\u0295' +
    '\u0297\x03\x02\x02\x02\u0296\u0292\x03\x02\x02\x02\u0296\u0297\x03\x02' +
    '\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298\u029C\x07\x05\x02\x02\u0299' +
    '\u029B\x05\x04\x03\x02\u029A\u0299\x03\x02\x02\x02\u029B\u029E\x03\x02' +
    '\x02\x02\u029C\u029A\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D' +
    '\x1F\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029F\u02A0\x07\x04\x02' +
    '\x02\u02A0\u02A2\x07^\x02\x02\u02A1\u02A3\x07i\x02\x02\u02A2\u02A1\x03' +
    '\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4' +
    '\u02A5\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02A7\x07\x1B' +
    '\x02\x02\u02A7\u02AB\x07\x05\x02\x02\u02A8\u02AA\x05\x04\x03\x02\u02A9' +
    '\u02A8\x03\x02\x02\x02\u02AA\u02AD\x03\x02\x02\x02\u02AB\u02A9\x03\x02' +
    '\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC!\x03\x02\x02\x02\u02AD\u02AB' +
    '\x03\x02\x02\x02\u02AE\u02B2\x05$\x13\x02\u02AF\u02B2\x05\x1E\x10\x02' +
    '\u02B0\u02B2\x05 \x11\x02\u02B1\u02AE\x03\x02\x02\x02\u02B1\u02AF\x03' +
    '\x02\x02\x02\u02B1\u02B0\x03\x02\x02\x02\u02B2#\x03\x02\x02\x02\u02B3' +
    '\u02B5\x05&\x14\x02\u02B4\u02B3\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02' +
    '\x02\u02B6\u02B4\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7\u02BA' +
    '\x03\x02\x02\x02\u02B8\u02BB\x05\x1E\x10\x02\u02B9\u02BB\x05 \x11\x02' +
    '\u02BA\u02B8\x03\x02\x02\x02\u02BA\u02B9\x03\x02\x02\x02\u02BA\u02BB\x03' +
    '\x02\x02\x02\u02BB%\x03\x02\x02\x02\u02BC\u02C2\x05\x14\v\x02\u02BD\u02C2' +
    '\x05\x16\f\x02\u02BE\u02C2\x05\x18\r\x02\u02BF\u02C2\x05\x1A\x0E\x02\u02C0' +
    '\u02C2\x05\x1C\x0F\x02\u02C1\u02BC\x03\x02\x02\x02\u02C1\u02BD\x03\x02' +
    '\x02\x02\u02C1\u02BE\x03\x02\x02\x02\u02C1\u02BF\x03\x02\x02\x02\u02C1' +
    "\u02C0\x03\x02\x02\x02\u02C2\'\x03\x02\x02\x02\u02C3\u02C4\x07\x04\x02" +
    '\x02\u02C4\u02C6\x071\x02\x02\u02C5\u02C7\x07i\x02\x02\u02C6\u02C5\x03' +
    '\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02C6\x03\x02\x02\x02\u02C8' +
    '\u02C9\x03\x02\x02\x02\u02C9\u02CB\x03\x02\x02\x02\u02CA\u02CC\x07n\x02' +
    '\x02\u02CB\u02CA\x03\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC\u02CD' +
    '\x03\x02\x02\x02\u02CD\u02CE\x07,\x02\x02\u02CE\u02CF\x07j\x02\x02\u02CF' +
    '\u02D0\x05\xFE\x80\x02\u02D0\u02D1\x07k\x02\x02\u02D1\u02D5\x07\x05\x02' +
    '\x02\u02D2\u02D4\x05\x04\x03\x02\u02D3\u02D2\x03\x02\x02\x02\u02D4\u02D7' +
    '\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02' +
    '\u02D6\u02D9\x03\x02\x02\x02\u02D7\u02D5\x03\x02\x02\x02\u02D8\u02DA\x05' +
    'B"\x02\u02D9\u02D8\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA' +
    '\u02DB\x03\x02\x02\x02\u02DB\u02DC\x07\x04\x02\x02\u02DC\u02DD\x071\x02' +
    '\x02\u02DD\u02DE\x07i\x02\x02\u02DE\u02DF\x07\x1C\x02\x02\u02DF\u02E0' +
    '\x07\x05\x02\x02\u02E0)\x03\x02\x02\x02\u02E1\u02E2\x07\x04\x02\x02\u02E2' +
    '\u02E4\x071\x02\x02\u02E3\u02E5\x07i\x02\x02\u02E4\u02E3\x03\x02\x02\x02' +
    '\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E6\u02E7\x03' +
    '\x02\x02\x02\u02E7\u02E9\x03\x02\x02\x02\u02E8\u02EA\x07n\x02\x02\u02E9' +
    '\u02E8\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02EB\x03\x02' +
    '\x02\x02\u02EB\u02EC\x07\x1E\x02\x02\u02EC\u02ED\x07j\x02\x02\u02ED\u02EE' +
    '\x05\xFE\x80\x02\u02EE\u02EF\x07k\x02\x02\u02EF\u02F3\x07\x05\x02\x02' +
    '\u02F0\u02F2\x05\x04\x03\x02\u02F1\u02F0\x03\x02\x02\x02\u02F2\u02F5\x03' +
    '\x02\x02\x02\u02F3\u02F1\x03\x02\x02\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4' +
    '\u02F7\x03\x02\x02\x02\u02F5\u02F3\x03\x02\x02\x02\u02F6\u02F8\x05B"' +
    '\x02\u02F7\u02F6\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02\u02F8\u02F9' +
    '\x03\x02\x02\x02\u02F9\u02FA\x07\x04\x02\x02\u02FA\u02FB\x071\x02\x02' +
    '\u02FB\u02FC\x07i\x02\x02\u02FC\u02FD\x07\x1C\x02\x02\u02FD\u02FE\x07' +
    '\x05\x02\x02\u02FE+\x03\x02\x02\x02\u02FF\u0300\x07\x04\x02\x02\u0300' +
    '\u0302\x071\x02\x02\u0301\u0303\x07i\x02\x02\u0302\u0301\x03\x02\x02\x02' +
    '\u0303\u0304\x03\x02\x02\x02\u0304\u0302\x03\x02\x02\x02\u0304\u0305\x03' +
    '\x02\x02\x02\u0305\u0307\x03\x02\x02\x02\u0306\u0308\x07n\x02\x02\u0307' +
    '\u0306\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308\u0309\x03\x02' +
    '\x02\x02\u0309\u030A\x07q\x02\x02\u030A\u030B\x05\u0122\x92\x02\u030B' +
    '\u030C\x07s\x02\x02\u030C\u0310\x07\x05\x02\x02\u030D\u030F\x05\x04\x03' +
    '\x02\u030E\u030D\x03\x02\x02\x02\u030F\u0312\x03\x02\x02\x02\u0310\u030E' +
    '\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311\u0314\x03\x02\x02\x02' +
    '\u0312\u0310\x03\x02\x02\x02\u0313\u0315\x05B"\x02\u0314\u0313\x03\x02' +
    '\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315\u0316\x03\x02\x02\x02\u0316' +
    '\u0317\x07\x04\x02\x02\u0317\u0318\x071\x02\x02\u0318\u0319\x07i\x02\x02' +
    '\u0319\u031A\x07\x1C\x02\x02\u031A\u031B\x07\x05\x02\x02\u031B-\x03\x02' +
    '\x02\x02\u031C\u031D\x07\x04\x02\x02\u031D\u031F\x071\x02\x02\u031E\u0320' +
    '\x07i\x02\x02\u031F\u031E\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02' +
    '\u0321\u031F\x03\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\u0324\x03' +
    '\x02\x02\x02\u0323\u0325\x07n\x02\x02\u0324\u0323\x03\x02\x02\x02\u0324' +
    '\u0325\x03\x02\x02\x02\u0325\u0326\x03\x02\x02\x02\u0326\u0327\x07p\x02' +
    '\x02\u0327\u0328\x05\u0122\x92\x02\u0328\u0329\x07s\x02\x02\u0329\u032D' +
    '\x07\x05\x02\x02\u032A\u032C\x05\x04\x03\x02\u032B\u032A\x03\x02\x02\x02' +
    '\u032C\u032F\x03\x02\x02\x02\u032D\u032B\x03\x02\x02\x02\u032D\u032E\x03' +
    '\x02\x02\x02\u032E\u0331\x03\x02\x02\x02\u032F\u032D\x03\x02\x02\x02\u0330' +
    '\u0332\x05B"\x02\u0331\u0330\x03\x02\x02\x02\u0331\u0332\x03\x02\x02' +
    '\x02\u0332\u0333\x03\x02\x02\x02\u0333\u0334\x07\x04\x02\x02\u0334\u0335' +
    '\x071\x02\x02\u0335\u0336\x07i\x02\x02\u0336\u0337\x07\x1C\x02\x02\u0337' +
    '\u0338\x07\x05\x02\x02\u0338/\x03\x02\x02\x02\u0339\u033A\x07\x04\x02' +
    '\x02\u033A\u033C\x071\x02\x02\u033B\u033D\x07i\x02\x02\u033C\u033B\x03' +
    '\x02\x02\x02\u033D\u033E\x03\x02\x02\x02\u033E\u033C\x03\x02\x02\x02\u033E' +
    '\u033F\x03\x02\x02\x02\u033F\u0341\x03\x02\x02\x02\u0340\u0342\x07n\x02' +
    '\x02\u0341\u0340\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0343' +
    '\x03\x02\x02\x02\u0343\u0344\x07\x0F\x02\x02\u0344\u0345\x07j\x02\x02' +
    '\u0345\u0346\x05\u0124\x93\x02\u0346\u0347\x07k\x02\x02\u0347\u034B\x07' +
    '\x05\x02\x02\u0348\u034A\x05\x04\x03\x02\u0349\u0348\x03\x02\x02\x02\u034A' +
    '\u034D\x03\x02\x02\x02\u034B\u0349\x03\x02\x02\x02\u034B\u034C\x03\x02' +
    '\x02\x02\u034C\u034F\x03\x02\x02\x02\u034D\u034B\x03\x02\x02\x02\u034E' +
    '\u0350\x05B"\x02\u034F\u034E\x03\x02\x02\x02\u034F\u0350\x03\x02\x02' +
    '\x02\u0350\u0351\x03\x02\x02\x02\u0351\u0352\x07\x04\x02\x02\u0352\u0353' +
    '\x071\x02\x02\u0353\u0354\x07i\x02\x02\u0354\u0355\x07\x1C\x02\x02\u0355' +
    '\u0356\x07\x05\x02\x02\u03561\x03\x02\x02\x02\u0357\u0358\x07\x04\x02' +
    '\x02\u0358\u035A\x071\x02\x02\u0359\u035B\x07i\x02\x02\u035A\u0359\x03' +
    '\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C\u035A\x03\x02\x02\x02\u035C' +
    '\u035D\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E\u0363\x07\x1A' +
    '\x02\x02\u035F\u0360\x07j\x02\x02\u0360\u0361\x05\xFC\x7F\x02\u0361\u0362' +
    '\x07k\x02\x02\u0362\u0364\x03\x02\x02\x02\u0363\u035F\x03\x02\x02\x02' +
    '\u0363\u0364\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365\u0369\x07' +
    '\x05\x02\x02\u0366\u0368\x05\x04\x03\x02\u0367\u0366\x03\x02\x02\x02\u0368' +
    '\u036B\x03\x02\x02\x02\u0369\u0367\x03\x02\x02\x02\u0369\u036A\x03\x02' +
    '\x02\x02\u036A\u036C\x03\x02\x02\x02\u036B\u0369\x03\x02\x02\x02\u036C' +
    '\u036D\x07\x04\x02\x02\u036D\u036E\x071\x02\x02\u036E\u036F\x07i\x02\x02' +
    '\u036F\u0370\x07\x1C\x02\x02\u0370\u0371\x07\x05\x02\x02\u03713\x03\x02' +
    '\x02\x02\u0372\u0373\x07\x04\x02\x02\u0373\u0375\x071\x02\x02\u0374\u0376' +
    '\x07i\x02\x02\u0375\u0374\x03\x02\x02\x02\u0376\u0377\x03\x02\x02\x02' +
    '\u0377\u0375\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02\u0378\u0379\x03' +
    '\x02\x02\x02\u0379\u037A\x07\x1B\x02\x02\u037A\u037C\x07i\x02\x02\u037B' +
    '\u037D\x07n\x02\x02\u037C\u037B\x03\x02\x02\x02\u037C\u037D\x03\x02\x02' +
    '\x02\u037D\u037E\x03\x02\x02\x02\u037E\u037F\x07,\x02\x02\u037F\u0380' +
    '\x07j\x02\x02\u0380\u0381\x05\xFE\x80\x02\u0381\u0382\x07k\x02\x02\u0382' +
    '\u0386\x07\x05\x02\x02\u0383\u0385\x05\x04\x03\x02\u0384\u0383\x03\x02' +
    '\x02\x02\u0385\u0388\x03\x02\x02\x02\u0386\u0384\x03\x02\x02\x02\u0386' +
    '\u0387\x03\x02\x02\x02\u03875\x03\x02\x02\x02\u0388\u0386\x03\x02\x02' +
    '\x02\u0389\u038A\x07\x04\x02\x02\u038A\u038C\x071\x02\x02\u038B\u038D' +
    '\x07i\x02\x02\u038C\u038B\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02' +
    '\u038E\u038C\x03\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038F\u0390\x03' +
    '\x02\x02\x02\u0390\u0391\x07\x1B\x02\x02\u0391\u0393\x07i\x02\x02\u0392' +
    '\u0394\x07n\x02\x02\u0393\u0392\x03\x02\x02\x02\u0393\u0394\x03\x02\x02' +
    '\x02\u0394\u0395\x03\x02\x02\x02\u0395\u0396\x07\x1E\x02\x02\u0396\u0397' +
    '\x07j\x02\x02\u0397\u0398\x05\xFE\x80\x02\u0398\u0399\x07k\x02\x02\u0399' +
    '\u039D\x07\x05\x02\x02\u039A\u039C\x05\x04\x03\x02\u039B\u039A\x03\x02' +
    '\x02\x02\u039C\u039F\x03\x02\x02\x02\u039D\u039B\x03\x02\x02\x02\u039D' +
    '\u039E\x03\x02\x02\x02\u039E7\x03\x02\x02\x02\u039F\u039D\x03\x02\x02' +
    '\x02\u03A0\u03A1\x07\x04\x02\x02\u03A1\u03A3\x071\x02\x02\u03A2\u03A4' +
    '\x07i\x02\x02\u03A3\u03A2\x03\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02' +
    '\u03A5\u03A3\x03\x02\x02\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6\u03A7\x03' +
    '\x02\x02\x02\u03A7\u03A8\x07\x1B\x02\x02\u03A8\u03AA\x07i\x02\x02\u03A9' +
    '\u03AB\x07n\x02\x02\u03AA\u03A9\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02' +
    '\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC\u03AD\x07q\x02\x02\u03AD\u03AE' +
    '\x05\u0122\x92\x02\u03AE\u03AF\x07s\x02\x02\u03AF\u03B3\x07\x05\x02\x02' +
    '\u03B0\u03B2\x05\x04\x03\x02\u03B1\u03B0\x03\x02\x02\x02\u03B2\u03B5\x03' +
    '\x02\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4' +
    '9\x03\x02\x02\x02\u03B5\u03B3\x03\x02\x02\x02\u03B6\u03B7\x07\x04\x02' +
    '\x02\u03B7\u03B9\x071\x02\x02\u03B8\u03BA\x07i\x02\x02\u03B9\u03B8\x03' +
    '\x02\x02\x02\u03BA\u03BB\x03\x02\x02\x02\u03BB\u03B9\x03\x02\x02\x02\u03BB' +
    '\u03BC\x03\x02\x02\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD\u03BE\x07\x1B' +
    '\x02\x02\u03BE\u03C0\x07i\x02\x02\u03BF\u03C1\x07n\x02\x02\u03C0\u03BF' +
    '\x03\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02' +
    '\u03C2\u03C3\x07p\x02\x02\u03C3\u03C4\x05\u0122\x92\x02\u03C4\u03C5\x07' +
    's\x02\x02\u03C5\u03C9\x07\x05\x02\x02\u03C6\u03C8\x05\x04\x03\x02\u03C7' +
    '\u03C6\x03\x02\x02\x02\u03C8\u03CB\x03\x02\x02\x02\u03C9\u03C7\x03\x02' +
    '\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA;\x03\x02\x02\x02\u03CB\u03C9' +
    '\x03\x02\x02\x02\u03CC\u03CD\x07\x04\x02\x02\u03CD\u03CF\x071\x02\x02' +
    '\u03CE\u03D0\x07i\x02\x02\u03CF\u03CE\x03\x02\x02\x02\u03D0\u03D1\x03' +
    '\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2' +
    '\u03D3\x03\x02\x02\x02\u03D3\u03D4\x07\x1B\x02\x02\u03D4\u03D6\x07i\x02' +
    '\x02\u03D5\u03D7\x07n\x02\x02\u03D6\u03D5\x03\x02\x02\x02\u03D6\u03D7' +
    '\x03\x02\x02\x02\u03D7\u03D8\x03\x02\x02\x02\u03D8\u03D9\x07\x0F\x02\x02' +
    '\u03D9\u03DA\x07j\x02\x02\u03DA\u03DB\x05\u0124\x93\x02\u03DB\u03DC\x07' +
    'k\x02\x02\u03DC\u03E0\x07\x05\x02\x02\u03DD\u03DF\x05\x04\x03\x02\u03DE' +
    '\u03DD\x03\x02\x02\x02\u03DF\u03E2\x03\x02\x02\x02\u03E0\u03DE\x03\x02' +
    '\x02\x02\u03E0\u03E1\x03\x02\x02\x02\u03E1=\x03\x02\x02\x02\u03E2\u03E0' +
    '\x03\x02\x02\x02\u03E3\u03E4\x07\x04\x02\x02\u03E4\u03E6\x071\x02\x02' +
    '\u03E5\u03E7\x07i\x02\x02\u03E6\u03E5\x03\x02\x02\x02\u03E7\u03E8\x03' +
    '\x02\x02\x02\u03E8\u03E6\x03\x02\x02\x02\u03E8\u03E9\x03\x02\x02\x02\u03E9' +
    '\u03EA\x03\x02\x02\x02\u03EA\u03EB\x07\x1B\x02\x02\u03EB\u03EC\x07i\x02' +
    '\x02\u03EC\u03F1\x07\x1A\x02\x02\u03ED\u03EE\x07j\x02\x02\u03EE\u03EF' +
    '\x05\xFC\x7F\x02\u03EF\u03F0\x07k\x02\x02\u03F0\u03F2\x03\x02\x02\x02' +
    '\u03F1\u03ED\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02\u03F2\u03F3\x03' +
    '\x02\x02\x02\u03F3\u03F7\x07\x05\x02\x02\u03F4\u03F6\x05\x04\x03\x02\u03F5' +
    '\u03F4\x03\x02\x02\x02\u03F6\u03F9\x03\x02\x02\x02\u03F7\u03F5\x03\x02' +
    '\x02\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8?\x03\x02\x02\x02\u03F9\u03F7' +
    '\x03\x02\x02\x02\u03FA\u03FB\x07\x04\x02\x02\u03FB\u03FD\x071\x02\x02' +
    '\u03FC\u03FE\x07i\x02\x02\u03FD\u03FC\x03\x02\x02\x02\u03FE\u03FF\x03' +
    '\x02\x02\x02\u03FF\u03FD\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400' +
    '\u0401\x03\x02\x02\x02\u0401\u0402\x07\x1B\x02\x02\u0402\u0406\x07\x05' +
    '\x02\x02\u0403\u0405\x05\x04\x03\x02\u0404\u0403\x03\x02\x02\x02\u0405' +
    '\u0408\x03\x02\x02\x02\u0406\u0404\x03\x02\x02\x02\u0406\u0407\x03\x02' +
    '\x02\x02\u0407A\x03\x02\x02\x02\u0408\u0406\x03\x02\x02\x02\u0409\u040D' +
    '\x05D#\x02\u040A\u040D\x05> \x02\u040B\u040D\x05@!\x02\u040C\u0409\x03' +
    '\x02\x02\x02\u040C\u040A\x03\x02\x02\x02\u040C\u040B\x03\x02\x02\x02\u040D' +
    'C\x03\x02\x02\x02\u040E\u0410\x05F$\x02\u040F\u040E\x03\x02\x02\x02\u0410' +
    '\u0411\x03\x02\x02\x02\u0411\u040F\x03\x02\x02\x02\u0411\u0412\x03\x02' +
    '\x02\x02\u0412\u0415\x03\x02\x02\x02\u0413\u0416\x05> \x02\u0414\u0416' +
    '\x05@!\x02\u0415\u0413\x03\x02\x02\x02\u0415\u0414\x03\x02\x02\x02\u0415' +
    '\u0416\x03\x02\x02\x02\u0416E\x03\x02\x02\x02\u0417\u041D\x054\x1B\x02' +
    '\u0418\u041D\x056\x1C\x02\u0419\u041D\x058\x1D\x02\u041A\u041D\x05:\x1E' +
    '\x02\u041B\u041D\x05<\x1F\x02\u041C\u0417\x03\x02\x02\x02\u041C\u0418' +
    '\x03\x02\x02\x02\u041C\u0419\x03\x02\x02\x02\u041C\u041A\x03\x02\x02\x02' +
    '\u041C\u041B\x03\x02\x02\x02\u041DG\x03\x02\x02\x02\u041E\u041F\x07\x04' +
    '\x02\x02\u041F\u0421\x07R\x02\x02\u0420\u0422\x07i\x02\x02\u0421\u0420' +
    '\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02\u0423\u0421\x03\x02\x02\x02' +
    '\u0423\u0424\x03\x02\x02\x02\u0424\u0426\x03\x02\x02\x02\u0425\u0427\x07' +
    'n\x02\x02\u0426\u0425\x03\x02\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427' +
    '\u0428\x03\x02\x02\x02\u0428\u0429\x07,\x02\x02\u0429\u042A\x07j\x02\x02' +
    '\u042A\u042B\x05\xFE\x80\x02\u042B\u042C\x07k\x02\x02\u042C\u0430\x07' +
    '\x05\x02\x02\u042D\u042F\x05\x04\x03\x02\u042E\u042D\x03\x02\x02\x02\u042F' +
    '\u0432\x03\x02\x02\x02\u0430\u042E\x03\x02\x02\x02\u0430\u0431\x03\x02' +
    '\x02\x02\u0431\u0434\x03\x02\x02\x02\u0432\u0430\x03\x02\x02\x02\u0433' +
    '\u0435\x05f4\x02\u0434\u0433\x03\x02\x02\x02\u0434\u0435\x03\x02\x02\x02' +
    '\u0435\u0436\x03\x02\x02\x02\u0436\u0437\x07\x04\x02\x02\u0437\u0438\x07' +
    'R\x02\x02\u0438\u0439\x07i\x02\x02\u0439\u043A\x07\x1C\x02\x02\u043A\u043B' +
    '\x07\x05\x02\x02\u043BI\x03\x02\x02\x02\u043C\u043D\x07\x04\x02\x02\u043D' +
    '\u043F\x07R\x02\x02\u043E\u0440\x07i\x02\x02\u043F\u043E\x03\x02\x02\x02' +
    '\u0440\u0441\x03\x02\x02\x02\u0441\u043F\x03\x02\x02\x02\u0441\u0442\x03' +
    '\x02\x02\x02\u0442\u0444\x03\x02\x02\x02\u0443\u0445\x07n\x02\x02\u0444' +
    '\u0443\x03\x02\x02\x02\u0444\u0445\x03\x02\x02\x02\u0445\u0446\x03\x02' +
    '\x02\x02\u0446\u0447\x07\x1E\x02\x02\u0447\u0448\x07j\x02\x02\u0448\u0449' +
    '\x05\xFE\x80\x02\u0449\u044A\x07k\x02\x02\u044A\u044E\x07\x05\x02\x02' +
    '\u044B\u044D\x05\x04\x03\x02\u044C\u044B\x03\x02\x02\x02\u044D\u0450\x03' +
    '\x02\x02\x02\u044E\u044C\x03\x02\x02\x02\u044E\u044F\x03\x02\x02\x02\u044F' +
    '\u0452\x03\x02\x02\x02\u0450\u044E\x03\x02\x02\x02\u0451\u0453\x05f4\x02' +
    '\u0452\u0451\x03\x02\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453\u0454\x03' +
    '\x02\x02\x02\u0454\u0455\x07\x04\x02\x02\u0455\u0456\x07R\x02\x02\u0456' +
    '\u0457\x07i\x02\x02\u0457\u0458\x07\x1C\x02\x02\u0458\u0459\x07\x05\x02' +
    '\x02\u0459K\x03\x02\x02\x02\u045A\u045B\x07\x04\x02\x02\u045B\u045D\x07' +
    'R\x02\x02\u045C\u045E\x07i\x02\x02\u045D\u045C\x03\x02\x02\x02\u045E\u045F' +
    '\x03\x02\x02\x02\u045F\u045D\x03\x02\x02\x02\u045F\u0460\x03\x02\x02\x02' +
    '\u0460\u0462\x03\x02\x02\x02\u0461\u0463\x07n\x02\x02\u0462\u0461\x03' +
    '\x02\x02\x02\u0462\u0463\x03\x02\x02\x02\u0463\u0464\x03\x02\x02\x02\u0464' +
    '\u0465\x07q\x02\x02\u0465\u0466\x05\u0122\x92\x02\u0466\u0467\x07s\x02' +
    '\x02\u0467\u046B\x07\x05\x02\x02\u0468\u046A\x05\x04\x03\x02\u0469\u0468' +
    '\x03\x02\x02\x02\u046A\u046D\x03\x02\x02\x02\u046B\u0469\x03\x02\x02\x02' +
    '\u046B\u046C\x03\x02\x02\x02\u046C\u046F\x03\x02\x02\x02\u046D\u046B\x03' +
    '\x02\x02\x02\u046E\u0470\x05f4\x02\u046F\u046E\x03\x02\x02\x02\u046F\u0470' +
    '\x03\x02\x02\x02\u0470\u0471\x03\x02\x02\x02\u0471\u0472\x07\x04\x02\x02' +
    '\u0472\u0473\x07R\x02\x02\u0473\u0474\x07i\x02\x02\u0474\u0475\x07\x1C' +
    '\x02\x02\u0475\u0476\x07\x05\x02\x02\u0476M\x03\x02\x02\x02\u0477\u0478' +
    '\x07\x04\x02\x02\u0478\u047A\x07R\x02\x02\u0479\u047B\x07i\x02\x02\u047A' +
    '\u0479\x03\x02\x02\x02\u047B\u047C\x03\x02\x02\x02\u047C\u047A\x03\x02' +
    '\x02\x02\u047C\u047D\x03\x02\x02\x02\u047D\u047F\x03\x02\x02\x02\u047E' +
    '\u0480\x07n\x02\x02\u047F\u047E\x03\x02\x02\x02\u047F\u0480\x03\x02\x02' +
    '\x02\u0480\u0481\x03\x02\x02\x02\u0481\u0482\x07p\x02\x02\u0482\u0483' +
    '\x05\u0122\x92\x02\u0483\u0484\x07s\x02\x02\u0484\u0488\x07\x05\x02\x02' +
    '\u0485\u0487\x05\x04\x03\x02\u0486\u0485\x03\x02\x02\x02\u0487\u048A\x03' +
    '\x02\x02\x02\u0488\u0486\x03\x02\x02\x02\u0488\u0489\x03\x02\x02\x02\u0489' +
    '\u048C\x03\x02\x02\x02\u048A\u0488\x03\x02\x02\x02\u048B\u048D\x05f4\x02' +
    '\u048C\u048B\x03\x02\x02\x02\u048C\u048D\x03\x02\x02\x02\u048D\u048E\x03' +
    '\x02\x02\x02\u048E\u048F\x07\x04\x02\x02\u048F\u0490\x07R\x02\x02\u0490' +
    '\u0491\x07i\x02\x02\u0491\u0492\x07\x1C\x02\x02\u0492\u0493\x07\x05\x02' +
    '\x02\u0493O\x03\x02\x02\x02\u0494\u0495\x07\x04\x02\x02\u0495\u0497\x07' +
    'R\x02\x02\u0496\u0498\x07i\x02\x02\u0497\u0496\x03\x02\x02\x02\u0498\u0499' +
    '\x03\x02\x02\x02\u0499\u0497\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02' +
    '\u049A\u049C\x03\x02\x02\x02\u049B\u049D\x07n\x02\x02\u049C\u049B\x03' +
    '\x02\x02\x02\u049C\u049D\x03\x02\x02\x02\u049D\u049E\x03\x02\x02\x02\u049E' +
    '\u049F\x07\x0F\x02\x02\u049F\u04A0\x07j\x02\x02\u04A0\u04A1\x05\u0124' +
    '\x93\x02\u04A1\u04A2\x07k\x02\x02\u04A2\u04A6\x07\x05\x02\x02\u04A3\u04A5' +
    '\x05\x04\x03\x02\u04A4\u04A3\x03\x02\x02\x02\u04A5\u04A8\x03\x02\x02\x02' +
    '\u04A6\u04A4\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7\u04AA\x03' +
    '\x02\x02\x02\u04A8\u04A6\x03\x02\x02\x02\u04A9\u04AB\x05f4\x02\u04AA\u04A9' +
    '\x03\x02\x02\x02\u04AA\u04AB\x03\x02\x02\x02\u04AB\u04AC\x03\x02\x02\x02' +
    '\u04AC\u04AD\x07\x04\x02\x02\u04AD\u04AE\x07R\x02\x02\u04AE\u04AF\x07' +
    'i\x02\x02\u04AF\u04B0\x07\x1C\x02\x02\u04B0\u04B1\x07\x05\x02\x02\u04B1' +
    'Q\x03\x02\x02\x02\u04B2\u04B3\x07\x04\x02\x02\u04B3\u04B5\x07R\x02\x02' +
    '\u04B4\u04B6\x07i\x02\x02\u04B5\u04B4\x03\x02\x02\x02\u04B6\u04B7\x03' +
    '\x02\x02\x02\u04B7\u04B5\x03\x02\x02\x02\u04B7\u04B8\x03\x02\x02\x02\u04B8' +
    '\u04B9\x03\x02\x02\x02\u04B9\u04BE\x07\x1A\x02\x02\u04BA\u04BB\x07j\x02' +
    '\x02\u04BB\u04BC\x05\xFC\x7F\x02\u04BC\u04BD\x07k\x02\x02\u04BD\u04BF' +
    '\x03\x02\x02\x02\u04BE\u04BA\x03\x02\x02\x02\u04BE\u04BF\x03\x02\x02\x02' +
    '\u04BF\u04C0\x03\x02\x02\x02\u04C0\u04C4\x07\x05\x02\x02\u04C1\u04C3\x05' +
    '\x04\x03\x02\u04C2\u04C1\x03\x02\x02\x02\u04C3\u04C6\x03\x02\x02\x02\u04C4' +
    '\u04C2\x03\x02\x02\x02\u04C4\u04C5\x03\x02\x02\x02\u04C5\u04C7\x03\x02' +
    '\x02\x02\u04C6\u04C4\x03\x02\x02\x02\u04C7\u04C8\x07\x04\x02\x02\u04C8' +
    '\u04C9\x07R\x02\x02\u04C9\u04CA\x07i\x02\x02\u04CA\u04CB\x07\x1C\x02\x02' +
    '\u04CB\u04CC\x07\x05\x02\x02\u04CCS\x03\x02\x02\x02\u04CD\u04CE\x07\x04' +
    '\x02\x02\u04CE\u04D0\x07R\x02\x02\u04CF\u04D1\x07i\x02\x02\u04D0\u04CF' +
    '\x03\x02\x02\x02\u04D1\u04D2\x03\x02\x02\x02\u04D2\u04D0\x03\x02\x02\x02' +
    '\u04D2\u04D3\x03\x02\x02\x02\u04D3\u04D4\x03\x02\x02\x02\u04D4\u04D9\x07' +
    'V\x02\x02\u04D5\u04D6\x07j\x02\x02\u04D6\u04D7\x05\xFC\x7F\x02\u04D7\u04D8' +
    '\x07k\x02\x02\u04D8\u04DA\x03\x02\x02\x02\u04D9\u04D5\x03\x02\x02\x02' +
    '\u04D9\u04DA\x03\x02\x02\x02\u04DA\u04DB\x03\x02\x02\x02\u04DB\u04DF\x07' +
    '\x05\x02\x02\u04DC\u04DE\x05\x04\x03\x02\u04DD\u04DC\x03\x02\x02\x02\u04DE' +
    '\u04E1\x03\x02\x02\x02\u04DF\u04DD\x03\x02\x02\x02\u04DF\u04E0\x03\x02' +
    '\x02\x02\u04E0\u04E2\x03\x02\x02\x02\u04E1\u04DF\x03\x02\x02\x02\u04E2' +
    '\u04E3\x07\x04\x02\x02\u04E3\u04E4\x07R\x02\x02\u04E4\u04E5\x07i\x02\x02' +
    '\u04E5\u04E6\x07\x1C\x02\x02\u04E6\u04E7\x07\x05\x02\x02\u04E7U\x03\x02' +
    '\x02\x02\u04E8\u04E9\x07\x04\x02\x02\u04E9\u04EB\x07R\x02\x02\u04EA\u04EC' +
    '\x07i\x02\x02\u04EB\u04EA\x03\x02\x02\x02\u04EC\u04ED\x03\x02\x02\x02' +
    '\u04ED\u04EB\x03\x02\x02\x02\u04ED\u04EE\x03\x02\x02\x02\u04EE\u04EF\x03' +
    '\x02\x02\x02\u04EF\u04F0\x07\x1B\x02\x02\u04F0\u04F2\x07i\x02\x02\u04F1' +
    '\u04F3\x07n\x02\x02\u04F2\u04F1\x03\x02\x02\x02\u04F2\u04F3\x03\x02\x02' +
    '\x02\u04F3\u04F4\x03\x02\x02\x02\u04F4\u04F5\x07,\x02\x02\u04F5\u04F6' +
    '\x07j\x02\x02\u04F6\u04F7\x05\xFE\x80\x02\u04F7\u04F8\x07k\x02\x02\u04F8' +
    '\u04FC\x07\x05\x02\x02\u04F9\u04FB\x05\x04\x03\x02\u04FA\u04F9\x03\x02' +
    '\x02\x02\u04FB\u04FE\x03\x02\x02\x02\u04FC\u04FA\x03\x02\x02\x02\u04FC' +
    '\u04FD\x03\x02\x02\x02\u04FDW\x03\x02\x02\x02\u04FE\u04FC\x03\x02\x02' +
    '\x02\u04FF\u0500\x07\x04\x02\x02\u0500\u0502\x07R\x02\x02\u0501\u0503' +
    '\x07i\x02\x02\u0502\u0501\x03\x02\x02\x02\u0503\u0504\x03\x02\x02\x02' +
    '\u0504\u0502\x03\x02\x02\x02\u0504\u0505\x03\x02\x02\x02\u0505\u0506\x03' +
    '\x02\x02\x02\u0506\u0507\x07\x1B\x02\x02\u0507\u0509\x07i\x02\x02\u0508' +
    '\u050A\x07n\x02\x02\u0509\u0508\x03\x02\x02\x02\u0509\u050A\x03\x02\x02' +
    '\x02\u050A\u050B\x03\x02\x02\x02\u050B\u050C\x07\x1E\x02\x02\u050C\u050D' +
    '\x07j\x02\x02\u050D\u050E\x05\xFE\x80\x02\u050E\u050F\x07k\x02\x02\u050F' +
    '\u0513\x07\x05\x02\x02\u0510\u0512\x05\x04\x03\x02\u0511\u0510\x03\x02' +
    '\x02\x02\u0512\u0515\x03\x02\x02\x02\u0513\u0511\x03\x02\x02\x02\u0513' +
    '\u0514\x03\x02\x02\x02\u0514Y\x03\x02\x02\x02\u0515\u0513\x03\x02\x02' +
    '\x02\u0516\u0517\x07\x04\x02\x02\u0517\u0519\x07R\x02\x02\u0518\u051A' +
    '\x07i\x02\x02\u0519\u0518\x03\x02\x02\x02\u051A\u051B\x03\x02\x02\x02' +
    '\u051B\u0519\x03\x02\x02\x02\u051B\u051C\x03\x02\x02\x02\u051C\u051D\x03' +
    '\x02\x02\x02\u051D\u051E\x07\x1B\x02\x02\u051E\u0520\x07i\x02\x02\u051F' +
    '\u0521\x07n\x02\x02\u0520\u051F\x03\x02\x02\x02\u0520\u0521\x03\x02\x02' +
    '\x02\u0521\u0522\x03\x02\x02\x02\u0522\u0523\x07q\x02\x02\u0523\u0524' +
    '\x05\u0122\x92\x02\u0524\u0525\x07s\x02\x02\u0525\u0529\x07\x05\x02\x02' +
    '\u0526\u0528\x05\x04\x03\x02\u0527\u0526\x03\x02\x02\x02\u0528\u052B\x03' +
    '\x02\x02\x02\u0529\u0527\x03\x02\x02\x02\u0529\u052A\x03\x02\x02\x02\u052A' +
    '[\x03\x02\x02\x02\u052B\u0529\x03\x02\x02\x02\u052C\u052D\x07\x04\x02' +
    '\x02\u052D\u052F\x07R\x02\x02\u052E\u0530\x07i\x02\x02\u052F\u052E\x03' +
    '\x02\x02\x02\u0530\u0531\x03\x02\x02\x02\u0531';
  private static readonly _serializedATNSegment3: string =
    '\u052F\x03\x02\x02\x02\u0531\u0532\x03\x02\x02\x02\u0532\u0533\x03\x02' +
    '\x02\x02\u0533\u0534\x07\x1B\x02\x02\u0534\u0536\x07i\x02\x02\u0535\u0537' +
    '\x07n\x02\x02\u0536\u0535\x03\x02\x02\x02\u0536\u0537\x03\x02\x02\x02' +
    '\u0537\u0538\x03\x02\x02\x02\u0538\u0539\x07p\x02\x02\u0539\u053A\x05' +
    '\u0122\x92\x02\u053A\u053B\x07s\x02\x02\u053B\u053F\x07\x05\x02\x02\u053C' +
    '\u053E\x05\x04\x03\x02\u053D\u053C\x03\x02\x02\x02\u053E\u0541\x03\x02' +
    '\x02\x02\u053F\u053D\x03\x02\x02\x02\u053F\u0540\x03\x02\x02\x02\u0540' +
    ']\x03\x02\x02\x02\u0541\u053F\x03\x02\x02\x02\u0542\u0543\x07\x04\x02' +
    '\x02\u0543\u0545\x07R\x02\x02\u0544\u0546\x07i\x02\x02\u0545\u0544\x03' +
    '\x02\x02\x02\u0546\u0547\x03\x02\x02\x02\u0547\u0545\x03\x02\x02\x02\u0547' +
    '\u0548\x03\x02\x02\x02\u0548\u0549\x03\x02\x02\x02\u0549\u054A\x07\x1B' +
    '\x02\x02\u054A\u054C\x07i\x02\x02\u054B\u054D\x07n\x02\x02\u054C\u054B' +
    '\x03\x02\x02\x02\u054C\u054D\x03\x02\x02\x02\u054D\u054E\x03\x02\x02\x02' +
    '\u054E\u054F\x07\x0F\x02\x02\u054F\u0550\x07j\x02\x02\u0550\u0551\x05' +
    '\u0124\x93\x02\u0551\u0552\x07k\x02\x02\u0552\u0556\x07\x05\x02\x02\u0553' +
    '\u0555\x05\x04\x03\x02\u0554\u0553\x03\x02\x02\x02\u0555\u0558\x03\x02' +
    '\x02\x02\u0556\u0554\x03\x02\x02\x02\u0556\u0557\x03\x02\x02\x02\u0557' +
    '_\x03\x02\x02\x02\u0558\u0556\x03\x02\x02\x02\u0559\u055A\x07\x04\x02' +
    '\x02\u055A\u055C\x07R\x02\x02\u055B\u055D\x07i\x02\x02\u055C\u055B\x03' +
    '\x02\x02\x02\u055D\u055E\x03\x02\x02\x02\u055E\u055C\x03\x02\x02\x02\u055E' +
    '\u055F\x03\x02\x02\x02\u055F\u0560\x03\x02\x02\x02\u0560\u0561\x07\x1B' +
    '\x02\x02\u0561\u0562\x07i\x02\x02\u0562\u0567\x07\x1A\x02\x02\u0563\u0564' +
    '\x07j\x02\x02\u0564\u0565\x05\xFC\x7F\x02\u0565\u0566\x07k\x02\x02\u0566' +
    '\u0568\x03\x02\x02\x02\u0567\u0563\x03\x02\x02\x02\u0567\u0568\x03\x02' +
    '\x02\x02\u0568\u0569\x03\x02\x02\x02\u0569\u056D\x07\x05\x02\x02\u056A' +
    '\u056C\x05\x04\x03\x02\u056B\u056A\x03\x02\x02\x02\u056C\u056F\x03\x02' +
    '\x02\x02\u056D\u056B\x03\x02\x02\x02\u056D\u056E\x03\x02\x02\x02\u056E' +
    'a\x03\x02\x02\x02\u056F\u056D\x03\x02\x02\x02\u0570\u0571\x07\x04\x02' +
    '\x02\u0571\u0573\x07R\x02\x02\u0572\u0574\x07i\x02\x02\u0573\u0572\x03' +
    '\x02\x02\x02\u0574\u0575\x03\x02\x02\x02\u0575\u0573\x03\x02\x02\x02\u0575' +
    '\u0576\x03\x02\x02\x02\u0576\u0577\x03\x02\x02\x02\u0577\u0578\x07\x1B' +
    '\x02\x02\u0578\u0579\x07i\x02\x02\u0579\u057E\x07V\x02\x02\u057A\u057B' +
    '\x07j\x02\x02\u057B\u057C\x05\xFC\x7F\x02\u057C\u057D\x07k\x02\x02\u057D' +
    '\u057F\x03\x02\x02\x02\u057E\u057A\x03\x02\x02\x02\u057E\u057F\x03\x02' +
    '\x02\x02\u057F\u0580\x03\x02\x02\x02\u0580\u0584\x07\x05\x02\x02\u0581' +
    '\u0583\x05\x04\x03\x02\u0582\u0581\x03\x02\x02\x02\u0583\u0586\x03\x02' +
    '\x02\x02\u0584\u0582\x03\x02\x02\x02\u0584\u0585\x03\x02\x02\x02\u0585' +
    'c\x03\x02\x02\x02\u0586\u0584\x03\x02\x02\x02\u0587\u0588\x07\x04\x02' +
    '\x02\u0588\u058A\x07R\x02\x02\u0589\u058B\x07i\x02\x02\u058A\u0589\x03' +
    '\x02\x02\x02\u058B\u058C\x03\x02\x02\x02\u058C\u058A\x03\x02\x02\x02\u058C' +
    '\u058D\x03\x02\x02\x02\u058D\u058E\x03\x02\x02\x02\u058E\u058F\x07\x1B' +
    '\x02\x02\u058F\u0593\x07\x05\x02\x02\u0590\u0592\x05\x04\x03\x02\u0591' +
    '\u0590\x03\x02\x02\x02\u0592\u0595\x03\x02\x02\x02\u0593\u0591\x03\x02' +
    '\x02\x02\u0593\u0594\x03\x02\x02\x02\u0594e\x03\x02\x02\x02\u0595\u0593' +
    '\x03\x02\x02\x02\u0596\u059B\x05h5\x02\u0597\u059B\x05`1\x02\u0598\u059B' +
    '\x05b2\x02\u0599\u059B\x05d3\x02\u059A\u0596\x03\x02\x02\x02\u059A\u0597' +
    '\x03\x02\x02\x02\u059A\u0598\x03\x02\x02\x02\u059A\u0599\x03\x02\x02\x02' +
    '\u059Bg\x03\x02\x02\x02\u059C\u059E\x05j6\x02\u059D\u059C\x03\x02\x02' +
    '\x02\u059E\u059F\x03\x02\x02\x02\u059F\u059D\x03\x02\x02\x02\u059F\u05A0' +
    '\x03\x02\x02\x02\u05A0\u05A4\x03\x02\x02\x02\u05A1\u05A5\x05`1\x02\u05A2' +
    '\u05A5\x05b2\x02\u05A3\u05A5\x05d3\x02\u05A4\u05A1\x03\x02\x02\x02\u05A4' +
    '\u05A2\x03\x02\x02\x02\u05A4\u05A3\x03\x02\x02\x02\u05A4\u05A5\x03\x02' +
    '\x02\x02\u05A5i\x03\x02\x02\x02\u05A6\u05AC\x05V,\x02\u05A7\u05AC\x05' +
    'X-\x02\u05A8\u05AC\x05Z.\x02\u05A9\u05AC\x05\\/\x02\u05AA\u05AC\x05^0' +
    '\x02\u05AB\u05A6\x03\x02\x02\x02\u05AB\u05A7\x03\x02\x02\x02\u05AB\u05A8' +
    '\x03\x02\x02\x02\u05AB\u05A9\x03\x02\x02\x02\u05AB\u05AA\x03\x02\x02\x02' +
    '\u05ACk\x03\x02\x02\x02\u05AD\u05AE\x07\x04\x02\x02\u05AE\u05B0\x07"' +
    '\x02\x02\u05AF\u05B1\x07i\x02\x02\u05B0\u05AF\x03\x02\x02\x02\u05B1\u05B2' +
    '\x03\x02\x02\x02\u05B2\u05B0\x03\x02\x02\x02\u05B2\u05B3\x03\x02\x02\x02' +
    '\u05B3\u05B5\x03\x02\x02\x02\u05B4\u05B6\x07n\x02\x02\u05B5\u05B4\x03' +
    '\x02\x02\x02\u05B5\u05B6\x03\x02\x02\x02\u05B6\u05B7\x03\x02\x02\x02\u05B7' +
    '\u05B8\x07,\x02\x02\u05B8\u05B9\x07j\x02\x02\u05B9\u05BA\x05\xFE\x80\x02' +
    '\u05BA\u05BB\x07k\x02\x02\u05BB\u05BF\x07\x05\x02\x02\u05BC\u05BE\x05' +
    '\x04\x03\x02\u05BD\u05BC\x03\x02\x02\x02\u05BE\u05C1\x03\x02\x02\x02\u05BF' +
    '\u05BD\x03\x02\x02\x02\u05BF\u05C0\x03\x02\x02\x02\u05C0\u05C3\x03\x02' +
    '\x02\x02\u05C1\u05BF\x03\x02\x02\x02\u05C2\u05C4\x05\x86D\x02\u05C3\u05C2' +
    '\x03\x02\x02\x02\u05C3\u05C4\x03\x02\x02\x02\u05C4\u05C5\x03\x02\x02\x02' +
    '\u05C5\u05C6\x07\x04\x02\x02\u05C6\u05C7\x07"\x02\x02\u05C7\u05C8\x07' +
    'i\x02\x02\u05C8\u05C9\x07\x1C\x02\x02\u05C9\u05CA\x07\x05\x02\x02\u05CA' +
    'm\x03\x02\x02\x02\u05CB\u05CC\x07\x04\x02\x02\u05CC\u05CE\x07"\x02\x02' +
    '\u05CD\u05CF\x07i\x02\x02\u05CE\u05CD\x03\x02\x02\x02\u05CF\u05D0\x03' +
    '\x02\x02\x02\u05D0\u05CE\x03\x02\x02\x02\u05D0\u05D1\x03\x02\x02\x02\u05D1' +
    '\u05D3\x03\x02\x02\x02\u05D2\u05D4\x07n\x02\x02\u05D3\u05D2\x03\x02\x02' +
    '\x02\u05D3\u05D4\x03\x02\x02\x02\u05D4\u05D5\x03\x02\x02\x02\u05D5\u05D6' +
    '\x07\x1E\x02\x02\u05D6\u05D7\x07j\x02\x02\u05D7\u05D8\x05\xFE\x80\x02' +
    '\u05D8\u05D9\x07k\x02\x02\u05D9\u05DD\x07\x05\x02\x02\u05DA\u05DC\x05' +
    '\x04\x03\x02\u05DB\u05DA\x03\x02\x02\x02\u05DC\u05DF\x03\x02\x02\x02\u05DD' +
    '\u05DB\x03\x02\x02\x02\u05DD\u05DE\x03\x02\x02\x02\u05DE\u05E1\x03\x02' +
    '\x02\x02\u05DF\u05DD\x03\x02\x02\x02\u05E0\u05E2\x05\x86D\x02\u05E1\u05E0' +
    '\x03\x02\x02\x02\u05E1\u05E2\x03\x02\x02\x02\u05E2\u05E3\x03\x02\x02\x02' +
    '\u05E3\u05E4\x07\x04\x02\x02\u05E4\u05E5\x07"\x02\x02\u05E5\u05E6\x07' +
    'i\x02\x02\u05E6\u05E7\x07\x1C\x02\x02\u05E7\u05E8\x07\x05\x02\x02\u05E8' +
    'o\x03\x02\x02\x02\u05E9\u05EA\x07\x04\x02\x02\u05EA\u05EC\x07"\x02\x02' +
    '\u05EB\u05ED\x07i\x02\x02\u05EC\u05EB\x03\x02\x02\x02\u05ED\u05EE\x03' +
    '\x02\x02\x02\u05EE\u05EC\x03\x02\x02\x02\u05EE\u05EF\x03\x02\x02\x02\u05EF' +
    '\u05F1\x03\x02\x02\x02\u05F0\u05F2\x07n\x02\x02\u05F1\u05F0\x03\x02\x02' +
    '\x02\u05F1\u05F2\x03\x02\x02\x02\u05F2\u05F3\x03\x02\x02\x02\u05F3\u05F4' +
    '\x07p\x02\x02\u05F4\u05F5\x05\u0122\x92\x02\u05F5\u05F6\x07s\x02\x02\u05F6' +
    '\u05FA\x07\x05\x02\x02\u05F7\u05F9\x05\x04\x03\x02\u05F8\u05F7\x03\x02' +
    '\x02\x02\u05F9\u05FC\x03\x02\x02\x02\u05FA\u05F8\x03\x02\x02\x02\u05FA' +
    '\u05FB\x03\x02\x02\x02\u05FB\u05FE\x03\x02\x02\x02\u05FC\u05FA\x03\x02' +
    '\x02\x02\u05FD\u05FF\x05\x86D\x02\u05FE\u05FD\x03\x02\x02\x02\u05FE\u05FF' +
    '\x03\x02\x02\x02\u05FF\u0600\x03\x02\x02\x02\u0600\u0601\x07\x04\x02\x02' +
    '\u0601\u0602\x07"\x02\x02\u0602\u0603\x07i\x02\x02\u0603\u0604\x07\x1C' +
    '\x02\x02\u0604\u0605\x07\x05\x02\x02\u0605q\x03\x02\x02\x02\u0606\u0607' +
    '\x07\x04\x02\x02\u0607\u0609\x07"\x02\x02\u0608\u060A\x07i\x02\x02\u0609' +
    '\u0608\x03\x02\x02\x02\u060A\u060B\x03\x02\x02\x02\u060B\u0609\x03\x02' +
    '\x02\x02\u060B\u060C\x03\x02\x02\x02\u060C\u060E\x03\x02\x02\x02\u060D' +
    '\u060F\x07n\x02\x02\u060E\u060D\x03\x02\x02\x02\u060E\u060F\x03\x02\x02' +
    '\x02\u060F\u0610\x03\x02\x02\x02\u0610\u0611\x07\x0F\x02\x02\u0611\u0612' +
    '\x07j\x02\x02\u0612\u0613\x05\u0124\x93\x02\u0613\u0614\x07k\x02\x02\u0614' +
    '\u0618\x07\x05\x02\x02\u0615\u0617\x05\x04\x03\x02\u0616\u0615\x03\x02' +
    '\x02\x02\u0617\u061A\x03\x02\x02\x02\u0618\u0616\x03\x02\x02\x02\u0618' +
    '\u0619\x03\x02\x02\x02\u0619\u061C\x03\x02\x02\x02\u061A\u0618\x03\x02' +
    '\x02\x02\u061B\u061D\x05\x86D\x02\u061C\u061B\x03\x02\x02\x02\u061C\u061D' +
    '\x03\x02\x02\x02\u061D\u061E\x03\x02\x02\x02\u061E\u061F\x07\x04\x02\x02' +
    '\u061F\u0620\x07"\x02\x02\u0620\u0621\x07i\x02\x02\u0621\u0622\x07\x1C' +
    '\x02\x02\u0622\u0623\x07\x05\x02\x02\u0623s\x03\x02\x02\x02\u0624\u0625' +
    '\x07\x04\x02\x02\u0625\u0627\x07"\x02\x02\u0626\u0628\x07i\x02\x02\u0627' +
    '\u0626\x03\x02\x02\x02\u0628\u0629\x03\x02\x02\x02\u0629\u0627\x03\x02' +
    '\x02\x02\u0629\u062A\x03\x02\x02\x02\u062A\u062B\x03\x02\x02\x02\u062B' +
    '\u0630\x07\x1A\x02\x02\u062C\u062D\x07j\x02\x02\u062D\u062E\x05\xFC\x7F' +
    '\x02\u062E\u062F\x07k\x02\x02\u062F\u0631\x03\x02\x02\x02\u0630\u062C' +
    '\x03\x02\x02\x02\u0630\u0631\x03\x02\x02\x02\u0631\u0632\x03\x02\x02\x02' +
    '\u0632\u0636\x07\x05\x02\x02\u0633\u0635\x05\x04\x03\x02\u0634\u0633\x03' +
    '\x02\x02\x02\u0635\u0638\x03\x02\x02\x02\u0636\u0634\x03\x02\x02\x02\u0636' +
    '\u0637\x03\x02\x02\x02\u0637\u0639\x03\x02\x02\x02\u0638\u0636\x03\x02' +
    '\x02\x02\u0639\u063A\x07\x04\x02\x02\u063A\u063B\x07"\x02\x02\u063B\u063C' +
    '\x07i\x02\x02\u063C\u063D\x07\x1C\x02\x02\u063D\u063E\x07\x05\x02\x02' +
    '\u063Eu\x03\x02\x02\x02\u063F\u0640\x07\x04\x02\x02\u0640\u0642\x07"' +
    '\x02\x02\u0641\u0643\x07i\x02\x02\u0642\u0641\x03\x02\x02\x02\u0643\u0644' +
    '\x03\x02\x02\x02\u0644\u0642\x03\x02\x02\x02\u0644\u0645\x03\x02\x02\x02' +
    '\u0645\u0646\x03\x02\x02\x02\u0646\u064B\x07V\x02\x02\u0647\u0648\x07' +
    'j\x02\x02\u0648\u0649\x05\xFC\x7F\x02\u0649\u064A\x07k\x02\x02\u064A\u064C' +
    '\x03\x02\x02\x02\u064B\u0647\x03\x02\x02\x02\u064B\u064C\x03\x02\x02\x02' +
    '\u064C\u064D\x03\x02\x02\x02\u064D\u0651\x07\x05\x02\x02\u064E\u0650\x05' +
    '\x04\x03\x02\u064F\u064E\x03\x02\x02\x02\u0650\u0653\x03\x02\x02\x02\u0651' +
    '\u064F\x03\x02\x02\x02\u0651\u0652\x03\x02\x02\x02\u0652\u0654\x03\x02' +
    '\x02\x02\u0653\u0651\x03\x02\x02\x02\u0654\u0655\x07\x04\x02\x02\u0655' +
    '\u0656\x07"\x02\x02\u0656\u0657\x07i\x02\x02\u0657\u0658\x07\x1C\x02' +
    '\x02\u0658\u0659\x07\x05\x02\x02\u0659w\x03\x02\x02\x02\u065A\u065B\x07' +
    '\x04\x02\x02\u065B\u065D\x07"\x02\x02\u065C\u065E\x07i\x02\x02\u065D' +
    '\u065C\x03\x02\x02\x02\u065E\u065F\x03\x02\x02\x02\u065F\u065D\x03\x02' +
    '\x02\x02\u065F\u0660\x03\x02\x02\x02\u0660\u0661\x03\x02\x02\x02\u0661' +
    '\u0662\x07\x1B\x02\x02\u0662\u0664\x07i\x02\x02\u0663\u0665\x07n\x02\x02' +
    '\u0664\u0663\x03\x02\x02\x02\u0664\u0665\x03\x02\x02\x02\u0665\u0666\x03' +
    '\x02\x02\x02\u0666\u0667\x07,\x02\x02\u0667\u0668\x07j\x02\x02\u0668\u0669' +
    '\x05\xFE\x80\x02\u0669\u066A\x07k\x02\x02\u066A\u066E\x07\x05\x02\x02' +
    '\u066B\u066D\x05\x04\x03\x02\u066C\u066B\x03\x02\x02\x02\u066D\u0670\x03' +
    '\x02\x02\x02\u066E\u066C\x03\x02\x02\x02\u066E\u066F\x03\x02\x02\x02\u066F' +
    'y\x03\x02\x02\x02\u0670\u066E\x03\x02\x02\x02\u0671\u0672\x07\x04\x02' +
    '\x02\u0672\u0674\x07"\x02\x02\u0673\u0675\x07i\x02\x02\u0674\u0673\x03' +
    '\x02\x02\x02\u0675\u0676\x03\x02\x02\x02\u0676\u0674\x03\x02\x02\x02\u0676' +
    '\u0677\x03\x02\x02\x02\u0677\u0678\x03\x02\x02\x02\u0678\u0679\x07\x1B' +
    '\x02\x02\u0679\u067B\x07i\x02\x02\u067A\u067C\x07n\x02\x02\u067B\u067A' +
    '\x03\x02\x02\x02\u067B\u067C\x03\x02\x02\x02\u067C\u067D\x03\x02\x02\x02' +
    '\u067D\u067E\x07\x1E\x02\x02\u067E\u067F\x07j\x02\x02\u067F\u0680\x05' +
    '\xFE\x80\x02\u0680\u0681\x07k\x02\x02\u0681\u0685\x07\x05\x02\x02\u0682' +
    '\u0684\x05\x04\x03\x02\u0683\u0682\x03\x02\x02\x02\u0684\u0687\x03\x02' +
    '\x02\x02\u0685\u0683\x03\x02\x02\x02\u0685\u0686\x03\x02\x02\x02\u0686' +
    '{\x03\x02\x02\x02\u0687\u0685\x03\x02\x02\x02\u0688\u0689\x07\x04\x02' +
    '\x02\u0689\u068B\x07"\x02\x02\u068A\u068C\x07i\x02\x02\u068B\u068A\x03' +
    '\x02\x02\x02\u068C\u068D\x03\x02\x02\x02\u068D\u068B\x03\x02\x02\x02\u068D' +
    '\u068E\x03\x02\x02\x02\u068E\u068F\x03\x02\x02\x02\u068F\u0690\x07\x1B' +
    '\x02\x02\u0690\u0692\x07i\x02\x02\u0691\u0693\x07n\x02\x02\u0692\u0691' +
    '\x03\x02\x02\x02\u0692\u0693\x03\x02\x02\x02\u0693\u0694\x03\x02\x02\x02' +
    '\u0694\u0695\x07p\x02\x02\u0695\u0696\x05\u0122\x92\x02\u0696\u0697\x07' +
    's\x02\x02\u0697\u069B\x07\x05\x02\x02\u0698\u069A\x05\x04\x03\x02\u0699' +
    '\u0698\x03\x02\x02\x02\u069A\u069D\x03\x02\x02\x02\u069B\u0699\x03\x02' +
    '\x02\x02\u069B\u069C\x03\x02\x02\x02\u069C}\x03\x02\x02\x02\u069D\u069B' +
    '\x03\x02\x02\x02\u069E\u069F\x07\x04\x02\x02\u069F\u06A1\x07"\x02\x02' +
    '\u06A0\u06A2\x07i\x02\x02\u06A1\u06A0\x03\x02\x02\x02\u06A2\u06A3\x03' +
    '\x02\x02\x02\u06A3\u06A1\x03\x02\x02\x02\u06A3\u06A4\x03\x02\x02\x02\u06A4' +
    '\u06A5\x03\x02\x02\x02\u06A5\u06A6\x07\x1B\x02\x02\u06A6\u06A8\x07i\x02' +
    '\x02\u06A7\u06A9\x07n\x02\x02\u06A8\u06A7\x03\x02\x02\x02\u06A8\u06A9' +
    '\x03\x02\x02\x02\u06A9\u06AA\x03\x02\x02\x02\u06AA\u06AB\x07\x0F\x02\x02' +
    '\u06AB\u06AC\x07j\x02\x02\u06AC\u06AD\x05\u0124\x93\x02\u06AD\u06AE\x07' +
    'k\x02\x02\u06AE\u06B2\x07\x05\x02\x02\u06AF\u06B1\x05\x04\x03\x02\u06B0' +
    '\u06AF\x03\x02\x02\x02\u06B1\u06B4\x03\x02\x02\x02\u06B2\u06B0\x03\x02' +
    '\x02\x02\u06B2\u06B3\x03\x02\x02\x02\u06B3\x7F\x03\x02\x02\x02\u06B4\u06B2' +
    '\x03\x02\x02\x02\u06B5\u06B6\x07\x04\x02\x02\u06B6\u06B8\x07"\x02\x02' +
    '\u06B7\u06B9\x07i\x02\x02\u06B8\u06B7\x03\x02\x02\x02\u06B9\u06BA\x03' +
    '\x02\x02\x02\u06BA\u06B8\x03\x02\x02\x02\u06BA\u06BB\x03\x02\x02\x02\u06BB' +
    '\u06BC\x03\x02\x02\x02\u06BC\u06BD\x07\x1B\x02\x02\u06BD\u06BE\x07i\x02' +
    '\x02\u06BE\u06C3\x07\x1A\x02\x02\u06BF\u06C0\x07j\x02\x02\u06C0\u06C1' +
    '\x05\xFC\x7F\x02\u06C1\u06C2\x07k\x02\x02\u06C2\u06C4\x03\x02\x02\x02' +
    '\u06C3\u06BF\x03\x02\x02\x02\u06C3\u06C4\x03\x02\x02\x02\u06C4\u06C5\x03' +
    '\x02\x02\x02\u06C5\u06C9\x07\x05\x02\x02\u06C6\u06C8\x05\x04\x03\x02\u06C7' +
    '\u06C6\x03\x02\x02\x02\u06C8\u06CB\x03\x02\x02\x02\u06C9\u06C7\x03\x02' +
    '\x02\x02\u06C9\u06CA\x03\x02\x02\x02\u06CA\x81\x03\x02\x02\x02\u06CB\u06C9' +
    '\x03\x02\x02\x02\u06CC\u06CD\x07\x04\x02\x02\u06CD\u06CF\x07"\x02\x02' +
    '\u06CE\u06D0\x07i\x02\x02\u06CF\u06CE\x03\x02\x02\x02\u06D0\u06D1\x03' +
    '\x02\x02\x02\u06D1\u06CF\x03\x02\x02\x02\u06D1\u06D2\x03\x02\x02\x02\u06D2' +
    '\u06D3\x03\x02\x02\x02\u06D3\u06D4\x07\x1B\x02\x02\u06D4\u06D5\x07i\x02' +
    '\x02\u06D5\u06DA\x07V\x02\x02\u06D6\u06D7\x07j\x02\x02\u06D7\u06D8\x05' +
    '\xFC\x7F\x02\u06D8\u06D9\x07k\x02\x02\u06D9\u06DB\x03\x02\x02\x02\u06DA' +
    '\u06D6\x03\x02\x02\x02\u06DA\u06DB\x03\x02\x02\x02\u06DB\u06DC\x03\x02' +
    '\x02\x02\u06DC\u06E0\x07\x05\x02\x02\u06DD\u06DF\x05\x04\x03\x02\u06DE' +
    '\u06DD\x03\x02\x02\x02\u06DF\u06E2\x03\x02\x02\x02\u06E0\u06DE\x03\x02' +
    '\x02\x02\u06E0\u06E1\x03\x02\x02\x02\u06E1\x83\x03\x02\x02\x02\u06E2\u06E0' +
    '\x03\x02\x02\x02\u06E3\u06E4\x07\x04\x02\x02\u06E4\u06E6\x07"\x02\x02' +
    '\u06E5\u06E7\x07i\x02\x02\u06E6\u06E5\x03\x02\x02\x02\u06E7\u06E8\x03' +
    '\x02\x02\x02\u06E8\u06E6\x03\x02\x02\x02\u06E8\u06E9\x03\x02\x02\x02\u06E9' +
    '\u06EA\x03\x02\x02\x02\u06EA\u06EB\x07\x1B\x02\x02\u06EB\u06EF\x07\x05' +
    '\x02\x02\u06EC\u06EE\x05\x04\x03\x02\u06ED\u06EC\x03\x02\x02\x02\u06EE' +
    '\u06F1\x03\x02\x02\x02\u06EF\u06ED\x03\x02\x02\x02\u06EF\u06F0\x03\x02' +
    '\x02\x02\u06F0\x85\x03\x02\x02\x02\u06F1\u06EF\x03\x02\x02\x02\u06F2\u06F7' +
    '\x05\x80A\x02\u06F3\u06F7\x05\x82B\x02\u06F4\u06F7\x05\x84C\x02\u06F5' +
    '\u06F7\x05\x88E\x02\u06F6\u06F2\x03\x02\x02\x02\u06F6\u06F3\x03\x02\x02' +
    '\x02\u06F6\u06F4\x03\x02\x02\x02\u06F6\u06F5\x03\x02\x02\x02\u06F7\x87' +
    '\x03\x02\x02\x02\u06F8\u06FA\x05\x8AF\x02\u06F9\u06F8\x03\x02\x02\x02' +
    '\u06FA\u06FB\x03\x02\x02\x02\u06FB\u06F9\x03\x02\x02\x02\u06FB\u06FC\x03' +
    '\x02\x02\x02\u06FC\u0700\x03\x02\x02\x02\u06FD\u0701\x05\x80A\x02\u06FE' +
    '\u0701\x05\x82B\x02\u06FF\u0701\x05\x84C\x02\u0700\u06FD\x03\x02\x02\x02' +
    '\u0700\u06FE\x03\x02\x02\x02\u0700\u06FF\x03\x02\x02\x02\u0700\u0701\x03' +
    '\x02\x02\x02\u0701\x89\x03\x02\x02\x02\u0702\u0707\x05x=\x02\u0703\u0707' +
    '\x05z>\x02\u0704\u0707\x05|?\x02\u0705\u0707\x05~@\x02\u0706\u0702\x03' +
    '\x02\x02\x02\u0706\u0703\x03\x02\x02\x02\u0706\u0704\x03\x02\x02\x02\u0706' +
    '\u0705\x03\x02\x02\x02\u0707\x8B\x03\x02\x02\x02\u0708\u0709\x07\x04\x02' +
    '\x02\u0709\u070B\x07\x18\x02\x02\u070A\u070C\x07i\x02\x02\u070B\u070A' +
    '\x03\x02\x02\x02\u070C\u070D\x03\x02\x02\x02\u070D\u070B\x03\x02\x02\x02' +
    '\u070D\u070E\x03\x02\x02\x02\u070E\u0710\x03\x02\x02\x02\u070F\u0711\x07' +
    'n\x02\x02\u0710\u070F\x03\x02\x02\x02\u0710\u0711\x03\x02\x02\x02\u0711' +
    '\u0712\x03\x02\x02\x02\u0712\u0713\x07,\x02\x02\u0713\u0714\x07j\x02\x02' +
    '\u0714\u0715\x05\xFE\x80\x02\u0715\u0716\x07k\x02\x02\u0716\u071A\x07' +
    '\x05\x02\x02\u0717\u0719\x05\x04\x03\x02\u0718\u0717\x03\x02\x02\x02\u0719' +
    '\u071C\x03\x02\x02\x02\u071A\u0718\x03\x02\x02\x02\u071A\u071B\x03\x02' +
    '\x02\x02\u071B\u071E\x03\x02\x02\x02\u071C\u071A\x03\x02\x02\x02\u071D' +
    '\u071F\x05\x9AN\x02\u071E\u071D\x03\x02\x02\x02\u071E\u071F\x03\x02\x02' +
    '\x02\u071F\u0720\x03\x02\x02\x02\u0720\u0721\x07\x04\x02\x02\u0721\u0722' +
    '\x07\x18\x02\x02\u0722\u0723\x07i\x02\x02\u0723\u0724\x07\x1C\x02\x02' +
    '\u0724\u0725\x07\x05\x02\x02\u0725\x8D\x03\x02\x02\x02\u0726\u0727\x07' +
    '\x04\x02\x02\u0727\u0729\x07\x18\x02\x02\u0728\u072A\x07i\x02\x02\u0729' +
    '\u0728\x03\x02\x02\x02\u072A\u072B\x03\x02\x02\x02\u072B\u0729\x03\x02' +
    '\x02\x02\u072B\u072C\x03\x02\x02\x02\u072C\u072E\x03\x02\x02\x02\u072D' +
    '\u072F\x07n\x02\x02\u072E\u072D\x03\x02\x02\x02\u072E\u072F\x03\x02\x02' +
    '\x02\u072F\u0730\x03\x02\x02\x02\u0730\u0731\x07p\x02\x02\u0731\u0732' +
    '\x05\u0122\x92\x02\u0732\u0733\x07s\x02\x02\u0733\u0737\x07\x05\x02\x02' +
    '\u0734\u0736\x05\x04\x03\x02\u0735\u0734\x03\x02\x02\x02\u0736\u0739\x03' +
    '\x02\x02\x02\u0737\u0735\x03\x02\x02\x02\u0737\u0738\x03\x02\x02\x02\u0738' +
    '\u073B\x03\x02\x02\x02\u0739\u0737\x03\x02\x02\x02\u073A\u073C\x05\x9A' +
    'N\x02\u073B\u073A\x03\x02\x02\x02\u073B\u073C\x03\x02\x02\x02\u073C\u073D' +
    '\x03\x02\x02\x02\u073D\u073E\x07\x04\x02\x02\u073E\u073F\x07\x18\x02\x02' +
    '\u073F\u0740\x07i\x02\x02\u0740\u0741\x07\x1C\x02\x02\u0741\u0742\x07' +
    '\x05\x02\x02\u0742\x8F\x03\x02\x02\x02\u0743\u0744\x07\x04\x02\x02\u0744' +
    '\u0746\x07\x18\x02\x02\u0745\u0747\x07i\x02\x02\u0746\u0745\x03\x02\x02' +
    '\x02\u0747\u0748\x03\x02\x02\x02\u0748\u0746\x03\x02\x02\x02\u0748\u0749' +
    '\x03\x02\x02\x02\u0749\u074B\x03\x02\x02\x02\u074A\u074C\x07n\x02\x02' +
    '\u074B\u074A\x03\x02\x02\x02\u074B\u074C\x03\x02\x02\x02\u074C\u074D\x03' +
    '\x02\x02\x02\u074D\u074E\x07\x0F\x02\x02\u074E\u074F\x07j\x02\x02\u074F' +
    '\u0750\x05\u0124\x93\x02\u0750\u0751\x07k\x02\x02\u0751\u0755\x07\x05' +
    '\x02\x02\u0752\u0754\x05\x04\x03\x02\u0753\u0752\x03\x02\x02\x02\u0754' +
    '\u0757\x03\x02\x02\x02\u0755\u0753\x03\x02\x02\x02\u0755\u0756\x03\x02' +
    '\x02\x02\u0756\u0759\x03\x02\x02\x02\u0757\u0755\x03\x02\x02\x02\u0758' +
    '\u075A\x05\x9AN\x02\u0759\u0758\x03\x02\x02\x02\u0759\u075A\x03\x02\x02' +
    '\x02\u075A\u075B\x03\x02\x02\x02\u075B\u075C\x07\x04\x02\x02\u075C\u075D' +
    '\x07\x18\x02\x02\u075D\u075E\x07i\x02\x02\u075E\u075F\x07\x1C\x02\x02' +
    '\u075F\u0760\x07\x05\x02\x02\u0760\x91\x03\x02\x02\x02\u0761\u0762\x07' +
    '\x04\x02\x02\u0762\u0764\x07\x18\x02\x02\u0763\u0765\x07i\x02\x02\u0764' +
    '\u0763\x03\x02\x02\x02\u0765\u0766\x03\x02\x02\x02\u0766\u0764\x03\x02' +
    '\x02\x02\u0766\u0767\x03\x02\x02\x02\u0767\u0768\x03\x02\x02\x02\u0768' +
    '\u0769\x07\x1B\x02\x02\u0769\u076B\x07i\x02\x02\u076A\u076C\x07n\x02\x02' +
    '\u076B\u076A\x03\x02\x02\x02\u076B\u076C\x03\x02\x02\x02\u076C\u076D\x03' +
    '\x02\x02\x02\u076D\u076E\x07,\x02\x02\u076E\u076F\x07j\x02\x02\u076F\u0770' +
    '\x05\xFE\x80\x02\u0770\u0771\x07k\x02\x02\u0771\u0775\x07\x05\x02\x02' +
    '\u0772\u0774\x05\x04\x03\x02\u0773\u0772\x03\x02\x02\x02\u0774\u0777\x03' +
    '\x02\x02\x02\u0775\u0773\x03\x02\x02\x02\u0775\u0776\x03\x02\x02\x02\u0776' +
    '\x93\x03\x02\x02\x02\u0777\u0775\x03\x02\x02\x02\u0778\u0779\x07\x04\x02' +
    '\x02\u0779\u077B\x07\x18\x02\x02\u077A\u077C\x07i\x02\x02\u077B\u077A' +
    '\x03\x02\x02\x02\u077C\u077D\x03\x02\x02\x02\u077D\u077B\x03\x02\x02\x02' +
    '\u077D\u077E\x03\x02\x02\x02\u077E\u077F\x03\x02\x02\x02\u077F\u0780\x07' +
    '\x1B\x02\x02\u0780\u0782\x07i\x02\x02\u0781\u0783\x07n\x02\x02\u0782\u0781' +
    '\x03\x02\x02\x02\u0782\u0783\x03\x02\x02\x02\u0783\u0784\x03\x02\x02\x02' +
    '\u0784\u0785\x07p\x02\x02\u0785\u0786\x05\u0122\x92\x02\u0786\u0787\x07' +
    's\x02\x02\u0787\u078B\x07\x05\x02\x02\u0788\u078A\x05\x04\x03\x02\u0789' +
    '\u0788\x03\x02\x02\x02\u078A\u078D\x03\x02\x02\x02\u078B\u0789\x03\x02' +
    '\x02\x02\u078B\u078C\x03\x02\x02\x02\u078C\x95\x03\x02\x02\x02\u078D\u078B' +
    '\x03\x02\x02\x02\u078E\u078F\x07\x04\x02\x02\u078F\u0791\x07\x18\x02\x02' +
    '\u0790\u0792\x07i\x02\x02\u0791\u0790\x03\x02\x02\x02\u0792\u0793\x03' +
    '\x02\x02\x02\u0793\u0791\x03\x02\x02\x02\u0793\u0794\x03\x02\x02\x02\u0794' +
    '\u0795\x03\x02\x02\x02\u0795\u0796\x07\x1B\x02\x02\u0796\u0798\x07i\x02' +
    '\x02\u0797\u0799\x07n\x02\x02\u0798\u0797\x03\x02\x02\x02\u0798\u0799' +
    '\x03\x02\x02\x02\u0799\u079A\x03\x02\x02\x02\u079A\u079B\x07\x0F\x02\x02' +
    '\u079B\u079C\x07j\x02\x02\u079C\u079D\x05\u0124\x93\x02\u079D\u079E\x07' +
    'k\x02\x02\u079E\u07A2\x07\x05\x02\x02\u079F\u07A1\x05\x04\x03\x02\u07A0' +
    '\u079F\x03\x02\x02\x02\u07A1\u07A4\x03\x02\x02\x02\u07A2\u07A0\x03\x02' +
    '\x02\x02\u07A2\u07A3\x03\x02\x02\x02\u07A3\x97\x03\x02\x02\x02\u07A4\u07A2' +
    '\x03\x02\x02\x02\u07A5\u07A6\x07\x04\x02\x02\u07A6\u07A8\x07\x18\x02\x02' +
    '\u07A7\u07A9\x07i\x02\x02\u07A8\u07A7\x03\x02\x02\x02\u07A9\u07AA\x03' +
    '\x02\x02\x02\u07AA\u07A8\x03\x02\x02\x02\u07AA\u07AB\x03\x02\x02\x02\u07AB' +
    '\u07AC\x03\x02\x02\x02\u07AC\u07AD\x07\x1B\x02\x02\u07AD\u07B1\x07\x05' +
    '\x02\x02\u07AE\u07B0\x05\x04\x03\x02\u07AF\u07AE\x03\x02\x02\x02\u07B0' +
    '\u07B3\x03\x02\x02\x02\u07B1\u07AF\x03\x02\x02\x02\u07B1\u07B2\x03\x02' +
    '\x02\x02\u07B2\x99\x03\x02\x02\x02\u07B3\u07B1\x03\x02\x02\x02\u07B4\u07B7' +
    '\x05\x9CO\x02\u07B5\u07B7\x05\x98M\x02\u07B6\u07B4\x03\x02\x02\x02\u07B6' +
    '\u07B5\x03\x02\x02\x02\u07B7\x9B\x03\x02\x02\x02\u07B8\u07BA\x05\x9EP' +
    '\x02\u07B9\u07B8\x03\x02\x02\x02\u07BA\u07BB\x03\x02\x02\x02\u07BB\u07B9' +
    '\x03\x02\x02\x02\u07BB\u07BC\x03\x02\x02\x02\u07BC\u07BE\x03\x02\x02\x02' +
    '\u07BD\u07BF\x05\x98M\x02\u07BE\u07BD\x03\x02\x02\x02\u07BE\u07BF\x03' +
    '\x02\x02\x02\u07BF\x9D\x03\x02\x02\x02\u07C0\u07C4\x05\x92J\x02\u07C1' +
    '\u07C4\x05\x94K\x02\u07C2\u07C4\x05\x96L\x02\u07C3\u07C0\x03\x02\x02\x02' +
    '\u07C3\u07C1\x03\x02\x02\x02\u07C3\u07C2\x03\x02\x02\x02\u07C4\x9F\x03' +
    '\x02\x02\x02\u07C5\u07C6\x07\x04\x02\x02\u07C6\u07C8\x07/\x02\x02\u07C7' +
    '\u07C9\x07i\x02\x02\u07C8\u07C7\x03\x02\x02\x02\u07C9\u07CA\x03\x02\x02' +
    '\x02\u07CA\u07C8\x03\x02\x02\x02\u07CA\u07CB\x03\x02\x02\x02\u07CB\u07CD' +
    '\x03\x02\x02\x02\u07CC\u07CE\x07n\x02\x02\u07CD\u07CC\x03\x02\x02\x02' +
    '\u07CD\u07CE\x03\x02\x02\x02\u07CE\u07CF\x03\x02\x02\x02\u07CF\u07D0\x07' +
    ',\x02\x02\u07D0\u07D1\x07j\x02\x02\u07D1\u07D2\x05\xFE\x80\x02\u07D2\u07D3' +
    '\x07k\x02\x02\u07D3\u07D7\x07\x05\x02\x02\u07D4\u07D6\x05\x04\x03\x02' +
    '\u07D5\u07D4\x03\x02\x02\x02\u07D6\u07D9\x03\x02\x02\x02\u07D7\u07D5\x03' +
    '\x02\x02\x02\u07D7\u07D8\x03\x02\x02\x02\u07D8\u07DB\x03\x02\x02\x02\u07D9' +
    '\u07D7\x03\x02\x02\x02\u07DA\u07DC\x05\xAAV\x02\u07DB\u07DA\x03\x02\x02' +
    '\x02\u07DB\u07DC\x03\x02\x02\x02\u07DC\u07DD\x03\x02\x02\x02\u07DD\u07DE' +
    '\x07\x04\x02\x02\u07DE\u07DF\x07/\x02\x02\u07DF\u07E0\x07i\x02\x02\u07E0' +
    '\u07E1\x07\x1C\x02\x02\u07E1\u07E2\x07\x05\x02\x02\u07E2\xA1\x03\x02\x02' +
    '\x02\u07E3\u07E4\x07\x04\x02\x02\u07E4\u07E6\x07/\x02\x02\u07E5\u07E7' +
    '\x07i\x02\x02\u07E6\u07E5\x03\x02\x02\x02\u07E7\u07E8\x03\x02\x02\x02' +
    '\u07E8\u07E6\x03\x02\x02\x02\u07E8\u07E9\x03\x02\x02\x02\u07E9\u07EA\x03' +
    '\x02\x02\x02\u07EA\u07EF\x07\x1A\x02\x02\u07EB\u07EC\x07j\x02\x02\u07EC' +
    '\u07ED\x05\xFC\x7F\x02\u07ED\u07EE\x07k\x02\x02\u07EE\u07F0\x03\x02\x02' +
    '\x02\u07EF\u07EB\x03\x02\x02\x02\u07EF\u07F0\x03\x02\x02\x02\u07F0\u07F1' +
    '\x03\x02\x02\x02\u07F1\u07F5\x07\x05\x02\x02\u07F2\u07F4\x05\x04\x03\x02' +
    '\u07F3\u07F2\x03\x02\x02\x02\u07F4\u07F7\x03\x02\x02\x02\u07F5\u07F3\x03' +
    '\x02\x02\x02\u07F5\u07F6\x03\x02\x02\x02\u07F6\u07F8\x03\x02\x02\x02\u07F7' +
    '\u07F5\x03\x02\x02\x02\u07F8\u07F9\x07\x04\x02\x02\u07F9\u07FA\x07/\x02' +
    '\x02\u07FA\u07FB\x07i\x02\x02\u07FB\u07FC\x07\x1C\x02\x02\u07FC\u07FD' +
    '\x07\x05\x02\x02\u07FD\xA3\x03\x02\x02\x02\u07FE\u07FF\x07\x04\x02\x02' +
    '\u07FF\u0801\x07/\x02\x02\u0800\u0802\x07i\x02\x02\u0801\u0800\x03\x02' +
    '\x02\x02\u0802\u0803\x03';
  private static readonly _serializedATNSegment4: string =
    '\x02\x02\x02\u0803\u0801\x03\x02\x02\x02\u0803\u0804\x03\x02\x02\x02\u0804' +
    '\u0805\x03\x02\x02\x02\u0805\u0806\x07\x1B\x02\x02\u0806\u0808\x07i\x02' +
    '\x02\u0807\u0809\x07n\x02\x02\u0808\u0807\x03\x02\x02\x02\u0808\u0809' +
    '\x03\x02\x02\x02\u0809\u080A\x03\x02\x02\x02\u080A\u080B\x07,\x02\x02' +
    '\u080B\u080C\x07j\x02\x02\u080C\u080D\x05\xFE\x80\x02\u080D\u080E\x07' +
    'k\x02\x02\u080E\u0812\x07\x05\x02\x02\u080F\u0811\x05\x04\x03\x02\u0810' +
    '\u080F\x03\x02\x02\x02\u0811\u0814\x03\x02\x02\x02\u0812\u0810\x03\x02' +
    '\x02\x02\u0812\u0813\x03\x02\x02\x02\u0813\xA5\x03\x02\x02\x02\u0814\u0812' +
    '\x03\x02\x02\x02\u0815\u0816\x07\x04\x02\x02\u0816\u0818\x07/\x02\x02' +
    '\u0817\u0819\x07i\x02\x02\u0818\u0817\x03\x02\x02\x02\u0819\u081A\x03' +
    '\x02\x02\x02\u081A\u0818\x03\x02\x02\x02\u081A\u081B\x03\x02\x02\x02\u081B' +
    '\u081C\x03\x02\x02\x02\u081C\u081D\x07\x1B\x02\x02\u081D\u081E\x07i\x02' +
    '\x02\u081E\u0823\x07\x1A\x02\x02\u081F\u0820\x07j\x02\x02\u0820\u0821' +
    '\x05\xFC\x7F\x02\u0821\u0822\x07k\x02\x02\u0822\u0824\x03\x02\x02\x02' +
    '\u0823\u081F\x03\x02\x02\x02\u0823\u0824\x03\x02\x02\x02\u0824\u0825\x03' +
    '\x02\x02\x02\u0825\u0829\x07\x05\x02\x02\u0826\u0828\x05\x04\x03\x02\u0827' +
    '\u0826\x03\x02\x02\x02\u0828\u082B\x03\x02\x02\x02\u0829\u0827\x03\x02' +
    '\x02\x02\u0829\u082A\x03\x02\x02\x02\u082A\xA7\x03\x02\x02\x02\u082B\u0829' +
    '\x03\x02\x02\x02\u082C\u082D\x07\x04\x02\x02\u082D\u082F\x07/\x02\x02' +
    '\u082E\u0830\x07i\x02\x02\u082F\u082E\x03\x02\x02\x02\u0830\u0831\x03' +
    '\x02\x02\x02\u0831\u082F\x03\x02\x02\x02\u0831\u0832\x03\x02\x02\x02\u0832' +
    '\u0833\x03\x02\x02\x02\u0833\u0834\x07\x1B\x02\x02\u0834\u0838\x07\x05' +
    '\x02\x02\u0835\u0837\x05\x04\x03\x02\u0836\u0835\x03\x02\x02\x02\u0837' +
    '\u083A\x03\x02\x02\x02\u0838\u0836\x03\x02\x02\x02\u0838\u0839\x03\x02' +
    '\x02\x02\u0839\xA9\x03\x02\x02\x02\u083A\u0838\x03\x02\x02\x02\u083B\u083F' +
    '\x05\xACW\x02\u083C\u083F\x05\xA6T\x02\u083D\u083F\x05\xA8U\x02\u083E' +
    '\u083B\x03\x02\x02\x02\u083E\u083C\x03\x02\x02\x02\u083E\u083D\x03\x02' +
    '\x02\x02\u083F\xAB\x03\x02\x02\x02\u0840\u0842\x05\xA4S\x02\u0841\u0840' +
    '\x03\x02\x02\x02\u0842\u0843\x03\x02\x02\x02\u0843\u0841\x03\x02\x02\x02' +
    '\u0843\u0844\x03\x02\x02\x02\u0844\u0847\x03\x02\x02\x02\u0845\u0848\x05' +
    '\xA6T\x02\u0846\u0848\x05\xA8U\x02\u0847\u0845\x03\x02\x02\x02\u0847\u0846' +
    '\x03\x02\x02\x02\u0847\u0848\x03\x02\x02\x02\u0848\xAD\x03\x02\x02\x02' +
    '\u0849\u084A\x07\x04\x02\x02\u084A\u084C\x07c\x02\x02\u084B\u084D\x07' +
    'i\x02\x02\u084C\u084B\x03\x02\x02\x02\u084D\u084E\x03\x02\x02\x02\u084E' +
    '\u084C\x03\x02\x02\x02\u084E\u084F\x03\x02\x02\x02\u084F\u0851\x03\x02' +
    '\x02\x02\u0850\u0852\x07n\x02\x02\u0851\u0850\x03\x02\x02\x02\u0851\u0852' +
    '\x03\x02\x02\x02\u0852\u0853\x03\x02\x02\x02\u0853\u0854\x07,\x02\x02' +
    '\u0854\u0855\x07j\x02\x02\u0855\u0856\x05\xFE\x80\x02\u0856\u0857\x07' +
    'k\x02\x02\u0857\u085B\x07\x05\x02\x02\u0858\u085A\x05\x04\x03\x02\u0859' +
    '\u0858\x03\x02\x02\x02\u085A\u085D\x03\x02\x02\x02\u085B\u0859\x03\x02' +
    '\x02\x02\u085B\u085C\x03\x02\x02\x02\u085C\u085F\x03\x02\x02\x02\u085D' +
    '\u085B\x03\x02\x02\x02\u085E\u0860\x05\xB8]\x02\u085F\u085E\x03\x02\x02' +
    '\x02\u085F\u0860\x03\x02\x02\x02\u0860\u0861\x03\x02\x02\x02\u0861\u0862' +
    '\x07\x04\x02\x02\u0862\u0863\x07c\x02\x02\u0863\u0864\x07i\x02\x02\u0864' +
    '\u0865\x07\x1C\x02\x02\u0865\u0866\x07\x05\x02\x02\u0866\xAF\x03\x02\x02' +
    '\x02\u0867\u0868\x07\x04\x02\x02\u0868\u086A\x07c\x02\x02\u0869\u086B' +
    '\x07i\x02\x02\u086A\u0869\x03\x02\x02\x02\u086B\u086C\x03\x02\x02\x02' +
    '\u086C\u086A\x03\x02\x02\x02\u086C\u086D\x03\x02\x02\x02\u086D\u086E\x03' +
    '\x02\x02\x02\u086E\u0873\x07\x1A\x02\x02\u086F\u0870\x07j\x02\x02\u0870' +
    '\u0871\x05\xFC\x7F\x02\u0871\u0872\x07k\x02\x02\u0872\u0874\x03\x02\x02' +
    '\x02\u0873\u086F\x03\x02\x02\x02\u0873\u0874\x03\x02\x02\x02\u0874\u0875' +
    '\x03\x02\x02\x02\u0875\u0879\x07\x05\x02\x02\u0876\u0878\x05\x04\x03\x02' +
    '\u0877\u0876\x03\x02\x02\x02\u0878\u087B\x03\x02\x02\x02\u0879\u0877\x03' +
    '\x02\x02\x02\u0879\u087A\x03\x02\x02\x02\u087A\u087C\x03\x02\x02\x02\u087B' +
    '\u0879\x03\x02\x02\x02\u087C\u087D\x07\x04\x02\x02\u087D\u087E\x07c\x02' +
    '\x02\u087E\u087F\x07i\x02\x02\u087F\u0880\x07\x1C\x02\x02\u0880\u0881' +
    '\x07\x05\x02\x02\u0881\xB1\x03\x02\x02\x02\u0882\u0883\x07\x04\x02\x02' +
    '\u0883\u0885\x07c\x02\x02\u0884\u0886\x07i\x02\x02\u0885\u0884\x03\x02' +
    '\x02\x02\u0886\u0887\x03\x02\x02\x02\u0887\u0885\x03\x02\x02\x02\u0887' +
    '\u0888\x03\x02\x02\x02\u0888\u0889\x03\x02\x02\x02\u0889\u088A\x07\x1B' +
    '\x02\x02\u088A\u088C\x07i\x02\x02\u088B\u088D\x07n\x02\x02\u088C\u088B' +
    '\x03\x02\x02\x02\u088C\u088D\x03\x02\x02\x02\u088D\u088E\x03\x02\x02\x02' +
    '\u088E\u088F\x07,\x02\x02\u088F\u0890\x07j\x02\x02\u0890\u0891\x05\xFE' +
    '\x80\x02\u0891\u0892\x07k\x02\x02\u0892\u0896\x07\x05\x02\x02\u0893\u0895' +
    '\x05\x04\x03\x02\u0894\u0893\x03\x02\x02\x02\u0895\u0898\x03\x02\x02\x02' +
    '\u0896\u0894\x03\x02\x02\x02\u0896\u0897\x03\x02\x02\x02\u0897\xB3\x03' +
    '\x02\x02\x02\u0898\u0896\x03\x02\x02\x02\u0899\u089A\x07\x04\x02\x02\u089A' +
    '\u089C\x07c\x02\x02\u089B\u089D\x07i\x02\x02\u089C\u089B\x03\x02\x02\x02' +
    '\u089D\u089E\x03\x02\x02\x02\u089E\u089C\x03\x02\x02\x02\u089E\u089F\x03' +
    '\x02\x02\x02\u089F\u08A0\x03\x02\x02\x02\u08A0\u08A1\x07\x1B\x02\x02\u08A1' +
    '\u08A2\x07i\x02\x02\u08A2\u08A7\x07\x1A\x02\x02\u08A3\u08A4\x07j\x02\x02' +
    '\u08A4\u08A5\x05\xFC\x7F\x02\u08A5\u08A6\x07k\x02\x02\u08A6\u08A8\x03' +
    '\x02\x02\x02\u08A7\u08A3\x03\x02\x02\x02\u08A7\u08A8\x03\x02\x02\x02\u08A8' +
    '\u08A9\x03\x02\x02\x02\u08A9\u08AD\x07\x05\x02\x02\u08AA\u08AC\x05\x04' +
    '\x03\x02\u08AB\u08AA\x03\x02\x02\x02\u08AC\u08AF\x03\x02\x02\x02\u08AD' +
    '\u08AB\x03\x02\x02\x02\u08AD\u08AE\x03\x02\x02\x02\u08AE\xB5\x03\x02\x02' +
    '\x02\u08AF\u08AD\x03\x02\x02\x02\u08B0\u08B1\x07\x04\x02\x02\u08B1\u08B3' +
    '\x07c\x02\x02\u08B2\u08B4\x07i\x02\x02\u08B3\u08B2\x03\x02\x02\x02\u08B4' +
    '\u08B5\x03\x02\x02\x02\u08B5\u08B3\x03\x02\x02\x02\u08B5\u08B6\x03\x02' +
    '\x02\x02\u08B6\u08B7\x03\x02\x02\x02\u08B7\u08B8\x07\x1B\x02\x02\u08B8' +
    '\u08BC\x07\x05\x02\x02\u08B9\u08BB\x05\x04\x03\x02\u08BA\u08B9\x03\x02' +
    '\x02\x02\u08BB\u08BE\x03\x02\x02\x02\u08BC\u08BA\x03\x02\x02\x02\u08BC' +
    '\u08BD\x03\x02\x02\x02\u08BD\xB7\x03\x02\x02\x02\u08BE\u08BC\x03\x02\x02' +
    '\x02\u08BF\u08C3\x05\xBA^\x02\u08C0\u08C3\x05\xB4[\x02\u08C1\u08C3\x05' +
    '\xB6\\\x02\u08C2\u08BF\x03\x02\x02\x02\u08C2\u08C0\x03\x02\x02\x02\u08C2' +
    '\u08C1\x03\x02\x02\x02\u08C3\xB9\x03\x02\x02\x02\u08C4\u08C6\x05\xB2Z' +
    '\x02\u08C5\u08C4\x03\x02\x02\x02\u08C6\u08C7\x03\x02\x02\x02\u08C7\u08C5' +
    '\x03\x02\x02\x02\u08C7\u08C8\x03\x02\x02\x02\u08C8\u08CB\x03\x02\x02\x02' +
    '\u08C9\u08CC\x05\xB4[\x02\u08CA\u08CC\x05\xB6\\\x02\u08CB\u08C9\x03\x02' +
    '\x02\x02\u08CB\u08CA\x03\x02\x02\x02\u08CB\u08CC\x03\x02\x02\x02\u08CC' +
    '\xBB\x03\x02\x02\x02\u08CD\u08CE\x07\x04\x02\x02\u08CE\u08D0\x07P\x02' +
    '\x02\u08CF\u08D1\x07i\x02\x02\u08D0\u08CF\x03\x02\x02\x02\u08D1\u08D2' +
    '\x03\x02\x02\x02\u08D2\u08D0\x03\x02\x02\x02\u08D2\u08D3\x03\x02\x02\x02' +
    '\u08D3\u08D5\x03\x02\x02\x02\u08D4\u08D6\x07n\x02\x02\u08D5\u08D4\x03' +
    '\x02\x02\x02\u08D5\u08D6\x03\x02\x02\x02\u08D6\u08D7\x03\x02\x02\x02\u08D7' +
    '\u08D8\x07,\x02\x02\u08D8\u08D9\x07j\x02\x02\u08D9\u08DA\x05\xFE\x80\x02' +
    '\u08DA\u08DB\x07k\x02\x02\u08DB\u08DF\x07\x05\x02\x02\u08DC\u08DE\x05' +
    '\x04\x03\x02\u08DD\u08DC\x03\x02\x02\x02\u08DE\u08E1\x03\x02\x02\x02\u08DF' +
    '\u08DD\x03\x02\x02\x02\u08DF\u08E0\x03\x02\x02\x02\u08E0\u08E3\x03\x02' +
    '\x02\x02\u08E1\u08DF\x03\x02\x02\x02\u08E2\u08E4\x05\xC6d\x02\u08E3\u08E2' +
    '\x03\x02\x02\x02\u08E3\u08E4\x03\x02\x02\x02\u08E4\u08E5\x03\x02\x02\x02' +
    '\u08E5\u08E6\x07\x04\x02\x02\u08E6\u08E7\x07P\x02\x02\u08E7\u08E8\x07' +
    'i\x02\x02\u08E8\u08E9\x07\x1C\x02\x02\u08E9\u08EA\x07\x05\x02\x02\u08EA' +
    '\xBD\x03\x02\x02\x02\u08EB\u08EC\x07\x04\x02\x02\u08EC\u08EE\x07P\x02' +
    '\x02\u08ED\u08EF\x07i\x02\x02\u08EE\u08ED\x03\x02\x02\x02\u08EF\u08F0' +
    '\x03\x02\x02\x02\u08F0\u08EE\x03\x02\x02\x02\u08F0\u08F1\x03\x02\x02\x02' +
    '\u08F1\u08F2\x03\x02\x02\x02\u08F2\u08F7\x07\x1A\x02\x02\u08F3\u08F4\x07' +
    'j\x02\x02\u08F4\u08F5\x05\xFC\x7F\x02\u08F5\u08F6\x07k\x02\x02\u08F6\u08F8' +
    '\x03\x02\x02\x02\u08F7\u08F3\x03\x02\x02\x02\u08F7\u08F8\x03\x02\x02\x02' +
    '\u08F8\u08F9\x03\x02\x02\x02\u08F9\u08FD\x07\x05\x02\x02\u08FA\u08FC\x05' +
    '\x04\x03\x02\u08FB\u08FA\x03\x02\x02\x02\u08FC\u08FF\x03\x02\x02\x02\u08FD' +
    '\u08FB\x03\x02\x02\x02\u08FD\u08FE\x03\x02\x02\x02\u08FE\u0900\x03\x02' +
    '\x02\x02\u08FF\u08FD\x03\x02\x02\x02\u0900\u0901\x07\x04\x02\x02\u0901' +
    '\u0902\x07P\x02\x02\u0902\u0903\x07i\x02\x02\u0903\u0904\x07\x1C\x02\x02' +
    '\u0904\u0905\x07\x05\x02\x02\u0905\xBF\x03\x02\x02\x02\u0906\u0907\x07' +
    '\x04\x02\x02\u0907\u0909\x07P\x02\x02\u0908\u090A\x07i\x02\x02\u0909\u0908' +
    '\x03\x02\x02\x02\u090A\u090B\x03\x02\x02\x02\u090B\u0909\x03\x02\x02\x02' +
    '\u090B\u090C\x03\x02\x02\x02\u090C\u090D\x03\x02\x02\x02\u090D\u090E\x07' +
    '\x1B\x02\x02\u090E\u0910\x07i\x02\x02\u090F\u0911\x07n\x02\x02\u0910\u090F' +
    '\x03\x02\x02\x02\u0910\u0911\x03\x02\x02\x02\u0911\u0912\x03\x02\x02\x02' +
    '\u0912\u0913\x07,\x02\x02\u0913\u0914\x07j\x02\x02\u0914\u0915\x05\xFE' +
    '\x80\x02\u0915\u0916\x07k\x02\x02\u0916\u091A\x07\x05\x02\x02\u0917\u0919' +
    '\x05\x04\x03\x02\u0918\u0917\x03\x02\x02\x02\u0919\u091C\x03\x02\x02\x02' +
    '\u091A\u0918\x03\x02\x02\x02\u091A\u091B\x03\x02\x02\x02\u091B\xC1\x03' +
    '\x02\x02\x02\u091C\u091A\x03\x02\x02\x02\u091D\u091E\x07\x04\x02\x02\u091E' +
    '\u0920\x07P\x02\x02\u091F\u0921\x07i\x02\x02\u0920\u091F\x03\x02\x02\x02' +
    '\u0921\u0922\x03\x02\x02\x02\u0922\u0920\x03\x02\x02\x02\u0922\u0923\x03' +
    '\x02\x02\x02\u0923\u0924\x03\x02\x02\x02\u0924\u0925\x07\x1B\x02\x02\u0925' +
    '\u0926\x07i\x02\x02\u0926\u092B\x07\x1A\x02\x02\u0927\u0928\x07j\x02\x02' +
    '\u0928\u0929\x05\xFC\x7F\x02\u0929\u092A\x07k\x02\x02\u092A\u092C\x03' +
    '\x02\x02\x02\u092B\u0927\x03\x02\x02\x02\u092B\u092C\x03\x02\x02\x02\u092C' +
    '\u092D\x03\x02\x02\x02\u092D\u0931\x07\x05\x02\x02\u092E\u0930\x05\x04' +
    '\x03\x02\u092F\u092E\x03\x02\x02\x02\u0930\u0933\x03\x02\x02\x02\u0931' +
    '\u092F\x03\x02\x02\x02\u0931\u0932\x03\x02\x02\x02\u0932\xC3\x03\x02\x02' +
    '\x02\u0933\u0931\x03\x02\x02\x02\u0934\u0935\x07\x04\x02\x02\u0935\u0937' +
    '\x07P\x02\x02\u0936\u0938\x07i\x02\x02\u0937\u0936\x03\x02\x02\x02\u0938' +
    '\u0939\x03\x02\x02\x02\u0939\u0937\x03\x02\x02\x02\u0939\u093A\x03\x02' +
    '\x02\x02\u093A\u093B\x03\x02\x02\x02\u093B\u093C\x07\x1B\x02\x02\u093C' +
    '\u0940\x07\x05\x02\x02\u093D\u093F\x05\x04\x03\x02\u093E\u093D\x03\x02' +
    '\x02\x02\u093F\u0942\x03\x02\x02\x02\u0940\u093E\x03\x02\x02\x02\u0940' +
    '\u0941\x03\x02\x02\x02\u0941\xC5\x03\x02\x02\x02\u0942\u0940\x03\x02\x02' +
    '\x02\u0943\u0947\x05\xC8e\x02\u0944\u0947\x05\xC2b\x02\u0945\u0947\x05' +
    '\xC4c\x02\u0946\u0943\x03\x02\x02\x02\u0946\u0944\x03\x02\x02\x02\u0946' +
    '\u0945\x03\x02\x02\x02\u0947\xC7\x03\x02\x02\x02\u0948\u094A\x05\xC0a' +
    '\x02\u0949\u0948\x03\x02\x02\x02\u094A\u094B\x03\x02\x02\x02\u094B\u0949' +
    '\x03\x02\x02\x02\u094B\u094C\x03\x02\x02\x02\u094C\u094F\x03\x02\x02\x02' +
    '\u094D\u0950\x05\xC2b\x02\u094E\u0950\x05\xC4c\x02\u094F\u094D\x03\x02' +
    '\x02\x02\u094F\u094E\x03\x02\x02\x02\u094F\u0950\x03\x02\x02\x02\u0950' +
    '\xC9\x03\x02\x02\x02\u0951\u0952\x07\x04\x02\x02\u0952\u0954\x07\x0E\x02' +
    '\x02\u0953\u0955\x07i\x02\x02\u0954\u0953\x03\x02\x02\x02\u0955\u0956' +
    '\x03\x02\x02\x02\u0956\u0954\x03\x02\x02\x02\u0956\u0957\x03\x02\x02\x02' +
    '\u0957\u0959\x03\x02\x02\x02\u0958\u095A\x07n\x02\x02\u0959\u0958\x03' +
    '\x02\x02\x02\u0959\u095A\x03\x02\x02\x02\u095A\u095B\x03\x02\x02\x02\u095B' +
    '\u095C\x07,\x02\x02\u095C\u095D\x07j\x02\x02\u095D\u095E\x05\xFE\x80\x02' +
    '\u095E\u095F\x07k\x02\x02\u095F\u0963\x07\x05\x02\x02\u0960\u0962\x05' +
    '\x04\x03\x02\u0961\u0960\x03\x02\x02\x02\u0962\u0965\x03\x02\x02\x02\u0963' +
    '\u0961\x03\x02\x02\x02\u0963\u0964\x03\x02\x02\x02\u0964\u0967\x03\x02' +
    '\x02\x02\u0965\u0963\x03\x02\x02\x02\u0966\u0968\x05\xD4k\x02\u0967\u0966' +
    '\x03\x02\x02\x02\u0967\u0968\x03\x02\x02\x02\u0968\u0969\x03\x02\x02\x02' +
    '\u0969\u096A\x07\x04\x02\x02\u096A\u096B\x07\x0E\x02\x02\u096B\u096C\x07' +
    'i\x02\x02\u096C\u096D\x07\x1C\x02\x02\u096D\u096E\x07\x05\x02\x02\u096E' +
    '\xCB\x03\x02\x02\x02\u096F\u0970\x07\x04\x02\x02\u0970\u0972\x07\x0E\x02' +
    '\x02\u0971\u0973\x07i\x02\x02\u0972\u0971\x03\x02\x02\x02\u0973\u0974' +
    '\x03\x02\x02\x02\u0974\u0972\x03\x02\x02\x02\u0974\u0975\x03\x02\x02\x02' +
    '\u0975\u0976\x03\x02\x02\x02\u0976\u097B\x07\x1A\x02\x02\u0977\u0978\x07' +
    'j\x02\x02\u0978\u0979\x05\xFC\x7F\x02\u0979\u097A\x07k\x02\x02\u097A\u097C' +
    '\x03\x02\x02\x02\u097B\u0977\x03\x02\x02\x02\u097B\u097C\x03\x02\x02\x02' +
    '\u097C\u097D\x03\x02\x02\x02\u097D\u0981\x07\x05\x02\x02\u097E\u0980\x05' +
    '\x04\x03\x02\u097F\u097E\x03\x02\x02\x02\u0980\u0983\x03\x02\x02\x02\u0981' +
    '\u097F\x03\x02\x02\x02\u0981\u0982\x03\x02\x02\x02\u0982\u0984\x03\x02' +
    '\x02\x02\u0983\u0981\x03\x02\x02\x02\u0984\u0985\x07\x04\x02\x02\u0985' +
    '\u0986\x07\x0E\x02\x02\u0986\u0987\x07i\x02\x02\u0987\u0988\x07\x1C\x02' +
    '\x02\u0988\u0989\x07\x05\x02\x02\u0989\xCD\x03\x02\x02\x02\u098A\u098B' +
    '\x07\x04\x02\x02\u098B\u098D\x07\x0E\x02\x02\u098C\u098E\x07i\x02\x02' +
    '\u098D\u098C\x03\x02\x02\x02\u098E\u098F\x03\x02\x02\x02\u098F\u098D\x03' +
    '\x02\x02\x02\u098F\u0990\x03\x02\x02\x02\u0990\u0991\x03\x02\x02\x02\u0991' +
    '\u0992\x07\x1B\x02\x02\u0992\u0994\x07i\x02\x02\u0993\u0995\x07n\x02\x02' +
    '\u0994\u0993\x03\x02\x02\x02\u0994\u0995\x03\x02\x02\x02\u0995\u0996\x03' +
    '\x02\x02\x02\u0996\u0997\x07,\x02\x02\u0997\u0998\x07j\x02\x02\u0998\u0999' +
    '\x05\xFE\x80\x02\u0999\u099A\x07k\x02\x02\u099A\u099E\x07\x05\x02\x02' +
    '\u099B\u099D\x05\x04\x03\x02\u099C\u099B\x03\x02\x02\x02\u099D\u09A0\x03' +
    '\x02\x02\x02\u099E\u099C\x03\x02\x02\x02\u099E\u099F\x03\x02\x02\x02\u099F' +
    '\xCF\x03\x02\x02\x02\u09A0\u099E\x03\x02\x02\x02\u09A1\u09A2\x07\x04\x02' +
    '\x02\u09A2\u09A4\x07\x0E\x02\x02\u09A3\u09A5\x07i\x02\x02\u09A4\u09A3' +
    '\x03\x02\x02\x02\u09A5\u09A6\x03\x02\x02\x02\u09A6\u09A4\x03\x02\x02\x02' +
    '\u09A6\u09A7\x03\x02\x02\x02\u09A7\u09A8\x03\x02\x02\x02\u09A8\u09A9\x07' +
    '\x1B\x02\x02\u09A9\u09AA\x07i\x02\x02\u09AA\u09AF\x07\x1A\x02\x02\u09AB' +
    '\u09AC\x07j\x02\x02\u09AC\u09AD\x05\xFC\x7F\x02\u09AD\u09AE\x07k\x02\x02' +
    '\u09AE\u09B0\x03\x02\x02\x02\u09AF\u09AB\x03\x02\x02\x02\u09AF\u09B0\x03' +
    '\x02\x02\x02\u09B0\u09B1\x03\x02\x02\x02\u09B1\u09B5\x07\x05\x02\x02\u09B2' +
    '\u09B4\x05\x04\x03\x02\u09B3\u09B2\x03\x02\x02\x02\u09B4\u09B7\x03\x02' +
    '\x02\x02\u09B5\u09B3\x03\x02\x02\x02\u09B5\u09B6\x03\x02\x02\x02\u09B6' +
    '\xD1\x03\x02\x02\x02\u09B7\u09B5\x03\x02\x02\x02\u09B8\u09B9\x07\x04\x02' +
    '\x02\u09B9\u09BB\x07\x0E\x02\x02\u09BA\u09BC\x07i\x02\x02\u09BB\u09BA' +
    '\x03\x02\x02\x02\u09BC\u09BD\x03\x02\x02\x02\u09BD\u09BB\x03\x02\x02\x02' +
    '\u09BD\u09BE\x03\x02\x02\x02\u09BE\u09BF\x03\x02\x02\x02\u09BF\u09C0\x07' +
    '\x1B\x02\x02\u09C0\u09C4\x07\x05\x02\x02\u09C1\u09C3\x05\x04\x03\x02\u09C2' +
    '\u09C1\x03\x02\x02\x02\u09C3\u09C6\x03\x02\x02\x02\u09C4\u09C2\x03\x02' +
    '\x02\x02\u09C4\u09C5\x03\x02\x02\x02\u09C5\xD3\x03\x02\x02\x02\u09C6\u09C4' +
    '\x03\x02\x02\x02\u09C7\u09CB\x05\xD6l\x02\u09C8\u09CB\x05\xD0i\x02\u09C9' +
    '\u09CB\x05\xD2j\x02\u09CA\u09C7\x03\x02\x02\x02\u09CA\u09C8\x03\x02\x02' +
    '\x02\u09CA\u09C9\x03\x02\x02\x02\u09CB\xD5\x03\x02\x02\x02\u09CC\u09CE' +
    '\x05\xCEh\x02\u09CD\u09CC\x03\x02\x02\x02\u09CE\u09CF\x03\x02\x02\x02' +
    '\u09CF\u09CD\x03\x02\x02\x02\u09CF\u09D0\x03\x02\x02\x02\u09D0\u09D3\x03' +
    '\x02\x02\x02\u09D1\u09D4\x05\xD0i\x02\u09D2\u09D4\x05\xD2j\x02\u09D3\u09D1' +
    '\x03\x02\x02\x02\u09D3\u09D2\x03\x02\x02\x02\u09D3\u09D4\x03\x02\x02\x02' +
    '\u09D4\xD7\x03\x02\x02\x02\u09D5\u09D6\x07\x04\x02\x02\u09D6\u09D8\x07' +
    "\'\x02\x02\u09D7\u09D9\x07i\x02\x02\u09D8\u09D7\x03\x02\x02\x02\u09D9" +
    '\u09DA\x03\x02\x02\x02\u09DA\u09D8\x03\x02\x02\x02\u09DA\u09DB\x03\x02' +
    '\x02\x02\u09DB\u09DD\x03\x02\x02\x02\u09DC\u09DE\x07n\x02\x02\u09DD\u09DC' +
    '\x03\x02\x02\x02\u09DD\u09DE\x03\x02\x02\x02\u09DE\u09DF\x03\x02\x02\x02' +
    '\u09DF\u09E0\x07,\x02\x02\u09E0\u09E1\x07j\x02\x02\u09E1\u09E2\x05\xFE' +
    '\x80\x02\u09E2\u09E3\x07k\x02\x02\u09E3\u09E7\x07\x05\x02\x02\u09E4\u09E6' +
    '\x05\x04\x03\x02\u09E5\u09E4\x03\x02\x02\x02\u09E6\u09E9\x03\x02\x02\x02' +
    '\u09E7\u09E5\x03\x02\x02\x02\u09E7\u09E8\x03\x02\x02\x02\u09E8\u09EB\x03' +
    '\x02\x02\x02\u09E9\u09E7\x03\x02\x02\x02\u09EA\u09EC\x05\xE2r\x02\u09EB' +
    '\u09EA\x03\x02\x02\x02\u09EB\u09EC\x03\x02\x02\x02\u09EC\u09ED\x03\x02' +
    "\x02\x02\u09ED\u09EE\x07\x04\x02\x02\u09EE\u09EF\x07\'\x02\x02\u09EF\u09F0" +
    '\x07i\x02\x02\u09F0\u09F1\x07\x1C\x02\x02\u09F1\u09F2\x07\x05\x02\x02' +
    '\u09F2\xD9\x03\x02\x02\x02\u09F3\u09F4\x07\x04\x02\x02\u09F4\u09F6\x07' +
    "\'\x02\x02\u09F5\u09F7\x07i\x02\x02\u09F6\u09F5\x03\x02\x02\x02\u09F7" +
    '\u09F8\x03\x02\x02\x02\u09F8\u09F6\x03\x02\x02\x02\u09F8\u09F9\x03\x02' +
    '\x02\x02\u09F9\u09FA\x03\x02\x02\x02\u09FA\u09FF\x07\x1A\x02\x02\u09FB' +
    '\u09FC\x07j\x02\x02\u09FC\u09FD\x05\xFC\x7F\x02\u09FD\u09FE\x07k\x02\x02' +
    '\u09FE\u0A00\x03\x02\x02\x02\u09FF\u09FB\x03\x02\x02\x02\u09FF\u0A00\x03' +
    '\x02\x02\x02\u0A00\u0A01\x03\x02\x02\x02\u0A01\u0A05\x07\x05\x02\x02\u0A02' +
    '\u0A04\x05\x04\x03\x02\u0A03\u0A02\x03\x02\x02\x02\u0A04\u0A07\x03\x02' +
    '\x02\x02\u0A05\u0A03\x03\x02\x02\x02\u0A05\u0A06\x03\x02\x02\x02\u0A06' +
    '\u0A08\x03\x02\x02\x02\u0A07\u0A05\x03\x02\x02\x02\u0A08\u0A09\x07\x04' +
    "\x02\x02\u0A09\u0A0A\x07\'\x02\x02\u0A0A\u0A0B\x07i\x02\x02\u0A0B\u0A0C" +
    '\x07\x1C\x02\x02\u0A0C\u0A0D\x07\x05\x02\x02\u0A0D\xDB\x03\x02\x02\x02' +
    "\u0A0E\u0A0F\x07\x04\x02\x02\u0A0F\u0A11\x07\'\x02\x02\u0A10\u0A12\x07" +
    'i\x02\x02\u0A11\u0A10\x03\x02\x02\x02\u0A12\u0A13\x03\x02\x02\x02\u0A13' +
    '\u0A11\x03\x02\x02\x02\u0A13\u0A14\x03\x02\x02\x02\u0A14\u0A15\x03\x02' +
    '\x02\x02\u0A15\u0A16\x07\x1B\x02\x02\u0A16\u0A18\x07i\x02\x02\u0A17\u0A19' +
    '\x07n\x02\x02\u0A18\u0A17\x03\x02\x02\x02\u0A18\u0A19\x03\x02\x02\x02' +
    '\u0A19\u0A1A\x03\x02\x02\x02\u0A1A\u0A1B\x07,\x02\x02\u0A1B\u0A1C\x07' +
    'j\x02\x02\u0A1C\u0A1D\x05\xFE\x80\x02\u0A1D\u0A1E\x07k\x02\x02\u0A1E\u0A22' +
    '\x07\x05\x02\x02\u0A1F\u0A21\x05\x04\x03\x02\u0A20\u0A1F\x03\x02\x02\x02' +
    '\u0A21\u0A24\x03\x02\x02\x02\u0A22\u0A20\x03\x02\x02\x02\u0A22\u0A23\x03' +
    '\x02\x02\x02\u0A23\xDD\x03\x02\x02\x02\u0A24\u0A22\x03\x02\x02\x02\u0A25' +
    "\u0A26\x07\x04\x02\x02\u0A26\u0A28\x07\'\x02\x02\u0A27\u0A29\x07i\x02" +
    '\x02\u0A28\u0A27\x03\x02\x02\x02\u0A29\u0A2A\x03\x02\x02\x02\u0A2A\u0A28' +
    '\x03\x02\x02\x02\u0A2A\u0A2B\x03\x02\x02\x02\u0A2B\u0A2C\x03\x02\x02\x02' +
    '\u0A2C\u0A2D\x07\x1B\x02\x02\u0A2D\u0A2E\x07i\x02\x02\u0A2E\u0A33\x07' +
    '\x1A\x02\x02\u0A2F\u0A30\x07j\x02\x02\u0A30\u0A31\x05\xFC\x7F\x02\u0A31' +
    '\u0A32\x07k\x02\x02\u0A32\u0A34\x03\x02\x02\x02\u0A33\u0A2F\x03\x02\x02' +
    '\x02\u0A33\u0A34\x03\x02\x02\x02\u0A34\u0A35\x03\x02\x02\x02\u0A35\u0A39' +
    '\x07\x05\x02\x02\u0A36\u0A38\x05\x04\x03\x02\u0A37\u0A36\x03\x02\x02\x02' +
    '\u0A38\u0A3B\x03\x02\x02\x02\u0A39\u0A37\x03\x02\x02\x02\u0A39\u0A3A\x03' +
    '\x02\x02\x02\u0A3A\xDF\x03\x02\x02\x02\u0A3B\u0A39\x03\x02\x02\x02\u0A3C' +
    "\u0A3D\x07\x04\x02\x02\u0A3D\u0A3F\x07\'\x02\x02\u0A3E\u0A40\x07i\x02" +
    '\x02\u0A3F\u0A3E\x03\x02\x02\x02\u0A40\u0A41\x03\x02\x02\x02\u0A41\u0A3F' +
    '\x03\x02\x02\x02\u0A41\u0A42\x03\x02\x02\x02\u0A42\u0A43\x03\x02\x02\x02' +
    '\u0A43\u0A44\x07\x1B\x02\x02\u0A44\u0A48\x07\x05\x02\x02\u0A45\u0A47\x05' +
    '\x04\x03\x02\u0A46\u0A45\x03\x02\x02\x02\u0A47\u0A4A\x03\x02\x02\x02\u0A48' +
    '\u0A46\x03\x02\x02\x02\u0A48\u0A49\x03\x02\x02\x02\u0A49\xE1\x03\x02\x02' +
    '\x02\u0A4A\u0A48\x03\x02\x02\x02\u0A4B\u0A4F\x05\xE4s\x02\u0A4C\u0A4F' +
    '\x05\xDEp\x02\u0A4D\u0A4F\x05\xE0q\x02\u0A4E\u0A4B\x03\x02\x02\x02\u0A4E' +
    '\u0A4C\x03\x02\x02\x02\u0A4E\u0A4D\x03\x02\x02\x02\u0A4F\xE3\x03\x02\x02' +
    '\x02\u0A50\u0A52\x05\xDCo\x02\u0A51\u0A50\x03\x02\x02\x02\u0A52\u0A53' +
    '\x03\x02\x02\x02\u0A53\u0A51\x03\x02\x02\x02\u0A53\u0A54\x03\x02\x02\x02' +
    '\u0A54\u0A57\x03\x02\x02\x02\u0A55\u0A58\x05\xDEp\x02\u0A56\u0A58\x05' +
    '\xE0q\x02\u0A57\u0A55\x03\x02\x02\x02\u0A57\u0A56\x03\x02\x02\x02\u0A57' +
    '\u0A58\x03\x02\x02\x02\u0A58\xE5\x03\x02\x02\x02\u0A59\u0A5A\x07\x04\x02' +
    '\x02\u0A5A\u0A5C\x07\r\x02\x02\u0A5B\u0A5D\x07i\x02\x02\u0A5C\u0A5B\x03' +
    '\x02\x02\x02\u0A5D\u0A5E\x03\x02\x02\x02\u0A5E\u0A5C\x03\x02\x02\x02\u0A5E' +
    '\u0A5F\x03\x02\x02\x02\u0A5F\u0A60\x03\x02\x02\x02\u0A60\u0A65\x07\x1A' +
    '\x02\x02\u0A61\u0A62\x07j\x02\x02\u0A62\u0A63\x05\xFC\x7F\x02\u0A63\u0A64' +
    '\x07k\x02\x02\u0A64\u0A66\x03\x02\x02\x02\u0A65\u0A61\x03\x02\x02\x02' +
    '\u0A65\u0A66\x03\x02\x02\x02\u0A66\u0A67\x03\x02\x02\x02\u0A67\u0A6B\x07' +
    '\x05\x02\x02\u0A68\u0A6A\x05\x04\x03\x02\u0A69\u0A68\x03\x02\x02\x02\u0A6A' +
    '\u0A6D\x03\x02\x02\x02\u0A6B\u0A69\x03\x02\x02\x02\u0A6B\u0A6C\x03\x02' +
    '\x02\x02\u0A6C\u0A6E\x03\x02\x02\x02\u0A6D\u0A6B\x03\x02\x02\x02\u0A6E' +
    '\u0A6F\x07\x04\x02\x02\u0A6F\u0A70\x07\r\x02\x02\u0A70\u0A71\x07i\x02' +
    '\x02\u0A71\u0A72\x07\x1C\x02\x02\u0A72\u0A73\x07\x05\x02\x02\u0A73\xE7' +
    '\x03\x02\x02\x02\u0A74\u0A75\x07\x04\x02\x02\u0A75\u0A77\x07\x17\x02\x02' +
    '\u0A76\u0A78\x07i\x02\x02\u0A77\u0A76\x03\x02\x02\x02\u0A78\u0A79\x03' +
    '\x02\x02\x02\u0A79\u0A77\x03\x02\x02\x02\u0A79\u0A7A\x03\x02\x02\x02\u0A7A' +
    '\u0A7B\x03\x02\x02\x02\u0A7B\u0A80\x07\x1A\x02\x02\u0A7C\u0A7D\x07j\x02' +
    '\x02\u0A7D\u0A7E\x05\xFC\x7F\x02\u0A7E\u0A7F\x07k\x02\x02\u0A7F\u0A81' +
    '\x03\x02\x02\x02\u0A80\u0A7C\x03\x02\x02\x02\u0A80\u0A81\x03\x02\x02\x02' +
    '\u0A81\u0A82\x03\x02\x02\x02\u0A82\u0A86\x07\x05\x02\x02\u0A83\u0A85\x05' +
    '\x04\x03\x02\u0A84\u0A83\x03\x02\x02\x02\u0A85\u0A88\x03\x02\x02\x02\u0A86' +
    '\u0A84\x03\x02\x02\x02\u0A86\u0A87\x03\x02\x02\x02\u0A87\u0A89\x03\x02' +
    '\x02\x02\u0A88\u0A86\x03\x02\x02\x02\u0A89\u0A8A\x07\x04\x02\x02\u0A8A' +
    '\u0A8B\x07\x17\x02\x02\u0A8B\u0A8C\x07i\x02\x02\u0A8C\u0A8D\x07\x1C\x02' +
    '\x02\u0A8D\u0A8E\x07\x05\x02\x02\u0A8E\xE9\x03\x02\x02\x02\u0A8F\u0A90' +
    '\x07\x04\x02\x02\u0A90\u0A92\x07G\x02\x02\u0A91\u0A93\x07i\x02\x02\u0A92' +
    '\u0A91\x03\x02\x02\x02\u0A93\u0A94\x03\x02\x02\x02\u0A94\u0A92\x03\x02' +
    '\x02\x02\u0A94\u0A95\x03\x02\x02\x02\u0A95\u0A96\x03\x02\x02\x02\u0A96' +
    '\u0A9B\x07\x1A\x02\x02\u0A97\u0A98\x07j\x02\x02\u0A98\u0A99\x05\xFC\x7F' +
    '\x02\u0A99\u0A9A\x07k\x02\x02\u0A9A\u0A9C\x03\x02\x02\x02\u0A9B\u0A97' +
    '\x03\x02\x02\x02\u0A9B\u0A9C\x03\x02\x02\x02\u0A9C\u0A9D\x03\x02\x02\x02' +
    '\u0A9D\u0AA1\x07\x05\x02\x02\u0A9E\u0AA0\x05\x04\x03\x02\u0A9F\u0A9E\x03' +
    '\x02\x02\x02\u0AA0\u0AA3\x03\x02\x02\x02\u0AA1\u0A9F\x03\x02\x02\x02\u0AA1' +
    '\u0AA2\x03\x02\x02\x02\u0AA2\u0AA4\x03\x02\x02\x02\u0AA3\u0AA1\x03\x02' +
    '\x02\x02\u0AA4\u0AA5\x07\x04\x02\x02\u0AA5\u0AA6\x07G\x02\x02\u0AA6\u0AA7' +
    '\x07i\x02\x02\u0AA7\u0AA8\x07\x1C\x02\x02\u0AA8\u0AA9\x07\x05\x02\x02' +
    '\u0AA9\xEB\x03\x02\x02\x02\u0AAA\u0AAE\x05\xEEx\x02\u0AAB\u0AAE\x05\xF2' +
    'z\x02\u0AAC\u0AAE\x05\xF6|\x02\u0AAD\u0AAA\x03\x02\x02\x02\u0AAD\u0AAB' +
    '\x03\x02\x02\x02\u0AAD\u0AAC\x03\x02\x02\x02\u0AAE\xED\x03\x02\x02\x02' +
    '\u0AAF\u0AB0\x07\x04\x02\x02\u0AB0\u0AB4\x05\u0116\x8C\x02\u0AB1\u0AB3' +
    '\x07i\x02\x02\u0AB2\u0AB1\x03\x02\x02\x02\u0AB3\u0AB6\x03\x02\x02\x02' +
    '\u0AB4\u0AB2\x03\x02\x02\x02\u0AB4\u0AB5\x03\x02\x02\x02\u0AB5\u0ABA\x03' +
    '\x02\x02\x02\u0AB6\u0AB4\x03\x02\x02\x02\u0AB7\u0AB9\x05\xF0y\x02\u0AB8' +
    '\u0AB7\x03\x02\x02\x02\u0AB9\u0ABC\x03\x02\x02\x02\u0ABA\u0AB8\x03\x02' +
    '\x02\x02\u0ABA\u0ABB\x03\x02\x02\x02\u0ABB\u0ABE\x03\x02\x02\x02\u0ABC' +
    '\u0ABA\x03\x02\x02\x02\u0ABD\u0ABF\x05\xF8}\x02\u0ABE\u0ABD\x03\x02\x02' +
    '\x02\u0ABE\u0ABF\x03\x02\x02\x02\u0ABF\u0AC0\x03\x02\x02\x02\u0AC0\u0AC1' +
    '\x07\x05\x02\x02\u0AC1\xEF\x03\x02\x02\x02\u0AC2\u0AC3\x07i\x02\x02\u0AC3' +
    '\u0AC4\x05\u0126\x94\x02\u0AC4\xF1\x03\x02\x02\x02\u0AC5\u0AC6\x07\x04' +
    '\x02\x02\u0AC6\u0ACA\x05\u0118\x8D\x02\u0AC7\u0AC9\x07i\x02\x02\u0AC8' +
    '\u0AC7\x03\x02\x02\x02\u0AC9\u0ACC\x03\x02\x02\x02\u0ACA\u0AC8\x03\x02' +
    '\x02\x02\u0ACA\u0ACB\x03\x02\x02\x02\u0ACB\u0AD0\x03\x02\x02\x02\u0ACC' +
    '\u0ACA\x03\x02\x02\x02\u0ACD\u0ACF\x05\xF4{\x02\u0ACE\u0ACD\x03\x02\x02' +
    '\x02\u0ACF\u0AD2\x03\x02\x02\x02\u0AD0\u0ACE\x03\x02\x02\x02\u0AD0\u0AD1' +
    '\x03\x02\x02\x02\u0AD1\u0AD4\x03\x02\x02\x02\u0AD2\u0AD0\x03\x02\x02\x02' +
    '\u0AD3\u0AD5\x05\xF8}\x02\u0AD4\u0AD3\x03\x02\x02\x02\u0AD4\u0AD5\x03' +
    '\x02\x02\x02\u0AD5\u0AD6\x03\x02\x02';
  private static readonly _serializedATNSegment5: string =
    '\x02\u0AD6\u0AD7\x07\x05\x02\x02\u0AD7\xF3\x03\x02\x02\x02\u0AD8\u0AD9' +
    '\x07i\x02\x02\u0AD9\u0ADA\x05\u0128\x95\x02\u0ADA\xF5\x03\x02\x02\x02' +
    '\u0ADB\u0ADC\x07\x04\x02\x02\u0ADC\u0ADE\x05\u011A\x8E\x02\u0ADD\u0ADF' +
    '\x07i\x02\x02\u0ADE\u0ADD\x03\x02\x02\x02\u0ADF\u0AE0\x03\x02\x02\x02' +
    '\u0AE0\u0ADE\x03\x02\x02\x02\u0AE0\u0AE1\x03\x02\x02\x02\u0AE1\u0AE2\x03' +
    '\x02\x02\x02\u0AE2\u0AE4\x07>\x02\x02\u0AE3\u0AE5\x05\xF8}\x02\u0AE4\u0AE3' +
    '\x03\x02\x02\x02\u0AE4\u0AE5\x03\x02\x02\x02\u0AE5\u0AE6\x03\x02\x02\x02' +
    '\u0AE6\u0AE7\x07\x05\x02\x02\u0AE7\xF7\x03\x02\x02\x02\u0AE8\u0AE9\x07' +
    'i\x02\x02\u0AE9\u0AEA\x07r\x02\x02\u0AEA\u0AF3\x05\u011C\x8F\x02\u0AEB' +
    '\u0AED\x07y\x02\x02\u0AEC\u0AEE\x05\u011E\x90\x02\u0AED\u0AEC\x03\x02' +
    '\x02\x02\u0AED\u0AEE\x03\x02\x02\x02\u0AEE\u0AF1\x03\x02\x02\x02\u0AEF' +
    '\u0AF0\x07|\x02\x02\u0AF0\u0AF2\x05\u0120\x91\x02\u0AF1\u0AEF\x03\x02' +
    '\x02\x02\u0AF1\u0AF2\x03\x02\x02\x02\u0AF2\u0AF4\x03\x02\x02\x02\u0AF3' +
    '\u0AEB\x03\x02\x02\x02\u0AF3\u0AF4\x03\x02\x02\x02\u0AF4\u0AF5\x03\x02' +
    '\x02\x02\u0AF5\u0AF6\t\x02\x02\x02\u0AF6\xF9\x03\x02\x02\x02\u0AF7\u0AFB' +
    '\x05\u0116\x8C\x02\u0AF8\u0AFB\x05\u0118\x8D\x02\u0AF9\u0AFB\x05\u011A' +
    '\x8E\x02\u0AFA\u0AF7\x03\x02\x02\x02\u0AFA\u0AF8\x03\x02\x02\x02\u0AFA' +
    '\u0AF9\x03\x02\x02\x02\u0AFB\xFB\x03\x02\x02\x02\u0AFC\u0AFD\x05\u0100' +
    '\x81\x02\u0AFD\xFD\x03\x02\x02\x02\u0AFE\u0AFF\x05\u0100\x81\x02\u0AFF' +
    '\xFF\x03\x02\x02\x02\u0B00\u0B09\x05\u010E\x88\x02\u0B01\u0B09\x05\u0104' +
    '\x83\x02\u0B02\u0B03\x05\u0102\x82\x02\u0B03\u0B04\x05\u010A\x86\x02\u0B04' +
    '\u0B09\x03\x02\x02\x02\u0B05\u0B06\x05\u0102\x82\x02\u0B06\u0B07\x05\u010C' +
    '\x87\x02\u0B07\u0B09\x03\x02\x02\x02\u0B08\u0B00\x03\x02\x02\x02\u0B08' +
    '\u0B01\x03\x02\x02\x02\u0B08\u0B02\x03\x02\x02\x02\u0B08\u0B05\x03\x02' +
    '\x02\x02\u0B09\u0101\x03\x02\x02\x02\u0B0A\u0B0D\x05\u010E\x88\x02\u0B0B' +
    '\u0B0D\x05\u0104\x83\x02\u0B0C\u0B0A\x03\x02\x02\x02\u0B0C\u0B0B\x03\x02' +
    '\x02\x02\u0B0D\u0103\x03\x02\x02\x02\u0B0E\u0B11\x05\u0106\x84\x02\u0B0F' +
    '\u0B11\x05\u0108\x85\x02\u0B10\u0B0E\x03\x02\x02\x02\u0B10\u0B0F\x03\x02' +
    '\x02\x02\u0B11\u0105\x03\x02\x02\x02\u0B12\u0B13\x07n\x02\x02\u0B13\u0B14' +
    '\x07j\x02\x02\u0B14\u0B15\x05\u0100\x81\x02\u0B15\u0B16\x07k\x02\x02\u0B16' +
    '\u0107\x03\x02\x02\x02\u0B17\u0B18\x07j\x02\x02\u0B18\u0B19\x05\u0100' +
    '\x81\x02\u0B19\u0B1A\x07k\x02\x02\u0B1A\u0109\x03\x02\x02\x02\u0B1B\u0B1C' +
    '\x07l\x02\x02\u0B1C\u0B1D\x05\u0100\x81\x02\u0B1D\u010B\x03\x02\x02\x02' +
    '\u0B1E\u0B1F\x07m\x02\x02\u0B1F\u0B20\x05\u0100\x81\x02\u0B20\u010D\x03' +
    '\x02\x02\x02\u0B21\u0B24\x05\u0110\x89\x02\u0B22\u0B24\x05\u0112\x8A\x02' +
    '\u0B23\u0B21\x03\x02\x02\x02\u0B23\u0B22\x03\x02\x02\x02\u0B24\u010F\x03' +
    '\x02\x02\x02\u0B25\u0B26\x07n\x02\x02\u0B26\u0B27\x05\u0112\x8A\x02\u0B27' +
    '\u0111\x03\x02\x02\x02\u0B28\u0B2C\x05\u012A\x96\x02\u0B29\u0B2C\x05\u012C' +
    '\x97\x02\u0B2A\u0B2C\x05\u012E\x98\x02\u0B2B\u0B28\x03\x02\x02\x02\u0B2B' +
    '\u0B29\x03\x02\x02\x02\u0B2B\u0B2A\x03\x02\x02\x02\u0B2C\u0113\x03\x02' +
    '\x02\x02\u0B2D\u0B2E\x07\x03\x02\x02\u0B2E\u0115\x03\x02\x02\x02\u0B2F' +
    '\u0B30\t\x03\x02\x02\u0B30\u0117\x03\x02\x02\x02\u0B31\u0B32\t\x04\x02' +
    '\x02\u0B32\u0119\x03\x02\x02\x02\u0B33\u0B34\t\x05\x02\x02\u0B34\u011B' +
    '\x03\x02\x02\x02\u0B35\u0B3F\x07w\x02\x02\u0B36\u0B37\x07w\x02\x02\u0B37' +
    '\u0B3F\x05\u011C\x8F\x02\u0B38\u0B39\x07x\x02\x02\u0B39\u0B3A\x05\u011C' +
    '\x8F\x02\u0B3A\u0B3C\x07v\x02\x02\u0B3B\u0B3D\x05\u011C\x8F\x02\u0B3C' +
    '\u0B3B\x03\x02\x02\x02\u0B3C\u0B3D\x03\x02\x02\x02\u0B3D\u0B3F\x03\x02' +
    '\x02\x02\u0B3E\u0B35\x03\x02\x02\x02\u0B3E\u0B36\x03\x02\x02\x02\u0B3E' +
    '\u0B38\x03\x02\x02\x02\u0B3F\u011D\x03\x02\x02\x02\u0B40\u0B41\x07{\x02' +
    '\x02\u0B41\u011F\x03\x02\x02\x02\u0B42\u0B44\x07~\x02\x02\u0B43\u0B42' +
    '\x03\x02\x02\x02\u0B43\u0B44\x03\x02\x02\x02\u0B44\u0121\x03\x02\x02\x02' +
    '\u0B45\u0B4F\x07t\x02\x02\u0B46\u0B47\x07t\x02\x02\u0B47\u0B4F\x05\u0122' +
    '\x92\x02\u0B48\u0B49\x07u\x02\x02\u0B49\u0B4A\x05\u0122\x92\x02\u0B4A' +
    '\u0B4C\x07s\x02\x02\u0B4B\u0B4D\x05\u0122\x92\x02\u0B4C\u0B4B\x03\x02' +
    '\x02\x02\u0B4C\u0B4D\x03\x02\x02\x02\u0B4D\u0B4F\x03\x02\x02\x02\u0B4E' +
    '\u0B45\x03\x02\x02\x02\u0B4E\u0B46\x03\x02\x02\x02\u0B4E\u0B48\x03\x02' +
    '\x02\x02\u0B4F\u0123\x03\x02\x02\x02\u0B50\u0B51\x07o\x02\x02\u0B51\u0125' +
    '\x03\x02\x02\x02\u0B52\u0B53\t\x06\x02\x02\u0B53\u0127\x03\x02\x02\x02' +
    '\u0B54\u0B55\t\x07\x02\x02\u0B55\u0129\x03\x02\x02\x02\u0B56\u0B57\t\b' +
    '\x02\x02\u0B57\u012B\x03\x02\x02\x02\u0B58\u0B59\t\t\x02\x02\u0B59\u012D' +
    '\x03\x02\x02\x02\u0B5A\u0B5B\t\n\x02\x02\u0B5B\u012F\x03\x02\x02\x02\u015B' +
    '\u0133\u013B\u0166\u016D\u0170\u017A\u017E\u018B\u018E\u0198\u019C\u01A9' +
    '\u01AC\u01B5\u01B9\u01C6\u01C9\u01D2\u01D6\u01E3\u01E6\u01F0\u01F4\u0201' +
    '\u0208\u020E\u021C\u0221\u022B\u0233\u0238\u0242\u024A\u024F\u0258\u0260' +
    '\u0265\u026E\u0276\u027B\u0285\u028D\u0296\u029C\u02A4\u02AB\u02B1\u02B6' +
    '\u02BA\u02C1\u02C8\u02CB\u02D5\u02D9\u02E6\u02E9\u02F3\u02F7\u0304\u0307' +
    '\u0310\u0314\u0321\u0324\u032D\u0331\u033E\u0341\u034B\u034F\u035C\u0363' +
    '\u0369\u0377\u037C\u0386\u038E\u0393\u039D\u03A5\u03AA\u03B3\u03BB\u03C0' +
    '\u03C9\u03D1\u03D6\u03E0\u03E8\u03F1\u03F7\u03FF\u0406\u040C\u0411\u0415' +
    '\u041C\u0423\u0426\u0430\u0434\u0441\u0444\u044E\u0452\u045F\u0462\u046B' +
    '\u046F\u047C\u047F\u0488\u048C\u0499\u049C\u04A6\u04AA\u04B7\u04BE\u04C4' +
    '\u04D2\u04D9\u04DF\u04ED\u04F2\u04FC\u0504\u0509\u0513\u051B\u0520\u0529' +
    '\u0531\u0536\u053F\u0547\u054C\u0556\u055E\u0567\u056D\u0575\u057E\u0584' +
    '\u058C\u0593\u059A\u059F\u05A4\u05AB\u05B2\u05B5\u05BF\u05C3\u05D0\u05D3' +
    '\u05DD\u05E1\u05EE\u05F1\u05FA\u05FE\u060B\u060E\u0618\u061C\u0629\u0630' +
    '\u0636\u0644\u064B\u0651\u065F\u0664\u066E\u0676\u067B\u0685\u068D\u0692' +
    '\u069B\u06A3\u06A8\u06B2\u06BA\u06C3\u06C9\u06D1\u06DA\u06E0\u06E8\u06EF' +
    '\u06F6\u06FB\u0700\u0706\u070D\u0710\u071A\u071E\u072B\u072E\u0737\u073B' +
    '\u0748\u074B\u0755\u0759\u0766\u076B\u0775\u077D\u0782\u078B\u0793\u0798' +
    '\u07A2\u07AA\u07B1\u07B6\u07BB\u07BE\u07C3\u07CA\u07CD\u07D7\u07DB\u07E8' +
    '\u07EF\u07F5\u0803\u0808\u0812\u081A\u0823\u0829\u0831\u0838\u083E\u0843' +
    '\u0847\u084E\u0851\u085B\u085F\u086C\u0873\u0879\u0887\u088C\u0896\u089E' +
    '\u08A7\u08AD\u08B5\u08BC\u08C2\u08C7\u08CB\u08D2\u08D5\u08DF\u08E3\u08F0' +
    '\u08F7\u08FD\u090B\u0910\u091A\u0922\u092B\u0931\u0939\u0940\u0946\u094B' +
    '\u094F\u0956\u0959\u0963\u0967\u0974\u097B\u0981\u098F\u0994\u099E\u09A6' +
    '\u09AF\u09B5\u09BD\u09C4\u09CA\u09CF\u09D3\u09DA\u09DD\u09E7\u09EB\u09F8' +
    '\u09FF\u0A05\u0A13\u0A18\u0A22\u0A2A\u0A33\u0A39\u0A41\u0A48\u0A4E\u0A53' +
    '\u0A57\u0A5E\u0A65\u0A6B\u0A79\u0A80\u0A86\u0A94\u0A9B\u0AA1\u0AAD\u0AB4' +
    '\u0ABA\u0ABE\u0ACA\u0AD0\u0AD4\u0AE0\u0AE4\u0AED\u0AF1\u0AF3\u0AFA\u0B08' +
    '\u0B0C\u0B10\u0B23\u0B2B\u0B3C\u0B3E\u0B43\u0B4C\u0B4E';
  public static readonly _serializedATN: string = Utils.join(
    [
      TemplateParser._serializedATNSegment0,
      TemplateParser._serializedATNSegment1,
      TemplateParser._serializedATNSegment2,
      TemplateParser._serializedATNSegment3,
      TemplateParser._serializedATNSegment4,
      TemplateParser._serializedATNSegment5,
    ],
    '',
  );
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!TemplateParser.__ATN) {
      TemplateParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(TemplateParser._serializedATN),
      );
    }

    return TemplateParser.__ATN;
  }
}

export class TemplateContext extends ParserRuleContext {
  public EOF(): TerminalNode {
    return this.getToken(TemplateParser.EOF, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_template;
  }
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
  public textContent(): TextContentContext | undefined {
    return this.tryGetRuleContext(0, TextContentContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_statement;
  }
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
  public tableFindsStmt(): TableFindsStmtContext | undefined {
    return this.tryGetRuleContext(0, TableFindsStmtContext);
  }
  public tableMatchStmt(): TableMatchStmtContext | undefined {
    return this.tryGetRuleContext(0, TableMatchStmtContext);
  }
  public tableContainsStmt(): TableContainsStmtContext | undefined {
    return this.tryGetRuleContext(0, TableContainsStmtContext);
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
  public inheritedFindsStmt(): InheritedFindsStmtContext | undefined {
    return this.tryGetRuleContext(0, InheritedFindsStmtContext);
  }
  public inheritedMatchStmt(): InheritedMatchStmtContext | undefined {
    return this.tryGetRuleContext(0, InheritedMatchStmtContext);
  }
  public inheritedContainsStmt(): InheritedContainsStmtContext | undefined {
    return this.tryGetRuleContext(0, InheritedContainsStmtContext);
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
  public referenceFindsStmt(): ReferenceFindsStmtContext | undefined {
    return this.tryGetRuleContext(0, ReferenceFindsStmtContext);
  }
  public referenceMatchStmt(): ReferenceMatchStmtContext | undefined {
    return this.tryGetRuleContext(0, ReferenceMatchStmtContext);
  }
  public referenceContainsStmt(): ReferenceContainsStmtContext | undefined {
    return this.tryGetRuleContext(0, ReferenceContainsStmtContext);
  }
  public referenceEachStmt(): ReferenceEachStmtContext | undefined {
    return this.tryGetRuleContext(0, ReferenceEachStmtContext);
  }
  public referenceReverseEachStmt():
    | ReferenceReverseEachStmtContext
    | undefined {
    return this.tryGetRuleContext(0, ReferenceReverseEachStmtContext);
  }
  public fieldIfStmt(): FieldIfStmtContext | undefined {
    return this.tryGetRuleContext(0, FieldIfStmtContext);
  }
  public fieldExistsStmt(): FieldExistsStmtContext | undefined {
    return this.tryGetRuleContext(0, FieldExistsStmtContext);
  }
  public fieldMatchStmt(): FieldMatchStmtContext | undefined {
    return this.tryGetRuleContext(0, FieldMatchStmtContext);
  }
  public fieldContainsStmt(): FieldContainsStmtContext | undefined {
    return this.tryGetRuleContext(0, FieldContainsStmtContext);
  }
  public fieldEachStmt(): FieldEachStmtContext | undefined {
    return this.tryGetRuleContext(0, FieldEachStmtContext);
  }
  public fieldReverseEachStmt(): FieldReverseEachStmtContext | undefined {
    return this.tryGetRuleContext(0, FieldReverseEachStmtContext);
  }
  public descriptorIfStmt(): DescriptorIfStmtContext | undefined {
    return this.tryGetRuleContext(0, DescriptorIfStmtContext);
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
  public optionEachStmt(): OptionEachStmtContext | undefined {
    return this.tryGetRuleContext(0, OptionEachStmtContext);
  }
  public commentEachStmt(): CommentEachStmtContext | undefined {
    return this.tryGetRuleContext(0, CommentEachStmtContext);
  }
  public descriptionEachStmt(): DescriptionEachStmtContext | undefined {
    return this.tryGetRuleContext(0, DescriptionEachStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_block;
  }
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableIfStmt;
  }
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
  public K_EXISTS(): TerminalNode {
    return this.getToken(TemplateParser.K_EXISTS, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableExistsStmt;
  }
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

export class TableFindsStmtContext extends ParserRuleContext {
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
  public FINDS_OPEN(): TerminalNode {
    return this.getToken(TemplateParser.FINDS_OPEN, 0);
  }
  public regex(): RegexContext {
    return this.getRuleContext(0, RegexContext);
  }
  public REGEX_CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.REGEX_CLOSE, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableFindsStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterTableFindsStmt) {
      listener.enterTableFindsStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitTableFindsStmt) {
      listener.exitTableFindsStmt(this);
    }
  }
}

export class TableMatchStmtContext extends ParserRuleContext {
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
  public MATCH_OPEN(): TerminalNode {
    return this.getToken(TemplateParser.MATCH_OPEN, 0);
  }
  public regex(): RegexContext {
    return this.getRuleContext(0, RegexContext);
  }
  public REGEX_CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.REGEX_CLOSE, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableMatchStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterTableMatchStmt) {
      listener.enterTableMatchStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitTableMatchStmt) {
      listener.exitTableMatchStmt(this);
    }
  }
}

export class TableContainsStmtContext extends ParserRuleContext {
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
  public K_CONTAINS(): TerminalNode {
    return this.getToken(TemplateParser.K_CONTAINS, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public word(): WordContext {
    return this.getRuleContext(0, WordContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableContainsStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterTableContainsStmt) {
      listener.enterTableContainsStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitTableContainsStmt) {
      listener.exitTableContainsStmt(this);
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
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableEachStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_TABLE(): TerminalNode {
    return this.getToken(TemplateParser.K_TABLE, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableElseIfStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_TABLE(): TerminalNode {
    return this.getToken(TemplateParser.K_TABLE, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_EXISTS(): TerminalNode {
    return this.getToken(TemplateParser.K_EXISTS, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableElseExistsStmt;
  }
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

export class TableElseFindsStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_TABLE(): TerminalNode {
    return this.getToken(TemplateParser.K_TABLE, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public FINDS_OPEN(): TerminalNode {
    return this.getToken(TemplateParser.FINDS_OPEN, 0);
  }
  public regex(): RegexContext {
    return this.getRuleContext(0, RegexContext);
  }
  public REGEX_CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.REGEX_CLOSE, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableElseFindsStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterTableElseFindsStmt) {
      listener.enterTableElseFindsStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitTableElseFindsStmt) {
      listener.exitTableElseFindsStmt(this);
    }
  }
}

export class TableElseMatchStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_TABLE(): TerminalNode {
    return this.getToken(TemplateParser.K_TABLE, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public MATCH_OPEN(): TerminalNode {
    return this.getToken(TemplateParser.MATCH_OPEN, 0);
  }
  public regex(): RegexContext {
    return this.getRuleContext(0, RegexContext);
  }
  public REGEX_CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.REGEX_CLOSE, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableElseMatchStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterTableElseMatchStmt) {
      listener.enterTableElseMatchStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitTableElseMatchStmt) {
      listener.exitTableElseMatchStmt(this);
    }
  }
}

export class TableElseContainsStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_TABLE(): TerminalNode {
    return this.getToken(TemplateParser.K_TABLE, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_CONTAINS(): TerminalNode {
    return this.getToken(TemplateParser.K_CONTAINS, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public word(): WordContext {
    return this.getRuleContext(0, WordContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableElseContainsStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterTableElseContainsStmt) {
      listener.enterTableElseContainsStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitTableElseContainsStmt) {
      listener.exitTableElseContainsStmt(this);
    }
  }
}

export class TableElseEachStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_TABLE(): TerminalNode {
    return this.getToken(TemplateParser.K_TABLE, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableElseEachStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_TABLE(): TerminalNode {
    return this.getToken(TemplateParser.K_TABLE, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableElseEndStmt;
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableElseStmt;
  }
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
  public tableElseCondStmt(
    i?: number,
  ): TableElseCondStmtContext | TableElseCondStmtContext[] {
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableElseCondEndStmt;
  }
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
  public tableElseFindsStmt(): TableElseFindsStmtContext | undefined {
    return this.tryGetRuleContext(0, TableElseFindsStmtContext);
  }
  public tableElseMatchStmt(): TableElseMatchStmtContext | undefined {
    return this.tryGetRuleContext(0, TableElseMatchStmtContext);
  }
  public tableElseContainsStmt(): TableElseContainsStmtContext | undefined {
    return this.tryGetRuleContext(0, TableElseContainsStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableElseCondStmt;
  }
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_inheritedIfStmt;
  }
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
  public K_EXISTS(): TerminalNode {
    return this.getToken(TemplateParser.K_EXISTS, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_inheritedExistsStmt;
  }
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

export class InheritedFindsStmtContext extends ParserRuleContext {
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
  public FINDS_OPEN(): TerminalNode {
    return this.getToken(TemplateParser.FINDS_OPEN, 0);
  }
  public regex(): RegexContext {
    return this.getRuleContext(0, RegexContext);
  }
  public REGEX_CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.REGEX_CLOSE, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_inheritedFindsStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterInheritedFindsStmt) {
      listener.enterInheritedFindsStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitInheritedFindsStmt) {
      listener.exitInheritedFindsStmt(this);
    }
  }
}

export class InheritedMatchStmtContext extends ParserRuleContext {
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
  public MATCH_OPEN(): TerminalNode {
    return this.getToken(TemplateParser.MATCH_OPEN, 0);
  }
  public regex(): RegexContext {
    return this.getRuleContext(0, RegexContext);
  }
  public REGEX_CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.REGEX_CLOSE, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_inheritedMatchStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterInheritedMatchStmt) {
      listener.enterInheritedMatchStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitInheritedMatchStmt) {
      listener.exitInheritedMatchStmt(this);
    }
  }
}

export class InheritedContainsStmtContext extends ParserRuleContext {
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
  public K_CONTAINS(): TerminalNode {
    return this.getToken(TemplateParser.K_CONTAINS, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public word(): WordContext {
    return this.getRuleContext(0, WordContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_inheritedContainsStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterInheritedContainsStmt) {
      listener.enterInheritedContainsStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitInheritedContainsStmt) {
      listener.exitInheritedContainsStmt(this);
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
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_inheritedEachStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_INHERITED(): TerminalNode {
    return this.getToken(TemplateParser.K_INHERITED, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_inheritedElseIfStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_INHERITED(): TerminalNode {
    return this.getToken(TemplateParser.K_INHERITED, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_EXISTS(): TerminalNode {
    return this.getToken(TemplateParser.K_EXISTS, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_inheritedElseExistsStmt;
  }
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

export class InheritedElseFindsStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_INHERITED(): TerminalNode {
    return this.getToken(TemplateParser.K_INHERITED, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public FINDS_OPEN(): TerminalNode {
    return this.getToken(TemplateParser.FINDS_OPEN, 0);
  }
  public regex(): RegexContext {
    return this.getRuleContext(0, RegexContext);
  }
  public REGEX_CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.REGEX_CLOSE, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_inheritedElseFindsStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterInheritedElseFindsStmt) {
      listener.enterInheritedElseFindsStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitInheritedElseFindsStmt) {
      listener.exitInheritedElseFindsStmt(this);
    }
  }
}

export class InheritedElseMatchStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_INHERITED(): TerminalNode {
    return this.getToken(TemplateParser.K_INHERITED, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public MATCH_OPEN(): TerminalNode {
    return this.getToken(TemplateParser.MATCH_OPEN, 0);
  }
  public regex(): RegexContext {
    return this.getRuleContext(0, RegexContext);
  }
  public REGEX_CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.REGEX_CLOSE, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_inheritedElseMatchStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterInheritedElseMatchStmt) {
      listener.enterInheritedElseMatchStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitInheritedElseMatchStmt) {
      listener.exitInheritedElseMatchStmt(this);
    }
  }
}

export class InheritedElseContainsStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_INHERITED(): TerminalNode {
    return this.getToken(TemplateParser.K_INHERITED, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_CONTAINS(): TerminalNode {
    return this.getToken(TemplateParser.K_CONTAINS, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public word(): WordContext {
    return this.getRuleContext(0, WordContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_inheritedElseContainsStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterInheritedElseContainsStmt) {
      listener.enterInheritedElseContainsStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitInheritedElseContainsStmt) {
      listener.exitInheritedElseContainsStmt(this);
    }
  }
}

export class InheritedElseEachStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_INHERITED(): TerminalNode {
    return this.getToken(TemplateParser.K_INHERITED, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_inheritedElseEachStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_INHERITED(): TerminalNode {
    return this.getToken(TemplateParser.K_INHERITED, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_inheritedElseEndStmt;
  }
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
  public inheritedElseCondEndStmt():
    | InheritedElseCondEndStmtContext
    | undefined {
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_inheritedElseStmt;
  }
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
  public inheritedElseCondStmt(
    i?: number,
  ): InheritedElseCondStmtContext | InheritedElseCondStmtContext[] {
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_inheritedElseCondEndStmt;
  }
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
  public inheritedElseFindsStmt(): InheritedElseFindsStmtContext | undefined {
    return this.tryGetRuleContext(0, InheritedElseFindsStmtContext);
  }
  public inheritedElseMatchStmt(): InheritedElseMatchStmtContext | undefined {
    return this.tryGetRuleContext(0, InheritedElseMatchStmtContext);
  }
  public inheritedElseContainsStmt():
    | InheritedElseContainsStmtContext
    | undefined {
    return this.tryGetRuleContext(0, InheritedElseContainsStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_inheritedElseCondStmt;
  }
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_referenceIfStmt;
  }
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
  public K_EXISTS(): TerminalNode {
    return this.getToken(TemplateParser.K_EXISTS, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_referenceExistsStmt;
  }
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

export class ReferenceFindsStmtContext extends ParserRuleContext {
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
  public FINDS_OPEN(): TerminalNode {
    return this.getToken(TemplateParser.FINDS_OPEN, 0);
  }
  public regex(): RegexContext {
    return this.getRuleContext(0, RegexContext);
  }
  public REGEX_CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.REGEX_CLOSE, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_referenceFindsStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterReferenceFindsStmt) {
      listener.enterReferenceFindsStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitReferenceFindsStmt) {
      listener.exitReferenceFindsStmt(this);
    }
  }
}

export class ReferenceMatchStmtContext extends ParserRuleContext {
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
  public MATCH_OPEN(): TerminalNode {
    return this.getToken(TemplateParser.MATCH_OPEN, 0);
  }
  public regex(): RegexContext {
    return this.getRuleContext(0, RegexContext);
  }
  public REGEX_CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.REGEX_CLOSE, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_referenceMatchStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterReferenceMatchStmt) {
      listener.enterReferenceMatchStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitReferenceMatchStmt) {
      listener.exitReferenceMatchStmt(this);
    }
  }
}

export class ReferenceContainsStmtContext extends ParserRuleContext {
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
  public K_CONTAINS(): TerminalNode {
    return this.getToken(TemplateParser.K_CONTAINS, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public word(): WordContext {
    return this.getRuleContext(0, WordContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_referenceContainsStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterReferenceContainsStmt) {
      listener.enterReferenceContainsStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitReferenceContainsStmt) {
      listener.exitReferenceContainsStmt(this);
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
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_referenceEachStmt;
  }
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

export class ReferenceReverseEachStmtContext extends ParserRuleContext {
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
  public K_REVERSE_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_REVERSE_EACH, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_referenceReverseEachStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterReferenceReverseEachStmt) {
      listener.enterReferenceReverseEachStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitReferenceReverseEachStmt) {
      listener.exitReferenceReverseEachStmt(this);
    }
  }
}

export class ReferenceElseIfStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_REFERENCE(): TerminalNode {
    return this.getToken(TemplateParser.K_REFERENCE, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_referenceElseIfStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_REFERENCE(): TerminalNode {
    return this.getToken(TemplateParser.K_REFERENCE, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_EXISTS(): TerminalNode {
    return this.getToken(TemplateParser.K_EXISTS, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_referenceElseExistsStmt;
  }
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

export class ReferenceElseFindsStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_REFERENCE(): TerminalNode {
    return this.getToken(TemplateParser.K_REFERENCE, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public FINDS_OPEN(): TerminalNode {
    return this.getToken(TemplateParser.FINDS_OPEN, 0);
  }
  public regex(): RegexContext {
    return this.getRuleContext(0, RegexContext);
  }
  public REGEX_CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.REGEX_CLOSE, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_referenceElseFindsStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterReferenceElseFindsStmt) {
      listener.enterReferenceElseFindsStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitReferenceElseFindsStmt) {
      listener.exitReferenceElseFindsStmt(this);
    }
  }
}

export class ReferenceElseMatchStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_REFERENCE(): TerminalNode {
    return this.getToken(TemplateParser.K_REFERENCE, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public MATCH_OPEN(): TerminalNode {
    return this.getToken(TemplateParser.MATCH_OPEN, 0);
  }
  public regex(): RegexContext {
    return this.getRuleContext(0, RegexContext);
  }
  public REGEX_CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.REGEX_CLOSE, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_referenceElseMatchStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterReferenceElseMatchStmt) {
      listener.enterReferenceElseMatchStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitReferenceElseMatchStmt) {
      listener.exitReferenceElseMatchStmt(this);
    }
  }
}

export class ReferenceElseContainsStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_REFERENCE(): TerminalNode {
    return this.getToken(TemplateParser.K_REFERENCE, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_CONTAINS(): TerminalNode {
    return this.getToken(TemplateParser.K_CONTAINS, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public word(): WordContext {
    return this.getRuleContext(0, WordContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_referenceElseContainsStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterReferenceElseContainsStmt) {
      listener.enterReferenceElseContainsStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitReferenceElseContainsStmt) {
      listener.exitReferenceElseContainsStmt(this);
    }
  }
}

export class ReferenceElseEachStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_REFERENCE(): TerminalNode {
    return this.getToken(TemplateParser.K_REFERENCE, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_referenceElseEachStmt;
  }
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

export class ReferenceElseReverseEachStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_REFERENCE(): TerminalNode {
    return this.getToken(TemplateParser.K_REFERENCE, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_REVERSE_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_REVERSE_EACH, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_referenceElseReverseEachStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterReferenceElseReverseEachStmt) {
      listener.enterReferenceElseReverseEachStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitReferenceElseReverseEachStmt) {
      listener.exitReferenceElseReverseEachStmt(this);
    }
  }
}

export class ReferenceElseEndStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_REFERENCE(): TerminalNode {
    return this.getToken(TemplateParser.K_REFERENCE, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_referenceElseEndStmt;
  }
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
  public referenceElseCondEndStmt():
    | ReferenceElseCondEndStmtContext
    | undefined {
    return this.tryGetRuleContext(0, ReferenceElseCondEndStmtContext);
  }
  public referenceElseEachStmt(): ReferenceElseEachStmtContext | undefined {
    return this.tryGetRuleContext(0, ReferenceElseEachStmtContext);
  }
  public referenceElseReverseEachStmt():
    | ReferenceElseReverseEachStmtContext
    | undefined {
    return this.tryGetRuleContext(0, ReferenceElseReverseEachStmtContext);
  }
  public referenceElseEndStmt(): ReferenceElseEndStmtContext | undefined {
    return this.tryGetRuleContext(0, ReferenceElseEndStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_referenceElseStmt;
  }
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
  public referenceElseCondStmt(
    i?: number,
  ): ReferenceElseCondStmtContext | ReferenceElseCondStmtContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ReferenceElseCondStmtContext);
    } else {
      return this.getRuleContext(i, ReferenceElseCondStmtContext);
    }
  }
  public referenceElseEachStmt(): ReferenceElseEachStmtContext | undefined {
    return this.tryGetRuleContext(0, ReferenceElseEachStmtContext);
  }
  public referenceElseReverseEachStmt():
    | ReferenceElseReverseEachStmtContext
    | undefined {
    return this.tryGetRuleContext(0, ReferenceElseReverseEachStmtContext);
  }
  public referenceElseEndStmt(): ReferenceElseEndStmtContext | undefined {
    return this.tryGetRuleContext(0, ReferenceElseEndStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_referenceElseCondEndStmt;
  }
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
  public referenceElseFindsStmt(): ReferenceElseFindsStmtContext | undefined {
    return this.tryGetRuleContext(0, ReferenceElseFindsStmtContext);
  }
  public referenceElseMatchStmt(): ReferenceElseMatchStmtContext | undefined {
    return this.tryGetRuleContext(0, ReferenceElseMatchStmtContext);
  }
  public referenceElseContainsStmt():
    | ReferenceElseContainsStmtContext
    | undefined {
    return this.tryGetRuleContext(0, ReferenceElseContainsStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_referenceElseCondStmt;
  }
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldIfStmt;
  }
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
  public K_EXISTS(): TerminalNode {
    return this.getToken(TemplateParser.K_EXISTS, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldExistsStmt;
  }
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
  public MATCH_OPEN(): TerminalNode {
    return this.getToken(TemplateParser.MATCH_OPEN, 0);
  }
  public regex(): RegexContext {
    return this.getRuleContext(0, RegexContext);
  }
  public REGEX_CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.REGEX_CLOSE, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldMatchStmt;
  }
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
  public K_CONTAINS(): TerminalNode {
    return this.getToken(TemplateParser.K_CONTAINS, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public word(): WordContext {
    return this.getRuleContext(0, WordContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldContainsStmt;
  }
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
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldEachStmt;
  }
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

export class FieldReverseEachStmtContext extends ParserRuleContext {
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
  public K_REVERSE_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_REVERSE_EACH, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldReverseEachStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterFieldReverseEachStmt) {
      listener.enterFieldReverseEachStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitFieldReverseEachStmt) {
      listener.exitFieldReverseEachStmt(this);
    }
  }
}

export class FieldElseIfStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_FIELD(): TerminalNode {
    return this.getToken(TemplateParser.K_FIELD, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldElseIfStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_FIELD(): TerminalNode {
    return this.getToken(TemplateParser.K_FIELD, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_EXISTS(): TerminalNode {
    return this.getToken(TemplateParser.K_EXISTS, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldElseExistsStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_FIELD(): TerminalNode {
    return this.getToken(TemplateParser.K_FIELD, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public MATCH_OPEN(): TerminalNode {
    return this.getToken(TemplateParser.MATCH_OPEN, 0);
  }
  public regex(): RegexContext {
    return this.getRuleContext(0, RegexContext);
  }
  public REGEX_CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.REGEX_CLOSE, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldElseMatchStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_FIELD(): TerminalNode {
    return this.getToken(TemplateParser.K_FIELD, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_CONTAINS(): TerminalNode {
    return this.getToken(TemplateParser.K_CONTAINS, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public word(): WordContext {
    return this.getRuleContext(0, WordContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldElseContainsStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_FIELD(): TerminalNode {
    return this.getToken(TemplateParser.K_FIELD, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldElseEachStmt;
  }
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

export class FieldElseReverseEachStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_FIELD(): TerminalNode {
    return this.getToken(TemplateParser.K_FIELD, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_REVERSE_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_REVERSE_EACH, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldElseReverseEachStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterFieldElseReverseEachStmt) {
      listener.enterFieldElseReverseEachStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitFieldElseReverseEachStmt) {
      listener.exitFieldElseReverseEachStmt(this);
    }
  }
}

export class FieldElseEndStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_FIELD(): TerminalNode {
    return this.getToken(TemplateParser.K_FIELD, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldElseEndStmt;
  }
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
  public fieldElseReverseEachStmt():
    | FieldElseReverseEachStmtContext
    | undefined {
    return this.tryGetRuleContext(0, FieldElseReverseEachStmtContext);
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldElseStmt;
  }
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
  public fieldElseCondStmt(
    i?: number,
  ): FieldElseCondStmtContext | FieldElseCondStmtContext[] {
    if (i === undefined) {
      return this.getRuleContexts(FieldElseCondStmtContext);
    } else {
      return this.getRuleContext(i, FieldElseCondStmtContext);
    }
  }
  public fieldElseEachStmt(): FieldElseEachStmtContext | undefined {
    return this.tryGetRuleContext(0, FieldElseEachStmtContext);
  }
  public fieldElseReverseEachStmt():
    | FieldElseReverseEachStmtContext
    | undefined {
    return this.tryGetRuleContext(0, FieldElseReverseEachStmtContext);
  }
  public fieldElseEndStmt(): FieldElseEndStmtContext | undefined {
    return this.tryGetRuleContext(0, FieldElseEndStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldElseCondEndStmt;
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldElseCondStmt;
  }
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_descriptorIfStmt;
  }
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
  public MATCH_OPEN(): TerminalNode {
    return this.getToken(TemplateParser.MATCH_OPEN, 0);
  }
  public regex(): RegexContext {
    return this.getRuleContext(0, RegexContext);
  }
  public REGEX_CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.REGEX_CLOSE, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_descriptorMatchStmt;
  }
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
  public K_CONTAINS(): TerminalNode {
    return this.getToken(TemplateParser.K_CONTAINS, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public word(): WordContext {
    return this.getRuleContext(0, WordContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_descriptorContainsStmt;
  }
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

export class DescriptorElseIfStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_DESCRIPTOR(): TerminalNode {
    return this.getToken(TemplateParser.K_DESCRIPTOR, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_descriptorElseIfStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_DESCRIPTOR(): TerminalNode {
    return this.getToken(TemplateParser.K_DESCRIPTOR, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public MATCH_OPEN(): TerminalNode {
    return this.getToken(TemplateParser.MATCH_OPEN, 0);
  }
  public regex(): RegexContext {
    return this.getRuleContext(0, RegexContext);
  }
  public REGEX_CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.REGEX_CLOSE, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_descriptorElseMatchStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_DESCRIPTOR(): TerminalNode {
    return this.getToken(TemplateParser.K_DESCRIPTOR, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_CONTAINS(): TerminalNode {
    return this.getToken(TemplateParser.K_CONTAINS, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public word(): WordContext {
    return this.getRuleContext(0, WordContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_descriptorElseContainsStmt;
  }
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

export class DescriptorElseEndStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_DESCRIPTOR(): TerminalNode {
    return this.getToken(TemplateParser.K_DESCRIPTOR, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_descriptorElseEndStmt;
  }
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
  public descriptorElseCondEndStmt():
    | DescriptorElseCondEndStmtContext
    | undefined {
    return this.tryGetRuleContext(0, DescriptorElseCondEndStmtContext);
  }
  public descriptorElseEndStmt(): DescriptorElseEndStmtContext | undefined {
    return this.tryGetRuleContext(0, DescriptorElseEndStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_descriptorElseStmt;
  }
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
  public descriptorElseCondStmt(
    i?: number,
  ): DescriptorElseCondStmtContext | DescriptorElseCondStmtContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DescriptorElseCondStmtContext);
    } else {
      return this.getRuleContext(i, DescriptorElseCondStmtContext);
    }
  }
  public descriptorElseEndStmt(): DescriptorElseEndStmtContext | undefined {
    return this.tryGetRuleContext(0, DescriptorElseEndStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_descriptorElseCondEndStmt;
  }
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
  public descriptorElseContainsStmt():
    | DescriptorElseContainsStmtContext
    | undefined {
    return this.tryGetRuleContext(0, DescriptorElseContainsStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_descriptorElseCondStmt;
  }
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_indexIfStmt;
  }
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
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_indexEachStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_INDEX(): TerminalNode {
    return this.getToken(TemplateParser.K_INDEX, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_indexElseIfStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_INDEX(): TerminalNode {
    return this.getToken(TemplateParser.K_INDEX, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_indexElseEachStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_INDEX(): TerminalNode {
    return this.getToken(TemplateParser.K_INDEX, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_indexElseEndStmt;
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_indexElseStmt;
  }
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
  public indexElseIfStmt(
    i?: number,
  ): IndexElseIfStmtContext | IndexElseIfStmtContext[] {
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_indexElseCondEndStmt;
  }
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_uniqueIfStmt;
  }
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
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_uniqueEachStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_UNIQUE(): TerminalNode {
    return this.getToken(TemplateParser.K_UNIQUE, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_uniqueElseIfStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_UNIQUE(): TerminalNode {
    return this.getToken(TemplateParser.K_UNIQUE, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_uniqueElseEachStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_UNIQUE(): TerminalNode {
    return this.getToken(TemplateParser.K_UNIQUE, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_uniqueElseEndStmt;
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_uniqueElseStmt;
  }
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
  public uniqueElseIfStmt(
    i?: number,
  ): UniqueElseIfStmtContext | UniqueElseIfStmtContext[] {
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_uniqueElseCondEndStmt;
  }
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_primaryIfStmt;
  }
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
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_primaryEachStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_PRIMARY(): TerminalNode {
    return this.getToken(TemplateParser.K_PRIMARY, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_primaryElseIfStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_PRIMARY(): TerminalNode {
    return this.getToken(TemplateParser.K_PRIMARY, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_primaryElseEachStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_PRIMARY(): TerminalNode {
    return this.getToken(TemplateParser.K_PRIMARY, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_primaryElseEndStmt;
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_primaryElseStmt;
  }
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
  public primaryElseIfStmt(
    i?: number,
  ): PrimaryElseIfStmtContext | PrimaryElseIfStmtContext[] {
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_primaryElseCondEndStmt;
  }
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_constraintIfStmt;
  }
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
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_constraintEachStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_CONSTRAINT(): TerminalNode {
    return this.getToken(TemplateParser.K_CONSTRAINT, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_constraintElseIfStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_CONSTRAINT(): TerminalNode {
    return this.getToken(TemplateParser.K_CONSTRAINT, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_constraintElseEachStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_CONSTRAINT(): TerminalNode {
    return this.getToken(TemplateParser.K_CONSTRAINT, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_constraintElseEndStmt;
  }
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
  public constraintElseCondEndStmt():
    | ConstraintElseCondEndStmtContext
    | undefined {
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_constraintElseStmt;
  }
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
  public constraintElseIfStmt(
    i?: number,
  ): ConstraintElseIfStmtContext | ConstraintElseIfStmtContext[] {
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_constraintElseCondEndStmt;
  }
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_foreignIfStmt;
  }
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
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_foreignEachStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_FOREIGN(): TerminalNode {
    return this.getToken(TemplateParser.K_FOREIGN, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_IF(): TerminalNode {
    return this.getToken(TemplateParser.K_IF, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public testCondition(): TestConditionContext {
    return this.getRuleContext(0, TestConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.NOT, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_foreignElseIfStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_FOREIGN(): TerminalNode {
    return this.getToken(TemplateParser.K_FOREIGN, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
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
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_foreignElseEachStmt;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public K_FOREIGN(): TerminalNode {
    return this.getToken(TemplateParser.K_FOREIGN, 0);
  }
  public K_ELSE(): TerminalNode {
    return this.getToken(TemplateParser.K_ELSE, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_foreignElseEndStmt;
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_foreignElseStmt;
  }
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
  public foreignElseIfStmt(
    i?: number,
  ): ForeignElseIfStmtContext | ForeignElseIfStmtContext[] {
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_foreignElseCondEndStmt;
  }
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

export class CommentEachStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode[];
  public OPEN(i: number): TerminalNode;
  public OPEN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.OPEN);
    } else {
      return this.getToken(TemplateParser.OPEN, i);
    }
  }
  public K_COMMENT(): TerminalNode[];
  public K_COMMENT(i: number): TerminalNode;
  public K_COMMENT(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.K_COMMENT);
    } else {
      return this.getToken(TemplateParser.K_COMMENT, i);
    }
  }
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_commentEachStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterCommentEachStmt) {
      listener.enterCommentEachStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitCommentEachStmt) {
      listener.exitCommentEachStmt(this);
    }
  }
}

export class DescriptionEachStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode[];
  public OPEN(i: number): TerminalNode;
  public OPEN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.OPEN);
    } else {
      return this.getToken(TemplateParser.OPEN, i);
    }
  }
  public K_DESCRIPTION(): TerminalNode[];
  public K_DESCRIPTION(i: number): TerminalNode;
  public K_DESCRIPTION(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.K_DESCRIPTION);
    } else {
      return this.getToken(TemplateParser.K_DESCRIPTION, i);
    }
  }
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_descriptionEachStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterDescriptionEachStmt) {
      listener.enterDescriptionEachStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitDescriptionEachStmt) {
      listener.exitDescriptionEachStmt(this);
    }
  }
}

export class OptionEachStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode[];
  public OPEN(i: number): TerminalNode;
  public OPEN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.OPEN);
    } else {
      return this.getToken(TemplateParser.OPEN, i);
    }
  }
  public K_OPTION(): TerminalNode[];
  public K_OPTION(i: number): TerminalNode;
  public K_OPTION(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.K_OPTION);
    } else {
      return this.getToken(TemplateParser.K_OPTION, i);
    }
  }
  public K_EACH(): TerminalNode {
    return this.getToken(TemplateParser.K_EACH, 0);
  }
  public CLOSE(): TerminalNode[];
  public CLOSE(i: number): TerminalNode;
  public CLOSE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(TemplateParser.CLOSE);
    } else {
      return this.getToken(TemplateParser.CLOSE, i);
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
  public K_END(): TerminalNode {
    return this.getToken(TemplateParser.K_END, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.LPAR, 0);
  }
  public eachCondition(): EachConditionContext | undefined {
    return this.tryGetRuleContext(0, EachConditionContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.RPAR, 0);
  }
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_optionEachStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterOptionEachStmt) {
      listener.enterOptionEachStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitOptionEachStmt) {
      listener.exitOptionEachStmt(this);
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
  public constraintStmt(): ConstraintStmtContext | undefined {
    return this.tryGetRuleContext(0, ConstraintStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_constant;
  }
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
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public tableLevel(): TableLevelContext {
    return this.getRuleContext(0, TableLevelContext);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
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
  public tableProps(): TablePropsContext[];
  public tableProps(i: number): TablePropsContext;
  public tableProps(i?: number): TablePropsContext | TablePropsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TablePropsContext);
    } else {
      return this.getRuleContext(i, TablePropsContext);
    }
  }
  public replaceProp(): ReplacePropContext | undefined {
    return this.tryGetRuleContext(0, ReplacePropContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableStmt;
  }
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
  public DOT(): TerminalNode {
    return this.getToken(TemplateParser.DOT, 0);
  }
  public tableProp(): TablePropContext {
    return this.getRuleContext(0, TablePropContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableProps;
  }
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

export class FieldStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public fieldLevel(): FieldLevelContext {
    return this.getRuleContext(0, FieldLevelContext);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
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
  public fieldProps(): FieldPropsContext[];
  public fieldProps(i: number): FieldPropsContext;
  public fieldProps(i?: number): FieldPropsContext | FieldPropsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(FieldPropsContext);
    } else {
      return this.getRuleContext(i, FieldPropsContext);
    }
  }
  public replaceProp(): ReplacePropContext | undefined {
    return this.tryGetRuleContext(0, ReplacePropContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldStmt;
  }
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
  public DOT(): TerminalNode {
    return this.getToken(TemplateParser.DOT, 0);
  }
  public fieldProp(): FieldPropContext {
    return this.getRuleContext(0, FieldPropContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldProps;
  }
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

export class ConstraintStmtContext extends ParserRuleContext {
  public OPEN(): TerminalNode {
    return this.getToken(TemplateParser.OPEN, 0);
  }
  public constraintLevel(): ConstraintLevelContext {
    return this.getRuleContext(0, ConstraintLevelContext);
  }
  public K_NAME(): TerminalNode {
    return this.getToken(TemplateParser.K_NAME, 0);
  }
  public CLOSE(): TerminalNode {
    return this.getToken(TemplateParser.CLOSE, 0);
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
  public replaceProp(): ReplacePropContext | undefined {
    return this.tryGetRuleContext(0, ReplacePropContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_constraintStmt;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterConstraintStmt) {
      listener.enterConstraintStmt(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitConstraintStmt) {
      listener.exitConstraintStmt(this);
    }
  }
}

export class ReplacePropContext extends ParserRuleContext {
  public DOT(): TerminalNode {
    return this.getToken(TemplateParser.DOT, 0);
  }
  public REPLACE_OPEN(): TerminalNode {
    return this.getToken(TemplateParser.REPLACE_OPEN, 0);
  }
  public pattern(): PatternContext {
    return this.getRuleContext(0, PatternContext);
  }
  public PATTERN_CLOSE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.PATTERN_CLOSE, 0);
  }
  public REPLACEMENT_CLOSE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.REPLACEMENT_CLOSE, 0);
  }
  public FLAGS_CLOSE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.FLAGS_CLOSE, 0);
  }
  public REPLACEMENT_OPEN(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.REPLACEMENT_OPEN, 0);
  }
  public replacement(): ReplacementContext | undefined {
    return this.tryGetRuleContext(0, ReplacementContext);
  }
  public FLAGS_OPEN(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.FLAGS_OPEN, 0);
  }
  public flags(): FlagsContext | undefined {
    return this.tryGetRuleContext(0, FlagsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_replaceProp;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterReplaceProp) {
      listener.enterReplaceProp(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitReplaceProp) {
      listener.exitReplaceProp(this);
    }
  }
}

export class AllLevelsContext extends ParserRuleContext {
  public tableLevel(): TableLevelContext | undefined {
    return this.tryGetRuleContext(0, TableLevelContext);
  }
  public fieldLevel(): FieldLevelContext | undefined {
    return this.tryGetRuleContext(0, FieldLevelContext);
  }
  public constraintLevel(): ConstraintLevelContext | undefined {
    return this.tryGetRuleContext(0, ConstraintLevelContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_allLevels;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterAllLevels) {
      listener.enterAllLevels(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitAllLevels) {
      listener.exitAllLevels(this);
    }
  }
}

export class EachConditionContext extends ParserRuleContext {
  public condition(): ConditionContext {
    return this.getRuleContext(0, ConditionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_eachCondition;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterEachCondition) {
      listener.enterEachCondition(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitEachCondition) {
      listener.exitEachCondition(this);
    }
  }
}

export class TestConditionContext extends ParserRuleContext {
  public condition(): ConditionContext {
    return this.getRuleContext(0, ConditionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_testCondition;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterTestCondition) {
      listener.enterTestCondition(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitTestCondition) {
      listener.exitTestCondition(this);
    }
  }
}

export class ConditionContext extends ParserRuleContext {
  public anyExpression(): AnyExpressionContext | undefined {
    return this.tryGetRuleContext(0, AnyExpressionContext);
  }
  public anyPriorityCondition(): AnyPriorityConditionContext | undefined {
    return this.tryGetRuleContext(0, AnyPriorityConditionContext);
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
  public get ruleIndex(): number {
    return TemplateParser.RULE_condition;
  }
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
  public anyExpression(): AnyExpressionContext | undefined {
    return this.tryGetRuleContext(0, AnyExpressionContext);
  }
  public anyPriorityCondition(): AnyPriorityConditionContext | undefined {
    return this.tryGetRuleContext(0, AnyPriorityConditionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_anyCondition;
  }
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

export class AnyPriorityConditionContext extends ParserRuleContext {
  public negativePriorityCondition():
    | NegativePriorityConditionContext
    | undefined {
    return this.tryGetRuleContext(0, NegativePriorityConditionContext);
  }
  public priorityCondition(): PriorityConditionContext | undefined {
    return this.tryGetRuleContext(0, PriorityConditionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_anyPriorityCondition;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterAnyPriorityCondition) {
      listener.enterAnyPriorityCondition(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitAnyPriorityCondition) {
      listener.exitAnyPriorityCondition(this);
    }
  }
}

export class NegativePriorityConditionContext extends ParserRuleContext {
  public NOT(): TerminalNode {
    return this.getToken(TemplateParser.NOT, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public condition(): ConditionContext {
    return this.getRuleContext(0, ConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_negativePriorityCondition;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterNegativePriorityCondition) {
      listener.enterNegativePriorityCondition(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitNegativePriorityCondition) {
      listener.exitNegativePriorityCondition(this);
    }
  }
}

export class PriorityConditionContext extends ParserRuleContext {
  public LPAR(): TerminalNode {
    return this.getToken(TemplateParser.LPAR, 0);
  }
  public condition(): ConditionContext {
    return this.getRuleContext(0, ConditionContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(TemplateParser.RPAR, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_priorityCondition;
  }
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
  public OR(): TerminalNode {
    return this.getToken(TemplateParser.OR, 0);
  }
  public condition(): ConditionContext {
    return this.getRuleContext(0, ConditionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_orCondition;
  }
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
  public AND(): TerminalNode {
    return this.getToken(TemplateParser.AND, 0);
  }
  public condition(): ConditionContext {
    return this.getRuleContext(0, ConditionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_andCondition;
  }
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

export class AnyExpressionContext extends ParserRuleContext {
  public negativeExpression(): NegativeExpressionContext | undefined {
    return this.tryGetRuleContext(0, NegativeExpressionContext);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_anyExpression;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterAnyExpression) {
      listener.enterAnyExpression(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitAnyExpression) {
      listener.exitAnyExpression(this);
    }
  }
}

export class NegativeExpressionContext extends ParserRuleContext {
  public NOT(): TerminalNode {
    return this.getToken(TemplateParser.NOT, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_negativeExpression;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterNegativeExpression) {
      listener.enterNegativeExpression(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitNegativeExpression) {
      listener.exitNegativeExpression(this);
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
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_expression;
  }
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

export class TextContentContext extends ParserRuleContext {
  public TEXT(): TerminalNode {
    return this.getToken(TemplateParser.TEXT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_textContent;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterTextContent) {
      listener.enterTextContent(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitTextContent) {
      listener.exitTextContent(this);
    }
  }
}

export class TableLevelContext extends ParserRuleContext {
  public K_TABLE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_TABLE, 0);
  }
  public K_INHERITED(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_INHERITED, 0);
  }
  public K_REFERENCE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_REFERENCE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableLevel;
  }
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
  public K_FIELD(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_FIELD, 0);
  }
  public K_DESCRIPTOR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_DESCRIPTOR, 0);
  }
  public K_IMAGE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_IMAGE, 0);
  }
  public K_PRIMARY(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_PRIMARY, 0);
  }
  public K_OPTION(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_OPTION, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldLevel;
  }
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

export class ConstraintLevelContext extends ParserRuleContext {
  public K_CONSTRAINT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_CONSTRAINT, 0);
  }
  public K_INDEX(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_INDEX, 0);
  }
  public K_UNIQUE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_UNIQUE, 0);
  }
  public K_PRIMARY_KEY(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_PRIMARY_KEY, 0);
  }
  public K_FOREIGN(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_FOREIGN, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_constraintLevel;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterConstraintLevel) {
      listener.enterConstraintLevel(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitConstraintLevel) {
      listener.exitConstraintLevel(this);
    }
  }
}

export class PatternContext extends ParserRuleContext {
  public PATTERN(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.PATTERN, 0);
  }
  public pattern(): PatternContext[];
  public pattern(i: number): PatternContext;
  public pattern(i?: number): PatternContext | PatternContext[] {
    if (i === undefined) {
      return this.getRuleContexts(PatternContext);
    } else {
      return this.getRuleContext(i, PatternContext);
    }
  }
  public PATTERN_OPEN(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.PATTERN_OPEN, 0);
  }
  public PATTERN_CLOSE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.PATTERN_CLOSE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_pattern;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterPattern) {
      listener.enterPattern(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitPattern) {
      listener.exitPattern(this);
    }
  }
}

export class ReplacementContext extends ParserRuleContext {
  public REPLACEMENT(): TerminalNode {
    return this.getToken(TemplateParser.REPLACEMENT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_replacement;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterReplacement) {
      listener.enterReplacement(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitReplacement) {
      listener.exitReplacement(this);
    }
  }
}

export class FlagsContext extends ParserRuleContext {
  public REGEX_FLAGS(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.REGEX_FLAGS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_flags;
  }
  // @Override
  public enterRule(listener: TemplateParserListener): void {
    if (listener.enterFlags) {
      listener.enterFlags(this);
    }
  }
  // @Override
  public exitRule(listener: TemplateParserListener): void {
    if (listener.exitFlags) {
      listener.exitFlags(this);
    }
  }
}

export class RegexContext extends ParserRuleContext {
  public REGEX(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.REGEX, 0);
  }
  public regex(): RegexContext[];
  public regex(i: number): RegexContext;
  public regex(i?: number): RegexContext | RegexContext[] {
    if (i === undefined) {
      return this.getRuleContexts(RegexContext);
    } else {
      return this.getRuleContext(i, RegexContext);
    }
  }
  public REGEX_OPEN(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.REGEX_OPEN, 0);
  }
  public REGEX_CLOSE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.REGEX_CLOSE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_regex;
  }
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
  public WORD(): TerminalNode {
    return this.getToken(TemplateParser.WORD, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_word;
  }
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

export class TablePropContext extends ParserRuleContext {
  public K_UNIX(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_UNIX, 0);
  }
  public K_PLURAL(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_PLURAL, 0);
  }
  public K_NORM(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_NORM, 0);
  }
  public K_DEFAULT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_DEFAULT, 0);
  }
  public K_NAME(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_NAME, 0);
  }
  public K_COMMENT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_COMMENT, 0);
  }
  public K_GENDER(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_GENDER, 0);
  }
  public K_CHARS(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_CHARS, 0);
  }
  public K_LETTER(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_LETTER, 0);
  }
  public K_PACKAGE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_PACKAGE, 0);
  }
  public K_INHERITED(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_INHERITED, 0);
  }
  public K_ORDER(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_ORDER, 0);
  }
  public K_PATH(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_PATH, 0);
  }
  public K_STYLE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_STYLE, 0);
  }
  public K_EXTRA(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_EXTRA, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_tableProp;
  }
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

export class FieldPropContext extends ParserRuleContext {
  public K_NAME(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_NAME, 0);
  }
  public K_UNIX(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_UNIX, 0);
  }
  public K_NORM(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_NORM, 0);
  }
  public K_SINGULAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_SINGULAR, 0);
  }
  public K_INFO(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_INFO, 0);
  }
  public K_COMMENT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_COMMENT, 0);
  }
  public K_MASK(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_MASK, 0);
  }
  public K_STYLE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_STYLE, 0);
  }
  public K_GENDER(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_GENDER, 0);
  }
  public K_CHARS(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_CHARS, 0);
  }
  public K_LETTER(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_LETTER, 0);
  }
  public K_ARRAY(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_ARRAY, 0);
  }
  public K_COUNT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_COUNT, 0);
  }
  public K_INDEX(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_INDEX, 0);
  }
  public K_NUMBER(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_NUMBER, 0);
  }
  public K_SIZE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_SIZE, 0);
  }
  public K_LENGTH(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_LENGTH, 0);
  }
  public K_OPTION(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_OPTION, 0);
  }
  public K_IMAGE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_IMAGE, 0);
  }
  public K_LOW(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_LOW, 0);
  }
  public K_HIGH(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_HIGH, 0);
  }
  public K_WIDTH(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_WIDTH, 0);
  }
  public K_HEIGHT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_HEIGHT, 0);
  }
  public K_FOLDER(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_FOLDER, 0);
  }
  public K_DEFAULT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_DEFAULT, 0);
  }
  public K_ON(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_ON, 0);
  }
  public K_DELETE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_DELETE, 0);
  }
  public K_UPDATE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_UPDATE, 0);
  }
  public K_INSERT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_INSERT, 0);
  }
  public K_NOID(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_NOID, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_fieldProp;
  }
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

export class AttributeContext extends ParserRuleContext {
  public K_COMMENT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_COMMENT, 0);
  }
  public K_DESCRIPTION(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_DESCRIPTION, 0);
  }
  public K_INHERITED(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_INHERITED, 0);
  }
  public K_PACKAGE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_PACKAGE, 0);
  }
  public K_PATH(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_PATH, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_attribute;
  }
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
  public K_ALL(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_ALL, 0);
  }
  public K_ARRAY(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_ARRAY, 0);
  }
  public K_CONSTRAINT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_CONSTRAINT, 0);
  }
  public K_DEFAULT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_DEFAULT, 0);
  }
  public K_DEPENDS(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_DEPENDS, 0);
  }
  public K_DESCRIPTOR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_DESCRIPTOR, 0);
  }
  public K_FEMININE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_FEMININE, 0);
  }
  public K_FEW_FIELDS(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_FEW_FIELDS, 0);
  }
  public K_FIRST(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_FIRST, 0);
  }
  public K_FOREIGN(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_FOREIGN, 0);
  }
  public K_FULLTEXT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_FULLTEXT, 0);
  }
  public K_IGNORED(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_IGNORED, 0);
  }
  public K_IMAGE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_IMAGE, 0);
  }
  public K_INDEX(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_INDEX, 0);
  }
  public K_INFO(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_INFO, 0);
  }
  public K_MANY(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_MANY, 0);
  }
  public K_MASCULINE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_MASCULINE, 0);
  }
  public K_MASKED(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_MASKED, 0);
  }
  public K_NON_FIRST(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_NON_FIRST, 0);
  }
  public K_NON_NULL(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_NON_NULL, 0);
  }
  public K_NOT_NULL(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_NOT_NULL, 0);
  }
  public K_NULL(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_NULL, 0);
  }
  public K_NUMBER(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_NUMBER, 0);
  }
  public K_OPTION(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_OPTION, 0);
  }
  public K_OPTIONAL(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_OPTIONAL, 0);
  }
  public K_PASSWORD(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_PASSWORD, 0);
  }
  public K_PLURALIZABLE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_PLURALIZABLE, 0);
  }
  public K_PRIMARY(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_PRIMARY, 0);
  }
  public K_RADIO(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_RADIO, 0);
  }
  public K_REFERENCE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_REFERENCE, 0);
  }
  public K_REPEATED(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_REPEATED, 0);
  }
  public K_REQUIRED(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_REQUIRED, 0);
  }
  public K_SEARCHABLE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_SEARCHABLE, 0);
  }
  public K_SELF_REFERENCE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_SELF_REFERENCE, 0);
  }
  public K_SINGLE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_SINGLE, 0);
  }
  public K_UNIQUE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_UNIQUE, 0);
  }
  public K_UNPLURALIZABLE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_UNPLURALIZABLE, 0);
  }
  public K_UNSIGNED(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_UNSIGNED, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_property;
  }
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
  public K_BIGINT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_BIGINT, 0);
  }
  public K_BLOB(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_BLOB, 0);
  }
  public K_BOOLEAN(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_BOOLEAN, 0);
  }
  public K_CHAR(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_CHAR, 0);
  }
  public K_CURRENCY(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_CURRENCY, 0);
  }
  public K_DATE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_DATE, 0);
  }
  public K_DATETIME(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_DATETIME, 0);
  }
  public K_DOUBLE(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_DOUBLE, 0);
  }
  public K_ENUM(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_ENUM, 0);
  }
  public K_FLOAT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_FLOAT, 0);
  }
  public K_INT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_INT, 0);
  }
  public K_INTEGER(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_INTEGER, 0);
  }
  public K_JSON(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_JSON, 0);
  }
  public K_STRING(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_STRING, 0);
  }
  public K_TEXT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_TEXT, 0);
  }
  public K_TIME(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_TIME, 0);
  }
  public K_TIMESTAMP(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_TIMESTAMP, 0);
  }
  public K_TINYINT(): TerminalNode | undefined {
    return this.tryGetToken(TemplateParser.K_TINYINT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return TemplateParser.RULE_type;
  }
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
