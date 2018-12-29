import { PATHS } from './utils';

const resolve = {
  extensions: ['.js', '.jsx'],
  modules: [PATHS.root, 'node_modules'],
  alias: {
    components: PATHS.components,
    pages: PATHS.pages,
    actions: PATHS.actions,
    reducers: PATHS.reducers,
  },
};

module.exports = resolve;
