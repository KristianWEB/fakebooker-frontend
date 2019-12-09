import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  CREATE_POST,
  GET_POSTS_BY_USERNAME,
  LOAD_USER
} from "../../utils/graphql/queries";

import {
  AvatarImage,
  AvatarImageMobile,
  Header,
  PostForm,
  PostFormBody,
  PostFormBodyMobile,
  PostFormContainer,
  PostInput,
  PostTextArea,
  PublishPostButton,
  PublishPostButtonMobile
} from "./CreatePost.styles";

const CreatePost = () => {
  const [post, setPost] = useState({
    content: ""
  });

  const onChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const { content } = post;

  const { data: userData } = useQuery(LOAD_USER);

  const [createPost] = useMutation(CREATE_POST, {
    variables: {
      content
    },
    update: async (proxy, result) => {
      const data = proxy.readQuery({
        query: GET_POSTS_BY_USERNAME,
        variables: {
          username: userData.loadUser.username
        }
      });
      const newData = { getPosts: [result.data.createPost, ...data.getPosts] };

      proxy.writeQuery({
        query: GET_POSTS_BY_USERNAME,
        variables: { username: userData.loadUser.username },
        data: newData
      });
    }
  });

  const onSubmit = e => {
    e.preventDefault();
    createPost();
  };

  return (
    <>
      {userData && (
        <PostFormContainer>
          <PostForm onSubmit={onSubmit}>
            <Header>Create a post</Header>
            <PostFormBody>
              <AvatarImage src={userData.loadUser.coverImage} alt="profile" />
              <PostTextArea
                rows={1}
                name="content"
                placeholder={`What are you thinking, ${userData.loadUser.username}`}
                onChange={onChange}
              />
            </PostFormBody>

            <PostFormBodyMobile>
              <AvatarImageMobile
                src={`${userData.loadUser.coverImage}`}
                alt="profile"
              />
              <PostInput
                placeholder={`What are you thinking, ${userData.loadUser.username}`}
              />
              <PublishPostButtonMobile type="primary">
                Publish
              </PublishPostButtonMobile>
            </PostFormBodyMobile>

            <PublishPostButton type="primary" htmlType="submit">
              Publish
            </PublishPostButton>
          </PostForm>
        </PostFormContainer>
      )}
    </>
  );
};
export default CreatePost;
