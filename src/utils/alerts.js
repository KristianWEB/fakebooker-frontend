import React from "react";
import { toast, Slide } from "react-toastify";
import Notification from "../components/Notification/Notification";
import { CloseContainer } from "../components/Post/CreatePostActive.styles";
import { ReactComponent as CloseBtn } from "../assets/icons/close.svg";

// eslint-disable-next-line import/prefer-default-export
export const notificationAlert = notification => {
  toast(
    <div style={{ padding: "8px" }}>
      <Notification notification={notification} alert />
    </div>,
    {
      position: toast.POSITION.BOTTOM_LEFT,
      hideProgressBar: true,
      autoClose: 5000,
      className: "notificationToast",
      transition: Slide,
      closeButton: (
        <CloseContainer
          style={{ position: "absolute", right: "12px", top: "12px" }}
        >
          <CloseBtn width="15" height="15" fill="#62626a" />
        </CloseContainer>
      )
    }
  );
};
