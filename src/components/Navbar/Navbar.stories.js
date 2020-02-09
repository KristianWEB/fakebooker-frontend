import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import Navbar from "./Navbar";
import { GlobalStyle } from "../../globalStyles/index";
import theme from "../../globalStyles/theme";

const user = {
  coverImage: "https://www.w3schools.com/w3images/avatar2.png"
};

storiesOf("Navbar", module)
  .addDecorator(story => (
    <>
      <GlobalStyle />
      {story()}
    </>
  ))
  .addDecorator(story => <div style={{ margin: "3rem" }}>{story()}</div>)
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add("default", () => <Navbar />)
  .add("on profile page", () => <Navbar onProfile user={user} />);
