import React from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import About from "./Pages/About";
import CreateEvent from "./Pages/CreateEvent";
import MapView from "./Pages/MapView/MapView";

import "./Styles/App.css";

const App = () => {
  return (
    <div>
      <div class="route">
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/signin" component={SignIn} />
        <Route path="/createEvent" component={CreateEvent} />
        <Route path="/mapview" component={MapView} />
      </div>
    </div>
  );
};

export default App;
