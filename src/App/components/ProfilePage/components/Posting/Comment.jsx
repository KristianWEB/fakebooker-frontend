import React from "react";
import { Avatar } from "antd";
import {
  CommentContainer,
  BodyContainer,
  Body,
  Username
} from "./Comment.styles";

const Comment = ({ comment: { userAvatar, userName, body } }) => {
  return (
    <>
      <CommentContainer>
        <Avatar src={userAvatar} />
        <BodyContainer>
          <Username>{userName}</Username>
          <Body>{body}</Body>
        </BodyContainer>
      </CommentContainer>
    </>
  );
};

export default Comment;
