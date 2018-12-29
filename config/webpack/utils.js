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
  fonts: path.resolve(__dirname, '../../', 'src/assets/fonts'),
};
