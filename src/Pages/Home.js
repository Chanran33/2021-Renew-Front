import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../src/Components/Nav/NavBar";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div>
      <NavBar />

      <div class="Home_body">
        <div class="social">
          <img src="image/facebook_logo.png" alt="facebook_logo" />
          <br />
          <img src="image/twitter_logo.png" alt="twitter_logo" />
          <br />
          <img src="image/instagram_logo.png" alt="instagram_logo" />
        </div>

        <div class="welcome">
          <h1>
            Go green by
            <br /> Upcycling
          </h1>
          <p>share Upcycling events with your neighbors and save the earth!</p>
          <div class="welcome_buttons">
            <Link to="/listview">
              <button>Contents</button>
            </Link>
            <Link to="/createevent">
              <button>Create event</button>
            </Link>
            <Link to="/mapview">
              <img src="image/MapTrifold.png" alt="map" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
