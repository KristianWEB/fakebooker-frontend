import React, { useContext, useState } from "react";
import { Checkbox, Col, Input, message, Row, Tabs } from "antd";
import logo from "../../../assets/logo.svg";

import AuthProvider from "../../context/auth/AuthProvider";
import authContext from "../../context/auth/authContext";
import globalContext from "../../context/global/globalContext";

import {
  AuthContainer,
  AuthDisplay,
  ProjectLogo,
  StyledButton,
  StyledCol
} from "./LandingPage.styles";

const { TabPane } = Tabs;

const Auth = props => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    remember: false
  });
  const [signUpState, setSignUpState] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [isPending, setIsPending] = useState(false);

  const AuthContext = useContext(authContext);
  const GlobalContext = useContext(globalContext);

  // Actual functions from auth provider
  const { login, signUp } = AuthContext;

  if (GlobalContext.state.authToken) {
    props.isLoggedIn();
  }

  const onChange = e =>
    setLoginState({ ...loginState, [e.target.name]: e.target.value });

  const onChangeRegister = e =>
    setSignUpState({ ...signUpState, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    if (isPending) {
      return;
    }
    setIsPending(true);

    const { email, password, remember } = loginState;

    const loginResponse = await login(email, password);

    const { success, token, msg } = loginResponse;

    setIsPending(false);

    if (success) {
      message.success("Login successful");
      AuthContext.setState({
        isAuthenticated: true
      });
      GlobalContext.setState({
        authToken: token,
        remember
      });
      props.isLoggedIn();
    } else {
      message.error(msg);
    }
  };

  const onSubmitRegister = async e => {
    e.preventDefault();

    if (isPending) {
      return;
    }
    setIsPending(true);

    const { email, password, confirmPassword } = signUpState;

    const signUpResponse = await signUp(email, password, confirmPassword);

    const { success, token, msg } = signUpResponse;

    setIsPending(false);

    if (success) {
      message.success("Registration successful");

      AuthContext.setState({
        isAuthenticated: true
      });

      GlobalContext.setState({
        authToken: token
      });

      setSignUpState({
        email: "",
        password: "",
        confirmPassword: ""
      });

      props.isLoggedIn();
    } else {
      message.error(msg);
    }
  };

  return (
    <AuthContainer>
      <Col span={20} offset={2}>
        {/* TEMPORARY PLACEHOLDER FOR LOGO */}
        <ProjectLogo src={logo} alt="" />
        <Tabs tabPosition="top">
          <TabPane tab="Login" key="1">
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
              <a style={{ color: "#3b5999", marginBottom: "40px" }} href="/">
                Forgot Password?
              </a>
            </AuthDisplay>
          </TabPane>
          <TabPane tab="Register" key="2">
            <AuthDisplay>
              <h1>Create Your Account</h1>
              <h3 style={{ color: "#808080" }}>Register</h3>
              <form onSubmit={onSubmitRegister}>
                <Input
                  name="email"
                  value={signUpState.email}
                  onChange={onChangeRegister}
                  placeholder="Email"
                  size="large"
                  style={{ marginBottom: "40px" }}
                />
                <Input.Password
                  name="password"
                  value={signUpState.password}
                  onChange={onChangeRegister}
                  placeholder="New Password"
                  size="large"
                  style={{ marginBottom: "40px" }}
                />
                <Input.Password
                  name="confirmPassword"
                  value={signUpState.confirmPassword}
                  onChange={onChangeRegister}
                  placeholder="Confirm Password"
                  size="large"
                  style={{ marginBottom: "40px" }}
                />
                <StyledButton
                  type="primary"
                  htmlType="submit"
                  block
                  loading={isPending}
                >
                  <span style={{ fontSize: "16px" }}>Register</span>
                </StyledButton>
              </form>
            </AuthDisplay>
          </TabPane>
        </Tabs>
      </Col>
    </AuthContainer>
  );
};

const LandingContent = () => (
  <div style={{ backgroundColor: "#f5f5f5" }}>
    <img
      src="https://www.123freevectors.com/wp-content/original/131220-dark-blue-polygon-background-graphic-design.jpg"
      alt="logo"
    />
  </div>
);

const LandingPage = props => {
  const isLoggedIn = () => {
    props.history.replace("/");
  };
  return (
    <AuthProvider>
      <Row>
        <StyledCol xs={0} md={12} lg={16} background="#3b5999">
          <LandingContent />
        </StyledCol>
        <StyledCol xs={24} md={12} lg={8} background="#fefdf9">
          <Auth isLoggedIn={isLoggedIn} />
        </StyledCol>
      </Row>
    </AuthProvider>
  );
};

export default LandingPage;
