import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import Routes from "./routes/Routes";
import { GlobalStyle } from "./globalStyles/index";
import theme from "./globalStyles/theme";
import "react-toastify/dist/ReactToastify.css";
import { OPEN_CHAT } from "./utils/queries";
import SingleChat from "./components/Message/SingleChat";

const App = () => {
  const { data: chatData } = useQuery(OPEN_CHAT);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
      <ToastContainer draggable={false} />
      {chatData.chat.visible && <SingleChat creator={chatData.chat.user} />}
    </ThemeProvider>
  );
};

export default App;
