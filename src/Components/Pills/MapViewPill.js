import React from "react";
import styled from "styled-components";
// import store from "../MapView/MapImages/map_store.png";

const categories = [
  { name: "FLEA MARKET" },
  { name: "SHARE" },
  { name: "CLASS" },
  { name: "STORE" },
];
const MapViewPill = () => {
  return (
    <PillContainer>
      {categories.map((c) => (
        <button key={c.name} className="pillButton" type="button">
          <ul>
            <li>
              <img src={"../MapView/MapImages/map_store.png"} alt="아이콘" />
              {c.name}
            </li>
          </ul>
        </button>
      ))}
    </PillContainer>
  );
};

export default MapViewPill;

const PillContainer = styled.div`
  display: flex;
  width: 200px;
  height: 60px;
  background-color: #3a5a40;
  border-radius: 24px;

  .pillButton {
    background: none;
    outline: none;
    border: none;
    color: white;
    background-color: none;
    font-style: bold;
    font-size: 24px;
    cursor: pointer;

    ul,
    li {
      list-style: none;
      /* margin-left: 0; */

      img {
        width: 35px;
        height: 35px;
        margin: 0.5rem;
      }
    }
  }
`;
