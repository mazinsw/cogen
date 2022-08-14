// Generated from src/grammar/SQLParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SQLParser.
function SQLParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SQLParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SQLParserListener.prototype.constructor = SQLParserListener;

// Enter a parse tree produced by SQLParser#script.
SQLParserListener.prototype.enterScript = function(ctx) {
};

// Exit a parse tree produced by SQLParser#script.
SQLParserListener.prototype.exitScript = function(ctx) {
};


// Enter a parse tree produced by SQLParser#stmt.
SQLParserListener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#stmt.
SQLParserListener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#dropSchema.
SQLParserListener.prototype.enterDropSchema = function(ctx) {
};

// Exit a parse tree produced by SQLParser#dropSchema.
SQLParserListener.prototype.exitDropSchema = function(ctx) {
};


// Enter a parse tree produced by SQLParser#createSchema.
SQLParserListener.prototype.enterCreateSchema = function(ctx) {
};

// Exit a parse tree produced by SQLParser#createSchema.
SQLParserListener.prototype.exitCreateSchema = function(ctx) {
};


// Enter a parse tree produced by SQLParser#createSpecification.
SQLParserListener.prototype.enterCreateSpecification = function(ctx) {
};

// Exit a parse tree produced by SQLParser#createSpecification.
SQLParserListener.prototype.exitCreateSpecification = function(ctx) {
};


// Enter a parse tree produced by SQLParser#tableComment.
SQLParserListener.prototype.enterTableComment = function(ctx) {
};

// Exit a parse tree produced by SQLParser#tableComment.
SQLParserListener.prototype.exitTableComment = function(ctx) {
};


// Enter a parse tree produced by SQLParser#setStmt.
SQLParserListener.prototype.enterSetStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#setStmt.
SQLParserListener.prototype.exitSetStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#setOption.
SQLParserListener.prototype.enterSetOption = function(ctx) {
};

// Exit a parse tree produced by SQLParser#setOption.
SQLParserListener.prototype.exitSetOption = function(ctx) {
};


// Enter a parse tree produced by SQLParser#setDefaultValue.
SQLParserListener.prototype.enterSetDefaultValue = function(ctx) {
};

// Exit a parse tree produced by SQLParser#setDefaultValue.
SQLParserListener.prototype.exitSetDefaultValue = function(ctx) {
};


// Enter a parse tree produced by SQLParser#useStmt.
SQLParserListener.prototype.enterUseStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#useStmt.
SQLParserListener.prototype.exitUseStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#dropTable.
SQLParserListener.prototype.enterDropTable = function(ctx) {
};

// Exit a parse tree produced by SQLParser#dropTable.
SQLParserListener.prototype.exitDropTable = function(ctx) {
};


// Enter a parse tree produced by SQLParser#dropTableName.
SQLParserListener.prototype.enterDropTableName = function(ctx) {
};

// Exit a parse tree produced by SQLParser#dropTableName.
SQLParserListener.prototype.exitDropTableName = function(ctx) {
};


// Enter a parse tree produced by SQLParser#createTable.
SQLParserListener.prototype.enterCreateTable = function(ctx) {
};

// Exit a parse tree produced by SQLParser#createTable.
SQLParserListener.prototype.exitCreateTable = function(ctx) {
};


// Enter a parse tree produced by SQLParser#tableName.
SQLParserListener.prototype.enterTableName = function(ctx) {
};

// Exit a parse tree produced by SQLParser#tableName.
SQLParserListener.prototype.exitTableName = function(ctx) {
};


// Enter a parse tree produced by SQLParser#fieldList.
SQLParserListener.prototype.enterFieldList = function(ctx) {
};

// Exit a parse tree produced by SQLParser#fieldList.
SQLParserListener.prototype.exitFieldList = function(ctx) {
};


