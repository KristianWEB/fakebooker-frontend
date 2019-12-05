import styled from "styled-components";
import { Row, Card, Avatar } from "antd";

export const PostContainer = styled(Row)`
  min-width: 100%;
  margin: 0.5rem 0.93rem;
  @media (min-width: 1200px) {
    max-width: 38.62rem;
  }
`;

export const CommentsContainer = styled(Row)`
  min-width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 0 0 8px 8px !important;

  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
  @media (min-width: 1200px) {
    max-width: 38.62rem;
  }
`;

export const PostHeader = styled.div`
  display: flex;
  justify-items: between;
  margin: 1.56rem;
  margin-bottom: 0;
`;

export const PostCard = styled(Card)`
  border: none;
  margin: 1rem;

  /** ant-design adds its own border-radius: 3px and somehow I can't change that value so I had to put !important to make it work. Please let me know if you have any ideas to prevent this kind of collision with antd. */
  border-radius: 8px 8px 0 0 !important;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);

  @media (max-width: 365px) {
    margin: 0;
  }
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.6rem;
`;
export const ProfileName = styled.h3`
  margin-bottom: 0;
  margin-left: 0.875;
  font-size: 1rem;
  color: #515365;
  font-weight: 500;
  font-family: "Roboto";
  @media (max-width: 365px) {
    font-size: 1.25rem;
  }
`;
export const ProfileAvatar = styled(Avatar)`
  object-fit: contain;
  border: 1px solid #444444;
`;

export const PostCreation = styled.p`
  font-size: 0.812rem;
  font-family: "Roboto";
  margin-bottom: 0;
  @media (max-width: 365px) {
    font-size: 1rem;
  }
`;
export const Settings = styled.img`
  width: 1.7rem;
  margin-top: 0.5rem;
  align-self: flex-start;
`;
export const PostContent = styled.div`
  margin: 1.56rem;
  color: #444444;
  font-size: 1rem;

  @media (max-width: 650px) {
    font-size: 1.25rem;
  }
`;

export const PostFooter = styled.div`
  width: 100%;
  height: 3.75rem;
  display: flex;
  background-color: #f6f6f6;
  padding: 0 1.56rem;
  @media (max-width: 400px) {
    justify-content: space-around;
    padding: 0;
  }
`;
export const LikesWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  @media (max-width: 400px) {
    /* width: 100%; */
  }
`;
export const LikesDisplay = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  @media (max-width: 400px) {
    margin-right: 0;
  }
`;

export const LikesLogo = styled.img`
  width: 1.5rem;
  color: #444444;
`;
export const LikesCount = styled.h3`
  font-size: 1rem;
  margin-left: 0.35rem;
  color: #444444;
  margin-bottom: 0;

  @media (max-width: 400px) {
    display: none;
  }
`;
export const Likes = styled.div`
  /* display: flex; */
  display: none;
  /* align-items: center; */
  margin: 0 0.5rem 0 1rem;

  @media (min-width: 485px) {
    display: flex;
    align-items: center;
  }
`;
export const LikesAvatar = styled(Avatar)`
  margin-left: -0.85rem;
  border: 3px solid #f6f6f6;
`;

export const LikesNames = styled.p`
  font-size: 0.8rem;
  width: 10rem;
  margin: 0;
  color: #444444;
  @media (max-width: 400px) {
    display: none;
  }
`;
export const FeedbackWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 400px) {
    width: auto;
  }
`;
export const CommentsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  @media (max-width: 400px) {
    margin-left: -2.5rem;
  }
`;
export const CommentsLogo = styled.img`
  width: 1.5rem;
`;
export const CommentsCount = styled.h4`
  font-size: 1rem;
  margin: 0;
  margin-left: 0.35rem;
  color: #444444;

  @media (max-width: 400px) {
    display: none;
  }
`;

export const SharesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  margin-left: 0.5rem;
`;
export const SharesLogo = styled.img`
  width: 1.5rem;
`;
export const SharesCount = styled.h4`
  font-size: 1rem;
  margin: 0;
  margin-left: 0.35rem;
  color: #444444;

  @media (max-width: 400px) {
    display: none;
  }
`;

export const LikesHeading = styled.p`
  font-size: 1rem;
  margin: 0;
  margin-left: 0.35rem;
  color: #444444;

  @media (min-width: 400px) {
    display: none;
  }
`;
export const CommentsHeading = styled.p`
  font-size: 1rem;
  margin: 0;
  margin-left: 0.35rem;
  color: #444444;

  @media (min-width: 400px) {
    display: none;
  }
`;

export const SharesHeading = styled.p`
  font-size: 1rem;
  margin: 0;
  margin-left: 0.35rem;
  color: #444444;

  @media (min-width: 400px) {
    display: none;
  }
`;
export const StyledStrong = styled.strong`
  font-weight: 500;
`;
