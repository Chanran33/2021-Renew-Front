import React from "react";
import styled from "styled-components";
import SearchBar from "../Nav/SearchBar";
// import CardviewItem from "../Cards/CardviewItem";

const InfoContainer = () => {
  return (
    <Container>
      <SearchBar />
      {/* <CardviewItem className="cardview" />  */}
      {/* <CardviewItem className="cardview" /> */}
    </Container>
  );
};

export default InfoContainer;

const Container = styled.div`
  margin-left: 80px; // 사이드바 간격 확보
  background-color: #a3b18a;

  /* display: inline-block; */
  /* width: 400px;
  height: 700px; */
  /* align-items: center; */

  /* .cardview {
    margin: 10px;
  } */
`;
