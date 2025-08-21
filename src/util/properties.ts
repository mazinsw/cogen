import * as fs from 'fs';

export class Properties {
  private props: Record<string, string> = {};

  constructor(private filePath: string) {}

  async load(): Promise<void> {
    const content = await fs.promises.readFile(this.filePath, 'utf-8');
    this.props = {};
    for (const line of content.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx > 0) {
        const key = trimmed.substring(0, eqIdx).trim();
        const value = trimmed.substring(eqIdx + 1).trim();
        this.props[key] = value.replace(/\\u([\dA-Fa-f]{4})/g, (_, g) =>
          String.fromCharCode(parseInt(g, 16)),
        );
      }
    }
  }

  get(key: string, defaultValue?: string): string | undefined {
    return this.props[key] || defaultValue;
  }

  set(key: string, value: string): void {
    this.props[key] = value;
  }

  has(key: string): boolean {
    return key in this.props;
  }

  async save(): Promise<void> {
    const lines: string[] = [
      '# Saved by Properties class',
      '# ' + new Date().toString(),
    ];
    for (const [key, value] of this.entries()) {
      lines.push(`${key}=${value.replace(/[\n\r]/g, ' ')}`);
    }
    await fs.promises.writeFile(this.filePath, lines.join('\n'), 'utf-8');
  }

  entries(): [string, string][] {
    return Object.entries(this.props);
  }
}
