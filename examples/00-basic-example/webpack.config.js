var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  },
  entry: ['@babel/polyfill', './index.tsx'],
  output: {
    path: path.join(basePath, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    inline: true,
    host: 'localhost',
    port: 8080,
    stats: 'minimal',
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      hash: true,
    }),
  ],
};
