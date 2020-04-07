import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { Tabs } from "antd";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LoginForm from "../../components/LoginForm/LoginForm";

import {
  RegisterPageContainer,
  RegisterPageBackground,
  FormContainer,
  SVGImgBackground,
  ActionsContainer
} from "./AuthPage.styles";
import { LOAD_USER } from "../../utils/queries";

const AuthPage = () => {
  const { data: userData } = useQuery(LOAD_USER);

  if (userData) {
    return <Redirect to={`/${userData.loadUser.username}`} />;
  }

  return (
    <RegisterPageContainer>
      <RegisterPageBackground>
        <SVGImgBackground />
      </RegisterPageBackground>
      <ActionsContainer>
        <FormContainer>
          <Tabs defaultActiveKey="2" style={{ width: "500px" }}>
            <Tabs.TabPane tab="Register" key="1">
              <RegisterForm />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Login" key="2">
              <LoginForm />
            </Tabs.TabPane>
          </Tabs>
        </FormContainer>
      </ActionsContainer>
    </RegisterPageContainer>
  );
};

export default AuthPage;
