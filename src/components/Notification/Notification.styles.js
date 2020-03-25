import styled from "styled-components";
import { Row } from "antd";

export const NotificationContainer = styled(Row)`
  && {
    display: flex;
    padding: 8px;
    border-radius: 8px;
    transition: 0.1s;

    &&:hover {
      background-color: #f2f2f2;
    }

    &&:first-child {
      margin-top: 15px;
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

export const CreatorFirstName = styled.span`
  font-weight: bold;
`;

export const CreatorLastName = styled.span`
  font-weight: bold;
`;

export const PostBody = styled.span`
  font-weight: bold;
`;

export const Body = styled(Row)`
  font-size: 1.5rem;
`;

export const Timestamp = styled.h3`
  color: ${props => props.theme.appTextColor};
  font-weight: bold;
  font-size: 1.3rem;
`;
