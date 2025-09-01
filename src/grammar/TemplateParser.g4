/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

parser grammar TemplateParser;

options { tokenVocab=TemplateLexer; }

template: statement* EOF;

statement:
    block
  | constant
  | textContent
  ;

block:
    tableIfStmt
  | tableExistsStmt
  | tableFindsStmt
  | tableMatchStmt
  | tableContainsStmt
  | tableEachStmt

  | inheritedIfStmt
  | inheritedExistsStmt
  | inheritedFindsStmt
  | inheritedMatchStmt
  | inheritedContainsStmt
  | inheritedEachStmt

  | referenceIfStmt
  | referenceExistsStmt
  | referenceFindsStmt
  | referenceMatchStmt
  | referenceContainsStmt
  | referenceEachStmt

  | fieldIfStmt
  | fieldExistsStmt
  | fieldFindsStmt
  | fieldMatchStmt
  | fieldContainsStmt
  | fieldEachStmt
  | fieldReverseEachStmt

  | descriptorIfStmt
  | descriptorMatchStmt
  | descriptorContainsStmt
  | descriptorEachStmt

  | indexIfStmt
  | indexEachStmt

  | uniqueIfStmt
  | uniqueEachStmt

  | primaryIfStmt
  | primaryEachStmt

  | constraintIfStmt
  | constraintEachStmt

  | foreignIfStmt
  | foreignEachStmt

  | optionEachStmt

  | commentEachStmt
  ;

/** Table */
tableIfStmt: OPEN K_TABLE '.' K_IF LPAR testCondition RPAR CLOSE statement* tableElseStmt? OPEN K_TABLE '.' K_END CLOSE;
tableExistsStmt: OPEN K_TABLE '.' K_EXISTS LPAR eachCondition RPAR CLOSE statement* tableElseStmt? OPEN K_TABLE '.' K_END CLOSE;
tableFindsStmt: OPEN K_TABLE '.' FINDS_OPEN regex REGEX_CLOSE CLOSE statement* tableElseStmt? OPEN K_TABLE '.' K_END CLOSE;
tableMatchStmt: OPEN K_TABLE '.' MATCH_OPEN regex REGEX_CLOSE CLOSE statement* tableElseStmt? OPEN K_TABLE '.' K_END CLOSE;
tableContainsStmt: OPEN K_TABLE '.' K_CONTAINS LPAR word RPAR CLOSE statement* tableElseStmt? OPEN K_TABLE '.' K_END CLOSE;
tableEachStmt: OPEN K_TABLE '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement* OPEN K_TABLE '.' K_END CLOSE;

tableElseIfStmt: OPEN K_TABLE '.' K_ELSE '.' K_IF LPAR testCondition RPAR CLOSE statement*;
tableElseExistsStmt: OPEN K_TABLE '.' K_ELSE '.' K_EXISTS LPAR eachCondition RPAR CLOSE statement*;
tableElseFindsStmt: OPEN K_TABLE '.' K_ELSE '.' FINDS_OPEN regex REGEX_CLOSE CLOSE statement*;
tableElseMatchStmt: OPEN K_TABLE '.' K_ELSE '.' MATCH_OPEN regex REGEX_CLOSE CLOSE statement*;
tableElseContainsStmt: OPEN K_TABLE '.' K_ELSE '.' K_CONTAINS LPAR word RPAR CLOSE statement*;
tableElseEachStmt: OPEN K_TABLE '.' K_ELSE '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement*;
tableElseEndStmt: OPEN K_TABLE '.' K_ELSE CLOSE statement*;

tableElseStmt: (tableElseCondEndStmt | tableElseEachStmt | tableElseEndStmt);
tableElseCondEndStmt: tableElseCondStmt+ (tableElseEachStmt | tableElseEndStmt)?;
tableElseCondStmt:
    tableElseIfStmt
  | tableElseExistsStmt
  | tableElseFindsStmt
  | tableElseMatchStmt
  | tableElseContainsStmt;

