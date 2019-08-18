import React, { useContext, useEffect } from 'react';

import { ContextProvider, Context } from './Context';

const App = () => {
  const {
    context: {
      data: {
        testData,
      },
    },
    setData,
  } = useContext(Context);

  const testData1 = { data2: 'string' };

  useEffect(() => {
    setData({
      testData: { testData1 },
    });
  }, [setData, testData, testData1]);
  return (
    <div>
      <header>
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {testData1.data2}
      {' '}
is rendered
    </div>
  );
};
export default () => (
  <ContextProvider>
    <App />
  </ContextProvider>
);
