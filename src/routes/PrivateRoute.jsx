import React from "react";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { notificationAlert } from "../utils/alerts";
import {
  GET_NOTIFICATIONS,
  NEW_NOTIFICATION,
  DELETE_NOTIFICATION,
  LOAD_USER,
} from "../utils/queries";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");

  useQuery(GET_NOTIFICATIONS);
  const { data: userData } = useQuery(LOAD_USER);

  useSubscription(NEW_NOTIFICATION, {
    onSubscriptionData: ({ client, subscriptionData }) => {
      const data = client.readQuery({
        query: GET_NOTIFICATIONS,
      });
      if (
        subscriptionData.data.newNotification.notifier.id ===
        userData.loadUser.id
      ) {
        notificationAlert(subscriptionData.data.newNotification);
        const newData = {
          getNotifications: [
            subscriptionData.data.newNotification,
            ...data.getNotifications,
          ],
        };

        client.writeQuery({
          query: GET_NOTIFICATIONS,
          data: newData,
        });
      }
    },
  });

  useSubscription(DELETE_NOTIFICATION, {
    onSubscriptionData: ({ client, subscriptionData }) => {
      const data = client.readQuery({
        query: GET_NOTIFICATIONS,
      });

      const newNotificationList = data.getNotifications.filter(
        (item) => item.id !== subscriptionData.data.deleteNotification
      );

      client.writeQuery({
        query: GET_NOTIFICATIONS,
        data: { getNotifications: newNotificationList },
      });
    },
  });
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.func,
};

PrivateRoute.defaultProps = {
  component: null,
};
