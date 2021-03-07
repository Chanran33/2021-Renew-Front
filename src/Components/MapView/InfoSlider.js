import React from "react";
import styled from "styled-components";
import SearchBar from "../Nav/SearchBar";
import CardviewItem from "../Cards/CardviewItem";

const InfoSlider = () => {
  return (
    <Container>
      <SearchBar />
      <CardviewItem />
    </Container>
  );
};

export default InfoSlider;

const Container = styled.div`
  display: inline-block;
  height: 100%;
  width: 400px;
  text-align: center;
  z-index: 1;
  top: 0;
  left: 0;
  padding-top: 25px;
  background-color: #ffffff;
  position: fixed;
  left: 80px;
`;
