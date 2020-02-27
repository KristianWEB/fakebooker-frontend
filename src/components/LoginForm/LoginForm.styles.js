import styled from "styled-components";
import { Button, Input, Row } from "antd";

export const LoginFormContainer = styled(Row)`
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

export const LoginHeading = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 30px;
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
