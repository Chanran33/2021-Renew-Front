import React from "react";
import NavBar from "../../src/Components/Nav/NavBar";
import StartView from "../Components/Home/StartView";
import styled from "styled-components";



const Home = () => {
  return (
    <div>
      <HomeStyle>
        <NavBar />
        <StartView style={bodyStyle}/>
      </HomeStyle>
    </div>
    
  );
};

// Style
const HomeStyle = styled.div`
  background-image: url(image/background_img.png);
  background-size: 1920px 960px;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export default Home;
