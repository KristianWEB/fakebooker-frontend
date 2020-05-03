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
  EndPositionContainer,
  MarkdownContainer,
  AdditionalActions
} from "./CreatePostActive.styles";
import { ReactComponent as CloseBtn } from "../../assets/icons/close.svg";
import { ReactComponent as MarkdownIcon } from "../../assets/icons/logo-markdown.svg";
import { CREATE_POST, GET_POSTS, DELETE_IMAGE } from "../../utils/queries";

const CreatePostActive = ({ user, closeModal }) => {
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
      const newData = {
        getPosts: [result.data.createPost, ...data.getPosts]
      };

      proxy.writeQuery({
        query: GET_POSTS,
        data: newData
      });
    }
  });

  const onSubmit = e => {
    e.preventDefault();
    createPost();
    closeModal();
    setImage("");
    setBody("");
  };

  return (
    <CreatePostNewContainer onSubmit={onSubmit}>
      <CreatePostHeader>
        <CreatePostHeading>Create Post</CreatePostHeading>
        <CloseContainer
          onClick={closeModal}
          style={{ position: "absolute", right: "16px", top: "13px" }}
        >
          <CloseBtn width="20" height="20" fill="#62626a" />
        </CloseContainer>
      </CreatePostHeader>
      <CreatePostBody>
        <User>
          <UserAvatar src={user.avatarImage} size={46} />
          <UserName>
            {user.firstName} {user.lastName}
          </UserName>
          <AdditionalActions>
            <ImageContainer>
              <Image setImage={setImage} />
            </ImageContainer>
            <MarkdownContainer>
              <MarkdownIcon width={20} height={20} />
            </MarkdownContainer>
          </AdditionalActions>
        </User>
        <CreatePostInputContainer>
          <CreatePostInput
            placeholder="What's on your mind?"
            rows={6}
            value={body}
            name="content"
            onChange={e => setBody(e.target.value)}
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
                  style={{ marginTop: "13px", marginRight: "16px" }}
                >
                  <CloseBtn width="20" height="20" fill="#62626a" />
                </CloseContainer>
              </EndPositionContainer>
            </PostImage>
          )}
        </CreatePostInputContainer>
      </CreatePostBody>
      <PublishBtnContainer>
        <PublishBtn type="link" htmlType="submit">
          Post
        </PublishBtn>
      </PublishBtnContainer>
    </CreatePostNewContainer>
  );
};

export default CreatePostActive;

CreatePostActive.propTypes = {
  closeModal: PropTypes.func,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    avatarImage: PropTypes.string
  })
};

CreatePostActive.defaultProps = {
  user: null,
  closeModal: () => null
};
