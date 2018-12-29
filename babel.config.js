module.exports = api => {
  api.cache(false);

  const presets = [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        'targets': {
          'browsers': ['last 2 versions', 'ie >= 10'],
        },
      },
    ],
  ];
  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
  ];

  return {
    presets,
    plugins,
  };
};
