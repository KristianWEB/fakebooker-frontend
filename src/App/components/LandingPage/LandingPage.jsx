import React, { useContext, useState } from 'react';
import { Button, Checkbox, Col, Input, message, Row, Tabs } from 'antd';

import AuthProvider from '../../context/auth/AuthProvider';
import authContext from '../../context/auth/authContext';
import globalContext from '../../context/global/globalContext';

import './LandingPage.css';

const { TabPane } = Tabs;
const projectColor = '#3B5999';


const Auth = props => {
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [signUpState, setSignUpState] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const AuthContext = useContext(authContext);
  const GlobalContext = useContext(globalContext);

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

      const loginResponse = await login(
        loginState.email,
        loginState.password
      );
      if (loginResponse.success) {
        message.success('Login sucessful');
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
  }

  const onSubmitRegister = async e => {
      e.preventDefault();

      const signUpResponse = await signUp(
        signUpState.email,
        signUpState.password,
        signUpState.confirmPassword
      );
      if (signUpResponse.success) {
        message.success('Registration sucessful');
      } else {
        message.error(signUpResponse.msg);
      }
  }

  return (
    <div
      className="authentication"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
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
                style={{ alignSelf: 'left' }}
              >
                Rememeber Me
              </Checkbox>
              <Button
                type="primary"
                block
                style={{
                  height: '40px',
                  backgroundColor: projectColor,
                  borderColor: projectColor
                }}
                onClick={onSubmit}
              >
                <span style={{ fontSize: '16px' }}>Login</span>
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
                block
                style={{
                  height: '40px',
                  backgroundColor: projectColor,
                  borderColor: projectColor
                }}
                onClick={onSubmitRegister}
              >
                <span style={{ fontSize: '16px' }}>Register</span>
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
    props.history.push('/');
  };
  return (
    <AuthProvider>
      <Row>
        <Col
          span={16}
          style={{ backgroundColor: projectColor, height: '100vh' }}
        >
          <LandingContent />
        </Col>
        <Col span={8} style={{ backgroundColor: '#FEFDF9', height: '100vh' }}>
          <Auth isLoggedIn={isLoggedIn} />
        </Col>
      </Row>
    </AuthProvider>
  );
};

export default LandingPage;
