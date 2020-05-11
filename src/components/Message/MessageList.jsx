import React from "react";
import ContentLoader from "react-content-loader";
import { useQuery } from "@apollo/react-hooks";
import Message from "./Message";
import {
  MessageListContainer,
  MessageListHeading,
  MessageRow,
  MessageListSkeleton,
} from "./MessageList.styles";
import { GET_CONVERSATIONS } from "../../utils/queries";

const MessageList = () => {
  const { data, loading } = useQuery(GET_CONVERSATIONS);

  return (
    <MessageListContainer>
      <MessageListHeading>Messenger</MessageListHeading>
      {!loading ? (
        <MessageRow>
          {data &&
            data.getConversations.map((conversation) => (
              // eslint-disable-next-line no-underscore-dangle
              <Message key={conversation._id} conversation={conversation} />
            ))}
        </MessageRow>
      ) : (
        <MessageListSkeleton>
          <ContentLoader
            speed={1}
            width={328}
            height={72}
            viewBox="0 0 328 72"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="65" y="15" rx="3" ry="3" width="88" height="8" />
            <rect x="65" y="35" rx="3" ry="3" width="120" height="6" />
            <rect x="200" y="35" rx="3" ry="3" width="35" height="6" />
            <circle cx="28" cy="28" r="28" />
          </ContentLoader>
          <ContentLoader
            speed={1}
            width={328}
            height={72}
            viewBox="0 0 328 72"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="65" y="15" rx="3" ry="3" width="88" height="8" />
            <rect x="65" y="35" rx="3" ry="3" width="120" height="6" />
            <rect x="200" y="35" rx="3" ry="3" width="35" height="6" />
            <circle cx="28" cy="28" r="28" />
          </ContentLoader>
          <ContentLoader
            speed={1}
            width={328}
            height={72}
            viewBox="0 0 328 72"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="65" y="15" rx="3" ry="3" width="88" height="8" />
            <rect x="65" y="35" rx="3" ry="3" width="120" height="6" />
            <rect x="200" y="35" rx="3" ry="3" width="35" height="6" />
            <circle cx="28" cy="28" r="28" />
          </ContentLoader>
        </MessageListSkeleton>
      )}
    </MessageListContainer>
  );
};

export default MessageList;
