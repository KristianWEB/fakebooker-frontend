import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
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
  PublishBtnContainer
} from "./CreatePostActive.styles";
import { ReactComponent as CloseBtn } from "../../assets/icons/_ionicons_svg_md-close.svg";
import { CREATE_POST, GET_POSTS } from "../../utils/graphql/queries";

const CreatePostActive = ({ user, showModal }) => {
  const [content, setContent] = useState("");

  const [createPost] = useMutation(CREATE_POST, {
    variables: {
      content
    },
    update: async (proxy, result) => {
      const data = proxy.readQuery({
        query: GET_POSTS,
        variables: {
          username: user.username
        }
      });
      const newData = { getPosts: [result.data.createPost, ...data.getPosts] };

      proxy.writeQuery({
        query: GET_POSTS,
        variables: { username: user.username },
        data: newData
      });
    }
  });

  const onSubmit = e => {
    e.preventDefault();
    createPost();
    showModal(false);
    setContent("");
  };

  return (
    <CreatePostNewContainer onSubmit={onSubmit}>
      <CreatePostHeader type="flex" justify="center" align="middle">
        <CreatePostHeading>Create Post</CreatePostHeading>
        <CloseContainer>
          <CloseBtn width="20" height="20" fill="#62626a" />
        </CloseContainer>
      </CreatePostHeader>
      <CreatePostBody>
        <User type="flex" align="middle">
          <UserAvatar src={user.coverImage} size={46}>
            Image
          </UserAvatar>
          <UserName>{user.username}</UserName>
        </User>
        <CreatePostInputContainer>
          <CreatePostInput
            placeholder="What do you think?"
            rows={5}
            value={content}
            name="content"
            onChange={e => setContent(e.target.value)}
          />
        </CreatePostInputContainer>
      </CreatePostBody>
      <PublishBtnContainer>
        <PublishBtn type="primary" htmlType="submit">
          Publish
        </PublishBtn>
      </PublishBtnContainer>
    </CreatePostNewContainer>
  );
};

export default CreatePostActive;
