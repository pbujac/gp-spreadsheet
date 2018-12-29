import merge from 'webpack-merge';

import entry from './config/webpack/entry';
import output from './config/webpack/output';
import modules from './config/webpack/modules';
import resolve from './config/webpack/resolve';
import optimization from './config/webpack/optimization';
import plugins from './config/webpack/plugins';
import stats from './config/webpack/stats';
import performance from './config/webpack/performance';

const commonConfig = merge([
  {
    entry,
    output,
    module: modules,
    resolve,
    optimization,
    performance,
    plugins,
    stats
  }
]);

const devConfig = {
  mode: 'development',
  devtool: '',
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    port: 4000,
    hot: true,
    inline: true,
    progress: true,
    stats: {
      colors: true,
      modules: false,
      children: false
    }
  }
};

const prodConfig = {
  mode: 'production',
};


module.exports = devConfig;
module.exports = prodConfig;
export const PROD_ENV = 'production';
module.exports = env => merge(commonConfig, env.production === PROD_ENV ? prodConfig : devConfig);