import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import PhotosPage from "../pages/PhotosPage/PhotosPage";
import FriendsPage from "../pages/FriendsPage/FriendsPage";
import AboutOverview from "../pages/AboutPage/AboutOverview";
import AboutWorkAndEducation from "../pages/AboutPage/AboutWorkAndEducation";
import AboutContactAndBasicInfo from "../pages/AboutPage/AboutContactAndBasicInfo";
import PrivateRoute from "./PrivateRoute";
import ProfileRoute from "./ProfileRoute";
import NewsfeedPage from "../pages/NewsfeedPage/NewsfeedPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/auth" component={AuthPage} />
        <ProfileRoute exact path="/:username" component={ProfilePage} />
        <ProfileRoute exact path="/:username/photos" component={PhotosPage} />
        <ProfileRoute exact path="/:username/friends" component={FriendsPage} />
        <ProfileRoute
          exact
          path="/:username/about_overview"
          component={AboutOverview}
        />
        <ProfileRoute
          path="/:username/about_work_and_education"
          component={AboutWorkAndEducation}
        />
        <ProfileRoute
          exact
          path="/:username/about_contact_and_basic_info"
          component={AboutContactAndBasicInfo}
        />
        <PrivateRoute exact path="/" component={NewsfeedPage} />
        <Route render={() => <Redirect to="/auth" />} />
      </Switch>
    </Router>
  );
};

export default Routes;
