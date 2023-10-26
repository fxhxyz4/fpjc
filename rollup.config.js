import pkg from './package.json' assert { type: "json" };
import coffee from 'rollup-plugin-coffee-script';
import { uglify } from "rollup-plugin-uglify";
import babel from '@rollup/plugin-babel';

let banner = `/**\n* @F fpjc v${pkg.version}\n`
  + `* @F (c)${new Date().getFullYear()} fxhxyz\n`
  + `* @F MIT License\n`
  + `* @F github.com/fxhxyz4/fpjc\n*/\n\n`

let config = {};
let path = './lib/fpjc'

export default config = {
  input: `${path}.coffee`,
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
      file: `${path}.min.js`,
      format: 'es',
      sourcemap: false,
    },
    {
      file: `${path}.min.cjs`,
      format: 'cjs',
      sourcemap: false,
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
