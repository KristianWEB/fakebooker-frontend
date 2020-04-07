import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { message, Form, Radio } from "antd";
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
  BirthdayInput
} from "./RegisterForm.styles";

const RegisterForm = () => {
  const [signUpState, setSignUpState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: ""
  });

  const [birthday, setBirthday] = useState(null);

  const onChangeRegister = e =>
    setSignUpState({ ...signUpState, [e.target.name]: e.target.value });

  const onChangeBirthday = e => setBirthday(e && e.format());

  const history = useHistory();
  const [registerUser] = useMutation(REGISTER_USER, {
    onCompleted: result => {
      const { token, username } = result.register;
      localStorage.setItem("token", token);
      message.success("Registered successfully");
      history.push(`/${username}`);
    },
    variables: {
      firstName: signUpState.firstName,
      lastName: signUpState.lastName,
      email: signUpState.email,
      password: signUpState.password,
      gender: signUpState.gender,
      birthday
    }
  });

  const onSubmitRegister = async e => {
    e.preventDefault();

    registerUser();

    setSignUpState({
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    });
  };
  return (
    <RegisterFormContainer>
      <RegisterHeading>Sign Up to Fakebooker</RegisterHeading>
      <Form onSubmit={onSubmitRegister} style={{ padding: "3px" }}>
        <NameContainer>
          <Form.Item
            style={{ marginBottom: "15px", width: "50%", marginRight: "16px" }}
          >
            <FirstNameLabel>First name</FirstNameLabel>
            <FirstNameInput
              name="firstName"
              value={signUpState.firstName}
              onChange={onChangeRegister}
              size="large"
              required
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: "15px", width: "50%" }}>
            <LastNameLabel>Last name</LastNameLabel>
            <LastNameInput
              name="lastName"
              value={signUpState.lastName}
              onChange={onChangeRegister}
              size="large"
              required
            />
          </Form.Item>
        </NameContainer>
        <Form.Item style={{ marginBottom: "15px" }}>
          <EmailLabel>Email</EmailLabel>
          <EmailInput
            name="email"
            value={signUpState.email}
            onChange={onChangeRegister}
            size="large"
            required
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: "15px" }}>
          <PasswordLabel>Password</PasswordLabel>
          <PasswordInput
            name="password"
            value={signUpState.password}
            onChange={onChangeRegister}
            size="large"
            required
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: "15px" }}>
          <BirthdayLabel>Birthday</BirthdayLabel>
          <BirthdayInput
            format="MMMM DD YYYY"
            placeholder=""
            name="birthday"
            onChange={onChangeBirthday}
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: "15px" }}>
          <GenderLabel>Gender</GenderLabel>
          <Radio.Group
            onChange={onChangeRegister}
            value={signUpState.gender}
            name="gender"
          >
            <Radio value="Female">Female</Radio>
            <Radio value="Male">Male</Radio>
          </Radio.Group>
        </Form.Item>
        <StyledButton type="primary" htmlType="submit" block>
          Create Account
        </StyledButton>
      </Form>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
