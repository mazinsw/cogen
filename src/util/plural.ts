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
