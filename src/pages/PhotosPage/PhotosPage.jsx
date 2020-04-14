import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import {
  InfoContainer,
  FixedContainer,
  PhotosHeading,
  PhotosContainer,
  Photo
} from "./PhotosPage.styles";
import { LOAD_USER, GET_POSTS, GET_URL_POSTS } from "../../utils/queries";

const PhotosPage = () => {
  const { data: userData } = useQuery(LOAD_USER);

  const { username } = useParams();

  const { data: postsData } = useQuery(GET_POSTS);

  const { data: urlPostsData } = useQuery(GET_URL_POSTS, {
    variables: {
      username
    }
  });

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
            postsData.getPosts.map(post => (
              <Photo key={post.id} src={post.image} />
            ))}
          {readOnly() &&
            urlPostsData &&
            urlPostsData.getUrlPosts.map(post => (
              <Photo key={post.id} src={post.image} />
            ))}
        </PhotosContainer>
      </FixedContainer>
    </InfoContainer>
  );
};

export default PhotosPage;
