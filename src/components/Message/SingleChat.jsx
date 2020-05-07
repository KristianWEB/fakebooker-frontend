import React, { useEffect } from "react";
import ContentLoader from "react-content-loader";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  ChatBodySkeleton,
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
  CloseContainer,
} from "./SingleChat.styles";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as RightArrowBtn } from "../../assets/icons/play.svg";
import {
  CREATE_MESSAGE,
  LOAD_USER,
  CREATE_THREAD,
  GET_SINGLE_CHAT,
  GET_THREAD,
  NEW_MESSAGE,
} from "../../utils/queries";

const SingleChat = ({ creator, setOpenChat }) => {
  const { register, setValue, watch, handleSubmit } = useForm();

  const { data: authUser } = useQuery(LOAD_USER);

  const [createThread, { data: threadData }] = useMutation(CREATE_THREAD, {
    variables: {
      urlUser: creator.id,
    },
  });
  // get thread if it exists
  const { data: getThreadData } = useQuery(GET_THREAD, {
    variables: {
      urlUser: creator.id,
    },
  });

  const {
    data: conversationData,
    subscribeToMore,
    loading: conversationLoading,
  } = useQuery(GET_SINGLE_CHAT, {
    variables: {
      threadId:
        getThreadData && getThreadData.getThread && getThreadData.getThread.id,
    },
  });

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
      },
    });
  }, [subscribeToMore, authUser, creator]);

  const [createMessage] = useMutation(CREATE_MESSAGE, {
    variables: {
      notifier: creator.id,
      body: watch("message"),
      threadId: threadData && threadData.createThread.id,
    },
  });

  const onSubmit = async () => {
    await createThread();
    createMessage();
    setValue("message", "");
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
              visible: false,
            })
          }
        >
          <CloseIcon width={25} height={25} fill="#BEC2C9" />
        </CloseContainer>
      </ChatHeader>
      <ChatBodyContainer>
        {!conversationLoading ? (
          <>
            {conversationData &&
              conversationData.getSingleChat.map((m) =>
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
          </>
        ) : (
          <ChatBodySkeleton>
            <ContentLoader
              speed={1}
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="55" y="21" rx="3" ry="3" width="117" height="14" />
              <circle cx="25" cy="28" r="20" />
              <circle cx="285" cy="75" r="20" />
              <rect x="180" y="72" rx="3" ry="3" width="78" height="13" />
              <rect x="55" y="120" rx="3" ry="3" width="76" height="14" />
              <circle cx="25" cy="127" r="20" />
            </ContentLoader>
          </ChatBodySkeleton>
        )}
        <InputContainer onSubmit={handleSubmit(onSubmit)}>
          <MessageInput placeholder="Aa" name="message" ref={register} />
          <SubmitMessageBtn
            type="link"
            htmlType="submit"
            disabled={!watch("message")}
          >
            <RightArrowBtn width={25} height={25} />
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
    avatarImage: PropTypes.string,
  }),
  setOpenChat: PropTypes.func,
};

SingleChat.defaultProps = {
  creator: null,
  setOpenChat: null,
};
