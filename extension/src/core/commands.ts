import { DOCS, VOCABULARY } from '../generated/vocabulary';

/* ---------------------------------------------------------------------------
 * Locating the command around a cursor
 * ------------------------------------------------------------------------- */

export interface CommandAtCursor {
  /** offset of `$[` in the line */
  start: number;
  /** text between `$[` and the cursor */
  before: string;
  /** opening parentheses not closed before the cursor, with the word before each one */
  openCalls: string[];
}

/**
 * Find the unclosed `$[` command on the line before `character`.
 * Commands are single line; `]` inside parentheses (regex arguments) does not close.
 */
export function commandAtCursor(
  lineText: string,
  character: number,
): CommandAtCursor | undefined {
  const start = lineText.lastIndexOf('$[', character - 2);
  if (start < 0) {
    return undefined;
  }
  const before = lineText.slice(start + 2, character);
  const openCalls: string[] = [];
  for (let i = 0; i < before.length; i++) {
    const ch = before[i];
    if (ch === '\\') {
      i++;
    } else if (ch === '(') {
      const word = before
        .slice(0, i)
        .match(/(\w*)$/)![1]
        .toLowerCase();
      openCalls.push(word);
    } else if (ch === ')') {
      openCalls.pop();
    } else if (ch === ']' && openCalls.length === 0) {
      return undefined;
    }
  }
  return { start, before, openCalls };
}

/* ---------------------------------------------------------------------------
 * Completion
 * ------------------------------------------------------------------------- */

export type CompletionKind =
  | 'level'
  | 'property'
  | 'control'
  | 'type'
  | 'attribute';

export interface CompletionEntry {
  label: string;
  kind: CompletionKind;
  /** snippet text, `$1` marks the cursor */
  snippet?: string;
  documentation?: string;
}

export interface CompletionResult {
  /** length of the word being completed, ending at the cursor */
  prefixLength: number;
  items: CompletionEntry[];
}

const CONDITION_CALLS = new Set(['if', 'each', 'reverse_each', 'exists']);
const CALLS_WITH_ARGUMENT = new Set([
  'if',
  'exists',
  'match',
  'finds',
  'contains',
  'replace',
]);
const TABLE_LEVELS = new Set(VOCABULARY.tableLevels);
const FIELD_LEVELS = new Set(VOCABULARY.fieldLevels);
const CONSTRAINT_LEVELS = new Set(VOCABULARY.constraintLevels);

export const ALL_LEVELS = unique([
  ...VOCABULARY.tableLevels,
  ...VOCABULARY.fieldLevels,
  ...VOCABULARY.constraintLevels,
  ...Object.keys(VOCABULARY.controls),
]);

function unique<T>(items: T[]): T[] {
  return [...new Set(items)];
}

function controlsOf(level: string): string[] {
  return (VOCABULARY.controls as Record<string, string[]>)[level] ?? [];
}

function propsOf(level: string): string[] {
  if (TABLE_LEVELS.has(level)) return VOCABULARY.tableProps;
  if (FIELD_LEVELS.has(level)) return VOCABULARY.fieldProps;
  if (CONSTRAINT_LEVELS.has(level)) return ['name'];
  return [];
}

function control(label: string, level: string): CompletionEntry {
  return {
    label,
    kind: 'control',
    snippet: CALLS_WITH_ARGUMENT.has(label) ? `${label}($1)` : undefined,
    documentation: lookupDoc([level, label]),
  };
}

export function getCompletions(
  lineText: string,
  character: number,
): CompletionResult | undefined {
  const command = commandAtCursor(lineText, character);
  if (!command) {
    return undefined;
  }
  const prefixLength = command.before.match(/\w*$/)![0].length;
  if (command.openCalls.length > 0) {
    return insideCondition(command)
      ? { prefixLength, items: conditionItems() }
      : undefined;
  }
  const segments = command.before.toLowerCase().replace(/~/g, '').split('.');
  if (segments.length === 1) {
    return {
      prefixLength,
      items: ALL_LEVELS.map((label) => ({
        label,
        kind: 'level' as const,
        documentation: lookupDoc([label]),
      })),
    };
  }
  const level = segments[0];
  const previous = segments.slice(1, -1).filter(Boolean);
  if (previous[previous.length - 1] === 'else') {
    // `$[field.else.if(...)]`
    return {
      prefixLength,
      items: controlsOf(level).map((label) => control(label, level)),
    };
  }
  const items: CompletionEntry[] = [];
  if (previous.length === 0) {
    items.push(...controlsOf(level).map((label) => control(label, level)));
    items.push(control('else', level), control('end', level));
  }
  items.push(
    ...propsOf(level).map((label) => ({
      label,
      kind: 'property' as const,
      documentation: lookupDoc([level, ...previous, label]),
    })),
  );
  if (propsOf(level).length > 0) {
    items.push(control('replace', level));
  }
  return { prefixLength, items };
}

