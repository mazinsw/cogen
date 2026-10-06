import * as esbuild from 'esbuild';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const watch = process.argv.includes('--watch');

const options = {
  entryPoints: [join(root, 'src/extension.ts')],
  outfile: join(root, 'dist/extension.js'),
  bundle: true,
  platform: 'node',
  format: 'cjs',
  target: 'node18',
  sourcemap: true,
  minify: !watch,
  external: ['vscode'],
  // cogen sources use the `@/` alias, resolved against ../src
  alias: { '@': join(root, '../src') },
  tsconfig: join(root, 'tsconfig.json'),
  logLevel: 'info',
};

if (watch) {
  const context = await esbuild.context(options);
  await context.watch();
} else {
  await esbuild.build(options);
}
