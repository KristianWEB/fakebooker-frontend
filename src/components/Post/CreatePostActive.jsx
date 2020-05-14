import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/react-hooks";
import { useForm } from "react-hook-form";
import Image from "../Image/Image";
import {
  CreatePostNewContainer,
  ImageSkeleton,
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
  AdditionalActions,
} from "./CreatePostActive.styles";
import { ReactComponent as CloseBtn } from "../../assets/icons/close.svg";
import { ReactComponent as MarkdownIcon } from "../../assets/icons/logo-markdown.svg";
import { CREATE_POST, GET_POSTS, DELETE_IMAGE } from "../../utils/queries";

const CreatePostActive = ({ user, closeModal, onNewsfeed }) => {
  const { register, watch, handleSubmit } = useForm();
  const [image, setImage] = useState(undefined);
  const [imageLoading, setImageLoading] = useState(undefined);

  const [deleteImage] = useMutation(DELETE_IMAGE, {
    variables: {
      publicId: image && image.public_id,
    },
  });

  const [createPost] = useMutation(CREATE_POST, {
    variables: {
      body: watch("body"),
      image: image && image.secure_url,
    },
    update: async (proxy, result) => {
      if (!onNewsfeed) {
        const data = proxy.readQuery({
          query: GET_POSTS,
        });
        const newData = {
          getPosts: [result.data.createPost, ...data.getPosts],
        };

        proxy.writeQuery({
          query: GET_POSTS,
          data: newData,
        });
      }
    },
  });

  const onSubmit = () => {
    createPost();
    setImage(undefined);
    closeModal();
  };

  return (
    <CreatePostNewContainer onSubmit={handleSubmit(onSubmit)}>
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
              <Image setImage={setImage} loading={setImageLoading} />
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
            name="body"
            ref={register}
          />
          {imageLoading && imageLoading !== 1 && (
            <ImageSkeleton>
              <ContentLoader
                speed={1}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" rx="3" ry="3" />
              </ContentLoader>
            </ImageSkeleton>
          )}
          {image && (
            <PostImage img={image.secure_url} alt="imagePreview">
              <EndPositionContainer>
                <CloseContainer
                  type="link"
                  onClick={() => {
                    deleteImage();
                    setImage(undefined);
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
        <PublishBtn htmlType="submit" disabled={!watch("body") && !image}>
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
    avatarImage: PropTypes.string,
  }),
  onNewsfeed: PropTypes.bool,
};

CreatePostActive.defaultProps = {
  user: null,
  closeModal: () => null,
  onNewsfeed: null,
};
