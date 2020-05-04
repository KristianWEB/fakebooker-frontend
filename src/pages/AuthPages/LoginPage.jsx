import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import LoginForm from "../../components/LoginForm/LoginForm";
import {
  LoginPageContainer,
  LoginPageBackground,
  FormContainer,
  SVGImgBackground,
  ActionsContainer,
} from "./LoginPage.styles";
import { LOAD_USER } from "../../utils/queries";

const LoginPage = () => {
  const { data: userData } = useQuery(LOAD_USER);

  if (userData) {
    return <Redirect to={`/${userData.loadUser.username}`} />;
  }

  return (
    <LoginPageContainer>
      <LoginPageBackground>
        <SVGImgBackground />
      </LoginPageBackground>
      <ActionsContainer>
        <FormContainer>
          <LoginForm />
        </FormContainer>
      </ActionsContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
