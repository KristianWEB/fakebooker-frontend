import React from "react";
import { Link } from "react-router-dom";

import {
  NotFoundContainer,
  NotFound,
  NotFound404,
  Msg404
} from "./NotFoundPage.styles";

import background from "../../assets/images/bg.jpg";

export default function NotFoundPage() {
  return (
    <NotFoundContainer>
      <NotFound>
        <NotFound404>
          <Msg404 img={background}>Oops!</Msg404>
        </NotFound404>
        <h2>404 - Page not found</h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/profile">Go To Homepage</Link>
      </NotFound>
    </NotFoundContainer>
  );
}
