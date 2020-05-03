import React from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import Routes from "./routes/Routes";
import { GlobalStyle } from "./globalStyles/index";
import theme from "./globalStyles/theme";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
      <ToastContainer draggable={false} />
    </ThemeProvider>
  );
};

export default App;
