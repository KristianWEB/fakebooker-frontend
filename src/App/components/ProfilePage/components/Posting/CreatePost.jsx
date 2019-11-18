import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost, getPosts } from "../../../../actions/post";
import {
  CREATE_POST,
  GET_POSTS_BY_USERNAME
} from "../../../../graphql/queries";

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

const CreatePost = ({
  addPostConnect,
  getPostsConnect,
  user,
  name,
  profileImage
}) => {
  const [post, setPost] = useState({
    content: ""
  });

  const onChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const { content } = post;

  const [createPost, { error }] = useMutation(CREATE_POST, {
    variables: {
      content,
      username: "kristian"
    },
    update: async (proxy, result) => {
      const data = proxy.readQuery({
        query: GET_POSTS_BY_USERNAME,
        variables: {
          username: user.username
        }
      });

      data.getPosts = [result.data.createPost, ...data.getPosts];
      proxy.writeQuery({
        query: GET_POSTS_BY_USERNAME,
        variables: { username: user.username },
        data
      });
      await getPostsConnect(data);
    }
  });

  const onSubmit = e => {
    e.preventDefault();
    createPost();
  };

  return (
    <PostFormContainer>
      <PostForm onSubmit={onSubmit}>
        <Header>Create a post</Header>
        <PostFormBody>
          <AvatarImage src={profileImage} alt="profile" />
          <PostTextArea
            rows={1}
            name="content"
            placeholder={`What are you thinking, ${name}?`}
            onChange={onChange}
          />
        </PostFormBody>

        <PostFormBodyMobile>
          <AvatarImageMobile src={profileImage} alt="profile" />
          <PostInput placeholder={`What are you thinking, ${name}?`} />
          <PublishPostButtonMobile type="primary">
            Publish
          </PublishPostButtonMobile>
        </PostFormBodyMobile>

        <PublishPostButton type="primary" htmlType="submit">
          Publish
        </PublishPostButton>
      </PostForm>
    </PostFormContainer>
  );
};

CreatePost.propTypes = {
  name: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.loadUser
});

export default connect(
  mapStateToProps,
  {
    addPostConnect: addPost,
    getPostsConnect: getPosts
  }
)(CreatePost);
