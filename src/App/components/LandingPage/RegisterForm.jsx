import React, { useState} from "react";
import { connect } from 'react-redux';
import { Input, message } from "antd";
import PropTypes from 'prop-types';


// import authContext from "../../context/auth/authContext";
// import globalContext from "../../context/global/globalContext";
// Redux
import { register } from '../../actions/auth';

import { AuthDisplay, StyledButton } from "./LandingPage.styles";

const RegisterForm = ({register}) => {
  const [signUpState, setSignUpState] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const [isPending, setIsPending] = useState(false);

  // const AuthContext = useContext(authContext);
  // const GlobalContext = useContext(globalContext);

  // Actual functions from auth provider
  // const { signUp } = AuthContext;

  const onChangeRegister = e =>
    setSignUpState({ ...signUpState, [e.target.name]: e.target.value });

  const onSubmitRegister = async e => {
    e.preventDefault();

    if (isPending) {
      return;
    }
    setIsPending(true);

    const { email, username, password, confirmPassword } = signUpState;

    // if (!password.match(/(?=.*[A-Z])/)) {
    //   message.error("password must contain at least one upppercase character");
    //   setIsPending(false);
    //   return;
    // }

    // if (!password.match(/(?=.*\d)/)) {
    //   message.error("password must contain at least one number");
    //   setIsPending(false);
    //   return;
    // }

    // if (password.length < 8) {
    //   message.error("password must be at least 8 characters");
    //   setIsPending(false);
    //   return;
    // }

    // const signUpResponse = await signUp(
    //   email,
    //   username,
    //   password,
    //   confirmPassword
    // );

    // const { success, token, errors } = signUpResponse;
    setIsPending(false);

    if (password !== confirmPassword) {

      // AuthContext.setState({
      //   isAuthenticated: true
      // });

      // GlobalContext.setState({
      //   authToken: token
      // });


    } else {
      // Object.keys(errors).forEach(key => {
      //   message.error(errors[key]);
      // });
      message.success("Registration successful");

      register({username, email, password});

      setSignUpState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
      });
    }
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
        <StyledButton
          type="primary"
          htmlType="submit"
          block
          loading={isPending}
        >
          <span style={{ fontSize: "16px" }}>Register</span>
        </StyledButton>
      </form>
    </AuthDisplay>
  );
};

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
}

export default  connect(
  null,
  {register}
) (RegisterForm);
