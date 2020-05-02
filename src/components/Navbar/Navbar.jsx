import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import { Avatar, Popover } from "antd";
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
  BackArrowContainer,
  NotificationContainer,
  SettingsContainer,
  SearchContainer
} from "./Navbar.styles";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as ChatIcon } from "../../assets/icons/chatbox.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/notifications.svg";
import { ReactComponent as BackArrowIcon } from "../../assets/icons/arrow-back-outline.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/caret-down-outline.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-outline.svg";

const Navbar = ({ onProfile, user, setOpenChat }) => {
  const [navbarBgColor, setNavbarBgColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarBgColor(true);
      } else {
        setNavbarBgColor(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [setNavbarBgColor]);

  return (
    <>
      {onProfile ? (
        <NavContainer bgColor={navbarBgColor ? "white" : "transparent"}>
          <LogoContainer>
            <BackArrowContainer>
              <BackArrowIcon width="25" height="25" />
            </BackArrowContainer>
            <Avatar icon={<Logo />} size={41} />
          </LogoContainer>
          <ProfileContainer>
            <Popover
              placement="bottomRight"
              content={<MessageList setOpenChat={setOpenChat} />}
              trigger="click"
              overlayStyle={{
                width: "368px",
                position: "fixed"
              }}
            >
              <MessageContainer type="link">
                <ChatIcon width="25" height="25" />
              </MessageContainer>
            </Popover>
            <Popup
              className="notificationPopup"
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
            <Avatar size={41} src={user.avatarImage} />
          </ProfileContainer>
        </NavContainer>
      ) : (
        <NavContainer bgColor="#ffffff">
          <LogoContainer>
            <Logo width={41} height={41} />
            <SearchBar
              placeholder="Search in Fakebooker"
              prefix={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <SearchIcon width={20} height={20} />
              }
            />
            <SearchContainer>
              <SearchIcon width={20} height={20} />
            </SearchContainer>
          </LogoContainer>
          <NewsFeedContainer>
            <HomeIcon width={25} height={25} fill="#1877f2" />
          </NewsFeedContainer>
          <ProfileContainer>
            <Link to={`/${user.username}`}>
              <User>
                <Avatar size={28} src={user.avatarImage} />
                <Username>{user.firstName}</Username>
              </User>
            </Link>
            <Popover
              placement="bottomRight"
              content={<MessageList setOpenChat={setOpenChat} />}
              trigger="click"
              overlayStyle={{
                width: "368px",
                position: "fixed"
              }}
            >
              <MessageContainer type="link">
                <ChatIcon width="25" height="25" />
              </MessageContainer>
            </Popover>
            <Popover
              placement="bottomRight"
              content={<NotificationList />}
              trigger="click"
              overlayStyle={{
                width: "368px",
                position: "fixed"
              }}
            >
              <NotificationContainer
                type="link"
                data-testid="notificationsButton"
              >
                <BellIcon width="25" height="25" />
              </NotificationContainer>
            </Popover>
            <SettingsContainer type="link">
              <SettingsIcon width={25} height={25} />
            </SettingsContainer>
          </ProfileContainer>
        </NavContainer>
      )}
    </>
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
