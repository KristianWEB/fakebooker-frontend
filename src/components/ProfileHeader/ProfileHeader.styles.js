// import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { Button } from "antd";

export const ProfileHeaderContainer = styled.div`
  max-width: 1042px;
  height: 351px;
  background-image: url(${props => props.coverImage});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 0 6px 6px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  font-family: "Roboto";
  margin-bottom: -85px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1042px;
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
`;

export const UserDescription = styled.h3`
  font-size: 1rem;
  color: #97999b;
  margin-top: 5px;
  margin-bottom: 0;
  position: relative;
`;

export const UserDescriptionEdit = styled.button`
  font-size: 1rem;
  color: #1877f2;
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
  width: 962px;
  border-top: 1px solid rgba(151, 153, 155, 0.75);
  margin-top: 28px;
  margin-left: 40px;
`;
export const UserActionsContainerLink = styled(Button)``;

export const TimelineContainer = styled.div`
  margin-right: 25px;
  margin-top: 10px;
`;
export const TimelineContainerLink = styled.button`
  color: #1877f2;
  font-size: 1rem;
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
    background: #1877f2;
    content: "";
  }
`;

export const AboutContainer = styled.div`
  margin-right: 25px;
  margin-top: 10px;
`;
export const AboutContainerLink = styled.button`
  color: #97999b;
  font-size: 1rem;
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
  font-size: 1rem;
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
  font-size: 1rem;
  font-weight: bold;
  display: inline;
  border-radius: 0;
  border: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const ChangeAvatarContainer = styled.button`
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  height: 36px;
  top: 70px;
  right: 0;
  border: 0;
  cursor: pointer;
`;

export const ChangePhotoContainer = styled.button`
  background-color: #f0f2f5;
  width: 72px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-right: 40px;
  margin-bottom: 15px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 300px;
  border: 0;
  padding: 5px 8px;
`;

export const ChangeBackgroundHeading = styled.h3`
  margin-left: 4px;
  margin-bottom: 0;
`;
