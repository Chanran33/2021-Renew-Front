import React from "react";
import CardviewItem from "./CardviewItem";
import styled from "styled-components";

const sampleData = {
  title: "Store Name",
  description: "This is Amazing Store!",
  url: "https://google.com",
  urlToImage: "httpsL.via.placeholder.com/160",
};

const CardviewList = () => {
  return (
    <Container>
      <CardviewItem place={sampleData} />
      <CardviewItem place={sampleData} />
      <CardviewItem place={sampleData} />
      <CardviewItem place={sampleData} />
    </Container>
  );
};

export default CardviewList;

const Container = styled.div`
  margin-top: 25px;
`;
