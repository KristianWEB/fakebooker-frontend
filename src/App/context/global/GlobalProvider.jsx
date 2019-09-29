import React, { useReducer, useCallback } from "react";

import { message } from "antd";

import globalContext from "./globalContext";
import globalReducer from "./globalReducer";
import { LOGIN, LOG_OUT, REGISTER } from "../types";

const GlobalProvider = props => {
  const initialState = {
    authToken:
      sessionStorage.getItem("authToken") || localStorage.getItem("authToken")
  };

  const [state, setState] = useReducer(globalReducer, initialState);

  const setData = useCallback(data => {
    setState({
      type: LOGIN,
      data
    });
  }, []);

  const logout = useCallback(() => {
    setState({
      type: LOG_OUT
    });

    message.success("Logout successful");
  }, []);

  const register = useCallback(() => {
    setState({
      type: REGISTER
    });

    message.success("Register successful");
  }, []);

  const { Provider } = globalContext;

  return (
    <Provider
      value={{
        state,
        setState: setData,
        logout,
        register
      }}
    >
      {props.children}
    </Provider>
  );
};

export default GlobalProvider;
