import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import InfoContainer, { PostsSection } from "./components/ProfilePage.styles";
import ProfileHeader from "./components/ProfileHeader";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import About from "./components/About";
import LastPhotos from "./components/LastPhotos";
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
      <ProfileHeader
        coverImage="https://www.w3schools.com/w3images/avatar2.png"
        profileImage="https://www.w3schools.com/w3images/avatar2.png"
        displayName={username}
      />
      <InfoContainer>
        <About />
        <PostsSection>
          <CreatePost
            name={username}
            profileImage="https://www.w3schools.com/w3images/avatar2.png"
          />
          <Post />
        </PostsSection>
        <LastPhotos />
      </InfoContainer>
    </div>
  );
};

export default withRouter(ProfilePage);
