const path = require('path');
const ConcatFilesPlugin = require('webpack-concat-files-plugin');
const glob = require('glob');

module.exports = {
  entry: {
    bundle: glob.sync('./src/*.coffee').map(file => path.resolve(__dirname, file)),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.coffee',
  },
  module: {
    rules: [
      {
        test: /\.coffee$/,
        use: 'coffee-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.coffee']
  },
  plugins: [
    new ConcatFilesPlugin({
      bundles: [
        {
          src: glob.sync('./src/*.coffee').map(file => path.resolve(__dirname, file)),
          dest: 'bundle.coffee',
        },
      ],
    }),
  ],
};
