const path = require("path");
const modifyVars = require("../antd-customizations");

module.exports = ({ config }) => {
  config.module.rules.unshift({
    test: /\.stories\.js?$/,
    loaders: [require.resolve("@storybook/source-loader")],
    enforce: "pre"
  });

  config.module.rules.push({
    loader: require.resolve("babel-loader"),
    test: /\.(jsx?)$/,
    options: {
      babelrc: true
    }
  });

  config.module.rules.push({
    test: /\.less$/,
    loaders: [
      require.resolve("style-loader"),
      require.resolve("css-loader"),
      {
        loader: require.resolve("less-loader"),
        options: {
          javascriptEnabled: true,
          modifyVars
        }
      }
    ],
    include: [
      path.resolve(__dirname, "../src/"),
      /[\\/]node_modules[\\/].*antd/
    ]
  });
  return config;
};
