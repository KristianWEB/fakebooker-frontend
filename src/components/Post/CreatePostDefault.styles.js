import styled from "styled-components";
import { Button, Row } from "antd";

export const CreatePostContainer = styled.div`
  display: flex;
  font-family: "Roboto";
  background-color: #fff;
  padding: 8px 12px;
  width: 100%;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 6px;
  align-items: center;
  @media only screen and (max-width: 575px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const CreatePostButton = styled(Button)`
  border: none;
  color: ${props => props.theme.primaryTextColor};
  font-weight: 600;
  font-size: 1.4rem;
  background-color: #e4e6eb;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  line-height: 1;
  transition: 0.1s;
  height: 3.5rem;

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

export const CloseContainer = styled(Row)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0;
  background-color: #e4e6eb;
  cursor: pointer;
  transition: 0.1s;
  padding: 5px;

  &&:focus {
    background-color: #e4e6eb;
  }

  &&:active {
    background-color: #e4e6eb;
    color: white;
  }

  &&:hover {
    background-color: #d8dadf;
    color: white;
  }
`;
