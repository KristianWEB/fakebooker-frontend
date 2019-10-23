import axios from "axios";
import { ADD_POST, GET_POST, POST_ERROR } from "./types";
import setAuthToken from "../utils/setAuthToken";

const BaseURL = "https://osd-sidekick.herokuapp.com/api/posts";

// eslint-disable-next-line import/prefer-default-export
export const getPosts = () => async dispatch => {
  // this will be refactored later
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    setAuthToken(sessionStorage.token);
  }

  try {
    const res = await axios.get(`${BaseURL}/`);
    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        errors: err.response.data.errors
      }
    });
  }
};

export const addPost = ({ content }) => async dispatch => {
  // this will be refactored later
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    setAuthToken(sessionStorage.token);
  }

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ content });
  try {
    const res = await axios.post(`${BaseURL}`, body, config);
    dispatch({
      type: ADD_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        errors: err.response.data.errors
      }
    });
  }
};
