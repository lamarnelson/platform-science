const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node', // Target Node.js environment
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: [nodeExternals()], // Exclude Node.js built-in modules
  devtool: 'source-map',
};
