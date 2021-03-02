import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import './Styles/App.css';

const App = () => {
  return (
    <div>
      <div class="header">
        <img class="logo" src="image/home_logo2.png" alt="logo"/>
        <nav>
          <ul class="nav_links">
            <li class="li"><Link class="link" to="/">Home</Link></li>
            <li class="li"><Link class="link" to="/about">About</Link></li>
          </ul>
        </nav>
        <Link to="/signin"><button>Login-></button></Link>
      </div>

      <div class="route">
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </div>
  );
};

export default App;