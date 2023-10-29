import pkg from './package.json' assert { type: "json" };
import coffee from 'rollup-plugin-coffee-script';
import { uglify } from "rollup-plugin-uglify";

let banner = `/**\n* @F fpjc v${pkg.version}\n`
  + `* @F (c)${new Date().getFullYear()} fxhxyz\n`
  + `* @F MIT License\n`
  + `* @F github.com/fxhxyz4/fpjc\n*/\n\n`

let config = {};
let path = './lib/fpjc';

export default config = {
  input: `./lib/coffee/fpjc.coffee`,
  output: [
    {
      file: `${path}.js`,
      format: 'umd',
      name: 'F',
      exports: 'named',
      sourcemap: false,
      banner: banner
    },
    {
      file: `${path}.cjs.js`,
      format: 'cjs',
      exports: 'named',
      sourcemap: false,
      banner: banner,
    },
    {
      file: `${path}.esm.js`,
      format: 'esm',
      sourcemap: false,
      banner: banner,
    },
  ],
  plugins: [
    coffee(),
  ],
}

if (process.env.NODE_ENV === 'prod') {
/*
  config.plugins.push(
    uglify()
  )
*/

path = './lib/min/fpjc';

  config.output = [
    {
      file: `${path}.min.js`,
      format: 'umd',
      name: 'F',
      exports: 'named',
      sourcemap: false,
    },
    {
      file: `${path}.cjs.min.js`,
      format: 'cjs',
      exports: 'named',
      sourcemap: false,
    },
    {
      file: `${path}.esm.min.js`,
      format: 'esm',
      sourcemap: false,
    },
  ]
}
