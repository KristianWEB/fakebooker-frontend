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
  box-sizing: border-box;
  }

   html, body {
    font-size: 62.5%;
    box-sizing: border-box;
   } 
   body {
     background-color: #f0f2f5;
   }
   #root {
       width: 100%;
       height: 100%;
   }

    a {
      text-decoration: none;
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

  .profileFriendPopup {
    &-content {
    width: 200px !important;
    display: flex;
    box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2),0 2px 4px 0 rgba(0, 0, 0, 0.1),inset 0 0 0 1px rgba(255, 255, 255, 0.5) !important;
    border-radius: 8px;
    border: none !important;
    padding: 8px !important;
    transform: translateX(-20%);
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
