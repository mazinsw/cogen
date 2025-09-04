// Generated from src/grammar/SQLParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { TypeBitStmtContext } from './SQLParser';
import { TypeTinyIntStmtContext } from './SQLParser';
import { TypeSmallIntStmtContext } from './SQLParser';
import { TypeMediumIntStmtContext } from './SQLParser';
import { TypeIntStmtContext } from './SQLParser';
import { TypeIntegerStmtContext } from './SQLParser';
import { TypeBigIntStmtContext } from './SQLParser';
import { TypeRealStmtContext } from './SQLParser';
import { TypeDoubleStmtContext } from './SQLParser';
import { TypeFloatStmtContext } from './SQLParser';
import { TypeDecimalStmtContext } from './SQLParser';
import { TypeNumericStmtContext } from './SQLParser';
import { TypeBooleanStmtContext } from './SQLParser';
import { TypeDateStmtContext } from './SQLParser';
import { TypeTimeStmtContext } from './SQLParser';
import { TypeTimeStampStmtContext } from './SQLParser';
import { TypeDateTimeStmtContext } from './SQLParser';
import { TypeYearStmtContext } from './SQLParser';
import { TypeCharStmtContext } from './SQLParser';
import { TypeVarCharStmtContext } from './SQLParser';
import { TypeBinaryStmtContext } from './SQLParser';
import { TypeVarBinaryStmtContext } from './SQLParser';
import { TypeTinyBlobStmtContext } from './SQLParser';
import { TypeBlobStmtContext } from './SQLParser';
import { TypeMediumBlobStmtContext } from './SQLParser';
import { TypeLongBlobStmtContext } from './SQLParser';
import { TypeJsonStmtContext } from './SQLParser';
import { TypeTinyTextStmtContext } from './SQLParser';
import { TypeTextStmtContext } from './SQLParser';
import { TypeMediumTextStmtContext } from './SQLParser';
import { TypeLongTextStmtContext } from './SQLParser';
import { TypeEnumStmtContext } from './SQLParser';
import { TypeSetStmtContext } from './SQLParser';
import { FieldStmtContext } from './SQLParser';
import { PrimaryKeyStmtContext } from './SQLParser';
import { IndexStmtContext } from './SQLParser';
import { FulltextStmtContext } from './SQLParser';
import { UniqueStmtContext } from './SQLParser';
import { ForeignStmtContext } from './SQLParser';
import { ScriptContext } from './SQLParser';
import { StmtContext } from './SQLParser';
import { DropSchemaContext } from './SQLParser';
import { CreateSchemaContext } from './SQLParser';
import { CreateSpecificationContext } from './SQLParser';
import { TableCommentContext } from './SQLParser';
import { SetStmtContext } from './SQLParser';
import { SetOptionContext } from './SQLParser';
import { SetDefaultValueContext } from './SQLParser';
import { UseStmtContext } from './SQLParser';
import { DropTableContext } from './SQLParser';
import { DropTableNameContext } from './SQLParser';
import { CreateTableContext } from './SQLParser';
import { TableNameContext } from './SQLParser';
import { FieldListContext } from './SQLParser';
import { CreateDefinitionContext } from './SQLParser';
import { ColumnNameContext } from './SQLParser';
import { ConstraintNameContext } from './SQLParser';
import { ConstraintTableContext } from './SQLParser';
import { ColumnDefinitionContext } from './SQLParser';
import { AutoIncrementContext } from './SQLParser';
import { ColumnDefaultValueContext } from './SQLParser';
import { ColumnNullContext } from './SQLParser';
import { ColumnNotNullContext } from './SQLParser';
import { FieldCommentContext } from './SQLParser';
import { AutoIncrementValueContext } from './SQLParser';
import { ReferenceDefinitionContext } from './SQLParser';
import { ReferenceDeleteOptionContext } from './SQLParser';
import { ReferenceUpdateOptionContext } from './SQLParser';
import { ReferenceTableContext } from './SQLParser';
import { IndexColNameContext } from './SQLParser';
import { DataTypeContext } from './SQLParser';
import { StringItemContext } from './SQLParser';
import { CharsetNameContext } from './SQLParser';
import { CollateNameContext } from './SQLParser';
import { ReferenceOptionContext } from './SQLParser';
import { DefaultValueContext } from './SQLParser';
import { TableOptionsContext } from './SQLParser';
import { OptionContext } from './SQLParser';
import { IdNameContext } from './SQLParser';

/**
 * This interface defines a complete listener for a parse tree produced by
 * `SQLParser`.
 */
