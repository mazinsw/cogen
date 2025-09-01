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
    switch (cmm[i]) {
      case '\\':
        if (i + 1 >= cmm.length) break;
        i++;
        if (cmm[i] == 'n') comment += '\n';
        else if (cmm[i] == 't') comment += '\t';
        else if (cmm[i] == 'r') comment += '\r';
        else comment += cmm[i];
        break;
      default:
        comment += cmm[i];
        break;
    }
  }
  return comment;
}

export function recase(wordcase: string, input: string, upperDb?: string) {
  let entry = input;
  let result = entry;
  if (canUpper(entry, upperDb)) {
    entry = entry.toLocaleUpperCase();
  }
  if (
    isLowerCase(wordcase[0]) &&
    wordcase.length > 1 &&
    isUpperCase(wordcase[1])
  )
    result = camelCase(entry);
  else if (isLowerCase(wordcase[0])) result = result.toLowerCase();
  else if (wordcase.length > 1 && isUpperCase(wordcase[1]))
    result = result.toLocaleUpperCase();
  else if (
    wordcase.length > 1 &&
    isUpperCase(wordcase[0]) &&
    isLowerCase(wordcase[1])
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
    if (isUpperCase(titleCase[i])) {
      camelCase += titleCase[i].toLocaleLowerCase();
    } else {
      camelCase += titleCase.substring(i);
      break;
    }
  }
  return camelCase;
}

export function firstLetters(typeName: string) {
  let prefix = '';
  let lastIsUpperCase = false;
  for (let i = 0; i < typeName.length; i++) {
    const ch = typeName[i];
    if (isUpperCase(ch) && !lastIsUpperCase) {
      prefix += ch.toLocaleLowerCase();
      lastIsUpperCase = true;
    } else if (isLowerCase(ch)) {
      lastIsUpperCase = false;
    }
  }
  return prefix;
}

export function wrapText(text: string, maxChars: number): string[] {
  const tokens = text.split(/(\s+)/); // keep space as tokens
  const lines: string[] = [];
  let currentLine = '';

  for (let token of tokens) {
    while (token.length > 0) {
      let freeWidth = maxChars - currentLine.length;
      if (
        currentLine.trim().length > 0 &&
        freeWidth < token.length &&
        token.length <= maxChars
      ) {
        lines.push(currentLine.trim());
        currentLine = '';
      }
      if (currentLine.length === 0) {
        token = token.trim();
      }
      freeWidth = maxChars - currentLine.length;
      token = currentLine + token;
      currentLine = token.slice(0, maxChars);
      token = token.slice(maxChars);
    }
  }
  if (currentLine.trim().length > 0) {
    lines.push(currentLine.trim());
  }
  return lines;
}
