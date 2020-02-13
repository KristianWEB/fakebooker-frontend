import React from "react";
import { storiesOf } from "@storybook/react";
import { MockedProvider } from "@apollo/react-testing";
import { ThemeProvider } from "styled-components";
import RegisterForm from "./RegisterForm";
import { GlobalStyle } from "../../globalStyles/index";
import theme from "../../globalStyles/theme";

// const user = {
//   coverImage: "https://www.w3schools.com/w3images/avatar2.png"
// };

storiesOf("RegisterForm", module)
  .addDecorator(story => (
    <>
      <GlobalStyle />
      {story()}
    </>
  ))
  .addDecorator(story => <div style={{ margin: "3rem" }}>{story()}</div>)
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add("default", () => (
    <MockedProvider>
      <RegisterForm />
    </MockedProvider>
  ));
