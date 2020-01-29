import React from "react";
import {
  CreatePostContainer,
  UserAvatar,
  CreatePostButton
} from "./CreatePostDefault.styles";

const CreatePostDefault = ({ user }) => {
  return (
    <>
      <CreatePostContainer>
        <UserAvatar src={user.coverImage} />
        <CreatePostButton>Add a Post</CreatePostButton>
      </CreatePostContainer>
    </>
  );
};
export default CreatePostDefault;
