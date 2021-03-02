import React from 'react';
import '../Styles/Home.css';

const Home = () => {
    return (
        <div class="Home_body">
            <div class="social">
                <img src="image/facebook_logo.png" alt="facebook_logo" />
                <img src="image/twitter_logo.png" alt="twitter_logo" />
                <img src="image/instagram_logo.png" alt="instagram_logo" />
            </div>

            <div class="welcome">
                <h1>Go green by Upcycling</h1>
                <p>share Upcycling events with your neighbors and save the earth!</p>
                <div>
                    <button>Contents</button>
                    <button>Create event</button>
                    <img src="image/MapTrifold.png" alt="map"/>
                </div>
            </div>
        </div>
    );
};

export default Home;