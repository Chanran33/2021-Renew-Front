import React from "react";
import styled from "styled-components";
import { IoSearch, IoClose } from "react-icons/io5";
import AutoComplete from "react-google-autocomplete";

// function component
const SearchBar = () => {
  const onPlaceSelected = (place) => {
    console.log("plc", place);

    const address = place.formatted_address,
      addressArray = place.address_components,
      city = this.getCity(addressArray),
      area = this.getArea(addressArray),
      state = this.getState(addressArray),
      newLat = place.geometry.location.lat(),
      newLng = place.geometry.location.lng();

    // setState
    this.setState({
      address: address ? address : "",
      area: area ? area : "",
      city: city ? city : "",
      state: state ? state : "",
      markerPosition: {
        lat: newLat,
        lng: newLng,
      },
      mapPosition: {
        lat: newLat,
        lng: newLng,
      },
    });
  };
  return (
    <Container>
      <form>
        <div className="searchbar">
          <button type="submit">
            <IoSearch size="32" />
          </button>

          {/* <input placeholder="Search for the Store" /> */}
          <AutoComplete
            style={{
              width: "100%",
              height: "40px",
              paddingLeft: 16,
              marginTop: 2,
              marginBottom: "2rem",
            }}
            onPlaceSelected={onPlaceSelected}
            types={["(regions)"]}
          />

          <button type="reset">
            <IoClose size="32" />
          </button>
        </div>
      </form>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  display: block;
  background: #fff;
  width: 360px;
  border: 0.2rem solid lightgrey;
  border-radius: 6px;
  margin: 0 auto;

  /* height: 70px; */

  input {
    width: 260px;
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.5;
    color: black;
    vertical-align: middle;

    &::placeholder {
      color: #dee2e6;
    }
    // 버튼을 제외한 영역 모두 차지
    flex: 1;
  }

  button {
    // 기본 스타일 초기화
    background: none;
    outline: none;
    border: none;
    background: white;
    color: #588157;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    font-size: 1.2rem;
    display: inline;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
    vertical-align: middle;

    &:hover {
      color: #344e41;
    }
  }
`;
