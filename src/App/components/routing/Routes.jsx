import React, { useState, useEffect } from "react";
import { message } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import LandingPage from "../LandingPage/LandingPage";
import HomePage from "../HomePage/HomePage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import Gallery from "../Gallery/Gallery";
import NavBar from "../Navbar/Navbar";
import PrivateRoute from "./PrivateRoute";
import { LOAD_USER } from "../../graphql/queries";

// Redux
import store from "../../store";
import { loadUser } from "../../actions/auth";
import setAuthToken from "../../utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default function Routes() {
  const [errors, setErrors] = useState({});

  const { error, data } = useQuery(LOAD_USER, {});
  if (error) {
    setErrors(error.graphQLErrors[0].extensions.exception.errors);
    console.log(error);
  }

  useEffect(() => {
    store.dispatch(loadUser(data));
  }, [errors, data]);

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