/** Inherited */
inheritedIfStmt: OPEN K_INHERITED '.' K_IF LPAR testCondition RPAR CLOSE statement* inheritedElseStmt? OPEN K_INHERITED '.' K_END CLOSE;
inheritedExistsStmt: OPEN K_INHERITED '.' K_EXISTS LPAR eachCondition RPAR CLOSE statement* inheritedElseStmt? OPEN K_INHERITED '.' K_END CLOSE;
inheritedFindsStmt: OPEN K_INHERITED '.' FINDS_OPEN regex REGEX_CLOSE CLOSE statement* inheritedElseStmt? OPEN K_INHERITED '.' K_END CLOSE;
inheritedMatchStmt: OPEN K_INHERITED '.' MATCH_OPEN regex REGEX_CLOSE CLOSE statement* inheritedElseStmt? OPEN K_INHERITED '.' K_END CLOSE;
inheritedContainsStmt: OPEN K_INHERITED '.' K_CONTAINS LPAR word RPAR CLOSE statement* inheritedElseStmt? OPEN K_INHERITED '.' K_END CLOSE;
inheritedEachStmt: OPEN K_INHERITED '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement* OPEN K_INHERITED '.' K_END CLOSE;

inheritedElseIfStmt: OPEN K_INHERITED '.' K_ELSE '.' K_IF LPAR testCondition RPAR CLOSE statement*;
inheritedElseExistsStmt: OPEN K_INHERITED '.' K_ELSE '.' K_EXISTS LPAR eachCondition RPAR CLOSE statement*;
inheritedElseFindsStmt: OPEN K_INHERITED '.' K_ELSE '.' FINDS_OPEN regex REGEX_CLOSE CLOSE statement*;
inheritedElseMatchStmt: OPEN K_INHERITED '.' K_ELSE '.' MATCH_OPEN regex REGEX_CLOSE CLOSE statement*;
inheritedElseContainsStmt: OPEN K_INHERITED '.' K_ELSE '.' K_CONTAINS LPAR word RPAR CLOSE statement*;
inheritedElseEachStmt: OPEN K_INHERITED '.' K_ELSE '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement*;
inheritedElseEndStmt: OPEN K_INHERITED '.' K_ELSE CLOSE statement*;

inheritedElseStmt: (inheritedElseCondEndStmt | inheritedElseEachStmt | inheritedElseEndStmt);
inheritedElseCondEndStmt: inheritedElseCondStmt+ (inheritedElseEachStmt | inheritedElseEndStmt)?;
inheritedElseCondStmt:
    inheritedElseIfStmt
  | inheritedElseExistsStmt
  | inheritedElseFindsStmt
  | inheritedElseMatchStmt
  | inheritedElseContainsStmt;

/** Reference */
referenceIfStmt: OPEN K_REFERENCE '.' K_IF LPAR testCondition RPAR CLOSE statement* referenceElseStmt? OPEN K_REFERENCE '.' K_END CLOSE;
referenceExistsStmt: OPEN K_REFERENCE '.' K_EXISTS LPAR eachCondition RPAR CLOSE statement* referenceElseStmt? OPEN K_REFERENCE '.' K_END CLOSE;
referenceFindsStmt: OPEN K_REFERENCE '.' FINDS_OPEN regex REGEX_CLOSE CLOSE statement* referenceElseStmt? OPEN K_REFERENCE '.' K_END CLOSE;
referenceMatchStmt: OPEN K_REFERENCE '.' MATCH_OPEN regex REGEX_CLOSE CLOSE statement* referenceElseStmt? OPEN K_REFERENCE '.' K_END CLOSE;
referenceContainsStmt: OPEN K_REFERENCE '.' K_CONTAINS LPAR word RPAR CLOSE statement* referenceElseStmt? OPEN K_REFERENCE '.' K_END CLOSE;
referenceEachStmt: OPEN K_REFERENCE '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement* OPEN K_REFERENCE '.' K_END CLOSE;

