import React from "react";
import ReactDOM from "react-dom";
import { ClientContextProvider } from "react-fetching-library";

import { client } from "api/client";

import App from "components/partials/App";

import "./styles/fonts.css";
import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/global.css";

ReactDOM.render(
  <ClientContextProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ClientContextProvider>,
  document.getElementById("root")
);
