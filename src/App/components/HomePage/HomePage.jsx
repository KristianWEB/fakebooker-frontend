import React from "react";

import HomeContainer from "./HomePage.styles";

const Home = () => {
  return (
    <HomeContainer>
      <p>Welcome to home page!</p>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a onClick={console.log("This should log you out...")} href="#">
        <i className="fas fa-sign-out-alt" style={{ fontSize: "48px" }} />
      </a>
    </HomeContainer>
  );
};

export default Home;
