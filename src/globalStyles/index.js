import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
    ${normalize}

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
  html {
  overflow-y: scroll;
  }

   html, body {
    font-size: 62.5%;
   } 
   body {
     background-color: #f0f2f5;
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
        height: 3px;
        display: block;
        background: ${props => props.theme.primaryText};
        content: "";
    }
  }
  .ant-upload-list, .ant-upload-list-text {
    display: none !important;
  }
  .ant-notification-notice-message {
    margin-left: 0 !important;
    margin-bottom: 0 !important;
  }

   .ant-notification-notice-with-icon .ant-notification-notice-description {
    margin-left: 0;
   }

  .ant-notification-notice-close {
    right: 8px !important;
  }

  .deletePostPopup {
    &-content {
    width: 200px !important;
    display: flex;
    box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2),0 2px 4px 0 rgba(0, 0, 0, 0.1),inset 0 0 0 1px rgba(255, 255, 255, 0.5) !important;
    border-radius: 8px;
    transform: translateX(-45%);
    border: none !important;
    padding: 8px !important;
    }
  }

  .deleteCommentPopup {
    &-content {
    width: 200px !important;
    display: flex;
    box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2),0 2px 4px 0 rgba(0, 0, 0, 0.1),inset 0 0 0 1px rgba(255, 255, 255, 0.5) !important;
    border-radius: 8px;
    border: none !important;
    padding: 8px !important;
    }
  }

  .notificationPopup {
    &-content {
    width: 368px !important;
    display: flex;
    box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2),0 2px 4px 0 rgba(0, 0, 0, 0.1),inset 0 0 0 1px rgba(255, 255, 255, 0.5) !important;
    border-radius: 8px;
    transform: translateX(-45%);
    border: none !important;
    padding: 0 !important;

    @media only screen and (max-width: 400px) {
      width: 100% !important;
      left: calc(100% - 55%) !important;
      }
    }
  }

  .notificationToast {
    flex-direction: column;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2), 0 2px 12px rgba(0, 0, 0, 0.2);
  }
`;
