import * as fs from 'fs';
import * as path from 'path';
import {
  analyzeTemplate,
  getDiagnostics,
  getFoldingRanges,
  getMatchingCommands,
  getSemanticTokens,
} from '../src/core/analysis';

const samples = path.join(__dirname, '../../samples');

function sampleFiles(): string[] {
  const result: string[] = [];
  for (const dir of fs.readdirSync(samples, { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;
    for (const file of fs.readdirSync(path.join(samples, dir.name))) {
      result.push(path.join(samples, dir.name, file));
    }
  }
  return result;
}

const IF_ELSE = [
  '$[field.each]', //                0
  '  $[field.if(string)]', //        1
  '    text', //                     2
  '  $[field.else.if(integer)]', //  3
  '    number', //                   4
  '  $[field.else]', //              5
  '    other', //                    6
  '  $[field.end]', //               7
  '$[field.end]', //                 8
  '',
].join('\n');

describe('diagnostics', () => {
  it.each(sampleFiles())('no diagnostics on sample %s', (file) => {
    const analysis = analyzeTemplate(fs.readFileSync(file, 'utf8'));
    expect(getDiagnostics(analysis)).toEqual([]);
  });

  it('error at the replace replacement parenthesis', () => {
    const analysis = analyzeTemplate('abc\n  $[field.replace(a,b(c))]');
    expect(getDiagnostics(analysis)).toEqual([
      {
        range: {
          start: { line: 1, character: 24 },
          end: { line: 1, character: 25 },
        },
        message: "extraneous input ')' expecting ']'",
      },
    ]);
  });

  it('points to the block left open', () => {
    const analysis = analyzeTemplate('$[field.each]\nx\n');
    const diagnostics = getDiagnostics(analysis);
    expect(diagnostics).toContainEqual({
      range: {
        start: { line: 0, character: 0 },
        end: { line: 0, character: 13 },
      },
      message: 'Missing `$[field.end]` for `$[field.each]`',
    });
  });
});

describe('blocks', () => {
  it('collects nested blocks with else branches', () => {
    const { blocks } = analyzeTemplate(IF_ELSE);
    expect(blocks).toHaveLength(1);
    expect(blocks[0]).toMatchObject({
      kind: 'each',
      level: 'field',
      label: 'field.each',
    });
    const inner = blocks[0].children[0];
    expect(inner).toMatchObject({ kind: 'if', label: 'field.if(string)' });
    expect(inner.elses.map((range) => range.start.line)).toEqual([3, 5]);
    expect(inner.end).toEqual({
      start: { line: 7, character: 2 },
      end: { line: 7, character: 14 },
    });
  });

  it('folding ranges keep the markers visible', () => {
    expect(getFoldingRanges(analyzeTemplate(IF_ELSE))).toEqual([
      { start: 0, end: 7 },
      { start: 1, end: 2 },
      { start: 3, end: 4 },
      { start: 5, end: 6 },
    ]);
  });

  it('matching commands of the block under the cursor', () => {
    const analysis = analyzeTemplate(IF_ELSE);
    const lines = (position: { line: number; character: number }) =>
      getMatchingCommands(analysis, position).map((range) => range.start.line);
    expect(lines({ line: 5, character: 5 })).toEqual([1, 3, 5, 7]);
    expect(lines({ line: 8, character: 3 })).toEqual([0, 8]);
    expect(lines({ line: 2, character: 5 })).toEqual([]);
  });

  it('reverse each and regex blocks', () => {
    const { blocks } = analyzeTemplate(
      '$[reference.reverse_each]$[reference.end]$[table.~match(a(b)c)]x$[table.end]',
    );
    expect(blocks.map((block) => [block.kind, block.label])).toEqual([
      ['reverse_each', 'reference.reverse_each'],
      ['match', 'table.~match(a(b)c)'],
    ]);
  });
});

describe('semantic tokens', () => {
  it('classifies command parts by role', () => {
    const tokens = getSemanticTokens(
      analyzeTemplate(
        'x $[field.if(~string&reference)]$[Table.unix.replace(_(\\w+),$1,g)]$[field.end]',
      ),
    );
    const text =
      'x $[field.if(~string&reference)]$[Table.unix.replace(_(\\w+),$1,g)]$[field.end]';
    expect(
      tokens.map((token) => [
        text.substr(token.character, token.length),
        token.type,
      ]),
    ).toEqual([
      ['$[', 'macro'],
      ['field', 'namespace'],
      ['if', 'keyword'],
      ['~', 'operator'],
      ['string', 'type'],
      ['&', 'operator'],
      ['reference', 'enumMember'],
      [']', 'macro'],
      ['$[', 'macro'],
      ['Table', 'namespace'],
      ['unix', 'property'],
      ['replace', 'keyword'],
      ['_', 'regexp'],
      ['\\w+', 'regexp'],
      ['$1', 'string'],
      ['g', 'keyword'],
      [']', 'macro'],
      ['$[', 'macro'],
      ['field', 'namespace'],
      ['end', 'keyword'],
      [']', 'macro'],
    ]);
  });

  it('splits multi line tokens', () => {
    const tokens = getSemanticTokens(
      analyzeTemplate('$[field.match(a\nb)]x$[field.end]'),
    );
    const regex = tokens.filter((token) => token.type === 'regexp');
    expect(regex).toEqual([
      { line: 0, character: 14, length: 1, type: 'regexp' },
      { line: 1, character: 0, length: 1, type: 'regexp' },
    ]);
  });
});
