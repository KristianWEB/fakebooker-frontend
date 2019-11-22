import React from "react";
import {
  PostContainer,
  PostHeader,
  PostCard,
  ProfileWrapper,
  NameWrapper,
  ProfileName,
  ProfileAvatar,
  PostCreation,
  Settings,
  PostContent,
  PostFooter,
  LikesWrapper,
  LikesDisplay,
  LikesLogo,
  // LikesCount,
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
  SharesHeading
  // StyledStrong
} from "./Post.styles";
import SettingsSVG from "../../../../../assets/icons/three-dots-icon.svg";
import CommentsSVG from "../../../../../assets/icons/comments-post-icon.svg";
import LikesSVG from "../../../../../assets/icons/like-post-icon.svg";
import SharesSVG from "../../../../../assets/icons/share-post-icon.svg";
// import FirstLikeAvatar from "../../../../../assets/images/like1-image.jpg";

export default function Post({ post, user }) {
  return (
    <PostContainer>
      <PostCard bodyStyle={{ padding: "0" }} bordered={false}>
        <PostHeader>
          <ProfileWrapper>
            <ProfileAvatar size="large" shape="circle" src={user.coverImage} />
            <NameWrapper>
              <ProfileName>{user.username}</ProfileName>
              <PostCreation>
                {new Date(Number(post.creationDate)).toLocaleDateString(
                  "en-US"
                )}
              </PostCreation>
            </NameWrapper>
          </ProfileWrapper>
          <Settings src={SettingsSVG} alt="settings_logo" />
        </PostHeader>
        <PostContent>{post.content}</PostContent>
        <PostFooter>
          <LikesWrapper>
            <LikesDisplay>
              <LikesLogo src={LikesSVG} alt="likes_logo" />
              {/* <LikesCount>
                {post.likedBy.count === undefined ? "0" : post.likedBy.count}
              </LikesCount> */}
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
              <CommentsCount>
                {/* {post.likedBy.count === undefined ? "0" : post.likedBy.count} */}
              </CommentsCount>
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
    </PostContainer>
  );
}
