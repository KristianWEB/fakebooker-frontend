import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useMutation, useQuery } from "@apollo/react-hooks";
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
  NEW_MESSAGE
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

  const { data: conversationData, subscribeToMore } = useQuery(
    GET_SINGLE_CHAT,
    {
      variables: {
        threadId:
          getThreadData && getThreadData.getThread && getThreadData.getThread.id
      }
    }
  );

  useEffect(() => {
    subscribeToMore({
      document: NEW_MESSAGE,
      // eslint-disable-next-line consistent-return
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        if (authUser) {
          // check  if the creator and the notifier of the message are either url user / auth user
          // this is going to be fixed later as I dont know any better solution yet.
          if (
            (subscriptionData.data.newMessage.notifier.id === creator.id &&
              subscriptionData.data.newMessage.creator.id ===
                authUser.loadUser.id) ||
            (subscriptionData.data.newMessage.notifier.id ===
              authUser.loadUser.id &&
              subscriptionData.data.newMessage.creator.id === creator.id)
          ) {
            const msg = subscriptionData.data.newMessage;
            return { getSingleChat: [...prev.getSingleChat, msg] };
          }
        }
      }
    });
  }, [subscribeToMore, authUser, creator]);

  const [createMessage] = useMutation(CREATE_MESSAGE, {
    variables: {
      notifier: creator.id,
      body: message,
      threadId: threadData && threadData.createThread.id
    }
  });

  const onSubmit = async e => {
    e.preventDefault();
    await createThread();
    createMessage();
    setMessage("");
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
