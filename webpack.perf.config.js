const merge = require('webpack-merge');
const base = require('./webpack.config.js')();
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const mode = process.env.NODE_ENV || 'development';

module.exports = merge(base, {
  mode,
  plugins: [new BundleAnalyzerPlugin()],
});
