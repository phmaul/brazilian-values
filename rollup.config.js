import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

/**
 * A `string` used as copyright notice that is injected in generated bundles. It
 * contains package's name, version, author and license information.
 */
const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${pkg.author.name} <${pkg.author.email}> (${pkg.author.url})
 * Released under the MIT License.
 */
`;

/**
 * An object with all configuration for `Rollup.js`.
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: './src/brazilian-values.ts',
  plugins: [
    typescript({
      tsconfig: 'tsconfig.build.json',
    }),
  ],
  output: [
    {
      banner,
      file: './dist/brazilian-values.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      banner,
      file: './dist/brazilian-values.js',
      format: 'commonjs',
      sourcemap: true,
    },
    {
      banner,
      file: './dist/brazilian-values.umd.js',
      name: 'BrazilianValues',
      format: 'umd',
      sourcemap: true,
    },
    {
      banner,
      file: './dist/brazilian-values.umd.min.js',
      name: 'BrazilianValues',
      format: 'umd',
      plugins: [terser()],
      sourcemap: true,
    },
  ],
};

export default options;
