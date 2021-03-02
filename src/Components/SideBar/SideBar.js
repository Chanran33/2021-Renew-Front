import React from "react";
// import SlidingPanel from "react-sliding-side-panel";
import { Link } from "react-router-dom";
import SideBarItem from "./SideBarItem";
import styled from "styled-components";

function SideBar() {
  const menus = [
    { name: "logo" },
    { name: "home", path: "/" },
    { name: "mypage", path: "/mypage" },
  ];

  return (
    <SideBarStyle>
      <div>
        {menus.map((menu, index) => {
          return (
            <Link to={menu.path} key={index}>
              <SideBarItem menu={menu} />
            </Link>
          );
        })}
      </div>
    </SideBarStyle>
  );
}

export default SideBar;

// Style
const SideBarStyle = styled.div`
  display: flex;
  background-color: #dad7cd;
  width: "10vw";
`;
