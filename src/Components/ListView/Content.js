import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BlogCard from "../Cards/BlogCard";
import InstaCard from "../Cards/InstaCard";
import YoutubeCard from "../Cards/YoutubeCard";
import ContentSwiper from "./ContentSwiper";
import trending from "./svg/trending.svg";
import youtube from "./svg/youtube.svg";
import blog from "./svg/chrome.svg"
import insta from "./svg/instagram.svg"

function Content() {
  return (
        <ContentStyle>
          <div class="trending">
            <img src={trending}/>
            <h1>Trending Contents</h1>
          </div>
          <ContentSwiper></ContentSwiper>  
          <div style={{display:"flex"}}>
            <img src={youtube}/>
            <h1>Youtube Videos</h1>
          </div>
          <YoutubeCard img="https://think.kera.org/wp-content/uploads/2020/05/shutterstock_750703924-800x500.jpg" title="hi" author="jiyeon"></YoutubeCard>
          <div class="platfrom">
            <img src={insta}/>
            <h1>Instagram Posts</h1>
          </div>
          <InstaCard img="https://think.kera.org/wp-content/uploads/2020/05/shutterstock_750703924-800x500.jpg" title="hi" author="jiyeon"></InstaCard>
          <div class="platfrom">
            <img src={blog}/>
            <h1>Blog Posts</h1>
          </div>
          <BlogCard img="https://think.kera.org/wp-content/uploads/2020/05/shutterstock_750703924-800x500.jpg" title="hi" author="jiyeon"></BlogCard>
          </ContentStyle>
  );
}

export default Content;

// Style
const ContentStyle = styled.div`
  display: inline-block;
  height: 100%;
  width: -webkit-fill-available;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #dad7cd;
  position: fixed;
  left: 430px;
  .trending {
    position: absolute; top:0; left: 0;
    width: 100%;
    display: inline-flex;
  }
  h1 {
    font-weight: 100;
    font-size: 30px;
  }
  img {
    align-self: center;
    height: 50px;
  }
`;
