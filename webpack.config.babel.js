import merge from 'webpack-merge';
import path from 'path';

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
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4000,
    overlay: true
  }
};

const prodConfig = {
  mode: 'production',
};

export const PROD_ENV = 'production';
module.exports = env => merge(commonConfig, env.production === PROD_ENV ? prodConfig : devConfig);