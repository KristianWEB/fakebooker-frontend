import React from "react";
import Notification from "./Notification";
import {
  NotificationListContainer,
  NotificationListHeading,
  NotificationRow
} from "./NotificationList.styles";

const NotificationList = () => {
  const notifications = [
    // {
    //   id: 1,
    //   action: "has commented on your post",
    //   actionId: {
    //     body: "example post"
    //   },
    //   creator: {
    //     avatarImage:
    //       "https://scontent.fsof4-1.fna.fbcdn.net/v/t1.30497-1/c71.0.240.240a/p240x240/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=7206a8&_nc_ohc=CD3ImewvDlgAX8f-QvY&_nc_ht=scontent.fsof4-1.fna&oh=782172992e9272da49f35f7f40ef8d63&oe=5EED0201",
    //     firstName: "Brady",
    //     lastName: "Yost"
    //   },
    //   notifier: {
    //     avatarImage:
    //       "https://scontent.fsof4-1.fna.fbcdn.net/v/t1.30497-1/c71.0.240.240a/p240x240/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=7206a8&_nc_ohc=CD3ImewvDlgAX8f-QvY&_nc_ht=scontent.fsof4-1.fna&oh=782172992e9272da49f35f7f40ef8d63&oe=5EED0201",
    //     firstName: "Devon",
    //     lastName: "Orn"
    //   },
    //   createdAt: "03/25/2020"
    // },
    // {
    //   id: 2,
    //   action: "has liked your post",
    //   actionId: {
    //     body: "example post"
    //   },
    //   creator: {
    //     avatarImage:
    //       "https://scontent.fsof4-1.fna.fbcdn.net/v/t1.30497-1/c71.0.240.240a/p240x240/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=7206a8&_nc_ohc=CD3ImewvDlgAX8f-QvY&_nc_ht=scontent.fsof4-1.fna&oh=782172992e9272da49f35f7f40ef8d63&oe=5EED0201",
    //     firstName: "Brady",
    //     lastName: "Yost"
    //   },
    //   notifier: {
    //     avatarImage:
    //       "https://scontent.fsof4-1.fna.fbcdn.net/v/t1.30497-1/c71.0.240.240a/p240x240/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=7206a8&_nc_ohc=CD3ImewvDlgAX8f-QvY&_nc_ht=scontent.fsof4-1.fna&oh=782172992e9272da49f35f7f40ef8d63&oe=5EED0201",
    //     firstName: "Devon",
    //     lastName: "Orn"
    //   },
    //   createdAt: "03/24/2020"
    // }
  ];

  return (
    <NotificationListContainer>
      <NotificationListHeading>Notifications</NotificationListHeading>
      {notifications.length > 0 && (
        <NotificationRow data-testid="notificationsRow">
          {notifications.map(notification => (
            <Notification key={notification.id} notification={notification} />
          ))}
        </NotificationRow>
      )}
    </NotificationListContainer>
  );
};

export default NotificationList;
