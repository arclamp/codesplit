import path from 'path';

export default {
  entry: './src/main.js',
  output: {
    path: path.resolve('dist'),
    filename: 'main.js'
  }
};