referenceElseIfStmt: OPEN K_REFERENCE '.' K_ELSE '.' K_IF LPAR testCondition RPAR CLOSE statement*;
referenceElseExistsStmt: OPEN K_REFERENCE '.' K_ELSE '.' K_EXISTS LPAR eachCondition RPAR CLOSE statement*;
referenceElseFindsStmt: OPEN K_REFERENCE '.' K_ELSE '.' FINDS_OPEN regex REGEX_CLOSE CLOSE statement*;
referenceElseMatchStmt: OPEN K_REFERENCE '.' K_ELSE '.' MATCH_OPEN regex REGEX_CLOSE CLOSE statement*;
referenceElseContainsStmt: OPEN K_REFERENCE '.' K_ELSE '.' K_CONTAINS LPAR word RPAR CLOSE statement*;
referenceElseEachStmt: OPEN K_REFERENCE '.' K_ELSE '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement*;
referenceElseEndStmt: OPEN K_REFERENCE '.' K_ELSE CLOSE statement*;

referenceElseStmt: (referenceElseCondEndStmt | referenceElseEachStmt |  referenceElseEndStmt);
referenceElseCondEndStmt: referenceElseCondStmt+ (referenceElseEachStmt | referenceElseEndStmt)?;
referenceElseCondStmt:
    referenceElseIfStmt
  | referenceElseExistsStmt
  | referenceElseFindsStmt
  | referenceElseMatchStmt
  | referenceElseContainsStmt;

/** Field */
fieldIfStmt: OPEN K_FIELD '.' K_IF LPAR testCondition RPAR CLOSE statement* fieldElseStmt? OPEN K_FIELD '.' K_END CLOSE;
fieldExistsStmt: OPEN K_FIELD '.' K_EXISTS LPAR eachCondition RPAR CLOSE statement* fieldElseStmt? OPEN K_FIELD '.' K_END CLOSE;
fieldFindsStmt: OPEN K_FIELD '.' FINDS_OPEN regex REGEX_CLOSE CLOSE statement* fieldElseStmt? OPEN K_FIELD '.' K_END CLOSE;
fieldMatchStmt: OPEN K_FIELD '.' MATCH_OPEN regex REGEX_CLOSE CLOSE statement* fieldElseStmt? OPEN K_FIELD '.' K_END CLOSE;
fieldContainsStmt: OPEN K_FIELD '.' K_CONTAINS LPAR word RPAR CLOSE statement* fieldElseStmt? OPEN K_FIELD '.' K_END CLOSE;
fieldEachStmt: OPEN K_FIELD '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement* OPEN K_FIELD '.' K_END CLOSE;
fieldReverseEachStmt: OPEN K_FIELD '.' K_REVERSE_EACH ( LPAR eachCondition RPAR )? CLOSE statement* OPEN K_FIELD '.' K_END CLOSE;

fieldElseIfStmt: OPEN K_FIELD '.' K_ELSE '.' K_IF LPAR testCondition RPAR CLOSE statement*;
fieldElseExistsStmt: OPEN K_FIELD '.' K_ELSE '.' K_EXISTS LPAR eachCondition RPAR CLOSE statement*;
fieldElseFindsStmt: OPEN K_FIELD '.' K_ELSE '.' FINDS_OPEN regex REGEX_CLOSE CLOSE statement*;
fieldElseMatchStmt: OPEN K_FIELD '.' K_ELSE '.' MATCH_OPEN regex REGEX_CLOSE CLOSE statement*;
fieldElseContainsStmt: OPEN K_FIELD '.' K_ELSE '.' K_CONTAINS LPAR word RPAR CLOSE statement*;
fieldElseEachStmt: OPEN K_FIELD '.' K_ELSE '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement*;
fieldElseReverseEachStmt: OPEN K_FIELD '.' K_ELSE '.' K_REVERSE_EACH ( LPAR eachCondition RPAR )? CLOSE statement*;
fieldElseEndStmt: OPEN K_FIELD '.' K_ELSE CLOSE statement*;

