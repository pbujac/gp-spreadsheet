import merge from 'webpack-merge';

import entry from './config/webpack/entry';
import output from './config/webpack/output';
import modules from './config/webpack/modules';
import resolve from './config/webpack/resolve';
import optimization from './config/webpack/optimization';
import plugins from './config/webpack/plugins';
import stats from './config/webpack/stats';
import performance from './config/webpack/performance';

import { ifProduction, ifNotProduction } from './config/webpack/utils';

const commonConfig = merge([
  {
    mode: ifProduction('production', 'development'),
    entry,
    output,
    module: modules,
    resolve,
    optimization,
    performance,
    plugins,
    stats,
  },
]);
const devConfig = {
  devtool: 'cheap-source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    port: process.env.PORT || 9000,
    progress: true,
    stats: {
      modules: false,
      children: false,
      chunkModules: false,
    },
  },
};

module.exports = devConfig;
module.exports = merge(commonConfig, ifNotProduction(devConfig));