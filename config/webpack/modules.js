import autoprefixer from 'autoprefixer';
import postCSSmodulesValues from 'postcss-modules-values';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { removeEmpty } from 'webpack-config-utils';
import { PATHS, ifNotProduction, ifProduction } from './utils';

const modules = {
  rules: removeEmpty([
    ifNotProduction({
      enforce: 'pre',
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }),
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.s?css$/,
      use: [
        ifProduction(MiniCssExtractPlugin.loader, 'style-loader'),
        {
          loader: 'css-loader',
          options: {
            modules: true,
            ...ifNotProduction({ sourceMap: true }),
            importLoaders: 1,
            localIdentName: '[sha1:hash:hex:4]',
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
              autoprefixer,
              postCSSmodulesValues,
            ],
          },
        },
        'sass-loader',
      ],
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
    {
      test: /\.(woff2|ttf|woff|eot)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: PATHS.fonts,
          },
        },
      ],
    },
  ]),
};

module.exports = modules;

