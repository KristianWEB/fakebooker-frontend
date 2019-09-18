import React, { useContext } from "react";

import globalContext from "../../context/global/globalContext";

import HomeContainer from "./HomePage.styles";

const Home = () => {
  const GlobalContext = useContext(globalContext);

  const { logout } = GlobalContext;

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

export default Home;
