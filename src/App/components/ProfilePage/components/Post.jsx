import React from "react";
import { Row, Col } from "antd";
import {
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
  LikesCount,
  Likes,
  LikesAvatar,
  LikesNames,
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
  StyledStrong
} from "./Post.styles";
import ProfileSVG from "../../../../assets/images/Post-profile1.jpg";
import SettingsSVG from "../../../../assets/icons/three-dots-icon.svg";
import CommentsSVG from "../../../../assets/icons/comments-post-icon.svg";
import LikesSVG from "../../../../assets/icons/like-post-icon.svg";
import SharesSVG from "../../../../assets/icons/share-post-icon.svg";
import FirstLikeAvatar from "../../../../assets/images/like1-image.jpg";
import SecondLikeAvatar from "../../../../assets/images/like2-image.jpg";
import ThirdLikeAvatar from "../../../../assets/images/like3-image.jpg";
import FourthLikeAvatar from "../../../../assets/images/like4-image.jpg";

export default function Post() {
  return (
    <Row type="flex" style={{ justifyContent: "center" }}>
      <Col xs={24} md={16} lg={14} xl={12} xxl={16}>
        <PostCard bodyStyle={{ padding: "0" }}>
          <PostHeader>
            <ProfileWrapper>
              <ProfileAvatar size="large" shape="circle" src={ProfileSVG} />
              <NameWrapper>
                <ProfileName>James Spiegel</ProfileName>
                <PostCreation>19 hours ago</PostCreation>
              </NameWrapper>
            </ProfileWrapper>
            <Settings src={SettingsSVG} alt="settings_logo" />
          </PostHeader>
          <PostContent>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque.
          </PostContent>
          <PostFooter>
            <LikesWrapper>
              <LikesDisplay>
                <LikesLogo src={LikesSVG} alt="likes_logo" />
                <LikesCount>8</LikesCount>
                <LikesHeading>Like</LikesHeading>
              </LikesDisplay>
              <Likes>
                <LikesAvatar
                  shape="circle"
                  src={FirstLikeAvatar}
                  alt="FirstLikeAvatar"
                />
                <LikesAvatar
                  shape="circle"
                  src={SecondLikeAvatar}
                  alt="SecondLikeAvatar"
                />
                <LikesAvatar
                  shape="circle"
                  src={ThirdLikeAvatar}
                  alt="ThirdLikeAvatar"
                />
                <LikesAvatar
                  shape="circle"
                  src={FourthLikeAvatar}
                  alt="FourthLikeAvatar"
                />
              </Likes>
              <LikesNames>
                <StyledStrong>Jenny, </StyledStrong>
                <StyledStrong>Robert</StyledStrong>
                <br />
                and 6 more liked this
              </LikesNames>
            </LikesWrapper>
            <FeedbackWrapper>
              <CommentsWrapper>
                <CommentsLogo src={CommentsSVG} alt="CommentsLogo" />
                <CommentsCount>17</CommentsCount>
                <CommentsHeading>Comment</CommentsHeading>
              </CommentsWrapper>
              <SharesWrapper>
                <SharesLogo src={SharesSVG} alt="SharesLogo" />
                <SharesCount>24</SharesCount>
                <SharesHeading>Share</SharesHeading>
              </SharesWrapper>
            </FeedbackWrapper>
          </PostFooter>
        </PostCard>
      </Col>
    </Row>
  );
}
