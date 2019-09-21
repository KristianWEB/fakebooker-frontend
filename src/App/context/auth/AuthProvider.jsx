import React, { useReducer, useCallback } from "react";

import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { LOGIN } from "../types";

const AuthProvider = props => {
  const initialState = {
    isAuthenticated: false
  };

  const [state, setState] = useReducer(authReducer, initialState);
  const setData = useCallback(
    data =>
      setState({
        type: LOGIN,
        data
      }),
    []
  );

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const BaseURL = "https://osd-sidekick.herokuapp.com/api/auth";

  const login = async (email, password) => {
    /*
    http://osd-sidekick.herokuapp.com
    email, password, remember
  */
    if (!email) {
      return { success: false, msg: "Email can't be empty!" };
    }
    if (!emailRegex.test(email)) {
      return { success: false, msg: "Email isn't valid!" };
    }
    if (!password) {
      return { success: false, msg: "Password can't be empty!" };
    }

    const res = await fetch(`${BaseURL}/login`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await res.json();
    return json;
  };

  const signUp = async (email, username, password, confirmPassword) => {
    /*
    http://osd-sidekick.herokuapp.com
    email, password
  */
    if (!username) {
      return {
        success: false,
        errors: { username: "Username can't be empty!" }
      };
    }
    if (!email) {
      return { success: false, errors: { email: "Email can't be empty!" } };
    }
    if (!emailRegex.test(email)) {
      return { success: false, errors: { email: "Email isn't valid!" } };
    }
    if (!password) {
      return {
        success: false,
        errors: { password: "Password can't be empty!" }
      };
    }
    if (password !== confirmPassword) {
      return {
        success: false,
        errors: { password: "Passwords must be same!" }
      };
    }
    const res = await fetch(`${BaseURL}/register`, {
      method: "POST",
      body: JSON.stringify({
        email,
        username,
        password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await res.json();
    return json;
  };

  const { Provider } = AuthContext;

  return (
    <Provider
      value={{
        state,
        setState: setData,
        login,
        signUp
      }}
    >
      {props.children}
    </Provider>
  );
};

export default AuthProvider;
