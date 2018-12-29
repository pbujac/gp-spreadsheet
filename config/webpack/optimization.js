import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import { removeEmpty } from 'webpack-config-utils';
import { ifProduction } from './utils';

const optimization = {
  minimizer: removeEmpty([
    ifProduction(new OptimizeCSSAssetsPlugin()),
  ]),
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /node_modules/,
        name: 'vendors',
        chunks: 'all',
      },
    },
  },
};

module.exports = optimization;
