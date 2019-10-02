import styled from "styled-components";
import { Row, Input, Avatar } from "antd";

export const NavContainer = styled(Row)`
  background-color: #3e4257;
  width: 100%;
  height: 4.375rem;
  display: flex;
  align-items: center;
  font-family: Roboto;
`;

export const LogoContainer = styled.div`
  padding-left: 5px;
`;
export const CurrentPage = styled.p`
  display: none;

  @media (min-width: 1000px) {
    display: block;
    min-width: 12%;
    font-size: 0.875rem;
    margin: 0 0 0 1rem;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
  }
`;

export const AppLogo = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  @media (min-width: 1000px) {
    width: 3.75rem;
    height: 3.75rem;
  }
`;

export const ActionsContainer = styled(Row)`
  display: flex;
  width: 80%;
  justify-content: center;

  @media (max-width: 768px) {
    & > *:not(:last-child) {
      padding-right: 8%;
    }
  }

  @media (min-width: 768px) {
    justify-content: center;
    width: 45%;
    margin: 0 2% 0 4%;
  }

  @media (min-width: 1350px) {
    justify-content: flex-end;
    margin-right: 0;
    margin-left: 20%;
  }
`;

export const FRContainer = styled(Row)`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    padding-right: 10%;
  }

  @media (min-width: 1000px) {
    padding-right: 15%;
  }

  @media (min-width: 1350px) {
    padding-right: 12%;
  }
`;

export const FriendRequests = styled.img`
  width: 1.875rem;
  height: 1.875rem;
`;

export const FriendRequestsCount = styled.p`
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

  @media (min-width: 768px) {
    padding-right: 10%;
  }

  @media (min-width: 1000px) {
    padding-right: 15%;
  }

  @media (min-width: 1350px) {
    padding-right: 12%;
  }
`;

export const Messages = styled.img`
  width: 2.18rem;
  height: 2.18rem;
`;

export const MessagesCount = styled.p`
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

  @media (min-width: 768px) {
    padding-right: 0;
  }
`;

export const Notifications = styled.img`
  width: 1.875rem;
  height: 1.875rem;
`;

export const NotificationsCount = styled.p`
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
  width: 1.875rem;
  height: 1.875rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SearchBar = styled(Input)`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin-left: 1rem;
    width: 70%;
    border-radius: 1.375rem;

    ::placeholder {
      color: #444444;
    }
  }

  @media (min-width: 1000px) {
    max-width: 25%;
  }
`;

export const NavMenu = styled.img`
  width: 1.875rem;
  height: 1.875rem;
  margin: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ProfileContainer = styled(Row)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 40%;
    align-items: center;
    justify-content: flex-end;
    margin: 0 1rem 0 0;
  }

  @media (min-width: 1000px) {
    margin: 0 2rem 0 0;
    width: 30%;
  }
  @media (min-width: 1350px) {
    margin: 0 5rem 0 0;
    width: 45%;
  }
`;

export const UserContainer = styled(Row)`
  display: flex;
`;

export const UserAvatar = styled(Avatar)``;

export const UserStatus = styled.span`
  position: absolute;
  margin-right: 0;
  top: 3px;
  left: 0;
  border: 1px solid #3f4256;
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${props => (props.online === "on" ? "#32e4cd" : "#777777")};
  border-radius: 100%;
`;

export const NameContainer = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.5rem;
`;

export const Name = styled.p`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1;
  color: #ffffff;
  margin: 0;
`;

export const Prefix = styled.p`
  font-size: 0.7rem;
  color: #8185a2;
  margin: 0;
`;

export const UserSettings = styled.img`
  margin-left: 0.93rem;
  width: 0.625rem;
  height: 0.625rem;
`;
