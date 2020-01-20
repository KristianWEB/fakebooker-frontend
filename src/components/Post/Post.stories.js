import React from "react";
import { storiesOf } from "@storybook/react";
import CreatePostDefault from "./CreatePostDefault";

storiesOf("Post", module)
  .addDecorator(story => <div style={{ margin: "3rem" }}>{story()}</div>)
  .add("Create Post Default", () => <CreatePostDefault />);
