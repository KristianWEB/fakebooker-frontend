import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import moment from "moment/moment";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/react-hooks";
import ReactMarkdown from "react-markdown";
import Popup from "reactjs-popup";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {
  PostContainer,
  SettingsContainer,
  PostHeader,
  ProfileAvatar,
  ProfileWrapper,
  NameWrapper,
  ProfileName,
  PostCreation,
  PostContent,
  PostFooter,
  LikesButton,
  PopContainer,
  PopButton,
  LikesCount,
  CommentsWrapper,
  CommentsCount,
  LikesHeading,
  CommentsHeading,
  CommentsContainer,
  PostImage,
} from "./Post.styles";
import { ReactComponent as CommentsSVG } from "../../assets/icons/chatbox.svg";
import { ReactComponent as LikesSVG } from "../../assets/icons/thumbs-up.svg";
import { ReactComponent as ThreeDotsSvg } from "../../assets/icons/ellipsis-horizontal.svg";
import Comment from "../Comment/Comment";
import CreateComment from "../Comment/CreateComment";
import {
  DELETE_POST,
  LIKE_POST,
  GET_SINGLE_POST,
  GET_POSTS,
  GET_NEWSFEED,
} from "../../utils/queries";

const Post = ({ post, user, readOnly, onNewsfeed, onSinglePost }) => {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (user && post.likes.find((like) => like.userId === user.id)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, post]);

  const history = useHistory();
  const [deletePost, { loading: deletePostLoading }] = useMutation(
    DELETE_POST,
    {
      variables: {
        postId: post.id,
      },
      onCompleted: () => {
        if (history.location.pathname === `/post/${post.id}`) {
          history.push("/");
        }
      },
      onError: () => {
        if (history.location.pathname === `/post/${post.id}`) {
          history.push("/");
        }
      },
      update: (proxy) => {
        if (!onNewsfeed && !onSinglePost) {
          const data = proxy.readQuery({
            query: GET_POSTS,
          });

          const newPostList = data.getPosts.filter((p) => p.id !== post.id);

          const newData = { getPosts: [...newPostList] };

          proxy.writeQuery({
            query: GET_POSTS,
            data: newData,
          });
        }
        if (onNewsfeed) {
          const data = proxy.readQuery({
            query: GET_NEWSFEED,
          });

          const newPostList = data.getNewsfeed.filter((p) => p.id !== post.id);

          const newData = { getNewsfeed: [...newPostList] };

          proxy.writeQuery({
            query: GET_NEWSFEED,
            data: newData,
          });
        }
        if (onSinglePost) {
          const newData = { getSinglePost: null };

          proxy.writeQuery({
            query: GET_SINGLE_POST,
            data: newData,
            variables: {
              postId: post.id,
            },
          });
        }
      },
    }
  );

  const [likePost, { loading }] = useMutation(LIKE_POST, {
    variables: {
      postId: post.id,
    },
  });

  const SettingsPopup = () => (
    <PopContainer>
      <PopButton onClick={deletePost} disabled={deletePostLoading}>
        Delete Post
        {deletePostLoading && (
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
    </PopContainer>
  );

  return (
    <PostContainer>
      <PostHeader>
        <ProfileWrapper>
          <ProfileAvatar src={post.userId.avatarImage} />
          <NameWrapper>
            <Link to={`/${post.userId.username}`}>
              <ProfileName>
                {post.userId.firstName} {post.userId.lastName}
              </ProfileName>
            </Link>
            <PostCreation>
              {moment(Number(post.createdAt)).fromNow()}
            </PostCreation>
          </NameWrapper>
        </ProfileWrapper>
        {!readOnly && post.userId.id === user.id && (
          <Popup
            className="deletePostPopup"
            arrow={false}
            trigger={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <SettingsContainer>
                <ThreeDotsSvg
                  style={{
                    cursor: "pointer",
                    width: "25px",
                    height: "25px",
                    fill: "#65676b",
                  }}
                />
              </SettingsContainer>
            }
            closeOnDocumentClick
          >
            <SettingsPopup />
          </Popup>
        )}
      </PostHeader>
      <PostContent>
        <div
          style={{
            padding: "2px 12px",
            wordBreak: "break-word",
          }}
        >
          <ReactMarkdown source={post.body} />
        </div>
      </PostContent>
      {post.image && <PostImage src={post.image} alt="post graphics" />}
      <PostFooter>
        {liked && !loading ? (
          <LikesButton onClick={likePost}>
            <LikesSVG fill="#1876f2" width="25px" height="25px" />
            <LikesCount>{post.likes.length}</LikesCount>
          </LikesButton>
        ) : (
          <LikesButton onClick={likePost} disabled={loading}>
            <LikesSVG fill="#65676b" width="25px" height="25px" />
            {loading ? (
              <Loader
                type="TailSpin"
                color="#1876f2"
                height={15}
                width={15}
                style={{
                  marginTop: "5px",
                }}
              />
            ) : (
              <LikesHeading>Like</LikesHeading>
            )}
          </LikesButton>
        )}
        <CommentsWrapper>
          <CommentsSVG fill="#65676b" width="25px" height="25px" />
          <CommentsCount>
            {post.comments.length === 0 ? (
              <CommentsHeading>Comment</CommentsHeading>
            ) : (
              post.comments.length
            )}
          </CommentsCount>
        </CommentsWrapper>
      </PostFooter>
      <CommentsContainer>
        {post.comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            post={post}
            urlProfile={readOnly}
            onNewsfeed={onNewsfeed}
            onSinglePost={onSinglePost}
          />
        ))}
        <CreateComment
          user={user}
          postId={post.id}
          urlProfile={readOnly}
          onNewsfeed={onNewsfeed}
          onSinglePost={onSinglePost}
        />
      </CommentsContainer>
    </PostContainer>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    userId: PropTypes.shape({
      id: PropTypes.string,
      avatarImage: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    createdAt: PropTypes.string,
    body: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.array,
    comments: PropTypes.array,
  }),
  user: PropTypes.shape({
    id: PropTypes.string,
    avatarImage: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    birthday: PropTypes.string,
    gender: PropTypes.string,
    coverImage: PropTypes.string,
  }),
  readOnly: PropTypes.bool,
  onNewsfeed: PropTypes.bool,
};

Post.defaultProps = {
  post: null,
  user: null,
  readOnly: null,
  onNewsfeed: null,
  // eslint-disable-next-line react/default-props-match-prop-types
  onSinglePost: null,
};
