// import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { Button, Row } from "antd";

export const ProfileHeaderContainer = styled(Row)`
  margin-top: -60px;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 1) 50%
    ),
    url(${props => props.img});
  background-size: cover;
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
  /* width: 1042px; */
  margin: 0 auto;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const UserAvatar = styled.img`
  width: 118px;
  height: 118px;
  border-radius: 50%;
  border: 3px solid #ffffff;
`;

export const UserName = styled.h3`
  font-size: 26px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 0;
  color: ${props => props.theme.primaryTextColor};
`;

export const UserDescription = styled.h3`
  font-size: 1.6rem;
  color: #97999b;
  margin-top: 5px;
  margin-bottom: 0;
  position: relative;
`;

export const UserDescriptionEdit = styled.button`
  font-size: 1.6rem;
  color: ${props => props.theme.appTextColor};
  font-weight: bold;
  border-radius: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
  margin-top: 5px;
`;

export const UserActionsContainer = styled.div`
  display: flex;
  width: 866px;
  /* width: 100%; */
  border-top: 1px solid ${props => props.theme.lightBorder};
  margin: 0 auto;
  margin-top: 28px;
`;

export const UserActionsContainerLink = styled(Button)``;

export const TimelineContainer = styled.div`
  margin-right: 25px;
  margin-top: 10px;
`;
export const TimelineContainerLink = styled.button`
  color: ${props => props.theme.appTextColor};
  font-size: 1.6rem;
  font-weight: bold;
  display: inline;
  border-radius: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin: 0;

  &::after {
    margin-top: 10px;
    width: 75px;
    height: 2px;
    display: block;
    background: ${props => props.theme.appTextColor};
    content: "";
  }
`;

export const AboutContainer = styled.div`
  margin-right: 25px;
  margin-top: 10px;
`;
export const AboutContainerLink = styled.button`
  color: #97999b;
  font-size: 1.6rem;
  font-weight: bold;
  display: inline;
  border-radius: 0;
  border: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const FriendsContainer = styled.div`
  margin-right: 25px;
  margin-top: 10px;
`;
export const FriendsContainerLink = styled.button`
  color: #97999b;
  font-size: 1.6rem;
  font-weight: bold;
  display: inline;
  border-radius: 0;
  border: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const PhotosContainer = styled.div`
  margin-top: 10px;
`;
export const PhotosContainerLink = styled.button`
  color: #97999b;
  font-size: 1.6rem;
  font-weight: bold;
  display: inline;
  border-radius: 0;
  border: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const ChangeAvatarContainer = styled(Button)`
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  padding: 0.5rem 0.8rem;
  height: 36px;
  top: 70px;
  right: 0;
  border: 0;
  cursor: pointer;
`;

export const ChangePhotoContainer = styled.button`
  background-color: #f0f2f5;
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
`;

export const ChangeBackgroundHeading = styled.h3`
  margin-left: 4px;
  margin-bottom: 0;
  font-size: 1.4rem;
`;
