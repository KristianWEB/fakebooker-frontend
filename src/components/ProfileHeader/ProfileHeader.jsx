import React from "react";
import {
  ProfileHeaderContainer,
  ProfileContainer,
  PhotoContainer,
  UserContainer,
  User,
  UserAvatar,
  UserName,
  ChangePhotoContainer,
  ChangeBackgroundPhoto,
  ChangeBackgroundHeading,
  ChangeAvatarContainer,
  ChangeAvatar
} from "./ProfileHeader.styles";
import ImageExample from "../../assets/images/photo-1419332552192-47d29e59b1e0.jpg";
import UserAvatarExample from "../../assets/images/36.jpg";
import CameraIcon from "../../assets/icons/_ionicons_svg_md-camera.svg";

const ProfileHeader = () => {
  return (
    <ProfileHeaderContainer coverImage={ImageExample}>
      <ProfileContainer>
        <UserContainer>
          <User>
            <UserAvatar src={UserAvatarExample} />
            <ChangeAvatarContainer>
              <ChangeAvatar src={CameraIcon} />
            </ChangeAvatarContainer>
          </User>
          <UserName>James Spiegel</UserName>
        </UserContainer>
        <PhotoContainer>
          <ChangePhotoContainer>
            <ChangeBackgroundPhoto src={CameraIcon} />
            <ChangeBackgroundHeading>Edit</ChangeBackgroundHeading>
          </ChangePhotoContainer>
        </PhotoContainer>
      </ProfileContainer>
    </ProfileHeaderContainer>
  );
};

export default ProfileHeader;
