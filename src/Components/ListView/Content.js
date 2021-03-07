import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BlogCard from "../Cards/BlogCard";
import InstaCard from "../Cards/InstaCard";
import YoutubeCard from "../Cards/YoutubeCard";
import ContentSwiper from "./ContentSwiper";
import trending from "./svg/trending.svg";
import youtubesvg from "./svg/youtube.svg";
import blog from "./svg/chrome.svg"
import insta from "./svg/instagram.svg"
import axios from 'axios';

function Content() {
  const [loading, setLoading] = useState(false);
  const [youtube, setYoutube] = useState(null);	

  useEffect (()=> {
    const fetchData = async () => {
      setLoading(true);
      try{
        const response = await axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=zerowaste&key=AIzaSyAP24qkJhvrSjDXJvtmn1N0u7Y9qnCoJmQ&maxResults=50');
        console.log(response.data.items)
        setYoutube(response.data.items);
      } catch(e){
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
    },[]);

    if(loading){
      return <div>대기 중...</div>
    }
    if(!youtube){
      return null;
    }

  return (
        <ContentStyle>
          <div class="platform">
            <img src={trending}/>
            <h1>Trending Contents</h1>
          </div>
          <ContentSwiper></ContentSwiper>  
          <div class="scrollcontent">
              <div class="platform">
                <img src={youtubesvg}/>
                <h1>Youtube Videos</h1>
              </div>
              <div style={{ overflow: "auto", display: "flex", margin: "15px" }}>{youtube.map((youtube, i) => {
                        return <YoutubeCard
                            key={i}
                            img ={youtube.snippet.thumbnails.medium.url}
                            title ={youtube.snippet.channelTitle} 
                            description ={youtube.snippet.description} />
                    })}</div> 
              <div class="platfrom" style={{display:"flex"}}>
                <img src={insta}/> 
                <h1>Instagram Posts</h1>
              </div>
              <div style={{ overflow: "auto", display: "flex", margin: "15px" }}>
                <InstaCard img="https://think.kera.org/wp-content/uploads/2020/05/shutterstock_750703924-800x500.jpg" title="hi" author="jiyeon"></InstaCard>
              </div> 
              <div class="platfrom">
                <img src={blog}/>
                <h1>Blog Posts</h1>
              </div>
              <div style={{ overflow: "auto", display: "flex", margin: "15px" }}>
                <BlogCard img="https://think.kera.org/wp-content/uploads/2020/05/shutterstock_750703924-800x500.jpg" title="hi" author="jiyeon"></BlogCard>
              </div> 
          </div>
          </ContentStyle>
  );
}

export default Content;

// Style
const ContentStyle = styled.div`
  position: relative;
  height: 100%;
  background-color: #dad7cd;
  left: 430px;
  h1 {
    font-weight: 100;
    font-size: 30px;
  }
  .platform {
    display:flex;
  }
  img {
    align-self: center;
    height: 50px;
  }
`;
