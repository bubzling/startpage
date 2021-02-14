import React from "react";
import ReactDOM from "react-dom";

import App from "./app/AppContainer";

import { ThemeProvider } from "@material-ui/core";
import Theme from "./theme";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
