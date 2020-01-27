import styled from "styled-components";
import { Input } from "antd";

export const CommentForm = styled.form`
  display: flex;
  font-family: Roboto;
  width: 476px;
`;

export const CommentInput = styled(Input)`
  && {
    border-radius: 18px;
    margin-left: 5px;
    height: 35px;
    border: none;
    background-color: #f6f6f6;

    &::placeholder {
      color: #444444;
      opacity: 0.8;
    }
  }
`;
