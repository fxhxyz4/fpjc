import pkg from './package.json' assert { type: "json" };
import coffee from 'rollup-plugin-coffee-script';
import { uglify } from "rollup-plugin-uglify";

let banner = `/**\n* @F fpjc v${pkg.version}\n`
  + `* @F (c)${new Date().getFullYear()} fxhxyz\n`
  + `* @F MIT License\n`
  + `* @F github.com/fxhxyz4/fpjc\n*/\n`

let config = {};

export default config = {
  input: `./lib/coffee/fpjc.coffee`,
  output: [
    {
      file: `./dist/fpjc.js`,
      format: 'umd',
      name: 'F',
      exports: 'named',
      sourcemap: false,
      banner: banner
    },
    {
      file: `./lib/index.js`,
      format: 'cjs',
      exports: 'named',
      sourcemap: false,
      banner: banner,
    },
    {
      file: `./lib/es/index.js`,
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

  config.output = [
    {
      file: `./dist/fpjc.min.js`,
      format: 'umd',
      name: 'F',
      exports: 'named',
      sourcemap: false,
    }
  ]
}
