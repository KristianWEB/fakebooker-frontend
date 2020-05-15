import styled from "styled-components";

export const ChangeAvatarContainer = styled.button`
  background-color: ${(props) => props.theme.secondaryBackground};
  display: flex;
  justify-content: center;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  padding: 0.5rem 0.8rem;
  height: 36px;
  top: 110px;
  right: 0;
  border: 0;
  cursor: pointer;
  transition: 0.1s;

  &&:focus {
    background-color: ${(props) => props.theme.secondaryBackground};
    outline: none;
  }
  &&:hover {
    background-color: ${(props) => props.theme.secondaryHoverBackground};
    outline: none;
  }
  &&:active {
    transform: scale(0.96);
  }
`;

export const AvatarImageUpload = styled.input`
  display: none;
`;
