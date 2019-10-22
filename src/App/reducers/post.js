import { message } from "antd";
import { ADD_POST, POST_ERROR } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_POST:
      message.success("Posted successfully");
      return {
        ...state,
        ...payload
      };
    case POST_ERROR:
      message.error("Error");
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
}
