import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Avatar, Popover } from "antd";
import NotificationList from "../Notification/NotificationList";
import {
  NavContainer,
  LogoContainer,
  InputContainer,
  SearchBar,
  ProfileContainer,
  NewsFeedContainer,
  NewsFeedHeading,
  MessageContainer,
  BackArrowContainer,
  NotificationContainer
} from "./Navbar.styles";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import UserPictureSample from "../../assets/images/Post-profile1.jpg";
import { ReactComponent as HomeIcon } from "../../assets/icons/_ionicons_svg_md-home.svg";
import { ReactComponent as ChatIcon } from "../../assets/icons/_ionicons_svg_md-chatbubbles.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/_ionicons_svg_md-notifications.svg";
import { ReactComponent as BackArrowIcon } from "../../assets/icons/_ionicons_svg_md-arrow-round-back.svg";

const Navbar = ({ onProfile, user }) => {
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
            <MessageContainer>
              <ChatIcon width="25" height="25" />
            </MessageContainer>
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
              <SearchBar placeholder="Search in Sidekick" />
            </InputContainer>
          </LogoContainer>
          <NewsFeedContainer>
            <HomeIcon width={25} height={25} fill="#1877f2" />
            <NewsFeedHeading> Newsfeed </NewsFeedHeading>
          </NewsFeedContainer>
          <ProfileContainer>
            <MessageContainer>
              <ChatIcon width={25} height={25} />
            </MessageContainer>
            <NotificationContainer
              type="link"
              data-testid="notificationsButton"
            >
              <BellIcon width={25} height={25} />
            </NotificationContainer>
            <Avatar size={41} src={UserPictureSample} />
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
    avatarImage: PropTypes.string
  })
};

Navbar.defaultProps = {
  onProfile: null,
  user: null
};
