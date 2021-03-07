import React from "react";
import NavBar from "../../src/Components/Nav/NavBar";
import styled from "styled-components";
import "../Styles/EventDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";

const EventDetail = () => {
  return (
    <div>
      <HomeStyle>
        <NavBar />
        <div className="EventDetail_body">
          <div className="split EventDetail_left">
            <h1>Pacific Logistics Upcycling Project "RE:WORK"</h1>
            <p>We sell masks made of waste fabric</p>
            <br />
            <p></p>
          </div>
          <div className="split CreateEvent_right">
            <img
              src="https://newsimg.sedaily.com/2020/12/28/1ZBUXZXP0K_3.jpg"
              alt="폐원단 업사이클링"
            />
          </div>
        </div>
      </HomeStyle>
    </div>
  );
};

const HomeStyle = styled.div`
  background-image: url(image/event_background.png);
  background-size: 1780px 960px;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export default EventDetail;
