import path from 'path';

const umdConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'codesplit.js',
    libraryTarget: 'umd',
    library: 'codesplit'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/env', {
                targets: {
                  node: 'current'
                }
              }]
            ]
          }
        }
      }
    ]
  }
};

const webConfig = {
  entry: './src/main.js',
  output: {
    path: path.resolve('dist'),
    filename: 'main.js'
  }
};

export default [umdConfig, webConfig];
