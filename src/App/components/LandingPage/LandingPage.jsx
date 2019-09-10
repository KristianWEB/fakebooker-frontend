import React, { useContext, useState } from "react";
import { Button, Checkbox, Col, Input, message, Row, Tabs } from "antd";
import logo from "../../../assets/logo.svg";

import AuthProvider from "../../context/auth/AuthProvider";
import authContext from "../../context/auth/authContext";
import globalContext from "../../context/global/globalContext";

import "./LandingPage.css";

const { TabPane } = Tabs;
const projectColor = "#3B5999";

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

    const { email, password, remember } = loginState;

    const loginResponse = await login(email, password);

    const { success, token, msg } = loginResponse;

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

    const { email, password, confirmPassword } = signUpState;

    const signUpResponse = await signUp(email, password, confirmPassword);

    const { success, token, msg } = signUpResponse;

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
    <div
      className="authentication"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }}
    >
      <Col span={20} offset={2}>
        <div id="project-logo">
          {/* TEMPORARY PLACEHOLDER FOR LOGO */}
          <img src={logo} alt="" />
        </div>
        <Tabs tabPosition="top">
          <TabPane tab="Login" key="1">
            <div className="auth_display">
              <h1>Welcome Back</h1>
              <h3>Login to continue</h3>
              <form onSubmit={onSubmit} className="loginForm">
                <Input
                  type="email"
                  name="email"
                  value={loginState.email}
                  onChange={onChange}
                  placeholder="Email"
                  size="large"
                />
                <Input.Password
                  type="password"
                  name="password"
                  value={loginState.password}
                  onChange={onChange}
                  placeholder="Password"
                  size="large"
                />
                <Checkbox
                  checked={loginState.remember}
                  onChange={event => {
                    setLoginState({
                      ...loginState,
                      remember: event.target.checked
                    });
                  }}
                  style={{ alignSelf: "left" }}
                >
                  Remember Me
                </Checkbox>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{
                    height: "40px",
                    backgroundColor: projectColor,
                    borderColor: projectColor
                  }}
                >
                  <span style={{ fontSize: "16px" }}>Login</span>
                </Button>
              </form>
              <a style={{ color: projectColor }} href="/">
                Forgot Password?
              </a>
            </div>
          </TabPane>
          <TabPane tab="Register" key="2">
            <div className="auth_display">
              <h1>Create Your Account</h1>
              <h3>Register</h3>
              <form onSubmit={onSubmitRegister} className="registerForm">
                <Input
                  name="email"
                  value={signUpState.email}
                  onChange={onChangeRegister}
                  placeholder="Email"
                  size="large"
                />
                <Input.Password
                  name="password"
                  value={signUpState.password}
                  onChange={onChangeRegister}
                  placeholder="New Password"
                  size="large"
                />
                <Input.Password
                  name="confirmPassword"
                  value={signUpState.confirmPassword}
                  onChange={onChangeRegister}
                  placeholder="Confirm Password"
                  size="large"
                />
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{
                    height: "40px",
                    backgroundColor: projectColor,
                    borderColor: projectColor
                  }}
                >
                  <span style={{ fontSize: "16px" }}>Register</span>
                </Button>
              </form>
            </div>
          </TabPane>
        </Tabs>
      </Col>
    </div>
  );
};

const LandingContent = () => (
  <div className="container">
    <img
      src="https://www.123freevectors.com/wp-content/original/131220-dark-blue-polygon-background-graphic-design.jpg"
      alt="logo"
    />
  </div>
);

const LandingPage = props => {
  const isLoggedIn = () => {
    props.history.push("/");
  };
  return (
    <AuthProvider>
      <Row>
        <Col
          xs={0}
          md={12}
          lg={16}
          style={{ backgroundColor: projectColor, height: "100vh" }}
        >
          <LandingContent />
        </Col>
        <Col
          xs={24}
          md={12}
          lg={8}
          style={{ backgroundColor: "#FEFDF9", height: "100vh" }}
        >
          <Auth isLoggedIn={isLoggedIn} />
        </Col>
      </Row>
    </AuthProvider>
  );
};

export default LandingPage;
