module.exports = {
  verbose: true,
  cache: false,
  moduleFileExtensions: [
    'js',
    'jsx',
    'html',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  modulePaths: [
    '<rootDir>/src/',
  ],
  testMatch: [
    '<rootDir>/src/**/*test.js',
  ],
  setupFiles: [
    './jestsetup.js',
  ],
  browser: true,
};
