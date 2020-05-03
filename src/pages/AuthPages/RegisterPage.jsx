import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import {
  RegisterPageContainer,
  RegisterPageBackground,
  FormContainer,
  SVGImgBackground,
  ActionsContainer
} from "./RegisterPage.styles";
import { LOAD_USER } from "../../utils/queries";

const RegisterPage = () => {
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
          <RegisterForm />
        </FormContainer>
      </ActionsContainer>
    </RegisterPageContainer>
  );
};

export default RegisterPage;
