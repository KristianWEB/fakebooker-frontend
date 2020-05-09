import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { REGISTER_USER } from "../../utils/queries";
import {
  RegisterFormContainer,
  StyledButton,
  RegisterHeading,
  FirstNameLabel,
  LastNameLabel,
  EmailLabel,
  PasswordLabel,
  GenderLabel,
  FirstNameInput,
  LastNameInput,
  EmailInput,
  PasswordInput,
  NameContainer,
  BirthdayLabel,
  FirstNameContainer,
  LastNameContainer,
  EmailContainer,
  PasswordContainer,
  BirthdayContainer,
  GenderContainer,
  BirthdayInput,
  FemaleGender,
  MaleGender,
  FemaleLabel,
  MaleLabel,
  FemaleContainer,
  MaleContainer,
  ErrorMessageContainer,
  ErrorMessageHeading,
  LoginContainer,
  LoginLink,
} from "./RegisterForm.styles";
import { ReactComponent as ErrorIcon } from "../../assets/icons/alert-circle.svg";

const RegisterForm = () => {
  const { register, handleSubmit, getValues, errors } = useForm();
  const [graphQLError, setGraphQLError] = useState(undefined);

  const history = useHistory();

  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    onCompleted: (result) => {
      const { token, username } = result.register;
      localStorage.setItem("token", token);
      history.push(`/${username}`);
    },
    variables: {
      firstName: getValues("firstName"),
      lastName: getValues("lastName"),
      email: getValues("email"),
      password: getValues("password"),
      gender: getValues("gender"),
      birthday: getValues("birthday"),
    },
    onError: (error) => setGraphQLError(error.graphQLErrors[0]),
  });

  const onSubmitRegister = () => {
    registerUser();
  };

  console.log(errors);

  return (
    <RegisterFormContainer>
      <RegisterHeading>Sign Up to Fakebooker</RegisterHeading>
      <form
        onSubmit={handleSubmit(onSubmitRegister)}
        style={{ padding: "3px" }}
      >
        <NameContainer>
          <FirstNameContainer>
            <FirstNameLabel>First name</FirstNameLabel>
            <FirstNameInput
              name="firstName"
              ref={register({
                required: "First name is required",
              })}
            />
            {errors.firstName && (
              <ErrorMessageContainer>
                <ErrorIcon width={20} height={20} fill="#d93025" />
                <ErrorMessageHeading>
                  {errors.firstName.message}
                </ErrorMessageHeading>
              </ErrorMessageContainer>
            )}
          </FirstNameContainer>
          <LastNameContainer>
            <LastNameLabel>Last name</LastNameLabel>
            <LastNameInput
              name="lastName"
              ref={register({
                required: "Last name is required",
              })}
            />
            {errors.lastName && (
              <ErrorMessageContainer>
                <ErrorIcon width={20} height={20} fill="#d93025" />
                <ErrorMessageHeading>
                  {errors.lastName.message}
                </ErrorMessageHeading>
              </ErrorMessageContainer>
            )}
          </LastNameContainer>
        </NameContainer>
        <EmailContainer>
          <EmailLabel>Email</EmailLabel>
          <EmailInput
            name="email"
            ref={register({
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email is not valid",
              },
            })}
          />
          {errors.email && (
            <ErrorMessageContainer>
              <ErrorIcon width={20} height={20} fill="#d93025" />
              <ErrorMessageHeading>{errors.email.message}</ErrorMessageHeading>
            </ErrorMessageContainer>
          )}
          {graphQLError && (
            <ErrorMessageContainer>
              <ErrorIcon width={20} height={20} fill="#d93025" />
              <ErrorMessageHeading>{graphQLError.message}</ErrorMessageHeading>
            </ErrorMessageContainer>
          )}
        </EmailContainer>
        <PasswordContainer>
          <PasswordLabel>Password</PasswordLabel>
          <PasswordInput
            name="password"
            type="password"
            ref={register({
              required: "Password is required",
            })}
          />
          {errors.password && (
            <ErrorMessageContainer>
              <ErrorIcon width={20} height={20} fill="#d93025" />
              <ErrorMessageHeading>
                {errors.password.message}
              </ErrorMessageHeading>
            </ErrorMessageContainer>
          )}
        </PasswordContainer>
        <BirthdayContainer>
          <BirthdayLabel>Birthday</BirthdayLabel>
          <BirthdayInput
            name="birthday"
            type="date"
            placeholder="Birthday"
            ref={register({
              required: "Birthday is required",
            })}
          />
          {errors.birthday && (
            <ErrorMessageContainer>
              <ErrorIcon width={20} height={20} fill="#d93025" />
              <ErrorMessageHeading>
                {errors.birthday.message}
              </ErrorMessageHeading>
            </ErrorMessageContainer>
          )}
        </BirthdayContainer>
        <GenderLabel>Gender</GenderLabel>
        <GenderContainer>
          <div style={{ display: "flex" }}>
            <FemaleContainer>
              <FemaleGender
                name="gender"
                value="Female"
                type="radio"
                ref={register({
                  required: "Gender is required",
                })}
              />
              <FemaleLabel htmlFor="female">Female</FemaleLabel>
            </FemaleContainer>
            <MaleContainer>
              <MaleGender
                value="Male"
                name="gender"
                type="radio"
                ref={register({
                  required: "Gender is required",
                })}
              />
              <MaleLabel htmlFor="male">Male</MaleLabel>
            </MaleContainer>
          </div>
          {errors.gender && (
            <ErrorMessageContainer>
              <ErrorIcon width={20} height={20} fill="#d93025" />
              <ErrorMessageHeading>{errors.gender.message}</ErrorMessageHeading>
            </ErrorMessageContainer>
          )}
        </GenderContainer>
        <StyledButton htmlType="submit" disabled={loading}>
          Create Account
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
      </form>
      <LoginContainer>
        Already a member?
        <Link to="/login">
          <LoginLink>Sign In</LoginLink>
        </Link>
      </LoginContainer>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
