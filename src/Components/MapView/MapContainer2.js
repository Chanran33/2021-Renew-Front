import React from "react";
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
import AutoComplete from "react-google-autocomplete";
import CategoryPill from "./filter/CategoryPill";
import classIcon from "../MapView/MapImages/map_class.png";
import shareIcon from "../MapView/MapImages/map_share.png";
import storeIcon from "../MapView/MapImages/map_store.png";
import fleamarketIcon from "../MapView/MapImages/map_fleamarket.png";
// import { Descriptions } from "antd";

Geocode.setApiKey("AIzaSyCbEYP93AgVjmUf9Eea7Qm9O6uWW3f33-A");

// Map
class MapContainer2 extends React.Component {
  // state
  state = {
    address: "Hi! Google Map~",
    city: "",
    area: "",
    state: "",
    zoom: 14,
    height: "100vh",
    width: "100vw",
    mapPosition: {
      lat: 33.50850402133668,
      lng: 126.49315204505436,
    },
    markerPosition: {
      lat: 33.50850402133668,
      lng: 126.49315204505436,
    },
  };

  // GeoJSON : Places
  places = [
    {
      id: 1,
      title: "DIY old clothes!",
      date: "2021-09-27",
      price: "$10",
      category_id: "1",
      description: "Upcycling fashion class",
      content:
        "You can make your own trendy clothes from clothes that you tried to give away.",
      lat: "40.772122070111436",
      lng: "-73.9658119935187",
    },
    {
      id: 2,
      title: "Glass Jars to a flowr pot",
      price: "$10",
      date: "2021-06-19",
      category_id: "1",
      description: "Flower pot class, no supplies to prepare",
      content:
        "Make your house greener by growing plants in a flower pot you made",
      lat: "40.778465753360834",
      lng: "-73.97965343470341",
    },
    {
      id: 3,
      title: "Share unworn clothes",
      price: "$10",
      date: "2021-03-19",
      category_id: "2",
      description: "Unworn clothes : size L",
      content:
        "There are many clothes I haven't worn. I would like to share it with the community",
      lat: "40.77970876115299",
      lng: "-73.97581251177199",
    },
    {
      id: 4,
      title: "Share glass jars",
      price: "$10",
      date: "2021-02-18",
      category_id: "2",
      description: "glass jars for diy or interior",
      content:
        "I have 100 glass jar collection for interior or other usage. It's free, you can make beautiful diy materials out of it",
      lat: "40.77751723308487",
      lng: "-73.96054435455125",
    },
    {
      id: 5,
      title: "Cloth shopping bag",
      price: "$10",
      date: "2021-06-19",
      category_id: "1",
      description: "make shopping bag out of leftover cloth",
      content:
        "You can make a unique cloth shopping bag out of clothes you don't wear",
      lat: "40.77353070539364",
      lng: "-73.9643407335341",
    },
    {
      id: 6,
      title: "reusable containers",
      price: "$10",
      date: "2021-06-19",
      category_id: "2",
      description: "unused reusable containers",
      content:
        "'I would like to share reusable containers I bought and didn't use",
      lat: "40.7712690112203",
      lng: "-73.96094930164276",
    },
    {
      id: 7,
      title: "cloth bowl cover",
      price: "$10",
      date: "2021-06-19",
      category_id: "1",
      description: "Easy and short class making cloth bowl covers",
      content: "You can make a cloth bowl cover out of remnant cloths",
      lat: "40.77452735974676",
      lng: "-73.9787163556561",
    },
    {
      id: 8,
      title: "Green flea market",
      price: "$10",
      date: "2021-06-19",
      category_id: "3",
      description: "open on every sunday",
      content: "flea market selling upcycled, recycled and zerowaste products",
      lat: "40.775140678068944",
      lng: "-73.97765336954089",
    },
    {
      id: 9,
      title: "RE:NEW flea market",
      price: "$10",
      date: "2021-06-19",
      category_id: "3",
      description: "Many great works displayed",
      content:
        "We sell great quality of environmental friendly products. The products are made by talented local residents",
      lat: "40.77238070103168",
      lng: "-73.96094930201633",
    },
    {
      id: 10,
      title: "forest flea market",
      price: "$10",
      date: "2021-06-19",
      category_id: "3",
      description: "we sell gardening implements",
      content:
        "'forest flea market sells upcycled, recycled gardening implement",
      lat: "40.76766547502756",
      lng: "-73.97006061157518",
    },
    {
      id: 11,
      title: "Polar bear flea market",
      price: "$10",
      date: "2021-06-19",
      category_id: "1",
      description: "Charity for saving polar bears",
      content:
        "We open our flea market to sell environmental friendly products. This flea market is a charity for saving polar bears due to global warming",
      lat: "40.7610422351247",
      lng: "-73.97847391372218",
    },
    {
      id: 12,
      title: "packaging class",
      price: "$10",
      date: "2021-06-19",
      category_id: "1",
      description: "eco friendly present packaging",
      content:
        "you can learn zerowaste packaging ideas in our class. Go green by attending to the class!",
      lat: "40.75917282942591",
      lng: "-73.97444079870363",
    },
    {
      id: 13,
      title: "zerowaste flea market",
      price: "$10",
      date: "2021-06-19",
      category_id: "3",
      description: "sells only zerowaste products",
      content:
        "Our market sell various kinds of zero waste products you cant see any where'",
      lat: "40.756800971097974",
      lng: "-73.98172437748332",
    },
    {
      id: 14,
      title: "diy class",
      price: "$10",
      date: "2021-06-19",
      category_id: "1",
      description: "diy what you want!",
      content:
        "You can learn many ways to diy your product by unworn cloth or materials'",
      lat: "40.76288709310616",
      lng: "-73.9801872500516",
    },
    {
      id: 15,
      title: "sustainable flea market",
      price: "$10",
      date: "2021-06-19",
      category_id: "3",
      description: "come and grab one",
      content: "we only sell sustainable products for the envrionmen",
      lat: "40.759500102666564",
      lng: "-73.97110422431868",
    },
    {
      id: 16,
      title: "Share unworn clothes",
      price: "$10",
      date: "2021-06-19",
      category_id: "2",
      description: "Unworn clothes : size L",
      content:
        "There are many clothes I haven't worn. I would like to share it with the community",
      lat: "40.7602410215727",
      lng: "-73.97837064490501",
    },
  ];

