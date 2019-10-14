import React from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout as logoutUser } from "../../actions/auth";

import HomeContainer from "./HomePage.styles";

const Home = ({ logout }) => {
  return (
    <HomeContainer>
      <p>Welcome to home page!</p>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a onClick={logout} href="#">
        <i className="fas fa-sign-out-alt" style={{ fontSize: "48px" }} />
      </a>
    </HomeContainer>
  );
};

Home.propTypes = {
  logout: PropTypes.func.isRequired
};

export default connect(
  null,
  { logout: logoutUser }
)(Home);
