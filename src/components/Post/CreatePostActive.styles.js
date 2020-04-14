import styled from "styled-components";
import { Row, Avatar, Button, Input, Form } from "antd";

const { TextArea } = Input;
export const CreatePostNewContainer = styled(Form)`
  box-shadow: ${props => props.theme.boxShadow};
  font-family: Roboto;
  border-radius: 6px;
`;

export const CreatePostHeader = styled(Row)`
  border-bottom: 1px solid ${props => props.theme.lightBorder};
`;

export const CreatePostHeading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0;
  text-align: center;
  margin: 18px auto;
`;

export const CloseContainer = styled(Button)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 13px;
  margin-top: 13px;
  padding: 0;
  background-color: #e4e6eb;
  cursor: pointer;
  transition: 0.1s;
  padding: 5px;

  &&:focus {
    background-color: #e4e6eb;
  }

  &&:active {
    background-color: #e4e6eb;
    color: white;
  }

  &&:hover {
    background-color: #d8dadf;
    color: white;
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
  color: 1px solid ${props => props.theme.primaryTextColor};
  font-size: 16px;
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

    &::placeholder {
      color: #c7cbd1;
      font-size: 16px;
      font-weight: 500;
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
    background-color: ${props => props.theme.appTextColor};
  }
`;

export const ImageContainer = styled(Row)`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 100%;

  &:hover {
    background-color: #f2f2f2;
    outline: none;
  }

  &:active {
    background-color: #e4e6eb;
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
