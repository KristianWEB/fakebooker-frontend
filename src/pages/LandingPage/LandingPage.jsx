import React from "react";
import { Redirect } from "react-router-dom";
import { Tabs, Col } from "antd";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LandingPageBackground from "../../assets/svg/undraw_processing_qj6a.svg";

import {
  LandingContentContainer,
  AuthContainer,
  StyledCol,
  LandingPageContainer
} from "./LandingPage.styles";

const { TabPane } = Tabs;

const Auth = ({ history }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Redirect to="/profile" />;
  }

  return (
    <AuthContainer>
      <Col span={20} offset={2}>
        <Tabs tabPosition="top">
          <TabPane tab="Login" key="1">
            <LoginForm history={history} />
          </TabPane>
          <TabPane
            tab="Register"
            key="2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <RegisterForm history={history} />
          </TabPane>
        </Tabs>
      </Col>
    </AuthContainer>
  );
};

const LandingPage = props => {
  return (
    <LandingPageContainer>
      <LandingPageBackground />
      <StyledCol>
        <Auth history={props.history} />
      </StyledCol>
    </LandingPageContainer>
  );
};

export default LandingPage;
