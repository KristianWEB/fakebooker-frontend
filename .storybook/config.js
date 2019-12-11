// .storybook/config.js

import { configure } from "@storybook/react";
import "antd/es/style/index.less";

const req = require.context("../src", true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
