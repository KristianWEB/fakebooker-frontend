import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import Gallery from "../Gallery/Gallery";
import NavBar from "../Navbar/Navbar";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/navbar" component={NavBar} />
        {/* below line for testing */}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
