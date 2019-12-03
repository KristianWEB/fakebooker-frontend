// .storybook/config.js

import { configure } from "@storybook/react";
import "antd/dist/antd.css";
import "../src/App/App.css";

const req = require.context("../src", true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
