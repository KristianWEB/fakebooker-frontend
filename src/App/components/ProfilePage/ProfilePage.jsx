import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import Post from "./components/Post";
import ProfileHeader from "./components/ProfileHeader";
import globalContext from "../../context/global/globalContext";
import getCurrentUserName from "../../util/jwtUtil";

const ProfilePage = props => {
  const { state } = useContext(globalContext);

  const username =
    props.match.params.username || getCurrentUserName(state.authToken);

  return (
    <div>
      <Post />
      {/* TODO: Connect ProfileHeader to user */}
      <ProfileHeader
        coverImage="https://www.w3schools.com/w3images/avatar2.png"
        profileImage="https://www.w3schools.com/w3images/avatar2.png"
        displayName={username}
      />
    </div>
  );
};

export default withRouter(ProfilePage);
