import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import App from "./App";
import theme from "./theme.js";

const Root = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="md">
      <App />
    </Container>
  </ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
