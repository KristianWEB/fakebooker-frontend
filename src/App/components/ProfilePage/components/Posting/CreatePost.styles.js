/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import { Button, Input, Typography } from "antd";

export const PostFormContainer = styled.div`
  width: 90%;
  @media screen and (min-width: 1200px) {
    width: 95.5%;
  }
`;

export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0 2% 0;
  border-radius: 0.5rem;
  @media screen and (min-width: 1200px) {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
  }
`;

export const Header = styled(Typography.Text)`
  color: #515365;
  background-color: #f6f6f6;
  padding: 1.75%;
  font-weight: 700;
  font-family: "Roboto";
  width: 100%;
  font-size: 0.9rem;
  border-radius: 0.5rem 0.5rem 0 0;
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;

export const PostFormBody = styled.div`
  display: flex;
  margin: 1%;
`;

export const AvatarImage = styled.img`
  height: 7%;
  width: 7%;
  border-radius: 2rem;
  margin: 0.3rem;
  display: block;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const AvatarImageMobile = styled.img`
  height: 2.3rem;
  width: 2.3rem;
  border-radius: 2rem;
  margin: 0.3rem;
  display: none;
  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const PublishPostButton = styled(Button)`
  background-color: #ff5e3a;
  border-color: #ff5e3a;
  align-self: flex-end;
  justify-self: flex-end;
  margin: 0.5rem;
  width: 20%;
  outline: none;
  &:focus {
    outline: none;
    border-color: #ff5e3a;
    background-color: #ff5e3a;
  }

  &:hover {
    outline: none;
    border-color: #ff5e3a;
    background-color: #ff5e3a;
  }
  display: block;
  @media screen and (max-width: 1200px) {
    width: 15%;
    display: none;
  }
`;

export const PostTextArea = styled(Input.TextArea)`
  font: normal normal 400 normal 1rem / 1.75rem Helvetica, Arial, sans-serif;
  padding: 1rem 1rem 1rem;
  border-color: white;
  resize: none;
  border: none;
  display: block;
  @media screen and (max-width: 1200px) {
    width: 75%;
    display: none;
  }

  ::-webkit-input-placeholder {
    color: rgba(68, 68, 68, 0.8);
  }
  :-moz-placeholder {
    color: rgba(68, 68, 68, 0.8);
  }
  ::-moz-placeholder {
    color: rgba(68, 68, 68, 0.8);
  }
  :-ms-input-placeholder {
    color: rgba(68, 68, 68, 0.8);
  }
  ::placeholder {
    color: rgba(68, 68, 68, 0.8);
  }
  :focus {
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
`;

export const PostInput = styled(Input)`
  font: normal normal 400 normal 1rem / 1.75rem Helvetica, Arial, sans-serif;
  padding: 0.875rem 0.75rem 0.875rem;
  border-radius: 1.25rem;
  resize: none;
  border: none;
  display: none;
  margin: 0 10px 0 10px;
  @media screen and (max-width: 1200px) {
    width: 75%;
    display: block;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
  }

  ::-webkit-input-placeholder {
    color: rgba(68, 68, 68, 0.8);
  }
  :-moz-placeholder {
    color: rgba(68, 68, 68, 0.8);
  }
  ::-moz-placeholder {
    color: rgba(68, 68, 68, 0.8);
  }
  :-ms-input-placeholder {
    color: rgba(68, 68, 68, 0.8);
  }
  ::placeholder {
    color: rgba(68, 68, 68, 0.8);
  }
  :focus {
    outline: none !important;
  }
`;

export const PostFormBodyMobile = styled.div`
  display: flex;
  align-items: center;
`;

export const PublishPostButtonMobile = styled(Button)`
  background-color: #ff5e3a;
  border-color: #ff5e3a;
  align-self: flex-end;
  justify-self: flex-end;
  margin: 10px;
  width: 20%;
  outline: none;
  &:focus {
    outline: none;
    border-color: #ff5e3a;
    background-color: #ff5e3a;
  }

  &:hover {
    outline: none;
    border-color: #ff5e3a;
    background-color: #ff5e3a;
  }
  display: none;
  border-radius: 1.875rem;
  @media screen and (max-width: 1200px) {
    width: 33%;
    display: block;
  }
`;
