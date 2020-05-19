import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { CommentInput, CommentForm, UserAvatar } from "./CreateComment.styles";
import {
  CREATE_COMMENT,
  GET_POSTS,
  GET_URL_POSTS,
  GET_NEWSFEED,
  GET_SINGLE_POST,
} from "../../utils/queries";

const CreateComment = ({
  user,
  postId,
  urlProfile,
  onNewsfeed,
  onSinglePost,
}) => {
  const { username } = useParams();
  const { register, getValues, setValue, handleSubmit } = useForm();

  // you need to be able to comment on this guy's post ( implement getUrlposts and getPosts )
  const [createComment, { loading }] = useMutation(CREATE_COMMENT, {
    variables: {
      body: getValues("body"),
      postId,
    },
    update: (proxy, result) => {
      if (!urlProfile && !onNewsfeed && !onSinglePost) {
        const data = proxy.readQuery({
          query: GET_POSTS,
        });

        const getPosts = data.getPosts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              comments: [...post.comments, result.data.createComment],
            };
          }
          return post;
        });

        proxy.writeQuery({
          query: GET_POSTS,
          data: { getPosts },
        });
      }
      if (urlProfile && !onNewsfeed && !onSinglePost) {
        const data = proxy.readQuery({
          query: GET_URL_POSTS,
          variables: {
            username,
          },
        });

        const getUrlPosts = data.getUrlPosts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              comments: [...post.comments, result.data.createComment],
            };
          }
          return post;
        });
        proxy.writeQuery({
          query: GET_URL_POSTS,
          data: { getUrlPosts },
          variables: {
            username,
          },
        });
      }
      if (!onSinglePost && !urlProfile && onNewsfeed) {
        const data = proxy.readQuery({
          query: GET_NEWSFEED,
        });

        const getNewsfeed = data.getNewsfeed.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              comments: [...post.comments, result.data.createComment],
            };
          }
          return post;
        });

        proxy.writeQuery({
          query: GET_NEWSFEED,
          data: { getNewsfeed },
        });
      }
      if (onSinglePost && !urlProfile && !onNewsfeed) {
        const data = proxy.readQuery({
          query: GET_SINGLE_POST,
          variables: {
            postId,
          },
        });

        const getSinglePost = {
          ...data.getSinglePost,
          comments: [...data.getSinglePost.comments, result.data.createComment],
        };

        proxy.writeQuery({
          query: GET_SINGLE_POST,
          data: { getSinglePost },
        });
      }
    },
  });

  const onSubmit = async () => {
    await createComment();
    setValue("body", "");
  };

  return (
    <>
      <CommentForm onSubmit={handleSubmit(onSubmit)}>
        <UserAvatar src={user.avatarImage} />
        <CommentInput
          name="body"
          placeholder="Write in a comment.."
          ref={register({
            required: true,
          })}
          disabled={loading}
        />
        {loading && (
          <Loader
            type="TailSpin"
            color="#1876f2"
            style={{
              position: "absolute",
              top: "8px",
              right: "16px",
            }}
            height={20}
            width={20}
          />
        )}
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
    coverImage: PropTypes.string,
  }),
  postId: PropTypes.string,
  urlProfile: PropTypes.bool,
  onNewsfeed: PropTypes.bool,
  onSinglePost: PropTypes.bool,
};

CreateComment.defaultProps = {
  user: null,
  postId: null,
  urlProfile: null,
  onNewsfeed: null,
  onSinglePost: null,
};
