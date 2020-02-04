import styled from "styled-components";

export const CreatePostContainer = styled.div`
  display: inline-flex;
  font-family: "Roboto";
  background-color: #fff;
  padding: 8px 12px;
  width: 500px;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 6px;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const CreatePostButton = styled.button`
  border: none;
  color: ${props => props.theme.primaryTextColor};
  font-weight: 600;
  font-size: 1.4rem;
  background-color: #e4e6eb;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  line-height: 1;
`;
