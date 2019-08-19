import React, { useContext } from 'react';

import FeatureContext from '../../context/feature/featureContext';

const LandingPage = (props) => {
  const featureContext = useContext(FeatureContext);

  const { items } = featureContext;

  return items.map((item, index) => <h1 key={Math.random()}>{item}</h1>);
};

export default LandingPage;
