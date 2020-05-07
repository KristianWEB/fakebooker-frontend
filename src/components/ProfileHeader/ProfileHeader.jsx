import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { NavLink, Link } from "react-router-dom";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {
  ProfileHeaderContainer,
  ProfileBackgroundContainer,
  UserContainer,
  MoreLinkContainer,
  PopupFriendsLink,
  PopupPhotosLink,
  PopupLinkContainer,
  MoreBtn,
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
  RespondContainer,
  RespondBtn,
  RespondText,
  ActionsContainer,
  AcceptFriendBtn,
  RejectFriendBtn,
  MessageContainer,
  MessageBtn,
} from "./ProfileHeader.styles";
import { ReactComponent as CameraIcon } from "../../assets/icons/camera.svg";
import { ReactComponent as AddFriendIcon } from "../../assets/icons/person-add.svg";
import { ReactComponent as ChatIcon } from "../../assets/icons/chatbox.svg";
import {
  ADD_FRIEND,
  ACCEPT_FRIEND,
  REJECT_FRIEND,
  REMOVE_FRIEND,
  GET_SINGLE_NOTIFICATION,
} from "../../utils/queries";

const ProfileHeader = ({ user, authUser, readOnly, setOpenChat }) => {
  const [addFriend, { data: friendData }] = useMutation(ADD_FRIEND, {
    variables: {
      notifier: user.username,
    },
  });
  // get single notification is changed: pass profileUser ( user ) and authUser ( authUser ) as creator and notifier once and the opposite and check if there is any data ( friend request sent )
  const { data: notificationData, loading } = useQuery(
    GET_SINGLE_NOTIFICATION,
    {
      variables: {
        urlUser: user.id,
      },
      skip: !readOnly,
    }
  );
  // if user A already sent a friend request to user B => fetch the notification with status "pending" and action "Sent you a friend request" and if it returns data then show accept/rejectFriend buttons
  const [
    acceptFriend,
    { data: acceptFriendData, loading: acceptFriendLoading },
  ] = useMutation(ACCEPT_FRIEND, {
    variables: {
      creator: user.username,
    },
    update: async (proxy, result) => {
      const data = proxy.readQuery({
        query: GET_SINGLE_NOTIFICATION,
        variables: {
          urlUser: user.id,
        },
      });

      const {
        acceptFriend: { status },
      } = result.data;

      const newData = {
        getSingleNotification: {
          ...data.getSingleNotification,
          status,
        },
      };
      proxy.writeQuery({
        query: GET_SINGLE_NOTIFICATION,
        data: newData,
        variables: {
          urlUser: user.id,
        },
      });
    },
  });
  const [rejectFriend, { loading: rejectFriendLoading }] = useMutation(
    REJECT_FRIEND,
    {
      variables: {
        creator: user.username,
      },
      update: async (proxy, result) => {
        const data = proxy.readQuery({
          query: GET_SINGLE_NOTIFICATION,
          variables: {
            urlUser: user.id,
          },
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
              urlUser: user.id,
            },
          });
        }
      },
    }
  );
  const [removeFriend, { loading: removeFriendLoading }] = useMutation(
    REMOVE_FRIEND,
    {
      variables: {
        creator: user.username,
      },
      update: async (proxy, result) => {
        if (user && authUser) {
          const newData = { getSingleNotification: null };

          proxy.writeQuery({
            query: GET_SINGLE_NOTIFICATION,
            data: newData,
            variables: {
              urlUser: user.id,
            },
          });
        }
      },
    }
  );

  const FriendActions = () => (
    <ActionsContainer>
      <AcceptFriendBtn
        type="link"
        onClick={acceptFriend}
        disabled={
          removeFriendLoading || rejectFriendLoading || acceptFriendLoading
        }
      >
        Confirm
        {acceptFriendLoading && (
          <Loader
            type="TailSpin"
            color="#1876f2"
            style={{
              position: "absolute",
              top: "5px",
              right: "16px",
            }}
            height={20}
            width={20}
          />
        )}
      </AcceptFriendBtn>
      <RejectFriendBtn
        type="link"
        onClick={rejectFriend}
        disabled={
          removeFriendLoading || rejectFriendLoading || acceptFriendLoading
        }
      >
        Reject Request
        {rejectFriendLoading && (
          <Loader
            type="TailSpin"
            color="#1876f2"
            style={{
              position: "absolute",
              top: "5px",
              right: "16px",
            }}
            height={20}
            width={20}
          />
        )}
      </RejectFriendBtn>
    </ActionsContainer>
  );

  const RemoveContainer = () => (
    <ActionsContainer>
      <RejectFriendBtn
        type="link"
        onClick={removeFriend}
        disabled={
          removeFriendLoading || rejectFriendLoading || acceptFriendLoading
        }
      >
        Remove Friend
        {removeFriendLoading && (
          <Loader
            type="TailSpin"
            color="#1876f2"
            style={{
              position: "absolute",
              top: "5px",
              right: "16px",
            }}
            height={20}
            width={20}
          />
        )}
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
        <NavLink
          to={`/${user.username}/friends`}
          activeClassName="activeProfileHeaderRoute"
          // eslint-disable-next-line consistent-return
          isActive={() => {
            if (window.location.pathname.includes("friends")) {
              return true;
            }
          }}
        >
          <FriendsContainerLink type="link">Friends</FriendsContainerLink>
        </NavLink>
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
          <PhotosContainerLink>Photos</PhotosContainerLink>
        </NavLink>
        <MoreLinkContainer>
          <Popup
            className="profileFriendPopup"
            arrow={false}
            trigger={<MoreBtn>More</MoreBtn>}
            closeOnDocumentClick
            on="click"
          >
            <PopupLinkContainer>
              <Link to={`/${user.username}/friends`}>
                <PopupFriendsLink>Friends</PopupFriendsLink>
              </Link>
              <Link to={`/${user.username}/photos`}>
                <PopupPhotosLink>Photos</PopupPhotosLink>
              </Link>
            </PopupLinkContainer>
          </Popup>
        </MoreLinkContainer>
        {readOnly && (
          <>
            <FriendActionContainer>
              {notificationData &&
                notificationData.getSingleNotification &&
                notificationData.getSingleNotification.status === "pending" &&
                notificationData.getSingleNotification.notifier.id ===
                  authUser.id && (
                  <RespondContainer>
                    <Popup
                      className="profileFriendPopup"
                      arrow={false}
                      trigger={
                        // eslint-disable-next-line react/jsx-wrap-multilines
                        <RespondBtn>
                          <AddFriendIcon
                            width={16}
                            height={16}
                            fill="#1876f2"
                          />
                          <RespondText>Respond</RespondText>
                        </RespondBtn>
                      }
                      closeOnDocumentClick
                      on="click"
                    >
                      <FriendActions />
                    </Popup>
                  </RespondContainer>
                )}
              {((notificationData &&
                notificationData.getSingleNotification &&
                notificationData.getSingleNotification.status === "pending" &&
                notificationData.getSingleNotification.creator.id ===
                  authUser.id) ||
                friendData) && (
                <FriendBtn type="link">
                  <AddFriendIcon width={16} height={16} />
                  <FriendText>Friend Request Sent</FriendText>
                </FriendBtn>
              )}
              {notificationData &&
                !notificationData.getSingleNotification &&
                !friendData &&
                !loading && (
                  <FriendBtn type="link" onClick={addFriend}>
                    <AddFriendIcon width={16} height={16} />
                    <FriendText>Add Friend</FriendText>
                  </FriendBtn>
                )}
              {loading && (
                <FriendBtn>
                  <Loader
                    type="TailSpin"
                    color="#050505"
                    height={15}
                    width={15}
                  />
                </FriendBtn>
              )}
              {((notificationData &&
                notificationData.getSingleNotification &&
                notificationData.getSingleNotification.status === "accepted") ||
                acceptFriendData) && (
                <RespondContainer>
                  <Popup
                    className="profileFriendPopup"
                    arrow={false}
                    trigger={
                      // eslint-disable-next-line react/jsx-wrap-multilines
                      <RespondBtn>
                        <AddFriendIcon width={16} height={16} fill="#1876f2" />
                        <RespondText>Friends</RespondText>
                      </RespondBtn>
                    }
                    closeOnDocumentClick
                    on="click"
                  >
                    <RemoveContainer />
                  </Popup>
                </RespondContainer>
              )}
            </FriendActionContainer>
            <MessageContainer
              onClick={() => setOpenChat({ visible: true, creator: user })}
            >
              <MessageBtn type="link">
                <ChatIcon width={20} height={20} />
              </MessageBtn>
            </MessageContainer>
          </>
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
    username: PropTypes.string,
  }),
  authUser: PropTypes.shape({
    id: PropTypes.string,
    coverImage: PropTypes.string,
    avatarImage: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
  }),
  readOnly: PropTypes.bool,
  setOpenChat: PropTypes.func,
};

ProfileHeader.defaultProps = {
  user: null,
  authUser: null,
  readOnly: null,
  setOpenChat: null,
};
