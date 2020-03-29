import React from "react";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import Navbar from "../../components/Navbar/Navbar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import CreatePostDefault from "../../components/Post/CreatePostDefault";
import Post from "../../components/Post/Post";
import About from "../../components/About/About";
import {
  LOAD_USER,
  GET_POSTS,
  NEW_NOTIFICATION,
  DELETE_NOTIFICATION,
  GET_NOTIFICATIONS
} from "../../utils/queries";
import {
  InfoContainer,
  PostsSection,
  ProfilePageContainer
} from "./ProfilePage.styles";

const ProfilePage = () => {
  const { data: userData } = useQuery(LOAD_USER);
  useQuery(GET_NOTIFICATIONS);

  useSubscription(NEW_NOTIFICATION, {
    onSubscriptionData: ({ client, subscriptionData }) => {
      const data = client.readQuery({
        query: GET_NOTIFICATIONS
      });

      const newData = {
        getNotifications: [
          subscriptionData.data.newNotification,
          ...data.getNotifications
        ]
      };

      client.writeQuery({
        query: GET_NOTIFICATIONS,
        data: newData
      });
    }
  });

  useSubscription(DELETE_NOTIFICATION, {
    onSubscriptionData: ({ client, subscriptionData }) => {
      const data = client.readQuery({
        query: GET_NOTIFICATIONS
      });

      const newNotificationList = data.getNotifications.filter(
        notification =>
          notification.id !== subscriptionData.data.deleteNotification
      );

      client.writeQuery({
        query: GET_NOTIFICATIONS,
        data: { getNotifications: newNotificationList }
      });
    }
  });

  const { data: postsData } = useQuery(GET_POSTS);

  return (
    <>
      {userData && (
        <ProfilePageContainer>
          <Navbar onProfile user={userData.loadUser} />
          <ProfileHeader user={userData.loadUser} />
          <InfoContainer>
            <About />
            <PostsSection>
              <CreatePostDefault user={userData.loadUser} />
              {postsData &&
                postsData.getPosts.map(post => (
                  <Post key={post.id} post={post} user={userData} />
                ))}
            </PostsSection>
          </InfoContainer>
        </ProfilePageContainer>
      )}
    </>
  );
};

export default ProfilePage;
