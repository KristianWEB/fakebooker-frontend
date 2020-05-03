import styled from "styled-components";

export const CommentForm = styled.form`
  display: flex;
  font-family: Roboto;
  width: 100%;
`;
export const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
`;

export const CommentInput = styled.input`
  border-radius: 18px;
  margin-left: 5px;
  height: 35px;
  border: none;
  width: 100%;
  padding-left: 8px;
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.inputColor};

  &::placeholder {
    color: ${(props) => props.theme.placeholderColor};
  }

  &:focus {
    outline: none;
  }
`;
