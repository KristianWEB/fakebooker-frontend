import React from "react";
// import { useQuery } from "@apollo/react-hooks";
import { notification } from "antd";
import Message from "./Message";
import {
  MessageListContainer,
  MessageListHeading,
  MessageRow,
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
  SubmitMessageBtn
} from "./MessageList.styles";
import { ReactComponent as CloseBtn } from "../../assets/icons/close.svg";
import { ReactComponent as RightArrowBtn } from "../../assets/icons/play.svg";
// import { GET_MESSAGES } from "../../utils/queries";

const MessageList = () => {
  // const { data } = useQuery(GET_MESSAGES);

  // fetch all messages for this creator and display a singleChat ( for authUser and creator )
  const openChat = ({ creator }) => {
    notification.open({
      message: (
        <ChatHeader>
          <CreatorAvatar src={creator.avatarImage} alt="creator avatar" />
          <CreatorFullName>
            {creator.firstName} {creator.lastName}
          </CreatorFullName>
        </ChatHeader>
      ),
      description: (
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
            <AuthUserMessage>
              Wow! Which language did you learn?
            </AuthUserMessage>
          </AuthUserContainer>
          <InputContainer>
            <MessageInput placeholder="Aa" />
            <SubmitMessageBtn type="link">
              <RightArrowBtn width={25} height={25} fill="#0084FF" />
            </SubmitMessageBtn>
          </InputContainer>
        </ChatBodyContainer>
      ),
      placement: "bottomRight",
      style: {
        width: "100%",
        padding: "0px",
        marginLeft: "8px",
        borderRadius: "8px"
      },
      duration: 0,
      closeIcon: (
        <CloseBtn
          width={30}
          height={30}
          fill="#BEC2C9"
          style={{
            marginTop: "-7px"
          }}
        />
      )
    });
  };

  const data = {
    getMessages: [
      {
        id: 1,
        body: "how are you buddy?",
        createdAt: "04/20/2020",
        creator: {
          avatarImage:
            "https://scontent.fsof4-1.fna.fbcdn.net/v/t1.30497-1/c71.0.240.240a/p240x240/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=7206a8&_nc_ohc=CD3ImewvDlgAX8f-QvY&_nc_ht=scontent.fsof4-1.fna&oh=782172992e9272da49f35f7f40ef8d63&oe=5EED0201",
          firstName: "John",
          lastName: "Doe"
        },
        notifier: {
          avatarImage:
            "https://scontent.fsof4-1.fna.fbcdn.net/v/t1.30497-1/c71.0.240.240a/p240x240/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=7206a8&_nc_ohc=CD3ImewvDlgAX8f-QvY&_nc_ht=scontent.fsof4-1.fna&oh=782172992e9272da49f35f7f40ef8d63&oe=5EED0201",
          firstName: "Jack",
          lastName: "Daniels"
        }
      },
      {
        id: 2,
        body: "how are you buddy?",
        createdAt: "04/20/2020",
        creator: {
          avatarImage:
            "https://scontent.fsof4-1.fna.fbcdn.net/v/t1.30497-1/c71.0.240.240a/p240x240/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=7206a8&_nc_ohc=CD3ImewvDlgAX8f-QvY&_nc_ht=scontent.fsof4-1.fna&oh=782172992e9272da49f35f7f40ef8d63&oe=5EED0201",
          firstName: "Jekyll",
          lastName: "Williams"
        },
        notifier: {
          avatarImage:
            "https://scontent.fsof4-1.fna.fbcdn.net/v/t1.30497-1/c71.0.240.240a/p240x240/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=7206a8&_nc_ohc=CD3ImewvDlgAX8f-QvY&_nc_ht=scontent.fsof4-1.fna&oh=782172992e9272da49f35f7f40ef8d63&oe=5EED0201",
          firstName: "Jack",
          lastName: "Daniels"
        }
      },
      {
        id: 3,
        body: "how are you buddy?",
        createdAt: "04/20/2020",
        creator: {
          avatarImage:
            "https://scontent.fsof4-1.fna.fbcdn.net/v/t1.30497-1/c71.0.240.240a/p240x240/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=7206a8&_nc_ohc=CD3ImewvDlgAX8f-QvY&_nc_ht=scontent.fsof4-1.fna&oh=782172992e9272da49f35f7f40ef8d63&oe=5EED0201",
          firstName: "Chris",
          lastName: "McaVoy"
        },
        notifier: {
          avatarImage:
            "https://scontent.fsof4-1.fna.fbcdn.net/v/t1.30497-1/c71.0.240.240a/p240x240/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=7206a8&_nc_ohc=CD3ImewvDlgAX8f-QvY&_nc_ht=scontent.fsof4-1.fna&oh=782172992e9272da49f35f7f40ef8d63&oe=5EED0201",
          firstName: "Jack",
          lastName: "Daniels"
        }
      },
      {
        id: 4,
        body: "how are you buddy?",
        createdAt: "04/20/2020",
        creator: {
          avatarImage:
            "https://scontent.fsof4-1.fna.fbcdn.net/v/t1.30497-1/c71.0.240.240a/p240x240/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=7206a8&_nc_ohc=CD3ImewvDlgAX8f-QvY&_nc_ht=scontent.fsof4-1.fna&oh=782172992e9272da49f35f7f40ef8d63&oe=5EED0201",
          firstName: "John",
          lastName: "Doe"
        },
        notifier: {
          avatarImage:
            "https://scontent.fsof4-1.fna.fbcdn.net/v/t1.30497-1/c71.0.240.240a/p240x240/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=7206a8&_nc_ohc=CD3ImewvDlgAX8f-QvY&_nc_ht=scontent.fsof4-1.fna&oh=782172992e9272da49f35f7f40ef8d63&oe=5EED0201",
          firstName: "Jack",
          lastName: "Daniels"
        }
      }
    ]
  };

  return (
    <MessageListContainer>
      <MessageListHeading>Messenger</MessageListHeading>
      <MessageRow>
        {data.getMessages.map(message => (
          <Message key={message.id} message={message} openChat={openChat} />
        ))}
      </MessageRow>
    </MessageListContainer>
  );
};

export default MessageList;
