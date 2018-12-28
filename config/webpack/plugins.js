import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import webpack from 'webpack';
import path from 'path';
import { PROD_ENV } from '../../webpack.config.babel';

const defaultPlugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '../../', '/src/index.html')
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new CleanWebpackPlugin([ 'dist' ])
];

const devPlugins = [
  ...defaultPlugins,
  new webpack.DefinePlugin({
    __ENV__: JSON.stringify(process.env.NODE_ENV || 'development')
  })
];

const prodPlugins = [
  ...defaultPlugins,
  new MiniCssExtractPlugin({
    filename: '[name]-[hash].css',
    chunkFilename: '[id][hash].css'
  }),
  new UglifyJsPlugin({
    cache: true,
    parallel: true
  }),
];

module.exports = (env) => env.production === PROD_ENV ? prodPlugins : devPlugins;