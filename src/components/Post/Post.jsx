import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Popover, Button } from "antd";
import {
  PostContainer,
  PostHeader,
  PostCard,
  ProfileWrapper,
  NameWrapper,
  ProfileName,
  ProfileAvatar,
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
import CommentsSVG from "../../assets/icons/_ionicons_svg_md-chatbubbles.svg";
import LikesSVG from "../../assets/icons/_ionicons_svg_md-thumbs-up.svg";
import SharesSVG from "../../assets/icons/_ionicons_svg_md-share-alt.svg";
import ThreeDotsSvg from "../../assets/icons/three-dots-icon.svg";
import CreateComment from "../Comment/CreateComment";
import CommentList from "../Comment/CommentList";
import {
  DELETE_POST,
  LIKE_POST,
  GET_POSTS_BY_USERNAME,
  LOAD_USER
} from "../../utils/graphql/queries";

export default function Post({ post }) {
  const [liked, setLiked] = useState(false);

  const { data: userData } = useQuery(LOAD_USER);
  useEffect(() => {
    if (userData) {
      if (
        userData.loadUser.user &&
        post.likes.find(like => like.username === userData.user.username)
      ) {
        setLiked(true);
      } else setLiked(false);
    }
  }, [userData, post]);

  const [deletePost] = useMutation(DELETE_POST, {
    variables: {
      postId: post.id
    },
    update: proxy => {
      const data = proxy.readQuery({
        query: GET_POSTS_BY_USERNAME,
        variables: {
          username: userData.loadUser.username
        }
      });

      const newPostList = data.getPosts.filter(p => p.id !== post.id);

      const newData = { getPosts: [...newPostList] };

      proxy.writeQuery({
        query: GET_POSTS_BY_USERNAME,
        variables: {
          username: userData.loadUser.username
        },
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
            <ProfileAvatar
              size="large"
              shape="circle"
              src={post.author.coverImage}
            />
            <NameWrapper>
              <ProfileName>{post.author.username}</ProfileName>
              <PostCreation>
                {new Date(Number(post.creationDate)).toLocaleDateString(
                  "en-US"
                )}
              </PostCreation>
            </NameWrapper>
          </ProfileWrapper>
          <Popover content={SettingsPopup} placement="bottomRight">
            <ThreeDotsSvg
              style={{
                cursor: "pointer",
                width: "30px",
                height: "30px"
              }}
            />
          </Popover>
        </PostHeader>
        <PostContent>{post.content}</PostContent>
        <PostFooter>
          <LikesWrapper>
            <LikesDisplay>
              {liked ? (
                <Button
                  type="link"
                  onClick={likePost}
                  style={{ padding: 0, display: "flex" }}
                >
                  <LikesSVG fill="#1877f2" width="25px" height="25px" />
                  <LikesCount>{post.likeCount}</LikesCount>
                </Button>
              ) : (
                <Button
                  type="link"
                  onClick={likePost}
                  style={{
                    padding: 0,
                    display: "flex"
                  }}
                >
                  <LikesSVG fill="#606770" width="25px" height="25px" />
                  <LikesHeading>Like</LikesHeading>
                </Button>
              )}
            </LikesDisplay>
          </LikesWrapper>
          <CommentsWrapper>
            <CommentsSVG fill="#606770" width="25px" height="25px" />
            <CommentsCount>
              {post.commentCount === 0 ? (
                <CommentsHeading>Comment</CommentsHeading>
              ) : (
                post.commentCount
              )}
            </CommentsCount>
          </CommentsWrapper>
          <SharesWrapper>
            <SharesSVG fill="#606770" width="25px" height="25px" />
            <SharesCount>
              {/* {post.likedBy.count === undefined ? "0" : post.likedBy.count} */}
              <SharesHeading>Share</SharesHeading>
            </SharesCount>
          </SharesWrapper>
        </PostFooter>
      </PostCard>
      <CommentsContainer>
        <CommentList post={post} />
        <CreateComment userAvatar={post.author.coverImage} postId={post.id} />
      </CommentsContainer>
    </PostContainer>
  );
}
