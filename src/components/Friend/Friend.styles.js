import styled from "styled-components";
import { Row, Button } from "antd";

export const FriendContainer = styled(Row)`
  display: inline-flex;
  width: 419px;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  margin: 3px;
`;

export const UserContainer = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

export const UserName = styled.h1`
  margin-left: 16px;
  font-size: 17px;
  font-weight: 500;
`;

export const FriendBtn = styled(Button)`
  margin-left: auto;
  color: ${props => props.theme.primaryTextColor};
  font-weight: 500;
  font-size: 15px;
  background-color: #e4e6eb;
  transition: 0.1s;

  &&:focus,
  &&:active {
    background-color: #e4e6eb;
    border-color: #e4e6eb;
    color: ${props => props.theme.primaryTextColor};
  }
  &&:hover {
    background-color: #d8dadf;
    color: ${props => props.theme.primaryTextColor};
  }
`;

export const ActionsContainer = styled(Row)`
  display: flex;
  flex-direction: column;
`;

export const RejectFriendBtn = styled(Button)`
  text-align: left;
  color: #050505;
  padding: 0 8px;
  font-weight: 500;
  transition: 0.1s;

  &:hover {
    background-color: #f2f2f2;
    color: #050505;
  }

  &::after,
  &:focus {
    outline: none;
    color: #050505;
  }

  &:active {
    background-color: #e4e6eb;
    color: #050505;
  }
`;
