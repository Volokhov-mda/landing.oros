import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "components/partials/App";

import "./styles/fonts.css";
import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/global.css";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
