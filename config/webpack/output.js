import path from 'path';

const output = {
  path: path.join(__dirname, '../../', '/dist'),
  filename: '[name].bundle.js',
  chunkFilename:'[name].chunk.js',
  publicPath:'/'
};

module.exports = output;
