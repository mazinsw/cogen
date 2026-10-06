export function despluralize(input: string, dictionaryList: string[]): string {
  let word = input;
  for (const rule of dictionaryList) {
    if (!rule) {
      continue;
    }
    const parts = rule.split('/');
    const subsjects = parts[0].split('|');
    const cut = +parts[1];
    let replacement = '';
    let minLength = 0;

    if (parts.length >= 3) {
      replacement = parts[2];
    }
    if (parts.length >= 4) {
      minLength = +parts[3];
    }
    if (word.length <= minLength) {
      continue;
    }
    let test = false;
    for (const endsWith of subsjects) {
      test = test || word.endsWith(endsWith);
    }
    if (!test) {
      continue;
    }
    word = word.substring(0, word.length - cut) + replacement;
    break;
  }
  return word;
}

/** plural of a singular word, by the rules of the language */
export function pluralize(word: string, lang?: string): string {
  if (!word) {
    return word;
  }
  const rules: [RegExp, string][] = /^en(-|$)/i.test(lang || '')
    ? [
        [/([^aeiou])y$/i, '$1ies'],
        [/(s|x|z|ch|sh)$/i, '$1es'],
      ]
    : [
        [/ão$/i, 'ões'],
        [/ao$/i, 'oes'],
        [/il$/i, 'is'],
        [/([aeou])l$/i, '$1is'],
        [/m$/i, 'ns'],
        [/(r|z)$/i, '$1es'],
        [/s$/i, 's'],
      ];
  for (const [pattern, replacement] of rules) {
    if (pattern.test(word)) {
      return word.replace(pattern, replacement);
    }
  }
  return word + 's';
}
