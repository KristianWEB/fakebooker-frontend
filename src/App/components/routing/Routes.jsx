import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import HomePage from "../HomePage/HomePage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import Gallery from "../Gallery/Gallery";
import NavBar from "../Navbar/Navbar";

import PrivateRoute from "./PrivateRoute";

import GlobalProvider from "../../context/global/GlobalProvider";

export default function Routes() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route exact path="/login" component={LandingPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/navbar" component={NavBar} />
          {/* below line for testing */}
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}
