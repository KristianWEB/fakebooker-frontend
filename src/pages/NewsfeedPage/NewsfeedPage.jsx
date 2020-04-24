import React, { useState } from "react";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import { notification, Row } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import SingleChat from "../../components/Message/SingleChat";
import Notification from "../../components/Notification/Notification";
import CreatePostDefault from "../../components/Post/CreatePostDefault";
import Post from "../../components/Post/Post";
import {
  LOAD_USER_FROM_DB,
  NEW_NOTIFICATION,
  DELETE_NOTIFICATION,
  GET_NOTIFICATIONS,
  GET_NEWSFEED
} from "../../utils/queries";
import { InfoContainer, PostsSection } from "./NewsfeedPage.styles";

const NewsfeedPage = () => {
  const { data: userData } = useQuery(LOAD_USER_FROM_DB);
  const [openChat, setOpenChat] = useState({
    visible: false,
    creator: null
  });

  useQuery(GET_NOTIFICATIONS);

  const { data: newsfeedData } = useQuery(GET_NEWSFEED);
  console.log(newsfeedData);

  const openNotification = newNotification => {
    notification.info({
      message: <span style={{ marginLeft: "40px" }}>Notification</span>,
      description: (
        <div style={{ marginTop: "12px" }}>
          <Notification notification={newNotification} />
        </div>
      ),
      duration: 0,
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

  return (
    <>
      {userData && (
        <Row>
          <Navbar user={userData.loadUserFromDB} setOpenChat={setOpenChat} />
          <InfoContainer>
            <PostsSection>
              <CreatePostDefault user={userData.loadUserFromDB} />
              {newsfeedData &&
                newsfeedData.getNewsfeed.map(post => (
                  <Post
                    key={post.id}
                    post={post}
                    user={userData.loadUserFromDB}
                  />
                ))}
            </PostsSection>
          </InfoContainer>
          {openChat.visible && (
            <SingleChat creator={openChat.creator} setOpenChat={setOpenChat} />
          )}
        </Row>
      )}
    </>
  );
};

export default NewsfeedPage;
