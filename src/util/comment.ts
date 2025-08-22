import { resolveSlashs } from '@/util/helper';

export class Comment {
  public static parse(comment: string): string {
    return comment.substring(1, comment.length - 1);
  }

  public static extract(
    field: string,
    values: Map<string, string>,
    preffix: string,
  ): string | null {
    let comment = '';
    let cmm = field;
    const cmds: string[] = [];
    let state = 0;
    let offset = -1;
    if (cmm == null) return null;
    cmm = resolveSlashs(cmm);
    for (let i = cmm.length - 1; i >= 0; i--) {
      switch (cmm.charAt(i)) {
        case ']':
          state = 1;
          offset = i;
          break;
        case '[':
          if (state != 1) break;
          const cmd = cmm.substring(i + 1, offset);
          cmds.push(cmd);
          offset = -1;
          state = 0;
          break;
        default:
          if (state == 1) break;
          if (' \n\r\t'.indexOf(cmm.charAt(i)) == -1) {
            cmm = cmm.substring(0, i + 1);
            i = 0; // exit for loop
            state = 2;
          }
          break;
      }
    }
    if (state != 2) cmm = '';
    comment = cmm;
    for (const cmd of cmds) {
      offset = cmd.indexOf(':');
      if (offset == -1) {
        if (cmd) values.set(preffix + cmd, '');
        continue;
      }
      const key = cmd.substring(0, offset);
      if (!key) continue;
      values.set(preffix + key, cmd.substring(offset + 1));
    }
    return comment;
  }
}
