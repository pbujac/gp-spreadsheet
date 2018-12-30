import path from 'path';
import { getIfUtils } from 'webpack-config-utils';

export const { ifProduction, ifNotProduction } = getIfUtils(process.env.NODE_ENV);
export const PATHS = {
  app: path.resolve(__dirname, '../../', 'src/index.js'),
  htmlTemplate: path.join(__dirname, '../../', '/src/index.html'),
  build: path.join(__dirname, '../../', '/dist'),
  base: path.resolve(__dirname, '../../'),
  root: path.resolve(__dirname, '../../', '/src/'),
  images: path.resolve(__dirname, '../../', 'src/assets/images'),
  style: path.resolve(__dirname, '../../', 'src/assets/scss'),
  fonts: path.resolve(__dirname, '../../', 'src/assets/fonts'),
  components: path.resolve(__dirname, '../../', 'src/components'),
  pages: path.resolve(__dirname, '../../', 'src/pages'),
  reducers: path.resolve(__dirname, '../../', 'src/redux/reducers'),
  actions: path.resolve(__dirname, '../../', 'src/redux/actions'),
  constants: path.resolve(__dirname, '../../', 'src/redux/constants'),
  api: path.resolve(__dirname, '../../', 'src/redux/api'),
  utils: path.resolve(__dirname, '../../', 'src/utils'),
};
