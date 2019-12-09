import React, { useState } from "react";
import { Avatar } from "antd";
import { useMutation } from "@apollo/react-hooks";
import { CommentInput } from "./CreateComment.styles";
import { CREATE_COMMENT } from "../../utils/graphql/queries";

const CreateComment = ({ userAvatar, postId }) => {
  const [comment, setComment] = useState({
    content: ""
  });

  const onChange = e => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const { content } = comment;

  const [createComment] = useMutation(CREATE_COMMENT, {
    variables: {
      body: content,
      postId
    }
  });

  const onSubmit = e => {
    e.preventDefault();
    createComment();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Avatar src={userAvatar} />
        <CommentInput
          name="content"
          placeholder="Write in a comment.."
          onChange={onChange}
        />
      </form>
    </>
  );
};

export default CreateComment;
