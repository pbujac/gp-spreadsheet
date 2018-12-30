import { PATHS } from './utils';

const resolve = {
  extensions: ['*', '.js', '.jsx'],
  modules: [
    PATHS.root,
    'node_modules',
    PATHS.style,
  ],
  alias: {
    components: PATHS.components,
    pages: PATHS.pages,
    actions: PATHS.actions,
    reducers: PATHS.reducers,
    constants: PATHS.constants,
    api: PATHS.api,
    utils: PATHS.utils,
    images: PATHS.images,
    style: PATHS.style,
  },
};

module.exports = resolve;
