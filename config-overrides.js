const {
  override,
  useBabelRc,
  addWebpackModuleRule,
  addLessLoader
} = require("customize-cra");
const modifyVars = require("./antd-customizations");

module.exports = {
  webpack: override(
    addWebpackModuleRule({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    }),

    useBabelRc(),

    addLessLoader({
      javascriptEnabled: true,
      modifyVars
    })
  )
};
