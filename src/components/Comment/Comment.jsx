import React from "react";
import Popup from "reactjs-popup";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useMutation, useQuery } from "@apollo/react-hooks";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {
  CommentContainer,
  BodyContainer,
  Body,
  Username,
  PopButton,
  ActionsContainer,
  CommentAvatar,
} from "./Comment.styles";
import {
  DELETE_COMMENT,
  GET_POSTS,
  GET_URL_POSTS,
  GET_SINGLE_POST,
  GET_NEWSFEED,
  LOAD_USER,
} from "../../utils/queries";
import { ReactComponent as ThreeDotsSvg } from "../../assets/icons/ellipsis-horizontal.svg";

const Comment = ({
  comment: { userId, body, id },
  post: {
    id: postId,
    userId: { id: postCreatorId },
  },
  urlProfile,
  onNewsfeed,
  onSinglePost,
}) => {
  const { username } = useParams();

  const { data: userData } = useQuery(LOAD_USER);

  const [deleteComment, { loading }] = useMutation(DELETE_COMMENT, {
    variables: {
      commentId: id,
      postId,
    },
    update: (proxy) => {
      if (!urlProfile && !onNewsfeed && !onSinglePost) {
        const data = proxy.readQuery({
          query: GET_POSTS,
        });

        const getPosts = data.getPosts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              comments: post.comments.filter((c) => c.id !== id),
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
              comments: post.comments.filter((c) => c.id !== id),
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
      if (onNewsfeed && !urlProfile && !onSinglePost) {
        const data = proxy.readQuery({
          query: GET_NEWSFEED,
        });

        const getNewsfeed = data.getNewsfeed.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              comments: post.comments.filter((c) => c.id !== id),
            };
          }
          return post;
        });

        proxy.writeQuery({
          query: GET_NEWSFEED,
          data: { getNewsfeed },
        });
      }
      if (!onNewsfeed && !urlProfile && onSinglePost) {
        const data = proxy.readQuery({
          query: GET_SINGLE_POST,
          variables: {
            postId,
          },
        });

        const newComments = data.getSinglePost.comments.filter(
          (c) => c.id !== id
        );

        const getSinglePost = {
          ...data.getSinglePost,
          comments: newComments,
        };

        proxy.writeQuery({
          query: GET_SINGLE_POST,
          data: { getSinglePost },
        });
      }
    },
  });

  const SettingsPopup = () => (
    <ActionsContainer>
      <PopButton onClick={deleteComment} disabled={loading}>
        Delete Comment
        {loading && (
          <Loader
            type="TailSpin"
            color="#1876f2"
            style={{
              position: "absolute",
              top: "13px",
              right: "16px",
            }}
            height={20}
            width={20}
          />
        )}
      </PopButton>
    </ActionsContainer>
  );
  return (
    <>
      <CommentContainer>
        <CommentAvatar src={userId.avatarImage} />
        <BodyContainer>
          <Link to={`/${userId.username}`}>
            <Username>
              {userId.firstName} {userId.lastName}
            </Username>
          </Link>
          <Body>{body}</Body>
        </BodyContainer>
        {userData &&
          (userData.loadUser.id === userId.id ||
            postCreatorId === userData.loadUser.id) && (
            <Popup
              className="deleteCommentPopup"
              arrow={false}
              trigger={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <ThreeDotsSvg
                  style={{
                    cursor: "pointer",
                    width: "20px",
                    height: "20px",
                    flexShrink: "0",
                    fill: "#65676b",
                  }}
                />
              }
              closeOnDocumentClick
            >
              <SettingsPopup />
            </Popup>
          )}
      </CommentContainer>
    </>
  );
};

export default Comment;

Comment.propTypes = {
  comment: PropTypes.shape({
    userId: PropTypes.shape({
      avatarImage: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    body: PropTypes.string,
    id: PropTypes.string,
  }),
  post: PropTypes.shape({
    postId: PropTypes.string,
    postCreatorId: PropTypes.string,
  }),
  urlProfile: PropTypes.bool,
  onNewsfeed: PropTypes.bool,
  onSinglePost: PropTypes.bool,
};

Comment.defaultProps = {
  comment: null,
  post: null,
  urlProfile: null,
  onNewsfeed: null,
  onSinglePost: null,
};
