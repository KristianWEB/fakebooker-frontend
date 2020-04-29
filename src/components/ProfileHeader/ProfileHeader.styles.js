import styled from "styled-components";
import { Button, Row } from "antd";

export const ProfileHeaderContainer = styled(Row)`
  margin-top: -60px;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 1) 100%
    ),
    url(${props => props.img});
  background-size: cover;
  background-color: white;
  font-family: Roboto;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  z-index: 4;
`;
export const ProfileBackgroundContainer = styled.div`
  max-width: 94rem;
  height: 35rem;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 0 6px 6px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  font-family: "Roboto";
  margin-bottom: -85px;
  box-shadow: ${props => props.theme.boxShadow1};

  @media only screen and (max-width: 1000px) {
    max-width: 90%;
    max-height: 30rem;
  }

  @media only screen and (max-width: 700px) {
    max-width: 100%;
    max-height: 30rem;
    border-radius: 0;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: -25px;
`;

export const UserAvatar = styled.img`
  width: 168px;
  height: 168px;
  border-radius: 50%;
  border: 3px solid #ffffff;
`;

export const UserName = styled.h3`
  font-size: 26px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 0;
  color: ${props => props.theme.secondaryText};
`;

export const UserDescription = styled.p`
  font-size: 1.7rem;
  color: ${props => props.theme.tertiaryText};
  margin-top: 5px;
  margin-bottom: 0;
  position: relative;
`;

export const UserDescriptionEdit = styled.button`
  font-size: 1.6rem;
  color: ${props => props.theme.primaryText};
  font-weight: bold;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
  margin-top: 5px;
`;

export const UserActionsContainer = styled.div`
  display: flex;
  width: 866px;
  border-top: 1px solid ${props => props.theme.secondaryHoverBackground};
  margin: 0 auto;
  margin-top: 28px;
  @media only screen and (max-width: 991px) {
    justify-content: center;
    width: 100%;
  }
`;

export const UserActionsContainerLink = styled(Button)``;

export const TimelineContainerLink = styled.button`
  color: ${props => props.theme.tertiaryText};
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 6px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin: 6px 0;
  padding: 0 16px;
  height: 50px;
  z-index: 10;

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
    outline: none;
  }
`;

export const AboutContainerLink = styled.button`
  color: ${props => props.theme.tertiaryText};
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 6px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin: 6px 0;
  padding: 0 16px;
  height: 50px;

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

export const FriendsContainerLink = styled.button`
  color: ${props => props.theme.tertiaryText};
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 6px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin: 6px 0;
  padding: 0 16px;
  height: 50px;

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

export const PhotosContainerLink = styled.button`
  color: ${props => props.theme.tertiaryText};
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 6px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin: 6px 0;
  padding: 0 16px;
  height: 50px;

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

export const ChangeAvatarContainer = styled(Button)`
  background-color: ${props => props.theme.secondaryBackground};
  display: flex;
  justify-content: center;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  padding: 0.5rem 0.8rem;
  height: 36px;
  top: 110px;
  right: 0;
  border: 0;
  cursor: pointer;
  transition: 0.1s;
  &&:focus {
    background-color: ${props => props.theme.secondaryBackground};
  }
  &&:hover {
    background-color: ${props => props.theme.secondaryHoverBackground};
  }
  &&:active {
    transform: scale(0.96);
  }
`;

export const ChangePhotoContainer = styled(Button)`
  background-color: ${props => props.theme.secondaryBackground};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-right: 40px;
  margin-bottom: 15px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 85%;
  border: 0;
  padding: 5px 8px;
  transition: 0.1s;
  &&:focus {
    background-color: ${props => props.theme.secondaryBackground};
  }
  &&:hover {
    background-color: ${props => props.theme.secondaryHoverBackground};
  }
  &&:active {
    transform: scale(0.96);
  }
`;

export const ChangeBackgroundHeading = styled.h3`
  margin-left: 4px;
  margin-bottom: 0;
  font-size: 1.5rem;
`;

export const FriendActionContainer = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
export const FriendBtn = styled(Button)`
  margin: 8px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: ${props => props.theme.secondaryText};
  font-size: 15px;
  background-color: ${props => props.theme.secondaryBackground};
  transition: 0.1s;

  &&:focus {
    background-color: ${props => props.theme.secondaryBackground};
  }
  &&:active {
    transform: scale(0.96);
  }
  &&:hover {
    background-color: ${props => props.theme.secondaryHoverBackground};
  }
`;

export const FriendText = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1;
  color: ${props => props.theme.secondaryText};
  margin-left: 4px;
`;

export const RespondBtn = styled(Button)`
  margin: 8px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: ${props => props.theme.primaryText};
  font-size: 15px;
  background-color: ${props => props.theme.primaryBackground};
  transition: 0.1s;

  &&:focus {
    color: ${props => props.theme.primaryText};
    background-color: ${props => props.theme.primaryBackground};
  }
  &&:active {
    transform: scale(0.96);
  }

  &&:hover {
    color: ${props => props.theme.primaryText};
    background-color: ${props => props.theme.primaryBackground};
  }
`;

export const RespondText = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1;
  margin-left: 4px;
  color: ${props => props.theme.primaryText};
`;

export const ActionsContainer = styled(Row)`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const AcceptFriendBtn = styled(Button)`
  text-align: left;
  font-size: 1.5rem;
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

export const RejectFriendBtn = styled(Button)`
  text-align: left;
  font-size: 1.5rem;
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

export const MessageContainer = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;
export const MessageBtn = styled(Button)`
  margin: 8px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: ${props => props.theme.secondaryText};
  font-size: 15px;
  background-color: ${props => props.theme.secondaryBackground};
  transition: 0.1s;

  &&:focus {
    background-color: ${props => props.theme.secondaryBackground};
  }
  &&:active {
    transform: scale(0.96);
  }
  &&:hover {
    background-color: ${props => props.theme.secondaryHoverBackground};
  }
`;
