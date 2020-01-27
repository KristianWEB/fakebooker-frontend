import React from "react";
import { storiesOf } from "@storybook/react";
import { MockedProvider } from "@apollo/react-testing";
import {
  CREATE_COMMENT,
  GET_POSTS_BY_USERNAME
} from "../../utils/graphql/queries";
import UserAvatar from "../../assets/images/36.jpg";
import UserAvatar2 from "../../assets/images/avatar5-sm.jpg";
import UserAvatar3 from "../../assets/images/avatar8-sm.jpg";
import CreateComment from "./CreateComment";
import Comment from "./Comment";
import CommentList from "./CommentList";

const comment = {
  author: {
    username: "James Spiegel",
    coverImage: UserAvatar
  },
  body: "thats a nice tshirt you got dude"
};

const createCommentMocks = [
  {
    request: {
      query: CREATE_COMMENT,
      variables: {
        body: "hey wassup dude how are you",
        postId: "f32502352375f247"
      }
    },
    result: {
      data: {
        createComment: {
          author: {
            username: "James Charles",
            coverImage: UserAvatar
          },
          comments: [
            {
              author: {
                username: "James Charles",
                coverImage: UserAvatar
              },
              body: "please work dude",
              id: "5deabc0846450e167492c4ef"
            }
          ],
          creationDate: "1575231234746",
          id: "5de41f028c0f4b32e87674cf"
        }
      }
    }
  }
];

// eslint-disable-next-line import/prefer-default-export
export const post = {
  userId: "5de4187169d40c5fa054c84b",
  content: "new updated post asdlkfj",
  creationDate: "1575229583777",
  author: {
    username: "kristian",
    coverImage: "https://www.w3schools.com/w3images/avatar2.png"
  },
  comments: [
    {
      id: "5deac55c46450e167492c4f0",
      userId: "5de4187169d40c5fa054c84b",
      createdAt: "2019-12-06T21:17:16.752Z",
      author: {
        username: "Diana Cameron",
        coverImage: UserAvatar3
      },
      body: "hey nice tshirt where did you get it?"
    },
    {
      id: "5deac55c46450e167492c4f0",
      userId: "5de4187169d40c5fa054c84b",
      createdAt: "2019-12-06T21:17:16.752Z",
      author: {
        username: "john87",
        coverImage: UserAvatar2
      },
      body: "thats my second comment for this post"
    }
  ]
};

const getPostsMocks = [
  {
    request: {
      query: GET_POSTS_BY_USERNAME,
      variables: {
        username: "kristian"
      }
    },
    result: {
      data: {
        getPosts: { ...post }
      }
    }
  }
];

const longBody =
  "This is a really really really long comment and it should expand its container with it and create a perfect comment. This has to be fixed so if the comment is too long it should drop below on a new file. Not now tho lets implement it first and then go refactor.";

storiesOf("Comment", module)
  .addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>)
  .add("create", () => (
    <MockedProvider mocks={createCommentMocks} addTypename={false}>
      <CreateComment userAvatar={UserAvatar} />
    </MockedProvider>
  ))
  .add("view", () => (
    <MockedProvider addTypename={false}>
      <Comment comment={comment} postId={post.id} />
    </MockedProvider>
  ))
  .add("long body", () => (
    <MockedProvider addTypename={false}>
      <Comment comment={{ ...comment, body: longBody }} />
    </MockedProvider>
  ))
  .add("list", () => (
    <MockedProvider mocks={getPostsMocks} addTypename={false}>
      <CommentList post={post} />
    </MockedProvider>
  ));
