const {
  override,
  useBabelRc,
  addWebpackModuleRule,
  addLessLoader
} = require("customize-cra");
const modifyVars = require("./antd-customizations");

module.exports = {
  webpack: override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),

    addLessLoader({
      javascriptEnabled: true,
      modifyVars
    })
  )
};
