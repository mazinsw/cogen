import { NamedNode } from '@/ast/entity/named-node';
import { Comment } from '@/util/comment';

enum Attribute {
  DESCRIPTOR,
  HIDDEN,
  IMAGE,
  STYLES,
  INFORMATION,
  MASK,
  PASSWORD,
  RADIO,
  TEXT,
  GENDER,
  NAMES,
  UNIX_NAMES,
  ENUM_NAMES,
  PACKAGE,
  IDENTIFIER,
  INHERITED,
  UNKNOWN,
}

export class CommentedNode extends NamedNode {
  static readonly Attribute = Attribute;

  private comment: string | undefined;
  public parsedComment: string | null;
  attributes: Map<Attribute, string[]>;

  getComment() {
    return this.comment;
  }

  setComment(comment: string) {
    this.comment = comment;
  }

  prepare() {
    this.attributes = new Map<Attribute, string[]>();
    this.parsedComment = Comment.extract(
      this.comment,
      this.attributes,
      (entry) => {
        switch (entry) {
          case 'D':
            return Attribute.HIDDEN;
          case 'E':
            return Attribute.ENUM_NAMES;
          case 'F':
            return Attribute.INFORMATION;
          case 'G':
            return Attribute.GENDER;
          case 'H':
            return Attribute.INHERITED;
          case 'I':
            return Attribute.IMAGE;
          case 'K':
            return Attribute.PACKAGE;
          case 'L':
            return Attribute.STYLES;
          case 'M':
            return Attribute.MASK;
          case 'N':
            return Attribute.NAMES;
          case 'P':
            return Attribute.PASSWORD;
          case 'R':
            return Attribute.RADIO;
          case 'S':
            return Attribute.DESCRIPTOR;
          case 'T':
            return Attribute.TEXT;
          case 'U':
            return Attribute.UNIX_NAMES;
          case 'ID':
            return Attribute.IDENTIFIER;
          default:
            return Attribute.UNKNOWN;
        }
      },
    );
  }

  is(attribute: Attribute): boolean {
    return this.attributes.has(attribute);
  }

  getAttribute(attribute: Attribute, index?: number): string | undefined {
    return this.getAttributes(attribute)[index || 0];
  }

  getAttributes(attribute: Attribute): string[] {
    return this.attributes.get(attribute) || [];
  }
}
