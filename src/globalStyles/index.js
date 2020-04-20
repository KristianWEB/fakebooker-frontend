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
   #root {
       width: 100%;
       height: 100%;
   }

   .ant-popover-inner-content {
    padding: 0;
   }
   .ant-popover-inner {
    border-radius: 8px;
   }

   .ant-popover-arrow {
       display: none;
   }

   .ant-popover {
       @media only screen and (max-width: 575px) {
           width: 100% !important;
       }
   }
   .ant-notification-notice-with-icon .ant-notification-notice-description {
    margin-left: 0;
   }

  .ant-input:hover {
    border-color: #8a8d91;
  }

  .ant-input:focus,
  .ant-input:active {
    border-color: #1876f2;
    outline: 0;
    box-shadow: none;
  }

  .activeProfileHeaderRoute {
      button {
        color: #1876f2;
      }
    &::after {
        width: 90%;
        margin: 0 auto;
        height: 2px;
        display: block;
        background: ${props => props.theme.appTextColor};
        content: "";
    }
  }
  .ant-upload-list, .ant-upload-list-text {
    display: none !important;
  }
  .ant-notification-notice-with-icon .ant-notification-notice-message {
    margin-left: 0 !important;
    margin-bottom: 0 !important;
  }
  .ant-notification-notice-close {
    right: 8px !important;
  }
`;
