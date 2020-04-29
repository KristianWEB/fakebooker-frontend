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
  font-size: 1.7rem;
  font-weight: 500;
  color: ${props => props.theme.secondaryText};
`;

export const FriendBtn = styled(Button)`
  margin-left: auto;
  color: ${props => props.theme.secondaryText};
  font-weight: 500;
  font-size: 15px;
  background-color: ${props => props.theme.secondaryBackground};
  transition: 0.1s;

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

export const ActionsContainer = styled(Row)`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const RejectFriendBtn = styled(Button)`
  text-align: left;
  font-size: 1.5rem;
  display: flex;
  color: ${props => props.theme.secondaryText};
  padding: 0 8px;
  transition: 0.1s;
  font-weight: 500;

  &:hover {
    background-color: ${props => props.theme.tertiaryBackground};
    color: ${props => props.theme.secondaryText};
  }

  &::after,
  &:focus {
    color: ${props => props.theme.secondaryText};
  }

  &:active {
    background-color: ${props => props.theme.secondaryHoverBackground};
    color: ${props => props.theme.secondaryText};
  }
`;
