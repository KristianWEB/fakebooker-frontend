import React from "react";
import moment from "moment/moment";
import PropTypes from "prop-types";
import {
  NotificationContainer,
  NotificationHeading,
  CreatorFullName,
  CreatorAvatar,
  Body,
  PostBody,
  Timestamp,
} from "./Notification.styles";

const Notification = ({
  notification: { action, creator, actionId, createdAt },
  alert,
}) => (
  <>
    {alert && <NotificationHeading>New Notification</NotificationHeading>}
    <NotificationContainer>
      <CreatorAvatar src={creator.avatarImage} />
      {actionId ? (
        <Body>
          <div>
            <CreatorFullName>
              {creator.firstName} {creator.lastName}{" "}
            </CreatorFullName>
            {action}: <PostBody> {`"${actionId.body}"`}</PostBody>
          </div>
          <Timestamp>{moment(Number(createdAt)).fromNow()}</Timestamp>
        </Body>
      ) : (
        <Body>
          <div>
            <CreatorFullName>
              {creator.firstName} {creator.lastName}{" "}
            </CreatorFullName>
            {action}
          </div>
          <Timestamp>{moment(Number(createdAt)).fromNow()}</Timestamp>
        </Body>
      )}
    </NotificationContainer>
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
    }),
    actionId: PropTypes.shape({
      body: PropTypes.string,
    }),
    createdAt: PropTypes.string,
  }),
  alert: PropTypes.bool,
};

Notification.defaultProps = {
  notification: null,
  alert: null,
};
