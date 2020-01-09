import React from "react";
import {
  ProfileHeaderContainer,
  ProfileContainer,
  PhotoContainer,
  UserContainer,
  User,
  UserAvatar,
  UserName,
  UserDescription,
  UserDescriptionEdit,
  UserActionsContainer,
  TimelineContainer,
  TimelineContainerLink,
  AboutContainer,
  AboutContainerLink,
  FriendsContainer,
  FriendsContainerLink,
  PhotosContainer,
  PhotosContainerLink,
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
          <UserDescription>Short description about myself</UserDescription>
          <UserDescriptionEdit type="link">Edit</UserDescriptionEdit>
          <UserActionsContainer>
            <TimelineContainer>
              <TimelineContainerLink type="link">
                Timeline
              </TimelineContainerLink>
            </TimelineContainer>
            <AboutContainer>
              <AboutContainerLink type="link">About</AboutContainerLink>
            </AboutContainer>
            <FriendsContainer>
              <FriendsContainerLink type="link">Friends</FriendsContainerLink>
            </FriendsContainer>
            <PhotosContainer>
              <PhotosContainerLink type="link">Photos</PhotosContainerLink>
            </PhotosContainer>
          </UserActionsContainer>
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
