import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InstaCard from "../Cards/InstaCard";
import ContentSwiper from "./ContentSwiper";

function Content() {
  return (
    <ContentStyle>
      <ContentSwiper></ContentSwiper>
      {/* <InstaCard img="https://think.kera.org/wp-content/uploads/2020/05/shutterstock_750703924-800x500.jpg" title="hi" author="jiyeon"></InstaCard> */}
    </ContentStyle>
  );
}

export default Content;

// Style
const ContentStyle = styled.div`
  display: inline-block;
  height: 100%;
  width: -webkit-fill-available;
  text-align: center;
  z-index: 1;
  top: 0;
  left: 0;
  padding-top: 25px;
  background-color: #dad7cd;
  position: fixed;
  left: 480px;
`;
