import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { NavLink } from "react-router-dom";
import { Skeleton, Popover } from "antd";
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
  ChangeAvatarContainer,
  FriendActionContainer,
  FriendBtn,
  FriendText,
  RespondBtn,
  RespondText,
  ActionsContainer,
  AcceptFriendBtn,
  RejectFriendBtn
} from "./ProfileHeader.styles";
import { ReactComponent as CameraIcon } from "../../assets/icons/camera.svg";
import { ReactComponent as AddFriendIcon } from "../../assets/icons/person-add.svg";
import {
  ADD_FRIEND,
  ACCEPT_FRIEND,
  REJECT_FRIEND,
  REMOVE_FRIEND,
  GET_SINGLE_NOTIFICATION
} from "../../utils/queries";

const ProfileHeader = ({ user, authUser, readOnly }) => {
  const [addFriend, { data: friendData }] = useMutation(ADD_FRIEND, {
    variables: {
      notifier: user.username
    }
  });

  // get single notification is changed: pass profileUser ( user ) and authUser ( authUser ) as creator and notifier once and the opposite and check if there is any data ( friend request sent )
  const { data: notificationData, loading } = useQuery(
    GET_SINGLE_NOTIFICATION,
    {
      variables: {
        creator: user && user.id,
        notifier: authUser && authUser.id
      },
      skip: !readOnly
    }
  );

  const { data: notificationAuthData, authLoading } = useQuery(
    GET_SINGLE_NOTIFICATION,
    {
      variables: {
        creator: authUser && authUser.id,
        notifier: user && user.id
      },
      skip: !readOnly
    }
  );

  // if user A already sent a friend request to user B => fetch the notification with status "pending" and action "Sent you a friend request" and if it return data then show accept/rejectFriend buttons
  const [acceptFriend, { data: acceptFriendData }] = useMutation(
    ACCEPT_FRIEND,
    {
      variables: {
        creator: user.username
      },
      update: async (proxy, result) => {
        const data = proxy.readQuery({
          query: GET_SINGLE_NOTIFICATION,
          variables: {
            creator: user && user.id,
            notifier: authUser && authUser.id
          }
        });

        const {
          acceptFriend: { status }
        } = result.data;
        const newData = {
          getSingleNotification: {
            ...data.getSingleNotification,
            status
          }
        };
        proxy.writeQuery({
          query: GET_SINGLE_NOTIFICATION,
          data: newData,
          variables: {
            creator: user.id,
            notifier: authUser.id
          }
        });
      }
    }
  );
  const [rejectFriend] = useMutation(REJECT_FRIEND, {
    variables: {
      creator: user.username
    },
    update: async (proxy, result) => {
      const data = proxy.readQuery({
        query: GET_SINGLE_NOTIFICATION,
        variables: {
          creator: user.id,
          notifier: authUser.id
        }
      });

      const newData = { getSingleNotification: null };

      if (
        data.getSingleNotification.id.toString() ===
        result.data.rejectFriend.toString()
      ) {
        proxy.writeQuery({
          query: GET_SINGLE_NOTIFICATION,
          data: newData,
          variables: {
            creator: user.id,
            notifier: authUser.id
          }
        });
      }
    }
  });
  const [removeFriend] = useMutation(REMOVE_FRIEND, {
    variables: {
      creator: user.username
    },
    update: async (proxy, result) => {
      const data = proxy.readQuery({
        query: GET_SINGLE_NOTIFICATION,
        variables: {
          creator: user.id,
          notifier: authUser.id
        }
      });

      const newData = { getSingleNotification: null };

      if (
        data.getSingleNotification.id.toString() ===
        result.data.removeFriend.toString()
      ) {
        proxy.writeQuery({
          query: GET_SINGLE_NOTIFICATION,
          data: newData,
          variables: {
            creator: user.id,
            notifier: authUser.id
          }
        });
      }
    }
  });

  if (loading) return <Skeleton />;
  if (authLoading) return <Skeleton />;

  const FriendActions = () => (
    <ActionsContainer>
      <AcceptFriendBtn type="link" onClick={acceptFriend}>
        Confirm
      </AcceptFriendBtn>
      <RejectFriendBtn type="link" onClick={rejectFriend}>
        Reject Request
      </RejectFriendBtn>
    </ActionsContainer>
  );

  const RemoveContainer = () => (
    <ActionsContainer>
      <RejectFriendBtn type="link" onClick={removeFriend}>
        Remove Friend
      </RejectFriendBtn>
    </ActionsContainer>
  );

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
          to={`/${user.username}/about_overview`}
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
        <NavLink
          to={`/${user.username}/photos`}
          activeClassName="activeProfileHeaderRoute"
          // eslint-disable-next-line consistent-return
          isActive={() => {
            if (window.location.pathname.includes("photos")) {
              return true;
            }
          }}
        >
          <PhotosContainerLink type="link">Photos</PhotosContainerLink>
        </NavLink>
        {readOnly && (
          <FriendActionContainer>
            {notificationData &&
              notificationData.getSingleNotification &&
              notificationData.getSingleNotification.status === "pending" && (
                <Popover
                  placement="bottomRight"
                  content={<FriendActions />}
                  trigger="click"
                  overlayStyle={{
                    width: "344px"
                  }}
                >
                  <RespondBtn type="link">
                    <AddFriendIcon width={16} height={16} fill="#1876f2" />
                    <RespondText>Respond</RespondText>
                  </RespondBtn>
                </Popover>
              )}
            {((notificationAuthData &&
              notificationAuthData.getSingleNotification &&
              notificationAuthData.getSingleNotification.status ===
                "pending") ||
              friendData) && (
              <FriendBtn type="link">
                <AddFriendIcon width={16} height={16} />
                <FriendText>Friend Request Sent</FriendText>
              </FriendBtn>
            )}
            {notificationData &&
              notificationAuthData &&
              !notificationData.getSingleNotification &&
              !notificationAuthData.getSingleNotification &&
              !friendData && (
                <FriendBtn type="link" onClick={addFriend}>
                  <AddFriendIcon width={16} height={16} />
                  <FriendText>Add Friend</FriendText>
                </FriendBtn>
              )}
            {((notificationData &&
              notificationData.getSingleNotification &&
              notificationData.getSingleNotification.status === "accepted") ||
              acceptFriendData) && (
              <Popover
                placement="bottomRight"
                content={<RemoveContainer />}
                trigger="click"
                overlayStyle={{
                  width: "344px"
                }}
              >
                <RespondBtn type="link">
                  <AddFriendIcon width={16} height={16} fill="#1876f2" />
                  <RespondText>Friends</RespondText>
                </RespondBtn>
              </Popover>
            )}
            {notificationAuthData &&
              notificationAuthData.getSingleNotification &&
              notificationAuthData.getSingleNotification.status ===
                "accepted" && (
                <Popover
                  placement="bottomRight"
                  content={<RemoveContainer />}
                  trigger="click"
                  overlayStyle={{
                    width: "344px"
                  }}
                >
                  <RespondBtn type="link">
                    <AddFriendIcon width={16} height={16} fill="#1876f2" />
                    <RespondText>Friends</RespondText>
                  </RespondBtn>
                </Popover>
              )}
          </FriendActionContainer>
        )}
      </UserActionsContainer>
    </ProfileHeaderContainer>
  );
};

export default ProfileHeader;

ProfileHeader.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    coverImage: PropTypes.string,
    avatarImage: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string
  }),
  authUser: PropTypes.shape({
    id: PropTypes.string,
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
  authUser: null,
  readOnly: null
};
