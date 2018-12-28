const optimization = {
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor_app',
        chunks: 'all',
        minChunks: 6
      },
      styles: {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true
      }
    }
  }
};

module.exports = optimization;
