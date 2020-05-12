import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import Popup from "reactjs-popup";
import { Link, useParams } from "react-router-dom";
import NotificationList from "../Notification/NotificationList";
import MessageList from "../Message/MessageList";
import {
  NavContainer,
  LogoContainer,
  GetUserContainer,
  SearchBar,
  User,
  Username,
  UserFullName,
  GetUserAvatar,
  ProfileContainer,
  NewsFeedContainer,
  MessageContainer,
  NotificationContainer,
  SettingsContainer,
  SearchContainer,
  UserAvatar,
  UsersContainer,
  UserContainer,
  FlexContainer,
  SearchInputContainer,
  IconContainer,
} from "./Navbar.styles";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as ChatIcon } from "../../assets/icons/chatbox.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/notifications.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/caret-down-outline.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-outline.svg";
import { GET_USERS } from "../../utils/queries";

const Navbar = ({ onProfile, user }) => {
  const [display, setDisplay] = useState("");
  const [search, setSearch] = useState("");
  const { username } = useParams();
  const ref = useRef(null);
  const { data } = useQuery(GET_USERS);

  const handleClickOutside = (event) => {
    const { current: wrap } = ref;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <NavContainer bgColor="#ffffff" ref={ref}>
      <LogoContainer>
        <FlexContainer>
          <Link to="/">
            <Logo width={41} height={41} />
          </Link>
          <SearchInputContainer>
            <SearchBar
              placeholder="Search in Fakebooker"
              name="searchUser"
              value={search}
              onClick={() => setDisplay(!display)}
              onChange={(e) => setSearch(e.target.value)}
            />
            <IconContainer>
              <SearchIcon
                width={20}
                height={20}
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "15px",
                }}
              />
            </IconContainer>
          </SearchInputContainer>
          <SearchContainer>
            <SearchIcon width={20} height={20} />
          </SearchContainer>
        </FlexContainer>
      </LogoContainer>
      {display && (
        <UsersContainer>
          <GetUserContainer>
            {data &&
              data.getUsers
                .filter(({ firstName, lastName }) => {
                  const fullName = `${firstName.toLowerCase()} ${lastName.toLowerCase()}`;

                  return fullName.indexOf(search.toLowerCase()) > -1;
                })
                .map((getUser) => (
                  <Link to={`/${getUser.username}`} key={getUser.id}>
                    <UserContainer>
                      <GetUserAvatar src={getUser.avatarImage} />
                      <UserFullName>
                        {getUser.firstName} {getUser.lastName}
                      </UserFullName>
                    </UserContainer>
                  </Link>
                ))}
          </GetUserContainer>
        </UsersContainer>
      )}
      {!onProfile && (
        <NewsFeedContainer>
          <HomeIcon width={25} height={25} fill="#1877f2" />
        </NewsFeedContainer>
      )}
      <ProfileContainer>
        <Link to={`/${user.username}`}>
          {onProfile && user.username === username ? (
            <User primary>
              <UserAvatar src={user.avatarImage} />
              <Username primary>{user.firstName}</Username>
            </User>
          ) : (
            <User>
              <UserAvatar size={28} src={user.avatarImage} />
              <Username>{user.firstName}</Username>
            </User>
          )}
        </Link>
        <Popup
          className="notificationPopup"
          trigger={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <MessageContainer>
              <ChatIcon width="25" height="25" />
            </MessageContainer>
          }
          closeOnDocumentClick
          arrow={false}
          on="click"
        >
          <MessageList />
        </Popup>
        <Popup
          className="notificationPopup"
          on="click"
          trigger={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <NotificationContainer>
              <BellIcon width="25" height="25" />
            </NotificationContainer>
          }
          closeOnDocumentClick
          arrow={false}
        >
          <NotificationList />
        </Popup>
        <SettingsContainer>
          <SettingsIcon width={25} height={25} />
        </SettingsContainer>
      </ProfileContainer>
    </NavContainer>
  );
};

export default Navbar;

Navbar.propTypes = {
  onProfile: PropTypes.bool,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    avatarImage: PropTypes.string,
    username: PropTypes.string,
  }),
};

Navbar.defaultProps = {
  onProfile: null,
  user: null,
};
