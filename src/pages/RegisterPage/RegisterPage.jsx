import React from "react";
import { Redirect } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import BgImg from "../../assets/icons/undraw_processing_qj6a.svg";

import {
  RegisterPageContainer,
  RegisterPageBackground,
  FormContainer
} from "./RegisterPage.styles";

const RegisterPage = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/profile" />;
  }

  return (
    <RegisterPageContainer>
      <RegisterPageBackground>
        <BgImg width="100%" className="svgBackground" />
      </RegisterPageBackground>
      <FormContainer>
        <RegisterForm />
      </FormContainer>
    </RegisterPageContainer>
  );
};

export default RegisterPage;
