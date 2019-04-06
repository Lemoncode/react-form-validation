const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

const capitalizeString = s => s.charAt(0).toUpperCase() + s.slice(1);

module.exports = () => {
  const NODE_ENV = process.env.NODE_ENV;
  const mode = NODE_ENV || 'development';
  const prod = mode === 'production';
  const packageName = process.env.npm_package_name;
  const packageNameCapital = packageName
    .split('-')
    .map(capitalizeString)
    .join('');
  const packageVersion = JSON.stringify(
    process.env.npm_package_version
  ).replace(/"/g, '');
  const filename = `${packageName}-${packageVersion}${prod ? '.min' : ''}.js`;

  return {
    mode,
    devtool: 'none',
    resolve: {
      extensions: ['.js', '.ts'],
    },
    entry: ['./src/index.ts'],
    output: {
      path: path.join(__dirname, 'dist'),
      filename,
      library: {
        root: packageNameCapital,
        amd: packageName,
        commonjs: packageName,
      },
      libraryTarget: 'umd',
    },
    externals: {
      'lc-form-validation': 'lc-form-validation',
      react: 'React',
      'react-dom': 'ReactDOM',
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
    plugins: prod ? [new CompressionPlugin()] : [],
  };
};
