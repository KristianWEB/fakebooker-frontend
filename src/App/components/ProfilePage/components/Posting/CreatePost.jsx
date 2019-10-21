import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost as addingPost } from "../../../../actions/post";

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

const CreatePost = ({ addPost, name, profileImage }) => {
  const [post, setPost] = useState({
    content: ""
  });

  const onChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();

    const { content } = post;

    addPost({ content });
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
  content: state.post.body
});

export default connect(
  mapStateToProps,
  {
    addPost: addingPost
  }
)(CreatePost);
