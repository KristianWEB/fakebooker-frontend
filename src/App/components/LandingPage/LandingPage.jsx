import React, { useContext } from "react";
import { Row, Col, Tabs, Input, Button, Checkbox } from "antd";

import FeatureContext from '../../context/feature/featureContext';
import './LandingPage.css';

const { TabPane } = Tabs;
const projectColor = "#3B5999";

const Auth = (props) => (
  <div
    className="authentication"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    }}
  >
    <Col span={20} offset={2}>
      <div id="project-logo">
        {/* TEMPORARY PLACEHOLDER FOR LOGO */}
        <img src="https://avatars1.githubusercontent.com/u/54007466?s=200&v=4" alt="" />
      </div>
      <Tabs tabPosition="top">
        <TabPane tab="Login" key="1">
          <div className="auth_display">
            <h1>Welcome Back</h1>
            <h3>Login to continue</h3>
            <Input placeholder='Email' size='large' />
            <Input.Password placeholder='Password' size='large' />
            <Checkbox style={{ alignSelf: "left" }}>Rememeber Me</Checkbox>
            <Button type='primary' block style={{ height: "40px", backgroundColor: projectColor, borderColor: projectColor }}>
              <span style={{ fontSize: "16px" }}>Login</span>
            </Button>
            <a style={{ color: projectColor }} href="#">Forgot Password?</a>
          </div>
        </TabPane>
        <TabPane tab='Register' key='2'>
          <div className='auth_display'>
            <h1>Create Your Account</h1>
            <h3>Register</h3>
            <Input placeholder='Email' size='large' />
            <Input.Password placeholder='New Password' size='large' />
            <Input.Password placeholder='Confirm Password' size='large' />
            <Button type='primary' block style={{ height: "40px", backgroundColor: projectColor, borderColor: projectColor }}>
              <span style={{ fontSize: "16px" }}>Register</span>
            </Button>
          </div>
        </TabPane>
      </Tabs>
    </Col>
  </div >
);

const LandingContent = props => (
  <div className="container">
    <img src="https://www.123freevectors.com/wp-content/original/131220-dark-blue-polygon-background-graphic-design.jpg" alt="" />
  </div>
)

const LandingPage = props => {
  const featureContext = useContext(FeatureContext);
  // const { items } = featureContext;

  return (
    <Row>
      <Col span={16} style={{ backgroundColor: projectColor, height: "100vh" }}>
        <LandingContent />
      </Col>
      <Col span={8} style={{ backgroundColor: '#FEFDF9', height: '100vh' }}>
        <Auth />
      </Col>
    </Row>
  );
};

export default LandingPage;
