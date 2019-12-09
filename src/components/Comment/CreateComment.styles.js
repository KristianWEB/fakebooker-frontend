import styled from "styled-components";
import { Input } from "antd";

// eslint-disable-next-line import/prefer-default-export
export const CommentInput = styled(Input)`
  border-radius: 18px;
  margin-left: 5px;
  width: 534px;
  border: none;
  background-color: #f6f6f6;

  &::placeholder {
    color: #444444;
    opacity: 0.8;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
