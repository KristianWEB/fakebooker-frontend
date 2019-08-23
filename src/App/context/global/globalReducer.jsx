import { LOGIN, LOG_OUT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN:
      if (action.data.remember) {
        localStorage.setItem("authToken", action.data.authToken);
      } else {
        sessionStorage.setItem("authToken", action.data.authToken);
      }
      return {
        ...state,
        ...action.data
      };
    case LOG_OUT:
      sessionStorage.removeItem("authToken");
      localStorage.removeItem("authToken");
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};
