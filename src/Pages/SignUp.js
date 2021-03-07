import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../src/Components/Nav/NavBar";
import styled from "styled-components";
import "../Styles/SignUp.css";

const SignUp = () => {
  return (
    <div>
      <HomeStyle>
        <NavBar />
        <div className="SignUp_body">
          <div className="split SignUp_left">
            <h1>Welcome Back!</h1>
            <p>
              To Keep connected with us
              <br />
              please login with personal Info
            </p>
            <Link to="/signin">
              <button>sign up</button>
            </Link>
          </div>
          <div className="split SignUp_right">
            <h1>Create Account</h1>
            <form>
              <input type="text" placeholder="name" />
              <br />
              <input type="email" placeholder="email" />
              <br />
              <input type="password" placeholder="password" />
              <br />
              <Link to="/signin">
                <button>sign in</button>
              </Link>
            </form>
          </div>
        </div>
      </HomeStyle>
    </div>
  );
};

const HomeStyle = styled.div`
  background-image: url(image/signup_background.png);
  background-size: 1780px 960px;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export default SignUp;
