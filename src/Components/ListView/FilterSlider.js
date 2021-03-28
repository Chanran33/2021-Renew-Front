import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Filter from "./filter/Filter";
import Tag from "./filter/Tag";
import Platform from "./filter/Platform";

function FilterSlider() {
  return (
    <FilterSliderStyle>
      <Filter></Filter>
      <Tag></Tag>
      <Platform></Platform>
    </FilterSliderStyle>
  );
}

export default FilterSlider;

// Style
const FilterSliderStyle = styled.div`
  display: inline-block;
  height: 100%;
  width: 350px;
  text-align: center;
  z-index: 1;
  top: 0;
  left: 80px;
  padding-left: 15px;
  padding-top: 10px;
  background-color: #ffffff;
  position: fixed;
`;
