import styled from "styled-components";
import { Row, Icon } from "antd";

export const NavContainer = styled(Row)`
  background-color: #3e4257;
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  padding-left: 5px;
`;

export const AppLogo = styled.img`
  width: 50px;
  height: 50px;
`;

export const ActionsContainer = styled(Row)`
  display: flex;
  width: 100%;
  justify-content: center;

  & > * {
    padding-right: 2.12rem;
  }
`;

export const FRContainer = styled(Row)`
  display: flex;
  justify-content: center;
`;

export const FriendRequests = styled.img``;

export const MessagesContainer = styled(Row)``;

export const Messages = styled.img`
  fill: white;
`;

export const NotificationsContainer = styled(Row)``;

export const Notifications = styled.img``;

export const SearchContainer = styled(Row)``;

export const Search = styled.img``;
