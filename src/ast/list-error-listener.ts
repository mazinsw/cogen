import {
  ANTLRErrorListener,
  RecognitionException,
  Recognizer,
  Token,
} from 'antlr4ts';

export interface SyntaxErrorInfo {
  /** 1-based line */
  line: number;
  /** 0-based column */
  column: number;
  /** number of characters covered by the offending symbol */
  length: number;
  message: string;
}

export class ListErrorListener<T> implements ANTLRErrorListener<T> {
  private errorList: string[] = [];
  private errors: SyntaxErrorInfo[] = [];

  public syntaxError(
    _recognizer: Recognizer<T, any>,
    offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    _e: RecognitionException | undefined,
  ): void {
    this.errorList.push(line + ':' + charPositionInLine + ': ' + msg);
    this.errors.push({
      line,
      column: charPositionInLine,
      length: symbolLength(offendingSymbol),
      message: msg,
    });
  }

  public getNotificationList(): string[] {
    return this.errorList;
  }

  public getErrors(): SyntaxErrorInfo[] {
    return this.errors;
  }
}

function symbolLength(symbol: unknown): number {
  if (!symbol || typeof symbol !== 'object') {
    // lexer errors have no token, mark a single character
    return 1;
  }
  const token = symbol as Token;
  if (token.type === Token.EOF) {
    return 0;
  }
  return Math.max(token.stopIndex - token.startIndex + 1, 1);
}
