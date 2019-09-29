import React from "react";
import {
  NavContainer,
  LogoContainer,
  AppLogo,
  ActionsContainer,
  FRContainer,
  FriendRequests,
  FriendRequestsCount,
  MessagesContainer,
  Messages,
  MessagesCount,
  NotificationsContainer,
  Notifications,
  NotificationsCount,
  SearchContainer,
  Search,
  NavMenu
} from "./Navbar.styles";
import Logo from "../../../assets/logo.svg";
import FriendReqIcon from "../../../assets/icons/happy-face-icon.svg";
import MessagesIcon from "../../../assets/icons/chat---messages-icon.svg";
import NotifyIcon from "../../../assets/icons/thunder-icon.svg";
import SearchIcon from "../../../assets/icons/magnifying-glass-icon.svg";
import NavMenuBurger from "../../../assets/icons/menu-icon.svg";

export default function Navbar({ displayName }) {
  return (
    <NavContainer>
      <LogoContainer>
        <AppLogo src={Logo} />
      </LogoContainer>
      <ActionsContainer>
        <FRContainer>
          <FriendRequests src={FriendReqIcon} />
          <FriendRequestsCount> 1 </FriendRequestsCount>
        </FRContainer>
        <MessagesContainer>
          <Messages src={MessagesIcon} />
          <MessagesCount> 3 </MessagesCount>
        </MessagesContainer>
        <NotificationsContainer>
          <Notifications src={NotifyIcon} />
          <NotificationsCount> 7 </NotificationsCount>
        </NotificationsContainer>
        <SearchContainer>
          <Search src={SearchIcon} />
        </SearchContainer>
      </ActionsContainer>
      <NavMenu src={NavMenuBurger} />
    </NavContainer>
  );
}
