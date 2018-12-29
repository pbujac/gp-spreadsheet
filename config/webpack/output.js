import { PATHS, ifProduction } from './utils';

const output = {
  path: PATHS.build,
  filename: ifProduction('[id].[contenthash].js', '[name].bundle.js'),
  chunkFilename: ifProduction('[id].[contenthash].js', '[name].chunk.js'),
};

module.exports = output;