// Enter a parse tree produced by SQLParser#fieldStmt.
SQLParserListener.prototype.enterFieldStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#fieldStmt.
SQLParserListener.prototype.exitFieldStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#primaryKeyStmt.
SQLParserListener.prototype.enterPrimaryKeyStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#primaryKeyStmt.
SQLParserListener.prototype.exitPrimaryKeyStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#indexStmt.
SQLParserListener.prototype.enterIndexStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#indexStmt.
SQLParserListener.prototype.exitIndexStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#uniqueStmt.
SQLParserListener.prototype.enterUniqueStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#uniqueStmt.
SQLParserListener.prototype.exitUniqueStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#foreignStmt.
SQLParserListener.prototype.enterForeignStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#foreignStmt.
SQLParserListener.prototype.exitForeignStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#columnName.
SQLParserListener.prototype.enterColumnName = function(ctx) {
};

// Exit a parse tree produced by SQLParser#columnName.
SQLParserListener.prototype.exitColumnName = function(ctx) {
};


// Enter a parse tree produced by SQLParser#constraintName.
SQLParserListener.prototype.enterConstraintName = function(ctx) {
};

// Exit a parse tree produced by SQLParser#constraintName.
SQLParserListener.prototype.exitConstraintName = function(ctx) {
};


// Enter a parse tree produced by SQLParser#constraintTable.
SQLParserListener.prototype.enterConstraintTable = function(ctx) {
};

// Exit a parse tree produced by SQLParser#constraintTable.
SQLParserListener.prototype.exitConstraintTable = function(ctx) {
};


// Enter a parse tree produced by SQLParser#columnDefinition.
SQLParserListener.prototype.enterColumnDefinition = function(ctx) {
};

// Exit a parse tree produced by SQLParser#columnDefinition.
SQLParserListener.prototype.exitColumnDefinition = function(ctx) {
};


// Enter a parse tree produced by SQLParser#autoIncrement.
SQLParserListener.prototype.enterAutoIncrement = function(ctx) {
};

// Exit a parse tree produced by SQLParser#autoIncrement.
SQLParserListener.prototype.exitAutoIncrement = function(ctx) {
};


// Enter a parse tree produced by SQLParser#columnDefaultValue.
SQLParserListener.prototype.enterColumnDefaultValue = function(ctx) {
};

// Exit a parse tree produced by SQLParser#columnDefaultValue.
SQLParserListener.prototype.exitColumnDefaultValue = function(ctx) {
};


// Enter a parse tree produced by SQLParser#columnNull.
SQLParserListener.prototype.enterColumnNull = function(ctx) {
};

// Exit a parse tree produced by SQLParser#columnNull.
SQLParserListener.prototype.exitColumnNull = function(ctx) {
};


// Enter a parse tree produced by SQLParser#columnNotNull.
SQLParserListener.prototype.enterColumnNotNull = function(ctx) {
};

// Exit a parse tree produced by SQLParser#columnNotNull.
SQLParserListener.prototype.exitColumnNotNull = function(ctx) {
};


// Enter a parse tree produced by SQLParser#fieldComment.
SQLParserListener.prototype.enterFieldComment = function(ctx) {
};

// Exit a parse tree produced by SQLParser#fieldComment.
SQLParserListener.prototype.exitFieldComment = function(ctx) {
};


// Enter a parse tree produced by SQLParser#referenceDefinition.
SQLParserListener.prototype.enterReferenceDefinition = function(ctx) {
};

// Exit a parse tree produced by SQLParser#referenceDefinition.
SQLParserListener.prototype.exitReferenceDefinition = function(ctx) {
};


// Enter a parse tree produced by SQLParser#referenceDeleteOption.
SQLParserListener.prototype.enterReferenceDeleteOption = function(ctx) {
};

// Exit a parse tree produced by SQLParser#referenceDeleteOption.
SQLParserListener.prototype.exitReferenceDeleteOption = function(ctx) {
};


// Enter a parse tree produced by SQLParser#referenceUpdateOption.
SQLParserListener.prototype.enterReferenceUpdateOption = function(ctx) {
};

// Exit a parse tree produced by SQLParser#referenceUpdateOption.
SQLParserListener.prototype.exitReferenceUpdateOption = function(ctx) {
};


// Enter a parse tree produced by SQLParser#referenceTable.
SQLParserListener.prototype.enterReferenceTable = function(ctx) {
};

