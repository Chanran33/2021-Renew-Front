import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const NavBar = () => {
  return (
    <NavBarStyle>
      <div class="header">
        <Link class="logo_link" to="/">
          <img class="logo" src="image/home_logo2.png" alt="logo" />
        </Link>
        <nav>
          <ul class="nav_links">
            <li class="li">
              <Link class="link" to="/">
                Home
              </Link>
            </li>
            <li class="li">
              <Link class="link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/signin">
          <button>Login →</button>
        </Link>
      </div>
    </NavBarStyle>
  );
};

export default NavBar;

// Style
const NavBarStyle = styled.div`
  .logo_link .logo {
    width: 160px;
    height: auto;
    cursor: pointer;
  }

  .logo_link {
    margin-right: auto;
  }

  li,
  .link,
  .header button {
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: #588157;
    text-decoration: none;
  }

  .header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 30px 5%;
  }

  .nav_links {
    list-style: none;
  }

  .nav_links li {
    display: inline-block;
    padding: 0px 60px;
  }

  .nav_links li .link {
    transition: all 0.3s ease 0s;
  }

  .nav_links li .link:hover {
    color: #344e41;
    text-decoration: underline;
  }

  .header button {
    padding: 9px 50px;
    background-color: #dad7cd;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    margin-left: 200px;
  }

  .header button:hover {
    background-color: #344e41;
    color: #dad7cd;
  }
`;
