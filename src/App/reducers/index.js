import { combineReducers } from "redux";
import auth from "./auth";
import post from "./post";

export default combineReducers({
  auth,
  post
});
