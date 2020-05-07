import styled from "styled-components";

export const CreatePostNewContainer = styled.form`
  box-shadow: ${(props) => props.theme.boxShadow1};
  font-family: Roboto;
  border-radius: 8px;
`;

export const CreatePostHeader = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.secondaryHoverBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 60px;
`;

export const CreatePostHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0;
  color: ${(props) => props.theme.secondaryText};
`;

export const CloseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0;
  background-color: ${(props) => props.theme.secondaryBackground};
  cursor: pointer;
  transition: 0.1s;
  padding: 5px;

  &:focus {
    background-color: ${(props) => props.theme.secondaryBackground};
    color: ${(props) => props.theme.secondaryText};
  }
  &:active {
    transform: scale(0.96);
  }
  &:hover {
    background-color: ${(props) => props.theme.secondaryHoverBackground};
    color: ${(props) => props.theme.secondaryText};
  }
`;

export const EndPositionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CreatePostBody = styled.div``;

export const User = styled.div`
  margin: 13px 16px;
  display: flex;
  align-items: center;
  margin-bottom: 0;
`;

export const UserAvatar = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 100%;
`;

export const UserName = styled.h3`
  color: 1px solid ${(props) => props.theme.secondaryText};
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 10px;
`;

export const CreatePostInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CreatePostInput = styled.textarea`
  display: flex;
  border: none;
  resize: none;
  margin: 16px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.secondaryText};

  &::placeholder {
    color: ${(props) => props.theme.placeholderColor};
    font-size: 1.5rem;
  }
  &:focus {
    outline: none;
  }
`;

export const PublishBtnContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const PublishBtn = styled.button`
  position: relative;
  width: 100%;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  margin: 16px;
  font-weight: 600;
  font-size: 1.6rem;
  color: #fff;
  background-color: ${(props) => props.theme.primaryText};
  transition: 0.1s;
  cursor: pointer;

  &:focus {
    color: #fff;
    background-color: ${(props) => props.theme.primaryText};
    outline: none;
  }
  &:active {
    transform: scale(0.96);
  }
  &:disabled {
    opacity: 0.5;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 100%;

  &:focus {
    background-color: ${(props) => props.theme.tertiaryBackground};
  }

  &:hover {
    background-color: ${(props) => props.theme.tertiaryBackground};
  }

  &:active {
    background-color: ${(props) => props.theme.secondaryBackground};
  }
`;

export const PostImage = styled.div`
  background-image: url("${(props) => props.img}");
  display: block;
  margin: 0 13px;
  background-size: cover;
  border-radius: 8px;
  min-height: 20rem;
`;

export const MarkdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 100%;

  &:focus {
    background-color: ${(props) => props.theme.tertiaryBackground};
  }

  &:hover {
    background-color: ${(props) => props.theme.tertiaryBackground};
  }

  &:active {
    background-color: ${(props) => props.theme.secondaryBackground};
  }
`;

export const AdditionalActions = styled.div`
  display: flex;
  margin-left: auto;
`;

export const ImageSkeleton = styled.div`
  display: flex;
  height: 100%;
  padding: 0 13px;

  svg {
    width: 100%;
    height: 100%;
    rect {
      width: 100%;
      height: 100%;
    }
  }
`;
