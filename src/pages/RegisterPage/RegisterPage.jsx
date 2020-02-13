import React from "react";
import { Redirect } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

import {
  RegisterPageContainer,
  RegisterPageBackground,
  FormContainer,
  SVGImgBackground
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
      <FormContainer>
        <RegisterForm />
      </FormContainer>
    </RegisterPageContainer>
  );
};

export default RegisterPage;
