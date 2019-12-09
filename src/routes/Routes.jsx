import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { LOAD_USER } from "../utils/graphql/queries";
import LandingPage from "../pages/LandingPage/LandingPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import NavBar from "../components/Navbar/Navbar";
import PrivateRoute from "./PrivateRoute";

export default function Routes() {
  useQuery(LOAD_USER);
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <Route exact path="/login" component={LandingPage} />
        <PrivateRoute exact path="/profile" component={ProfilePage} />
        <Route exact path="/profile/:username" component={ProfilePage} />
        <Route exact path="/navbar" component={NavBar} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
