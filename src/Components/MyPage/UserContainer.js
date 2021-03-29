// UserContainer.js 구버전
import React from "react";
import InstaCard from "../../Components/Cards/InstaCard";
import Favorite3 from "./MyPageImages/3.png";
import Favorite7 from "./MyPageImages/7.png";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import styled from "styled-components";

const UserContainer = () => {
  return (
    <Container>
      <div class="box">
        <div class="user-box">
          <div id="userinfo">
            <img
              id="profile"
              src="image/profile_light.png"
              alt="profile_default"
            />
            <div id="detail">
              <span id="email">
                <MailOutlineIcon className="icon" />
                g2r@google.com
              </span>
            </div>
          </div>
        </div>

        <div className="farvorite-box">
          <span class="label">
            <FavoriteIcon className="icon" />
            YOUR FAVORITE
            <FavoriteIcon className="icon" />
          </span>
          <div id="favorite">
            <InstaCard img={Favorite3} author="DIY Clothes" />
            <InstaCard img={Favorite7} author="Orgaric Beddings" />
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
  display: flex;
  margin-left: 80px;
  height: 100%;
  /* margin: 0 auto; */
  /* top: 0;
  left: 0; */

  .box {
    /* text-align: right; */
    color: #344e41;
    align-items: center;
    margin: 50px;
    float: left;
    margin-left: 300px;

    .farvorite-box {
      margin-top: 50px;
      .label {
        font-size: 20px;
        margin-bottom: 10px;

        /* vertical-align: middle; */
      }
      #favorite {
        width: 60vw;
        height: 560px; // 직접 수정함, 높이 조절 필요
        /* text-align: right; */
        background-color: white;
        /* margin: auto 0px; */
        display: flex;
        justify-content: center;
      }
    }

    .user-box {
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
          vertical-align: middle;
        }
      }
    }
  }

  .icon {
    vertical-align: middle;
    margin: 0px 4px;
  }
`;
