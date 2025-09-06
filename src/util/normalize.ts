import { canUpper, isLowerCase, isUpperCase } from '@/util/helper';
import { despluralize } from '@/util/plural';

export function normalize(
  input: string,
  despluralizeWithDictionary?: string[],
): string {
  let name = input;
  if (name.match(/^T[A-Z].*/)) {
    name = name.substring(1);
  }
  name = name.normalize('NFD');
  name = name.replace(/\p{M}/gu, '');
  let result = '';
  let lastWord = '';
  let lastCaseIsUpper = false;
  let lastIsVector = false;
  let currentIsVector = false;
  let i = 0;
  while (i < name.length) {
    let ch = name.charAt(i);
    let str = ch;
    currentIsVector = false;
    if (ch == '_' || ch == ' ') {
      let j = i + 1;
      if (j >= name.length) {
        break;
      }
      do {
        ch = name.charAt(j);
        j++;
      } while (ch == '_' && j < name.length);
      if (j > name.length) {
        break;
      }
      ch = ch.toUpperCase();
      str = ch;
      lastCaseIsUpper = false;
      i = j - 1;
    } else if (((!result && !lastWord) || lastIsVector) && isLowerCase(ch)) {
      ch = ch.toUpperCase();
      str = ch;
    }
    if (ch.match(/\d/)) {
      lastIsVector = true;
      let digits = '';
      let j = i;
      do {
        ch = name.charAt(j);
        digits += ch;
        j++;
      } while (j < name.length && name.charAt(j).match(/\d/));
      str = '[' + digits + ']';
      lastCaseIsUpper = false;
      i = j - 1;
      currentIsVector = true;
    }
    if (!lastCaseIsUpper && (isUpperCase(ch) || currentIsVector) && lastWord) {
      if (lastIsVector && !currentIsVector) {
        if (despluralizeWithDictionary) {
          result +=
            upperFix(despluralize(lastWord, despluralizeWithDictionary)) + '.';
        } else {
          result += upperFix(lastWord) + '.';
        }
        lastIsVector = false;
      } else {
        if (despluralizeWithDictionary) {
          result += upperFix(
            despluralize(lastWord, despluralizeWithDictionary),
          );
        } else {
          result += upperFix(lastWord);
        }
      }
      lastWord = str;
      lastCaseIsUpper = true;
    } else if (!lastIsVector) {
      lastWord += ch;
      lastCaseIsUpper = isUpperCase(ch);
    } else {
      lastIsVector = false;
      result += upperFix(lastWord) + '.';
      lastWord = str;
    }
    i++;
  }
  if (lastWord) {
    if (!currentIsVector && lastIsVector) {
      if (despluralizeWithDictionary) {
        result +=
          '.' + upperFix(despluralize(lastWord, despluralizeWithDictionary));
      } else {
        result += '.' + upperFix(lastWord);
      }
    } else {
      if (despluralizeWithDictionary) {
        result += upperFix(despluralize(lastWord, despluralizeWithDictionary));
      } else {
        result += upperFix(lastWord);
      }
    }
  }
  return result;
}

function upperFix(input: string): string {
  let word = input;
  if (canUpper(word)) {
    word = word.toUpperCase();
  }
  return word;
}
