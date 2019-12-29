import React from "react";
import { Avatar } from "antd";
import {
  NavContainer,
  LogoContainer,
  SearchBar,
  ProfileContainer,
  NewsFeedContainer,
  NewsFeedHeading,
  MessageContainer,
  NotificationContainer
} from "./Navbar.styles";
import Logo from "../../assets/icons/logo.svg";
import UserPictureSample from "../../assets/images/Post-profile1.jpg";
import HomeIcon from "../../assets/icons/_ionicons_svg_md-home.svg";
import ChatIcon from "../../assets/icons/_ionicons_svg_md-chatbubbles.svg";
import BellIcon from "../../assets/icons/_ionicons_svg_md-notifications.svg";

const Navbar = ({ displayName }) => {
  return (
    <NavContainer>
      <LogoContainer>
        <Avatar size={41} src={Logo} />
        <SearchBar placeholder="Search in Sidekick" />
      </LogoContainer>
      <NewsFeedContainer>
        <Avatar size={25} src={HomeIcon} />
        <NewsFeedHeading> Newsfeed </NewsFeedHeading>
      </NewsFeedContainer>
      <ProfileContainer>
        <MessageContainer>
          <Avatar size={25} src={ChatIcon} />
        </MessageContainer>
        <NotificationContainer>
          <Avatar size={25} src={BellIcon} />
        </NotificationContainer>
        <Avatar size={41} src={UserPictureSample} />
      </ProfileContainer>
    </NavContainer>
  );
};
export default Navbar;
