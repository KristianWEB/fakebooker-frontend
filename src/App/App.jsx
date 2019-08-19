import React from 'react';
import './App.css';

import LandingPage from './components/LandingPage/LandingPage';


import FeatureState from './context/feature/FeatureState';

const App = () => {
  return (
    <FeatureState>
      <LandingPage />
    </FeatureState>
  );
};

export default App;
