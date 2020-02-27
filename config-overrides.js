const {
  override,
  useBabelRc,
  addLessLoader,
  fixBabelImports
} = require("customize-cra");
const modifyVars = require("./antd-customizations");

module.exports = {
  webpack: override(
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true
    }),
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),

    addLessLoader({
      javascriptEnabled: true,
      modifyVars
    })
  )
};
