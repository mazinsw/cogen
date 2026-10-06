import { SyntaxErrorInfo } from '@/ast/list-error-listener';
import { TemplateLexer } from '@/grammar/TemplateLexer';
import {
  AttributeContext,
  ConstraintLevelContext,
  FieldLevelContext,
  FieldPropContext,
  PropertyContext,
  TableLevelContext,
  TablePropContext,
  TypeContext,
} from '@/grammar/TemplateParser';
import { ParsedTemplate, parseTemplateText } from '@/util/parse-template';
import { ParserRuleContext, Token } from 'antlr4ts';
import { Interval } from 'antlr4ts/misc/Interval';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

/** 0-based position, same convention as VS Code */
export interface Position {
  line: number;
  character: number;
}

export interface Range {
  start: Position;
  end: Position;
}

export function containsPosition(range: Range, position: Position): boolean {
  return (
    comparePositions(range.start, position) <= 0 &&
    comparePositions(position, range.end) <= 0
  );
}

function comparePositions(a: Position, b: Position): number {
  return a.line - b.line || a.character - b.character;
}

export function tokenStart(token: Token): Position {
  return { line: token.line - 1, character: token.charPositionInLine };
}

export function tokenEnd(token: Token): Position {
  const text = token.type === Token.EOF ? '' : (token.text ?? '');
  const lines = text.split('\n');
  if (lines.length === 1) {
    return {
      line: token.line - 1,
      character: token.charPositionInLine + text.length,
    };
  }
  return {
    line: token.line - 1 + lines.length - 1,
    character: lines[lines.length - 1].length,
  };
}

export function tokenRange(start: Token, stop: Token = start): Range {
  return { start: tokenStart(start), end: tokenEnd(stop) };
}

/* ---------------------------------------------------------------------------
 * Diagnostics
 * ------------------------------------------------------------------------- */

export interface TemplateDiagnostic {
  range: Range;
  message: string;
}

export function errorRange(error: SyntaxErrorInfo): Range {
  const start = { line: error.line - 1, character: error.column };
  return {
    start,
    end: { line: start.line, character: start.character + error.length },
  };
}

export function getDiagnostics(
  analysis: TemplateAnalysis,
): TemplateDiagnostic[] {
  const diagnostics: TemplateDiagnostic[] = analysis.parsed.errors.map(
    (error) => ({ range: errorRange(error), message: error.message }),
  );
  // a block left open is reported by the parser at EOF, point to the opening command too
  const visit = (blocks: TemplateBlock[]) => {
    for (const block of blocks) {
      if (!block.end) {
        diagnostics.push({
          range: block.header,
          message: `Missing \`$[${block.level}.end]\` for \`$[${block.label}]\``,
        });
      }
      visit(block.children);
    }
  };
  visit(analysis.blocks);
  return diagnostics;
}

/* ---------------------------------------------------------------------------
 * Semantic tokens
 * ------------------------------------------------------------------------- */

export const TOKEN_TYPES = [
  'keyword',
  'namespace',
  'property',
  'type',
  'enumMember',
  'regexp',
  'string',
  'operator',
  'macro',
] as const;

export type TokenType = (typeof TOKEN_TYPES)[number];

export interface SemanticToken {
  line: number;
  character: number;
  length: number;
  type: TokenType;
}

const CONTROL_KEYWORDS = new Set([
  TemplateLexer.K_EACH,
  TemplateLexer.K_REVERSE_EACH,
  TemplateLexer.K_IF,
  TemplateLexer.K_ELSE,
  TemplateLexer.K_END,
  TemplateLexer.K_EXISTS,
  TemplateLexer.K_CONTAINS,
  TemplateLexer.K_MATCH,
  TemplateLexer.K_FINDS,
  TemplateLexer.K_REPLACE,
]);

function isKeywordToken(type: number): boolean {
  return (TemplateLexer.VOCABULARY.getSymbolicName(type) ?? '').startsWith(
    'K_',
  );
}

