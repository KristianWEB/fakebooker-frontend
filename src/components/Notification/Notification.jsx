import React from "react";
import PropTypes from "prop-types";
import {
  NotificationContainer,
  CreatorFirstName,
  CreatorLastName,
  CreatorAvatar,
  Body,
  PostBody,
  Timestamp
} from "./Notification.styles";

const Notification = ({
  notification: { action, creator, actionId, createdAt }
}) => (
  <NotificationContainer data-testid="notification">
    <CreatorAvatar src={creator.avatarImage} />
    <Body>
      <CreatorFirstName> {creator.firstName}</CreatorFirstName>
      <CreatorLastName> {creator.lastName} </CreatorLastName>
      {action}: <PostBody> {`"${actionId.body}"`}</PostBody>
      <Timestamp>{createdAt}</Timestamp>
    </Body>
  </NotificationContainer>
);
export default Notification;

Notification.propTypes = {
  notification: PropTypes.shape({
    action: PropTypes.string,
    creator: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      avatarImage: PropTypes.string
    }),
    actionId: PropTypes.shape({
      body: PropTypes.string
    }),
    createdAt: PropTypes.string
  })
};

Notification.defaultProps = {
  notification: null
};
