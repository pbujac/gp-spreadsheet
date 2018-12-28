import merge from 'webpack-merge';

import entry from './config/webpack/entry';
import output from './config/webpack/output';
import modules from './config/webpack/modules';
import plugins from './config/webpack/plugins';
import resolve from './config/webpack/resolve';
import optimization from './config/webpack/optimization';

const commonConfig = merge([
  {
    entry,
    output,
    module: modules,
    resolve,
    optimization,
    plugins
  }
]);

module.exports = merge(commonConfig, {});