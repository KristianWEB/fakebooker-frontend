import styled from "styled-components";
import { Button, Input, Row, DatePicker } from "antd";

export const RegisterFormContainer = styled.div`
  width: 500px;
  font-family: "Roboto";
`;

export const StyledButton = styled(Button)`
  && {
    background-color: ${props => props.theme.primaryText};
    color: #fff;
    width: 50%;
    height: auto;
    padding: 8px 0;
    font-size: 1.5rem;
    transition: 0.1s;

    &&:focus,
    &&:hover {
      background-color: ${props => props.theme.primaryText};
      color: #fff;
      border-color: none;
    }

    &&:active {
      color: #fff;
      border-color: none;
      transform: scale(0.96);
    }
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

export const FirstNameInput = styled(Input)`
  && {
    background-color: ${props => props.theme.inputColor};
    border: none;
    border-radius: 6px;
  }
`;
export const LastNameInput = styled(Input)`
  && {
    background-color: ${props => props.theme.inputColor};
    border: none;
    border-radius: 6px;
  }
`;
export const EmailInput = styled(Input)`
  && {
    background-color: ${props => props.theme.inputColor};
    border: none;
    border-radius: 6px;
  }
`;
export const PasswordInput = styled(Input.Password)`
  && {
    .ant-input.ant-input-lg {
      background-color: ${props => props.theme.inputColor};
      border: none;
    }
    background-color: ${props => props.theme.inputColor};
    border: none;
    border-radius: 6px;
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

export const BirthdayInput = styled(DatePicker)`
  && {
    width: 65%;

    .ant-input {
      background-color: ${props => props.theme.inputColor};
      border: none;
      border-radius: 6px;
    }
  }
`;

export const NameContainer = styled(Row)`
  && {
    display: flex;
  }
`;
