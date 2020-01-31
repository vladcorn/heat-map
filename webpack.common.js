const webpack = require('webpack');
const path = require('path');
const resolveTsAliases = require('resolve-ts-aliases').resolveTsAliases;

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/public/build/',
    publicPath: '/public/build/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    modules: ['node_modules'],
    alias: {
      ...resolveTsAliases(path.resolve('tsconfig.paths.json')),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
      },
    }),
  ],
};
