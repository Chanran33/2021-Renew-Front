import React from "react";
import SideBar from "../Components/Nav/SideBar";
import NavBar from "../Components/Nav/NavBar";
import styled from "styled-components";

const ListView = () => {
  return (
    <ContainerStyle>
      <SideBar />
      여기는 ListView Page~!
    </ContainerStyle>
  );
};

export default ListView;

const ContainerStyle = styled.div`
  display: inline;
`;
