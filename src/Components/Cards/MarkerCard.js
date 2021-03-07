import React from "react";
import styled from "styled-components";

const MarkerCard = () => {
  return (
    <MarkerCardContainer>
      <MarkerImg>
        <div className="thumbnail">
          <img
            src="images/store1.jpg"
            alt="store detail img"
            title="detail img"
          />
        </div>
      </MarkerImg>
      <MarkerInfo>
        <span className="heading">
          <strong>The Store Name</strong>
        </span>
        <p className="address">
          Here is the address ... (33, Samyang-ro 144-gil, Dobong-gu, Seoul,
          Republic of Korea)
        </p>
      </MarkerInfo>
    </MarkerCardContainer>
  );
};

// Style
const MarkerCardContainer = styled.div`
  display: block;
  width: 375px;
  border-radius: 12px;
  background-color: #dad7cd;
  padding: 0.5rem;
`;

const MarkerImg = styled.div`
  background-color: gray;
  border-radius: 12px;
  margin-bottom: 0.5rem;
  .thumbnail {
    width: 4rem;
    height: 11rem;
    background-color: gray;
    border-radius: 12px;
    img {
      display: block;
      opacity: 0.2;
    }
  }
`;

const MarkerInfo = styled.div`
  background-color: #eeeeee;
  border-radius: 12px;
  padding: 0.5rem;
  .heading {
    font-family: DM Serif Display;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 25px;
    letter-spacing: 0.01em;
    color: #081f32;
  }
  .address {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #6e798c;
    white-space: pre-wrap;
    overflow: hidden;
  }
`;

export default MarkerCard;
