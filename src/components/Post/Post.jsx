import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { withTheme } from "styled-components";
import { Popover, Button, Avatar } from "antd";
import {
  PostContainer,
  PostHeader,
  PostCard,
  ProfileWrapper,
  NameWrapper,
  ProfileName,
  PostCreation,
  PostContent,
  PostFooter,
  LikesWrapper,
  LikesDisplay,
  PopButton,
  LikesCount,
  CommentsWrapper,
  CommentsCount,
  SharesWrapper,
  SharesCount,
  LikesHeading,
  CommentsHeading,
  SharesHeading,
  CommentsContainer
} from "./Post.styles";
import { ReactComponent as CommentsSVG } from "../../assets/icons/_ionicons_svg_md-chatbubbles.svg";
import { ReactComponent as LikesSVG } from "../../assets/icons/_ionicons_svg_md-thumbs-up.svg";
import { ReactComponent as SharesSVG } from "../../assets/icons/_ionicons_svg_md-share-alt.svg";
import { ReactComponent as ThreeDotsSvg } from "../../assets/icons/three-dots-icon.svg";
import CreateComment from "../Comment/CreateComment";
import CommentList from "../Comment/CommentList";
import {
  DELETE_POST,
  LIKE_POST,
  GET_POSTS,
  LOAD_USER
} from "../../utils/queries";

const Post = ({ post, theme }) => {
  const [liked, setLiked] = useState(false);

  const {
    data: { loadUser: user }
  } = useQuery(LOAD_USER);
  useEffect(() => {
    if (user && post.likes.find(like => like.userId === user.id)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, post]);

  const [deletePost] = useMutation(DELETE_POST, {
    variables: {
      postId: post.id
    },
    update: proxy => {
      const data = proxy.readQuery({
        query: GET_POSTS
      });

      const newPostList = data.getPosts.filter(p => p.id !== post.id);

      const newData = { getPosts: [...newPostList] };

      proxy.writeQuery({
        query: GET_POSTS,
        data: newData
      });
    }
  });

  const [likePost] = useMutation(LIKE_POST, {
    variables: {
      postId: post.id
    }
  });

  const SettingsPopup = (
    <div>
      <PopButton type="link" onClick={deletePost}>
        Delete Post
      </PopButton>
    </div>
  );
  return (
    <PostContainer>
      <PostCard bodyStyle={{ padding: "0" }} bordered={false}>
        <PostHeader>
          <ProfileWrapper>
            <Avatar size={40} shape="circle" src={post.userId.avatarImage} />
            <NameWrapper>
              <ProfileName>
                {post.userId.firstName} {post.userId.lastName}
              </ProfileName>
              <PostCreation>
                {new Date(Number(post.createdAt)).toLocaleDateString("en-US")}
              </PostCreation>
            </NameWrapper>
          </ProfileWrapper>
          <Popover content={SettingsPopup} placement="bottomRight">
            <ThreeDotsSvg
              style={{
                cursor: "pointer",
                width: "25px",
                height: "25px"
              }}
            />
          </Popover>
        </PostHeader>
        <PostContent>{post.body}</PostContent>
        <PostFooter>
          <LikesWrapper>
            <LikesDisplay>
              {liked ? (
                <Button
                  type="link"
                  onClick={likePost}
                  style={{ padding: 0, display: "flex", alignItems: "center" }}
                >
                  <LikesSVG
                    fill={theme.appTextColor}
                    width="25px"
                    height="25px"
                  />
                  <LikesCount>{post.likeCount}</LikesCount>
                </Button>
              ) : (
                <Button
                  type="link"
                  onClick={likePost}
                  style={{
                    padding: 0,
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <LikesSVG
                    fill={theme.tertiaryTextColor}
                    width="25px"
                    height="25px"
                  />
                  <LikesHeading>Like</LikesHeading>
                </Button>
              )}
            </LikesDisplay>
          </LikesWrapper>
          <CommentsWrapper>
            <CommentsSVG
              fill={theme.tertiaryTextColor}
              width="25px"
              height="25px"
            />
            <CommentsCount>
              {post.commentCount === 0 ? (
                <CommentsHeading>Comment</CommentsHeading>
              ) : (
                post.commentCount
              )}
            </CommentsCount>
          </CommentsWrapper>
          <SharesWrapper>
            <SharesSVG
              fill={theme.tertiaryTextColor}
              width="25px"
              height="25px"
            />
            <SharesCount>
              <SharesHeading>Share</SharesHeading>
            </SharesCount>
          </SharesWrapper>
        </PostFooter>
      </PostCard>
      <CommentsContainer>
        <CommentList post={post} />
        <CreateComment userAvatar={post.userId.avatarImage} postId={post.id} />
      </CommentsContainer>
    </PostContainer>
  );
};

export default withTheme(Post);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    userId: PropTypes.shape({
      avatarImage: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string
    }),
    createdAt: PropTypes.string,
    body: PropTypes.string,
    likeCount: PropTypes.number,
    commentCount: PropTypes.number,
    likes: PropTypes.array
  }),
  theme: PropTypes.shape({
    appTextColor: PropTypes.string,
    tertiaryTextColor: PropTypes.string
  })
};

Post.defaultProps = {
  post: null,
  theme: null
};
