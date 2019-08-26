import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import Gallery from "../Gallery/Gallery";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/gallery" component={Gallery} />
        {/* below line for testing */}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
