import React, { useContext } from 'react';
import {
  Row, Col, Tabs, Input, Button,
} from 'antd';

import FeatureContext from '../../context/feature/featureContext';
import './LandingPage.css';

const { TabPane } = Tabs;


const Auth = (props) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }}
  >
    <Col span={20} offset={2}>
      <Tabs tabPosition="top">
        <TabPane tab="Login" key="1">
          <div className="auth_display">
            <h2>Login to continue</h2>
            <Input placeholder="Email" size="large" />
            <Input.Password placeholder="Password" size="large" />
            <Button type="primary" block style={{ height: '40px' }}>
              <span style={{ fontSize: '16px' }}>Login</span>
            </Button>
          </div>
        </TabPane>
        <TabPane tab="Register" key="2">
          <div>
            <h3>Register</h3>
            <Input placeholder="Email" size="large" />
            <Input.Password placeholder="Password" size="large" />
            <Button type="primary" block>Login</Button>
          </div>
        </TabPane>
      </Tabs>
    </Col>
  </div>
);

const LandingPage = (props) => {
  const featureContext = useContext(FeatureContext);
  // const { items } = featureContext;

  return (
    <Row>
      <Col span={16} style={{ backgroundColor: '#FEB048', height: '100vh' }}><h1>Left side</h1></Col>
      <Col span={8} style={{ backgroundColor: '#FEFDF9', height: '100vh' }}><Auth /></Col>
    </Row>
  );
};

export default LandingPage;