/** Inside `if(`, `each(`... including nested priority parentheses */
function insideCondition(command: CommandAtCursor): boolean {
  return (
    CONDITION_CALLS.has(command.openCalls[0]) &&
    command.openCalls.every((call) => call === '' || CONDITION_CALLS.has(call))
  );
}

function conditionItems(): CompletionEntry[] {
  const types = VOCABULARY.types.map((label) => ({
    label,
    kind: 'type' as const,
    documentation: `Field type \`${label}\``,
  }));
  const typeSet = new Set(VOCABULARY.types);
  const attributes = unique([
    ...VOCABULARY.properties,
    ...VOCABULARY.attributes,
  ])
    .filter((label) => !typeSet.has(label))
    .map((label) => ({
      label,
      kind: 'attribute' as const,
      documentation: DOCS[`attr:${label}`],
    }));
  return [...types, ...attributes];
}

/* ---------------------------------------------------------------------------
 * Hover
 * ------------------------------------------------------------------------- */

const CONTROL_DOCS: Record<string, string> = {
  each: 'Loop: repeats the content for each item, optionally filtered by a condition, until the matching `end`.',
  reverse_each: 'Loop in reverse order until the matching `end`.',
  if: 'Condition: outputs the content when the condition is true. Supports `else`, `else.if(...)` and `end`.',
  exists: 'Condition: true when some field matches the type or attribute.',
  match: 'Condition: true when the regex matches the SQL name.',
  finds:
    'Condition: true when the table has a field whose name matches the regex.',
  contains: 'Condition: true when the SQL name contains the text.',
  else: 'Alternative branch of the enclosing condition or empty loop.',
  end: 'Closes the block opened at the same level.',
  replace:
    '`replace(pattern,replacement,flags)`: regex replace on the value. Replacement supports `$1`, `\\U`, `\\L`, `\\E`.',
};

/** Equivalent documented level when a level shares the properties of another one */
function docLevel(level: string): string[] {
  if (TABLE_LEVELS.has(level)) return [level, 'table'];
  if (FIELD_LEVELS.has(level)) return [level, 'field'];
  return [level];
}

function lookupDoc(path: string[]): string | undefined {
  if (path.length === 0) return undefined;
  const [level, ...rest] = path;
  // longest path first: table.unix.plural, then table.plural
  const tails = rest.length === 0 ? [[]] : rest.map((_, i) => rest.slice(i));
  for (const candidateLevel of docLevel(level)) {
    for (const tail of tails) {
      const key = [candidateLevel, ...tail].join('.');
      if (DOCS[key]) return DOCS[key];
    }
  }
  return undefined;
}

export interface HoverResult {
  start: number;
  end: number;
  markdown: string;
}

export function getHover(
  lineText: string,
  character: number,
): HoverResult | undefined {
  const wordMatch = /\w+/g;
  let word: RegExpExecArray | null;
  let found: RegExpExecArray | undefined;
  while ((word = wordMatch.exec(lineText))) {
    if (word.index <= character && character <= word.index + word[0].length) {
      found = word;
      break;
    }
  }
  if (!found) {
    return undefined;
  }
  const end = found.index + found[0].length;
  const command = commandAtCursor(lineText, end);
  if (!command || command.before.length === 0) {
    return undefined;
  }
  const label = found[0].toLowerCase();
  const range = { start: found.index, end };
  if (command.openCalls.length > 0) {
    if (!insideCondition(command)) {
      return undefined;
    }
    if (VOCABULARY.types.includes(label)) {
      return { ...range, markdown: `**${label}** — field type` };
    }
    const doc = DOCS[`attr:${label}`];
    const known =
      VOCABULARY.properties.includes(label) ||
      VOCABULARY.attributes.includes(label);
    return known
      ? {
          ...range,
          markdown: `**${label}** — attribute${doc ? '\n\n' + doc : ''}`,
        }
      : undefined;
  }
  const segments = command.before
    .toLowerCase()
    .replace(/~/g, '')
    .split('.')
    .filter(Boolean);
  const level = segments[0];
  if (segments.length === 1) {
    const doc = lookupDoc([level]);
    return ALL_LEVELS.includes(level)
      ? { ...range, markdown: `**${level}** — level${doc ? '\n\n' + doc : ''}` }
      : undefined;
  }
  const doc = lookupDoc(segments) ?? CONTROL_DOCS[label];
  return doc ? { ...range, markdown: doc } : undefined;
}
