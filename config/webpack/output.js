import path from 'path';

const output = {
  path: path.join(__dirname, '../../', '/dist'),
  filename: '[name].bundle.[hash].js',
  chunkFilename:'[name].[hash].js',
  publicPath:'/'
};

module.exports = output;
