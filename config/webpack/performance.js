import { ifProduction } from './utils';

const performance = {
  ...ifProduction(
    {
      hints: 'warning',
      maxEntrypointSize: 400000,
      maxAssetSize: 400000,
    }
  ),
};

module.exports = performance;
