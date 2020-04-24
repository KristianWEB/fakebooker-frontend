import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Avatar, Popover } from "antd";
import NotificationList from "../Notification/NotificationList";
import MessageList from "../Message/MessageList";
import {
  NavContainer,
  LogoContainer,
  InputContainer,
  SearchBar,
  User,
  Username,
  ProfileContainer,
  NewsFeedContainer,
  MessageContainer,
  BackArrowContainer,
  NotificationContainer,
  SettingsContainer
} from "./Navbar.styles";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as ChatIcon } from "../../assets/icons/chatbox.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/notifications.svg";
import { ReactComponent as BackArrowIcon } from "../../assets/icons/arrow-back-outline.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/caret-down-outline.svg";

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
            <Avatar size={41} src={user.avatarImage} />
          </ProfileContainer>
        </NavContainer>
      ) : (
        <NavContainer bgColor="#ffffff">
          <LogoContainer>
            <Logo width={41} height={41} style={{ borderRadius: "50%" }} />
            <InputContainer>
              <SearchBar placeholder="Search in Fakebooker" />
            </InputContainer>
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
