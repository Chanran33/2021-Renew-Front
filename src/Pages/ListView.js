import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import Content from '../Components/ListView/Content';
import FilterSlider from '../Components/ListView/FilterSlider';
import SideBar from '../Components/Nav/SideBar';

const DetailView = () => {
  return (
    <Fragment>
      <SideBar></SideBar>
      <FilterSlider></FilterSlider>
    </Fragment>
  );
};

export default DetailView;
