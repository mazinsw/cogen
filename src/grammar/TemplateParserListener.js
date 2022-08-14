// Generated from src/grammar/TemplateParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by TemplateParser.
function TemplateParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

TemplateParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
TemplateParserListener.prototype.constructor = TemplateParserListener;

// Enter a parse tree produced by TemplateParser#template.
TemplateParserListener.prototype.enterTemplate = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#template.
TemplateParserListener.prototype.exitTemplate = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#statement.
TemplateParserListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#statement.
TemplateParserListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#block.
TemplateParserListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#block.
TemplateParserListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#tableIfStmt.
TemplateParserListener.prototype.enterTableIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#tableIfStmt.
TemplateParserListener.prototype.exitTableIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#tableExistsStmt.
TemplateParserListener.prototype.enterTableExistsStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#tableExistsStmt.
TemplateParserListener.prototype.exitTableExistsStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#tableEachStmt.
TemplateParserListener.prototype.enterTableEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#tableEachStmt.
TemplateParserListener.prototype.exitTableEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#tableElseIfStmt.
TemplateParserListener.prototype.enterTableElseIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#tableElseIfStmt.
TemplateParserListener.prototype.exitTableElseIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#tableElseExistsStmt.
TemplateParserListener.prototype.enterTableElseExistsStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#tableElseExistsStmt.
TemplateParserListener.prototype.exitTableElseExistsStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#tableElseEachStmt.
TemplateParserListener.prototype.enterTableElseEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#tableElseEachStmt.
TemplateParserListener.prototype.exitTableElseEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#tableElseEndStmt.
TemplateParserListener.prototype.enterTableElseEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#tableElseEndStmt.
TemplateParserListener.prototype.exitTableElseEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#tableElseStmt.
TemplateParserListener.prototype.enterTableElseStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#tableElseStmt.
TemplateParserListener.prototype.exitTableElseStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#tableElseCondEndStmt.
TemplateParserListener.prototype.enterTableElseCondEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#tableElseCondEndStmt.
TemplateParserListener.prototype.exitTableElseCondEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#tableElseCondStmt.
TemplateParserListener.prototype.enterTableElseCondStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#tableElseCondStmt.
TemplateParserListener.prototype.exitTableElseCondStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#inheritedIfStmt.
TemplateParserListener.prototype.enterInheritedIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#inheritedIfStmt.
TemplateParserListener.prototype.exitInheritedIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#inheritedExistsStmt.
TemplateParserListener.prototype.enterInheritedExistsStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#inheritedExistsStmt.
TemplateParserListener.prototype.exitInheritedExistsStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#inheritedEachStmt.
TemplateParserListener.prototype.enterInheritedEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#inheritedEachStmt.
TemplateParserListener.prototype.exitInheritedEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#inheritedElseIfStmt.
TemplateParserListener.prototype.enterInheritedElseIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#inheritedElseIfStmt.
TemplateParserListener.prototype.exitInheritedElseIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#inheritedElseExistsStmt.
TemplateParserListener.prototype.enterInheritedElseExistsStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#inheritedElseExistsStmt.
TemplateParserListener.prototype.exitInheritedElseExistsStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#inheritedElseEachStmt.
TemplateParserListener.prototype.enterInheritedElseEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#inheritedElseEachStmt.
TemplateParserListener.prototype.exitInheritedElseEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#inheritedElseEndStmt.
TemplateParserListener.prototype.enterInheritedElseEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#inheritedElseEndStmt.
TemplateParserListener.prototype.exitInheritedElseEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#inheritedElseStmt.
TemplateParserListener.prototype.enterInheritedElseStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#inheritedElseStmt.
TemplateParserListener.prototype.exitInheritedElseStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#inheritedElseCondEndStmt.
TemplateParserListener.prototype.enterInheritedElseCondEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#inheritedElseCondEndStmt.
TemplateParserListener.prototype.exitInheritedElseCondEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#inheritedElseCondStmt.
TemplateParserListener.prototype.enterInheritedElseCondStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#inheritedElseCondStmt.
TemplateParserListener.prototype.exitInheritedElseCondStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#referenceIfStmt.
TemplateParserListener.prototype.enterReferenceIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#referenceIfStmt.
TemplateParserListener.prototype.exitReferenceIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#referenceExistsStmt.
TemplateParserListener.prototype.enterReferenceExistsStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#referenceExistsStmt.
TemplateParserListener.prototype.exitReferenceExistsStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#referenceEachStmt.
TemplateParserListener.prototype.enterReferenceEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#referenceEachStmt.
TemplateParserListener.prototype.exitReferenceEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#referenceElseIfStmt.
TemplateParserListener.prototype.enterReferenceElseIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#referenceElseIfStmt.
TemplateParserListener.prototype.exitReferenceElseIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#referenceElseExistsStmt.
TemplateParserListener.prototype.enterReferenceElseExistsStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#referenceElseExistsStmt.
TemplateParserListener.prototype.exitReferenceElseExistsStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#referenceElseEachStmt.
TemplateParserListener.prototype.enterReferenceElseEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#referenceElseEachStmt.
TemplateParserListener.prototype.exitReferenceElseEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#referenceElseEndStmt.
TemplateParserListener.prototype.enterReferenceElseEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#referenceElseEndStmt.
TemplateParserListener.prototype.exitReferenceElseEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#referenceElseStmt.
TemplateParserListener.prototype.enterReferenceElseStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#referenceElseStmt.
TemplateParserListener.prototype.exitReferenceElseStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#referenceElseCondEndStmt.
TemplateParserListener.prototype.enterReferenceElseCondEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#referenceElseCondEndStmt.
TemplateParserListener.prototype.exitReferenceElseCondEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#referenceElseCondStmt.
TemplateParserListener.prototype.enterReferenceElseCondStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#referenceElseCondStmt.
TemplateParserListener.prototype.exitReferenceElseCondStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldIfStmt.
TemplateParserListener.prototype.enterFieldIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldIfStmt.
TemplateParserListener.prototype.exitFieldIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldExistsStmt.
TemplateParserListener.prototype.enterFieldExistsStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldExistsStmt.
TemplateParserListener.prototype.exitFieldExistsStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldMatchStmt.
TemplateParserListener.prototype.enterFieldMatchStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldMatchStmt.
TemplateParserListener.prototype.exitFieldMatchStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldContainsStmt.
TemplateParserListener.prototype.enterFieldContainsStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldContainsStmt.
TemplateParserListener.prototype.exitFieldContainsStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldEachStmt.
TemplateParserListener.prototype.enterFieldEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldEachStmt.
TemplateParserListener.prototype.exitFieldEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldElseIfStmt.
TemplateParserListener.prototype.enterFieldElseIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldElseIfStmt.
TemplateParserListener.prototype.exitFieldElseIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldElseExistsStmt.
TemplateParserListener.prototype.enterFieldElseExistsStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldElseExistsStmt.
TemplateParserListener.prototype.exitFieldElseExistsStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldElseMatchStmt.
TemplateParserListener.prototype.enterFieldElseMatchStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldElseMatchStmt.
TemplateParserListener.prototype.exitFieldElseMatchStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldElseContainsStmt.
TemplateParserListener.prototype.enterFieldElseContainsStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldElseContainsStmt.
TemplateParserListener.prototype.exitFieldElseContainsStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldElseEachStmt.
TemplateParserListener.prototype.enterFieldElseEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldElseEachStmt.
TemplateParserListener.prototype.exitFieldElseEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldElseEndStmt.
TemplateParserListener.prototype.enterFieldElseEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldElseEndStmt.
TemplateParserListener.prototype.exitFieldElseEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldElseStmt.
TemplateParserListener.prototype.enterFieldElseStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldElseStmt.
TemplateParserListener.prototype.exitFieldElseStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldElseCondEndStmt.
TemplateParserListener.prototype.enterFieldElseCondEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldElseCondEndStmt.
TemplateParserListener.prototype.exitFieldElseCondEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldElseCondStmt.
TemplateParserListener.prototype.enterFieldElseCondStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldElseCondStmt.
TemplateParserListener.prototype.exitFieldElseCondStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#descriptorIfStmt.
TemplateParserListener.prototype.enterDescriptorIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#descriptorIfStmt.
TemplateParserListener.prototype.exitDescriptorIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#descriptorMatchStmt.
TemplateParserListener.prototype.enterDescriptorMatchStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#descriptorMatchStmt.
TemplateParserListener.prototype.exitDescriptorMatchStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#descriptorContainsStmt.
TemplateParserListener.prototype.enterDescriptorContainsStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#descriptorContainsStmt.
TemplateParserListener.prototype.exitDescriptorContainsStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#descriptorEachStmt.
TemplateParserListener.prototype.enterDescriptorEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#descriptorEachStmt.
TemplateParserListener.prototype.exitDescriptorEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#descriptorElseIfStmt.
TemplateParserListener.prototype.enterDescriptorElseIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#descriptorElseIfStmt.
TemplateParserListener.prototype.exitDescriptorElseIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#descriptorElseMatchStmt.
TemplateParserListener.prototype.enterDescriptorElseMatchStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#descriptorElseMatchStmt.
TemplateParserListener.prototype.exitDescriptorElseMatchStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#descriptorElseContainsStmt.
TemplateParserListener.prototype.enterDescriptorElseContainsStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#descriptorElseContainsStmt.
TemplateParserListener.prototype.exitDescriptorElseContainsStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#descriptorElseEachStmt.
TemplateParserListener.prototype.enterDescriptorElseEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#descriptorElseEachStmt.
TemplateParserListener.prototype.exitDescriptorElseEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#descriptorElseEndStmt.
TemplateParserListener.prototype.enterDescriptorElseEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#descriptorElseEndStmt.
TemplateParserListener.prototype.exitDescriptorElseEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#descriptorElseStmt.
TemplateParserListener.prototype.enterDescriptorElseStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#descriptorElseStmt.
TemplateParserListener.prototype.exitDescriptorElseStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#descriptorElseCondEndStmt.
TemplateParserListener.prototype.enterDescriptorElseCondEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#descriptorElseCondEndStmt.
TemplateParserListener.prototype.exitDescriptorElseCondEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#descriptorElseCondStmt.
TemplateParserListener.prototype.enterDescriptorElseCondStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#descriptorElseCondStmt.
TemplateParserListener.prototype.exitDescriptorElseCondStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#indexIfStmt.
TemplateParserListener.prototype.enterIndexIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#indexIfStmt.
TemplateParserListener.prototype.exitIndexIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#indexEachStmt.
TemplateParserListener.prototype.enterIndexEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#indexEachStmt.
TemplateParserListener.prototype.exitIndexEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#indexElseIfStmt.
TemplateParserListener.prototype.enterIndexElseIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#indexElseIfStmt.
TemplateParserListener.prototype.exitIndexElseIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#indexElseEachStmt.
TemplateParserListener.prototype.enterIndexElseEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#indexElseEachStmt.
TemplateParserListener.prototype.exitIndexElseEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#indexElseEndStmt.
TemplateParserListener.prototype.enterIndexElseEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#indexElseEndStmt.
TemplateParserListener.prototype.exitIndexElseEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#indexElseStmt.
TemplateParserListener.prototype.enterIndexElseStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#indexElseStmt.
TemplateParserListener.prototype.exitIndexElseStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#indexElseCondEndStmt.
TemplateParserListener.prototype.enterIndexElseCondEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#indexElseCondEndStmt.
TemplateParserListener.prototype.exitIndexElseCondEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#uniqueIfStmt.
TemplateParserListener.prototype.enterUniqueIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#uniqueIfStmt.
TemplateParserListener.prototype.exitUniqueIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#uniqueEachStmt.
TemplateParserListener.prototype.enterUniqueEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#uniqueEachStmt.
TemplateParserListener.prototype.exitUniqueEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#uniqueElseIfStmt.
TemplateParserListener.prototype.enterUniqueElseIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#uniqueElseIfStmt.
TemplateParserListener.prototype.exitUniqueElseIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#uniqueElseEachStmt.
TemplateParserListener.prototype.enterUniqueElseEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#uniqueElseEachStmt.
TemplateParserListener.prototype.exitUniqueElseEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#uniqueElseEndStmt.
TemplateParserListener.prototype.enterUniqueElseEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#uniqueElseEndStmt.
TemplateParserListener.prototype.exitUniqueElseEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#uniqueElseStmt.
TemplateParserListener.prototype.enterUniqueElseStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#uniqueElseStmt.
TemplateParserListener.prototype.exitUniqueElseStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#uniqueElseCondEndStmt.
TemplateParserListener.prototype.enterUniqueElseCondEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#uniqueElseCondEndStmt.
TemplateParserListener.prototype.exitUniqueElseCondEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#primaryIfStmt.
TemplateParserListener.prototype.enterPrimaryIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#primaryIfStmt.
TemplateParserListener.prototype.exitPrimaryIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#primaryEachStmt.
TemplateParserListener.prototype.enterPrimaryEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#primaryEachStmt.
TemplateParserListener.prototype.exitPrimaryEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#primaryElseIfStmt.
TemplateParserListener.prototype.enterPrimaryElseIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#primaryElseIfStmt.
TemplateParserListener.prototype.exitPrimaryElseIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#primaryElseEachStmt.
TemplateParserListener.prototype.enterPrimaryElseEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#primaryElseEachStmt.
TemplateParserListener.prototype.exitPrimaryElseEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#primaryElseEndStmt.
TemplateParserListener.prototype.enterPrimaryElseEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#primaryElseEndStmt.
TemplateParserListener.prototype.exitPrimaryElseEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#primaryElseStmt.
TemplateParserListener.prototype.enterPrimaryElseStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#primaryElseStmt.
TemplateParserListener.prototype.exitPrimaryElseStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#primaryElseCondEndStmt.
TemplateParserListener.prototype.enterPrimaryElseCondEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#primaryElseCondEndStmt.
TemplateParserListener.prototype.exitPrimaryElseCondEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#constraintIfStmt.
TemplateParserListener.prototype.enterConstraintIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#constraintIfStmt.
TemplateParserListener.prototype.exitConstraintIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#constraintEachStmt.
TemplateParserListener.prototype.enterConstraintEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#constraintEachStmt.
TemplateParserListener.prototype.exitConstraintEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#constraintElseIfStmt.
TemplateParserListener.prototype.enterConstraintElseIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#constraintElseIfStmt.
TemplateParserListener.prototype.exitConstraintElseIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#constraintElseEachStmt.
TemplateParserListener.prototype.enterConstraintElseEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#constraintElseEachStmt.
TemplateParserListener.prototype.exitConstraintElseEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#constraintElseEndStmt.
TemplateParserListener.prototype.enterConstraintElseEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#constraintElseEndStmt.
TemplateParserListener.prototype.exitConstraintElseEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#constraintElseStmt.
TemplateParserListener.prototype.enterConstraintElseStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#constraintElseStmt.
TemplateParserListener.prototype.exitConstraintElseStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#constraintElseCondEndStmt.
TemplateParserListener.prototype.enterConstraintElseCondEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#constraintElseCondEndStmt.
TemplateParserListener.prototype.exitConstraintElseCondEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#foreignIfStmt.
TemplateParserListener.prototype.enterForeignIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#foreignIfStmt.
TemplateParserListener.prototype.exitForeignIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#foreignEachStmt.
TemplateParserListener.prototype.enterForeignEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#foreignEachStmt.
TemplateParserListener.prototype.exitForeignEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#foreignElseIfStmt.
TemplateParserListener.prototype.enterForeignElseIfStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#foreignElseIfStmt.
TemplateParserListener.prototype.exitForeignElseIfStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#foreignElseEachStmt.
TemplateParserListener.prototype.enterForeignElseEachStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#foreignElseEachStmt.
TemplateParserListener.prototype.exitForeignElseEachStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#foreignElseEndStmt.
TemplateParserListener.prototype.enterForeignElseEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#foreignElseEndStmt.
TemplateParserListener.prototype.exitForeignElseEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#foreignElseStmt.
TemplateParserListener.prototype.enterForeignElseStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#foreignElseStmt.
TemplateParserListener.prototype.exitForeignElseStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#foreignElseCondEndStmt.
TemplateParserListener.prototype.enterForeignElseCondEndStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#foreignElseCondEndStmt.
TemplateParserListener.prototype.exitForeignElseCondEndStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#constant.
TemplateParserListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#constant.
TemplateParserListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#tableStmt.
TemplateParserListener.prototype.enterTableStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#tableStmt.
TemplateParserListener.prototype.exitTableStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#tableProps.
TemplateParserListener.prototype.enterTableProps = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#tableProps.
TemplateParserListener.prototype.exitTableProps = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#tableProp.
TemplateParserListener.prototype.enterTableProp = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#tableProp.
TemplateParserListener.prototype.exitTableProp = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldStmt.
TemplateParserListener.prototype.enterFieldStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldStmt.
TemplateParserListener.prototype.exitFieldStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldProps.
TemplateParserListener.prototype.enterFieldProps = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldProps.
TemplateParserListener.prototype.exitFieldProps = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldProp.
TemplateParserListener.prototype.enterFieldProp = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldProp.
TemplateParserListener.prototype.exitFieldProp = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#indexNameStmt.
TemplateParserListener.prototype.enterIndexNameStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#indexNameStmt.
TemplateParserListener.prototype.exitIndexNameStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#uniqueNameStmt.
TemplateParserListener.prototype.enterUniqueNameStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#uniqueNameStmt.
TemplateParserListener.prototype.exitUniqueNameStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#primaryNameStmt.
TemplateParserListener.prototype.enterPrimaryNameStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#primaryNameStmt.
TemplateParserListener.prototype.exitPrimaryNameStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#constraintNameStmt.
TemplateParserListener.prototype.enterConstraintNameStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#constraintNameStmt.
TemplateParserListener.prototype.exitConstraintNameStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#foreignNameStmt.
TemplateParserListener.prototype.enterForeignNameStmt = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#foreignNameStmt.
TemplateParserListener.prototype.exitForeignNameStmt = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#text.
TemplateParserListener.prototype.enterText = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#text.
TemplateParserListener.prototype.exitText = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#tableLevel.
TemplateParserListener.prototype.enterTableLevel = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#tableLevel.
TemplateParserListener.prototype.exitTableLevel = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldLevel.
TemplateParserListener.prototype.enterFieldLevel = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldLevel.
TemplateParserListener.prototype.exitFieldLevel = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#regex.
TemplateParserListener.prototype.enterRegex = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#regex.
TemplateParserListener.prototype.exitRegex = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#word.
TemplateParserListener.prototype.enterWord = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#word.
TemplateParserListener.prototype.exitWord = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#tableCondition.
TemplateParserListener.prototype.enterTableCondition = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#tableCondition.
TemplateParserListener.prototype.exitTableCondition = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#fieldCondition.
TemplateParserListener.prototype.enterFieldCondition = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#fieldCondition.
TemplateParserListener.prototype.exitFieldCondition = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#indexCondition.
TemplateParserListener.prototype.enterIndexCondition = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#indexCondition.
TemplateParserListener.prototype.exitIndexCondition = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#constraintCondition.
TemplateParserListener.prototype.enterConstraintCondition = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#constraintCondition.
TemplateParserListener.prototype.exitConstraintCondition = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#condition.
TemplateParserListener.prototype.enterCondition = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#condition.
TemplateParserListener.prototype.exitCondition = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#expression.
TemplateParserListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#expression.
TemplateParserListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#attribute.
TemplateParserListener.prototype.enterAttribute = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#attribute.
TemplateParserListener.prototype.exitAttribute = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#property.
TemplateParserListener.prototype.enterProperty = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#property.
TemplateParserListener.prototype.exitProperty = function(ctx) {
};


// Enter a parse tree produced by TemplateParser#type.
TemplateParserListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by TemplateParser#type.
TemplateParserListener.prototype.exitType = function(ctx) {
};



exports.TemplateParserListener = TemplateParserListener;