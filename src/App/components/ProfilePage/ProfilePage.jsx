import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ProfileHeader from "./components/ProfileHeader";
import MockupForm from "./components/MockupForm";
import Post from "./components/Post";

const ProfilePage = props => {

  return (
    <div>
      {/* TODO: Connect ProfileHeader to user */}
      <Navbar displayName={"Static username"} />
      <ProfileHeader
        coverImage="https://www.w3schools.com/w3images/avatar2.png"
        profileImage="https://www.w3schools.com/w3images/avatar2.png"
        displayName={"Static username"}
      />
      <MockupForm />
      <Post />
    </div>
  );
};

export default withRouter(ProfilePage);
