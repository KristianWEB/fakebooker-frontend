import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../../utils/queries";

import {
  LoginFormContainer,
  EmailLabel,
  PasswordLabel,
  EmailInput,
  PasswordInput,
  StyledButton,
  LoginHeading,
  EmailContainer,
  PasswordContainer
} from "./LoginForm.styles";

const LoginForm = () => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: ""
  });

  const history = useHistory();

  const [loginUser] = useMutation(LOGIN_USER, {
    onCompleted: result => {
      const { token, username } = result.login;
      localStorage.setItem("token", token);
      history.push(`/${username}`);
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
      <form onSubmit={onSubmit}>
        <EmailContainer>
          <EmailLabel>Email</EmailLabel>
          <EmailInput
            name="email"
            value={loginState.email}
            onChange={onChange}
          />
        </EmailContainer>
        <PasswordContainer>
          <PasswordLabel>Password</PasswordLabel>
          <PasswordInput
            name="password"
            type="password"
            value={loginState.password}
            onChange={onChange}
          />
        </PasswordContainer>
        <StyledButton htmlType="submit">Sign in</StyledButton>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
