import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Form, message } from "antd";
import { LOGIN_USER } from "../../utils/graphql/queries";

import {
  LoginFormContainer,
  EmailLabel,
  PasswordLabel,
  EmailInput,
  PasswordInput,
  StyledButton,
  LoginHeading
} from "./LoginForm.styles";

const LoginForm = () => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: ""
  });

  const history = useHistory();

  const [loginUser] = useMutation(LOGIN_USER, {
    onCompleted: result => {
      const { token } = result.login;
      localStorage.setItem("token", token);
      message.success("Logged in successfully");
      history.push("/profile");
    },
    variables: {
      email: loginState.email,
      password: loginState.password
    }
  });
  const onChange = e =>
    setLoginState({ ...loginState, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    loginUser();
  };

  return (
    <LoginFormContainer>
      <LoginHeading>Sign in to Fakebooker</LoginHeading>
      <Form onSubmit={onSubmit} style={{ padding: "3px" }}>
        <Form.Item style={{ marginBottom: "15px" }}>
          <EmailLabel>Email</EmailLabel>
          <EmailInput
            name="email"
            value={loginState.email}
            onChange={onChange}
            size="large"
            required
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: "25px" }}>
          <PasswordLabel>Password</PasswordLabel>
          <PasswordInput
            name="password"
            value={loginState.password}
            onChange={onChange}
            size="large"
            required
          />
        </Form.Item>
        <StyledButton type="primary" htmlType="submit" block>
          Sign in
        </StyledButton>
      </Form>
    </LoginFormContainer>
  );
};

export default LoginForm;
