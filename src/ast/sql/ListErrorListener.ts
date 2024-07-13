import { ANTLRErrorListener, RecognitionException, Recognizer } from "antlr4ts";

export class ListErrorListener<T> implements ANTLRErrorListener<T> {
  private errorList: string[];

  public constructor() {
    this.errorList = [];
  }

  public syntaxError(_: Recognizer<T, any>,
      __: T | undefined, line: number, charPositionInLine: number,
      msg: string, ___: RecognitionException | undefined
  ): void {
    this.errorList.push(line + ":" + charPositionInLine + ": " + msg);
  }

  public getNotificationList(): string[] {
    return this.errorList;
  }
}
