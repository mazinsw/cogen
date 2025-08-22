import * as fs from 'fs/promises';
import * as path from 'path';

export interface FileEntry {
  path: string;
  isDirectory: boolean;
}

export async function readDirRecursive(baseDir: string): Promise<FileEntry[]> {
  const result: FileEntry[] = [];
  async function walk(currentDir: string) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      result.push({ path: fullPath, isDirectory: entry.isDirectory() });
      if (entry.isDirectory()) {
        await walk(fullPath);
      }
    }
  }
  await walk(baseDir);
  return result;
}
