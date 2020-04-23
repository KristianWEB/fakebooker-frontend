import styled from "styled-components";
import { Row, Button, Input, Form } from "antd";

export const ChatContainer = styled.div`
  position: fixed;
  background-color: #fff;
  top: auto;
  right: 30px;
  bottom: 30px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
  border-radius: 8px;
`;

export const ChatHeader = styled(Row)`
  display: flex;
  align-items: center;
  font-family: "Roboto";
  margin: 8px;
`;

export const CreatorAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const CreatorFullName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 8px;
  line-height: 1;
`;

export const ChatBodyContainer = styled.div`
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  padding: 8px;
  width: 100%;
  height: 100%;
  font-family: "Roboto";
`;

export const CreatorContainer = styled(Row)`
  display: flex;
  align-items: flex-end;
  margin: 8px;
`;

export const CreatorImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

export const CreatorMessage = styled(Row)`
  font-size: 15px;
  padding: 8px 12px;
  margin-left: 8px;
  font-family: "Roboto";
  background-color: #e4e6eb;
  border-radius: 18px;
  width: 170px;
`;

export const AuthUserContainer = styled(Row)`
  display: flex;
  justify-content: flex-end;
  margin: 8px;
`;

export const AuthUserMessage = styled(Row)`
  font-size: 15px;
  padding: 8px 12px;
  margin-left: 8px;
  font-family: "Roboto";
  background-color: #0084ff;
  color: #fff;
  border-radius: 18px;
`;

export const InputContainer = styled(Form)`
  display: flex;
  font-family: "Roboto";
`;

export const MessageInput = styled(Input)`
  && {
    background-color: #f0f2f5;
    border: none;
    border-radius: 20px;

    ::placeholder {
      color: #90949c;
      font-size: 15px;
    }
  }
`;

export const SubmitMessageBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-left: 8px;
`;

export const CloseContainer = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
