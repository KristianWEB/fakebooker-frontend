import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import { notification } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import Notification from "../../components/Notification/Notification";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import {
  LOAD_USER,
  NEW_NOTIFICATION,
  DELETE_NOTIFICATION,
  GET_NOTIFICATIONS
} from "../../utils/queries";
import {
  AboutPageContainer,
  AboutInfoContainer,
  AboutContainer,
  AboutSidebar,
  AboutHeading,
  Overview,
  WorkAndEducation,
  ContactAndBasicInfo
} from "./AboutPageWorkAndEducation.styles";

const AboutPageWorkAndEducation = () => {
  const { data: userData } = useQuery(LOAD_USER);

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

  return (
    <>
      {userData && (
        <AboutPageContainer>
          <Navbar onProfile user={userData.loadUser} />
          <ProfileHeader user={userData.loadUser} />
          <AboutInfoContainer>
            <AboutContainer>
              <AboutSidebar>
                <AboutHeading>About</AboutHeading>
                <Link to="about_overview">
                  <Overview>Overview</Overview>
                </Link>
                <Link to="about_work_and_education">
                  <WorkAndEducation>Work and Education</WorkAndEducation>
                </Link>
                <ContactAndBasicInfo>
                  Contact and Basic Info
                </ContactAndBasicInfo>
              </AboutSidebar>
              <h1 style={{ margin: "auto", fontSize: "20px" }}>
                Work and Education
              </h1>
            </AboutContainer>
          </AboutInfoContainer>
        </AboutPageContainer>
      )}
    </>
  );
};

export default AboutPageWorkAndEducation;
