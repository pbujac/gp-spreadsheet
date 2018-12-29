import path from 'path';

const resolve = {
  extensions: [ '*', '.js', '.jsx' ],
  modules: [ path.join(__dirname, '../../', '/src/'), 'node_modules' ],
  alias: {}
};

module.exports = resolve;
