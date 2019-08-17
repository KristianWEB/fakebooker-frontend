import React, { useReducer, useCallback } from 'react';

import FeatureContext from './featureContext';
import featureReducer from './featureReducer';
import { EXAMPLE_TYPE } from '../types';

const FeatureState = props => {
  const initialState = {
    items: ['item1', 'item2', 'item3', 'item4']
  };

  const [state, dispatch] = useReducer(featureReducer, initialState);

  const setData = useCallback(
    data =>
      dispatch({
        type: EXAMPLE_TYPE,
        data
      }),
    []
  );

  return (
    <FeatureContext.Provider
      value={{
        items: state.items,
        setData
      }}
    >
      {props.children}
    </FeatureContext.Provider>
  );
};

export default FeatureState;
