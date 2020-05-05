import React, { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";
import { useParams } from "react-router-dom";
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
  FixedContainer,
  CreatePostSkeleton,
  AboutSkeleton,
  PostSkeleton,
} from "./ProfilePage.styles";

const ProfilePage = () => {
  const { data: userData } = useQuery(LOAD_USER);
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
        {!pageLoading && userData ? (
          <About
            user={profileData ? profileData.loadFromUrlUser : userData.loadUser}
            readOnly={readOnly()}
          />
        ) : (
          <AboutSkeleton>
            <ContentLoader speed={1}>
              <rect x="0" y="0" rx="5" ry="5" />
            </ContentLoader>
          </AboutSkeleton>
        )}
        <PostsSection>
          {!pageLoading && !readOnly() && userData && (
            <CreatePostDefault user={userData.loadUser} />
          )}
          {!readOnly() && !userData && (
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
          {!postsData && !readOnly() && (
            <>
              <PostSkeleton>
                <ContentLoader
                  speed={2}
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
                  speed={2}
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
                  speed={2}
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
                  speed={2}
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
