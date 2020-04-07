import styled from "styled-components";
import { Button } from "antd";

export const CommentContainer = styled.div`
  display: flex;
  margin: 10px 0;
  font-family: Roboto;
  align-items: center;
`;

export const PopButton = styled(Button)`
  text-align: center;
  font-weight: bold;
  margin: 0;
  color: ${props => props.theme.secondaryTextColor};
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  opacity: 0.8;
  border-radius: 18px;
  width: auto;
  padding: 8px 12px;
  background-color: #f6f6f6;
  margin-bottom: 0;
  margin-left: 5px;
`;

export const Username = styled.span`
  color: ${props => props.theme.primaryTextColor};
  font-weight: 600;
  font-size: 1.4rem;
`;

export const Body = styled.span`
  color: ${props => props.theme.secondaryTextColor};
  font-size: 1.4rem;
`;
