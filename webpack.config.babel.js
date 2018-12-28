import merge from 'webpack-merge';

import entry from './config/webpack/entry';
import output from './config/webpack/output';
import modules from './config/webpack/modules';
import plugins from './config/webpack/plugins';
import resolve from './config/webpack/resolve';
import optimization from './config/webpack/optimization';
import stats from './config/webpack/stats';
import performance from './config/webpack/performance';

const commonConfig = merge([
  {
    entry,
    output,
    module: modules,
    resolve,
    optimization,
    plugins,
    stats,
    performance
  }
]);

const devMode = {
  mode: 'development',
  devtool: ''
};

module.exports = devMode;

const prodMode = {
  mode: 'production'
};

module.exports = merge(commonConfig, devMode);