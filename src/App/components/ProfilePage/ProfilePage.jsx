import React, { useContext, useEffect, useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Spin } from "antd";
import Post from "./components/Post";
import ProfileHeader from "./components/ProfileHeader";
import globalContext from "../../context/global/globalContext";
import getCurrentUserName from "../../util/jwtUtil";

const ProfilePage = props => {
  const { state } = useContext(globalContext);
  const [profileInfo, setProfileInfo] = useState();
  const username =
    props.match.params.username || getCurrentUserName(state.authToken);
  const BaseURL = "https://osd-sidekick.herokuapp.com/api/profile";

  useEffect(() => {
    async function fetchProfileInfo() {
      const res = await fetch(`${BaseURL}/${username}`, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      setProfileInfo(data);
    }
    fetchProfileInfo();
  }, []);

  const condition = profileInfo ? profileInfo.success : undefined;

  if (condition === false) {
    props.history.push("/error");
  }

  return (
    <div>
      {condition ? (
        <>
          <Post />
          <ProfileHeader
            coverImage={
              profileInfo.info.coverImage ||
              "https://www.w3schools.com/w3images/avatar2.png"
            }
            profileImage={
              profileInfo.info.profileImage ||
              "https://www.w3schools.com/w3images/avatar2.png"
            }
            displayName={profileInfo.info.displayName}
          />
        </>
      ) : (
        <Spin size="large" />
      )}
    </div>
  );
};

export default withRouter(ProfilePage);
