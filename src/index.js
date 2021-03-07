import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./Routers";

ReactDOM.render(
  <Router>
    <Routers />
  </Router>,
  document.getElementById("root")
);
