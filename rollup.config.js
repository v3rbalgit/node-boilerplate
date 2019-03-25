import typescript from 'rollup-plugin-typescript';
import scss from 'rollup-plugin-scss';
import pkg from './package.json';

export default {
  input: 'src/ts/main.ts',
  output: {
    name: 'bundle',
    file: pkg.browser,
    format: 'iife'
  },
  // Rollup plugins: https://github.com/rollup/awesome
  plugins: [
    typescript(), // info @ https://github.com/rollup/rollup-plugin-typescript
    scss({ output: 'public/css/bundle.css' }) // info @ https://github.com/thgh/rollup-plugin-scss
  ]
};
