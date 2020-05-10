import React from "react";
import moment from "moment/moment";
import { useApolloClient } from "@apollo/react-hooks";
import PropTypes from "prop-types";
import {
  MessageContainer,
  CreatorFullName,
  CreatorAvatar,
  Body,
  Footer,
} from "./Message.styles";

const Message = ({ message: { creator, body, createdAt } }) => {
  const client = useApolloClient();

  return (
    <MessageContainer
      onClick={() =>
        client.writeData({
          data: {
            chat: {
              visible: true,
              __typename: "Chat",
              user: {
                ...creator,
                __typename: "User",
              },
            },
          },
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
};

Message.defaultProps = {
  message: null,
};
