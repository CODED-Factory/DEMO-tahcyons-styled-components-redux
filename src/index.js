/* istanbul ignore file */
import React from "react";
import axios from "axios";
import * as Sentry from "@sentry/browser";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "react-snapshot";
import { ThemeProvider } from "styled-components";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Styling
import "tachyons/css/tachyons.min.css";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

// Store
import store from "./redux";

if (process.env.NODE_ENV !== "development") {
  // Axios configuration for production
  axios.defaults.baseURL =
    process.env.CONTEXT === "production"
      ? process.env.PRODUCTION_ENDPOINT
      : process.env.STAGING_ENDPOINT;

  // Sentry configuration for production and staging
  Sentry.init({ dsn: process.env.SENTRY_DSN });
}

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
