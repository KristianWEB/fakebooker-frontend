import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR
} from "./types";

import setAuthToken from "../utils/setAuthToken";

const BaseURL = "https://osd-sidekick.herokuapp.com/api/auth";

const LocalURL = "http://localhost:8080/api/auth";

// Load User

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${LocalURL}`);

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    console.error(err)
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
    const res = await axios.post(`${LocalURL}/register`, body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    if (err) {
      console.error(err);
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
