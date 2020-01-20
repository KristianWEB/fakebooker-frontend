import React, { useState, useEffect } from "react";
import { Avatar } from "antd";
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
import Logo from "../../assets/icons/logo.svg";
import UserPictureSample from "../../assets/images/Post-profile1.jpg";
import HomeIcon from "../../assets/icons/_ionicons_svg_md-home.svg";
import ChatIcon from "../../assets/icons/_ionicons_svg_md-chatbubbles.svg";
import BellIcon from "../../assets/icons/_ionicons_svg_md-notifications.svg";
import BackArrowIcon from "../../assets/icons/_ionicons_svg_md-arrow-round-back.svg";

const Navbar = ({ onProfile }) => {
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
            {/* <Avatar size={41} src={Logo} /> */}
            <Logo
              width="41"
              height="41"
              style={{
                borderRadius: "100%"
              }}
            />
          </LogoContainer>
          <ProfileContainer>
            <MessageContainer>
              <ChatIcon width="25" height="25" />
            </MessageContainer>
            <NotificationContainer>
              <BellIcon width="25" height="25" />
            </NotificationContainer>
            <Avatar size={41} src={UserPictureSample} />
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
            <NotificationContainer>
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
