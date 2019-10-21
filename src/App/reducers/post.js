import { message } from "antd";
import { ADD_POST, POST_ERROR } from "../actions/types";

const initialState = {
  content: null
};

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
        ...payload
      };

    default:
      return state;
  }
}
