import styled from "styled-components";
import { Button } from "antd";

export const AuthDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const StyledButton = styled(Button)`
  height: 40px;
  background-color: #3b5999;
  border: 1px solid #3b5999;
  margin-bottom: 40px;

  &:hover,
  &:focus {
    background-color: #3b5999;
    outline: none;
    border-color: #3b5999;
  }
`;
