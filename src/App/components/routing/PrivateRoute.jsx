import React, { useState } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { auth, setAuth } = useState(false);
  const { loading, setLoading } = useState(false);
  return (
    <Route
      {...rest}
      render={props =>
        auth && !loading ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
