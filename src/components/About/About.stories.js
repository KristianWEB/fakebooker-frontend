import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import About from "./About";
import AboutForm from "./AboutForm";
import { GlobalStyle } from "../../globalStyles/index";
import theme from "../../globalStyles/theme";

storiesOf("About", module)
  .addDecorator(story => (
    <>
      <GlobalStyle />
      {story()}
    </>
  ))
  .addDecorator(story => (
    <div style={{ margin: "3rem", width: "500px" }}>{story()}</div>
  ))
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add("default", () => <About />)
  .add("active", () => <AboutForm />);
