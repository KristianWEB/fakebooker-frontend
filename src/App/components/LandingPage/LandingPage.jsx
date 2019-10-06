import React from "react";
import PropTypes from 'prop-types'
import { Redirect } from "react-router-dom";
import { Col, Row, Tabs } from "antd";


import logo from "../../../assets/logo.svg";
import backgroundImg from "../../../assets/images/landing-page-background.jpg";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

// import AuthProvider from "../../context/auth/AuthProvider";
// import globalContext from "../../context/global/globalContext";

// Redux
import { connect } from "react-redux";

import {
  LandingContentContainer,
  AuthContainer,
  ProjectLogo,
  StyledCol
} from "./LandingPage.styles";

const { TabPane } = Tabs;

const Auth = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <AuthContainer>
      <Col span={20} offset={2}>
        {/* TEMPORARY PLACEHOLDER FOR LOGO */}
        <ProjectLogo src={logo} alt="" />
        <Tabs tabPosition="top">
          <TabPane tab="Login" key="1">
            <LoginForm />
          </TabPane>
          <TabPane tab="Register" key="2">
            <RegisterForm />
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

const LandingPage = () => {
  return (
    <Row style={{ position: "relative" }}>
      <StyledCol xs={0} md={12} lg={16} background="#3b5999">
        <LandingContent />
      </StyledCol>
      <StyledCol xs={24} md={12} lg={8} background="#fefdf9">
        <Auth />
      </StyledCol>
    </Row>
  );
};


Auth.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {}
)(LandingPage);
