import React, { useReducer, useCallback } from "react";

import PostContext from "./postContext";
import postReducer from "./postReducer";
import { EXAMPLE_TYPE } from "../types";

const FeatureState = props => {
  const initialState = {
    items: ["item1", "item2", "item3", "item4"]
  };

  const [state, dispatch] = useReducer(postReducer, initialState);
  const setData = useCallback(
    data =>
      dispatch({
        type: EXAMPLE_TYPE,
        data
      }),
    []
  );

  const { Provider } = PostContext;

  return (
    <Provider
      value={{
        items: state.items,
        setData
      }}
    >
      {props.children}
    </Provider>
  );
};

export default FeatureState;
