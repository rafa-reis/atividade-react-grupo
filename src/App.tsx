import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./config/GlobalStyle";
import ThemeDefault from "./config/theme/ThemeDefault";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <ThemeProvider theme={ThemeDefault.palette}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
