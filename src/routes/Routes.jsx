import React from "react";
import { useQuery } from "@apollo/react-hooks";
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
import { LOAD_USER } from "../utils/queries";

const Routes = () => {
  const { data: userData } = useQuery(LOAD_USER);

  if (!userData) {
    return null;
  }
  const { loadUser: user } = userData;

  return (
    <Router>
      <Switch>
        <Route exact path="/auth" component={AuthPage} />
        <PrivateRoute exact path="/:username" component={ProfilePage} />
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
        <Redirect from="*" to={`/${user.username}`} />
      </Switch>
    </Router>
  );
};

export default Routes;
