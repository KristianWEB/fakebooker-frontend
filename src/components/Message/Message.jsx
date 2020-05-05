import React from "react";
import moment from "moment/moment";
import PropTypes from "prop-types";
import {
  MessageContainer,
  CreatorFullName,
  CreatorAvatar,
  Body,
  Footer,
} from "./Message.styles";

const Message = ({ message: { creator, body, createdAt }, setOpenChat }) => {
  return (
    <MessageContainer
      onClick={() =>
        setOpenChat({
          visible: true,
          creator,
        })
      }
    >
      <CreatorAvatar src={creator.avatarImage} />
      <Body>
        <CreatorFullName>
          {creator.firstName} {creator.lastName}
        </CreatorFullName>
        <Footer>
          {body} · {moment(Number(createdAt)).fromNow()}
        </Footer>
      </Body>
    </MessageContainer>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.shape({
    creator: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      avatarImage: PropTypes.string,
    }),
    createdAt: PropTypes.string,
    body: PropTypes.string,
  }),
  setOpenChat: PropTypes.func,
};

Message.defaultProps = {
  message: null,
  setOpenChat: null,
};