export interface SQLParserListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by the `typeBitStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeBitStmt?: (ctx: TypeBitStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeBitStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeBitStmt?: (ctx: TypeBitStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeTinyIntStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeTinyIntStmt?: (ctx: TypeTinyIntStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeTinyIntStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeTinyIntStmt?: (ctx: TypeTinyIntStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeSmallIntStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeSmallIntStmt?: (ctx: TypeSmallIntStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeSmallIntStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeSmallIntStmt?: (ctx: TypeSmallIntStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeMediumIntStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeMediumIntStmt?: (ctx: TypeMediumIntStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeMediumIntStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeMediumIntStmt?: (ctx: TypeMediumIntStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeIntStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeIntStmt?: (ctx: TypeIntStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeIntStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeIntStmt?: (ctx: TypeIntStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeIntegerStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeIntegerStmt?: (ctx: TypeIntegerStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeIntegerStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeIntegerStmt?: (ctx: TypeIntegerStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeBigIntStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeBigIntStmt?: (ctx: TypeBigIntStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeBigIntStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeBigIntStmt?: (ctx: TypeBigIntStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeRealStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeRealStmt?: (ctx: TypeRealStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeRealStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeRealStmt?: (ctx: TypeRealStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeDoubleStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeDoubleStmt?: (ctx: TypeDoubleStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeDoubleStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeDoubleStmt?: (ctx: TypeDoubleStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeFloatStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeFloatStmt?: (ctx: TypeFloatStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeFloatStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeFloatStmt?: (ctx: TypeFloatStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeDecimalStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeDecimalStmt?: (ctx: TypeDecimalStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeDecimalStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeDecimalStmt?: (ctx: TypeDecimalStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeNumericStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeNumericStmt?: (ctx: TypeNumericStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeNumericStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeNumericStmt?: (ctx: TypeNumericStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeBooleanStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeBooleanStmt?: (ctx: TypeBooleanStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeBooleanStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeBooleanStmt?: (ctx: TypeBooleanStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeDateStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeDateStmt?: (ctx: TypeDateStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeDateStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeDateStmt?: (ctx: TypeDateStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeTimeStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeTimeStmt?: (ctx: TypeTimeStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeTimeStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeTimeStmt?: (ctx: TypeTimeStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeTimeStampStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeTimeStampStmt?: (ctx: TypeTimeStampStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeTimeStampStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeTimeStampStmt?: (ctx: TypeTimeStampStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeDateTimeStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeDateTimeStmt?: (ctx: TypeDateTimeStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeDateTimeStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeDateTimeStmt?: (ctx: TypeDateTimeStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeYearStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeYearStmt?: (ctx: TypeYearStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeYearStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeYearStmt?: (ctx: TypeYearStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeCharStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeCharStmt?: (ctx: TypeCharStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeCharStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeCharStmt?: (ctx: TypeCharStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeVarCharStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeVarCharStmt?: (ctx: TypeVarCharStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeVarCharStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeVarCharStmt?: (ctx: TypeVarCharStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeBinaryStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeBinaryStmt?: (ctx: TypeBinaryStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeBinaryStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeBinaryStmt?: (ctx: TypeBinaryStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeVarBinaryStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeVarBinaryStmt?: (ctx: TypeVarBinaryStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeVarBinaryStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeVarBinaryStmt?: (ctx: TypeVarBinaryStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeTinyBlobStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeTinyBlobStmt?: (ctx: TypeTinyBlobStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeTinyBlobStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeTinyBlobStmt?: (ctx: TypeTinyBlobStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeBlobStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeBlobStmt?: (ctx: TypeBlobStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeBlobStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeBlobStmt?: (ctx: TypeBlobStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeMediumBlobStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeMediumBlobStmt?: (ctx: TypeMediumBlobStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeMediumBlobStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeMediumBlobStmt?: (ctx: TypeMediumBlobStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeLongBlobStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeLongBlobStmt?: (ctx: TypeLongBlobStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeLongBlobStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeLongBlobStmt?: (ctx: TypeLongBlobStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeJsonStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeJsonStmt?: (ctx: TypeJsonStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeJsonStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeJsonStmt?: (ctx: TypeJsonStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeTinyTextStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeTinyTextStmt?: (ctx: TypeTinyTextStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeTinyTextStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeTinyTextStmt?: (ctx: TypeTinyTextStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeTextStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeTextStmt?: (ctx: TypeTextStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeTextStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeTextStmt?: (ctx: TypeTextStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeMediumTextStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeMediumTextStmt?: (ctx: TypeMediumTextStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeMediumTextStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeMediumTextStmt?: (ctx: TypeMediumTextStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeLongTextStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeLongTextStmt?: (ctx: TypeLongTextStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeLongTextStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeLongTextStmt?: (ctx: TypeLongTextStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeEnumStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeEnumStmt?: (ctx: TypeEnumStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeEnumStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeEnumStmt?: (ctx: TypeEnumStmtContext) => void;

  /**
   * Enter a parse tree produced by the `typeSetStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterTypeSetStmt?: (ctx: TypeSetStmtContext) => void;
  /**
   * Exit a parse tree produced by the `typeSetStmt`
   * labeled alternative in `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitTypeSetStmt?: (ctx: TypeSetStmtContext) => void;

  /**
   * Enter a parse tree produced by the `fieldStmt`
   * labeled alternative in `SQLParser.createDefinition`.
   * @param ctx the parse tree
   */
  enterFieldStmt?: (ctx: FieldStmtContext) => void;
  /**
   * Exit a parse tree produced by the `fieldStmt`
   * labeled alternative in `SQLParser.createDefinition`.
   * @param ctx the parse tree
   */
  exitFieldStmt?: (ctx: FieldStmtContext) => void;

  /**
   * Enter a parse tree produced by the `primaryKeyStmt`
   * labeled alternative in `SQLParser.createDefinition`.
   * @param ctx the parse tree
   */
  enterPrimaryKeyStmt?: (ctx: PrimaryKeyStmtContext) => void;
  /**
   * Exit a parse tree produced by the `primaryKeyStmt`
   * labeled alternative in `SQLParser.createDefinition`.
   * @param ctx the parse tree
   */
  exitPrimaryKeyStmt?: (ctx: PrimaryKeyStmtContext) => void;

  /**
   * Enter a parse tree produced by the `indexStmt`
   * labeled alternative in `SQLParser.createDefinition`.
   * @param ctx the parse tree
   */
  enterIndexStmt?: (ctx: IndexStmtContext) => void;
  /**
   * Exit a parse tree produced by the `indexStmt`
   * labeled alternative in `SQLParser.createDefinition`.
   * @param ctx the parse tree
   */
  exitIndexStmt?: (ctx: IndexStmtContext) => void;

  /**
   * Enter a parse tree produced by the `fulltextStmt`
   * labeled alternative in `SQLParser.createDefinition`.
   * @param ctx the parse tree
   */
  enterFulltextStmt?: (ctx: FulltextStmtContext) => void;
  /**
   * Exit a parse tree produced by the `fulltextStmt`
   * labeled alternative in `SQLParser.createDefinition`.
   * @param ctx the parse tree
   */
  exitFulltextStmt?: (ctx: FulltextStmtContext) => void;

  /**
   * Enter a parse tree produced by the `uniqueStmt`
   * labeled alternative in `SQLParser.createDefinition`.
   * @param ctx the parse tree
   */
  enterUniqueStmt?: (ctx: UniqueStmtContext) => void;
  /**
   * Exit a parse tree produced by the `uniqueStmt`
   * labeled alternative in `SQLParser.createDefinition`.
   * @param ctx the parse tree
   */
  exitUniqueStmt?: (ctx: UniqueStmtContext) => void;

  /**
   * Enter a parse tree produced by the `foreignStmt`
   * labeled alternative in `SQLParser.createDefinition`.
   * @param ctx the parse tree
   */
  enterForeignStmt?: (ctx: ForeignStmtContext) => void;
  /**
   * Exit a parse tree produced by the `foreignStmt`
   * labeled alternative in `SQLParser.createDefinition`.
   * @param ctx the parse tree
   */
  exitForeignStmt?: (ctx: ForeignStmtContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.script`.
   * @param ctx the parse tree
   */
  enterScript?: (ctx: ScriptContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.script`.
   * @param ctx the parse tree
   */
  exitScript?: (ctx: ScriptContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.stmt`.
   * @param ctx the parse tree
   */
  enterStmt?: (ctx: StmtContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.stmt`.
   * @param ctx the parse tree
   */
  exitStmt?: (ctx: StmtContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.dropSchema`.
   * @param ctx the parse tree
   */
  enterDropSchema?: (ctx: DropSchemaContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.dropSchema`.
   * @param ctx the parse tree
   */
  exitDropSchema?: (ctx: DropSchemaContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.createSchema`.
   * @param ctx the parse tree
   */
  enterCreateSchema?: (ctx: CreateSchemaContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.createSchema`.
   * @param ctx the parse tree
   */
  exitCreateSchema?: (ctx: CreateSchemaContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.createSpecification`.
   * @param ctx the parse tree
   */
  enterCreateSpecification?: (ctx: CreateSpecificationContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.createSpecification`.
   * @param ctx the parse tree
   */
  exitCreateSpecification?: (ctx: CreateSpecificationContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.tableComment`.
   * @param ctx the parse tree
   */
  enterTableComment?: (ctx: TableCommentContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.tableComment`.
   * @param ctx the parse tree
   */
  exitTableComment?: (ctx: TableCommentContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.setStmt`.
   * @param ctx the parse tree
   */
  enterSetStmt?: (ctx: SetStmtContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.setStmt`.
   * @param ctx the parse tree
   */
  exitSetStmt?: (ctx: SetStmtContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.setOption`.
   * @param ctx the parse tree
   */
  enterSetOption?: (ctx: SetOptionContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.setOption`.
   * @param ctx the parse tree
   */
  exitSetOption?: (ctx: SetOptionContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.setDefaultValue`.
   * @param ctx the parse tree
   */
  enterSetDefaultValue?: (ctx: SetDefaultValueContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.setDefaultValue`.
   * @param ctx the parse tree
   */
  exitSetDefaultValue?: (ctx: SetDefaultValueContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.useStmt`.
   * @param ctx the parse tree
   */
  enterUseStmt?: (ctx: UseStmtContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.useStmt`.
   * @param ctx the parse tree
   */
  exitUseStmt?: (ctx: UseStmtContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.dropTable`.
   * @param ctx the parse tree
   */
  enterDropTable?: (ctx: DropTableContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.dropTable`.
   * @param ctx the parse tree
   */
  exitDropTable?: (ctx: DropTableContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.dropTableName`.
   * @param ctx the parse tree
   */
  enterDropTableName?: (ctx: DropTableNameContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.dropTableName`.
   * @param ctx the parse tree
   */
  exitDropTableName?: (ctx: DropTableNameContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.createTable`.
   * @param ctx the parse tree
   */
  enterCreateTable?: (ctx: CreateTableContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.createTable`.
   * @param ctx the parse tree
   */
  exitCreateTable?: (ctx: CreateTableContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.tableName`.
   * @param ctx the parse tree
   */
  enterTableName?: (ctx: TableNameContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.tableName`.
   * @param ctx the parse tree
   */
  exitTableName?: (ctx: TableNameContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.fieldList`.
   * @param ctx the parse tree
   */
  enterFieldList?: (ctx: FieldListContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.fieldList`.
   * @param ctx the parse tree
   */
  exitFieldList?: (ctx: FieldListContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.createDefinition`.
   * @param ctx the parse tree
   */
  enterCreateDefinition?: (ctx: CreateDefinitionContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.createDefinition`.
   * @param ctx the parse tree
   */
  exitCreateDefinition?: (ctx: CreateDefinitionContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.columnName`.
   * @param ctx the parse tree
   */
  enterColumnName?: (ctx: ColumnNameContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.columnName`.
   * @param ctx the parse tree
   */
  exitColumnName?: (ctx: ColumnNameContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.constraintName`.
   * @param ctx the parse tree
   */
  enterConstraintName?: (ctx: ConstraintNameContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.constraintName`.
   * @param ctx the parse tree
   */
  exitConstraintName?: (ctx: ConstraintNameContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.constraintTable`.
   * @param ctx the parse tree
   */
  enterConstraintTable?: (ctx: ConstraintTableContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.constraintTable`.
   * @param ctx the parse tree
   */
  exitConstraintTable?: (ctx: ConstraintTableContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.columnDefinition`.
   * @param ctx the parse tree
   */
  enterColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.columnDefinition`.
   * @param ctx the parse tree
   */
  exitColumnDefinition?: (ctx: ColumnDefinitionContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.autoIncrement`.
   * @param ctx the parse tree
   */
  enterAutoIncrement?: (ctx: AutoIncrementContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.autoIncrement`.
   * @param ctx the parse tree
   */
  exitAutoIncrement?: (ctx: AutoIncrementContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.columnDefaultValue`.
   * @param ctx the parse tree
   */
  enterColumnDefaultValue?: (ctx: ColumnDefaultValueContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.columnDefaultValue`.
   * @param ctx the parse tree
   */
  exitColumnDefaultValue?: (ctx: ColumnDefaultValueContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.columnNull`.
   * @param ctx the parse tree
   */
  enterColumnNull?: (ctx: ColumnNullContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.columnNull`.
   * @param ctx the parse tree
   */
  exitColumnNull?: (ctx: ColumnNullContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.columnNotNull`.
   * @param ctx the parse tree
   */
  enterColumnNotNull?: (ctx: ColumnNotNullContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.columnNotNull`.
   * @param ctx the parse tree
   */
  exitColumnNotNull?: (ctx: ColumnNotNullContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.fieldComment`.
   * @param ctx the parse tree
   */
  enterFieldComment?: (ctx: FieldCommentContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.fieldComment`.
   * @param ctx the parse tree
   */
  exitFieldComment?: (ctx: FieldCommentContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.autoIncrementValue`.
   * @param ctx the parse tree
   */
  enterAutoIncrementValue?: (ctx: AutoIncrementValueContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.autoIncrementValue`.
   * @param ctx the parse tree
   */
  exitAutoIncrementValue?: (ctx: AutoIncrementValueContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.referenceDefinition`.
   * @param ctx the parse tree
   */
  enterReferenceDefinition?: (ctx: ReferenceDefinitionContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.referenceDefinition`.
   * @param ctx the parse tree
   */
  exitReferenceDefinition?: (ctx: ReferenceDefinitionContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.referenceDeleteOption`.
   * @param ctx the parse tree
   */
  enterReferenceDeleteOption?: (ctx: ReferenceDeleteOptionContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.referenceDeleteOption`.
   * @param ctx the parse tree
   */
  exitReferenceDeleteOption?: (ctx: ReferenceDeleteOptionContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.referenceUpdateOption`.
   * @param ctx the parse tree
   */
  enterReferenceUpdateOption?: (ctx: ReferenceUpdateOptionContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.referenceUpdateOption`.
   * @param ctx the parse tree
   */
  exitReferenceUpdateOption?: (ctx: ReferenceUpdateOptionContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.referenceTable`.
   * @param ctx the parse tree
   */
  enterReferenceTable?: (ctx: ReferenceTableContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.referenceTable`.
   * @param ctx the parse tree
   */
  exitReferenceTable?: (ctx: ReferenceTableContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.indexColName`.
   * @param ctx the parse tree
   */
  enterIndexColName?: (ctx: IndexColNameContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.indexColName`.
   * @param ctx the parse tree
   */
  exitIndexColName?: (ctx: IndexColNameContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  enterDataType?: (ctx: DataTypeContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.dataType`.
   * @param ctx the parse tree
   */
  exitDataType?: (ctx: DataTypeContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.stringItem`.
   * @param ctx the parse tree
   */
  enterStringItem?: (ctx: StringItemContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.stringItem`.
   * @param ctx the parse tree
   */
  exitStringItem?: (ctx: StringItemContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.charsetName`.
   * @param ctx the parse tree
   */
  enterCharsetName?: (ctx: CharsetNameContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.charsetName`.
   * @param ctx the parse tree
   */
  exitCharsetName?: (ctx: CharsetNameContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.collateName`.
   * @param ctx the parse tree
   */
  enterCollateName?: (ctx: CollateNameContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.collateName`.
   * @param ctx the parse tree
   */
  exitCollateName?: (ctx: CollateNameContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.referenceOption`.
   * @param ctx the parse tree
   */
  enterReferenceOption?: (ctx: ReferenceOptionContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.referenceOption`.
   * @param ctx the parse tree
   */
  exitReferenceOption?: (ctx: ReferenceOptionContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.defaultValue`.
   * @param ctx the parse tree
   */
  enterDefaultValue?: (ctx: DefaultValueContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.defaultValue`.
   * @param ctx the parse tree
   */
  exitDefaultValue?: (ctx: DefaultValueContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.tableOptions`.
   * @param ctx the parse tree
   */
  enterTableOptions?: (ctx: TableOptionsContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.tableOptions`.
   * @param ctx the parse tree
   */
  exitTableOptions?: (ctx: TableOptionsContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.option`.
   * @param ctx the parse tree
   */
  enterOption?: (ctx: OptionContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.option`.
   * @param ctx the parse tree
   */
  exitOption?: (ctx: OptionContext) => void;

  /**
   * Enter a parse tree produced by `SQLParser.idName`.
   * @param ctx the parse tree
   */
  enterIdName?: (ctx: IdNameContext) => void;
  /**
   * Exit a parse tree produced by `SQLParser.idName`.
   * @param ctx the parse tree
   */
  exitIdName?: (ctx: IdNameContext) => void;
}
