@echo off

SET CLASSPATH=.;%~dp0\lib\antlr-4.8-complete.jar;%CLASSPATH%
java org.antlr.v4.Tool -o . -Dlanguage=JavaScript -encoding UTF-8 -listener -no-visitor -package parser src\parser\SQLLexer.g4
java org.antlr.v4.Tool -o . -Dlanguage=JavaScript -encoding UTF-8 -listener -no-visitor -package parser src\parser\SQLParser.g4
java org.antlr.v4.Tool -o . -Dlanguage=JavaScript -encoding UTF-8 -listener -no-visitor -package parser src\parser\TemplateLexer.g4
java org.antlr.v4.Tool -o . -Dlanguage=JavaScript -encoding UTF-8 -listener -no-visitor -package parser src\parser\TemplateParser.g4
