module.exports = function({ config }) {
  config.module.rules.unshift({
    test: /\.stories\.js?$/,
    loaders: [require.resolve("@storybook/source-loader")],
    enforce: "pre"
  });
  return config;
};
