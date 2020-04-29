import styled from "styled-components";
import { Input } from "antd";

export const CommentForm = styled.form`
  display: flex;
  font-family: Roboto;
  width: 100%;
`;

export const CommentInput = styled(Input)`
  && {
    border-radius: 18px;
    margin-left: 5px;
    height: 35px;
    border: none;
    background-color: ${props => props.theme.inputColor};

    &::placeholder {
      color: ${props => props.theme.placeholderColor};
    }
  }
`;
