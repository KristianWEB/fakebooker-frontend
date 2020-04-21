import React from "react";
import PropTypes from "prop-types";
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

const SingleChat = ({ creator, setOpenChat }) => {

  const createMessage = e => {
    e.preventDefault();
    console.log("alsdjf");
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
        <CreatorContainer>
          <CreatorImg src={creator.avatarImage} />
          <CreatorMessage>How are you buddy?</CreatorMessage>
        </CreatorContainer>
        <AuthUserContainer>
          <AuthUserMessage>I am good</AuthUserMessage>
        </AuthUserContainer>
        <AuthUserContainer>
          <AuthUserMessage>What about you?</AuthUserMessage>
        </AuthUserContainer>
        <CreatorContainer>
          <CreatorImg src={creator.avatarImage} />
          <CreatorMessage>
            I have just learnt how to code and it is amazing!
          </CreatorMessage>
        </CreatorContainer>
        <AuthUserContainer>
          <AuthUserMessage>Wow! Which language did you learn?</AuthUserMessage>
        </AuthUserContainer>
        <InputContainer onSubmit={createMessage}>
          <MessageInput placeholder="Aa" />
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
