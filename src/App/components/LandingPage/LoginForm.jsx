import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Checkbox, Input, message } from "antd";
import { login as loginUser } from "../../actions/auth";

import { AuthDisplay, StyledButton } from "./LandingPage.styles";

const LoginForm = ({ login, isAuthenticated }) => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    remember: false
  });

  const [isPending, setIsPending] = useState(false);

  const onChange = e =>
    setLoginState({ ...loginState, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    if (isPending) {
      return;
    }
    setIsPending(true);

    const { email, password, remember } = loginState;

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
    setIsPending(false);

    login(email, password, remember);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

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
      <a style={{ color: "#3b5999" }} href="/">
        Forgot Password?
      </a>
    </AuthDisplay>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login: loginUser }
)(LoginForm);
