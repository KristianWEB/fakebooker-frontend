import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import InfoContainer, { PostsSection } from "./components/ProfilePage.styles";
import ProfileHeader from "./components/ProfileHeader";
import CreatePost from "./components/Posting/CreatePost";
import Post from "./components/Posting/Post";
import About from "./components/About";
import LastPhotos from "./components/LastPhotos";

const ProfilePage = () => {
  return (
    <div>
      {/* TODO: Connect ProfileHeader to user */}
      <Navbar displayName="Static username" />
      <ProfileHeader
        coverImage="https://www.w3schools.com/w3images/avatar2.png"
        profileImage="https://www.w3schools.com/w3images/avatar2.png"
        displayName="Static username"
      />
      <InfoContainer>
        <About />
        <PostsSection>
          <CreatePost
            name="Static username"
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
