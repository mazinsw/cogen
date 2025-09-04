import { ANTLRErrorListener, RecognitionException, Recognizer } from 'antlr4ts';

export class ListErrorListener<T> implements ANTLRErrorListener<T> {
  private errorList: string[] = [];

  public syntaxError(
    _recognizer: Recognizer<T, any>,
    _offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    _e: RecognitionException | undefined,
  ): void {
    this.errorList.push(line + ':' + charPositionInLine + ': ' + msg);
  }

  public getNotificationList(): string[] {
    return this.errorList;
  }
}
