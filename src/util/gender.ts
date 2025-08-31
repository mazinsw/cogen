export function isVowel(letter: string): boolean {
  return 'aeiou'.includes(letter.toLocaleLowerCase());
}

export function getGenderChar(name: string): string {
  let nlc = name.toLowerCase();
  if (nlc === 'id' && nlc.endsWith('id')) {
    nlc = nlc.substring(0, nlc.length - 2);
  }
  if (nlc.endsWith('_')) {
    nlc = nlc.substring(0, nlc.length - 1);
  }
  if (
    (nlc.length > 1 &&
      !isVowel(nlc.charAt(nlc.length - 2)) &&
      !nlc.startsWith('m', nlc.length - 2) &&
      nlc.endsWith('a')) ||
    nlc.endsWith('cao') ||
    nlc.endsWith('de') ||
    nlc.startsWith('a', 2) ||
    (nlc.startsWith('a', 1) && !nlc.endsWith('o') && !nlc.endsWith('e')) ||
    ((nlc.startsWith('e', 1) || nlc.startsWith('i', 0)) && nlc.endsWith('ao'))
  ) {
    return 'a';
  }
  if (
    nlc.startsWith('o', 1) ||
    nlc.endsWith('e') ||
    nlc.endsWith('or') ||
    nlc.endsWith('o') ||
    nlc === 'id' ||
    nlc.endsWith('oid') ||
    nlc.endsWith('el') ||
    nlc.endsWith('il') ||
    nlc.endsWith('cnpj') ||
    nlc.endsWith('cpf') ||
    nlc.endsWith('in') ||
    nlc.endsWith('tema') ||
    nlc.endsWith('p') ||
    nlc.length == 1
  ) {
    return 'o';
  }
  return 'a';
}
