import React from "react";
import PropTypes from "prop-types";
import {
  ProfileHeaderContainer,
  ProfileBackgroundContainer,
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
  ChangeBackgroundHeading,
  ChangeAvatarContainer
} from "./ProfileHeader.styles";
import { ReactComponent as CameraIcon } from "../../assets/icons/_ionicons_svg_md-camera.svg";

const ProfileHeader = ({ user, readOnly }) => {
  return (
    <ProfileHeaderContainer img={user.coverImage}>
      <ProfileBackgroundContainer img={user.coverImage}>
        {!readOnly && (
          <ChangePhotoContainer type="link">
            <CameraIcon width="20" height="20" />
            <ChangeBackgroundHeading>Edit</ChangeBackgroundHeading>
          </ChangePhotoContainer>
        )}
      </ProfileBackgroundContainer>
      <UserContainer>
        <User>
          <UserAvatar src={user.avatarImage} />
          {!readOnly && (
            <ChangeAvatarContainer type="link">
              <CameraIcon width="20" height="20" />
            </ChangeAvatarContainer>
          )}
        </User>
        <UserName data-testid="username">
          {user.firstName} {user.lastName}
        </UserName>
        {!readOnly && (
          <>
            <UserDescription>Short description about myself</UserDescription>
            <UserDescriptionEdit type="link">Edit</UserDescriptionEdit>
          </>
        )}
      </UserContainer>
      <UserActionsContainer>
        <TimelineContainer>
          <TimelineContainerLink type="link">Timeline</TimelineContainerLink>
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
    </ProfileHeaderContainer>
  );
};

export default ProfileHeader;

ProfileHeader.propTypes = {
  user: PropTypes.shape({
    coverImage: PropTypes.string,
    avatarImage: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }),
  readOnly: PropTypes.bool
};

ProfileHeader.defaultProps = {
  user: null,
  readOnly: null
};