// Exit a parse tree produced by SQLParser#referenceTable.
SQLParserListener.prototype.exitReferenceTable = function(ctx) {
};


// Enter a parse tree produced by SQLParser#indexColName.
SQLParserListener.prototype.enterIndexColName = function(ctx) {
};

// Exit a parse tree produced by SQLParser#indexColName.
SQLParserListener.prototype.exitIndexColName = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeBitStmt.
SQLParserListener.prototype.enterTypeBitStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeBitStmt.
SQLParserListener.prototype.exitTypeBitStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeTinyIntStmt.
SQLParserListener.prototype.enterTypeTinyIntStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeTinyIntStmt.
SQLParserListener.prototype.exitTypeTinyIntStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeSmallIntStmt.
SQLParserListener.prototype.enterTypeSmallIntStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeSmallIntStmt.
SQLParserListener.prototype.exitTypeSmallIntStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeMediumIntStmt.
SQLParserListener.prototype.enterTypeMediumIntStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeMediumIntStmt.
SQLParserListener.prototype.exitTypeMediumIntStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeIntStmt.
SQLParserListener.prototype.enterTypeIntStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeIntStmt.
SQLParserListener.prototype.exitTypeIntStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeIntegerStmt.
SQLParserListener.prototype.enterTypeIntegerStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeIntegerStmt.
SQLParserListener.prototype.exitTypeIntegerStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeBigIntStmt.
SQLParserListener.prototype.enterTypeBigIntStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeBigIntStmt.
SQLParserListener.prototype.exitTypeBigIntStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeRealStmt.
SQLParserListener.prototype.enterTypeRealStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeRealStmt.
SQLParserListener.prototype.exitTypeRealStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeDoubleStmt.
SQLParserListener.prototype.enterTypeDoubleStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeDoubleStmt.
SQLParserListener.prototype.exitTypeDoubleStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeFloatStmt.
SQLParserListener.prototype.enterTypeFloatStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeFloatStmt.
SQLParserListener.prototype.exitTypeFloatStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeDecimalStmt.
SQLParserListener.prototype.enterTypeDecimalStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeDecimalStmt.
SQLParserListener.prototype.exitTypeDecimalStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeNumericStmt.
SQLParserListener.prototype.enterTypeNumericStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeNumericStmt.
SQLParserListener.prototype.exitTypeNumericStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeBooleanStmt.
SQLParserListener.prototype.enterTypeBooleanStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeBooleanStmt.
SQLParserListener.prototype.exitTypeBooleanStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeDateStmt.
SQLParserListener.prototype.enterTypeDateStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeDateStmt.
SQLParserListener.prototype.exitTypeDateStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeTimeStmt.
SQLParserListener.prototype.enterTypeTimeStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeTimeStmt.
SQLParserListener.prototype.exitTypeTimeStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeTimeStampStmt.
SQLParserListener.prototype.enterTypeTimeStampStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeTimeStampStmt.
SQLParserListener.prototype.exitTypeTimeStampStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeDateTimeStmt.
SQLParserListener.prototype.enterTypeDateTimeStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeDateTimeStmt.
SQLParserListener.prototype.exitTypeDateTimeStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeYearStmt.
SQLParserListener.prototype.enterTypeYearStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeYearStmt.
SQLParserListener.prototype.exitTypeYearStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeCharStmt.
SQLParserListener.prototype.enterTypeCharStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeCharStmt.
SQLParserListener.prototype.exitTypeCharStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeVarCharStmt.
SQLParserListener.prototype.enterTypeVarCharStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeVarCharStmt.
SQLParserListener.prototype.exitTypeVarCharStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeBinaryStmt.
SQLParserListener.prototype.enterTypeBinaryStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeBinaryStmt.
SQLParserListener.prototype.exitTypeBinaryStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeVarBinaryStmt.
SQLParserListener.prototype.enterTypeVarBinaryStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeVarBinaryStmt.
SQLParserListener.prototype.exitTypeVarBinaryStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeTinyBlobStmt.
SQLParserListener.prototype.enterTypeTinyBlobStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeTinyBlobStmt.
SQLParserListener.prototype.exitTypeTinyBlobStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeBlobStmt.
SQLParserListener.prototype.enterTypeBlobStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeBlobStmt.
SQLParserListener.prototype.exitTypeBlobStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeMediumBlobStmt.
SQLParserListener.prototype.enterTypeMediumBlobStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeMediumBlobStmt.
SQLParserListener.prototype.exitTypeMediumBlobStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeLongBlobStmt.
SQLParserListener.prototype.enterTypeLongBlobStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeLongBlobStmt.
SQLParserListener.prototype.exitTypeLongBlobStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeJsonStmt.
SQLParserListener.prototype.enterTypeJsonStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeJsonStmt.
SQLParserListener.prototype.exitTypeJsonStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeTinyTextStmt.
SQLParserListener.prototype.enterTypeTinyTextStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeTinyTextStmt.
SQLParserListener.prototype.exitTypeTinyTextStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeTextStmt.
SQLParserListener.prototype.enterTypeTextStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeTextStmt.
SQLParserListener.prototype.exitTypeTextStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeMediumTextStmt.
SQLParserListener.prototype.enterTypeMediumTextStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeMediumTextStmt.
SQLParserListener.prototype.exitTypeMediumTextStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeLongTextStmt.
SQLParserListener.prototype.enterTypeLongTextStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeLongTextStmt.
SQLParserListener.prototype.exitTypeLongTextStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeEnumStmt.
SQLParserListener.prototype.enterTypeEnumStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeEnumStmt.
SQLParserListener.prototype.exitTypeEnumStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#typeSetStmt.
SQLParserListener.prototype.enterTypeSetStmt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#typeSetStmt.
SQLParserListener.prototype.exitTypeSetStmt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#stringItem.
SQLParserListener.prototype.enterStringItem = function(ctx) {
};

