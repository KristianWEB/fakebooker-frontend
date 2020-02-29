import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar } from "antd";
import { useMutation } from "@apollo/react-hooks";
import { CommentInput, CommentForm } from "./CreateComment.styles";
import { CREATE_COMMENT } from "../../utils/graphql/queries";

const CreateComment = ({ userAvatar, postId }) => {
  const [body, setBody] = useState("");

  const [createComment] = useMutation(CREATE_COMMENT, {
    variables: {
      body,
      postId
    }
  });

  const onSubmit = e => {
    e.preventDefault();
    createComment();
    setBody("");
  };

  return (
    <>
      <CommentForm onSubmit={onSubmit}>
        <Avatar src={userAvatar} size={32} />
        <CommentInput
          name="content"
          placeholder="Write in a comment.."
          onChange={e => setBody(e.target.value)}
          value={body}
        />
      </CommentForm>
    </>
  );
};

export default CreateComment;

CreateComment.propTypes = {
  userAvatar: PropTypes.string,
  postId: PropTypes.string
};

CreateComment.defaultProps = {
  userAvatar: null,
  postId: null
};
