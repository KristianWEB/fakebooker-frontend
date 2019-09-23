import React, { useContext } from "react";
import { Col, Row, Tabs } from "antd";

import logo from "../../../assets/logo.svg";
import backgroundImg from "../../../assets/images/landing-page-background.jpg";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import AuthProvider from "../../context/auth/AuthProvider";
import globalContext from "../../context/global/globalContext";

import {
  LandingContentContainer,
  AuthContainer,
  ProjectLogo,
  StyledCol
} from "./LandingPage.styles";

const { TabPane } = Tabs;

const Auth = props => {
  const GlobalContext = useContext(globalContext);

  if (GlobalContext.state.authToken) {
    props.isLoggedIn();
  }

  return (
    <AuthContainer>
      <Col span={20} offset={2}>
        {/* TEMPORARY PLACEHOLDER FOR LOGO */}
        <ProjectLogo src={logo} alt="" />
        <Tabs tabPosition="top">
          <TabPane tab="Login" key="1">
            <LoginForm isLoggedIn={props.isLoggedIn} />
          </TabPane>
          <TabPane tab="Register" key="2">
            <RegisterForm isLoggedIn={props.isLoggedIn} />
          </TabPane>
        </Tabs>
      </Col>
    </AuthContainer>
  );
};

const LandingContent = () => (
  <LandingContentContainer>
    <img src={backgroundImg} alt="logo" />
  </LandingContentContainer>
);

const LandingPage = props => {
  const isLoggedIn = () => {
    props.history.replace("/");
  };
  return (
    <AuthProvider>
      <Row style={{ position: "relative" }}>
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
