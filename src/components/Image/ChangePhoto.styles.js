import styled from "styled-components";

export const ChangePhotoContainer = styled.button`
  background-color: ${(props) => props.theme.secondaryBackground};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-right: 40px;
  margin-bottom: 15px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 85%;
  border: 0;
  padding: 5px 8px;
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

export const ChangeBackgroundHeading = styled.h3`
  margin-left: 4px;
  margin-bottom: 0;
  font-size: 1.5rem;
`;

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

export const ImageUpload = styled.input`
  display: none;
`;
