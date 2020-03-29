import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import Navbar from "../../components/Navbar/Navbar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import About from "../../components/About/About";
import Post from "../../components/Post/Post";
import {
  LOAD_FROM_URL_USER,
  LOAD_USER,
  GET_URL_POSTS,
  GET_NOTIFICATIONS,
  NEW_NOTIFICATION,
  DELETE_NOTIFICATION
} from "../../utils/queries";
import {
  UrlInfoContainer,
  UrlPostsSection,
  UrlProfilePageContainer,
  FixedContainer
} from "./UrlProfilePage.styles";

const UrlProfilePage = () => {
  const { username } = useParams();

  const { data: userData } = useQuery(LOAD_USER);

  const { data: profileData } = useQuery(LOAD_FROM_URL_USER, {
    variables: {
      username
    }
  });

  const { data: postsData } = useQuery(GET_URL_POSTS, {
    variables: {
      username
    }
  });

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

  if (userData && profileData) {
    if (userData.loadUser.username === profileData.loadFromUrlUser.username) {
      return <Redirect to="/profile" />;
    }
  }

  return (
    <>
      {profileData && (
        <UrlProfilePageContainer>
          {/* TODO: Connect ProfileHeader to user */}
          <Navbar onProfile user={userData.loadUser} />
          <ProfileHeader user={profileData.loadFromUrlUser} readOnly />
          <UrlInfoContainer>
            <FixedContainer>
              <About readOnly />
              <UrlPostsSection>
                {postsData &&
                  postsData.getUrlPosts.map(post => (
                    <Post key={post.id} post={post} user={userData} readOnly />
                  ))}
              </UrlPostsSection>
            </FixedContainer>
          </UrlInfoContainer>
        </UrlProfilePageContainer>
      )}
    </>
  );
};

export default UrlProfilePage;
