import React from "react";
import { storiesOf } from "@storybook/react";
import About from "./About";
import AboutForm from "./AboutForm";

storiesOf("About", module)
  .addDecorator(story => <div style={{ margin: "3rem" }}>{story()}</div>)
  .add("default", () => <About />)
  .add("active", () => <AboutForm />);
