import styled from "styled-components";

export const RegisterFormContainer = styled.div`
  width: 500px;
  font-family: "Roboto";

  @media only screen and (max-width: 767px) {
    padding: 0 20px;
  }
`;

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.primaryText};
  position: relative;
  color: #fff;
  width: 50%;
  border: none;
  height: auto;
  padding: 13px 50px;
  font-size: 1.5rem;
  transition: 0.1s;
  cursor: pointer;
  border-radius: 4px;

  &:focus {
    opacity: 0.9;
    outline: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.primaryText};
    color: #fff;
    outline: none;
  }

  &&:active {
    color: #fff;
    transform: scale(0.96);
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const RegisterHeading = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: ${(props) => props.theme.secondaryText};
`;

export const FirstNameLabel = styled.p`
  display: inline-block;
  margin: 0;
  margin-bottom: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: ${(props) => props.theme.secondaryText};
`;

export const LastNameLabel = styled.p`
  display: inline-block;
  margin: 0;
  margin-bottom: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
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

export const GenderLabel = styled.p`
  display: block;
  margin: 0;
  margin-bottom: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: ${(props) => props.theme.secondaryText};
`;

export const FirstNameInput = styled.input`
  background-color: ${(props) => props.theme.inputColor};
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.secondaryText};
  height: 40px;
  padding: 0 8px;
  font-size: 1.5rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.primaryText};
  }
`;
export const LastNameInput = styled.input`
  background-color: ${(props) => props.theme.inputColor};
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.secondaryText};
  height: 40px;
  padding: 0 8px;
  font-size: 1.5rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.primaryText};
  }
`;
export const EmailInput = styled.input`
  background-color: ${(props) => props.theme.inputColor};
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.secondaryText};
  height: 40px;
  padding: 0 8px;
  font-size: 1.5rem;
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
  color: ${(props) => props.theme.secondaryText};
  height: 40px;
  padding: 0 8px;
  font-size: 1.5rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.primaryText};
  }
`;

export const BirthdayLabel = styled.p`
  display: block;
  margin: 0;
  margin-bottom: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: ${(props) => props.theme.secondaryText};
`;

export const BirthdayInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.inputColor};
  border: none;
  border-radius: 6px;
  padding: 8px;
  margin-right: 16px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.secondaryText};
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.primaryText};
  }
`;

export const MonthInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.inputColor};
  border: none;
  border-radius: 6px;
  padding: 0 8px;
  margin-right: 16px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.secondaryText};
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.primaryText};
  }
`;

export const YearInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.inputColor};
  border: none;
  border-radius: 6px;
  padding: 0 8px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.secondaryText};
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.primaryText};
  }
`;

export const NameContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const FirstNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 16px;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const LastNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media only screen and (max-width: 767px) {
    margin-top: 20px;
    width: 100%;
  }
`;

export const EmailContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const PasswordContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const BirthdayContainer = styled.div`
  margin-bottom: 20px;
  width: 45%;
`;

export const GenderContainer = styled.div`
  margin-top: 7px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

export const FemaleGender = styled.input`
  margin-right: 8px;
  cursor: pointer;
`;

export const MaleGender = styled.input`
  margin-right: 8px;
  cursor: pointer;
`;

export const FemaleLabel = styled.label`
  line-height: 1;
  margin: 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme.secondaryText};
`;

export const MaleLabel = styled.label`
  line-height: 1;
  margin: 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme.secondaryText};
`;

export const FemaleContainer = styled.div`
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MaleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const LoginContainer = styled.div`
  margin-top: 20px;
  color: ${(props) => props.theme.secondaryText};
  font-weight: 400;
  font-size: 1.5rem;
  align-items: center;
  display: flex;

  @media only screen and (max-width: 480px) {
    justify-content: center;
  }
`;
export const LoginLink = styled.h1`
  font-weight: 400;
  font-size: 1.5rem;
  margin-left: 4px;
  color: ${(props) => props.theme.primaryText};
`;
