import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function FilterSlider() {
  return (
    <FilterSliderStyle>
    </FilterSliderStyle>
  );
}

export default FilterSlider;

// Style
const FilterSliderStyle = styled.div`
  display: inline-block;
  height: 100%;
  width: 400px;
  text-align: center;
  z-index: 1;
  top: 0;
  left: 0;
  padding-top: 25px;
  background-color: #aad7cf;
  position: fixed;
  left: 80px;
`;
