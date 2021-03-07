import React, { useState } from "react";

// import { AiFillStar } from "react-icons/ai";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ToggleButton from "@material-ui/lab/ToggleButton";

import styled from "styled-components";

const CardviewItem = ({ place }) => {
  const [selected, setselected] = useState(false);
  const { title, description, url, urlToImage } = place;

  return (
    <CardviewItemContainer>
      <div className="thumbnail">
        <img
          // src="?"
          alt="store detail img"
          title="detail img"
        />
      </div>

      <div className="contents">
        <div className="title">
          <ToggleButton
            className="likeBtn"
            value="check"
            selected={selected}
            onChange={() => {
              setselected(!selected);
            }}
          >
            {selected === true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </ToggleButton>
          <span className="heading">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <strong>{title}</strong>
            </a>
          </span>
          {/* <div className="starrating">
            <AiFillStar className="star" />
            <span className="rating">4.25</span>
          </div> */}
        </div>

        <p className="description">{description}</p>
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
  color: black;
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 10px;

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

    .title {
      float: left;

      .likeBtn {
        background: none;
        outline: none;
        border: none;
        color: red;
        cursor: pointer;
        vertical-align: middle; //
      }
      .heading {
        /* font-family: DM Serif Display;
        font-style: normal;
        font-weight: normal; */
        font-size: 24px;
        line-height: 25px;
        letter-spacing: 0.01em;
        color: #081f32;
        vertical-align: middle;
        a {
          text-decoration: none;
        }
      }
      /* .starrating {
        height: 25px;

        .star {
          width: 20px;
          height: 20px;
          color: #ffc22b;
          vertical-align: middle;
          margin-right: 4px;
        }
        .rating {
          font-family: DM Serif Display;
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 25px;
          letter-spacing: 0.01em;
          color: #000000;
          vertical-align: middle;
        }
      } */
    }

    .description {
      /* font-family: Open Sans;
      font-style: normal;
      font-weight: normal; */
      font-size: 16px;
      margin: 0;
      color: #6e798c;
      white-space: pre-wrap;
      overflow: hidden;
      /* align: justify; */
      float: left;
      text-align: left;
    }
  }
`;

export default CardviewItem;