function classify(
  token: Token,
  parent: ParseTree | undefined,
  previous: Token | undefined,
): TokenType | undefined {
  switch (token.type) {
    case TemplateLexer.OPEN:
    case TemplateLexer.CLOSE:
      return 'macro';
    case TemplateLexer.NOT:
    case TemplateLexer.AND:
    case TemplateLexer.OR:
      return 'operator';
    case TemplateLexer.MATCH_OPEN:
    case TemplateLexer.FINDS_OPEN:
    case TemplateLexer.REPLACE_OPEN:
      return 'keyword';
    case TemplateLexer.REGEX:
    case TemplateLexer.PATTERN:
      return 'regexp';
    case TemplateLexer.REPLACEMENT:
    case TemplateLexer.WORD:
      return 'string';
    case TemplateLexer.REGEX_FLAGS:
      return 'keyword';
  }
  if (!isKeywordToken(token.type)) {
    return undefined;
  }
  if (
    parent instanceof TableLevelContext ||
    parent instanceof FieldLevelContext ||
    parent instanceof ConstraintLevelContext
  ) {
    return 'namespace';
  }
  if (
    parent instanceof TablePropContext ||
    parent instanceof FieldPropContext
  ) {
    return 'property';
  }
  if (parent instanceof TypeContext) {
    return 'type';
  }
  if (parent instanceof AttributeContext || parent instanceof PropertyContext) {
    return 'enumMember';
  }
  if (CONTROL_KEYWORDS.has(token.type)) {
    return 'keyword';
  }
  if (previous?.type === TemplateLexer.OPEN) {
    return 'namespace';
  }
  return 'property';
}

export function getSemanticTokens(analysis: TemplateAnalysis): SemanticToken[] {
  const parents = new Map<number, ParseTree>();
  const walk = (node: ParseTree) => {
    if (node instanceof TerminalNode) {
      parents.set(node.symbol.tokenIndex, node.parent);
      return;
    }
    for (let i = 0; i < node.childCount; i++) {
      walk(node.getChild(i));
    }
  };
  walk(analysis.parsed.tree);

  const result: SemanticToken[] = [];
  let previous: Token | undefined;
  for (const token of analysis.parsed.tokens) {
    if (token.channel !== Token.DEFAULT_CHANNEL || token.type === Token.EOF) {
      continue;
    }
    const type = classify(token, parents.get(token.tokenIndex), previous);
    previous = token;
    if (!type) {
      continue;
    }
    let text = token.text ?? '';
    if (
      token.type === TemplateLexer.MATCH_OPEN ||
      token.type === TemplateLexer.FINDS_OPEN ||
      token.type === TemplateLexer.REPLACE_OPEN
    ) {
      text = text.slice(0, -1); // keyword without the opening parenthesis
    }
    // semantic tokens can not span lines
    let line = token.line - 1;
    let character = token.charPositionInLine;
    for (const part of text.split('\n')) {
      if (part.length > 0) {
        result.push({ line, character, length: part.length, type });
      }
      line++;
      character = 0;
    }
  }
  return result;
}

/* ---------------------------------------------------------------------------
 * Blocks: folding, matching highlight, outline
 * ------------------------------------------------------------------------- */

export interface TemplateBlock {
  /** each, reverse_each, if, exists, finds, match, contains */
  kind: string;
  /** level keyword as written in the block, lower case */
  level: string;
  /** opening command without `$[` and `]`, e.g. `field.each(reference)` */
  label: string;
  header: Range;
  elses: Range[];
  end?: Range;
  range: Range;
  children: TemplateBlock[];
}

const BLOCK_RULE =
  /^[a-z]+(If|Exists|Finds|Match|Contains|Each|ReverseEach)Stmt$/;
const ELSE_HEADER_RULE =
  /^[a-z]+Else(If|Exists|Finds|Match|Contains|Each|ReverseEach|End)Stmt$/;

function terminalChildren(ctx: ParserRuleContext): Token[] {
  const tokens: Token[] = [];
  for (let i = 0; i < ctx.childCount; i++) {
    const child = ctx.getChild(i);
    if (child instanceof TerminalNode && child.symbol.tokenIndex >= 0) {
      tokens.push(child.symbol);
    }
  }
  return tokens;
}

function headerTokens(ctx: ParserRuleContext): Token[] | undefined {
  const tokens = terminalChildren(ctx);
  const close = tokens.findIndex((token) => token.type === TemplateLexer.CLOSE);
  if (tokens[0]?.type !== TemplateLexer.OPEN || close < 0) {
    return undefined;
  }
  return tokens.slice(0, close + 1);
}

