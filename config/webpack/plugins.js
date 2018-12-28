import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import webpack from 'webpack';
import path from 'path';

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '../../', '/src/index.html')
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new MiniCssExtractPlugin({
    filename: "[name]-[hash].css",
    chunkFilename: "[id][hash].css"
  }),
  new UglifyJsPlugin({ sourceMap: true }),
];

module.exports = plugins;
