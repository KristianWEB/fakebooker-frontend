const {
  override,
  fixBabelImports,
  useBabelRc,
  addLessLoader
} = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  }),
  useBabelRc(),
  addLessLoader({
    javascriptEnabled: true
  })
);
