import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={RegisterPage} />
        <PrivateRoute exact path="/profile" component={ProfilePage} />
        <Redirect from="/" to="/profile" />
      </Switch>
    </Router>
  );
};

export default Routes;
