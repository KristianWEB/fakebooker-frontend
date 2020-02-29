import styled from "styled-components";
import { Row, Card, Button } from "antd";

export const PostContainer = styled(Row)`
  margin: 1.6rem 0;
  width: 500px;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 6px;
  font-family: "Roboto";
  background-color: #fff;
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`;

export const PopButton = styled(Button)`
  text-align: center;
  font-weight: bold;
  margin: 0;
  color: ${props => props.theme.secondaryTextColor};
`;

export const CommentsContainer = styled(Row)`
  margin: 13px;
  border-radius: 0 0 8px 8px;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-items: between;
  margin: 13px;
  margin-bottom: 0;
`;

export const PostCard = styled(Card)`
  && {
    border: none;
    border-radius: 6px;
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
  margin-left: 0.7rem;
`;
export const ProfileName = styled.h3`
  font-size: 1.4rem;
  color: ${props => props.theme.primaryTextColor};
  font-weight: 500;
  font-family: "Roboto";
`;

export const PostCreation = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0;
`;

export const PostContent = styled.div`
  margin: 13px;
  color: ${props => props.theme.secondaryTextColor};
  font-size: 1.4rem;
`;

export const PostFooter = styled.div`
  display: flex;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${props => props.theme.lightBorder};
  border-bottom: 1px solid ${props => props.theme.lightBorder};
  margin: 0 13px;
  padding: 5px 35px;
`;
export const LikesWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const LikesDisplay = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const LikesLogo = styled.img`
  width: 1.5rem;
  fill: ${props => props.theme.primaryTextColor};
`;
export const LikesCount = styled.p`
  font-size: 1.4rem;
  margin-left: 5px;
  margin-top: 5px;
  line-height: 1;
  color: ${props => props.theme.appTextColor};
  margin-bottom: 0;
`;
export const Likes = styled.div`
  display: none;
  margin: 0 0.5rem 0 1rem;
`;
export const CommentsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const CommentsLogo = styled.img`
  width: 1.5rem;
`;
export const CommentsCount = styled.p`
  font-size: 1.4rem;
  margin: 0;
  color: ${props => props.theme.secondaryTextColor};
  margin-left: 5px;
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
export const SharesCount = styled.p`
  font-size: 1.4rem;
  margin: 0;
  margin-left: 6px;
  color: ${props => props.theme.secondaryTextColor};
`;

export const LikesHeading = styled.span`
  font-size: 1.4rem;
  margin-left: 5px;
  color: ${props => props.theme.tertiaryTextColor};
  line-height: 1;
  margin-top: 5px;
`;
export const CommentsHeading = styled.span`
  font-size: 1.4rem;
  margin-left: 5px;
  color: ${props => props.theme.tertiaryTextColor};
  line-height: 1;
  margin-top: 5px;
`;

export const SharesHeading = styled.span`
  font-size: 1.4rem;
  color: ${props => props.theme.tertiaryTextColor};
  line-height: 1;
  margin-top: 5px;
`;