  // LifeCycle
  componentDidMount() {
    // 1
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState(
          {
            mapPosition: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            markerPosition: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          },
          () => {
            Geocode.fromLatLng(
              position.coords.latitude,
              position.coords.longitude
            ).then(
              (response) => {
                console.log(response);
                const address = response.results[0].formatted_address,
                  addressArray = response.results[0].address_components,
                  city = this.getCity(addressArray),
                  area = this.getArea(addressArray),
                  state = this.getState(addressArray);
                console.log("city", city, area, state);
                this.setState({
                  address: address ? address : "",
                  area: area ? area : "",
                  city: city ? city : "",
                  state: state ? state : "",
                });
              },
              (error) => {
                console.error(error);
              }
            );
          }
        );
      });
    } else {
      console.error("Geolocation is not supported by this browser!");
    }
  }

  // function
  getCity = (addressArray) => {
    let city = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        "administrative_area_level_2" === addressArray[i].types[0]
      ) {
        city = addressArray[i].long_name;
        return city;
      }
    }
  };

  getArea = (addressArray) => {
    let area = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if (
            "sublocality_level_1" === addressArray[i].types[j] ||
            "locality" === addressArray[i].types[j]
          ) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
  };

  getState = (addressArray) => {
    let state = "";
    for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
        if (
          addressArray[i].types[0] &&
          "administrative_area_level_1" === addressArray[i].types[0]
        ) {
          state = addressArray[i].long_name;
          return state;
        }
      }
    }
  };

  onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat();
    let newLng = event.latLng.lng();

    // Geocode: lat, lng를 이용해 address, city, area, state를 알기 위함
    Geocode.fromLatLng(newLat, newLng).then(
      (response) => {
        console.log("response", response);

        // information
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray);

        //setState
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
      },
      (error) => {
        console.error(error);
      }
    );
  };

  onPlaceSelected = (place) => {
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

  // render method
  render() {
    // MapWithAMarker Component
    const MapWithAMarker = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={this.state.zoom}
          defaultCenter={{
            lat: this.state.mapPosition.lat,
            lng: this.state.mapPosition.lng,
          }}
        >
          <Marker
            draggable={true}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: this.state.markerPosition.lat,
              lng: this.state.markerPosition.lng,
            }}
          >
            {/* Add draggable & onDragEnd attribute */}
            <InfoWindow
              position={{
                lat: this.state.markerPosition.lat + 0.001,
                lng: this.state.markerPosition.lng,
              }}
            >
              <div>{this.state.address}</div>
            </InfoWindow>
          </Marker>

          {/* {this.places.map((place) => {
            console.log("llll" + place.lat);
            return (
              <Marker
                key={place.id}
                draggable={true}
                onDragEnd={this.onMarkerDragEnd}
                position={{
                  lat: place.lat,
                  lng: place.lng,
                }}
                icon={fleamarketIcon}
                style={{ zIndex: 5 }}
              />
            );
          })} */}

          {/* Places */}
          <Marker
            id={1}
            position={{
              lat: 40.772122070111436,
              lng: -73.9658119935187,
            }}
            icon={classIcon}
          ></Marker>
          <Marker
            id={2}
            position={{
              lat: 40.778465753360834,
              lng: -73.97965343470341,
            }}
            icon={classIcon}
          ></Marker>
          <Marker
            id={3}
            position={{
              lat: 40.77970876115299,
              lng: -73.97581251177199,
            }}
            icon={shareIcon}
          >
            {/* <InfoWindow
              position={{
                lat: 40.77970876115299 + 0.001,
                lng: -73.97581251177199,
              }}
            >
              <div>
                <span id="title">Share unworn clothes</span>
                <span id="description">Unworn clothes : size L</span>
              </div>
            </InfoWindow> */}
          </Marker>
          <Marker
            id={4}
            position={{
              lat: 40.77751723308487,
              lng: -73.96054435455125,
            }}
            icon={shareIcon}
          ></Marker>
          <Marker
            id={5}
            position={{
              lat: 40.77353070539364,
              lng: -73.9643407335341,
            }}
            icon={shareIcon}
          ></Marker>
          <Marker
            id={6}
            position={{
              lat: 40.7712690112203,
              lng: -73.96094930164276,
            }}
            icon={shareIcon}
          ></Marker>
          <Marker
            id={7}
            position={{
              lat: 40.77452735974676,
              lng: -73.9787163556561,
            }}
            icon={classIcon}
          ></Marker>
          <Marker
            id={8}
            position={{
              lat: 40.775140678068944,
              lng: -73.97765336954089,
            }}
            icon={fleamarketIcon}
          ></Marker>
          <Marker
            id={9}
            position={{
              lat: 40.77238070103168,
              lng: -73.96094930201633,
            }}
            icon={fleamarketIcon}
          ></Marker>
          <Marker
            id={10}
            position={{
              lat: 40.76766547502756,
              lng: -73.97006061157518,
            }}
            icon={fleamarketIcon}
          ></Marker>
          <Marker
            id={11}
            position={{
              lat: 40.7610422351247,
              lng: -73.97847391372218,
            }}
            icon={classIcon}
          ></Marker>
          <Marker
            id={12}
            position={{
              lat: 40.75917282942591,
              lng: -73.97444079870363,
            }}
            icon={classIcon}
          ></Marker>
          <Marker
            id={13}
            position={{
              lat: 40.756800971097974,
              lng: -73.98172437748332,
            }}
            icon={fleamarketIcon}
          ></Marker>
          <Marker
            id={14}
            position={{
              lat: 40.76288709310616,
              lng: -73.9801872500516,
            }}
            icon={classIcon}
          ></Marker>
          <Marker
            id={15}
            position={{
              lat: 40.759500102666564,
              lng: -73.97110422431868,
            }}
            icon={fleamarketIcon}
          ></Marker>
          <Marker
            id={16}
            position={{
              lat: 40.7602410215727,
              lng: -73.97837064490501,
            }}
            icon={shareIcon}
          ></Marker>

          {/* <Marker positon={{ lat: this.places.lat, lng: this.places.lng }} /> */}
        </GoogleMap>
      ))
    );

    // return method
    // Title, Descriptions, MapWithAMarker, Auto-Compelete Serach
    return (
      <div>
        {/* <Descriptions bordered>
          <Descriptions.Item label="Serach">
            <AutoComplete
              onPlaceSelected={this.onPlaceSelected}
              types={["(regions)"]}
            />
          </Descriptions.Item>
          <Descriptions.Item label="Category">
            <CategoryPill />
          </Descriptions.Item>
        </Descriptions> */}
        <AutoComplete
          className="autocomplete"
          style={{
            width: "100vw",
            height: "40px",
            paddingLeft: 16,
            marginTop: 4,
            marginBottom: 4,
            marginLeft: 84,
            marginRight: 4,
          }}
          onPlaceSelected={this.onPlaceSelected}
          types={["(regions)"]}
        />
        <CategoryPill />
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCbEYP93AgVjmUf9Eea7Qm9O6uWW3f33-A&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{
                height: this.state.height,
                width: this.state.width,
                paddingLeft: 80,
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default MapContainer2;
