import React from "react";
import { storiesOf } from "@storybook/react";
import UserAvatar from "../../../../../assets/images/n4Ngwvi7.jpg";
import UserAvatar2 from "../../../../../assets/images/avatar2-sm.jpg";
import UserAvatar3 from "../../../../../assets/images/avatar5-sm.jpg";
import UserAvatar4 from "../../../../../assets/images/avatar8-sm.jpg";
import CreateComment from "./CreateComment";
import Comment from "./Comment";
import CommentList from "./CommentList";

const comment = {
  userAvatar: UserAvatar,
  userName: "James Spiegel",
  body: "thats a nice tshirt you got dude"
};

// eslint-disable-next-line import/prefer-default-export
export const comments = [
  {
    userAvatar: UserAvatar4,
    userName: "Elaine Dreyfuss",
    body:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.",
    date: 1558095132
  },
  {
    userAvatar: UserAvatar3,
    userName: "Green Goo Rock",
    body:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: 1573819932
  },
  {
    userAvatar: UserAvatar2,
    userName: "Nicholas Grisom",
    body: "Excepteur sint occaecat cupidatat non proident.",
    date: 1575386115
  }
];

export const withLastComment = [
  ...comments.slice(0, 3),
  {
    userAvatar: UserAvatar,
    userName: "James Charles",
    body: "(Last Comment)",
    date: 1575461532
  }
];

const longBody =
  "This is a really really really long comment and it should expand its container with it and create a perfect comment. This has to be fixed so if the comment is too long it should drop below on a new file. Not now tho lets implement it first and then go refactor.";

storiesOf("Comment", module)
  .addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>)
  .add("create", () => <CreateComment userAvatar={UserAvatar} />)
  .add("focused", () => <CreateComment userAvatar={UserAvatar} focused />)
  .add("view", () => <Comment comment={comment} />)
  .add("long body", () => <Comment comment={{ ...comment, body: longBody }} />)
  .add("list", () => <CommentList comments={comments} />)
  .add("list with last comment", () => (
    <CommentList comments={withLastComment} />
  ));
