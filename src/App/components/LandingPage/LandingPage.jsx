import React, { useContext, useState } from "react";
import { Button, Checkbox, Col, Input, message, Row, Tabs } from "antd";

import AuthProvider from "../../context/auth/AuthProvider";
import authContext from "../../context/auth/authContext";
import globalContext from "../../context/global/globalContext";

import "./LandingPage.css";

const { TabPane } = Tabs;
const projectColor = "#3B5999";
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const BaseURL = "http://osd-sidekick.herokuapp.com/api/auth";

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

  if (GlobalContext.state.authToken) {
    props.isLoggedIn();
  }

  const login = async (email, password) => {
    /*
    http://osd-sidekick.herokuapp.com
    email, password, remember
  */
    if (!email) {
      return { success: false, msg: "Email can't be empty!" };
    }
    if (!emailRegex.test(email)) {
      return { success: false, msg: "Email isn't valid!" };
    }
    if (!password) {
      return { success: false, msg: "Password can't be empty!" };
    }

    const res = await fetch(`${BaseURL}/login`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await res.json();
    return json;
  };

  const signUp = async (email, password, confirmPassword) => {
    /*
    http://osd-sidekick.herokuapp.com
    email, password
  */
    if (!email) {
      return { success: false, msg: "Email can't be empty!" };
    }
    if (!emailRegex.test(email)) {
      return { success: false, msg: "Email isn't valid!" };
    }
    if (!password) {
      return { success: false, msg: "Password can't be empty!" };
    }
    if (password !== confirmPassword) {
      return { success: false, msg: "Passwords must be same!" };
    }
    const res = await fetch(`${BaseURL}/register`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await res.json();
    return json;
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
          <img
            src="https://avatars1.githubusercontent.com/u/54007466?s=200&v=4"
            alt=""
          />
        </div>
        <Tabs tabPosition="top">
          <TabPane tab="Login" key="1">
            <div className="auth_display">
              <h1>Welcome Back</h1>
              <h3>Login to continue</h3>
              <Input
                value={loginState.email}
                onChange={event => {
                  setLoginState({
                    ...loginState,
                    email: event.target.value
                  });
                }}
                placeholder="Email"
                size="large"
              />
              <Input.Password
                value={loginState.password}
                onChange={event => {
                  setLoginState({
                    ...loginState,
                    password: event.target.value
                  });
                }}
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
                Rememeber Me
              </Checkbox>
              <Button
                type="primary"
                block
                style={{
                  height: "40px",
                  backgroundColor: projectColor,
                  borderColor: projectColor
                }}
                onClick={async event => {
                  event.preventDefault();

                  const loginResponse = await login(
                    loginState.email,
                    loginState.password
                  );
                  if (loginResponse.success) {
                    message.success("Login sucessful");
                    AuthContext.setState({
                      isAuthenticated: true
                    });
                    GlobalContext.setState({
                      authToken: loginResponse.token,
                      remember: loginState.remember
                    });
                    props.isLoggedIn();
                  } else {
                    message.error(loginResponse.msg);
                  }
                }}
              >
                <span style={{ fontSize: "16px" }}>Login</span>
              </Button>
              <a style={{ color: projectColor }} href="/">
                Forgot Password?
              </a>
            </div>
          </TabPane>
          <TabPane tab="Register" key="2">
            <div className="auth_display">
              <h1>Create Your Account</h1>
              <h3>Register</h3>
              <Input
                value={signUpState.email}
                onChange={event => {
                  setSignUpState({
                    ...signUpState,
                    email: event.target.value
                  });
                }}
                placeholder="Email"
                size="large"
              />
              <Input.Password
                value={signUpState.password}
                onChange={event => {
                  setSignUpState({
                    ...signUpState,
                    password: event.target.value
                  });
                }}
                placeholder="New Password"
                size="large"
              />
              <Input.Password
                value={signUpState.confirmPassword}
                onChange={event => {
                  setSignUpState({
                    ...signUpState,
                    confirmPassword: event.target.value
                  });
                }}
                placeholder="Confirm Password"
                size="large"
              />
              <Button
                type="primary"
                block
                style={{
                  height: "40px",
                  backgroundColor: projectColor,
                  borderColor: projectColor
                }}
                onClick={async event => {
                  event.preventDefault();

                  const signUpResponse = await signUp(
                    signUpState.email,
                    signUpState.password,
                    signUpState.confirmPassword
                  );
                  if (signUpResponse.success) {
                    message.success("Registration sucessful");
                  } else {
                    message.error(signUpResponse.msg);
                  }
                }}
              >
                <span style={{ fontSize: "16px" }}>Register</span>
              </Button>
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
          span={16}
          style={{ backgroundColor: projectColor, height: "100vh" }}
        >
          <LandingContent />
        </Col>
        <Col span={8} style={{ backgroundColor: "#FEFDF9", height: "100vh" }}>
          <Auth isLoggedIn={isLoggedIn} />
        </Col>
      </Row>
    </AuthProvider>
  );
};

export default LandingPage;
