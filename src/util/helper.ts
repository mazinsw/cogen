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

export function recase(
  wordcase: string,
  input: string | undefined,
  upperDb?: string,
) {
  let entry = input || '';
  let result = entry;
  if (canUpper(entry, upperDb)) {
    entry = entry.toLocaleUpperCase();
  }
  if (
    isLowerCase(wordcase.charAt(0)) &&
    wordcase.length > 1 &&
    isUpperCase(wordcase.charAt(1))
  )
    result = camelCase(entry);
  else if (isLowerCase(wordcase.charAt(0))) result = result.toLowerCase();
  else if (wordcase.length > 1 && isUpperCase(wordcase.charAt(1)))
    result = result.toLocaleUpperCase();
  else if (
    wordcase.length > 1 &&
    isUpperCase(wordcase.charAt(0)) &&
    isLowerCase(wordcase.charAt(1))
  )
    result = result.substring(0, 1).toLocaleUpperCase() + result.substring(1);
  else result = entry;
  return result;
}

export function canUpper(entry: string, db?: string): boolean {
  if (!db) {
    return false;
  }
  return db.includes('|' + entry.toLocaleUpperCase() + '|');
}

export function isLowerCase(entry: string): boolean {
  return entry === entry.toLocaleLowerCase();
}

export function isUpperCase(entry: string): boolean {
  return entry === entry.toLocaleUpperCase();
}

export function camelCase(titleCase: string): string {
  let camelCase = '';
  for (let i = 0; i < titleCase.length; i++) {
    if (isUpperCase(titleCase.charAt(i))) {
      camelCase += titleCase.charAt(i).toLocaleLowerCase();
    } else {
      camelCase += titleCase.substring(i);
      break;
    }
  }
  return camelCase;
}
