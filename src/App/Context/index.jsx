import React, { useReducer, createContext, useCallback } from 'react';

import ACTION_NAMES from '../Constants';
import reducer from './reducer';

const initialContext = { data: {} };

export const Context = createContext(initialContext);

export const ContextProvider = ({ children }) => {
  const [context, dispatch] = useReducer(reducer, initialContext);

  const setData = useCallback((data) => dispatch({
    type: ACTION_NAMES.NAME,
    data,
  }), []);

  return (
    <Context.Provider value={{
      context,
      setData,
    }}
    >
      {children}
    </Context.Provider>
  );
};
