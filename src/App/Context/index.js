import React, { useReducer, createContext, useCallback } from 'react';

import ACTION_NAMES from '../constants';
import reducer from './reducer';

const initialContext = {data:{}};

export const Context = createContext(initialContext);

export const ContextProvider = ({ children }) => {
  const [ Context, dispatch ] = useReducer(reducer, initialContext);

  const setData = useCallback(data => dispatch({
    type: ACTION_NAMES.NAME,
    data,
  }), []);

  return (
    <Context.Provider value={{
      context: Context,
      setData,
    }}
    >
      {children}
    </Context.Provider>
  );
};
