import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { Row } from "antd";
import SingleChat from "../../components/Message/SingleChat";
import CreatePostDefault from "../../components/Post/CreatePostDefault";
import Post from "../../components/Post/Post";
import About from "../../components/About/About";
import {
  LOAD_USER,
  GET_POSTS,
  GET_URL_POSTS,
  LOAD_FROM_URL_USER
} from "../../utils/queries";
import {
  InfoContainer,
  PostsSection,
  FixedContainer
} from "./ProfilePage.styles";

const ProfilePage = () => {
  const { data: userData } = useQuery(LOAD_USER);

  const [openChat, setOpenChat] = useState({
    visible: false,
    creator: null
  });

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
      username
    },
    skip: !readOnly()
  });

  const { data: postsData } = useQuery(GET_POSTS, {
    skip: readOnly()
  });

  const { data: urlPostsData } = useQuery(GET_URL_POSTS, {
    variables: {
      username
    },
    skip: !readOnly()
  });

  return (
    <>
      {userData && (
        <Row>
          <InfoContainer>
            <FixedContainer>
              <About
                user={
                  profileData ? profileData.loadFromUrlUser : userData.loadUser
                }
                readOnly={readOnly()}
              />
              <PostsSection>
                {!readOnly() && <CreatePostDefault user={userData.loadUser} />}
                {!readOnly() &&
                  postsData &&
                  postsData.getPosts.map(post => (
                    <Post key={post.id} post={post} user={userData.loadUser} />
                  ))}
                {readOnly() &&
                  urlPostsData &&
                  urlPostsData.getUrlPosts.map(post => (
                    <Post
                      key={post.id}
                      post={post}
                      user={userData.loadUser}
                      readOnly
                    />
                  ))}
              </PostsSection>
            </FixedContainer>
          </InfoContainer>
          {openChat.visible && (
            <SingleChat creator={openChat.creator} setOpenChat={setOpenChat} />
          )}
        </Row>
      )}
    </>
  );
};

export default ProfilePage;
