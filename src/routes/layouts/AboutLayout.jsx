import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import { notification, Row } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import Notification from "../../components/Notification/Notification";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import {
  LOAD_USER,
  NEW_NOTIFICATION,
  DELETE_NOTIFICATION,
  GET_NOTIFICATIONS,
  LOAD_FROM_URL_USER
} from "../../utils/queries";

const AboutLayout = ({ children }) => {
  const { data: userData } = useQuery(LOAD_USER);

  const { username } = useParams();

  /* eslint-disable consistent-return */
  const readOnly = () => {
    if (userData) {
      if (userData.loadUser.username !== username) {
        return true;
        // eslint-disable-next-line no-else-return
      } else {
        return false;
      }
    }
  };

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

  // skip this when on auth profile
  const { data: profileData } = useQuery(LOAD_FROM_URL_USER, {
    variables: {
      username
    }
  });

  if (!profileData) {
    return null;
  }

  return (
    <>
      {userData && (
        <Row>
          <Navbar onProfile user={userData.loadUser} />
          <ProfileHeader
            user={
              profileData
                ? profileData.loadFromUrlUser
                : userData.loadUserFromDB
            }
            readOnly={readOnly()}
          />
          {children}
        </Row>
      )}
    </>
  );
};

export default AboutLayout;

AboutLayout.propTypes = {
  children: PropTypes.node
};

AboutLayout.defaultProps = {
  children: null
};
