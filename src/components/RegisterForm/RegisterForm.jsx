import React, { useState } from "react";
// import { useMutation } from "@apollo/react-hooks";
// import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";
// import { REGISTER_USER } from "../../utils/queries";
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
  const [signUpState, setSignUpState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: ""
  });
  // const { register, handleSubmit, getValues, errors } = useForm();

  // const [birthday /*setBirthday*/] = useState(null);

  const onChangeRegister = e =>
    setSignUpState({ ...signUpState, [e.target.name]: e.target.value });

  // const history = useHistory();

  // const [registerUser] = useMutation(REGISTER_USER, {
  //   onCompleted: result => {
  //     const { token, username } = result.register;
  //     localStorage.setItem("token", token);
  //     history.push(`/${username}`);
  //   },
  //   variables: {
  //     firstName: signUpState.firstName,
  //     lastName: signUpState.lastName,
  //     email: signUpState.email,
  //     password: signUpState.password,
  //     gender: signUpState.gender,
  //     birthday
  //   }
  // });

  // const onSubmitRegister = e => {
  // e.preventDefault();
  // console.log(e);

  // registerUser();

  // setSignUpState({
  //   email: "",
  //   username: "",
  //   password: "",
  //   confirmPassword: ""
  // });
  // };

  return (
    <RegisterFormContainer>
      <RegisterHeading>Sign Up to Fakebooker</RegisterHeading>
      <form
        // onSubmit={handleSubmit(onSubmitRegister)}
        style={{ padding: "3px" }}
      >
        <NameContainer>
          <FirstNameContainer>
            <FirstNameLabel>First name</FirstNameLabel>
            <FirstNameInput
              name="firstName"
              value={signUpState.firstName}
              onChange={onChangeRegister}
              // ref={register({
              //   required: "First name is required"
              // })}
            />
          </FirstNameContainer>
          <LastNameContainer>
            <LastNameLabel>Last name</LastNameLabel>
            <LastNameInput
              name="lastName"
              value={signUpState.lastName}
              onChange={onChangeRegister}
              // ref={register}
            />
          </LastNameContainer>
        </NameContainer>
        <EmailContainer>
          <EmailLabel>Email</EmailLabel>
          <EmailInput
            name="email"
            value={signUpState.email}
            onChange={onChangeRegister}
            // ref={register}
          />
        </EmailContainer>
        <PasswordContainer>
          <PasswordLabel>Password</PasswordLabel>
          <PasswordInput
            name="password"
            type="password"
            value={signUpState.password}
            onChange={onChangeRegister}
            // ref={register}
          />
        </PasswordContainer>
        <BirthdayContainer>
          <BirthdayLabel>Birthday</BirthdayLabel>
          <div style={{ display: "flex" }}>
            <DayInput
              name="birthday.birthDay"
              placeholder="30"
              // ref={register}
            />
            <MonthInput
              name="birthday.birthMonth"
              placeholder="April"
              // ref={register}
            />
            <YearInput
              name="birthday.birthYear"
              placeholder="1995"
              // ref={register}
            />
          </div>
        </BirthdayContainer>
        <GenderLabel>Gender</GenderLabel>
        <GenderContainer>
          <FemaleContainer>
            <FemaleGender
              name="gender"
              value="female"
              type="radio"
              // ref={register}
            />
            <FemaleLabel htmlFor="female">Female</FemaleLabel>
          </FemaleContainer>
          <MaleContainer>
            <MaleGender
              value="male"
              name="gender"
              type="radio"
              // ref={register}
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
