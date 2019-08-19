import React from 'react';
import './App.css';

import LandingPage from './components/LandingPage/LandingPage';


import FeatureState from './Context/feature/FeatureState';

const App = () => (
  <FeatureState>
    <LandingPage />
  </FeatureState>
);

export default App;
