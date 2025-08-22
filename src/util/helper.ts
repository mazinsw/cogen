import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { SQLLexer } from '../grammar/SQLLexer';
import { SQLParser } from '../grammar/SQLParser';
import { TemplateLexer } from '../grammar/TemplateLexer';
import { TemplateParser } from '../grammar/TemplateParser';

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

export function resolveSlashs(cmm: string): string {
  let comment = '';
  for (let i = 0; i < cmm.length; i++) {
    switch (cmm.charAt(i)) {
      case '\\':
        if (i + 1 >= cmm.length) break;
        i++;
        if (cmm.charAt(i) == 'n') comment += '\n';
        else if (cmm.charAt(i) == 't') comment += '\t';
        else if (cmm.charAt(i) == 'r') comment += '\r';
        else comment += cmm.charAt(i);
        break;
      default:
        comment += cmm.charAt(i);
        break;
    }
  }
  return comment;
}
