import path from 'path';

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
      test: /\.css$/,
      exclude: /node_modules/,
      use: [ 'style-loader', 'css-loader' ]
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

