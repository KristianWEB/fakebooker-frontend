import React, { useContext } from "react";

import globalContext from "../../context/global/globalContext";

import "./HomePage.css";

const Home = props => {
  const GlobalContext = useContext(globalContext);

  const { logout } = GlobalContext;

  return (
    <div className="home-page-container">
      <p>Welcome to home page!</p>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        onClick={e => {
          e.preventDefault();
          logout(props.history);
        }}
        href="#"
      >
        <i className="fas fa-sign-out-alt" />
      </a>
    </div>
  );
};

export default Home;
