import styled from "styled-components";
import { Button, Input, Row, DatePicker, Checkbox } from "antd";

export const RegisterFormContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
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
  font-weight: 500;
  margin-bottom: 30px;
  color: #050505;
`;

export const FirstNameLabel = styled.p`
  display: inline-block;
  margin-bottom: 7px;
  font-size: 1.5rem;
  font-weight: 500;
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
  font-weight: 500;
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

export const MaleGender = styled(Checkbox)`
  && {
    .ant-checkbox-inner {
      background-color: #f5f6f6;
      border: none;
    }
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: #1890ff;
    }
  }
`;

export const FemaleGender = styled(Checkbox)`
  && {
    .ant-checkbox-inner {
      background-color: #f5f6f6;
      border: none;
    }
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: #1890ff;
    }
  }
`;
