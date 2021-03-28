import React from "react";
import NavBar from "../../src/Components/Nav/NavBar";
import { Link } from "react-router-dom";

import styled from "styled-components";
import "../Styles/CreateEvent.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateEvent = () => {
  return (
    <div>
      <HomeStyle>
        <NavBar />
        <div className="CreateEvent_body">
          <div className="split CreateEvent_left">
            <img src="image/createEvent_logo.png" />
            <br />
            <br />
            <h1>
              Go green by <br />
              Upcycling
            </h1>
          </div>
          <div className="split CreateEvent_right">
            <form>
              <input type="text" placeholder="title*" />
              <br />
              <select
                className="category"
                class="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                name="category"
              >
                <option selected>Class</option>
                <option value="1">Fleamarket</option>
                <option value="2">Share</option>
                <option value="3">Store</option>
              </select>

              <br />
              <input type="text" placeholder="Address" />
              <br />
              <input type="text" placeholder="short introduction*" />
              <br />
              <input type="text" placeholder="Choose File(up to 5)" />
              <br />
              <textarea placeholder="description" className="des" />
            </form>
            <Link to="/">
              <button className="submit__button">Submit</button>
            </Link>
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

  .submit__button {
    padding: 15px 50px;
    background-color: #3a5a40;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    margin: 0px 20px;
    font-size: 18px;
    color: #dad7cd;
  }
`;

export default CreateEvent;
