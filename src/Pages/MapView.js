import React from "react";
import SideBar from "../Components/Nav/SideBar";
import InfoSlider from "../Components/MapView/InfoSlider";
import MapContainer2 from "../Components/MapView/MapContainer2";

import styled from "styled-components";

const MapView = () => {
  return (
    <Container>
      {/* <SideBar />
      <InfoSlider />
      <MapContainer /> */}
      <SideBar />
      <InfoSlider />
      <MapContainer2 />
    </Container>
  );
};

export default MapView;

const Container = styled.div``;
