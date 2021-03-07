import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { IoRestaurant } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { RiCoinsFill } from "react-icons/ri";

const CardviewItem = () => {
  // const [StoreName, setStoreName] = useState("");

  return (
    <CardviewItemContainer>
      <div className="thumbnail">
        <img
          src="./images/store1.jpg"
          alt="store detail img"
          title="detail img"
        />
        <button className="heart">찜하기</button>
      </div>
      <div className="contents">
        <div>
          <span className="heading">
            <strong>The Store Name</strong>
          </span>
          <span className="icons">
            <RiCoinsFill className="icon" />
            <FaWifi className="icon" />
            <IoRestaurant className="icon" />
          </span>
        </div>
        <div className="starrating">
          <AiFillStar className="star" />
          <span className="rating">4.25</span>
        </div>
        <p className="description">
          Here is a description about the store... (Flea Market, Share, Class,
          Store and more...)
        </p>
      </div>
    </CardviewItemContainer>
  );
};

// Style
const CardviewItemContainer = styled.div`
  display: block;
  width: 375px;
  height: 315px;
  background-color: #dad7cd;
  color: #081f32;
  border-radius: 4px;

  .thumbnail {
    width: 375px;
    height: 200px;
    margin: 0px;
    background-color: gray;
    border-radius: 4px;
    img {
      display: block;
      opacity: 0.2;
    }
  }

  .contents {
    width: 355px;
    height: 100px;
    padding: 10px;
    .heading {
      font-family: DM Serif Display;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 25px;
      letter-spacing: 0.01em;
      color: #081f32;
    }
    .icons {
      float: right;
      color: #007ae9;
      .icon {
        width: 24px;
        height: 24px;
        float: right;
        margin-left: 0.4em;
      }
    }
    .starrating {
      height: 25px;
      .star {
        width: 20px;
        height: 20px;
        color: #ffc22b;
      }
      .rating {
        font-family: DM Serif Display;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 25px;
        letter-spacing: 0.01em;
        color: #000000;
      }
    }
    .description {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      margin: 0;
      color: #6e798c;
      white-space: pre-wrap;
      overflow: hidden;
    }
  }
`;

export default CardviewItem;
