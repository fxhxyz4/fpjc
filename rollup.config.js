import pkg from './package.json' assert { type: "json" };
import coffee from 'rollup-plugin-coffee-script';

let banner = '/** \n* @F fpcoffe v' + pkg.version + '\n'
  + '* @F (c)' + new Date().getFullYear() + ' fxhxyz \n'
  + '* @F MIT License\n'
  + '* @F https://github.com/fxhxyz4/fpcoffee\n*/\n\n'

let config = {};

export default config = {
  input: 'src/index.coffee',
  output: {
    file: 'dist/fpcoffee.js',
    format: 'iife',
    banner: banner
  },
  plugins: [
    coffee(),
  ],
}