fieldElseStmt: (fieldElseEachStmt | fieldElseReverseEachStmt | fieldElseEndStmt | fieldElseCondEndStmt);
fieldElseCondEndStmt: fieldElseCondStmt+ (fieldElseEachStmt | fieldElseReverseEachStmt | fieldElseEndStmt)?;
fieldElseCondStmt:
    fieldElseIfStmt
  | fieldElseExistsStmt
  | fieldElseFindsStmt
  | fieldElseMatchStmt
  | fieldElseContainsStmt;

/** Descriptor */
descriptorIfStmt: OPEN K_DESCRIPTOR '.' K_IF LPAR testCondition RPAR CLOSE statement* descriptorElseStmt? OPEN K_DESCRIPTOR '.' K_END CLOSE;
descriptorMatchStmt: OPEN K_DESCRIPTOR '.' MATCH_OPEN regex REGEX_CLOSE CLOSE statement* descriptorElseStmt? OPEN K_DESCRIPTOR '.' K_END CLOSE;
descriptorContainsStmt: OPEN K_DESCRIPTOR '.' K_CONTAINS LPAR word RPAR CLOSE statement* descriptorElseStmt? OPEN K_DESCRIPTOR '.' K_END CLOSE;
descriptorEachStmt: OPEN K_DESCRIPTOR '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement* OPEN K_DESCRIPTOR '.' K_END CLOSE;

descriptorElseIfStmt: OPEN K_DESCRIPTOR '.' K_ELSE '.' K_IF LPAR testCondition RPAR CLOSE statement*;
descriptorElseMatchStmt: OPEN K_DESCRIPTOR '.' K_ELSE '.' MATCH_OPEN regex REGEX_CLOSE CLOSE statement*;
descriptorElseContainsStmt: OPEN K_DESCRIPTOR '.' K_ELSE '.' K_CONTAINS LPAR word RPAR CLOSE statement*;
descriptorElseEachStmt: OPEN K_DESCRIPTOR '.' K_ELSE '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement*;
descriptorElseEndStmt: OPEN K_DESCRIPTOR '.' K_ELSE CLOSE statement*;

descriptorElseStmt: (descriptorElseCondEndStmt | descriptorElseEachStmt | descriptorElseEndStmt);
descriptorElseCondEndStmt: descriptorElseCondStmt+ (descriptorElseEachStmt | descriptorElseEndStmt)?;
descriptorElseCondStmt: descriptorElseIfStmt | descriptorElseMatchStmt | descriptorElseContainsStmt;

/** Index */
indexIfStmt: OPEN K_INDEX '.' K_IF LPAR testCondition RPAR CLOSE statement* indexElseStmt? OPEN K_INDEX '.' K_END CLOSE;
indexEachStmt: OPEN K_INDEX '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement* OPEN K_INDEX '.' K_END CLOSE;

indexElseIfStmt: OPEN K_INDEX '.' K_ELSE '.' K_IF LPAR testCondition RPAR CLOSE statement*;
indexElseEachStmt: OPEN K_INDEX '.' K_ELSE '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement*;
indexElseEndStmt: OPEN K_INDEX '.' K_ELSE CLOSE statement*;

indexElseStmt: (indexElseCondEndStmt | indexElseEachStmt | indexElseEndStmt);
indexElseCondEndStmt: indexElseIfStmt+ (indexElseEachStmt | indexElseEndStmt)?;

/** Unique */
uniqueIfStmt: OPEN K_UNIQUE '.' K_IF LPAR testCondition RPAR CLOSE statement* uniqueElseStmt? OPEN K_UNIQUE '.' K_END CLOSE;
uniqueEachStmt: OPEN K_UNIQUE '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement* OPEN K_UNIQUE '.' K_END CLOSE;

