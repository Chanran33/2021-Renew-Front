import React from "react";
import SideBar from "../Components/Nav/SideBar";
// import InfoContainer from "../Components/MapView/InfoContainer";
import InfoSlider from "../Components/MapView/InfoSlider";
import MapContainer from "../Components/MapView/MapContainer";

import styled from "styled-components";

const MapView = () => {
  return (
    <Container>
      <SideBar />
      {/* <InfoContainer /> */}
      <InfoSlider />
      <MapContainer />
    </Container>
  );
};

export default MapView;

const Container = styled.div``;
