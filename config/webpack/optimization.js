import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

const optimization = {
  minimizer: [
    new OptimizeCSSAssetsPlugin()
  ],
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /node_modules/,
        name: 'vendors',
        chunks: "all"
      }
    }
  }
};

module.exports = optimization;
