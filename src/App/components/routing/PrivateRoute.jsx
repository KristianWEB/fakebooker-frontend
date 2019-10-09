import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated && loading !== null || false ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.defaultProps = {
  auth: {
    isAuthenticated: false,
    loading: true
  }
};

PrivateRoute.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    loading: PropTypes.bool
  })
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
