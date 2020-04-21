import React from "react";
import { useParams } from "react-router-dom";
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
  GET_NOTIFICATIONS,
  GET_URL_POSTS,
  LOAD_FROM_URL_USER
} from "../../utils/queries";
import {
  InfoContainer,
  PostsSection,
  FixedContainer
} from "./ProfilePage.styles";

const ProfilePage = () => {
  const { data: userData } = useQuery(LOAD_USER_FROM_DB);

  const { username } = useParams();
  /* eslint-disable consistent-return */
  const readOnly = () => {
    if (userData) {
      if (userData.loadUserFromDB.username !== username) {
        return true;
        // eslint-disable-next-line no-else-return
      } else {
        return false;
      }
    }
  };

  // skip this when viewed on auth profile
  const { data: profileData } = useQuery(LOAD_FROM_URL_USER, {
    variables: {
      username
    }
  });

  useQuery(GET_NOTIFICATIONS);

  const openNotification = newNotification => {
    notification.info({
      message: <span style={{ marginLeft: "40px" }}>Notification</span>,
      description: (
        <div style={{ marginTop: "12px" }}>
          <Notification notification={newNotification} />
        </div>
      ),
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
      if (
        subscriptionData.data.newNotification.notifier.id ===
        userData.loadUserFromDB.id
      ) {
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

  const { data: postsData } = useQuery(GET_POSTS, {
    skip: readOnly()
  });

  const { data: urlPostsData } = useQuery(GET_URL_POSTS, {
    variables: {
      username
    },
    skip: !readOnly()
  });

  return (
    <>
      {userData && (
        <Row>
          <Navbar onProfile user={userData.loadUserFromDB} />
          <ProfileHeader
            user={
              profileData
                ? profileData.loadFromUrlUser
                : userData.loadUserFromDB
            }
            authUser={userData.loadUserFromDB}
            readOnly={readOnly()}
          />
          <InfoContainer>
            <FixedContainer>
              <About
                user={
                  profileData
                    ? profileData.loadFromUrlUser
                    : userData.loadUserFromDB
                }
                readOnly={readOnly()}
              />
              <PostsSection>
                {!readOnly() && (
                  <CreatePostDefault user={userData.loadUserFromDB} />
                )}
                {!readOnly() &&
                  postsData &&
                  postsData.getPosts.map(post => (
                    <Post
                      key={post.id}
                      post={post}
                      user={userData.loadUserFromDB}
                    />
                  ))}
                {readOnly() &&
                  urlPostsData &&
                  urlPostsData.getUrlPosts.map(post => (
                    <Post
                      key={post.id}
                      post={post}
                      user={userData.loadUserFromDB}
                      readOnly
                    />
                  ))}
              </PostsSection>
            </FixedContainer>
          </InfoContainer>
        </Row>
      )}
    </>
  );
};

export default ProfilePage;
