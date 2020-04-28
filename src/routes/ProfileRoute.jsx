import React from "react";
import PropTypes from "prop-types";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import { notification } from "antd";
import { Route, Redirect } from "react-router-dom";
import ProfileLayout from "./layouts/ProfileLayout";
import Notification from "../components/Notification/Notification";
import {
  GET_NOTIFICATIONS,
  NEW_NOTIFICATION,
  DELETE_NOTIFICATION,
  LOAD_USER
} from "../utils/queries";

const ProfileRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  const { data: userData } = useQuery(LOAD_USER);

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
        userData.loadUser.id
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
    <Route
      {...rest}
      render={props =>
        token ? (
          <ProfileLayout>
            <Component {...props} />
          </ProfileLayout>
        ) : (
          <Redirect to="/auth" />
        )
      }
    />
  );
};

export default ProfileRoute;

ProfileRoute.propTypes = {
  component: PropTypes.func
};

ProfileRoute.defaultProps = {
  component: null
};
