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
  user: null,
  remember: false
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
    case LOGIN_SUCCESS:
      message.success("Logged in successfully");
      if (payload.remember) {
        localStorage.setItem("token", payload.data.token);
      } else {
        sessionStorage.setItem("token", payload.data.token);
      }
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };

    case REGISTER_SUCCESS:
      message.success("Logged in successfully");
      localStorage.setItem("token", payload.register.token);
      return {
        ...state,
        ...payload.register,
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

    case REGISTER_FAIL:
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      return {
        ...state,
        ...payload,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };

    case LOGOUT:
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
