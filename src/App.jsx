import React from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./routes/Routes";
import { GlobalStyle } from "./globalStyles/index";
import theme from "./globalStyles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>
);

export default App;
