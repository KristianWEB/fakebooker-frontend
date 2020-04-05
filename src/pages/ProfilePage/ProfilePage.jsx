import React from "react";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import { notification, Row } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import Notification from "../../components/Notification/Notification";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import CreatePostDefault from "../../components/Post/CreatePostDefault";
import Post from "../../components/Post/Post";
import About from "../../components/About/About";
import {
  LOAD_USER_FROM_DB,
  GET_POSTS,
  NEW_NOTIFICATION,
  DELETE_NOTIFICATION,
  GET_NOTIFICATIONS
} from "../../utils/queries";
import { InfoContainer, PostsSection } from "./ProfilePage.styles";

const ProfilePage = () => {
  const { data: userData } = useQuery(LOAD_USER_FROM_DB);

  useQuery(GET_NOTIFICATIONS);

  const openNotification = newNotification => {
    notification.info({
      message: `Notification`,
      description: <Notification notification={newNotification} />,
      placement: "bottomLeft",
      style: {
        padding: "16px 8px"
      }
    });
  };

  useSubscription(NEW_NOTIFICATION, {
    onSubscriptionData: ({ client, subscriptionData }) => {
      const data = client.readQuery({
        query: GET_NOTIFICATIONS
      });
      openNotification(subscriptionData.data.newNotification);

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
        item => item.id !== subscriptionData.data.deleteNotification
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
        <Row>
          <Navbar onProfile user={userData.loadUserFromDB} />
          <ProfileHeader user={userData.loadUserFromDB} />
          <InfoContainer>
            <About user={userData.loadUserFromDB} />
            <PostsSection>
              <CreatePostDefault user={userData.loadUserFromDB} />
              {postsData &&
                postsData.getPosts.map(post => (
                  <Post
                    key={post.id}
                    post={post}
                    user={userData.loadUserFromDB}
                  />
                ))}
            </PostsSection>
          </InfoContainer>
        </Row>
      )}
    </>
  );
};

export default ProfilePage;
