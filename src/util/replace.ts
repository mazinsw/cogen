export function replace(subject: string, regex: RegExp, replacement: string) {
  const parts = replacement.split(/(\\[ULE])/);
  const replacementFn = (...args: any[]) => {
    // args[0] = full match, args[1..n] = capture groups, last 2 args are offset and input
    const groups = args.slice(1, -2);
    let result = '';
    let mode: 'U' | 'L' | null = null;
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (part === '\\U') {
        mode = 'U';
      } else if (part === '\\L') {
        mode = 'L';
      } else if (part === '\\E') {
        mode = null;
      } else {
        // Replace $n with corresponding group
        const replaced = part.replace(/\$(\d+)/g, (_, n) => {
          const idx = +n - 1;
          return groups[idx] ?? '';
        });
        if (mode === 'U') {
          result += replaced.toUpperCase();
        } else if (mode === 'L') {
          result += replaced.toLowerCase();
        } else {
          result += replaced;
        }
      }
    }
    return result;
  };
  if (parts.length === 0) {
    return subject.replace(regex, replacement);
  }
  return subject.replace(regex, replacementFn);
}
