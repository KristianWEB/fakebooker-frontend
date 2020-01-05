import React from "react";
import { Avatar } from "antd";
import {
  NavContainer,
  LogoContainer,
  InputContainer,
  // InputSearchIcon,
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
// import SearchIcon from "../../assets/icons/_ionicons_svg_md-search.svg";
import BackArrowIcon from "../../assets/icons/_ionicons_svg_md-arrow-round-back.svg";

const Navbar = ({ onProfile }) => {
  return (
    <>
      {onProfile ? (
        <NavContainer bgColor="transparent">
          <LogoContainer>
            <BackArrowContainer>
              <Avatar size={25} src={BackArrowIcon} />
            </BackArrowContainer>
            <Avatar size={41} src={Logo} />
          </LogoContainer>
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
      ) : (
        <NavContainer bgColor="#ffffff">
          <LogoContainer>
            <Avatar size={41} src={Logo} />
            <InputContainer>
              {/* <InputSearchIcon size={20} src={SearchIcon} /> */}
              <SearchBar placeholder="Search in Sidekick" />
            </InputContainer>
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
      )}
    </>
  );
};
export default Navbar;
