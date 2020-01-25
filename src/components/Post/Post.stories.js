import React from "react";
import { storiesOf } from "@storybook/react";
import { MockedProvider } from "@apollo/react-testing";
import CreatePostDefault from "./CreatePostDefault";
import CreatePostNew from "./CreatePostNew";

storiesOf("Post", module)
  .addDecorator(story => <div style={{ margin: "3rem" }}>{story()}</div>)
  .add("Create Post Default", () => <CreatePostDefault />)
  .add("Create Post Active", () => (
    <MockedProvider>
      <CreatePostNew />
    </MockedProvider>
  ));
