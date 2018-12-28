import path from 'path';

const output = {
  path: path.join(__dirname, '../../', '/dist'),
  filename: '[name].[hash].js',
  chunkFilename:'[id][hash].js',
  publicPath:'/'
};

module.exports = output;
