import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import AboutLayout from "./layouts/AboutLayout";

const AboutRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <AboutLayout>
            <Component {...props} />
          </AboutLayout>
        ) : (
          <Redirect to="/auth" />
        )
      }
    />
  );
};

export default AboutRoute;

AboutRoute.propTypes = {
  component: PropTypes.func
};

AboutRoute.defaultProps = {
  component: null
};