/** Source text between `$[` and `]` */
function commandLabel(tokens: Token[]): string {
  const open = tokens[0];
  const close = tokens[tokens.length - 1];
  return open.inputStream.getText(
    Interval.of(open.stopIndex + 1, close.startIndex - 1),
  );
}

function makeBlock(
  ctx: ParserRuleContext,
  ruleName: string,
): TemplateBlock | undefined {
  const header = headerTokens(ctx);
  if (!header) {
    return undefined;
  }
  const tokens = terminalChildren(ctx);
  const closing = tokens.slice(header.length);
  const endIndex = closing.findIndex(
    (token) => token.type === TemplateLexer.K_END,
  );
  let end: Range | undefined;
  if (endIndex > 0 && closing[endIndex + 1]?.type === TemplateLexer.CLOSE) {
    const open = closing
      .slice(0, endIndex)
      .reverse()
      .find((t) => t.type === TemplateLexer.OPEN);
    if (open) {
      end = tokenRange(open, closing[endIndex + 1]);
    }
  }
  const headerRange = tokenRange(header[0], header[header.length - 1]);
  return {
    kind: ruleName
      .match(BLOCK_RULE)![1]
      .replace('ReverseEach', 'reverse_each')
      .toLowerCase(),
    level: (header[1]?.text ?? '').toLowerCase(),
    label: commandLabel(header),
    header: headerRange,
    elses: [],
    end,
    range: {
      start: headerRange.start,
      end: end ? end.end : tokenEnd(ctx.stop ?? header[header.length - 1]),
    },
    children: [],
  };
}

function collectBlocks(
  node: ParseTree,
  ruleNames: string[],
  out: TemplateBlock[],
  current: TemplateBlock | undefined,
) {
  for (let i = 0; i < node.childCount; i++) {
    const child = node.getChild(i);
    if (!(child instanceof ParserRuleContext)) {
      continue;
    }
    const name = ruleNames[child.ruleIndex];
    if (BLOCK_RULE.test(name) && !name.includes('Else')) {
      const block = makeBlock(child, name);
      if (block) {
        out.push(block);
        collectBlocks(child, ruleNames, block.children, block);
        continue;
      }
    } else if (current && ELSE_HEADER_RULE.test(name)) {
      const header = headerTokens(child);
      if (header) {
        current.elses.push(tokenRange(header[0], header[header.length - 1]));
      }
    }
    collectBlocks(child, ruleNames, out, current);
  }
}

export interface FoldingRange {
  start: number;
  end: number;
}

export function getFoldingRanges(analysis: TemplateAnalysis): FoldingRange[] {
  const result: FoldingRange[] = [];
  const visit = (blocks: TemplateBlock[]) => {
    for (const block of blocks) {
      const lines = [
        block.header.start.line,
        ...block.elses.map((range) => range.start.line),
      ];
      // keep the closing command visible when folded
      const last = block.end ? block.end.start.line - 1 : block.range.end.line;
      for (let i = 0; i < lines.length; i++) {
        const end = i + 1 < lines.length ? lines[i + 1] - 1 : last;
        if (end > lines[i]) {
          result.push({ start: lines[i], end });
        }
      }
      visit(block.children);
    }
  };
  visit(analysis.blocks);
  return result;
}

/** Opening, else and closing commands of the innermost block at the position */
export function getMatchingCommands(
  analysis: TemplateAnalysis,
  position: Position,
): Range[] {
  let found: Range[] = [];
  const visit = (blocks: TemplateBlock[]) => {
    for (const block of blocks) {
      if (!containsPosition(block.range, position)) {
        continue;
      }
      const markers = [
        block.header,
        ...block.elses,
        ...(block.end ? [block.end] : []),
      ];
      if (markers.some((range) => containsPosition(range, position))) {
        found = markers;
      }
      visit(block.children);
    }
  };
  visit(analysis.blocks);
  return found;
}

/* ---------------------------------------------------------------------------
 * Cached analysis
 * ------------------------------------------------------------------------- */

export interface TemplateAnalysis {
  parsed: ParsedTemplate;
  blocks: TemplateBlock[];
}

export function analyzeTemplate(text: string): TemplateAnalysis {
  const parsed = parseTemplateText(text);
  const blocks: TemplateBlock[] = [];
  collectBlocks(parsed.tree, parsed.parser.ruleNames, blocks, undefined);
  return { parsed, blocks };
}
