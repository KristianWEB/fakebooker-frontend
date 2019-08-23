import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import globalContext from "../../context/global/globalContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { state } = useContext(globalContext);

  return (
    <Route
      {...rest}
      render={props =>
        state.authToken ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