uniqueElseIfStmt: OPEN K_UNIQUE '.' K_ELSE '.' K_IF LPAR testCondition RPAR CLOSE statement*;
uniqueElseEachStmt: OPEN K_UNIQUE '.' K_ELSE '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement*;
uniqueElseEndStmt: OPEN K_UNIQUE '.' K_ELSE CLOSE statement*;

uniqueElseStmt: (uniqueElseCondEndStmt | uniqueElseEachStmt | uniqueElseEndStmt);
uniqueElseCondEndStmt: uniqueElseIfStmt+ (uniqueElseEachStmt | uniqueElseEndStmt)?;

/** Primary */
primaryIfStmt: OPEN K_PRIMARY '.' K_IF LPAR testCondition RPAR CLOSE statement* primaryElseStmt? OPEN K_PRIMARY '.' K_END CLOSE;
primaryEachStmt: OPEN K_PRIMARY '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement* OPEN K_PRIMARY '.' K_END CLOSE;

primaryElseIfStmt: OPEN K_PRIMARY '.' K_ELSE '.' K_IF LPAR testCondition RPAR CLOSE statement*;
primaryElseEachStmt: OPEN K_PRIMARY '.' K_ELSE '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement*;
primaryElseEndStmt: OPEN K_PRIMARY '.' K_ELSE CLOSE statement*;

primaryElseStmt: (primaryElseCondEndStmt | primaryElseEachStmt | primaryElseEndStmt);
primaryElseCondEndStmt: primaryElseIfStmt+ (primaryElseEachStmt | primaryElseEndStmt)?;

/** Constraint */
constraintIfStmt: OPEN K_CONSTRAINT '.' K_IF LPAR testCondition RPAR CLOSE statement* constraintElseStmt? OPEN K_CONSTRAINT '.' K_END CLOSE;
constraintEachStmt: OPEN K_CONSTRAINT '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement* OPEN K_CONSTRAINT '.' K_END CLOSE;

constraintElseIfStmt: OPEN K_CONSTRAINT '.' K_ELSE '.' K_IF LPAR testCondition RPAR CLOSE statement*;
constraintElseEachStmt: OPEN K_CONSTRAINT '.' K_ELSE '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement*;
constraintElseEndStmt: OPEN K_CONSTRAINT '.' K_ELSE CLOSE statement*;

constraintElseStmt: (constraintElseCondEndStmt | constraintElseEachStmt | constraintElseEndStmt);
constraintElseCondEndStmt: constraintElseIfStmt+ (constraintElseEachStmt | constraintElseEndStmt)?;

/** Foreign */
foreignIfStmt: OPEN K_FOREIGN '.' K_IF LPAR testCondition RPAR CLOSE statement* foreignElseStmt? OPEN K_FOREIGN '.' K_END CLOSE;
foreignEachStmt: OPEN K_FOREIGN '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement* OPEN K_FOREIGN '.' K_END CLOSE;

foreignElseIfStmt: OPEN K_FOREIGN '.' K_ELSE '.' K_IF LPAR testCondition RPAR CLOSE statement*;
foreignElseEachStmt: OPEN K_FOREIGN '.' K_ELSE '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement*;
foreignElseEndStmt: OPEN K_FOREIGN '.' K_ELSE CLOSE statement*;

foreignElseStmt: (foreignElseCondEndStmt | foreignElseEachStmt | foreignElseEndStmt);
foreignElseCondEndStmt: foreignElseIfStmt+ (foreignElseEachStmt | foreignElseEndStmt)?;

/** Comment */
commentEachStmt: OPEN K_COMMENT '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement* OPEN K_COMMENT '.' K_END CLOSE;

/** Option */
optionEachStmt: OPEN K_OPTION '.' K_EACH ( LPAR eachCondition RPAR )? CLOSE statement* OPEN K_OPTION '.' K_END CLOSE;

