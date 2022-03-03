import React from "react";
import ReactDOM from "react-dom";

import App from "components/App";

import "./styles/fonts.css";
import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
