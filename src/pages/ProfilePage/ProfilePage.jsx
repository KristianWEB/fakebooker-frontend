import React, { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import CreatePostDefault from "../../components/Post/CreatePostDefault";
import Post from "../../components/Post/Post";
import About from "../../components/About/About";
import {
  LOAD_USER,
  GET_POSTS,
  GET_URL_POSTS,
  LOAD_FROM_URL_USER,
} from "../../utils/queries";
import {
  InfoContainer,
  PostsSection,
  AboutInfoContainer,
  Friends,
  FriendsGrid,
  FriendsHeading,
  FriendContainer,
  FriendAvatar,
  FriendFullname,
  CreatePostMobile,
  CreatePostDesktop,
  PhotosGrid,
  FixedContainer,
  Photos,
  PhotosHeading,
  Photo,
  CreatePostSkeleton,
  AboutSkeleton,
  PostSkeleton,
} from "./ProfilePage.styles";

const ProfilePage = () => {
  const { data: userData, loading: authUserLoading } = useQuery(LOAD_USER);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setPageLoading(false);
  }, []);

  const { username } = useParams();
  /* eslint-disable consistent-return */
  const readOnly = () => {
    if (userData) {
      if (userData.loadUser.username !== username) {
        return true;
        // eslint-disable-next-line no-else-return
      } else {
        return false;
      }
    }
  };

  // skip this when viewed on auth profile
  const { data: profileData } = useQuery(LOAD_FROM_URL_USER, {
    variables: {
      username,
    },
    skip: !readOnly(),
  });

  const { data: postsData } = useQuery(GET_POSTS, {
    skip: readOnly(),
  });

  const { data: urlPostsData } = useQuery(GET_URL_POSTS, {
    variables: {
      username,
    },
    skip: !readOnly(),
  });

  return (
    <InfoContainer>
      <FixedContainer>
        {!pageLoading && !readOnly() && userData && (
          <CreatePostMobile>
            <CreatePostDefault user={userData.loadUser} />
          </CreatePostMobile>
        )}
        <AboutInfoContainer>
          {!pageLoading && userData && !readOnly() && (
            <About user={userData.loadUser} readOnly={readOnly()} />
          )}
          {!pageLoading && !userData && !readOnly() && (
            <AboutSkeleton>
              <ContentLoader speed={1}>
                <rect x="0" y="0" rx="5" ry="5" />
              </ContentLoader>
            </AboutSkeleton>
          )}
          {!pageLoading && profileData && readOnly() && (
            <About user={profileData.loadFromUrlUser} readOnly={readOnly()} />
          )}
          {!pageLoading && !profileData && readOnly() && (
            <AboutSkeleton>
              <ContentLoader speed={1}>
                <rect x="0" y="0" rx="5" ry="5" />
              </ContentLoader>
            </AboutSkeleton>
          )}
          {!pageLoading && postsData && !readOnly() && (
            <Photos>
              <PhotosHeading>Photos</PhotosHeading>
              <PhotosGrid>
                {postsData.getPosts.map(
                  (post) =>
                    post.image && (
                      <Link to={`/post/${post.id}`} key={post.id}>
                        <Photo src={post.image} />
                      </Link>
                    )
                )}
              </PhotosGrid>
            </Photos>
          )}
          {!pageLoading && !postsData && !readOnly() && (
            <AboutSkeleton style={{ marginTop: "16px" }}>
              <ContentLoader speed={1}>
                <rect x="0" y="0" rx="5" ry="5" />
              </ContentLoader>
            </AboutSkeleton>
          )}
          {!pageLoading && urlPostsData && userData && readOnly() && (
            <Photos>
              <PhotosHeading>Photos</PhotosHeading>
              <PhotosGrid>
                {urlPostsData.getUrlPosts.map(
                  (post) =>
                    post.image && (
                      <Link to={`/post/${post.id}`} key={post.id}>
                        <Photo src={post.image} />
                      </Link>
                    )
                )}
              </PhotosGrid>
            </Photos>
          )}
          {!pageLoading && !urlPostsData && userData && readOnly() && (
            <AboutSkeleton style={{ marginTop: "16px" }}>
              <ContentLoader speed={1}>
                <rect x="0" y="0" rx="5" ry="5" />
              </ContentLoader>
            </AboutSkeleton>
          )}
          {!pageLoading && userData && !readOnly() && (
            <Friends>
              <FriendsHeading>Friends</FriendsHeading>
              <FriendsGrid>
                {userData.loadUser.friends.map((friend) => (
                  <Link to={`/${friend.username}`} key={friend.id}>
                    <FriendContainer>
                      <FriendAvatar src={friend.avatarImage} />
                      <FriendFullname>
                        {friend.firstName} {friend.lastName}
                      </FriendFullname>
                    </FriendContainer>
                  </Link>
                ))}
              </FriendsGrid>
            </Friends>
          )}
          {!pageLoading && !userData && !readOnly() && (
            <AboutSkeleton style={{ marginTop: "16px" }}>
              <ContentLoader speed={1}>
                <rect x="0" y="0" rx="5" ry="5" />
              </ContentLoader>
            </AboutSkeleton>
          )}
          {!pageLoading && profileData && readOnly() && (
            <Friends>
              <FriendsHeading>Friends</FriendsHeading>
              <FriendsGrid>
                {profileData.loadFromUrlUser.friends.map((friend) => (
                  <Link to={`/${friend.username}`} key={friend.id}>
                    <FriendContainer>
                      <FriendAvatar src={friend.avatarImage} />
                      <FriendFullname>
                        {friend.firstName} {friend.lastName}
                      </FriendFullname>
                    </FriendContainer>
                  </Link>
                ))}
              </FriendsGrid>
            </Friends>
          )}
          {!pageLoading && !profileData && readOnly() && (
            <AboutSkeleton style={{ marginTop: "16px" }}>
              <ContentLoader speed={1}>
                <rect x="0" y="0" rx="5" ry="5" />
              </ContentLoader>
            </AboutSkeleton>
          )}
        </AboutInfoContainer>
        <PostsSection>
          {!pageLoading && !readOnly() && userData && (
            <CreatePostDesktop>
              <CreatePostDefault user={userData.loadUser} />
            </CreatePostDesktop>
          )}
          {!readOnly() && !userData && !pageLoading && (
            <CreatePostSkeleton>
              <ContentLoader speed={1}>
                <rect x="0" y="0" rx="5" ry="5" />
              </ContentLoader>
            </CreatePostSkeleton>
          )}
          {!pageLoading &&
            !readOnly() &&
            postsData &&
            userData &&
            postsData.getPosts.map((post) => (
              <Post key={post.id} post={post} user={userData.loadUser} />
            ))}
          {!postsData && !readOnly() && authUserLoading && (
            <>
              <PostSkeleton>
                <ContentLoader
                  speed={1}
                  width={400}
                  height={160}
                  viewBox="0 0 400 160"
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
                  width={400}
                  height={160}
                  viewBox="0 0 400 160"
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
          {readOnly() &&
            urlPostsData &&
            userData &&
            urlPostsData.getUrlPosts.map((post) => (
              <Post
                key={post.id}
                post={post}
                user={userData.loadUser}
                readOnly
              />
            ))}
          {!urlPostsData && readOnly() && (
            <>
              <PostSkeleton>
                <ContentLoader
                  speed={1}
                  width={400}
                  height={160}
                  viewBox="0 0 400 160"
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
                  width={400}
                  height={160}
                  viewBox="0 0 400 160"
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
      </FixedContainer>
    </InfoContainer>
  );
};

export default ProfilePage;
