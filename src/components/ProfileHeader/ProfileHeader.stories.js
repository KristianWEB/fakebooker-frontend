import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../globalStyles/index";
import theme from "../../globalStyles/theme";
import ProfileHeader from "./ProfileHeader";

const user = {
  coverImage: "https://www.w3schools.com/w3images/avatar2.png"
};

storiesOf("ProfileHeader", module)
  .addDecorator(story => (
    <>
      <GlobalStyle />
      {story()}
    </>
  ))
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add("default", () => (
    <MemoryRouter>
      <ProfileHeader user={user} />
    </MemoryRouter>
  ));
