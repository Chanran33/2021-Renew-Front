import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
// import styled from "styled-components";

// Map
class MapContainer2 extends React.Component {
  render() {
    const MapWithAMarker = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          <Marker position={{ lat: -34.397, lng: 150.644 }} />
        </GoogleMap>
      ))
    );

    return (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCbEYP93AgVjmUf9Eea7Qm9O6uWW3f33-A&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default MapContainer2;

// Style
// const Container = styled.div`
//   background-color: #a3b18a;
//   height: 100%;
//   width: 700px;
//   left: 480px;
// `;
