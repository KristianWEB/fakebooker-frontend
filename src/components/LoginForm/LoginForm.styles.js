import styled from "styled-components";
import { Button, Input, Row } from "antd";

export const LoginFormContainer = styled(Row)`
  width: 500px;
  font-family: "Roboto";
`;

export const StyledButton = styled(Button)`
  && {
    background-color: ${props => props.theme.primaryText};
    width: 50%;
    height: auto;
    padding: 8px 0;
    font-size: 1.6rem;

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

export const LoginHeading = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 30px;
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
