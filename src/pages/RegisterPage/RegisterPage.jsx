import React from "react";
import { Redirect } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

import {
  RegisterPageContainer,
  RegisterPageBackground,
  FormContainer,
  SVGImgBackground,
  SignInContainer,
  SignInButton,
  ActionsContainer
} from "./RegisterPage.styles";

const RegisterPage = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/profile" />;
  }

  return (
    <RegisterPageContainer>
      <RegisterPageBackground>
        <SVGImgBackground />
      </RegisterPageBackground>
      <ActionsContainer>
        <SignInContainer>
          Already a member?<SignInButton type="link">Sign in</SignInButton>
        </SignInContainer>
        <FormContainer>
          <RegisterForm />
        </FormContainer>
      </ActionsContainer>
    </RegisterPageContainer>
  );
};

export default RegisterPage;
