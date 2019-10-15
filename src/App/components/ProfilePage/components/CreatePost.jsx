import React from "react";
import PropTypes from "prop-types";

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

const CreatePost = ({ name, profileImage }) => (
  <PostFormContainer>
    <PostForm>
      <Header>Create a post</Header>
      <PostFormBody>
        <AvatarImage src={profileImage} alt="profile" />
        <PostTextArea
          rows={1}
          placeholder={`What are you thinking, ${name}?`}
        />
      </PostFormBody>

      <PostFormBodyMobile>
        <AvatarImageMobile src={profileImage} alt="profile" />
        <PostInput placeholder={`What are you thinking, ${name}?`} />
        <PublishPostButtonMobile type="primary">
          Publish
        </PublishPostButtonMobile>
      </PostFormBodyMobile>

      <PublishPostButton type="primary">Publish</PublishPostButton>
    </PostForm>
  </PostFormContainer>
);

CreatePost.propTypes = {
  name: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired
};

export default CreatePost;
