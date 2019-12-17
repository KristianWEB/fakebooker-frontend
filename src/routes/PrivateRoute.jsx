import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { IS_LOGGED_IN } from "../utils/graphql/queries";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {
    data: { isLoggedIn }
  } = useQuery(IS_LOGGED_IN);
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
