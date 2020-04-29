import styled from "styled-components";
import { Row } from "antd";

export const MessageContainer = styled.div`
  && {
    display: flex;
    padding: 8px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    transition: 0.1s;

    &&:hover {
      background-color: ${props => props.theme.tertiaryBackground};
    }

    &&:last-child {
      margin-bottom: 12px;
    }
    &&:active {
      background-color: ${props => props.theme.secondaryBackground};
    }
  }
`;

export const CreatorAvatar = styled.img`
  && {
    width: 56px;
    height: 56px;
    border-radius: 100%;
    object-fit: cover;
    margin-right: 12px;
  }
`;

export const CreatorFullName = styled.span`
  font-weight: bold;
  color: ${props => props.theme.secondaryText};
  font-size: 1.5rem;
`;

export const Body = styled(Row)`
  font-size: 1.5rem;
  color: ${props => props.theme.secondaryText};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Footer = styled(Row)`
  display: flex;
  color: ${props => props.theme.tertiaryText};
  font-size: 1.3rem;
  font-weight: 500;
`;