// Exit a parse tree produced by SQLParser#stringItem.
SQLParserListener.prototype.exitStringItem = function(ctx) {
};


// Enter a parse tree produced by SQLParser#charsetName.
SQLParserListener.prototype.enterCharsetName = function(ctx) {
};

// Exit a parse tree produced by SQLParser#charsetName.
SQLParserListener.prototype.exitCharsetName = function(ctx) {
};


// Enter a parse tree produced by SQLParser#collateName.
SQLParserListener.prototype.enterCollateName = function(ctx) {
};

// Exit a parse tree produced by SQLParser#collateName.
SQLParserListener.prototype.exitCollateName = function(ctx) {
};


// Enter a parse tree produced by SQLParser#referenceOption.
SQLParserListener.prototype.enterReferenceOption = function(ctx) {
};

// Exit a parse tree produced by SQLParser#referenceOption.
SQLParserListener.prototype.exitReferenceOption = function(ctx) {
};


// Enter a parse tree produced by SQLParser#defaultValue.
SQLParserListener.prototype.enterDefaultValue = function(ctx) {
};

// Exit a parse tree produced by SQLParser#defaultValue.
SQLParserListener.prototype.exitDefaultValue = function(ctx) {
};


// Enter a parse tree produced by SQLParser#tableOptions.
SQLParserListener.prototype.enterTableOptions = function(ctx) {
};

// Exit a parse tree produced by SQLParser#tableOptions.
SQLParserListener.prototype.exitTableOptions = function(ctx) {
};


// Enter a parse tree produced by SQLParser#option.
SQLParserListener.prototype.enterOption = function(ctx) {
};

// Exit a parse tree produced by SQLParser#option.
SQLParserListener.prototype.exitOption = function(ctx) {
};


// Enter a parse tree produced by SQLParser#idName.
SQLParserListener.prototype.enterIdName = function(ctx) {
};

// Exit a parse tree produced by SQLParser#idName.
SQLParserListener.prototype.exitIdName = function(ctx) {
};



exports.SQLParserListener = SQLParserListener;