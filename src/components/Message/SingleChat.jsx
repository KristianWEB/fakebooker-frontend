import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation, useQuery, useSubscription } from "@apollo/react-hooks";
import {
  ChatContainer,
  ChatHeader,
  CreatorAvatar,
  CreatorFullName,
  ChatBodyContainer,
  CreatorContainer,
  AuthUserContainer,
  CreatorImg,
  CreatorMessage,
  AuthUserMessage,
  InputContainer,
  MessageInput,
  SubmitMessageBtn,
  CloseContainer
} from "./SingleChat.styles";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as RightArrowBtn } from "../../assets/icons/play.svg";
import {
  CREATE_MESSAGE,
  LOAD_USER,
  CREATE_THREAD,
  GET_SINGLE_CHAT,
  GET_THREAD,
  MESSAGE_SUBSCRIPTION
} from "../../utils/queries";

const SingleChat = ({ creator, setOpenChat }) => {
  const [message, setMessage] = useState("");

  const { data: authUser } = useQuery(LOAD_USER);

  const [createThread, { data: threadData }] = useMutation(CREATE_THREAD, {
    variables: {
      urlUser: creator.id
    }
  });
  // get thread if it exists
  const { data: getThreadData } = useQuery(GET_THREAD, {
    variables: {
      urlUser: creator.id
    }
  });

  const { data: conversationData } = useQuery(GET_SINGLE_CHAT, {
    variables: {
      threadId: getThreadData && getThreadData.getThread.id
    }
  });

  // url profile user / user who created it
  // subscriptions left
  // useSubscription(MESSAGE_SUBSCRIPTION, {
  //   variables: {
  //     notifier: creator.id
  //   }
  // });

  const [createMessage] = useMutation(CREATE_MESSAGE, {
    variables: {
      notifier: creator.id,
      body: message,
      threadId: threadData && threadData.createThread.id
    },
    update: async (proxy, result) => {
      const data = proxy.readQuery({
        query: GET_SINGLE_CHAT,
        variables: {
          threadId: threadData.createThread.id
        }
      });
      const newData = {
        getSingleChat: [...data.getSingleChat, result.data.createMessage]
      };

      proxy.writeQuery({
        query: GET_SINGLE_CHAT,
        data: newData,
        variables: {
          threadId: threadData.createThread.id
        }
      });
    }
  });

  const onSubmit = async e => {
    e.preventDefault();
    await createThread();
    createMessage();
  };

  return (
    <ChatContainer>
      <ChatHeader>
        <CreatorAvatar src={creator.avatarImage} alt="creator avatar" />
        <CreatorFullName>
          {creator.firstName} {creator.lastName}
        </CreatorFullName>
        <CloseContainer
          onClick={() =>
            setOpenChat({
              visible: false
            })
          }
        >
          <CloseIcon width={25} height={25} fill="#BEC2C9" />
        </CloseContainer>
      </ChatHeader>
      <ChatBodyContainer>
        {conversationData &&
          conversationData.getSingleChat.map(m =>
            m.creator.id === authUser.loadUser.id ? (
              <AuthUserContainer key={m.id}>
                <AuthUserMessage>{m.body}</AuthUserMessage>
              </AuthUserContainer>
            ) : (
              <CreatorContainer key={m.id}>
                <CreatorImg src={m.creator.avatarImage} />
                <CreatorMessage>{m.body}</CreatorMessage>
              </CreatorContainer>
            )
          )}
        <InputContainer onSubmit={onSubmit}>
          <MessageInput
            placeholder="Aa"
            onChange={e => setMessage(e.target.value)}
            value={message}
          />
          <SubmitMessageBtn type="link" htmlType="submit">
            <RightArrowBtn width={25} height={25} fill="#0084FF" />
          </SubmitMessageBtn>
        </InputContainer>
      </ChatBodyContainer>
    </ChatContainer>
  );
};

export default SingleChat;

SingleChat.propTypes = {
  creator: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    avatarImage: PropTypes.string
  }),
  setOpenChat: PropTypes.func
};

SingleChat.defaultProps = {
  creator: null,
  setOpenChat: null
};
