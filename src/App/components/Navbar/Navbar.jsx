import React from "react";
import { Row, Col, Input } from "antd";
import {
  NavContainer,
  LogoContainer,
  AppLogo,
  ActionsContainer,
  FRContainer,
  FriendRequests,
  MessagesContainer,
  Messages,
  NotificationsContainer,
  Notifications,
  SearchContainer,
  Search
} from "./Navbar.styles";
import Logo from "../../../assets/logo.svg";
import FriendReqIcon from "../../../assets/icons/happy-face-icon.svg";
import MessagesIcon from "../../../assets/icons/chat---messages-icon.svg";
import NotifyIcon from "../../../assets/icons/thunder-icon.svg";
import SearchIcon from "../../../assets/icons/magnifying-glass-icon.svg";
import ProfilePictureSample from "../../../assets/images/ProfilePictureSample.jpg";

export default function Navbar({ displayName }) {
  return (
    <NavContainer>
      <LogoContainer>
        <AppLogo src={Logo} />
      </LogoContainer>
      <ActionsContainer>
        <FRContainer>
          <FriendRequests src={FriendReqIcon} />
        </FRContainer>
        <MessagesContainer>
          <Messages src={MessagesIcon} />
        </MessagesContainer>
        <NotificationsContainer>
          <Notifications src={NotifyIcon} />
        </NotificationsContainer>
        <SearchContainer>
          <Search src={SearchIcon} />
        </SearchContainer>
      </ActionsContainer>
      {/* <NavMenu>
        <NavBurger />
      </NavMenu> */}
    </NavContainer>
  );
}
