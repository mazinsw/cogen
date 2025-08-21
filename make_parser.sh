#!/bin/sh

antlr4ts -encoding UTF-8 -listener -no-visitor -package grammar src/grammar/SQLLexer.g4
antlr4ts -encoding UTF-8 -listener -no-visitor -package grammar src/grammar/SQLParser.g4
antlr4ts -encoding UTF-8 -listener -no-visitor -package grammar src/grammar/TemplateLexer.g4
antlr4ts -encoding UTF-8 -listener -no-visitor -package grammar src/grammar/TemplateParser.g4
