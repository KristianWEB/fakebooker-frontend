import React from "react";
import ContentLoader from "react-content-loader";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import {
  InfoContainer,
  FixedContainer,
  PhotosHeading,
  PhotosContainer,
  Photo,
  PhotosSkeleton,
} from "./PhotosPage.styles";
import { LOAD_USER, GET_POSTS, GET_URL_POSTS } from "../../utils/queries";

const PhotosPage = () => {
  const { data: userData } = useQuery(LOAD_USER);

  const { username } = useParams();

  const { data: postsData, loading: postsLoading } = useQuery(GET_POSTS);

  const { data: urlPostsData, loading: urlPostsLoading } = useQuery(
    GET_URL_POSTS,
    {
      variables: {
        username,
      },
    }
  );

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

  return (
    <InfoContainer>
      <FixedContainer>
        <PhotosHeading>Photos</PhotosHeading>
        <PhotosContainer>
          {!readOnly() &&
            postsData &&
            postsData.getPosts.map(
              (post) => post.image && <Photo key={post.id} src={post.image} />
            )}
          {!readOnly() && postsLoading && (
            <PhotosSkeleton>
              <ContentLoader
                speed={1}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" rx="3" ry="3" />
              </ContentLoader>
            </PhotosSkeleton>
          )}
          {readOnly() &&
            urlPostsData &&
            urlPostsData.getUrlPosts.map(
              (post) => post.image && <Photo key={post.id} src={post.image} />
            )}
          {readOnly() && urlPostsLoading && (
            <PhotosSkeleton>
              <ContentLoader
                speed={1}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" rx="3" ry="3" />
              </ContentLoader>
            </PhotosSkeleton>
          )}
        </PhotosContainer>
      </FixedContainer>
    </InfoContainer>
  );
};

export default PhotosPage;
