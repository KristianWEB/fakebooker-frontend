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

  const { Provider } = AuthContext;

  return (
    <Provider
      value={{
        state,
        setState: setData
      }}
    >
      {props.children}
    </Provider>
  );
};

export default AuthProvider;
