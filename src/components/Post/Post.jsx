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
  LikesLogo,
  PopButton,
  LikesCount,
  // Likes,
  // LikesAvatar,
  // LikesNames,
  FeedbackWrapper,
  CommentsWrapper,
  CommentsLogo,
  CommentsCount,
  SharesWrapper,
  SharesLogo,
  SharesCount,
  LikesHeading,
  CommentsHeading,
  SharesHeading,
  CommentsContainer
  // StyledStrong
} from "./Post.styles";
import CommentsSVG from "../../assets/icons/comments-post-icon.svg";
import LikesSVG from "../../assets/icons/like-post-icon.svg";
import LikesSVGActive from "../../assets/icons/like-post-icon-active.svg";
import SharesSVG from "../../assets/icons/share-post-icon.svg";
// import FirstLikeAvatar from "../../../../../assets/images/like1-image.jpg";
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

  const {
    data: { loadUser: user }
  } = useQuery(LOAD_USER);

  useEffect(() => {
    if (user && post.likes.find(like => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, post]);

  const [deletePost] = useMutation(DELETE_POST, {
    variables: {
      postId: post.id
    },
    update: proxy => {
      const data = proxy.readQuery({
        query: GET_POSTS_BY_USERNAME,
        variables: {
          username: user.username
        }
      });

      const newPostList = data.getPosts.filter(p => p.id !== post.id);

      const newData = { getPosts: [...newPostList] };

      proxy.writeQuery({
        query: GET_POSTS_BY_USERNAME,
        variables: {
          username: user.username
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
            <img
              style={{
                marginLeft: "20px",
                width: "22px",
                cursor: "pointer"
              }}
              src={ThreeDotsSvg}
              alt="Settings Icon"
            />
          </Popover>
        </PostHeader>
        <PostContent>{post.content}</PostContent>
        <PostFooter>
          <LikesWrapper>
            <LikesDisplay>
              {liked ? (
                <Button type="link" onClick={likePost} style={{ padding: 0 }}>
                  <LikesLogo src={LikesSVGActive} alt="likes_logo" />
                </Button>
              ) : (
                <Button type="link" onClick={likePost} style={{ padding: 0 }}>
                  <LikesLogo src={LikesSVG} alt="likes_logo" />
                </Button>
              )}
              <LikesCount>{post.likeCount}</LikesCount>
              <LikesHeading>Like</LikesHeading>
            </LikesDisplay>
            {/* {post.likedBy.count > 0 && (
              <Likes>
                <LikesAvatar
                  shape="circle"
                  src={FirstLikeAvatar}
                  alt="FirstLikeAvatar"
                />
              </Likes>
            )} */}
            {/* {post.likedBy.count > 0 && (
              <LikesNames>
                <StyledStrong>Jenny, </StyledStrong>
                <StyledStrong>Robert</StyledStrong>
                <br />
                and 6 more liked this
              </LikesNames>
            )} */}
          </LikesWrapper>
          <FeedbackWrapper>
            <CommentsWrapper>
              <CommentsLogo src={CommentsSVG} alt="CommentsLogo" />
              <CommentsCount>{post.commentCount}</CommentsCount>
              <CommentsHeading>Comment</CommentsHeading>
            </CommentsWrapper>
            <SharesWrapper>
              <SharesLogo src={SharesSVG} alt="SharesLogo" />
              <SharesCount>
                {/* {post.likedBy.count === undefined ? "0" : post.likedBy.count} */}
              </SharesCount>
              <SharesHeading>Share</SharesHeading>
            </SharesWrapper>
          </FeedbackWrapper>
        </PostFooter>
      </PostCard>
      <CommentsContainer>
        <CommentList post={post} />
        <CreateComment userAvatar={post.author.coverImage} postId={post.id} />
      </CommentsContainer>
    </PostContainer>
  );
}
