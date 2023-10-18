import pkg from './package.json' assert { type: "json" };
import coffee from 'rollup-plugin-coffee-script';
import { uglify } from "rollup-plugin-uglify";
import babel from '@rollup/plugin-babel';

let banner = '/** \n* @F fpcoffe v' + pkg.version + '\n'
  + '* @F (c)' + new Date().getFullYear() + ' fxhxyz \n'
  + '* @F MIT License\n'
  + '* @F github.com/fxhxyz4/fpc\n*/\n\n'

let config = {};

export default config = {
  input: './src/export.coffee',
  output: [
    {
      file: './dist/fpcoffee.js',
      format: 'esm',
      sourcemap: true,
      banner: banner
    },
    {
      file: './dist/fpcoffee.cjs',
      format: 'cjs',
      sourcemap: true,
      banner: banner
    },
  ],
  plugins: [
    coffee(),
    babel(
      {
        exclude: 'node_modules/**',
        babelrc: false,
      }
    )
  ],
}

if (process.env.NODE_ENV === 'prod') {
  config.output = [
    {
      file: './dist/fpcoffee.min.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: './dist/fpcoffee.min.cjs',
      format: 'cjs',
      sourcemap: true,
    },
  ],

  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
      }
    })
  );
}
