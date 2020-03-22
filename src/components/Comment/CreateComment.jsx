import React, { useState } from "react";
// import produce from "immer";
import PropTypes from "prop-types";
import { Avatar } from "antd";
import { useMutation } from "@apollo/react-hooks";
import { CommentInput, CommentForm } from "./CreateComment.styles";
import { CREATE_COMMENT, GET_POSTS } from "../../utils/queries";

const CreateComment = ({ userAvatar, postId }) => {
  const [body, setBody] = useState("");

  const [createComment] = useMutation(CREATE_COMMENT, {
    variables: {
      body,
      postId
    },
    update: (proxy, result) => {
      const data = proxy.readQuery({
        query: GET_POSTS
      });

      const getPosts = data.getPosts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, result.data.createComment]
          };
        }
        return post;
      });

      proxy.writeQuery({
        query: GET_POSTS,
        data: { getPosts }
      });
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
