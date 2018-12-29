import { PATHS } from './utils';

const resolve = {
  extensions: ['.js', '.jsx'],
  modules: [PATHS.root, 'node_modules'],
  alias: {},
};

module.exports = resolve;
