import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
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
  DayInput,
  MonthInput,
  YearInput,
  FemaleGender,
  MaleGender,
  FemaleLabel,
  MaleLabel,
  FemaleContainer,
  MaleContainer
} from "./RegisterForm.styles";

const RegisterForm = () => {
  const { register, handleSubmit, getValues } = useForm();

  const history = useHistory();

  const { birthday } = getValues({ nest: true });

  const [registerUser] = useMutation(REGISTER_USER, {
    onCompleted: result => {
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
      birthday:
        birthday &&
        new Date(birthday.birthDay + birthday.birthMonth + birthday.birthYear)
    }
  });

  const onSubmitRegister = e => {
    registerUser();
  };

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
            <FirstNameInput name="firstName" ref={register} />
          </FirstNameContainer>
          <LastNameContainer>
            <LastNameLabel>Last name</LastNameLabel>
            <LastNameInput name="lastName" ref={register} />
          </LastNameContainer>
        </NameContainer>
        <EmailContainer>
          <EmailLabel>Email</EmailLabel>
          <EmailInput name="email" ref={register} />
        </EmailContainer>
        <PasswordContainer>
          <PasswordLabel>Password</PasswordLabel>
          <PasswordInput name="password" type="password" ref={register} />
        </PasswordContainer>
        <BirthdayContainer>
          <BirthdayLabel>Birthday</BirthdayLabel>
          <div style={{ display: "flex" }}>
            <DayInput
              name="birthday.birthDay"
              placeholder="30"
              ref={register}
            />
            <MonthInput
              name="birthday.birthMonth"
              placeholder="April"
              ref={register}
            />
            <YearInput
              name="birthday.birthYear"
              placeholder="1995"
              ref={register}
            />
          </div>
        </BirthdayContainer>
        <GenderLabel>Gender</GenderLabel>
        <GenderContainer>
          <FemaleContainer>
            <FemaleGender
              name="gender"
              value="Female"
              type="radio"
              ref={register}
            />
            <FemaleLabel htmlFor="female">Female</FemaleLabel>
          </FemaleContainer>
          <MaleContainer>
            <MaleGender
              value="Male"
              name="gender"
              type="radio"
              ref={register}
            />
            <MaleLabel htmlFor="male">Male</MaleLabel>
          </MaleContainer>
        </GenderContainer>
        <StyledButton htmlType="submit">Create Account</StyledButton>
      </form>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
