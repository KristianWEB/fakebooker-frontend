import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import LandingPage from "../LandingPage/LandingPage";
import HomePage from "../HomePage/HomePage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import Gallery from "../Gallery/Gallery";
import NavBar from "../Navbar/Navbar";
import PrivateRoute from "./PrivateRoute";
// import GlobalProvider from "../../context/global/GlobalProvider";
// import PostProvider from "../../context/post/PostProvider";

// Redux
import store from "../../store";
import { loadUser } from "../../actions/auth";
import setAuthToken from "../../utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default function Routes() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      {/* <GlobalProvider>
        <PostProvider> */}
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route exact path="/login" component={LandingPage} />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <Route exact path="/profile/:username" component={ProfilePage} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/navbar" component={NavBar} />
          {/* below line for testing */}
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
      {/* </PostProvider>
      </GlobalProvider> */}
    </Provider>
  );
}
