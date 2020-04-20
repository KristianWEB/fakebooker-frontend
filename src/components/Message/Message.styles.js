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
      background-color: #f2f2f2;
    }

    &&:last-child {
      margin-bottom: 12px;
    }
    &&:active {
      background-color: #e4e6eb;
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
  color: #050505;
  font-size: 15px;
`;

export const Body = styled(Row)`
  font-size: 1.5rem;
  color: #050505;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Footer = styled(Row)`
  display: flex;
  color: #65676b;
  font-size: 13px;
  font-weight: 500;
`;
