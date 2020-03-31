import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import UrlProfilePage from "../pages/ProfilePage/UrlProfilePage";
import AboutPageOverview from "../pages/AboutPage/AboutPageOverview";
import AboutPageWorkAndEducation from "../pages/AboutPage/AboutPageWorkAndEducation";

import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/auth" component={AuthPage} />
        <PrivateRoute exact path="/profile" component={ProfilePage} />
        <PrivateRoute
          exact
          path="/about_overview"
          component={AboutPageOverview}
        />
        <PrivateRoute
          exact
          path="/about_work_and_education"
          component={AboutPageWorkAndEducation}
        />
        <PrivateRoute
          exact
          path="/profile/:username"
          component={UrlProfilePage}
        />
        <Redirect from="/" to="/profile" />
      </Switch>
    </Router>
  );
};

export default Routes;
