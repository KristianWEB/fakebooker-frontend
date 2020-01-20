import React from "react";
import UserAvatarExample from "../../assets/images/36.jpg";
import {
  CreatePostContainer,
  UserAvatar,
  CreatePostButton
} from "./CreatePostDefault.styles";

const CreatePostDefault = () => {
  return (
    <>
      <CreatePostContainer>
        <UserAvatar src={UserAvatarExample} />
        <CreatePostButton>Add a Post</CreatePostButton>
      </CreatePostContainer>
    </>
  );
};
export default CreatePostDefault;
