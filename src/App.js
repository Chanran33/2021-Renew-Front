import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import About from './Pages/About';
import CreateEvent from './Pages/CreateEvent';
import './Styles/App.css';


const App = () => {
  return (
    <div>
      <div class="header">
        <Link class="logo_link" to="/"><img class="logo" src="image/home_logo2.png" alt="logo"/></Link>
        <nav>
          <ul class="nav_links">
            <li class="li"><Link class="link" to="/">Home</Link></li>
            <li class="li"><Link class="link" to="/about">About</Link></li>
          </ul>
        </nav>
        <Link to="/signin"><button>Login →</button></Link>
      </div>

      <div class="route">
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/signin" component={SignIn} />
        <Route path="/createEvent" component={CreateEvent} />
      </div>
    </div>
  );
};

export default App;