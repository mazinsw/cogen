// Runs the integration suite inside VS Code: node test/integration/run.mjs
// Uses VSCODE_EXECUTABLE (or the installed VS Code on macOS) with an isolated profile.
import { runTests } from '@vscode/test-electron';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '../..');
const installed = '/Applications/Visual Studio Code.app/Contents/MacOS/Code';
const vscodeExecutablePath =
  process.env.VSCODE_EXECUTABLE ||
  (existsSync(installed) ? installed : undefined);
// set when launched from a VS Code terminal, it would start Code as plain Node
delete process.env.ELECTRON_RUN_AS_NODE;
const profile = mkdtempSync(join(tmpdir(), 'cogen-vscode-'));

try {
  await runTests({
    vscodeExecutablePath,
    extensionDevelopmentPath: root,
    extensionTestsPath: join(root, 'test/integration/suite.js'),
    launchArgs: [
      join(root, 'test/fixtures/workspace'),
      '--disable-extensions',
      '--disable-workspace-trust',
      `--user-data-dir=${join(profile, 'data')}`,
      `--extensions-dir=${join(profile, 'extensions')}`,
    ],
  });
} catch (error) {
  console.error('Integration tests failed', error);
  process.exitCode = 1;
} finally {
  rmSync(profile, { recursive: true, force: true });
}
