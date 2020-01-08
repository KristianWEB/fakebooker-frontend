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
`;

export const ProfileContainer = styled.div`
  width: 100%;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 100px;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
`;

export const UserAvatar = styled.img`
  width: 118px;
  height: 118px;
  border-radius: 50%;
  border: 3px solid #ffffff;
`;

export const UserName = styled.h3``;

export const ChangeAvatarContainer = styled(Button)`
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;
  top: 40px;
  left: -35px;
`;

export const ChangeAvatar = styled.img`
  height: 20px;
`;

export const ChangePhotoContainer = styled(Button)`
  background-color: #f0f2f5;
  width: 72px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-right: 40px;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ChangeBackgroundPhoto = styled.img`
  height: 20px;
`;

export const ChangeBackgroundHeading = styled.h3`
  margin-left: 4px;
  margin-bottom: 0;
`;
