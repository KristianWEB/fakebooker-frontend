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

export const CloseContainer = styled.div`
  padding: 0.25rem;
  display: flex;
  align-items: center;
  background-color: #e4e6eb;
  border-radius: 50%;
  margin-right: 13px;
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
`;
export const CreatePostInput = styled(TextArea)`
  && {
    display: flex;
    margin: 19px 13px 0 13px;
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

// WE FOUND A SOLUTION ON HOW TO OVERWRITE THE DEFAULT ANTD STYLES
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
