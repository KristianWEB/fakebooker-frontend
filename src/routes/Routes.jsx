import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterPage from "../pages/AuthPages/RegisterPage";
import LoginPage from "../pages/AuthPages/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import PhotosPage from "../pages/PhotosPage/PhotosPage";
import FriendsPage from "../pages/FriendsPage/FriendsPage";
import AboutOverview from "../pages/AboutPage/AboutOverview";
import AboutWorkAndEducation from "../pages/AboutPage/AboutWorkAndEducation";
import AboutContactAndBasicInfo from "../pages/AboutPage/AboutContactAndBasicInfo";
import PrivateRoute from "./PrivateRoute";
import ProfileRoute from "./ProfileRoute";
import NewsfeedPage from "../pages/NewsfeedPage/NewsfeedPage";
import SinglePostPage from "../pages/SinglePostPage/SinglePostPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
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
        <PrivateRoute exact path="/post/:postId" component={SinglePostPage} />
        <Route render={() => <Redirect to="/login" />} />
      </Switch>
      <ToastContainer draggable={false} />
    </Router>
  );
};

export default Routes;
