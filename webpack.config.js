const path = require('path');

module.exports = {
  entry: './src/index.ts',
	mode: 'development',
	devtool: 'inline-source-map',
	watch: true,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    library: 'jsc4',
    path: path.resolve(__dirname, 'dist'),
  },
};
