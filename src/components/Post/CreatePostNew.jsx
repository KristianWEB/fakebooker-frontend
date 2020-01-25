import React from "react";
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
} from "./CreatePostNew.styles";
import CloseBtn from "../../assets/icons/_ionicons_svg_md-close.svg";
import UserAvatarExample from "../../assets/images/36.jpg";

const CreatePostNew = () => {
  return (
    <CreatePostNewContainer>
      <CreatePostHeader type="flex" justify="center" align="middle">
        <CreatePostHeading>Create Post</CreatePostHeading>
        <CloseContainer>
          <CloseBtn width="20" height="20" fill="#62626a" />
        </CloseContainer>
      </CreatePostHeader>
      <CreatePostBody>
        <User type="flex" align="middle">
          <UserAvatar src={UserAvatarExample} size={46}>
            Image
          </UserAvatar>
          <UserName>James Spiegel</UserName>
        </User>
        <CreatePostInputContainer>
          <CreatePostInput placeholder="What do you think?" rows={5} />
        </CreatePostInputContainer>
      </CreatePostBody>
      <PublishBtnContainer>
        <PublishBtn type="primary">Publish</PublishBtn>
      </PublishBtnContainer>
    </CreatePostNewContainer>
  );
};

export default CreatePostNew;
