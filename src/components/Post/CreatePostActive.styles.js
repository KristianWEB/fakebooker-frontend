import styled from "styled-components";
import { Row, Avatar, Button, Input, Form } from "antd";

const { TextArea } = Input;
export const CreatePostNewContainer = styled(Form)`
  box-shadow: ${props => props.theme.boxShadow1};
  font-family: Roboto;
  border-radius: 8px;
`;

export const CreatePostHeader = styled(Row)`
  border-bottom: 1px solid ${props => props.theme.secondaryHoverBackground};
`;

export const CreatePostHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0;
  text-align: center;
  margin: 18px auto;
  color: ${props => props.theme.secondaryText};
`;

export const CloseContainer = styled(Button)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 13px;
  margin-top: 13px;
  border-radius: 50%;
  padding: 0;
  background-color: ${props => props.theme.secondaryBackground};
  cursor: pointer;
  transition: 0.1s;
  padding: 5px;

  &&:focus {
    background-color: ${props => props.theme.secondaryBackground};
    color: ${props => props.theme.secondaryText};
  }
  &&:active {
    transform: scale(0.96);
  }
  &&:hover {
    background-color: ${props => props.theme.secondaryHoverBackground};
    color: ${props => props.theme.secondaryText};
  }
`;
export const EndPositionContainer = styled(Row)`
  display: flex;
  justify-content: flex-end;
`;

export const CreatePostBody = styled(Row)``;

export const User = styled(Row)`
  margin: 13px;
  margin-bottom: 0;
`;

export const UserAvatar = styled(Avatar)`
  width: 46px;
  height: 46px;
`;

export const UserName = styled.h3`
  color: 1px solid ${props => props.theme.secondaryText};
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 10px;
`;

export const CreatePostInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CreatePostInput = styled(TextArea)`
  && {
    display: flex;
    margin-top: 19px;
    border: none;
    resize: none;
    width: 100%;
    color: ${props => props.theme.secondaryText};

    &::placeholder {
      color: ${props => props.theme.placeholderColor};
      font-size: 15px;
    }
    &:focus {
      outline: none;
    }
  }
`;

export const PublishBtnContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const PublishBtn = styled(Button)`
  && {
    width: 100%;
    margin: 16px 13px;
    font-weight: bold;
    font-size: 1.6rem;
    color: #fff;
    background-color: ${props => props.theme.primaryText};
    transition: 0.1s;

    &&:focus {
      color: #fff;
      background-color: ${props => props.theme.primaryText};
    }
    &&:active {
      transform: scale(0.96);
    }
  }
`;

export const ImageContainer = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 100%;

  &:focus {
    background-color: ${props => props.theme.tertiaryBackground};
  }

  &:hover {
    background-color: ${props => props.theme.tertiaryBackground};
  }

  &:active {
    background-color: ${props => props.theme.secondaryBackground};
  }
`;

export const PostImage = styled(Row)`
  background-image: url("${props => props.img}");
  display: block;
  margin: 0 13px;
  background-size: cover;
  border-radius: 8px;
  min-height: 20rem;
`;

export const MarkdownContainer = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 100%;

  &:focus {
    background-color: ${props => props.theme.tertiaryBackground};
  }

  &:hover {
    background-color: ${props => props.theme.tertiaryBackground};
  }

  &:active {
    background-color: ${props => props.theme.secondaryBackground};
  }
`;
