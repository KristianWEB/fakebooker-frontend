import axios from "axios";
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

const BaseURL = "https://osd-sidekick.herokuapp.com/api/auth";

// const LocalURL = "http://localhost:8080/api/auth";

// Load User

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${BaseURL}`);

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};
// Register User
export const register = ({ username, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post(`${BaseURL}/register`, body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    if (err) {
      console.error(err);
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${BaseURL}/login`, body, config);
    if (res.data.success) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      dispatch(loadUser());
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: res.data
      });
    }
  } catch (err) {
    if (err) {
      console.error(err);
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout user
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
