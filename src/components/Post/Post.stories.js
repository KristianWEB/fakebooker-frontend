import React from "react";
import { storiesOf } from "@storybook/react";
import { MockedProvider } from "@apollo/react-testing";
import { ThemeProvider } from "styled-components";
import CreatePostDefault from "./CreatePostDefault";
import { GlobalStyle } from "../../globalStyles/index";
import theme from "../../globalStyles/theme";
import { LOAD_USER, CREATE_POST } from "../../utils/graphql/queries";
import { post } from "../Comment/Comment.stories";
import Post from "./Post";

const user = {
  username: "kristian",
  token: "JWT token230835",
  email: "kristian@kristian.com",
  displayName: "kristian",
  coverImage: "https://www.w3schools.com/w3images/avatar2.png",
  status: {
    isDeactivated: false,
    lastActiveDate: "1575229416550"
  }
};

const loadUserMocks = [
  {
    request: {
      query: LOAD_USER
    },
    result: {
      data: {
        loadUser: user
      }
    }
  }
];

const createPostMocks = [
  {
    request: {
      query: CREATE_POST,
      variables: {
        content: ""
      }
    },
    result: {
      data: {
        createPost: {
          author: {
            username: user.username,
            coverImage: user.coverImage
          },
          comments: null,
          creationDate: "1575231234746",
          id: "5de41f028c0f4b32e87674cf"
        }
      }
    }
  }
];

storiesOf("Post", module)
  .addDecorator(story => (
    <>
      <GlobalStyle />
      {story()}
    </>
  ))
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .addDecorator(story => (
    <div style={{ margin: "3rem", width: "500px" }}>{story()}</div>
  ))
  .add("Create Post", () => (
    <MockedProvider mocks={createPostMocks} addTypename={false}>
      <CreatePostDefault user={user} />
    </MockedProvider>
  ))
  .add("Post Display", () => (
    <MockedProvider mocks={loadUserMocks} addTypename={false}>
      <Post post={post} />
    </MockedProvider>
  ));
