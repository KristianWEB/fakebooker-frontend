import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LandingPage} />
        <PrivateRoute exact path="/profile" component={ProfilePage} />
        <Redirect from="/" to="/profile" />
      </Switch>
    </Router>
  );
};

export default Routes;
