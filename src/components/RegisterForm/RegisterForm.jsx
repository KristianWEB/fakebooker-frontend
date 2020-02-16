import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { message, Form, Radio } from "antd";
import { REGISTER_USER } from "../../utils/graphql/queries";
import {
  RegisterFormContainer,
  StyledButton,
  RegisterHeading,
  FirstNameLabel,
  FirstNameInput,
  LastNameInput,
  EmailInput,
  PasswordInput,
  NameContainer,
  BirthdayLabel,
  BirthdayInput
} from "./RegisterForm.styles";

const RegisterForm = ({ history }) => {
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

  const onChangeBirthday = e => setBirthday(e.format("x"));

  const [registerUser] = useMutation(REGISTER_USER, {
    onCompleted: result => {
      const { token } = result.register;
      localStorage.setItem("token", token);
      message.success("Registered successfully");
      history.push("/profile");
    },
    variables: {
      username: signUpState.username,
      email: signUpState.email,
      password: signUpState.password,
      confirmPassword: signUpState.confirmPassword
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
      <Form onSubmit={onSubmitRegister}>
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
            <FirstNameLabel>Last name</FirstNameLabel>
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
          <FirstNameLabel>Email</FirstNameLabel>
          <EmailInput
            name="email"
            value={signUpState.email}
            onChange={onChangeRegister}
            size="large"
            required
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: "15px" }}>
          <FirstNameLabel>Password</FirstNameLabel>
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
            format="DD-MM-YY"
            placeholder=""
            name="birthday"
            onChange={onChangeBirthday}
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: "15px" }}>
          <BirthdayLabel>Gender</BirthdayLabel>
          <Radio.Group
            onChange={onChangeRegister}
            value={signUpState.gender}
            name="gender"
          >
            <Radio value={1}>Female</Radio>
            <Radio value={2}>Male</Radio>
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
