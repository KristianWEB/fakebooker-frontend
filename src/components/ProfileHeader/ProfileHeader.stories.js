import React from "react";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import ProfileHeader from "./ProfileHeader";

storiesOf("ProfileHeader", module)
  .addDecorator(story => <div style={{ margin: "3rem" }}>{story()}</div>)
  .add("default", () => (
    <MemoryRouter>
      <ProfileHeader />
    </MemoryRouter>
  ));
