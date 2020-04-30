import styled from "styled-components";

export const RegisterFormContainer = styled.div`
  width: 500px;
  font-family: "Roboto";
`;

export const StyledButton = styled.button`
  background-color: ${props => props.theme.primaryText};
  color: #fff;
  width: 50%;
  border: none;
  height: auto;
  padding: 8px 0;
  font-size: 1.5rem;
  transition: 0.1s;
  cursor: pointer;
  border-radius: 4px;

  &&:focus,
  &&:hover {
    background-color: ${props => props.theme.primaryText};
    color: #fff;
    border-color: none;
    outline: none;
  }

  &&:active {
    color: #fff;
    border-color: none;
    transform: scale(0.96);
  }
`;

export const RegisterHeading = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: ${props => props.theme.secondaryText};
`;

export const FirstNameLabel = styled.p`
  display: inline-block;
  margin-bottom: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: ${props => props.theme.secondaryText};
`;

export const LastNameLabel = styled.p`
  display: inline-block;
  margin-bottom: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: ${props => props.theme.secondaryText};
`;

export const EmailLabel = styled.p`
  display: inline-block;
  margin-bottom: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: ${props => props.theme.secondaryText};
`;

export const PasswordLabel = styled.p`
  display: inline-block;
  margin-bottom: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: ${props => props.theme.secondaryText};
`;

export const GenderLabel = styled.p`
  display: block;
  margin-bottom: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: ${props => props.theme.secondaryText};
`;

export const FirstNameInput = styled.input`
  background-color: ${props => props.theme.inputColor};
  border: none;
  border-radius: 6px;
  width: 100%;
  color: #050505;
  height: 100%;
  padding: 8px;
  font-size: 1.5rem;

  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
`;
export const LastNameInput = styled.input`
  background-color: ${props => props.theme.inputColor};
  border: none;
  border-radius: 6px;
  color: #050505;
  width: 100%;
  height: 40px;
  padding: 8px;
  font-size: 1.5rem;

  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
`;
export const EmailInput = styled.input`
  background-color: ${props => props.theme.inputColor};
  border: none;
  border-radius: 6px;
  color: #050505;
  width: 100%;
  height: 40px;
  padding: 8px;
  font-size: 1.5rem;

  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
`;
export const PasswordInput = styled.input`
  background-color: ${props => props.theme.inputColor};
  border: none;
  border-radius: 6px;
  color: #050505;
  width: 100%;
  height: 40px;
  padding: 8px;
  font-size: 1.5rem;
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
`;

export const BirthdayLabel = styled.p`
  display: block;
  margin-bottom: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: ${props => props.theme.secondaryText};
`;

export const DayInput = styled.input`
  width: 20%;
  height: 40px;
  background-color: ${props => props.theme.inputColor};
  border: none;
  border-radius: 6px;
  padding: 8px;
  margin-right: 16px;
  font-size: 1.5rem;
  color: #050505;
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
`;

export const MonthInput = styled.input`
  width: 20%;
  height: 40px;
  background-color: ${props => props.theme.inputColor};
  border: none;
  border-radius: 6px;
  padding: 8px;
  margin-right: 16px;
  font-size: 1.5rem;
  color: #050505;
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
`;

export const YearInput = styled.input`
  width: 20%;
  height: 40px;
  background-color: ${props => props.theme.inputColor};
  border: none;
  border-radius: 6px;
  padding: 8px;
  font-size: 1.5rem;
  color: #050505;
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
`;

export const NameContainer = styled.div`
  && {
    display: flex;
    width: 100%;
    margin-bottom: 15px;
  }
`;

export const FirstNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 16px;
`;

export const LastNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const EmailContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

export const PasswordContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

export const BirthdayContainer = styled.div`
  margin-bottom: 15px;
`;

export const GenderContainer = styled.div`
  margin-bottom: 30px;
  margin-top: 15px;
  display: flex;
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
  font-size: 1.5rem;
  color: #050505;
`;

export const MaleLabel = styled.label`
  line-height: 1;
  font-size: 1.5rem;
  color: #050505;
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
