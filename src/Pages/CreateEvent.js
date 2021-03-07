import React from "react";
import NavBar from "../../src/Components/Nav/NavBar";
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
            <h1>
              Go green by <br />
              Upcycling
            </h1>
            <p>
              To Keep connected with us
              <br />
              please login with personal Info
            </p>
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
                <option selected>Event Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <br />
              <select
                className="hashtag"
                class="form-select"
                multiple
                aria-label="multiple select example"
                name="hashtag"
              >
                <option selected>usa</option>
                <option value="1">Russia</option>
                <option value="2">Belgium</option>
                <option value="3">Sweden</option>
                <option value="4"></option>
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

export default CreateEvent;
