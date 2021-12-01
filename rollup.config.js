import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    { file: pkg.module, format: 'esm' },
  ],
  plugins: [
    postcss({
      plugins: [autoprefixer,cssnano],
      extensions: ['.less', '.css'],
      use: ['less'],
      extract: 'style.css', // 输出路径
    }),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.ts', '.jsx','tsx'],
    }),
  ],
};
