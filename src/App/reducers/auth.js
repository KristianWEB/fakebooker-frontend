import { message } from "antd";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token") || sessionStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      message.success("Logged in successfully");
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      message.error(payload.msg);
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };

    case LOGOUT:
    case REGISTER_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };
    default:
      return state;
  }
}
