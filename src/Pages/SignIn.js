import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../src/Components/Nav/NavBar";
import styled from "styled-components";
import "../Styles/SignIn.css";

const SignIn = () => {
  return (
    <div>
      <HomeStyle>
        <NavBar />
        <div className="SignIn_body">
          <div className="split SignIn_left">
            <h1>Sign In</h1>
            <form>
              <input type="text" placeholder="name" />
              <br />
              <input type="password" placeholder="password" />
              <br />
              {/* <p>or</p> */}
              <Link to="/">
                <button>sign in</button>
              </Link>
            </form>
          </div>
          <div className="split SignIn_right">
            <h1>Hello, Friend!</h1>
            <p>
              Enter your personal details and
              <br />
              start journey with us
            </p>
            <Link to="/signup">
              <button>sign up</button>
            </Link>
          </div>
        </div>
      </HomeStyle>
    </div>
  );
};

// Style
const HomeStyle = styled.div`
  background-image: url(image/singin_background.png);
  background-size: 1780px 960px;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export default SignIn;
