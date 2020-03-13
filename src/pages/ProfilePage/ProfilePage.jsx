import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Navbar from "../../components/Navbar/Navbar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import CreatePostDefault from "../../components/Post/CreatePostDefault";
import PostList from "../../components/Post/PostList";
import About from "../../components/About/About";
import { LOAD_USER } from "../../utils/queries";
import {
  InfoContainer,
  PostsSection,
  ProfilePageContainer
} from "./ProfilePage.styles";

const ProfilePage = () => {
  const { data: userData } = useQuery(LOAD_USER);

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
              <PostList />
            </PostsSection>
          </InfoContainer>
        </ProfilePageContainer>
      )}
    </>
  );
};

export default ProfilePage;
