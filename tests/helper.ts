import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { SQLLexer } from '../src/grammar/SQLLexer';
import { SQLParser } from '../src/grammar/SQLParser';
import { TemplateLexer } from '../src/grammar/TemplateLexer';
import { TemplateParser } from '../src/grammar/TemplateParser';

export function parseSQL(input: string): SQLParser {
  const chars = CharStreams.fromString(input);
  const lexer = new SQLLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  return new SQLParser(tokens);
}

export function parseTemplate(input: string): TemplateParser {
  const chars = CharStreams.fromString(input);
  const lexer = new TemplateLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  return new TemplateParser(tokens);
}
