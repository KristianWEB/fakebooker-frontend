import { useHistory, Link } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { LOGIN_USER } from "../../utils/queries";

import {
  LoginFormContainer,
  Label,
  Input,
  InputContainer,
  StyledButton,
  LoginHeading,
  ErrorMessageContainer,
  ErrorMessageHeading,
  RegisterContainer,
  RegisterLink,
} from "./LoginForm.styles";
import { ReactComponent as ErrorIcon } from "../../assets/icons/alert-circle.svg";

const LoginForm = () => {
  const { register, handleSubmit, getValues, errors } = useForm();
  const [graphQLError, setGraphQLError] = useState(undefined);

  const history = useHistory();

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    onCompleted: (result) => {
      const { token, username } = result.login;
      localStorage.setItem("token", token);
      history.push(`/${username}`);
    },
    variables: {
      email: getValues("email"),
      password: getValues("password"),
    },
    onError: (error) => setGraphQLError(error.graphQLErrors[0]),
  });

  const onSubmit = () => {
    loginUser();
  };

  return (
    <LoginFormContainer>
      <LoginHeading>Sign in to Fakebooker</LoginHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>Email</Label>
          <Input
            name="email"
            ref={register({
              required: "Email is required",
            })}
          />
          {errors && errors.email && (
            <ErrorMessageContainer>
              <ErrorIcon width={20} height={20} fill="#d93025" />
              <ErrorMessageHeading>{errors.email.message}</ErrorMessageHeading>
            </ErrorMessageContainer>
          )}
        </InputContainer>
        <InputContainer>
          <Label>Password</Label>
          <Input
            name="password"
            type="password"
            ref={register({
              required: "Password is required",
            })}
          />
          {errors && errors.password && (
            <ErrorMessageContainer>
              <ErrorIcon width={20} height={20} fill="#d93025" />
              <ErrorMessageHeading>
                {errors.password.message}
              </ErrorMessageHeading>
            </ErrorMessageContainer>
          )}
        </InputContainer>
        <StyledButton htmlType="submit" disabled={loading}>
          Sign in
          {loading && (
            <Loader
              type="TailSpin"
              color="#fff"
              style={{
                position: "absolute",
                right: "16px",
                top: "12px",
              }}
              height={20}
              width={20}
            />
          )}
        </StyledButton>
        {graphQLError && (
          <ErrorMessageContainer>
            <ErrorIcon width={20} height={20} fill="#d93025" />
            <ErrorMessageHeading>{graphQLError.message}</ErrorMessageHeading>
          </ErrorMessageContainer>
        )}
      </form>
      <RegisterContainer>
        Not a member?
        <Link to="/register">
          <RegisterLink>Sign up now</RegisterLink>
        </Link>
      </RegisterContainer>
    </LoginFormContainer>
  );
};

export default LoginForm;
