import styled from "styled-components";
import { Row } from "antd";

export const MessageListContainer = styled(Row)`
  font-family: "Roboto";
`;

export const MessageListHeading = styled.h3`
  color: ${props => props.theme.primaryTextColor};
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 1;
  padding: 16px 18px 12px 18px;
`;
export const MessageRow = styled(Row)`
  padding: 0 8px;
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

export const ChatBodyContainer = styled(Row)`
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  padding: 8px;
  font-size: "Roboto";
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

export const AuthUserImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
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
