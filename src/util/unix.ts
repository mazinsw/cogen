import { isLowerCase, isUpperCase } from '@/util/helper';

export function unixTransform(input: string): string {
  let word = input;
  let result = '';
  let lastIsUpper = true;
  word = word.normalize('NFD');
  word = word.replace(/\p{M}/gu, '');
  for (let i = 0; i < word.length; i++) {
    const ch = word.charAt(i);
    if (lastIsUpper) {
      if (isLowerCase(ch)) {
        lastIsUpper = false;
      }
      result += ch.toLocaleLowerCase();
    } else if (isUpperCase(ch)) {
      result += '_' + ch.toLocaleLowerCase();
      lastIsUpper = true;
    } else {
      result += ch;
    }
  }
  return result.replace(/\s/g, '_');
}
