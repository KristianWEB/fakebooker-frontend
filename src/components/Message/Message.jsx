/* eslint-disable no-underscore-dangle */
import React from "react";
import moment from "moment/moment";
import { useApolloClient, useQuery } from "@apollo/react-hooks";
import PropTypes from "prop-types";
import {
  MessageContainer,
  NotifierFullName,
  NotifierAvatar,
  Body,
  Footer,
} from "./Message.styles";
import { LOAD_USER } from "../../utils/queries";

const Message = ({
  conversation: {
    latestMessage: { creator, notifier, body, createdAt },
  },
}) => {
  const client = useApolloClient();

  const { data: authData } = useQuery(LOAD_USER);

  return (
    <MessageContainer
      onClick={() => {
        if (authData) {
          const userB =
            authData.loadUser.id === creator._id ? notifier : creator;

          client.writeData({
            data: {
              chat: {
                visible: true,
                __typename: "Chat",
                user: {
                  ...userB,
                  // eslint-disable-next-line no-underscore-dangle
                  id: userB._id,
                  __typename: "User",
                },
              },
            },
          });
        }
      }}
    >
      {authData && authData.loadUser.id === notifier._id && (
        <>
          <NotifierAvatar src={creator.avatarImage} />
          <Body>
            <NotifierFullName>
              {creator.firstName} {creator.lastName}
            </NotifierFullName>
            <Footer>
              {body} · {moment(Number(createdAt)).fromNow()}
            </Footer>
          </Body>
        </>
      )}
      {authData && authData.loadUser.id === creator._id && (
        <>
          <NotifierAvatar src={notifier.avatarImage} />
          <Body>
            <NotifierFullName>
              {notifier.firstName} {notifier.lastName}
            </NotifierFullName>
            <Footer>
              {body} · {moment(Number(createdAt)).fromNow()}
            </Footer>
          </Body>
        </>
      )}
    </MessageContainer>
  );
};

export default Message;

Message.propTypes = {
  conversation: PropTypes.shape({
    latestMessage: PropTypes.shape({
      creator: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        avatarImage: PropTypes.string,
      }),
      notifier: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        avatarImage: PropTypes.string,
      }),
      createdAt: PropTypes.string,
      body: PropTypes.string,
    }),
  }),
};

Message.defaultProps = {
  conversation: null,
};
