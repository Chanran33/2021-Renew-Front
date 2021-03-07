import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import CreateEvent from "./Pages/CreateEvent";
import EventDetail from "./Pages/EventDetail";
import MapView from "./Pages/MapView";
import MyPage from "./Pages/MyPage";
import ListView from "./Pages/ListView";
import "./Styles/Router.css";

function Routers({ location }) {
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames="fade"
      >
        <section className="route-section">
          <Switch location={location}>
            <Route path={process.env.PUBLIC_URL + "/"} component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/createEvent" component={CreateEvent} />
            <Route path="/eventdetail" component={EventDetail} />
            <Route path="/mapview" component={MapView} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/listview" component={ListView} />
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default withRouter(Routers);
