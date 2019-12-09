import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Input, message } from "antd";
import { REGISTER_USER } from "../../utils/graphql/queries";
import { AuthDisplay, StyledButton } from "./RegisterForm.styles";

const RegisterForm = ({ history }) => {
  const [signUpState, setSignUpState] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const onChangeRegister = e =>
    setSignUpState({ ...signUpState, [e.target.name]: e.target.value });

  const [registerUser] = useMutation(REGISTER_USER, {
    onCompleted: result => {
      const { token } = result.register;
      localStorage.setItem("token", token);
      message.success("Registered successfully");
      history.push("/");
    },
    onError: err => setErrors(err.graphQLErrors[0].extensions.exception.errors),
    variables: {
      username: signUpState.username,
      email: signUpState.email,
      password: signUpState.password,
      confirmPassword: signUpState.confirmPassword
    }
  });

  const onSubmitRegister = async e => {
    e.preventDefault();
    const { password, confirmPassword } = signUpState;

    if (!password.match(/(?=.*[A-Z])/)) {
      message.error("password must contain at least one upppercase character");
      return;
    }

    if (!password.match(/(?=.*\d)/)) {
      message.error("password must contain at least one number");
      return;
    }

    if (password.length < 8) {
      message.error("password must be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      message.error("Passwords must be the same");
      return;
    }

    registerUser();

    setSignUpState({
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    });
  };
  return (
    <AuthDisplay>
      <h1>Create Your Account</h1>
      <h3 style={{ color: "#808080" }}>Register</h3>
      <form onSubmit={onSubmitRegister}>
        <Input
          name="username"
          value={signUpState.username}
          onChange={onChangeRegister}
          placeholder="Username"
          size="large"
          style={{ marginBottom: "40px" }}
          required
        />
        <Input
          name="email"
          value={signUpState.email}
          onChange={onChangeRegister}
          placeholder="Email"
          size="large"
          style={{ marginBottom: "40px" }}
          required
        />
        <Input.Password
          name="password"
          value={signUpState.password}
          onChange={onChangeRegister}
          placeholder="New Password"
          size="large"
          required
        />
        <p
          style={{
            fontSize: "12px",
            color: "grey",
            marginBottom: "40px",
            marginTop: "5px"
          }}
        >
          Password should have atleast 1 lowercase letter, 1 uppercase letter, 1
          number
        </p>
        <Input.Password
          name="confirmPassword"
          value={signUpState.confirmPassword}
          onChange={onChangeRegister}
          placeholder="Confirm Password"
          size="large"
          style={{ marginBottom: "40px" }}
          required
        />
        <StyledButton type="primary" htmlType="submit" block>
          <span style={{ fontSize: "16px" }}>Register</span>
        </StyledButton>
      </form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map(value => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </AuthDisplay>
  );
};

export default RegisterForm;
