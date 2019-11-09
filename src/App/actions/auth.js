import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT
} from "./types";

import setAuthToken from "../utils/setAuthToken";

export const loadUser = currentUser => dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else if (sessionStorage.token) {
    setAuthToken(sessionStorage.token);
  }
  try {
    if (currentUser) {
      dispatch({
        type: USER_LOADED,
        payload: currentUser
      });
    }
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = registerData => dispatch => {
  try {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: registerData
    });
    dispatch(loadUser(registerData));
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (loginData, remember) => dispatch => {
  try {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        ...loginData,
        remember
      }
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout user
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
