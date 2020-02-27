import styled from "styled-components";
import { Button, Input, Row, DatePicker } from "antd";

export const RegisterFormContainer = styled.div`
  width: 500px;
  font-family: "Roboto";
`;

export const StyledButton = styled(Button)`
  && {
    background-color: #1977f3;
    width: 50%;
    height: auto;
    padding: 8px 0;
    font-size: 1.6rem;
  }
`;

export const RegisterHeading = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: #050505;
`;

export const FirstNameLabel = styled.p`
  display: inline-block;
  margin-bottom: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: #050505;
`;

export const LastNameLabel = styled.p`
  display: inline-block;
  margin-bottom: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: #050505;
`;

export const EmailLabel = styled.p`
  display: inline-block;
  margin-bottom: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: #050505;
`;

export const PasswordLabel = styled.p`
  display: inline-block;
  margin-bottom: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: #050505;
`;

export const GenderLabel = styled.p`
  display: block;
  margin-bottom: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: #050505;
`;

export const FirstNameInput = styled(Input)`
  && {
    background-color: #f5f6f6;
    border: none;
    border-radius: 6px;
  }
`;
export const LastNameInput = styled(Input)`
  && {
    background-color: #f5f6f6;
    border: none;
    border-radius: 6px;
  }
`;
export const EmailInput = styled(Input)`
  && {
    background-color: #f5f6f6;
    border: none;
    border-radius: 6px;
  }
`;
export const PasswordInput = styled(Input.Password)`
  && {
    .ant-input.ant-input-lg {
      background-color: #f5f6f6;
      border: none;
    }
    background-color: #f5f6f6;
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
  color: #050505;
`;

export const BirthdayInput = styled(DatePicker)`
  && {
    width: 65%;

    .ant-input {
      background-color: #f5f6f6;
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
