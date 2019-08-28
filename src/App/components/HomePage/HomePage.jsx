import React, { useContext } from "react";

import globalContext from "../../context/global/globalContext";

import "./HomePage.css";

const Home = () => {
  const GlobalContext = useContext(globalContext);

  const { logout } = GlobalContext;

  return (
    <div className="home-page-container">
      <p>Welcome to home page!</p>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a onClick={logout} href="#">
        <i className="fas fa-sign-out-alt" />
      </a>
    </div>
  );
};

export default Home;
