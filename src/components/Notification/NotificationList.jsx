import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Notification from "./Notification";
import {
  NotificationListContainer,
  NotificationListHeading,
  NotificationRow
} from "./NotificationList.styles";
import { GET_NOTIFICATIONS } from "../../utils/queries";

const NotificationList = () => {
  const { data } = useQuery(GET_NOTIFICATIONS);

  return (
    <NotificationListContainer>
      <NotificationListHeading>Notifications</NotificationListHeading>
      {data && (
        <NotificationRow>
          {data.getNotifications.map(notification => (
            <Notification key={notification.id} notification={notification} />
          ))}
        </NotificationRow>
      )}
    </NotificationListContainer>
  );
};

export default NotificationList;
