import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import webpack from 'webpack';
import path from 'path';
import CompressionPlugin from 'compression-webpack-plugin';

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '../../', '/src/index.html'),
    assets: ['[name].css'],
    minify: true
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new CleanWebpackPlugin([ 'dist' ],  {
    root: path.resolve(__dirname, '../../'),
    verbose: true
  }),
  new webpack.HashedModuleIdsPlugin(),
  new UglifyJsPlugin({
    parallel: true,
    cache: true,
    uglifyOptions: {
      output: {
        comments: false
      },

    }
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[name].[hash].css'
  }),
  new OptimizeCSSAssetsPlugin(),
  new CompressionPlugin({
    algorithm: 'gzip'
  })
];
module.exports = plugins;
