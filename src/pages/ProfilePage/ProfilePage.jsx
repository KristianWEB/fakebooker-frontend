import React from "react";
import { matchPath } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import Navbar from "../../components/Navbar/Navbar";
import {
  InfoContainer,
  PostsSection,
  ProfilePageContainer
} from "./ProfilePage.styles";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import CreatePostDefault from "../../components/Post/CreatePostDefault";
import PostList from "../../components/Post/PostList";
import About from "../../components/About/About";
import { LOAD_USER } from "../../utils/graphql/queries";

const ProfilePage = history => {
  const { data: userData } = useQuery(LOAD_USER);

  const match = matchPath(history.location.pathname, {
    path: "/profile/:username"
  });

  return (
    <>
      {userData && (
        <ProfilePageContainer>
          {/* TODO: Connect ProfileHeader to user */}
          <Navbar onProfile user={userData.loadUser} />
          <ProfileHeader user={userData.loadUser} />
          <InfoContainer>
            <About />
            <PostsSection>
              <CreatePostDefault user={userData.loadUser} />
              <PostList username={match.params.username} />
            </PostsSection>
          </InfoContainer>
        </ProfilePageContainer>
      )}
    </>
  );
};

export default ProfilePage;
