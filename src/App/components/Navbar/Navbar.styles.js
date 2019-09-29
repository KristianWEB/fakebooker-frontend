import styled from "styled-components";
import { Row } from "antd";

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
  width: 40px;
  height: 40px;
`;

export const ActionsContainer = styled(Row)`
  display: flex;
  width: 100%;
  justify-content: center;

  & > *:not(:last-child) {
    padding-right: 1.25rem;
  }
`;

export const FRContainer = styled(Row)`
  display: flex;
  justify-content: center;
`;

export const FriendRequests = styled.img`
  width: 30px;
  height: 30px;
`;

export const FriendRequestsCount = styled.h5`
  color: white;
  align-self: flex-start;
  padding: 0.1rem 0.4rem;
  margin-left: -0.6rem;
  margin-top: -0.4rem;
  border-radius: 100%;
  background-color: #38a9ff;
`;

export const MessagesContainer = styled(Row)`
  display: flex;
  justify-content: center;
`;

export const Messages = styled.img`
  width: 35px;
  height: 35px;
`;

export const MessagesCount = styled.h5`
  color: white;
  align-self: flex-start;
  padding: 0.1rem 0.4rem;
  margin-left: -0.6rem;
  margin-top: -0.4rem;
  border-radius: 100%;
  background-color: #7c5ac1;
`;

export const NotificationsContainer = styled(Row)`
  display: flex;
  justify-items: center;
`;

export const Notifications = styled.img`
  width: 30px;
  height: 30px;
`;

export const NotificationsCount = styled.h5`
  color: white;
  align-self: flex-start;
  padding: 0.1rem 0.4rem;
  margin-left: -0.8rem;
  margin-top: -0.4rem;
  border-radius: 100%;
  background-color: #ff5e3a;
`;

export const SearchContainer = styled(Row)``;

export const Search = styled.img`
  width: 30px;
  height: 30px;
`;

export const NavMenu = styled.img`
  width: 30px;
  height: 30px;
  margin: 1rem;
`;
