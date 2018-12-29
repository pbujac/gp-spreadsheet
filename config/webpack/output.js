import path from 'path';

const output = {
  path: path.join(__dirname, '../../', '/dist'),
  filename: '[name].[hash].bundle.js',
  chunkFilename:'[name].[hash].chunk.js',
};

module.exports = output;
