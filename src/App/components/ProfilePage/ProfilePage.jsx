import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {
  ProfileContainer,
  InfoContainer
} from "./components/ProfilePage.styles";
import ProfileHeader from "./components/ProfileHeader";
import MockupForm from "./components/MockupForm";
import Post from "./components/Post";
import About from "./components/About";
import globalContext from "../../context/global/globalContext";
import getCurrentUserName from "../../util/jwtUtil";

const ProfilePage = props => {
  const { state } = useContext(globalContext);

  const username =
    props.match.params.username || getCurrentUserName(state.authToken);

  return (
    <div>
      {/* TODO: Connect ProfileHeader to user */}
      <Navbar displayName={username} />
      <ProfileContainer>
        <ProfileHeader
          coverImage="https://www.w3schools.com/w3images/avatar2.png"
          profileImage="https://www.w3schools.com/w3images/avatar2.png"
          displayName={username}
        />
        {/* <MockupForm /> */}
        <InfoContainer>
          <About />
          <Post />
        </InfoContainer>
      </ProfileContainer>
    </div>
  );
};

export default withRouter(ProfilePage);
