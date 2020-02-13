import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
    ${normalize}

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

   html, body {
    font-size: 62.5%;
   } 

   .svgBackground {
       display: none;
       @media only screen and (min-width: 1100px) {
           display: block;
       }
   }
`;
