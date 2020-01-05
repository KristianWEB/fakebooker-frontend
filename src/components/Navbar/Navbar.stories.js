import React from "react";
import { storiesOf } from "@storybook/react";
import Navbar from "./Navbar";

storiesOf("Navbar", module)
  .addDecorator(story => <div style={{ margin: "3rem" }}>{story()}</div>)
  .add("default", () => <Navbar />)
  .add("on profile page", () => <Navbar onProfile />);
