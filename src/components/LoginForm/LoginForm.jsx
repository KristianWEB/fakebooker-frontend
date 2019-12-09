import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Checkbox, Input, message } from "antd";
import { LOGIN_USER } from "../../utils/graphql/queries";

import { AuthDisplay, StyledButton } from "./LoginForm.styles";

const LoginForm = ({ history }) => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    remember: false
  });

  const [errors, setErrors] = useState({});

  const [isPending, setIsPending] = useState(false);

  const [loginUser] = useMutation(LOGIN_USER, {
    onCompleted: result => {
      const { token } = result.login;
      localStorage.setItem("token", token);
      message.success("Logged in successfully");
      history.push("/");
    },
    onError: err => setErrors(err.graphQLErrors[0].extensions.exception.errors),
    variables: {
      email: loginState.email,
      password: loginState.password
    }
  });
  const onChange = e =>
    setLoginState({ ...loginState, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    if (isPending) {
      return;
    }
    setIsPending(true);

    const { email, password } = loginState;

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
      message.error("Email can't be empty!");
      setIsPending(false);
      return;
    }
    if (!emailRegex.test(email)) {
      message.error("Email isn't valid!");
      setIsPending(false);
      return;
    }
    if (!password) {
      message.error("Password can't be empty!");
      setIsPending(false);
      return;
    }

    loginUser();
    setIsPending(false);
  };

  return (
    <AuthDisplay>
      <h1>Welcome Back</h1>
      <h3 style={{ color: "#808080" }}>Login to continue</h3>
      <form onSubmit={onSubmit}>
        <Input
          type="email"
          name="email"
          value={loginState.email}
          onChange={onChange}
          placeholder="Email"
          size="large"
          style={{ marginBottom: "40px" }}
        />
        <Input.Password
          type="password"
          name="password"
          value={loginState.password}
          onChange={onChange}
          placeholder="Password"
          size="large"
          style={{ marginBottom: "40px" }}
        />
        <Checkbox
          checked={loginState.remember}
          onChange={event => {
            setLoginState({
              ...loginState,
              remember: event.target.checked
            });
          }}
          style={{ marginBottom: "40px" }}
        >
          Remember Me
        </Checkbox>
        <StyledButton
          type="primary"
          htmlType="submit"
          block
          loading={isPending}
        >
          <span style={{ fontSize: "16px" }}>Login</span>
        </StyledButton>
      </form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map(value => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
      <a style={{ color: "#3b5999" }} href="/">
        Forgot Password?
      </a>
    </AuthDisplay>
  );
};

export default LoginForm;