/** Constants */
constant:
    tableStmt
  | fieldStmt
  | constraintStmt
  | replaceStmt
  ;

replaceStmt: OPEN allLevels '.' REPLACE_OPEN regex (',' regex)? REGEX_CLOSE CLOSE;
tableStmt: OPEN tableLevel tableProps* CLOSE;
tableProps: '.' tableProp;

fieldStmt: OPEN fieldLevel fieldProps* CLOSE;
fieldProps: '.' fieldProp;

constraintStmt: OPEN constraintLevel '.' K_NAME CLOSE;

allLevels: tableLevel | fieldLevel | constraintLevel;

eachCondition: condition;
testCondition: condition;

condition:
    expression
  | priorityCondition
  | anyCondition orCondition
  | anyCondition andCondition;
anyCondition: expression | priorityCondition;
priorityCondition: LPAR condition RPAR;
orCondition: OR condition;
andCondition: AND condition;
expression: attribute | property | type;

textContent: TEXT;

tableLevel: K_TABLE | K_INHERITED | K_REFERENCE;

fieldLevel: K_FIELD | K_DESCRIPTOR | K_OPTION | K_IMAGE;

constraintLevel: K_CONSTRAINT | K_INDEX | K_UNIQUE | K_PRIMARY | K_FOREIGN;

regex: REGEX;
word: WORD;

tableProp:
    K_UNIX
  | K_PLURAL
  | K_NORM
  | K_DEFAULT
  | K_NAME
  | K_COMMENT
  | K_GENDER
  | K_CHARS
  | K_LETTER
  | K_PACKAGE
  | K_INHERITED
  | K_PATH
  | K_STYLE
  | K_EXTRA
  ;

fieldProp:
    K_NAME
  | K_UNIX
  | K_NORM
  | K_SINGULAR
  | K_INFO
  | K_COMMENT
  | K_MASK
  | K_STYLE
  | K_GENDER
  | K_CHARS
  | K_LETTER
  | K_ARRAY
  | K_COUNT
  | K_INDEX
  | K_NUMBER
  | K_SIZE
  | K_LENGTH
  | K_OPTION
  | K_IMAGE
  | K_LOW
  | K_HIGH
  | K_WIDTH
  | K_HEIGHT
  | K_FOLDER
  | K_DEFAULT
  | K_ON
  | K_DELETE
  | K_UPDATE
  | K_INSERT
  | K_NOID
  ;

attribute:
    K_COMMENT
  | K_INHERITED
  | K_PACKAGE
  | K_PATH
  ;

property:
    K_ALL
  | K_REFERENCE
  | K_PRIMARY
  | K_REPEATED
  | K_NULL
  | K_OPTIONAL
  | K_REQUIRED
  | K_NOT_NULL
  | K_NON_NULL
  | K_UNSIGNED
  | K_DEFAULT
  | K_INFO
  | K_DESCRIPTOR
  | K_SEARCHABLE
  | K_DESCRIPTION
  | K_INDEX
  | K_CONSTRAINT
  | K_FOREIGN
  | K_UNIQUE
  | K_FULLTEXT
  | K_RADIO
  | K_MASKED
  | K_PASSWORD
  | K_ARRAY
  | K_IMAGE
  | K_OPTION
  | K_FEW_FIELDS
  | K_MANY
  | K_SINGLE
  | K_FIRST
  | K_NON_FIRST
  ;

type:
    K_INTEGER
  | K_TINYINT
  | K_BIGINT
  | K_STRING
  | K_CHAR
  | K_TEXT
  | K_BOOLEAN
  | K_CURRENCY
  | K_DOUBLE
  | K_FLOAT
  | K_DATE
  | K_JSON
  | K_DATETIME
  | K_TIMESTAMP
  | K_TIME
  | K_ENUM
  | K_BLOB
  ;
