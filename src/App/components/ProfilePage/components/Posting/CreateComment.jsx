import React from "react";
import { Avatar } from "antd";
import { CommentInput } from "./CreateComment.styles";

const CreateComment = ({ userAvatar, focused }) => {
  return (
    <>
      <Avatar src={userAvatar} />
      <CommentInput placeholder="Write in a comment.." autoFocus={focused} />
    </>
  );
};

export default CreateComment;
