import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Spin } from "antd";
import Post from "./components/Post";
import ProfileHeader from "./components/ProfileHeader";
import globalContext from "../../context/global/globalContext";
import getCurrentUserName from "../../util/jwtUtil";
import { Fragment } from "react";

const ProfilePage = props => {
  const { state } = useContext(globalContext);
  const [profileInfo, setProfileInfo] = useState();
  const username =
    props.match.params.username || getCurrentUserName(state.authToken);
  const BaseURL = "https://osd-sidekick.herokuapp.com/api/profile";

  useEffect(() => {
    fetch(`${BaseURL}/${username}`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(_data => {
        setProfileInfo(_data);
      });
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
