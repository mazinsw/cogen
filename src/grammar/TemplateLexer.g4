/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

lexer grammar TemplateLexer;

TEXT: ( ~'$' | '$' {this._input.LA(1) !== '['.charCodeAt(0)}? )+;

OPEN: '$[' -> pushMode(INSIDE);

mode INSIDE;

CLOSE: ']' -> popMode ;

K_ALL: A L L;
K_ARRAY: A R R A Y;
K_BIGINT: B I G I N T;
K_BLOB: B L O B;
K_BOOLEAN: B O O L E A N;
K_CHAR: C H A R;
K_CHARS: C H A R S;
K_COMMENT: C O M M E N T;
K_CONSTRAINT: C O N S T R A I N T;
K_CONTAINS: C O N T A I N S;
K_COUNT: C O U N T;
K_CURRENCY: C U R R E N C Y;
K_DATE: D A T E;
K_DATETIME: D A T E T I M E;
K_DEFAULT: D E F A U L T;
K_DELETE: D E L E T E;
K_DEPENDS: D E P E N D S;
K_DESCRIPTION: D E S C R I P T I O N;
K_DESCRIPTOR: D E S C R I P T O R;
K_DOUBLE: D O U B L E;
K_EACH: E A C H;
K_ELSE: E L S E;
K_END: E N D;
K_ENUM: E N U M;
K_EXISTS: E X I S T S;
K_EXTRA: E X T R A;
K_FEMININE: F E M I N I N E;
K_FEW_FIELDS: F E W '_' F I E L D S;
K_FIELD: F I E L D;
K_FINDS: F I N D S;
K_FIRST: F I R S T;
K_FLOAT: F L O A T;
K_FOLDER: F O L D E R;
K_FOREIGN: F O R E I G N;
K_FULLTEXT: F U L L T E X T;
K_GENDER: G E N D E R;
K_HEIGHT: H E I G H T;
K_HIGH: H I G H;
K_IF: I F;
K_IGNORED: I G N O R E D;
K_IMAGE: I M A G E;
K_INDEX: I N D E X;
K_INFO: I N F O;
K_INHERITED: I N H E R I T E D;
K_INSERT: I N S E R T;
K_INT: I N T;
K_INTEGER: I N T E G E R;
K_JSON: J S O N;
K_LENGTH: L E N G T H;
K_LETTER: L E T T E R;
K_LOW: L O W;
K_MANY: M A N Y;
K_MASCULINE: M A S C U L I N E;
K_MASK: M A S K;
K_MASKED: M A S K E D;
K_MATCH: M A T C H;
K_NAME: N A M E;
K_NOID: N O I D;
K_NON_FIRST: N O N '_' F I R S T;
K_NON_NULL: N O N '_' N U L L;
K_NORM: N O R M;
K_NOT_NULL: N O T '_' N U L L;
K_NULL: N U L L;
K_NUMBER: N U M B E R;
K_ON: O N;
K_OPTION: O P T I O N;
K_OPTIONAL: O P T I O N A L;
K_ORDER: O R D E R;
K_PACKAGE: P A C K A G E;
K_PASSWORD: P A S S W O R D;
K_PATH: P A T H;
K_PLURAL: P L U R A L;
K_PLURALIZABLE: P L U R A L I Z A B L E;
K_PRIMARY_KEY: P R I M A R Y '_' K E Y;
K_PRIMARY: P R I M A R Y;
K_RADIO: R A D I O;
K_REFERENCE: R E F E R E N C E;
K_REPEATED: R E P E A T E D;
K_REPLACE: R E P L A C E;
K_REQUIRED: R E Q U I R E D;
K_REVERSE_EACH: R E V E R S E '_' E A C H;
K_SEARCHABLE: S E A R C H A B L E;
K_SELF_REFERENCE: S E L F '_' R E F E R E N C E;
K_SINGLE: S I N G L E;
K_SINGULAR: S I N G U L A R;
K_SIZE: S I Z E;
K_STRING: S T R I N G;
K_STYLE: S T Y L E;
K_TABLE: T A B L E;
K_TEXT: T E X T;
K_TIME: T I M E;
K_TIMESTAMP: T I M E S T A M P;
K_TINYINT: T I N Y I N T;
K_UNIQUE: U N I Q U E;
K_UNIX: U N I X;
K_UNPLURALIZABLE: U N P L U R A L I Z A B L E;
K_UNSIGNED: U N S I G N E D;
K_UPDATE: U P D A T E;
K_WIDTH: W I D T H;

DOT: '.';
LPAR: '(';
RPAR: ')';
OR: '|';
AND: '&';
NOT: '~';

WORD: [A-Za-z0-9_]+;

fragment A : [aA];
fragment B : [bB];
fragment C : [cC];
fragment D : [dD];
fragment E : [eE];
fragment F : [fF];
fragment G : [gG];
fragment H : [hH];
fragment I : [iI];
fragment J : [jJ];
fragment K : [kK];
fragment L : [lL];
fragment M : [mM];
fragment N : [nN];
fragment O : [oO];
fragment P : [pP];
fragment Q : [qQ];
fragment R : [rR];
fragment S : [sS];
fragment T : [tT];
fragment U : [uU];
fragment V : [vV];
fragment W : [wW];
fragment X : [xX];
fragment Y : [yY];
fragment Z : [zZ];

MATCH_OPEN: K_MATCH LPAR -> pushMode(REGEX_MODE);
FINDS_OPEN: K_FINDS LPAR -> pushMode(REGEX_MODE);
REPLACE_OPEN: K_REPLACE LPAR -> pushMode(PATTERN_MODE);

mode REGEX_MODE;

REGEX_CLOSE: ')' -> popMode;

REGEX: (~('(' | ')') | '\\(' | '\\)' )+;

REGEX_OPEN: '(' -> pushMode(REGEX_MODE);

mode PATTERN_MODE;

PATTERN_CLOSE: ')' -> popMode;

PATTERN: (~('(' | ')' | ',') | '\\,' | '\\)' | '\\(' )+;

PATTERN_OPEN: '(' -> pushMode(PATTERN_MODE);

REPLACEMENT_OPEN: ',' -> popMode, pushMode(REPLACEMENT_MODE);

mode REPLACEMENT_MODE;

REPLACEMENT_CLOSE: ')' -> popMode;

REPLACEMENT: (~(')' | ',') | '\\,' | '\\)' )+;

FLAGS_OPEN: ',' -> popMode, pushMode(FLAGS_MODE);

mode FLAGS_MODE;

FLAGS_CLOSE: ')' -> popMode;

REGEX_FLAGS: ('g' | 'i' | 'm' | 'u' | 'y')+;
