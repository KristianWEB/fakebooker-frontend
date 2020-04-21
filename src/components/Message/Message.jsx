import React from "react";
import PropTypes from "prop-types";
import {
  MessageContainer,
  CreatorFullName,
  CreatorAvatar,
  Body,
  Footer
} from "./Message.styles";

const Message = ({ message: { creator, body, createdAt }, openChat }) => {
  return (
    <MessageContainer onClick={() => openChat({ creator })}>
      <CreatorAvatar src={creator.avatarImage} />
      <Body>
        <CreatorFullName>
          {creator.firstName} {creator.lastName}
        </CreatorFullName>
        <Footer>
          {body} · {createdAt}
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
      avatarImage: PropTypes.string
    }),
    createdAt: PropTypes.string,
    body: PropTypes.string
  }),
  openChat: PropTypes.func
};

Message.defaultProps = {
  message: null,
  openChat: null
};
