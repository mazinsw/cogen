export class Comment {
  public static parse(comment: string): string {
    return comment.substring(1, comment.length - 1);
  }
}
