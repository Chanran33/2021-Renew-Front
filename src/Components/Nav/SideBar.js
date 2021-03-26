import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SideBar() {
  return (
    <SideBarStyle>
      <nav class="sidebar">
        <ul>
          <li>
            <img src="image/logo.png" alt="logo" />
          </li>
          <li class="menu">
            <Link to="/">
              <img src="image/home_dark.png" alt="logo" />
            </Link>
          </li>
          <li class="menu">
            <Link to="/MyPage">
              <img src="image/user_dark.png" alt="logo" />
            </Link>
          </li>
          <li class="menu">
            <Link to="/MapView">
              <img src="image/map_dark.png" alt="logo" />
            </Link>
          </li>
        </ul>
      </nav>
    </SideBarStyle>
  );
}

export default SideBar;

// Style
const SideBarStyle = styled.div`
  display: inline-block;
  height: 100%;
  width: 80px;
  text-align: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  padding-top: 25px;
  background-color: #dad7cd;

  ul {
    /* 블릿, 들여쓰기 없애기 */
    list-style: none;
    padding-left: 0px;
    li {
      margin-bottom: 40px;
      img {
        width: 50px;
        height: auto;
        cursor: pointer;
      }
    }
  }
`;
