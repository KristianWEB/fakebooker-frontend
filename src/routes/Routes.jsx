import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AboutOverview from "../pages/AboutPage/AboutOverview";
import AboutWorkAndEducation from "../pages/AboutPage/AboutWorkAndEducation";
import AboutContactAndBasicInfo from "../pages/AboutPage/AboutContactAndBasicInfo";
import PrivateRoute from "./PrivateRoute";
import AboutRoute from "./AboutRoute";
import Image from "../components/Image/Image";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/auth" component={AuthPage} />
        <PrivateRoute exact path="/:username" component={ProfilePage} />
        <PrivateRoute exact path="/test/image" component={Image} />
        <AboutRoute
          exact
          path="/:username/about_overview"
          component={AboutOverview}
        />
        <AboutRoute
          path="/:username/about_work_and_education"
          component={AboutWorkAndEducation}
        />
        <AboutRoute
          exact
          path="/:username/about_contact_and_basic_info"
          component={AboutContactAndBasicInfo}
        />
        <Route render={() => <Redirect to="/auth" />} />
      </Switch>
    </Router>
  );
};

export default Routes;
