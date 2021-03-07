import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import styled from "styled-components";

const UserContainer = () => {
  return (
    <Container>
      <div>
        <div class="box">
          {/* <span class="box-text">USER INFO</span> */}
          <div id="userinfo">
            <img
              id="profile"
              src="image/profile_light.png"
              alt="profile_default"
            />
            <div id="detail">
              <span id="email">gogreen2021@google.com</span>
            </div>
          </div>
        </div>

        <div class="box">
          <FavoriteIcon />
          <span class="box-text">YOUR FAVORITE</span>
          <div id="favorite">
            {/* <span class="category">FLEA MARKET</span>
            <br />
            <span class="category">SHARE</span>
            <br />
            <span class="category">CLASS</span>
            <br />
            <span class="category">STORE</span> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserContainer;

// Style
const Container = styled.div`
  background-color: #f2f2f2;
  display: block;
  margin: 0 auto;
  margin-left: 80px;
  top: 0;
  left: 0;

  .box {
    /* text-align: right; */
    color: #344e41;
    align-items: center;
    margin: 20px;

    .box-text {
      font-size: 25px;
      padding: 20px;
    }

    #userinfo {
      width: 60vw;
      height: 300px;
      text-align: center;

      background-color: white;
      #profile {
        width: 160px;
        height: 160px;
        background-color: #dad7cd;
        border-radius: 50%;
        margin: 30px;
      }
      #detail #email {
        font-size: 20px;
      }
    }

    #favorite {
      width: 60vw;
      height: 1000px;
      /* text-align: right; */
      background-color: white;
      /* margin: auto 0px; */
    }
  }
`;
