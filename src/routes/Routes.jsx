import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import PrivateRoute from "./PrivateRoute";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LandingPage} />
        <PrivateRoute exact path="/profile" component={ProfilePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
