import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import produce from "immer";
import PropTypes from "prop-types";
import { Avatar } from "antd";
import { useMutation } from "@apollo/react-hooks";
import { CommentInput, CommentForm } from "./CreateComment.styles";
import { CREATE_COMMENT, GET_POSTS, GET_URL_POSTS } from "../../utils/queries";

const CreateComment = ({ user, postId, urlProfile }) => {
  const [body, setBody] = useState("");
  const { username } = useParams();

  // you need to be able to comment on this guy's post ( implement getUrlposts and getPosts )
  const [createComment] = useMutation(CREATE_COMMENT, {
    variables: {
      body,
      postId
    },
    update: (proxy, result) => {
      if (!urlProfile) {
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
      } else {
        const data = proxy.readQuery({
          query: GET_URL_POSTS,
          variables: {
            username
          }
        });

        const getUrlPosts = data.getUrlPosts.map(post => {
          if (post.id === postId) {
            return {
              ...post,
              comments: [...post.comments, result.data.createComment]
            };
          }
          return post;
        });
        proxy.writeQuery({
          query: GET_URL_POSTS,
          data: { getUrlPosts },
          variables: {
            username
          }
        });
      }
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
        <Avatar src={user.avatarImage} size={32} />
        <CommentInput
          name="content"
          placeholder="Write in a comment.."
          onChange={e => setBody(e.target.value)}
          value={body}
          data-testid="createComment"
        />
      </CommentForm>
    </>
  );
};

export default CreateComment;

CreateComment.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    avatarImage: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    birthday: PropTypes.string,
    gender: PropTypes.string,
    coverImage: PropTypes.string
  }),
  postId: PropTypes.string,
  urlProfile: PropTypes.bool
};

CreateComment.defaultProps = {
  user: null,
  postId: null,
  urlProfile: null
};
