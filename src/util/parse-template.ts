import { ListErrorListener, SyntaxErrorInfo } from '@/ast/list-error-listener';
import { TemplateLexer } from '@/grammar/TemplateLexer';
import { TemplateContext, TemplateParser } from '@/grammar/TemplateParser';
import { CharStreams, CommonTokenStream, Token } from 'antlr4ts';

export interface ParsedTemplate {
  tree: TemplateContext;
  parser: TemplateParser;
  tokens: Token[];
  errors: SyntaxErrorInfo[];
}

/**
 * Parse template text without building the AST or touching the filesystem.
 * Always returns a tree (with error recovery) plus every syntax error found.
 */
export function parseTemplateText(text: string): ParsedTemplate {
  const lexer = new TemplateLexer(CharStreams.fromString(text));
  const lexerErrorListener = new ListErrorListener<number>();
  lexer.removeErrorListeners();
  lexer.addErrorListener(lexerErrorListener);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new TemplateParser(tokenStream);
  const parserErrorListener = new ListErrorListener<Token>();
  parser.removeErrorListeners();
  parser.addErrorListener(parserErrorListener);
  const tree = parser.template();
  tokenStream.fill();
  return {
    tree,
    parser,
    tokens: tokenStream.getTokens(),
    errors: [
      ...lexerErrorListener.getErrors(),
      ...parserErrorListener.getErrors(),
    ].sort((a, b) => a.line - b.line || a.column - b.column),
  };
}
