import styled from "styled-components";
import { Row, Card, Button } from "antd";

export const PostContainer = styled(Row)`
  margin: 1.6rem 0;
  &&:first-child {
    margin-top: 0;
  }
  width: 100%;
  box-shadow: ${props => props.theme.boxShadow2};
  border-radius: 8px;
  font-family: "Roboto";
  background-color: #fff;
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`;

export const PopContainer = styled(Row)`
  padding: 8px;
`;
export const PopButton = styled(Button)`
  text-align: left;
  font-size: 1.5rem;
  display: flex;
  width: 100%;
  color: ${props => props.theme.secondaryText};
  padding: 0 8px;
  transition: 0.1s;
  font-weight: 500;

  &:hover {
    background-color: ${props => props.theme.tertiaryBackground};
    color: ${props => props.theme.secondaryText};
  }

  &::after,
  &:focus {
    color: ${props => props.theme.secondaryText};
  }

  &:active {
    background-color: ${props => props.theme.secondaryHoverBackground};
    color: ${props => props.theme.secondaryText};
  }
`;

export const CommentsContainer = styled(Row)`
  margin: 13px;
  border-radius: 0 0 8px 8px;
`;

export const PostHeader = styled.div`
  display: flex;
  margin: 13px;
  margin-bottom: 0;
`;
export const SettingsContainer = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 100%;
  padding: 5px;

  &:focus {
    background-color: ${props => props.theme.tertiaryBackground};
  }

  &&:hover {
    background-color: ${props => props.theme.tertiaryBackground};
  }
  &&:active {
    background-color: ${props => props.theme.secondaryBackground};
  }
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
  font-size: 1.5rem;
  color: ${props => props.theme.secondaryText};
  font-weight: 500;
  font-family: "Roboto";
`;

export const PostCreation = styled.p`
  font-size: 1.3rem;
  color: ${props => props.theme.tertiaryText};
  margin-bottom: 0;
`;

export const PostContent = styled.div`
  margin: 13px;
  color: ${props => props.theme.secondaryText};
  font-size: 1.5rem;
`;

export const PostFooter = styled.div`
  display: flex;
  border-top: 1px solid ${props => props.theme.secondaryHoverBackground};
  border-bottom: 1px solid ${props => props.theme.secondaryHoverBackground};
  margin: 0 13px;
`;
export const LikesWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  margin: 3px 0;
  padding: 5px;
  justify-content: center;
  flex: 3;

  &:hover {
    background-color: ${props => props.theme.tertiaryBackground};
    outline: none;
  }

  &::after,
  &:focus {
    outline: none;
  }
  &:active {
    background-color: ${props => props.theme.secondaryBackground};
  }
`;
export const LikesCount = styled.p`
  font-size: 1.5rem;
  margin-left: 5px;
  margin-top: 5px;
  line-height: 1;
  color: ${props => props.theme.primaryText};
  margin-bottom: 0;
`;
export const CommentsWrapper = styled.div`
  margin: 3px 0;
  margin-left: 0.5rem;
  border-radius: 6px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 3;

  &:hover {
    background-color: ${props => props.theme.tertiaryBackground};
    outline: none;
  }

  &::after,
  &:focus {
    outline: none;
  }
  &:active {
    background-color: ${props => props.theme.secondaryBackground};
  }
`;

export const CommentsCount = styled.p`
  font-size: 1.5rem;
  margin: 0;
  color: ${props => props.theme.secondaryTextColor};
  margin-left: 5px;
`;

export const SharesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 3;
  margin: 3px 0;
  margin-left: 0.5rem;
  border-radius: 6px;
  padding: 5px;

  &:hover {
    background-color: ${props => props.theme.tertiaryBackground};
    outline: none;
  }

  &::after,
  &:focus {
    outline: none;
  }
  &:active {
    background-color: ${props => props.theme.secondaryBackground};
  }
`;
export const SharesCount = styled.p`
  font-size: 1.5rem;
  margin: 0;
  margin-left: 6px;
  color: ${props => props.theme.secondaryText};
`;

export const LikesHeading = styled.span`
  font-size: 1.5rem;
  margin-left: 5px;
  color: ${props => props.theme.tertiaryText};
  line-height: 1;
  margin-top: 5px;
`;
export const CommentsHeading = styled.span`
  font-size: 1.5rem;
  margin-left: 5px;
  color: ${props => props.theme.tertiaryText};
  line-height: 1;
  margin-top: 5px;
`;

export const SharesHeading = styled.span`
  font-size: 1.5rem;
  color: ${props => props.theme.tertiaryText};
  line-height: 1;
  margin-top: 5px;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
`;
