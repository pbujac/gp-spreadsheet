import webpack from 'webpack';
import { removeEmpty } from 'webpack-config-utils';
import { PATHS, ifNotProduction, ifProduction } from './utils';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import SassLintPlugin from 'sass-lint-webpack';

import TerserPlugin from 'terser-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

const plugins = removeEmpty([
  new CleanWebpackPlugin(['dist'], {
    root: PATHS.base,
    verbose: true,
  }),
  new HtmlWebpackPlugin({
    template: PATHS.htmlTemplate,
    assets: ['[id].css'],
    ...ifProduction({ minify: true }),
  }),
  ifNotProduction(new SassLintPlugin({
    configFile: '.sass-lint.yml',
    glob: '**/*.s?(a|c)ss',
  })),
  ifProduction(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"',
    },
  })),
  ifProduction(new webpack.optimize.ModuleConcatenationPlugin()),
  ifProduction(new webpack.HashedModuleIdsPlugin()),
  ifProduction(new TerserPlugin({
    parallel: true,
    cache: true,
    terserOptions: {
      output: {
        comments: false,
      },
    },
  })),
  ifProduction(new MiniCssExtractPlugin({
    filename: '[id].[hash].css',
    chunkFilename: '[id].[hash].css',
  })),
  ifProduction(new CompressionPlugin({
    algorithm: 'gzip',
  })),
]);

module.exports = plugins;
