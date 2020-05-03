import React from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import { Link, useParams } from "react-router-dom";
import NotificationList from "../Notification/NotificationList";
import MessageList from "../Message/MessageList";
import {
  NavContainer,
  LogoContainer,
  SearchBar,
  User,
  Username,
  ProfileContainer,
  NewsFeedContainer,
  MessageContainer,
  NotificationContainer,
  SettingsContainer,
  SearchContainer,
  UserAvatar,
  SearchInputContainer,
  IconContainer
} from "./Navbar.styles";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as ChatIcon } from "../../assets/icons/chatbox.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/notifications.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/caret-down-outline.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-outline.svg";

const Navbar = ({ onProfile, user, setOpenChat }) => {
  const { username } = useParams();

  return (
    <NavContainer bgColor="#ffffff">
      <LogoContainer>
        <Link to="/">
          <Logo width={41} height={41} />
        </Link>
        <SearchInputContainer>
          <SearchBar placeholder="Search in Fakebooker" />
          <IconContainer>
            <SearchIcon
              width={20}
              height={20}
              style={{
                position: "absolute",
                top: "10px",
                left: "15px"
              }}
            />
          </IconContainer>
        </SearchInputContainer>
        <SearchContainer>
          <SearchIcon width={20} height={20} />
        </SearchContainer>
      </LogoContainer>
      {!onProfile && (
        <NewsFeedContainer>
          <HomeIcon width={25} height={25} fill="#1877f2" />
        </NewsFeedContainer>
      )}
      <ProfileContainer>
        <Link to={`/${user.username}`}>
          {onProfile && user.username === username ? (
            <User primary>
              <UserAvatar size={28} src={user.avatarImage} />
              <Username primary>{user.firstName}</Username>
            </User>
          ) : (
            <User>
              <UserAvatar size={28} src={user.avatarImage} />
              <Username>{user.firstName}</Username>
            </User>
          )}
        </Link>
        <Popup
          className="notificationPopup"
          trigger={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <MessageContainer>
              <ChatIcon width="25" height="25" />
            </MessageContainer>
          }
          closeOnDocumentClick
          arrow={false}
          on="click"
        >
          <MessageList setOpenChat={setOpenChat} />
        </Popup>
        <Popup
          className="notificationPopup"
          on="click"
          trigger={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <NotificationContainer>
              <BellIcon width="25" height="25" />
            </NotificationContainer>
          }
          closeOnDocumentClick
          arrow={false}
        >
          <NotificationList setOpenChat={setOpenChat} />
        </Popup>
        <SettingsContainer>
          <SettingsIcon width={25} height={25} />
        </SettingsContainer>
      </ProfileContainer>
    </NavContainer>
  );
};

export default Navbar;

Navbar.propTypes = {
  onProfile: PropTypes.bool,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    avatarImage: PropTypes.string,
    username: PropTypes.string
  }),
  setOpenChat: PropTypes.func
};

Navbar.defaultProps = {
  onProfile: null,
  user: null,
  setOpenChat: null
};
