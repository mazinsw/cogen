import {
  commandAtCursor,
  getCompletions,
  getHover,
} from '../src/core/commands';

function complete(textWithCursor: string) {
  const character = textWithCursor.indexOf('§');
  const text = textWithCursor.replace('§', '');
  return getCompletions(text, character);
}

function labels(textWithCursor: string): string[] {
  return complete(textWithCursor)?.items.map((item) => item.label) ?? [];
}

describe('commandAtCursor', () => {
  it('ignores closed commands and brackets inside parentheses', () => {
    expect(commandAtCursor('$[table] x', 9)).toBeUndefined();
    expect(commandAtCursor('$[field.match([a-z]', 19)).toMatchObject({
      before: 'field.match([a-z]',
      openCalls: ['match'],
    });
  });
});

describe('completion', () => {
  it('levels after $[', () => {
    const result = complete('x $[fi§');
    expect(result.prefixLength).toBe(2);
    expect(labels('x $[§')).toEqual(
      expect.arrayContaining([
        'table',
        'field',
        'reference',
        'primary_key',
        'comment',
      ]),
    );
  });

  it('properties and controls of the level', () => {
    const table = labels('$[table.§');
    expect(table).toEqual(
      expect.arrayContaining([
        'unix',
        'plural',
        'each',
        'finds',
        'end',
        'replace',
      ]),
    );
    expect(table).not.toContain('reverse_each');
    const field = labels('$[Field.§');
    expect(field).toEqual(
      expect.arrayContaining(['norm', 'expression', 'reverse_each', 'if']),
    );
    expect(labels('$[index.§')).toEqual([
      'if',
      'each',
      'else',
      'end',
      'name',
      'replace',
    ]);
  });

  it('snippets for controls with arguments', () => {
    const items = complete('$[field.§').items;
    expect(items.find((item) => item.label === 'if').snippet).toBe('if($1)');
    expect(items.find((item) => item.label === 'each').snippet).toBeUndefined();
  });

  it('else conditions', () => {
    expect(labels('$[field.else.§')).toEqual([
      'if',
      'exists',
      'match',
      'contains',
      'each',
      'reverse_each',
    ]);
  });

  it('types and attributes inside conditions', () => {
    const items = labels('$[field.if(~(string|re§');
    expect(items).toEqual(
      expect.arrayContaining([
        'string',
        'integer',
        'reference',
        'generated',
        'comment',
      ]),
    );
    expect(complete('$[field.if(~(string|re§').prefixLength).toBe(2);
  });

  it('nothing inside regex and replace arguments', () => {
    expect(complete('$[field.match(§')).toBeUndefined();
    expect(complete('$[field.replace(a,§')).toBeUndefined();
    expect(complete('plain text§')).toBeUndefined();
  });
});

describe('hover', () => {
  function hover(textWithCursor: string) {
    const character = textWithCursor.indexOf('§');
    return getHover(textWithCursor.replace('§', ''), character);
  }

  it('property documentation from README', () => {
    expect(hover('$[table.un§ix]').markdown).toContain(
      'Table name in unix format',
    );
    expect(hover('$[table.unix.plu§ral]').markdown).toContain('plural');
    expect(hover('$[descriptor.no§rm]').markdown).toContain(
      'name of field normalized',
    );
  });

  it('control and attribute documentation', () => {
    expect(hover('$[field.ea§ch]').markdown).toContain('for each');
    expect(hover('$[field.if(gene§rated)]').markdown).toContain(
      'generated column',
    );
    expect(hover('$[field.if(str§ing)]').markdown).toContain('field type');
  });

  it('nothing outside commands', () => {
    expect(hover('tab§le')).toBeUndefined();
    expect(hover('$[field.match(ab§c)]')).toBeUndefined();
  });
});
