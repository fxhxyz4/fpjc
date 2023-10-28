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
      format: 'esm',
      sourcemap: false,
      banner: banner
    },
    {
      file: `${path}.cjs`,
      format: 'cjs',
      sourcemap: false,
      banner: banner,
      exports: 'auto',
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
      format: 'esm',
      sourcemap: false,
    },
    {
      file: `${path}.min.cjs`,
      format: 'cjs',
      sourcemap: false,
      exports: 'auto',
    },
  ]
}
