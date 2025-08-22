import { NamedNode } from '@/ast/model/named-node';

export class CommentedNode extends NamedNode {
  private comment: string;

  public getComment() {
    return this.comment;
  }

  public setComment(comment: string) {
    this.comment = comment;
  }
}
