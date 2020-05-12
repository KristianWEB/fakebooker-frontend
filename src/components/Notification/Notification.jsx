import React from "react";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import PropTypes from "prop-types";
import {
  NotificationContainer,
  NotificationHeading,
  CreatorFullName,
  CreatorAvatar,
  Body,
  Timestamp,
} from "./Notification.styles";

const Notification = ({
  notification: { action, creator, actionId, createdAt },
  alert,
}) => (
  <>
    {alert && <NotificationHeading>New Notification</NotificationHeading>}
    {actionId ? (
      <Link to={`/post/${actionId.id}`}>
        <NotificationContainer>
          <CreatorAvatar src={creator.avatarImage} />
          <Body>
            <div>
              <CreatorFullName>
                {creator.firstName} {creator.lastName}{" "}
              </CreatorFullName>
              {action}
            </div>
            <Timestamp>{moment(Number(createdAt)).fromNow()}</Timestamp>
          </Body>
        </NotificationContainer>
      </Link>
    ) : (
      <Link to={`/${creator.username}`}>
        <NotificationContainer>
          <CreatorAvatar src={creator.avatarImage} />
          <Body>
            <div>
              <CreatorFullName>
                {creator.firstName} {creator.lastName}{" "}
              </CreatorFullName>
              {action}
            </div>
            <Timestamp>{moment(Number(createdAt)).fromNow()}</Timestamp>
          </Body>
        </NotificationContainer>
      </Link>
    )}
  </>
);
export default Notification;

Notification.propTypes = {
  notification: PropTypes.shape({
    action: PropTypes.string,
    creator: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      avatarImage: PropTypes.string,
      username: PropTypes.string,
    }),
    actionId: PropTypes.shape({
      body: PropTypes.string,
      id: PropTypes.string,
    }),
    createdAt: PropTypes.string,
  }),
  alert: PropTypes.bool,
};

Notification.defaultProps = {
  notification: null,
  alert: null,
};
