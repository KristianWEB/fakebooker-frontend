import React from "react";
import { NavLink } from "react-router-dom";
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
  TimelineContainerLink,
  AboutContainerLink,
  FriendsContainerLink,
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
        <NavLink
          to={`/${user.username}`}
          activeClassName="activeProfileHeaderRoute"
          // eslint-disable-next-line consistent-return
          isActive={() => {
            if (window.location.pathname === `/${user.username}`) {
              return true;
            }
          }}
        >
          <TimelineContainerLink>Timeline</TimelineContainerLink>
        </NavLink>
        <NavLink
          to={`${user.username}/about_overview`}
          activeClassName="activeProfileHeaderRoute"
          // eslint-disable-next-line consistent-return
          isActive={() => {
            if (window.location.pathname.includes("about_")) {
              return true;
            }
          }}
        >
          <AboutContainerLink type="link" data-testid="aboutLink">
            About
          </AboutContainerLink>
        </NavLink>
        <FriendsContainerLink type="link">Friends</FriendsContainerLink>
        <PhotosContainerLink type="link">Photos</PhotosContainerLink>
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
    lastName: PropTypes.string,
    username: PropTypes.string
  }),
  readOnly: PropTypes.bool
};

ProfileHeader.defaultProps = {
  user: null,
  readOnly: null
};
