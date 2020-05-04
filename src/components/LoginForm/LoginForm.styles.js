import styled from "styled-components";

export const LoginFormContainer = styled.div`
  width: 500px;
  font-family: "Roboto";
  font-size: 1.5rem;
`;

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.primaryText};
  color: #fff;
  width: 50%;
  height: auto;
  padding: 13px 50px;
  border-radius: 4px;
  font-size: 1.6rem;
  border: none;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: ${(props) => props.theme.primaryText};
    color: #fff;
    border-color: none;
    outline: none;
  }

  &:active {
    color: #fff;
    border-color: none;
    transform: scale(0.96);
  }
`;

export const LoginHeading = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: ${(props) => props.theme.secondaryText};
`;

export const EmailLabel = styled.p`
  display: inline-block;
  margin: 0;
  margin-bottom: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: ${(props) => props.theme.secondaryText};
`;

export const PasswordLabel = styled.p`
  display: inline-block;
  margin: 0;
  margin-bottom: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: ${(props) => props.theme.secondaryText};
`;

export const EmailInput = styled.input`
  background-color: ${(props) => props.theme.inputColor};
  border: none;
  border-radius: 6px;
  height: 40px;
  padding: 0 8px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.primaryText};
  }
`;

export const PasswordInput = styled.input`
  background-color: ${(props) => props.theme.inputColor};
  border: none;
  border-radius: 6px;
  height: 40px;
  padding: 0 8px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.primaryText};
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

export const ErrorMessageHeading = styled.h1`
  color: ${(props) => props.theme.errorText};
  font-size: 1.2rem;
  font-weight: 500;
  margin-left: 7px;
`;
