import React, { useState } from "react";
import { Avatar } from "antd";
import { useMutation } from "@apollo/react-hooks";
import { CommentInput, CommentForm } from "./CreateComment.styles";
import { CREATE_COMMENT } from "../../utils/graphql/queries";

const CreateComment = ({ userAvatar, postId }) => {
  const [comment, setComment] = useState("");

  const [createComment] = useMutation(CREATE_COMMENT, {
    variables: {
      body: comment,
      postId
    }
  });

  const onSubmit = e => {
    e.preventDefault();
    createComment();
    setComment("");
  };

  return (
    <>
      <CommentForm onSubmit={onSubmit}>
        <Avatar src={userAvatar} size={32} />
        <CommentInput
          name="content"
          placeholder="Write in a comment.."
          onChange={e => setComment(e.target.value)}
          value={comment}
        />
      </CommentForm>
    </>
  );
};

export default CreateComment;
