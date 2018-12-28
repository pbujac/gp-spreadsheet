const optimization = {
  namedChunks: true,
  splitChunks: {
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all'
      },
      common: {
        test: /[\\/](utils|core|googleMaps|localStorage|analytics|global)[\\/]/,
        name: 'common',
        chunks: 'initial'
      }
    },
  }
};

module.exports = optimization;