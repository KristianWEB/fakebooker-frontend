import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        {/* below line for testing */}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
