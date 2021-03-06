import React from "react";
import CardviewItem from "./CardviewItem";
import styled from "styled-components";

const sampleData = {
  title: "The Store Name",
  description: "This is Amazing Store! This is WoW Store! This is Funny Store!",
  url: "/eventdetail",
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
