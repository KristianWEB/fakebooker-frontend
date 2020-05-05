import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/react-hooks";
import ReactMarkdown from "react-markdown";
import Popup from "reactjs-popup";
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
  LikesWrapper,
  PopContainer,
  PopButton,
  LikesCount,
  CommentsWrapper,
  CommentsCount,
  SharesWrapper,
  SharesCount,
  LikesHeading,
  CommentsHeading,
  SharesHeading,
  CommentsContainer,
  PostImage,
  LikeButton,
} from "./Post.styles";
import { ReactComponent as CommentsSVG } from "../../assets/icons/chatbox.svg";
import { ReactComponent as LikesSVG } from "../../assets/icons/thumbs-up.svg";
import { ReactComponent as SharesSVG } from "../../assets/icons/share-social.svg";
import { ReactComponent as ThreeDotsSvg } from "../../assets/icons/ellipsis-horizontal.svg";
import Comment from "../Comment/Comment";
import CreateComment from "../Comment/CreateComment";
import {
  DELETE_POST,
  LIKE_POST,
  GET_POSTS,
  GET_NEWSFEED,
} from "../../utils/queries";

const Post = ({ post, user, readOnly, onNewsfeed }) => {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (user && post.likes.find((like) => like.userId === user.id)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, post]);

  const [deletePost] = useMutation(DELETE_POST, {
    variables: {
      postId: post.id,
    },
    update: (proxy) => {
      if (!onNewsfeed) {
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
    },
  });

  const [likePost] = useMutation(LIKE_POST, {
    variables: {
      postId: post.id,
    },
  });

  const SettingsPopup = () => (
    <PopContainer>
      <PopButton onClick={deletePost}>Delete Post</PopButton>
    </PopContainer>
  );

  return (
    <PostContainer>
      <PostHeader>
        <ProfileWrapper>
          <ProfileAvatar src={post.userId.avatarImage} />
          <NameWrapper>
            <ProfileName>
              {post.userId.firstName} {post.userId.lastName}
            </ProfileName>
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
        <ReactMarkdown source={post.body} />
      </PostContent>
      {post.image && <PostImage src={post.image} alt="post graphics" />}
      <PostFooter>
        {liked ? (
          <LikesWrapper onClick={likePost}>
            <LikeButton>
              <LikesSVG fill="#1876f2" width="25px" height="25px" />
              <LikesCount>{post.likes.length}</LikesCount>
            </LikeButton>
          </LikesWrapper>
        ) : (
          <LikesWrapper onClick={likePost}>
            <LikeButton>
              <LikesSVG fill="#65676b" width="25px" height="25px" />
              <LikesHeading>Like</LikesHeading>
            </LikeButton>
          </LikesWrapper>
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
        <SharesWrapper>
          <SharesSVG fill="#65676b" width="25px" height="25px" />
          <SharesCount>
            <SharesHeading>Share</SharesHeading>
          </SharesCount>
        </SharesWrapper>
      </PostFooter>
      <CommentsContainer>
        {post.comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            postId={post.id}
            urlProfile={readOnly}
            onNewsfeed={onNewsfeed}
          />
        ))}
        <CreateComment
          user={user}
          postId={post.id}
          urlProfile={readOnly}
          onNewsfeed={onNewsfeed}
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
};
