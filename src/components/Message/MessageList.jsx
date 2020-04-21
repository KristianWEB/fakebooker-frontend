import React from "react";
import { useQuery } from "@apollo/react-hooks";
import PropTypes from "prop-types";
import Message from "./Message";
import {
  MessageListContainer,
  MessageListHeading,
  MessageRow
} from "./MessageList.styles";
import { GET_MESSAGES } from "../../utils/queries";

const MessageList = ({ setOpenChat }) => {
  const { data } = useQuery(GET_MESSAGES);

  return (
    <MessageListContainer>
      <MessageListHeading>Messenger</MessageListHeading>
      <MessageRow>
        {data &&
          data.getMessages.map(message => (
            <Message
              key={message.id}
              message={message}
              setOpenChat={setOpenChat}
            />
          ))}
      </MessageRow>
    </MessageListContainer>
  );
};

export default MessageList;

MessageList.propTypes = {
  setOpenChat: PropTypes.func
};

MessageList.defaultProps = {
  setOpenChat: null
};
