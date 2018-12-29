import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const modules = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [ 'babel-loader' ]
    },
    {
      test: /\.js$/,
      use: [ 'source-map-loader' ],
      enforce: 'pre'
    },
    {
      test: /\.s?css$/,
      use: [
        {
          // loader: MiniCssExtractPlugin.loader // prod
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true,
            localIdentName: '[sha1:hash:hex:4]'
          }
        },
        {
          loader: 'sass-loader'
        }]
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: path.join(__dirname, '../../', 'src/assets/images'),
          },
        },
      ],
    },
    {
      test: /\.(woff2|ttf|woff|eot)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: path.join(__dirname, '../../', 'src/assets/fonts'),
          },
        },
      ],
    },
  ],
};

module.exports = modules;

