import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Row } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import SingleChat from "../../components/Message/SingleChat";
import Post from "../../components/Post/Post";
import { LOAD_USER, GET_NEWSFEED, NEW_POST } from "../../utils/queries";
import {
  InfoContainer,
  PostsSection,
  PostContainer,
  ContactsSidebar,
  ContactsContainer,
  ContactsHeader,
  ContactsHeading,
  ContactsBody,
  ContactAvatar,
  ContactFullName
} from "./NewsfeedPage.styles";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-outline.svg";

const NewsfeedPage = () => {
  const { data: userData } = useQuery(LOAD_USER);
  const [openChat, setOpenChat] = useState({
    visible: false,
    creator: null
  });
  const { data: newsfeedData, subscribeToMore } = useQuery(GET_NEWSFEED);

  useEffect(() => {
    subscribeToMore({
      document: NEW_POST,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const post = subscriptionData.data.newPost;
        return { getNewsfeed: [post, ...prev.getNewsfeed] };
      }
    });
  }, [subscribeToMore]);

  return (
    <>
      {userData && (
        <Row>
          <Navbar user={userData.loadUser} setOpenChat={setOpenChat} />
          <InfoContainer>
            <PostContainer>
              <PostsSection>
                {newsfeedData &&
                  newsfeedData.getNewsfeed.map(post => (
                    <Post
                      key={post.id}
                      post={post}
                      user={userData.loadUser}
                      onNewsfeed
                    />
                  ))}
              </PostsSection>
            </PostContainer>
            <ContactsSidebar>
              <ContactsContainer>
                <ContactsHeader>
                  <ContactsHeading>Contacts</ContactsHeading>
                  <SearchIcon width={25} height={25} />
                </ContactsHeader>
                {userData.loadUser.friends.map(friend => (
                  <ContactsBody
                    key={friend.id}
                    onClick={() =>
                      setOpenChat({
                        visible: true,
                        creator: friend
                      })
                    }
                  >
                    <ContactAvatar
                      src={friend.avatarImage}
                      alt="contact avatar"
                    />
                    <ContactFullName>
                      {friend.firstName} {friend.lastName}
                    </ContactFullName>
                  </ContactsBody>
                ))}
              </ContactsContainer>
            </ContactsSidebar>
          </InfoContainer>
          {openChat.visible && (
            <SingleChat creator={openChat.creator} setOpenChat={setOpenChat} />
          )}
        </Row>
      )}
    </>
  );
};

export default NewsfeedPage;
