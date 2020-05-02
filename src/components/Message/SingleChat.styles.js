import styled from "styled-components";

export const ChatContainer = styled.div`
  position: fixed;
  background-color: #fff;
  top: auto;
  right: 30px;
  bottom: 30px;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 330px;
  z-index: 6;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto";
  margin: 8px;
`;

export const CreatorAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const CreatorFullName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 8px;
  line-height: 1;
`;

export const ChatBodyContainer = styled.div`
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  padding: 8px;
  height: 100%;
  font-family: "Roboto";
`;

export const CreatorContainer = styled.div`
  display: inline-flex;
  align-items: flex-end;
  margin: 8px;
  margin-right: 20%;
`;

export const CreatorImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

export const CreatorMessage = styled.div`
  font-size: 1.5rem;
  padding: 8px 12px;
  margin-left: 8px;
  font-family: "Roboto";
  background-color: ${props => props.theme.secondaryBackground};
  border-radius: 18px;
`;

export const AuthUserContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 8px;
  margin-left: 20%;
`;

export const AuthUserMessage = styled.div`
  font-size: 1.5rem;
  padding: 8px 12px;
  margin-left: 8px;
  font-family: "Roboto";
  background-color: #0084ff;
  color: #fff;
  border-radius: 18px;
`;

export const InputContainer = styled.form`
  display: flex;
  font-family: "Roboto";
`;

export const MessageInput = styled.input`
  background-color: ${props => props.theme.inputColor};
  border: none;
  border-radius: 20px;
  width: 100%;
  height: 37px;
  padding-left: 8px;
  font-size: 1.5rem;
  ::placeholder {
    color: ${props => props.theme.placeholderColor};
    font-size: 1.5rem;
  }
  &:focus {
    outline: none;
  }
`;

export const SubmitMessageBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-left: 8px;
  border: none;
  background-color: #fff;

  &:focus {
    outline: none;
  }
`;

export const CloseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  border-radius: 100%;

  &:hover {
    background-color: ${props => props.theme.tertiaryBackground};
    outline: none;
  }

  &::after,
  &:focus {
    outline: none;
  }

  &:active {
    background-color: ${props => props.theme.secondaryBackground};
    outline: none;
  }
`;
