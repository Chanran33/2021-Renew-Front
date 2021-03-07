import React from "react";
import SideBar from "../Components/Nav/SideBar";
// import InfoContainer from "../Components/MapView/InfoContainer";
import MapContainer from "../Components/MapView/MapContainer";
import styled from "styled-components";

const MapView = () => {
  return (
    <Container>
      <SideBar />
      {/* <InfoContainer /> */}
      <MapContainer />
    </Container>
  );
};

export default MapView;

const Container = styled.div``;
