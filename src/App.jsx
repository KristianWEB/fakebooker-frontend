import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";
import Routes from "./routes/Routes";
import { GlobalStyle } from "./globalStyles/index";
import theme from "./globalStyles/theme";
import { OPEN_CHAT } from "./utils/queries";
import SingleChat from "./components/Message/SingleChat";

const App = () => {
  const { data: chatData } = useQuery(OPEN_CHAT);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
      {chatData.chat.visible && <SingleChat creator={chatData.chat.user} />}
    </ThemeProvider>
  );
};

export default App;
