import React, { useState, useEffect } from "react";
import { useQuery, useApolloClient } from "@apollo/react-hooks";
import ContentLoader from "react-content-loader";
import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import CreatePostDefault from "../../components/Post/CreatePostDefault";
import { LOAD_USER, GET_NEWSFEED, NEW_POST } from "../../utils/queries";
import {
  InfoContainer,
  PostsSection,
  PostContainer,
  ContactsSidebar,
  ContactsContainer,
  CreatePostSkeleton,
  ContactsHeader,
  ContactsHeading,
  ContactsBody,
  ContactAvatar,
  ContactFullName,
  NavbarSkeleton,
  PostSkeleton,
  ContactSkeleton,
} from "./NewsfeedPage.styles";

const NewsfeedPage = () => {
  const { data: userData } = useQuery(LOAD_USER);
  const client = useApolloClient();
  const [pageLoading, setPageLoading] = useState(true);
  const { data: newsfeedData, subscribeToMore, loading } = useQuery(
    GET_NEWSFEED,
    {
      fetchPolicy: "network-only",
    }
  );

  useEffect(() => {
    setPageLoading(false);
    subscribeToMore({
      document: NEW_POST,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const post = subscriptionData.data.newPost;
        return { getNewsfeed: [post, ...prev.getNewsfeed] };
      },
    });
  }, [subscribeToMore]);

  return (
    <>
      {!pageLoading && userData ? (
        <Navbar user={userData.loadUser} />
      ) : (
        <NavbarSkeleton>
          <ContentLoader speed={1}>
            <rect x="0" y="0" rx="5" ry="5" />
          </ContentLoader>
        </NavbarSkeleton>
      )}
      <InfoContainer>
        <PostContainer>
          <PostsSection>
            {!pageLoading && !loading && userData ? (
              <CreatePostDefault user={userData.loadUser} onNewsfeed />
            ) : (
              <CreatePostSkeleton>
                <ContentLoader speed={1}>
                  <rect x="0" y="0" rx="5" ry="5" />
                </ContentLoader>
              </CreatePostSkeleton>
            )}
            {newsfeedData && !pageLoading && !loading && userData ? (
              newsfeedData.getNewsfeed.map((post) => (
                <Post
                  key={post.id}
                  post={post}
                  user={userData.loadUser}
                  onNewsfeed
                />
              ))
            ) : (
              <>
                <PostSkeleton>
                  <ContentLoader
                    speed={1}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                  >
                    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
                    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
                    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
                    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
                    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
                    <circle cx="22" cy="21" r="20" />
                  </ContentLoader>
                </PostSkeleton>
                <PostSkeleton>
                  <ContentLoader
                    speed={1}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                  >
                    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
                    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
                    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
                    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
                    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
                    <circle cx="22" cy="21" r="20" />
                  </ContentLoader>
                </PostSkeleton>
                <PostSkeleton>
                  <ContentLoader
                    speed={1}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                  >
                    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
                    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
                    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
                    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
                    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
                    <circle cx="22" cy="21" r="20" />
                  </ContentLoader>
                </PostSkeleton>
                <PostSkeleton>
                  <ContentLoader
                    speed={1}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                  >
                    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
                    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
                    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
                    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
                    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
                    <circle cx="22" cy="21" r="20" />
                  </ContentLoader>
                </PostSkeleton>
              </>
            )}
          </PostsSection>
        </PostContainer>
      </InfoContainer>
      <ContactsSidebar>
        <ContactsContainer>
          <ContactsHeader>
            <ContactsHeading>Contacts</ContactsHeading>
          </ContactsHeader>
          {userData && !pageLoading ? (
            userData.loadUser.friends.map((friend) => (
              <ContactsBody
                key={friend.id}
                onClick={() =>
                  client.writeData({
                    data: {
                      chat: {
                        visible: true,
                        __typename: "Chat",
                        user: {
                          ...friend,
                          __typename: "User",
                        },
                      },
                    },
                  })
                }
              >
                <ContactAvatar src={friend.avatarImage} alt="contact avatar" />
                <ContactFullName>
                  {friend.firstName} {friend.lastName}
                </ContactFullName>
              </ContactsBody>
            ))
          ) : (
            <>
              <ContactSkeleton>
                <ContentLoader
                  speed={1}
                  width={304}
                  height={52}
                  viewBox="0 0 304 52"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="48" y="13" rx="3" ry="3" width="120" height="8" />
                  <circle cx="20" cy="20" r="20" />
                </ContentLoader>
              </ContactSkeleton>
              <ContactSkeleton>
                <ContentLoader
                  speed={1}
                  width={304}
                  height={52}
                  viewBox="0 0 304 52"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="48" y="13" rx="3" ry="3" width="120" height="8" />
                  <circle cx="20" cy="20" r="20" />
                </ContentLoader>
              </ContactSkeleton>
              <ContactSkeleton>
                <ContentLoader
                  speed={1}
                  width={304}
                  height={52}
                  viewBox="0 0 304 52"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="48" y="13" rx="3" ry="3" width="120" height="8" />
                  <circle cx="20" cy="20" r="20" />
                </ContentLoader>
              </ContactSkeleton>
            </>
          )}
        </ContactsContainer>
      </ContactsSidebar>
    </>
  );
};

export default NewsfeedPage;
