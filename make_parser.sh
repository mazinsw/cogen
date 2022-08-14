#!/bin/sh

export CLASSPATH=lib/antlr-4.8-complete.jar
java org.antlr.v4.Tool -o . -Dlanguage=JavaScript -encoding UTF-8 -listener -no-visitor -package grammar src/grammar/SQLLexer.g4
java org.antlr.v4.Tool -o . -Dlanguage=JavaScript -encoding UTF-8 -listener -no-visitor -package grammar src/grammar/SQLParser.g4
java org.antlr.v4.Tool -o . -Dlanguage=JavaScript -encoding UTF-8 -listener -no-visitor -package grammar src/grammar/TemplateLexer.g4
java org.antlr.v4.Tool -o . -Dlanguage=JavaScript -encoding UTF-8 -listener -no-visitor -package grammar src/grammar/TemplateParser.g4
