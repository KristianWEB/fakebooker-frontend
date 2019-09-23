import { FETCHING, FETCHED, ERROR } from "./actions";

const FetchReducer = (state, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        error: "",
        data: "",
        isFetching: true
      };
    case FETCHED:
      return {
        ...state,
        error: "",
        isFetching: false,
        data: action.payload
      };
    case ERROR:
      return {
        ...state,
        isFetching: false,
        data: "",
        error: action.payload
      };
    default:
      throw new Error();
  }
};

export default FetchReducer;
