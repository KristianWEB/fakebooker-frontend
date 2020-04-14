import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/react-hooks";
import Image from "../Image/Image";
import {
  CreatePostNewContainer,
  CreatePostHeader,
  CreatePostHeading,
  CloseContainer,
  CreatePostBody,
  User,
  UserAvatar,
  UserName,
  CreatePostInput,
  CreatePostInputContainer,
  PublishBtn,
  PublishBtnContainer,
  ImageContainer,
  PostImage,
  EndPositionContainer
} from "./CreatePostActive.styles";
import { ReactComponent as CloseBtn } from "../../assets/icons/close.svg";
import { CREATE_POST, GET_POSTS, DELETE_IMAGE } from "../../utils/queries";

const CreatePostActive = ({ user, showModal }) => {
  const [body, setBody] = useState("");
  const [image, setImage] = useState({});

  const [deleteImage] = useMutation(DELETE_IMAGE, {
    variables: {
      publicId: image.public_id
    }
  });

  const [createPost] = useMutation(CREATE_POST, {
    variables: {
      body,
      image: image.secure_url
    },
    update: async (proxy, result) => {
      const data = proxy.readQuery({
        query: GET_POSTS
      });
      const newData = { getPosts: [result.data.createPost, ...data.getPosts] };

      proxy.writeQuery({
        query: GET_POSTS,
        data: newData
      });
    }
  });

  const onSubmit = e => {
    e.preventDefault();
    createPost();
    showModal(false);
    setImage("");
    setBody("");
  };

  return (
    <CreatePostNewContainer onSubmit={onSubmit}>
      <CreatePostHeader type="flex" justify="center" align="middle">
        <CreatePostHeading>Create Post</CreatePostHeading>
        <CloseContainer type="link">
          <CloseBtn width="20" height="20" fill="#62626a" />
        </CloseContainer>
      </CreatePostHeader>
      <CreatePostBody>
        <User type="flex" align="middle">
          <UserAvatar src={user.avatarImage} size={46} />
          <UserName>
            {user.firstName} {user.lastName}
          </UserName>
          <ImageContainer>
            <Image setImage={setImage} />
          </ImageContainer>
        </User>
        <CreatePostInputContainer>
          <CreatePostInput
            placeholder="What do you think?"
            rows={3}
            value={body}
            name="content"
            onChange={e => setBody(e.target.value)}
            data-testid="createPostInput"
          />
          {image.secure_url && (
            <PostImage img={image.secure_url} alt="imagePreview">
              <EndPositionContainer>
                <CloseContainer
                  type="link"
                  onClick={() => {
                    deleteImage();
                    setImage({});
                  }}
                >
                  <CloseBtn width="20" height="20" fill="#62626a" />
                </CloseContainer>
              </EndPositionContainer>
            </PostImage>
          )}
        </CreatePostInputContainer>
      </CreatePostBody>
      <PublishBtnContainer>
        <PublishBtn
          type="primary"
          htmlType="submit"
          data-testid="createPostBtn"
        >
          Publish
        </PublishBtn>
      </PublishBtnContainer>
    </CreatePostNewContainer>
  );
};

export default CreatePostActive;

CreatePostActive.propTypes = {
  showModal: PropTypes.func,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    avatarImage: PropTypes.string
  })
};

CreatePostActive.defaultProps = {
  user: null,
  showModal: () => null
};
