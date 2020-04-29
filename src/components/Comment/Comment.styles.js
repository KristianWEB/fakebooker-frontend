import styled from "styled-components";
import { Button, Row } from "antd";

export const CommentContainer = styled.div`
  display: flex;
  margin: 10px 0;
  font-family: Roboto;
  align-items: center;
`;

export const ActionsContainer = styled(Row)`
  display: flex;
  padding: 8px;
`;

export const PopButton = styled(Button)`
  text-align: left;
  font-size: 1.5rem;
  display: flex;
  width: 100%;
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

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 18px;
  width: auto;
  padding: 8px 12px;
  color: ${props => props.theme.secondaryText};
  background-color: ${props => props.theme.inputColor};
  margin-bottom: 0;
  margin-left: 5px;
`;

export const Username = styled.span`
  color: ${props => props.theme.primaryTextColor};
  font-weight: 600;
  font-size: 1.5rem;
`;

export const Body = styled.span`
  font-size: 1.5rem;
`;
