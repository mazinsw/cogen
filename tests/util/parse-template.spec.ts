import { parseTemplateText } from '@/util/parse-template';

describe('parseTemplateText', () => {
  it('valid template has no errors', () => {
    const result = parseTemplateText(
      '$[field.each]\n$[field.if(~(string|integer)&~null)]x$[field.end]\n$[field.end]',
    );
    expect(result.errors).toEqual([]);
    expect(result.tree.statement().length).toBe(1);
  });

  it('parentheses inside replace replacement', () => {
    const result = parseTemplateText('abc\n  $[field.replace(a,b(c))]');
    expect(result.errors).toEqual([
      {
        line: 2,
        column: 24,
        length: 1,
        message: "extraneous input ')' expecting ']'",
      },
    ]);
  });

  it('chained replace', () => {
    const result = parseTemplateText('$[field.replace(a,b).replace(c,d)]');
    expect(result.errors).toMatchObject([{ line: 1, column: 20, length: 1 }]);
  });

  it('invalid replace flags', () => {
    const result = parseTemplateText('$[field.replace(a,b,z)]');
    expect(result.errors).toMatchObject([
      {
        line: 1,
        column: 20,
        length: 1,
        message: "token recognition error at: 'z'",
      },
    ]);
  });

  it('mismatched end level', () => {
    const result = parseTemplateText('$[field.if(string)]x$[table.end]');
    expect(result.errors).toMatchObject([{ line: 1, column: 28, length: 3 }]);
  });

  it('returns all tokens', () => {
    const result = parseTemplateText('a$[table]');
    expect(result.tokens.map((token) => token.text)).toEqual([
      'a',
      '$[',
      'table',
      ']',
      '<EOF>',
    ]);
  });
});
